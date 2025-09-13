// Add interactive animations and effects
document.addEventListener('DOMContentLoaded', function() {
    // Create additional floating hearts on click
    document.addEventListener('click', function(e) {
        createFloatingHeart(e.clientX, e.clientY);
    });

    // Create floating heart at click position
    function createFloatingHeart(x, y) {
        const heart = document.createElement('div');
        heart.innerHTML = '💕';
        heart.style.position = 'fixed';
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        heart.style.fontSize = '2rem';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        heart.style.animation = 'floatAway 2s ease-out forwards';
        
        document.body.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }

    // Add CSS for floating away animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatAway {
            0% {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
            100% {
                opacity: 0;
                transform: translateY(-100px) scale(1.5);
            }
        }
    `;
    document.head.appendChild(style);

    // Add sparkle effect on hover over main content
    const mainContent = document.querySelector('.main-content');
    mainContent.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
    });

    mainContent.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });

    // Create random sparkles
    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.top = Math.random() * window.innerHeight + 'px';
        sparkle.style.fontSize = '1.5rem';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '1000';
        sparkle.style.animation = 'sparkle 3s ease-out forwards';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 3000);
    }

    // Add sparkle animation CSS
    const sparkleStyle = document.createElement('style');
    sparkleStyle.textContent = `
        @keyframes sparkle {
            0% {
                opacity: 0;
                transform: scale(0) rotate(0deg);
            }
            50% {
                opacity: 1;
                transform: scale(1) rotate(180deg);
            }
            100% {
                opacity: 0;
                transform: scale(0) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(sparkleStyle);

    // Create sparkles periodically
    setInterval(createSparkle, 2000);

    // Add gentle sway animation to flowers
    const flowers = document.querySelectorAll('.flower');
    flowers.forEach((flower, index) => {
        flower.style.animation += `, sway ${3 + index * 0.5}s ease-in-out infinite`;
    });

    // Add sway animation CSS
    const swayStyle = document.createElement('style');
    swayStyle.textContent = `
        @keyframes sway {
            0%, 100% {
                transform: rotate(0deg);
            }
            25% {
                transform: rotate(2deg);
            }
            75% {
                transform: rotate(-2deg);
            }
        }
    `;
    document.head.appendChild(swayStyle);

    // Add click effect to love messages
    const messages = document.querySelectorAll('.message-line');
    messages.forEach(message => {
        message.addEventListener('click', function() {
            this.style.color = '#ff6b9d';
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'all 0.3s ease';
            
            setTimeout(() => {
                this.style.color = '#6c5ce7';
                this.style.transform = 'scale(1)';
            }, 300);
        });
    });

    // Add romantic background music (optional - user can enable)
    function addBackgroundMusic() {
        // This would require an audio file - commented out for now
        // const audio = new Audio('romantic-music.mp3');
        // audio.loop = true;
        // audio.volume = 0.3;
        // audio.play();
    }

    // Add floating particles effect
    function createParticle() {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = window.innerHeight + 'px';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = '#ffb6c1';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1';
        particle.style.animation = 'particleFloat 8s linear forwards';
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 8000);
    }

    // Add particle animation CSS
    const particleStyle = document.createElement('style');
    particleStyle.textContent = `
        @keyframes particleFloat {
            0% {
                opacity: 1;
                transform: translateY(0) rotate(0deg);
            }
            100% {
                opacity: 0;
                transform: translateY(-100vh) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(particleStyle);

    // Create particles periodically
    setInterval(createParticle, 1000);

    // Add romantic message rotation
    const romanticMessages = [
        "You are my sunshine on a cloudy day ☀️",
        "Every moment with you is precious 💎",
        "Your love makes me feel like I'm flying 🕊️",
        "You are the missing piece to my puzzle 🧩",
        "My heart belongs to you forever 💖",
        "You make ordinary moments extraordinary ✨",
        "In your eyes, I see my future 👀",
        "You are my favorite hello and hardest goodbye 👋"
    ];

    let messageIndex = 0;
    setInterval(() => {
        const randomMessage = romanticMessages[Math.floor(Math.random() * romanticMessages.length)];
        const messageElement = document.querySelector('.message-line:last-child');
        if (messageElement) {
            messageElement.style.opacity = '0';
            setTimeout(() => {
                messageElement.textContent = randomMessage;
                messageElement.style.opacity = '1';
            }, 500);
        }
    }, 10000); // Change message every 10 seconds

    // Photo Carousel functionality
    let currentSlide = 0;
    let photos = [];
    let carouselInterval;
    let backgroundMusic = null;

    // Function to scan directory for images
    function scanForImages() {
        const romanticCaptions = [
            "Our first date 💕",
            "That perfect moment ✨",
            "When you make me laugh 😄",
            "Our cozy cuddle time 🥰",
            "Adventures together 🗺️",
            "Your beautiful smile 😊",
            "Our special place 💖",
            "Making memories 💝",
            "Perfect together 👫",
            "My favorite person ❤️"
        ];

        // Using your actual photos from the directory
        photos = [
            { src: '527208914_1115714283795588_6888680398212979086_n.jpg', caption: "Our beautiful memories together 💕", type: 'image' },
            { src: '545925529_1043121564410025_7606629660827864670_n.jpg', caption: "Every moment with you is precious ✨", type: 'image' },
            { src: '546371528_1438791450718435_469862601666260625_n.jpg', caption: "You make my heart skip a beat 💖", type: 'image' },
            { src: '546620700_1453137999251974_1102050971975599751_n.jpg', caption: "Forever and always together 💝", type: 'image' },
            { src: '546681927_1341465024247184_7190436841623085607_n.jpg', caption: "Our love story continues 💕", type: 'image' },
            { 
                type: 'special', 
                title: "A Special Message for You 💕", 
                message: "Click below to discover something beautiful I made just for you!",
                link: "https://www.desmos.com/calculator/5d4njoyoqa",
                linkText: "Open My Heart's Equation ❤️"
            }
        ];
    }

    // Initialize carousel
    function initCarousel() {
        scanForImages();
        if (photos.length > 0) {
            showSlide(0);
            createDots();
            startAutoSlide();
            setupArrowButtons();
        } else {
            document.getElementById('carouselImage').src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmY5YTllIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyMCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIHBob3RvcyBmb3VuZCDwn5iBPC90ZXh0Pjwvc3ZnPg==';
            document.getElementById('carouselCaption').textContent = "No photos found in directory 📸";
        }
    }

    // Setup arrow button event listeners - DISABLED
    function setupArrowButtons() {
        // Arrow buttons are disabled - automatic sliding only
        return;
    }

    // Show specific slide
    function showSlide(n) {
        if (photos.length === 0) return;
        
        currentSlide = (n + photos.length) % photos.length;
        const img = document.getElementById('carouselImage');
        const caption = document.getElementById('carouselCaption');
        const slideContainer = document.querySelector('.carousel-slide');
        
        const currentPhoto = photos[currentSlide];
        
        if (currentPhoto.type === 'special') {
            // Show special ending slide
            slideContainer.innerHTML = `
                <div class="special-slide">
                    <div class="special-content">
                        <h3 class="special-title">${currentPhoto.title}</h3>
                        <p class="special-message">${currentPhoto.message}</p>
                        <a href="${currentPhoto.link}" target="_blank" class="special-link">
                            ${currentPhoto.linkText}
                        </a>
                        <div class="special-hearts">
                            <span class="special-heart">💖</span>
                            <span class="special-heart">💕</span>
                            <span class="special-heart">💗</span>
                        </div>
                    </div>
                </div>
            `;
            caption.textContent = ""; // Clear caption for special slide
        } else {
            // Show regular image slide
            slideContainer.innerHTML = `
                <img id="carouselImage" src="${currentPhoto.src}" alt="Our beautiful memory">
                <div class="carousel-caption">
                    <p id="carouselCaption">${currentPhoto.caption}</p>
                </div>
            `;
        }
        
        // Update dots
        updateDots();
    }

    // Change slide - DISABLED (automatic only)
    function changeSlide(direction) {
        // Manual navigation is disabled - only automatic sliding
        return;
    }

    // Create dots for navigation
    function createDots() {
        const dotsContainer = document.querySelector('.carousel-dots');
        dotsContainer.innerHTML = '';
        
        for (let i = 0; i < photos.length; i++) {
            const dot = document.createElement('span');
            dot.className = 'dot';
            dot.onclick = () => {
                showSlide(i);
                resetAutoSlide();
            };
            dotsContainer.appendChild(dot);
        }
        updateDots();
    }

    // Update active dot
    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    // Auto slide functionality - ENABLED (no loop)
    function startAutoSlide() {
        carouselInterval = setInterval(() => {
            // Check if we're at the last slide
            if (currentSlide < photos.length - 1) {
                showSlide(currentSlide + 1);
            } else {
                // Stop at the last slide - no looping
                clearInterval(carouselInterval);
            }
        }, 4000); // Change slide every 4 seconds
    }

    function resetAutoSlide() {
        clearInterval(carouselInterval);
        startAutoSlide();
    }

    // Background music functions
    function startBackgroundMusic() {
        if (!backgroundMusic) {
            // Use your local music file
            backgroundMusic = new Audio();
            backgroundMusic.src = 'videoplayback (2).m4a';
            backgroundMusic.loop = true;
            backgroundMusic.volume = 0.3;
            
            // Add event listeners for debugging
            backgroundMusic.addEventListener('loadstart', () => {
                console.log('Music: Starting to load...');
            });
            
            backgroundMusic.addEventListener('canplay', () => {
                console.log('Music: Ready to play!');
            });
            
            backgroundMusic.addEventListener('error', (e) => {
                console.log('Music: Error loading file:', e);
                showMusicError();
            });
        }
        
        // Try to play the music
        backgroundMusic.play().catch(error => {
            console.log('Could not play background music:', error);
            // Show a notification that music couldn't be played
            showMusicError();
        });
    }

    function stopBackgroundMusic() {
        if (backgroundMusic) {
            backgroundMusic.pause();
            backgroundMusic.currentTime = 0;
        }
    }

    function showMusicError() {
        // Create a notification about music error
        const musicNotification = document.createElement('div');
        musicNotification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(255, 107, 157, 0.9);
            color: white;
            padding: 10px 15px;
            border-radius: 20px;
            font-size: 14px;
            z-index: 1002;
            animation: slideInRight 0.5s ease-out;
        `;
        musicNotification.innerHTML = '🎵 Music file not found. Enjoy the photos! 💕';
        document.body.appendChild(musicNotification);
        
        setTimeout(() => {
            if (musicNotification.parentNode) {
                musicNotification.remove();
            }
        }, 4000);
    }

    // Music permission functions
    window.enableMusicAndOpenCarousel = function() {
        // Close permission modal
        document.getElementById('musicPermissionModal').style.display = 'none';
        
        // Open carousel
        document.getElementById('photoCarousel').style.display = 'block';
        currentSlide = 0;
        initCarousel();
        
        // Start music
        startBackgroundMusic();
    };

    window.openCarouselWithoutMusic = function() {
        // Close permission modal
        document.getElementById('musicPermissionModal').style.display = 'none';
        
        // Open carousel without music
        document.getElementById('photoCarousel').style.display = 'block';
        currentSlide = 0;
        initCarousel();
    };

    // Toggle carousel modal - now shows permission first
    window.togglePhotoCarousel = function() {
        const carouselModal = document.getElementById('photoCarousel');
        const permissionModal = document.getElementById('musicPermissionModal');
        
        if (carouselModal.style.display === 'block') {
            // Close carousel
            carouselModal.style.display = 'none';
            clearInterval(carouselInterval);
            stopBackgroundMusic();
        } else {
            // Show music permission first
            permissionModal.style.display = 'block';
        }
    };

    // Close modal when clicking outside
    window.onclick = function(event) {
        const carouselModal = document.getElementById('photoCarousel');
        const permissionModal = document.getElementById('musicPermissionModal');
        
        if (event.target === carouselModal) {
            carouselModal.style.display = 'none';
            clearInterval(carouselInterval);
            stopBackgroundMusic();
        }
        
        if (event.target === permissionModal) {
            permissionModal.style.display = 'none';
        }
    };

    // Keyboard navigation
    document.addEventListener('keydown', function(event) {
        const modal = document.getElementById('photoCarousel');
        if (modal.style.display === 'block') {
            if (event.key === 'ArrowLeft') {
                changeSlide(-1);
            } else if (event.key === 'ArrowRight') {
                changeSlide(1);
            } else if (event.key === 'Escape') {
                togglePhotoCarousel();
            }
        }
    });
});
