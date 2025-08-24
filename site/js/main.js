// ZeroOne Hosting - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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

    // Random glitch effect trigger
    function triggerRandomGlitch() {
        const glitchElements = document.querySelectorAll('.glitch');
        const randomElement = glitchElements[Math.floor(Math.random() * glitchElements.length)];
        
        if (randomElement) {
            randomElement.style.animation = 'none';
            setTimeout(() => {
                randomElement.style.animation = 'glitch 0.3s ease-in-out';
            }, 10);
            
            setTimeout(() => {
                randomElement.style.animation = 'glitch 3s infinite';
            }, 300);
        }
    }

    // Trigger random glitch every 5-15 seconds
    setInterval(() => {
        if (Math.random() > 0.3) { // 70% chance
            triggerRandomGlitch();
        }
    }, Math.random() * 10000 + 5000);

    // "Unreliable" server status simulation
    function updateServerStatus() {
        const statNumbers = document.querySelectorAll('.stat-number');
        const uptimeElement = statNumbers[0]; // First stat is uptime
        
        if (uptimeElement && uptimeElement.textContent.includes('99.9')) {
            // Occasionally "glitch" the uptime
            if (Math.random() > 0.9) { // 10% chance
                const originalText = uptimeElement.textContent;
                const glitchTexts = ['99.8%', '99.7%', '98.9%', '???.?%', 'ERROR'];
                const glitchText = glitchTexts[Math.floor(Math.random() * glitchTexts.length)];
                
                uptimeElement.textContent = glitchText;
                uptimeElement.style.color = 'var(--danger-red)';
                
                setTimeout(() => {
                    uptimeElement.textContent = originalText;
                    uptimeElement.style.color = 'var(--neon-yellow)';
                }, 2000 + Math.random() * 3000);
            }
        }
    }

    // Update server status every 30-60 seconds
    setInterval(updateServerStatus, Math.random() * 30000 + 30000);

    // Add typing effect to hero subtitle
    function typeWriter(element, text, speed = 50) {
        element.textContent = '';
        let i = 0;
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed + Math.random() * 30);
            }
        }
        
        type();
    }

    // Initialize typing effect after a short delay
    setTimeout(() => {
        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroSubtitle) {
            const originalText = heroSubtitle.textContent;
            typeWriter(heroSubtitle, originalText, 30);
        }
    }, 1000);

    // Add "loading" effect to CTA buttons
    document.querySelectorAll('.cta-button, .package-button').forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.href && this.href.includes('mailto:')) {
                return; // Let mailto links work normally
            }
            
            e.preventDefault();
            
            const originalText = this.textContent;
            const loadingTexts = ['Loading...', 'Rebooting server...', 'Installing vim...', 'Checking garage...', 'Feeding server hamsters...'];
            const loadingText = loadingTexts[Math.floor(Math.random() * loadingTexts.length)];
            
            this.textContent = loadingText;
            this.style.opacity = '0.7';
            this.style.pointerEvents = 'none';
            
            setTimeout(() => {
                // Simulate "failure" occasionally
                if (Math.random() > 0.7) { // 30% chance of "failure"
                    this.textContent = 'Error! Try again...';
                    this.style.background = 'var(--danger-red)';
                    
                    setTimeout(() => {
                        this.textContent = originalText;
                        this.style.background = '';
                        this.style.opacity = '1';
                        this.style.pointerEvents = 'auto';
                    }, 2000);
                } else {
                    // Success - redirect or show success message
                    this.textContent = 'Success! (Sort of...)';
                    setTimeout(() => {
                        if (this.getAttribute('href') && this.getAttribute('href').startsWith('#')) {
                            document.querySelector(this.getAttribute('href')).scrollIntoView({
                                behavior: 'smooth'
                            });
                        }
                        this.textContent = originalText;
                        this.style.opacity = '1';
                        this.style.pointerEvents = 'auto';
                    }, 1500);
                }
            }, Math.random() * 2000 + 1000);
        });
    });

    // Add random "server messages" that appear occasionally
    function showServerMessage() {
        const messages = [
            "⚠️ Server room temperature: 87°F (garage door open)",
            "🌮 Taco Bell fuel level: Critical",
            "⚡ Hyundai Kona battery: 23%",
            "🔧 Promotional pens holding strong",
            "🌋 Mount St. Helens activity: Minimal",
            "⚾ Black Bears game in progress - reduced support",
            "💻 vim installation in progress on rack 3...",
            "🔄 Random reboot scheduled in 3... 2... 1...",
            "📱 Lost phone, support delayed",
            "🚗 Getting more Taco Bell, back in 20 min"
        ];
        
        const message = messages[Math.floor(Math.random() * messages.length)];
        
        // Create notification element
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: -400px;
            background: rgba(26, 0, 51, 0.95);
            border: 2px solid var(--neon-yellow);
            padding: 15px 20px;
            border-radius: 10px;
            color: var(--text-light);
            font-family: 'VT323', monospace;
            font-size: 1rem;
            z-index: 10000;
            transition: right 0.5s ease;
            max-width: 350px;
            box-shadow: 0 0 20px rgba(255, 255, 0, 0.3);
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Slide in
        setTimeout(() => {
            notification.style.right = '20px';
        }, 100);
        
        // Slide out after 5 seconds
        setTimeout(() => {
            notification.style.right = '-400px';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 500);
        }, 5000);
    }

    // Show random server messages every 45-90 seconds
    setInterval(() => {
        if (Math.random() > 0.4) { // 60% chance
            showServerMessage();
        }
    }, Math.random() * 45000 + 45000);

    // Add hover sound effect simulation (visual feedback)
    document.querySelectorAll('.feature-card, .package-card, .testimonial-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add subtle scale and glow effect
            this.style.transform = this.style.transform + ' scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            // Reset transform
            this.style.transform = this.style.transform.replace(' scale(1.02)', '');
        });
    });

    // Konami code easter egg (up, up, down, down, left, right, left, right, B, A)
    let konamiCode = [];
    const konamiSequence = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ];

    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.code);
        
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.length === konamiSequence.length) {
            let match = true;
            for (let i = 0; i < konamiSequence.length; i++) {
                if (konamiCode[i] !== konamiSequence[i]) {
                    match = false;
                    break;
                }
            }
            
            if (match) {
                // Activate easter egg
                const body = document.body;
                body.style.animation = 'rainbow 2s linear infinite';
                
                // Add rainbow animation
                const style = document.createElement('style');
                style.textContent = `
                    @keyframes rainbow {
                        0% { filter: hue-rotate(0deg); }
                        100% { filter: hue-rotate(360deg); }
                    }
                `;
                document.head.appendChild(style);
                
                showServerMessage();
                setTimeout(() => {
                    const easterEggNotification = document.createElement('div');
                    easterEggNotification.style.cssText = `
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        background: rgba(0, 0, 0, 0.9);
                        color: var(--neon-cyan);
                        padding: 30px;
                        border-radius: 15px;
                        border: 3px solid var(--neon-pink);
                        text-align: center;
                        font-family: 'VT323', monospace;
                        font-size: 1.5rem;
                        z-index: 10001;
                        box-shadow: 0 0 50px rgba(255, 0, 255, 0.5);
                    `;
                    easterEggNotification.innerHTML = `
                        🎉 KONAMI CODE ACTIVATED! 🎉<br>
                        <br>
                        You found our secret!<br>
                        <small>Garage-level achievement unlocked!</small>
                    `;
                    
                    document.body.appendChild(easterEggNotification);
                    
                    setTimeout(() => {
                        document.body.removeChild(easterEggNotification);
                        body.style.animation = '';
                        document.head.removeChild(style);
                    }, 4000);
                }, 500);
                
                konamiCode = [];
            }
        }
    });

    // Initialize random events after page load
    setTimeout(() => {
        showServerMessage();
    }, Math.random() * 10000 + 5000);

    console.log("🌮 ZeroOne Hosting initialized! Running on Taco Bell fuel and determination...");
    console.log("💡 Pro tip: Try the Konami code for a surprise!");
});

// Performance monitoring joke
window.addEventListener('load', function() {
    const loadTime = performance.now();
    if (loadTime > 3000) {
        setTimeout(() => {
            const slowNotification = document.createElement('div');
            slowNotification.style.cssText = `
                position: fixed;
                bottom: 20px;
                left: 20px;
                background: var(--danger-red);
                color: white;
                padding: 10px 15px;
                border-radius: 5px;
                font-family: 'VT323', monospace;
                z-index: 10000;
                animation: fadeOut 5s ease-in-out forwards;
            `;
            slowNotification.textContent = `⚠️ Page loaded slowly (${Math.round(loadTime)}ms) - blame the garage WiFi!`;
            
            const style = document.createElement('style');
            style.textContent = `
                @keyframes fadeOut {
                    0%, 80% { opacity: 1; }
                    100% { opacity: 0; }
                }
            `;
            document.head.appendChild(style);
            
            document.body.appendChild(slowNotification);
            
            setTimeout(() => {
                if (document.body.contains(slowNotification)) {
                    document.body.removeChild(slowNotification);
                }
                document.head.removeChild(style);
            }, 5000);
        }, 1000);
    }
});