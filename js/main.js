// Create snowflakes with enhanced effects
const createSnowflakes = () => {
    const snowfall = document.querySelector('.snowfall');
    const numberOfSnowflakes = 100; // Increased number of snowflakes

    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        const size = Math.random() * 5 + 3;
        const duration = Math.random() * 5 + 10;
        const delay = Math.random() * 5;
        
        snowflake.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: var(--snow);
            border-radius: 50%;
            filter: blur(1px);
            opacity: ${Math.random() * 0.6 + 0.2};
            animation: fall ${duration}s ${delay}s linear infinite;
            left: ${Math.random() * 100}vw;
            top: -10px;
            transform-origin: center;
            animation-timing-function: ease-in-out;
        `;
        snowfall.appendChild(snowflake);
    }
};

// Create twinkling stars
const createStars = () => {
    const stars = document.querySelector('.stars');
    const numberOfStars = 50;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 2 + 1;
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 3;
        
        star.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: #fff;
            border-radius: 50%;
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 50}vh;
            animation: twinkle ${duration}s ${delay}s ease-in-out infinite;
        `;
        stars.appendChild(star);
    }
};

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    createSnowflakes();
    createStars();
});

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        0% {
            transform: translateY(0) rotate(0deg);
        }
        50% {
            transform: translateY(50vh) rotate(180deg);
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
        }
    }

    @keyframes twinkle {
        0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
        }
        50% { 
            opacity: 1;
            transform: scale(1.2);
        }
    }
`;
document.head.appendChild(style); 