// ==========================================
// CONFIGURAÇÕES DA LOJA (EDITE AQUI)
// ==========================================
const whatsappNumber = "5512991037973";

// Banco de dados de produtos ampliado com os novos campos de controle
const produtos = {
    "camisa-brasil-titular": {
        titulo: "Camisa Brasil Titular",
        preco: "R$ 149,90",
        precoNum: 149.90,              // Campo numérico para ordenação de menor/maior preço
        categoria: "camisas",          // ID da seção/categoria à qual o produto pertence
        filtros: ["todos", "selecoes", "tailandesa"], // Suas tags personalizadas de filtro
        descricao: "Camisa da Seleção Brasileira com tecido respirável. Alta qualidade, padrão original para você torcer com estilo.",
        fotos: [
            "img/produtos/camisa-brasil-amarela.png",
            "img/produtos/camisa-brasil-amarela.png", // Foto extra 1
            "img/produtos/camisa-brasil-amarela.png"  // Foto extra 2
        ],
        mensagemZap: "Olá! Tenho interesse na Camisa Brasil Titular."
    },

    "camisa-brasil-azul": {
        titulo: "Camisa Brasil Azul",
        preco: "R$ 129,90",
        precoNum: 129.90,
        categoria: "camisas",
        filtros: ["todos", "oversized", "peruana"],
        descricao: "Caimento perfeito, estilo oversized casual. Ideal para aproveitar os jogos.",
        fotos: [
            "img/produtos/camisa-brasil-azul.png",
            "img/produtos/camisa-quick-1.jpg"   // Foto extra 1
        ],
        mensagemZap: "Olá! Tenho interesse na camisa QuickSilver Style Marrom."
    },

    "quicksilver-marrom": {
        titulo: "QuickSilver Style Marrom",
        preco: "R$ 139,90",
        precoNum: 139.90,
        categoria: "oversized", // 💡 Deve ser igual ao data-categoria do HTML
        filtros: ["todos"], // 💡 Filtro exclusivo deste produto
        descricao: "Caimento perfeito, estilo oversized casual. Ideal para o dia a dia.",
        fotos: ["img/produtos/camisa-quick-marrom.png"],
        mensagemZap: "Olá! Tenho interesse na camisa QuickSilver Style Marrom."
    },

    "quicksilver-cinza": {
        titulo: "QuickSilver Logo Cinza",
        preco: "R$ 129,90",
        precoNum: 129.90,
        categoria: "oversized", // 💡 Deve ser igual ao data-categoria do HTML
        filtros: ["todos", "malha-americana"], // 💡 Filtro exclusivo deste produto
        descricao: "Caimento perfeito, estilo oversized casual.",
        fotos: ["img/produtos/camisa-quick-cinza.png"],
        mensagemZap: "Olá! Tenho interesse na camisa QuickSilver Logo Cinza."
    },

    "kit-infatil": {
        titulo: "Kit Marujo Infantil",
        preco: "R$ 149,90",
        precoNum: 149.90,
        categoria: "moda-infantil", // 💡 Deve ser igual ao data-categoria do HTML
        filtros: ["todos", "kits"], // 💡 Filtro exclusivo deste produto
        descricao: "Outift ja combinado, estilo para as crianças.",
        fotos: ["img/produtos/bag-nike-preta.png"],
        mensagemZap: "Olá! Tenho interesse no Kit Marujo Infantil"
    },

    "camisa-azul-brasil-infantil": {
        titulo: "Camisa Brasil Azul Infantil",
        preco: "R$ 99,90",
        precoNum: 99.90,
        categoria: "moda-infantil", // 💡 Deve ser igual ao data-categoria do HTML
        filtros: ["todos"], // 💡 Filtro exclusivo deste produto
        descricao: "Caimento perfeito, estilo para as crianças.",
        fotos: ["img/produtos/camisa-brasil-azul-infantil.png"],
        mensagemZap: "Olá! Tenho interesse na Camisa Brasil Azul Infantil."
    }
};

// ==========================================
// 🚀 LÓGICA DE FILTROS E INJEÇÃO AUTOMÁTICA (INDEX)
// ==========================================
function renderizarProdutosPorCategoria(categoriaId, filtroSelecionado = "todos", ordenarPorPreco = false) {
    const grid = document.querySelector(`#${categoriaId} .carrossel-track`);
    if (!grid) return;

    // Limpa a track para re-renderizar os produtos filtrados
    grid.innerHTML = "";

    // 1. Filtra apenas os produtos que pertencem a esta categoria específica (ex: 'camisas' ou 'oversized')
    let listaFiltrada = Object.keys(produtos)
        .map(id => ({ id, ...produtos[id] }))
        .filter(p => p.categoria === categoriaId);

    // 2. Se o filtro selecionado NÃO for "todos", filtra pela tag específica (ex: 'tailandesa', 'peruana')
    if (filtroSelecionado !== "todos") {
        listaFiltrada = listaFiltrada.filter(p => p.filtros && p.filtros.includes(filtroSelecionado));
    }

    // 3. Ordena por menor preço se o usuário escolheu essa opção
    if (ordenarPorPreco) {
        listaFiltrada.sort((a, b) => a.precoNum - b.precoNum);
    }

    // 4. Renderiza os cards na tela
    listaFiltrada.forEach(p => {
        const card = document.createElement("div");
        card.className = "produto-card";
        card.innerHTML = `
    <div class="img-container">
        <img src="${p.fotos[0]}" alt="${p.titulo}">
    </div>
    <div class="produto-info">
        <h4>${p.titulo}</h4>
        <p class="preco">${p.preco}</p>
        <a href="produto.html?id=${p.id}" class="btn btn-block">Ver Detalhes</a>
    </div>
`;
        grid.appendChild(card);
    });
}

// Inicializador dos dropdowns de filtros na página Index
document.addEventListener("DOMContentLoaded", () => {
    const dropdowns = document.querySelectorAll(".categoria-filtro");

    dropdowns.forEach(select => {
        const categoriaId = select.getAttribute("data-categoria");

        // Renderização inicial padrão (mostra tudo da categoria)
        if (categoriaId) {
            renderizarProdutosPorCategoria(categoriaId, "todos", false);
        }

        // Monitora as escolhas do usuário no dropdown
        select.addEventListener("change", (e) => {
            const valorOpcao = e.target.value;
            if (valorOpcao === "menor-preco") {
                renderizarProdutosPorCategoria(categoriaId, "todos", true);
            } else {
                renderizarProdutosPorCategoria(categoriaId, valorOpcao, false);
            }
        });
    });
});

// ==========================================
// 🚀 LÓGICA DA PÁGINA DE PRODUTOS (GALERIA & SEMELHANTES)
// ==========================================
if (window.location.href.toLowerCase().includes("produto.html")) {
    document.addEventListener("DOMContentLoaded", () => {
        const urlParams = new URLSearchParams(window.location.search);
        const produtoId = urlParams.get('id');

        if (produtoId && produtos[produtoId]) {
            const prod = produtos[produtoId];

            // Injeta dados de texto principais
            if (document.getElementById('prod-titulo')) document.getElementById('prod-titulo').innerText = prod.titulo;
            if (document.getElementById('prod-preco')) document.getElementById('prod-preco').innerText = prod.preco;
            if (document.getElementById('prod-desc')) document.getElementById('prod-desc').innerText = prod.descricao;

            const btnZap = document.getElementById('prod-btn-zap');
            if (btnZap) {
                btnZap.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(prod.mensagemZap)}`;
            }

            // --- NOVO: CARROSSEL INTERNO DE IMAGENS DO PRODUTO ---
            const galeriaSlides = document.getElementById("prod-galeria-slides");
            if (galeriaSlides && prod.fotos) {
                galeriaSlides.innerHTML = "";
                prod.fotos.forEach((foto, index) => {
                    const slide = document.createElement("div");
                    slide.className = `prod-slide ${index === 0 ? 'active' : ''}`;
                    slide.innerHTML = `<img src="${foto}" alt="Foto ${index + 1}">`;
                    galeriaSlides.appendChild(slide);
                });

                // Controles de navegação do carrossel do produto
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
                        btnPrev.addEventListener("click", () => mudarSlideProduto(-1));
                        btnNext.addEventListener("click", () => mudarSlideProduto(1));
                    } else {
                        // Esconde as setas se houver apenas uma foto cadastrada
                        btnPrev.style.display = "none";
                        btnNext.style.display = "none";
                    }
                }
            } else if (document.getElementById('prod-img-principal')) {
                // Mantém compatibilidade caso o layout antigo ainda esteja ativo
                document.getElementById('prod-img-principal').src = prod.fotos[0];
            }

            // --- NOVO: SEÇÃO DE PRODUTOS SEMELHANTES ---
            const gridSemelhantes = document.getElementById("produtos-semelhantes-grid");
            if (gridSemelhantes) {
                gridSemelhantes.innerHTML = "";

                // Filtra itens da mesma categoria, descartando o produto que já está aberto na tela
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
                                <a href="produto.html?id=${p.id}" class="btn btn-ver-detalhes">
                                <img src="${p.fotos[0]}" alt="${p.titulo}">
                            </div>
                            <div class="produto-info">
                                <h4>${p.titulo}</h4>
                                <p class="preco">${p.preco}</p>
                                Ver Detalhes</a>
                            </div>
                        `;
                        gridSemelhantes.appendChild(card);
                    });
                }
            }
        } else {
            if (document.getElementById('prod-titulo')) document.getElementById('prod-titulo').innerText = "Produto não encontrado";
        }
    });
}

// ==========================================
// 1. GERAÇÃO DE LINKS DO WHATSAPP (GERAL)
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    const waLinks = document.querySelectorAll(".wa-link");
    waLinks.forEach(link => {
        const customMsg = link.getAttribute("data-msg") || "Olá! Gostaria de mais informações.";
        link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(customMsg)}`;
    });
});

// ==========================================
// 2. MENU MOBILE TOGGLE
// ==========================================
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

    const navLinks = document.querySelectorAll(".nav-menu a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            if (mobileToggle.querySelector("i")) {
                mobileToggle.querySelector("i").className = "fas fa-bars";
            }
        });
    });
}

// ==========================================
// 3. CARROSSEL HERO (AUTOMÁTICO E MANUAL)
// ==========================================
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

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function resetSlideShow() {
        clearInterval(slideInterval);
        startSlideShow();
    }

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

// ==========================================
// 4. CARROSSEL DE PRODUTOS (UNIVERSAL)
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    const conteineresProdutos = document.querySelectorAll('.carrossel-track, .produtos-grid, .carrossel-container, .produtos-carrossel');

    conteineresProdutos.forEach((grid) => {
        const secaoPai = grid.parentElement;

        if (secaoPai) {
            const btnPrev = secaoPai.querySelector('.carrossel-btn.prev, .carrossel-prev, .prev-btn, .produtos-prev');
            const btnNext = secaoPai.querySelector('.carrossel-btn.next, .carrossel-next, .next-btn, .produtos-next');

            if (btnPrev && btnNext) {
                const scrollStep = 320;

                btnNext.addEventListener('click', () => {
                    grid.scrollBy({ left: scrollStep, behavior: 'smooth' });
                });

                btnPrev.addEventListener('click', () => {
                    grid.scrollBy({ left: -scrollStep, behavior: 'smooth' });
                });
            }
        }
    });
});

// ==========================================
// 5. SISTEMA DE BALÃO INTELIGENTE
// ==========================================
const balloonMessages = [
    "👋 Procurando o caimento perfeito? Fale conosco!",
    "🔥 Frete fixo para a nossa região! Consulte no WhatsApp.",
    "⚡ Peças limitadas! Não perca seu tamanho.",
    "👕 Camisas premium com estampas exclusivas!",
    "⚓ Vista Use Marujo e navegue no estilo!"
];

const smartBalloon = document.getElementById("smartBalloon");
const balloonText = document.getElementById("balloonText");

function showBalloon() {
    if (smartBalloon && balloonText) {
        const randomMsg = balloonMessages[Math.floor(Math.random() * balloonMessages.length)];
        balloonText.innerText = randomMsg;
        smartBalloon.classList.add("show");

        setTimeout(() => {
            smartBalloon.classList.remove("show");
        }, 6000);
    }
}

// Ano atual do Rodapé
const yearEl = document.getElementById("year");
if (yearEl) yearEl.innerText = new Date().getFullYear();