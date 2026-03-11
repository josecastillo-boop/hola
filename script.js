// ===== CONTADOR DE TIEMPO =====
function updateCounter() {
    // Fecha exacta: 2 de febrero de 2025 a las 00:00 horas
    const startDate = new Date('2025-02-02T00:00:00');
    const now = new Date();
    const diff = now - startDate;
    
    // Si la diferencia es positiva (ya pasó la fecha), calcula
    // Si es negativa (aún no llega), muestra 0
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

// ===== NUEVA FUNCIÓN: FRASES MOTIVADORAS =====
function showPhrase(id) {
    const phrases = [
        '🌸 "Contigo aprendí que el amor verdadero existe. Eres mi inspiración cada día."',
        '✨ "Tu sonrisa es la luz que ilumina mis días más oscuros."',
        '💫 "A tu
