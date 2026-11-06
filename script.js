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

// ==========================================
// VARIÁVEIS GLOBAIS
// ==========================================
let produtos = {};

// Identifica se estamos na loja feminina pela URL
const isFeminino = window.location.pathname.toLowerCase().includes("feminino");

// ==========================================
// SISTEMA DE CACHE E BANCO DE DADOS
// ==========================================
async function carregarProdutosDoBanco() {
    const CACHE_KEY = "usemarujo_produtos_cache";
    const CACHE_TIME_KEY = "usemarujo_produtos_time";
    const TEMPO_EXPIRACAO = 15 * 60 * 1000; // 15 Minutos

    const cacheSalvo = localStorage.getItem(CACHE_KEY);
    const cacheTime = localStorage.getItem(CACHE_TIME_KEY);
    const agora = Date.now();

    if (cacheSalvo && cacheTime && (agora - parseInt(cacheTime, 10) < TEMPO_EXPIRACAO)) {
        try {
            produtos = JSON.parse(cacheSalvo);
            inicializarLoja();
            return;
        } catch (e) {
            console.warn("Cache corrompido, buscando dados novos do banco...");
        }
    }

    try {
        const querySnapshot = await getDocs(collection(db, "produtos"));
        produtos = {};
        
        querySnapshot.forEach((docSnapshot) => {
            produtos[docSnapshot.id] = docSnapshot.data();
        });

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

    // Filtra pela aba ativa: se estiver na página feminina, mostra apenas produtos da loja feminina
    let listaFiltrada = Object.keys(produtos)
        .map(id => ({ id, ...produtos[id] }))
        .filter(p => p.categoria === categoriaId);

    if (isFeminino) {
        listaFiltrada = listaFiltrada.filter(p => p.loja === "feminina");
    } else {
        listaFiltrada = listaFiltrada.filter(p => p.loja !== "feminina");
    }

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
        const tamanhosTexto = (!isFeminino && p.tamanhos) ? ` - ${p.tamanhos}` : "";
        
        const btnClass = isFeminino ? "btn btn-block btn-pink" : "btn btn-block";
        
        // CORREÇÃO AQUI: Removemos a verificação isFeminino para a URL
        // Como o ficheiro index.html está dentro da pasta feminino,
        // o link relativo para produto.html funciona para ambas as lojas.
        const urlProduto = `produto.html?id=${p.id}`;

        const card = document.createElement("div");
        card.className = "produto-card";
        card.innerHTML = `
            <div class="img-container">
                <img src="${imagemCapa}" alt="${p.titulo}" loading="lazy" decoding="async">
            </div>
            <div class="produto-info">
                <h4>${p.titulo}</h4>
                <p class="preco">${p.preco}</p>
                <a href="${urlProduto}" class="${btnClass}">Ver Detalhes</a>
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

        select.addEventListener("change", (e) => {
            const valorOpcao = e.target.value;
            if (valorOpcao === "menor-preco") {
                renderizarProdutosPorCategoria(categoriaId, "todos", true);
            } else {
                renderizarProdutosPorCategoria(categoriaId, valorOpcao, false);
            }
        });
    });

    if (window.location.href.toLowerCase().includes("produto")) {
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
        
        // Preenche dados base (Ambas as lojas)
        if (document.getElementById('prod-titulo')) document.getElementById('prod-titulo').innerText = prod.titulo;
        if (document.getElementById('prod-preco')) document.getElementById('prod-preco').innerText = prod.preco;
        if (document.getElementById('prod-desc')) document.getElementById('prod-desc').innerText = prod.descricao;

        // Bloco de tamanhos (Geralmente na loja principal)
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

        // WhatsApp Link
        const btnZap = document.getElementById('prod-btn-zap');
        if (btnZap) {
            btnZap.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(prod.mensagemZap || 'Olá, gostei deste produto!')}`;
        }

        // --- SISTEMA DE FOTOS ---
        const galeriaSlides = document.getElementById("prod-galeria-slides"); // Loja Principal
        const imgPrincipal = document.getElementById("prod-img-principal");   // Loja Feminina
        
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
        } else if (imgPrincipal && prod.fotos && prod.fotos.length > 0) {
            // Se for a página da loja feminina que usa só 1 foto em destaque
            imgPrincipal.src = prod.fotos[0];
        }

        // Produtos Semelhantes (Opcional - se a grade existir na tela)
        const gridSemelhantes = document.getElementById("produtos-semelhantes-grid");
        if (gridSemelhantes) {
            gridSemelhantes.innerHTML = "";
            const semelhantes = Object.keys(produtos)
                .map(id => ({ id, ...produtos[id] }))
                .filter(p => p.categoria === prod.categoria && p.id !== produtoId && p.loja === prod.loja);

            if (semelhantes.length === 0) {
                gridSemelhantes.innerHTML = "<p class='txt-muted'>Nenhum produto semelhante encontrado.</p>";
            } else {
                semelhantes.forEach(p => {
                    const urlSemelhante = isFeminino ? `produto-feminino.html?id=${p.id}` : `produto.html?id=${p.id}`;
                    const card = document.createElement("div");
                    card.className = "produto-card";
                    card.innerHTML = `
                        <div class="produto-img">
                            <a href="${urlSemelhante}">
                                <img src="${p.fotos[0]}" alt="${p.titulo}" loading="lazy" decoding="async">
                            </a>
                        </div>
                        <div class="produto-info">
                            <h4>${p.titulo}</h4>
                            <p class="preco">${p.preco}</p>
                            <a href="${urlSemelhante}">Ver Detalhes</a>
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

// ==========================================
// INTERAÇÕES DE INTERFACE (UI E DOM)
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Iniciar Banco
    carregarProdutosDoBanco();

    // 2. Links Dinâmicos do WhatsApp
    const waLinks = document.querySelectorAll(".wa-link");
    waLinks.forEach(link => {
        const customMsg = link.getAttribute("data-msg") || "Olá! Gostaria de mais informações.";
        link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(customMsg)}`;
    });

    // 3. Menu Mobile (Hambúrguer)
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

    // 4. Carrossel Principal (Hero - topo da página inicial)
    const slides = document.querySelectorAll('.hero-carousel .slide, .slide');
    const dots = document.querySelectorAll('.hero-indicators .dot, .dot');
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
        function resetSlideShow() { clearInterval(slideInterval); slideInterval = setInterval(nextSlide, 5000); }

        if (nextBtn && prevBtn) {
            nextBtn.addEventListener('click', () => { nextSlide(); resetSlideShow(); });
            prevBtn.addEventListener('click', () => { prevSlide(); resetSlideShow(); });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => { showSlide(index); resetSlideShow(); });
        });

        slideInterval = setInterval(nextSlide, 5000);
    }

    // 5. Navegação dos Carrosséis de Produtos Universais (Setinhas Laterais)
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

    // 6. Destaque Automático de Categorias (Efeito Sumário da Loja Feminina)
    const sumarioItems = document.querySelectorAll('.sumario-item');
    if (sumarioItems.length > 0 && isFeminino) {
        let currentCatIndex = 0;
        function alternarDestaqueCategoria() {
            sumarioItems.forEach(item => item.classList.remove('active'));
            sumarioItems[currentCatIndex].classList.add('active');
            currentCatIndex = (currentCatIndex + 1) % sumarioItems.length;
        }
        alternarDestaqueCategoria();
        setInterval(alternarDestaqueCategoria, 1500);
    }

    // 7. Rodapé com ano dinâmico
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.innerText = new Date().getFullYear();
});