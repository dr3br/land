// ===================================
// DOM Elements
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Navigation
    const header = document.getElementById('header');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    // Diferenciais
    const centralCircle = document.getElementById('centralCircle');
    const orbitItems = document.querySelectorAll('.orbit-item');
    const diferenciasInfo = document.getElementById('diferenciasInfo');
    const diferenciasGrid = document.getElementById('diferenciasGrid');
    
    // Progress bars
    const progressItems = document.querySelectorAll('.progress-item');
    const progressTotal = document.querySelector('.progress-total');
    
    // Timeline
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // All animated elements
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-left, .fade-in-right, .fade-in-scale');
    
    // ===================================
    // Header Scroll Effect
    // ===================================
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // ===================================
    // Mobile Navigation Toggle
    // ===================================
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Toggle icon
            const icon = navToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.querySelector('i').classList.remove('fa-times');
                navToggle.querySelector('i').classList.add('fa-bars');
            });
        });
    }
    
    // ===================================
    // Intersection Observer for Animations
    // ===================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Trigger progress bar animations for andamento section
                if (entry.target.closest('.andamento')) {
                    animateProgressBars();
                    animateTimeline();
                }
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(el => {
        animationObserver.observe(el);
    });
    
    // ===================================
    // Diferenciais Interactive Section
    // ===================================
    let isExpanded = false;
    
    // Central circle click to expand/collapse
    if (centralCircle) {
        centralCircle.addEventListener('click', () => {
            isExpanded = !isExpanded;
            
            if (isExpanded) {
                centralCircle.style.transform = 'translate(-50%, -50%) scale(1.3)';
                centralCircle.style.boxShadow = '0 0 100px rgba(140, 22, 50, 0.9)';
                diferenciasGrid.classList.add('active');
            } else {
                centralCircle.style.transform = 'translate(-50%, -50%) scale(1)';
                centralCircle.style.boxShadow = '0 0 60px rgba(140, 22, 50, 0.5)';
                diferenciasGrid.classList.remove('active');
            }
        });
    }
    
    // Orbit items hover/click effects
    orbitItems.forEach(item => {
        const infoText = item.getAttribute('data-info');
        
        // Hover effect shows info
        item.addEventListener('mouseenter', () => {
            if (diferenciasInfo) {
                diferenciasInfo.style.opacity = '0';
                setTimeout(() => {
                    diferenciasInfo.innerHTML = `<p class="info-text">${infoText}</p>`;
                    diferenciasInfo.style.opacity = '1';
                }, 200);
            }
            
            // Highlight corresponding card in grid
            const targetId = item.classList.contains('orbit-1') ? 'orbit-1' : 
                            item.classList.contains('orbit-2') ? 'orbit-2' :
                            item.classList.contains('orbit-3') ? 'orbit-3' :
                            item.classList.contains('orbit-4') ? 'orbit-4' :
                            item.classList.contains('orbit-5') ? 'orbit-5' : 'orbit-6';
            
            const correspondingCard = document.querySelector(`.diff-card[data-target="${targetId}"]`);
            if (correspondingCard) {
                correspondingCard.style.background = 'rgba(140, 22, 50, 0.5)';
                correspondingCard.style.borderColor = '#8C1632';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            if (diferenciasInfo && !isExpanded) {
                diferenciasInfo.style.opacity = '0';
                setTimeout(() => {
                    diferenciasInfo.innerHTML = '<p class="info-text">Passe o mouse ou clique nos ícones para ver os diferenciais</p>';
                    diferenciasInfo.style.opacity = '1';
                }, 200);
            }
            
            // Remove highlight from cards
            document.querySelectorAll('.diff-card').forEach(card => {
                card.style.background = '';
                card.style.borderColor = '';
            });
        });
        
        // Click to expand
        item.addEventListener('click', () => {
            if (!isExpanded) {
                isExpanded = true;
                centralCircle.style.transform = 'translate(-50%, -50%) scale(1.3)';
                centralCircle.style.boxShadow = '0 0 100px rgba(140, 22, 50, 0.9)';
                diferenciasGrid.classList.add('active');
            }
        });
    });
    
    // Grid cards interaction
    document.querySelectorAll('.diff-card').forEach(card => {
        card.addEventListener('click', () => {
            const targetId = card.getAttribute('data-target');
            const targetOrbit = document.querySelector(`.${targetId}`);
            
            if (targetOrbit) {
                // Scroll to and highlight the orbit item
                targetOrbit.scrollIntoView({ behavior: 'smooth', block: 'center' });
                targetOrbit.style.transform = 'scale(1.3)';
                setTimeout(() => {
                    targetOrbit.style.transform = '';
                }, 1000);
            }
        });
    });
    
    // ===================================
    // Progress Bars Animation
    // ===================================
    function animateProgressBars() {
        progressItems.forEach((item, index) => {
            const progressFill = item.querySelector('.progress-fill');
            const targetWidth = progressFill.getAttribute('data-width');
            
            setTimeout(() => {
                progressFill.style.width = targetWidth;
            }, index * 150); // Staggered animation
        });
    }
    
    // Animate progress bars when section is visible
    const andamentoSection = document.querySelector('.andamento');
    if (andamentoSection) {
        const progressoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateProgressBars();
                }
            });
        }, { threshold: 0.3 });
        
        progressoObserver.observe(andamentoSection);
    }
    
    // ===================================
    // Timeline Animation
    // ===================================
    function animateTimeline() {
        timelineItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 300);
        });
    }
    
    // Observe timeline items
    if (timelineItems.length > 0) {
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateTimeline();
                }
            });
        }, { threshold: 0.3 });
        
        timelineObserver.observe(document.querySelector('.timeline-container'));
    }
    
    // ===================================
    // Smooth Scroll for Anchor Links
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===================================
    // Form Submission Handler
    // ===================================
    const heroForm = document.querySelector('.hero-form');
    if (heroForm) {
        heroForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(heroForm);
            const data = Object.fromEntries(formData);
            
            // Get radio button value
            const tipoComprador = document.querySelector('input[name="tipo"]:checked');
            data.tipo = tipoComprador ? tipoComprador.value : 'comprador';
            
            console.log('Form submitted:', data);
            
            // Show success message (in real implementation, send to backend)
            alert('Obrigado! Em breve entraremos em contato.');
            heroForm.reset();
        });
    }
    
    // ===================================
    // Parallax Effect for Hero
    // ===================================
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroSection = document.querySelector('.hero');
            
            if (heroSection && scrolled < heroSection.offsetHeight) {
                heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        });
    }
    
    // ===================================
    // Counter Animation for Stats
    // ===================================
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start) + '%';
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + '%';
            }
        }
        
        updateCounter();
    }
    
    // Animate total progress counter
    if (progressTotal) {
        const totalObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const targetValue = parseInt(progressTotal.textContent);
                    animateCounter(progressTotal, targetValue);
                    totalObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        totalObserver.observe(progressTotal);
    }
    
    // ===================================
    // Gallery Image Zoom on Click
    // ===================================
    document.querySelectorAll('.galeria-item').forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const src = img.src;
            
            // Create modal
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(22, 51, 65, 0.95);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2000;
                cursor: pointer;
                animation: fadeIn 0.3s ease;
            `;
            
            const modalImg = document.createElement('img');
            modalImg.src = src;
            modalImg.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                object-fit: contain;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
            `;
            
            modal.appendChild(modalImg);
            document.body.appendChild(modal);
            
            // Close on click
            modal.addEventListener('click', () => {
                modal.style.animation = 'fadeOut 0.3s ease';
                setTimeout(() => modal.remove(), 300);
            });
        });
    });
    
    // Add fade animations dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    // ===================================
    // Map Markers Interaction
    // ===================================
    document.querySelectorAll('.map-marker').forEach(marker => {
        marker.addEventListener('mouseenter', () => {
            marker.style.zIndex = '10';
            marker.style.transform = 'scale(1.2)';
        });
        
        marker.addEventListener('mouseleave', () => {
            marker.style.zIndex = '';
            marker.style.transform = '';
        });
    });
    
    // ===================================
    // Performance Optimization: Lazy Load Images
    // ===================================
    const lazyImages = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                // Images are already loaded as SVG placeholders
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
    
    // ===================================
    // Initialize animations on page load
    // ===================================
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => {
            el.classList.add('visible');
        });
    }, 100);
    
    console.log('Euville Residencial - Site carregado com sucesso!');
});
