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

// Función para abrir cartas
function openLetter(id) {
    const letters = [
        'Nataly Camila, desde ese 2 de febrero de 2025 supe que eras especial. Ese día, cuando decidimos ser enamorados, comenzó la historia más hermosa de mi vida.',
        '22 de julio, el día que el mundo se volvió más bonito. Feliz cumpleaños, princesa. Gracias por existir y por decir que sí aquel 2 de febrero.',
        'José Alexander ❤️ Nataly Camila. Cada 2 de mes celebramos nuestro amor, pero yo te celebro a ti cada segundo de mi vida desde el 2 de febrero de 2025.'
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
        confetti.style.background = `hsl(${Math.random() * 60 + 300}, 100%, 70%)`; // Tonos rosados
        confetti.style.borderRadius = '2px';
        confetti.style.zIndex = '9999';
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
        confetti.style.opacity = Math.random() * 0.8 + 0.2;
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
    }
    
    // Crear corazones adicionales
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
    
    // Mostrar mensaje
    const messages = [
        'TE AMO NATALY ❤️',
        '2 DE FEBRERO 2025 ✨',
        'MI ENAMORADA 💕',
        'LA DUEÑA DE MI CORAZÓN 🌹',
        'PARA SIEMPRE 💑'
    ];
    
    const msg = document.createElement('div');
    msg.textContent = messages[Math.floor(Math.random() * messages.length)];
    msg.style.position = 'fixed';
    msg.style.top = '50%';
    msg.style.left = '50%';
    msg.style.transform = 'translate(-50%, -50%)';
    msg.style.fontSize = '3rem';
    msg.style.fontFamily = "'Dancing Script', cursive";
    msg.style.color = '#ff4d6d';
    msg.style.textShadow = '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,105,180,0.5)';
    msg.style.zIndex = '10001';
    msg.style.animation = 'fadeInOut 3s ease';
    msg.style.textAlign = 'center';
    document.body.appendChild(msg);
    
    setTimeout(() => msg.remove(), 3000);
}

// Crear estilo para animaciones (si no existe)
if (!document.getElementById('custom-animations')) {
    const style = document.createElement('style');
    style.id = 'custom-animations';
    style.textContent = `
        @keyframes fall {
            to {
                transform: translateY(100vh) rotate(360deg);
            }
        }
        
        @keyframes fadeInOut {
            0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
            50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
        }
    `;
    document.head.appendChild(style);
}