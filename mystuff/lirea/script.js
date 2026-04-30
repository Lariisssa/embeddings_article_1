// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".story-block, .stat-card");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 50; 

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Add reveal class to elements
document.querySelectorAll(".story-block, .stat-card").forEach(el => {
    el.classList.add("reveal");
});

window.addEventListener("scroll", reveal, { passive: true });
reveal(); // Trigger on load

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Powerful Magical Particles Setup (Optimized for Performance)
function createParticle() {
    const container = document.getElementById('particles-container');
    const particle = document.createElement('div');
    
    // Randomize particle type heavily
    const type = Math.random();
    
    if (type < 0.4) {
        // Super Glowing Orbs
        particle.style.width = Math.random() * 8 + 4 + 'px';
        particle.style.height = particle.style.width;
        const colors = ['#ffb7b2', '#b2c8ff', '#ffd43b', '#ffffff', '#ff6b9e'];
        const chosenColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = chosenColor;
        particle.style.borderRadius = '50%';
        particle.style.boxShadow = `0 0 10px ${chosenColor}`;
    } else if (type < 0.7) {
        // Little butterflies flying up
        particle.innerHTML = '🦋';
        particle.style.fontSize = Math.random() * 15 + 10 + 'px';
        // Removed heavy drop-shadow filter for performance
    } else {
        // Huge magical sparkles
        particle.innerHTML = '✨';
        particle.style.fontSize = Math.random() * 20 + 10 + 'px';
        particle.style.color = ['#ffb7b2', '#b2c8ff', '#ffffff', '#ffd43b'][Math.floor(Math.random() * 4)];
        particle.style.textShadow = '0 0 5px white';
    }

    // Positioning
    particle.style.position = 'absolute';
    particle.style.left = Math.random() * 100 + 'vw';
    
    const startY = Math.random() > 0.5 ? -50 : window.innerHeight + 50;
    particle.style.top = startY + 'px';
    
    particle.style.opacity = Math.random() * 0.6 + 0.4;
    
    const duration = Math.random() * 10000 + 6000; 
    
    container.appendChild(particle);

    const endY = startY < 0 ? window.innerHeight + 50 : -50;
    const horizontalDrift = (Math.random() - 0.5) * 150; 
    const rotations = Math.random() * 360;
    
    const animation = particle.animate([
        { transform: `translate(0, 0) rotate(0deg) scale(0)`, opacity: 0 },
        { transform: `translate(${horizontalDrift / 2}px, ${(endY - startY) / 2}px) rotate(${rotations/2}deg) scale(1)`, opacity: particle.style.opacity },
        { transform: `translate(${horizontalDrift}px, ${endY - startY}px) rotate(${rotations}deg) scale(0)`, opacity: 0 }
    ], {
        duration: duration,
        easing: 'linear'
    });

    animation.onfinish = () => {
        particle.remove();
        createParticle(); // Replace it
    };
}

// Initial particles - Reduced count for better performance
const particleCount = window.innerWidth > 768 ? 25 : 15; 
for (let i = 0; i < particleCount; i++) {
    setTimeout(createParticle, Math.random() * 3000);
}

// Optimized Mouse interaction
let lastSpawn = 0;
window.addEventListener('mousemove', (e) => {
    const now = Date.now();
    // Increased throttle from 30ms to 120ms to save CPU/GPU and prevent lag
    if (now - lastSpawn > 120) { 
        lastSpawn = now;
        
        const container = document.getElementById('particles-container');
        const sparkle = document.createElement('div');
        sparkle.innerHTML = Math.random() > 0.6 ? '🦋' : '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        sparkle.style.color = ['#ff6b9e', '#4dabf7', '#ffffff', '#ffd43b'][Math.floor(Math.random() * 4)];
        sparkle.style.fontSize = Math.random() * 15 + 10 + 'px';
        sparkle.style.pointerEvents = 'none';
        // Removed heavy filter, using text-shadow
        sparkle.style.textShadow = '0 0 5px white';
        container.appendChild(sparkle);
        
        const spreadX = (Math.random() - 0.5) * 60;
        const spreadY = (Math.random() - 0.5) * 60 - 30;

        const anim = sparkle.animate([
            { transform: 'translate(-50%, -50%) scale(1) rotate(0deg)', opacity: 1 },
            { transform: `translate(calc(-50% + ${spreadX}px), calc(-50% + ${spreadY}px)) scale(0) rotate(${Math.random() * 90}deg)`, opacity: 0 }
        ], {
            duration: 800,
            easing: 'ease-out'
        });
        
        anim.onfinish = () => sparkle.remove();
    }
}, { passive: true });

// Mobile tap effect
window.addEventListener('touchstart', (e) => {
    for(let i=0; i<3; i++) {
        setTimeout(() => {
            const container = document.getElementById('particles-container');
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.position = 'absolute';
            sparkle.style.left = e.touches[0].clientX + 'px';
            sparkle.style.top = e.touches[0].clientY + 'px';
            sparkle.style.color = '#ffffff';
            sparkle.style.fontSize = Math.random() * 20 + 10 + 'px';
            sparkle.style.pointerEvents = 'none';
            container.appendChild(sparkle);
            
            const anim = sparkle.animate([
                { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
                { transform: `translate(calc(-50% + ${(Math.random()-0.5)*100}px), calc(-50% + ${(Math.random()-0.5)*100}px)) scale(0)`, opacity: 0 }
            ], {
                duration: 800,
                easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)'
            });
            anim.onfinish = () => sparkle.remove();
        }, i * 100);
    }
}, { passive: true });
