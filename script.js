// Shared functionality across all pages
document.addEventListener('DOMContentLoaded', function() {
    // Music toggle functionality
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    
    if (musicToggle && bgMusic) {
        // Try to play music (will fail without user interaction)
        function attemptPlay() {
            bgMusic.volume = 0.3;
            const promise = bgMusic.play();
            
            if (promise !== undefined) {
                promise.catch(error => {
                    musicToggle.textContent = '🎵 Play Music';
                });
            }
        }
        
        musicToggle.addEventListener('click', function() {
            if (bgMusic.paused) {
                attemptPlay();
                this.textContent = '🔇 Stop Music';
            } else {
                bgMusic.pause();
                this.textContent = '🎵 Play Music';
            }
        });
    }
    
    // Download functionality (for Peter's story page)
    const downloadBtn = document.getElementById('downloadBtn');
    const loginForm = document.getElementById('loginForm');
    
    if (downloadBtn && loginForm) {
        downloadBtn.addEventListener('click', function() {
            loginForm.classList.toggle('hidden');
        });
        
        const loginBtn = document.getElementById('loginBtn');
        if (loginBtn) {
            loginBtn.addEventListener('click', function() {
                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;
                
                if (username === 'admin' && password === '1234') {
                    alert('PDF download would start now in a full implementation.');
                    loginForm.classList.add('hidden');
                } else {
                    alert('Invalid credentials. Try again.');
                }
            });
        }
    }
    
    // Set active navigation item based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-btn');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if ((currentPage === 'index.html' && linkPage === 'index.html') || 
            (currentPage !== 'index.html' && linkPage.includes(currentPage))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
