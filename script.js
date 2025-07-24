// Animaciones y efectos interactivos para el CV
document.addEventListener('DOMContentLoaded', function() {
    // Animación de aparición gradual para las secciones
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Aplicar animación a todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Efecto de escritura para el nombre
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        const originalText = nameElement.textContent;
        nameElement.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                nameElement.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Comenzar la animación después de un pequeño delay
        setTimeout(typeWriter, 500);
    }

    // Efecto parallax sutil en el header
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('.header');
        if (header) {
            header.style.transform = `translateY(${scrolled * 0.2}px)`;
        }
    });

    // Animación para los tags de habilidades
    const skillTags = document.querySelectorAll('.skill-tag, .tech-tag');
    skillTags.forEach((tag, index) => {
        tag.style.animationDelay = `${index * 0.1}s`;
        tag.classList.add('skill-animation');
    });

    // Contador animado para años de experiencia
    const experienceText = document.querySelector('.experience');
    if (experienceText && experienceText.textContent.includes('4 años')) {
        const countUpObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumber(entry.target, 4);
                    countUpObserver.unobserve(entry.target);
                }
            });
        });
        countUpObserver.observe(experienceText);
    }

    // Función para animar números
    function animateNumber(element, targetNumber) {
        let current = 0;
        const increment = targetNumber / 40; // 40 frames para la animación
        const timer = setInterval(() => {
            current += increment;
            if (current >= targetNumber) {
                current = targetNumber;
                clearInterval(timer);
            }
            // Reemplazar el número en el texto
            element.textContent = element.textContent.replace(/\d+/, Math.floor(current));
        }, 50);
    }

    // Efecto hover mejorado para trabajos
    const jobs = document.querySelectorAll('.job');
    jobs.forEach(job => {
        job.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
        });
        
        job.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Smooth scroll para anclas (si se agregan)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Efecto de carga completada
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 1000);

    // Efecto de pulso para elementos importantes
    const importantElements = document.querySelectorAll('.contact-item a, .name');
    importantElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.animation = 'pulse 0.6s ease-in-out';
        });
        
        element.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    });

    // Crear y agregar partículas flotantes (efecto sutil)
    createFloatingParticles();
});

// Función para crear partículas flotantes
function createFloatingParticles() {
    const header = document.querySelector('.header');
    if (!header) return;

    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            pointer-events: none;
            animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        header.appendChild(particle);
    }
}

// Función para detectar si el usuario prefiere movimiento reducido
function respectsReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Aplicar reducción de movimiento si es necesario
if (respectsReducedMotion()) {
    document.documentElement.style.setProperty('--animation-duration', '0s');
    document.documentElement.style.setProperty('--transition-duration', '0s');
} 