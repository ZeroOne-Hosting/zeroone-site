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
            "🚗 Getting more Taco Bell, back in 20 min",
            "☕ Coffee machine down - critical system failure",
            "🔌 Extension cord daisy chain at maximum capacity",
            "🚪 Garage door stuck open - external cooling active",
            "📦 Amazon delivery blocking server access",
            "🌧️ Roof leak detected - buckets deployed",
            "🐭 Server mouse relocated to rack 4",
            "🔋 UPS beeping ominously - probably fine",
            "🏠 HOA complained about extension cords again",
            "🌪️ Leaf blower operation affecting cooling",
            "🌙 Neighbor's motion light strobing - photosensitive warnings",
            "📱 Phone charging off server UPS - priorities",
            "🧊 Ice cream truck music causing memory errors",
            "🌡️ Thermostat wars with spouse - servers suffering",
            "📦 Moving boxes stacked against cooling vents",
            "🧰 Tool chest blocking emergency shutdown button",
            "🎨 Garage sale setup disrupting cable runs",
            "🔦 Flashlight battery died - visual diagnostics impaired",
            "🚂 Model train derailed into network cabinet",
            "🦋 Butterfly migration causing optical fiber flutter",
            "🧸 Teddy bear stuck in cooling fan - rescue mission pending",
            "🌮 Taco Tuesday grease fire alarm - servers evacuating",
            "🎪 Mime trapped in invisible box - blocking access panel",
            "🌊 Kiddie pool overflow - unexpected water cooling",
            "🎨 Bob Ross marathon inspiring servers to paint landscapes",
            "🦈 Shark Week documentary causing predatory behavior in firewalls",
            "🌮 Taco Bell delivery drone crashed - hot sauce everywhere",
            "🖨️ Inkjet printer spooling logs again — print queue unstoppable",
            "📡 Wi-Fi extender balanced on lawn chair — signal 'optimal'",
            "🪑 Folding chair collapsed — NOC operator on floor",
            "🐊 Northwestern reptile sighting — server migration paused",
            "🏗️ Duct tape adhesion downgraded to 'experimental'",
            "📺 CRT monitor static interfering with uptime counters",
            "📻 HAM radio operator cross-talk detected in fiber",
            "🔥 Scented candle accidentally added to cooling strategy",
            "🚰 Garden hose feeding chiller — neighbor complaint likely",
            "🪙 Arcade quarter jammed in rackmount rail",
            "🏚️ Floor joist creaking under RAID array — integrity questionable",
            "🎮 LAN party traffic surge — colo capacity exceeded",
            "🍺 Empty IPA cans repurposed as cable management system",
            "🕹️ Sega Dreamcast powered on, stealing rack amps",
            "🛹 Skateboard ramp blocking emergency exit",
            "🐦 Pigeon nested on wireless access point — coverage degraded",
            "🕯️ Power outage solved with tealight clustering",
            "🍕 Pizza box used as rack faceplate — airflow compromised",
            "🚜 Tractor idling outside — EMI interference probable",
            "🎤 Karaoke night upstairs — support team unavailable",
            "📼 VHS recorder logging syslog — 'retro compliance'",
            "🦖 Jurassic Park VHS marathon consuming operator attention",
            "🐌 Snail on fiber line — throughput reduced to dial-up speeds",
            "🏒 Pond hockey nearby — cooling water diverted",
            "🚴 Neighbor kid charging e-bike from UPS — runtime halved",
            "🕸️ Cobwebs detected in switch vents — cleaning deferred",
            "💡 Holiday lights siphoning breaker capacity — uptime seasonal",
            "🚪 Tier IV garage certification revoked (again)",
            "🌮 Taco Bell wrapper used as thermal pad",
            "🚗 Hyundai Kona charging off rack PDUs — sustainability mode",
            "📟 Pager left in server room — constant beeping ignored",
            "🥤 Baja Blast spill detected on switch ports",
            "🏟️ Black Bears won — support team celebrating",
            "🌋 Ashfall simulation running in HVAC system",
            "📀 Burned CD discovered labeled 'Prod Backup — Do Not Touch'",
            "🪵 Plywood upgrade to Raised Floor in progress",
            "⚙️ Ceph cluster 'mostly fine' after power flicker",
            "🔌 Extension cord loop achieving self-awareness",
            "🥽 Neighbor kid welding in driveway — EMI risk high",
            "🧊 Chest freezer coolant experiment underway",
            "🧟 Zombie process escaped chroot jail",
            "📡 Antenna rerouted through garage door gap",
            "🦎 Lizard basking on UPS heat vents",
            "📦 eBay pallet delivery — forklift access blocked",
            "🏷️ Craigslist ad misposted — colo listed as 'spare room rental'",
            "🚧 HOA threatening citation for visible server glow",
            "🎶 Synthwave playlist buffering — uptime morale degraded",
            "🍕 Little Caesars Hot-N-Ready warming rack 7",
            "🏚️ Floor joist prayers engaged for RAID array survival",
            "🎤 Craft Computing stream live — all ops halted",
            "🐳 Docker container escaped into neighbor's Wi-Fi",
            "📦 Kubernetes pod scheduled to the garage fridge",
            "🧠 Local LLM demanding more VRAM — negotiations stalled",
            "⚙️ Ceph cluster status: 'health-ish'",
            "🪣 S3 bucket literally a Home Depot bucket",
            "🚀 OpenStack instance launched into orbit (figuratively)",
            "🔄 Ansible playbook stuck in infinite loop — send tacos",
            "🤖 AI model hallucinated new VLANs — applying anyway",
            "🪟 Proxmox console frozen — garage window repurposed",
            "🐧 Penguin detected in rack — Linux kernel panic imminent",
            "📊 Grafana dashboard taped to garage wall with duct tape",
            "🖧 SDN controller rerouted through neighbor's smart fridge",
            "🧩 Docker Compose file lost — searching Craigslist backups",
            "🔒 Vault secrets stored under literal floorboard",
            "🛢️ Ceph OSD replaced with old Zip disk",
            "💾 RAID resync ETA: one geologic epoch",
            "🔮 Local AI chatbot now convinced it's the UPS",
            "🌐 BGP session announced to HOA mailing list",
            "🛠️ Jenkins pipeline blocked by extension cord tangle",
            "🧑‍💻 Terraform applied — garage drywall deleted",
            "📶 Wi-Fi mesh node duct-taped to ceiling fan",
            "🔎 Nagios alert acknowledged with Sharpie",
            "🖥️ Homelab VM running Minesweeper in prod cluster",
            "🎛️ Ceph quorum achieved after ritual chanting",
            "🥽 VR headset left training LLM — GPU overheating"
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
            max-width: 450px;
            box-shadow: 0 0 20px rgba(255, 255, 0, 0.3);
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Slide in
        setTimeout(() => {
            notification.style.right = '20px';
        }, 100);
        
        // Slide out after 7 seconds
        setTimeout(() => {
            notification.style.right = '-400px';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 500);
        }, 7000);
    }

    // Show random server messages every 15-30 seconds
    setInterval(() => {
        if (Math.random() > 0.3) { // 70% chance
            showServerMessage();
        }
    }, Math.random() * 15000 + 15000);

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