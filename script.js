// Contador de tiempo desde el 2 de febrero de 2025
function updateCounter() {
    // Fecha exacta: 2 de febrero de 2025 a las 00:00 horas
    const startDate = new Date('2025-02-02T00:00:00');
    const now = new Date();
    const diff = now - startDate;
    
    // Si la fecha es futura (antes del 2 feb 2025), mostrar 0
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

// Función para abrir cartas (respaldo)
function openLetter(id) {
    const letters = [
        'Nataly Camila, ese 2 de febrero de 2025 junté valor y te pedí que fueras mi enamorada. Cuando dijiste que SÍ, mi corazón explotó de felicidad. Gracias por hacerme el hombre más feliz del mundo.',
        
        '22 de julio, el día más especial porque naciste tú. Feliz cumpleaños, mi amor. Gracias por existir y por haberle dicho que sí a este enamorado que te ama con todo su corazón.',
        
        'José Alexander ❤️ Nataly Camila. Cada 2 de mes celebramos nuestro amor, pero yo te celebro a ti cada segundo desde aquel 2 de febrero de 2025 cuando me regalaste el SÍ más hermoso. Te amo hoy, mañana y siempre, mi enamorada.'
    ];
    
    alert(letters[id - 1]);
}

// Función sorpresa con confeti
function launchSurprise() {
    // Crear confeti
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.width = '10px';
        confetti.style.height = '20px';
       
