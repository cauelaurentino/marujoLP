// ==========================================
// CONFIGURAÇÕES DA LOJA E FIREBASE
// ==========================================
const whatsappNumber = "5512988168291";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDhOdVX9pxPzOpfOJZfsfjfjh_N0AUPA9k",
    authDomain: "usemarujo-bb701.firebaseapp.com",
    projectId: "usemarujo-bb701",
    storageBucket: "usemarujo-bb701.firebasestorage.app",
    messagingSenderId: "268367201875",
    appId: "1:268367201875:web:368ca1268dcd4b92bfa8a6",
    measurementId: "G-5YTJTJC80L"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Armazenamento global em memória
let produtos = {};

// ==========================================
// SISTEMA DE CACHE LOCAL DE PRODUTOS (INSTANTÂNEO)
// ==========================================
async function carregarProdutosDoBanco() {
    const CACHE_KEY = "usemarujo_produtos_cache";
    const CACHE_TIME_KEY = "usemarujo_produtos_time";
    const TEMPO_EXPIRACAO = 15 * 60 * 1000; // 15 Minutos

    const cacheSalvo = localStorage.getItem(CACHE_KEY);
    const cacheTime = localStorage.getItem(CACHE_TIME_KEY);
    const agora = Date.now();

    // Se o cache existir e for recente, carrega instantaneamente
    if (cacheSalvo && cacheTime && (agora - parseInt(cacheTime, 10) < TEMPO_EXPIRACAO)) {
        try {
            produtos = JSON.parse(cacheSalvo);
            inicializarLoja();
            return;
        } catch (e) {
            console.warn("Cache corrompido, buscando dados novos do banco...");
        }
    }

    // Se o cache expirou ou não existe, consulta o Firestore
    try {
        const querySnapshot = await getDocs(collection(db, "produtos"));
        produtos = {};
        querySnapshot.forEach((docSnapshot) => {
            produtos[docSnapshot.id] = docSnapshot.data();
        });

        // Grava no cache do navegador
        localStorage.setItem(CACHE_KEY, JSON.stringify(produtos));
        localStorage.setItem(CACHE_TIME_KEY, agora.toString());

        inicializarLoja();
    } catch (error) {
        console.error("Erro ao carregar produtos:", error);
    }
}

// ==========================================
// LÓGICA DE FILTROS E RENDERIZAÇÃO
// ==========================================
function renderizarProdutosPorCategoria(categoriaId, filtroSelecionado = "todos", ordenarPorPreco = false) {
    const grid = document.querySelector(`#${categoriaId} .carrossel-track`);
    if (!grid) return;

    grid.innerHTML = "";

    let listaFiltrada = Object.keys(produtos)
        .map(id => ({ id, ...produtos[id] }))
        .filter(p => p.categoria === categoriaId);

    if (filtroSelecionado !== "todos") {
        listaFiltrada = listaFiltrada.filter(p => p.filtros && p.filtros.includes(filtroSelecionado));
    }

    if (ordenarPorPreco) {
        listaFiltrada.sort((a, b) => a.precoNum - b.precoNum);
    } else {
        listaFiltrada.sort((a, b) => (a.ordem || 0) - (b.ordem || 0));
    }

    listaFiltrada.forEach(p => {
        const imagemCapa = (p.fotos && p.fotos.length > 0) ? p.fotos[0] : "https://via.placeholder.com/300x400?text=Sem+Foto";
        const tamanhosTexto = p.tamanhos ? ` - ${p.tamanhos}` : "";

        const card = document.createElement("div");
        card.className = "produto-card";
        card.innerHTML = `
            <div class="img-container">
                <img src="${imagemCapa}" alt="${p.titulo}" loading="lazy" decoding="async">
            </div>
            <div class="produto-info">
                <h4>${p.titulo}</h4>
                <p class="preco">${p.preco}${tamanhosTexto}</p>
                <a href="produto.html?id=${p.id}" class="btn btn-block">Ver Detalhes</a>
            </div>
        `;
        grid.appendChild(card);
    });
}

function inicializarLoja() {
    const dropdowns = document.querySelectorAll(".categoria-filtro");

    dropdowns.forEach(select => {
        const categoriaId = select.getAttribute("data-categoria");

        if (categoriaId) {
            renderizarProdutosPorCategoria(categoriaId, "todos", false);
        }

        select.onchange = (e) => {
            const valorOpcao = e.target.value;
            if (valorOpcao === "menor-preco") {
                renderizarProdutosPorCategoria(categoriaId, "todos", true);
            } else {
                renderizarProdutosPorCategoria(categoriaId, valorOpcao, false);
            }
        };
    });

    if (window.location.href.toLowerCase().includes("produto.html")) {
        carregarDetalhesDoProduto();
    }
}

// ==========================================
// LÓGICA DA PÁGINA DE DETALHES DO PRODUTO
// ==========================================
function carregarDetalhesDoProduto() {
    const urlParams = new URLSearchParams(window.location.search);
    const produtoId = urlParams.get('id');

    if (produtoId && produtos[produtoId]) {
        const prod = produtos[produtoId];

        if (document.getElementById('prod-titulo')) document.getElementById('prod-titulo').innerText = prod.titulo;
        if (document.getElementById('prod-preco')) document.getElementById('prod-preco').innerText = prod.preco;
        if (document.getElementById('prod-desc')) document.getElementById('prod-desc').innerText = prod.descricao;

        const blocoTamanhos = document.getElementById("bloco-tamanhos");
        const txtTamanhos = document.getElementById("prod-tamanhos");

        if (blocoTamanhos && txtTamanhos) {
            if (prod.tamanhos && prod.tamanhos.trim() !== "") {
                txtTamanhos.innerText = prod.tamanhos;
                blocoTamanhos.style.display = "block";
            } else {
                blocoTamanhos.style.display = "none";
            }
        }

        const btnZap = document.getElementById('prod-btn-zap');
        if (btnZap) {
            btnZap.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(prod.mensagemZap)}`;
        }

        const galeriaSlides = document.getElementById("prod-galeria-slides");
        if (galeriaSlides && prod.fotos) {
            galeriaSlides.innerHTML = "";
            prod.fotos.forEach((foto, index) => {
                const slide = document.createElement("div");
                slide.className = `prod-slide ${index === 0 ? 'active' : ''}`;
                slide.innerHTML = `<img src="${foto}" alt="Foto ${index + 1}" loading="lazy" decoding="async">`;
                galeriaSlides.appendChild(slide);
            });

            const slidesProd = galeriaSlides.querySelectorAll(".prod-slide");
            let currentProdSlide = 0;

            function mudarSlideProduto(direcao) {
                if (slidesProd.length <= 1) return;
                slidesProd[currentProdSlide].classList.remove("active");
                currentProdSlide = (currentProdSlide + direcao + slidesProd.length) % slidesProd.length;
                slidesProd[currentProdSlide].classList.add("active");
            }

            const btnPrev = document.querySelector(".prod-carousel-btn.prev");
            const btnNext = document.querySelector(".prod-carousel-btn.next");

            if (btnPrev && btnNext) {
                if (slidesProd.length > 1) {
                    btnPrev.onclick = () => mudarSlideProduto(-1);
                    btnNext.onclick = () => mudarSlideProduto(1);
                    btnPrev.style.display = "block";
                    btnNext.style.display = "block";
                } else {
                    btnPrev.style.display = "none";
                    btnNext.style.display = "none";
                }
            }
        }

        const gridSemelhantes = document.getElementById("produtos-semelhantes-grid");
        if (gridSemelhantes) {
            gridSemelhantes.innerHTML = "";
            const semelhantes = Object.keys(produtos)
                .map(id => ({ id, ...produtos[id] }))
                .filter(p => p.categoria === prod.categoria && p.id !== produtoId);

            if (semelhantes.length === 0) {
                gridSemelhantes.innerHTML = "<p class='txt-muted'>Nenhum produto semelhante encontrado.</p>";
            } else {
                semelhantes.forEach(p => {
                    const card = document.createElement("div");
                    card.className = "produto-card";
                    card.innerHTML = `
                        <div class="produto-img">
                            <a href="produto.html?id=${p.id}">
                                <img src="${p.fotos[0]}" alt="${p.titulo}" loading="lazy" decoding="async">
                            </a>
                        </div>
                        <div class="produto-info">
                            <h4>${p.titulo}</h4>
                            <p class="preco">${p.preco}</p>
                            <a href="produto.html?id=${p.id}">Ver Detalhes</a>
                        </div>
                    `;
                    gridSemelhantes.appendChild(card);
                });
            }
        }
    } else {
        if (document.getElementById('prod-titulo')) document.getElementById('prod-titulo').innerText = "Produto não encontrado";
    }
}

// Inicializador principal
document.addEventListener("DOMContentLoaded", carregarProdutosDoBanco);

// ==========================================
// OUTROS RECURSOS DA INTERFACE (WHATSAPP, MENU, HERO)
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    // Links WhatsApp
    const waLinks = document.querySelectorAll(".wa-link");
    waLinks.forEach(link => {
        const customMsg = link.getAttribute("data-msg") || "Olá! Gostaria de mais informações.";
        link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(customMsg)}`;
    });

    // Menu Mobile
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        document.querySelectorAll(".nav-menu a").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                if (mobileToggle.querySelector("i")) {
                    mobileToggle.querySelector("i").className = "fas fa-bars";
                }
            });
        });
    }

    // Carrossel Hero
    const slides = document.querySelectorAll('.hero-carousel .slide');
    const dots = document.querySelectorAll('.hero-indicators .dot');
    const prevBtn = document.querySelector('.hero-prev');
    const nextBtn = document.querySelector('.hero-next');
    let currentSlide = 0;
    let slideInterval;

    if (slides.length > 0) {
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            currentSlide = (index + slides.length) % slides.length;

            slides[currentSlide].classList.add('active');
            if (dots.length > 0) dots[currentSlide].classList.add('active');
        }

        function nextSlide() { showSlide(currentSlide + 1); }
        function prevSlide() { showSlide(currentSlide - 1); }

        function startSlideShow() { slideInterval = setInterval(nextSlide, 5000); }
        function resetSlideShow() { clearInterval(slideInterval); startSlideShow(); }

        if (nextBtn && prevBtn) {
            nextBtn.addEventListener('click', () => { nextSlide(); resetSlideShow(); });
            prevBtn.addEventListener('click', () => { prevSlide(); resetSlideShow(); });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
                resetSlideShow();
            });
        });

        startSlideShow();
    }

    // Navegação dos carrosséis universais
    const conteineresProdutos = document.querySelectorAll('.carrossel-track, .produtos-grid, .carrossel-container, .produtos-carrossel');
    conteineresProdutos.forEach((grid) => {
        const secaoPai = grid.parentElement;
        if (secaoPai) {
            const btnPrev = secaoPai.querySelector('.carrossel-btn.prev, .carrossel-prev, .prev-btn, .produtos-prev');
            const btnNext = secaoPai.querySelector('.carrossel-btn.next, .carrossel-next, .next-btn, .produtos-next');

            if (btnPrev && btnNext) {
                const scrollStep = 320;
                btnNext.addEventListener('click', () => { grid.scrollBy({ left: scrollStep, behavior: 'smooth' }); });
                btnPrev.addEventListener('click', () => { grid.scrollBy({ left: -scrollStep, behavior: 'smooth' }); });
            }
        }
    });
    
    if (smartBalloon && balloonText) {
        setTimeout(() => {
            const randomMsg = balloonMessages[Math.floor(Math.random() * balloonMessages.length)];
            balloonText.innerText = randomMsg;
            smartBalloon.classList.add("show");
            setTimeout(() => { smartBalloon.classList.remove("show"); }, 6000);
        }, 3000);
    }

    // Ano atual no Footer
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.innerText = new Date().getFullYear();
});