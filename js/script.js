document.addEventListener('DOMContentLoaded', function() {
    // 1. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar-custom');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // 2. Simple Cart Interaction (Mockup)
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    const cartBadge = document.querySelector('.cart-badge');
    let cartCount = 0;

    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            cartCount++;
            if (cartBadge) {
                cartBadge.textContent = cartCount;
            }
            
            // Simple visual feedback
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="bi bi-check-lg"></i> Added';
            this.classList.add('btn-success');
            this.classList.remove('btn-primary-custom');
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.classList.remove('btn-success');
                this.classList.add('btn-primary-custom');
            }, 2000);
        });
    });

    // 3. Product Gallery Thumbnail Click (detail.html)
    const thumbs = document.querySelectorAll('.thumb-item');
    const mainImg = document.getElementById('mainGalleryImage');

    if (thumbs.length > 0 && mainImg) {
        thumbs.forEach(thumb => {
            thumb.addEventListener('click', function() {
                // Remove active class from all
                thumbs.forEach(t => t.classList.remove('active'));
                // Add active class to clicked
                this.classList.add('active');
                
                // Change main image source
                const newSrc = this.querySelector('img').getAttribute('src');
                mainImg.setAttribute('src', newSrc);
            });
        });
    }
});
