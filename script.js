// Contador de tiempo desde el 2 de febrero de 2025
function updateCounter() {
    const startDate = new Date('2025-02-02T00:00:00');
    const now = new Date();
    const diff = now - startDate;
    
    if (diff < 0) {
        document.getElementById('days').textContent = '0';
        document.getElementById('hours').textContent = '0';
        document.getElementById('minutes').textContent = '0';
        document.getElementById('seconds').textContent = '0';
        return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

setInterval(updateCounter, 1000);

// Animación al hacer scroll
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 0.6s ease';
    animateOnScroll.observe(el);
});

// Función para voltear elementos (galería y cartas)
function flipElement(element) {
    element.classList.toggle('flipped');
}

// Función sorpresa con confeti
function launchSurprise() {
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.width = '10px';
        confetti.style.height = '20px';
        confetti.style.background = `hsl(${Math.random() * 60 + 300}, 100%, 70%)`;
        confetti.style.borderRadius = '2px';
        confetti.style.zIndex = '9999';
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
        confetti.style.opacity = Math.random() * 0.8 + 0.2;
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }
    
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '-10px';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.zIndex = '10000';
        heart.style.animation = `fall ${Math.random() * 4 + 2}s linear`;
        heart.innerHTML = '❤️';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
    
    const messages = [
        '¡ELLA DIJO QUE SÍ! ❤️',
        '2 DE FEBRERO 2025 ✨',
        'MI ENAMORADA 💕',
        'EL SÍ MÁS BONITO 🌹',
        'PARA SIEMPRE
