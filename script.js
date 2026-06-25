// ==========================================
// CONFIGURAÇÕES DA LOJA (EDITE AQUI)
// ==========================================
// Insira o número do WhatsApp com código do país (55) e DDD. Apenas números.
const whatsappNumber = "5512991037973"; 

// ==========================================
// 1. GERAÇÃO DE LINKS DO WHATSAPP
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const waLinks = document.querySelectorAll('.wa-link');
    
    waLinks.forEach(link => {
        // Pega a mensagem customizada do atributo data-msg do HTML
        const message = link.getAttribute('data-msg') || "Olá! Gostaria de mais informações.";
        const encodedMessage = encodeURIComponent(message);
        const waUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        link.setAttribute('href', waUrl);
        link.setAttribute('target', '_blank'); // Abre em nova aba
    });

    // Atualiza o ano no rodapé automaticamente
    document.getElementById("year").textContent = new Date().getFullYear();
});

// ==========================================
// 2. MENU MOBILE TOGGLE
// ==========================================
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // Troca o ícone (hamburger para X)
    const icon = mobileToggle.querySelector('i');
    if(navMenu.classList.contains('active')){
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// ==========================================
// 3. CARROSSEL HERO (AUTOMÁTICO E MANUAL)
// ==========================================
const slides = document.querySelectorAll('.hero-carousel .slide');
const dots = document.querySelectorAll('.hero-indicators .dot');
const prevBtn = document.querySelector('.hero-prev');
const nextBtn = document.querySelector('.hero-next');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (index + slides.length) % slides.length; // Garante navegação em loop
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Inicia o automático a cada 5 segundos
function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000);
}

function resetSlideShow() {
    clearInterval(slideInterval);
    startSlideShow();
}

nextBtn.addEventListener('click', () => { nextSlide(); resetSlideShow(); });
prevBtn.addEventListener('click', () => { prevSlide(); resetSlideShow(); });

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
        resetSlideShow();
    });
});

startSlideShow();

// ==========================================
// 4. CARROSSEL DE PRODUTOS (SCROLL HORIZONTAL)
// ==========================================
const productCarousels = document.querySelectorAll('.carousel-wrapper');

productCarousels.forEach(carousel => {
    const track = carousel.querySelector('.carrossel-track');
    const btnPrev = carousel.querySelector('.prev');
    const btnNext = carousel.querySelector('.next');
    
    // Distância do scroll (aproximadamente a largura de um card + gap)
    const scrollAmount = 300; 

    if(btnNext && btnPrev && track) {
        btnNext.addEventListener('click', () => {
            track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        btnPrev.addEventListener('click', () => {
            track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    }
});

// ==========================================
// 5. BALÃO INTELIGENTE DE MENSAGENS
// ==========================================
const smartBalloon = document.getElementById('smartBalloon');
const balloonText = document.getElementById('balloonText');

const messages = [
    "👋 Precisa de ajuda?",
    "🔥 Confira nossas novidades",
    "⚓ Fale conosco no WhatsApp",
    "🛍️ Temos ofertas esperando por você",
    "😎 Encontre seu estilo ideal"
];

function showBalloon() {
    // Escolhe mensagem aleatória
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    balloonText.textContent = randomMsg;
    
    // Mostra o balão
    smartBalloon.classList.add('show');
    
    // Esconde o balão após 5 segundos
    setTimeout(() => {
        smartBalloon.classList.remove('show');
    }, 5000);
}

// Inicia o ciclo do balão (Aparece a cada 20 segundos)
// Colocamos o primeiro timeout menor para não demorar muito na primeira vez
setTimeout(() => {
    showBalloon();
    setInterval(showBalloon, 20000);
}, 5000);