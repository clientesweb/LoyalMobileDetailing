document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll animations
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1
    });

    animateOnScrollElements.forEach(el => {
        observer.observe(el);
    });

    // Services data
    const services = [
        {
            title: "Interior Detailing",
            description: "Deep clean and sanitize your car's interior for a fresh, like-new feel.",
            image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        },
        {
            title: "Exterior Detailing",
            description: "Restore your car's shine with our thorough exterior detailing service.",
            image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            title: "Ceramic Coating",
            description: "Protect your car's paint with our long-lasting ceramic coating service.",
            image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
        },
        {
            title: "Paint Correction",
            description: "Remove scratches and swirl marks to restore your car's perfect finish.",
            image: "https://images.unsplash.com/photo-1612570158821-4503900049b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
        }
    ];

    // Populate services
    const servicesGrid = document.getElementById('servicesGrid');
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.classList.add('service-card', 'animate-on-scroll');
        serviceCard.innerHTML = `
            <img src="${service.image}" alt="${service.title}" loading="lazy">
            <div class="service-card-content">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <a href="#contact" class="btn">Book Now</a>
            </div>
        `;
        servicesGrid.appendChild(serviceCard);
    });

    // Gallery data
    const galleryItems = [
        { image: "https://images.unsplash.com/photo-1605515298946-d062f2e9da53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", category: "interior" },
        { image: "https://images.unsplash.com/photo-1600964373031-f0b65565f354?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", category: "exterior" },
        { image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", category: "ceramic" },
        { image: "https://images.unsplash.com/photo-1612570158821-4503900049b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", category: "paint" },
        { image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80", category: "interior" },
        { image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", category: "exterior" }
    ];

    // Populate gallery
    const galleryGrid = document.getElementById('galleryGrid');
    galleryItems.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item', 'animate-on-scroll');
        galleryItem.dataset.category = item.category;
        galleryItem.innerHTML = `<img src="${item.image}" alt="Gallery Image" loading="lazy">`;
        galleryGrid.appendChild(galleryItem);
    });

    // Gallery filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            galleryGrid.querySelectorAll('.gallery-item').forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Hero image slider
    const heroImages = document.querySelectorAll('.hero-image');
    let currentImageIndex = 0;

    function showNextImage() {
        heroImages[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % heroImages.length;
        heroImages[currentImageIndex].classList.add('active');
    }

    setInterval(showNextImage, 5000); // Change image every 5 seconds

    // Ad banner slider
    const adSlider = document.getElementById('adSlider');
    const adSlides = [
        {
            image: "https://images.unsplash.com/photo-1605515298946-d062f2e9da53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            title: "Limited Time Offer!",
            description: "Get 30% off on our Ceramic Coating package",
            cta: "Book Now"
        },
        {
            image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
            title: "Summer Special!",
            description: "Full Interior & Exterior Detailing for just $199",
            cta: "Learn More"
        },
        {
            image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            title: "New Client Discount!",
            description: "20% off your first service with us",
            cta: "Claim Offer"
        }
    ];

    adSlides.forEach(slide => {
        const adSlide = document.createElement('div');
        adSlide.classList.add('ad-slide');
        adSlide.innerHTML = `
            <img src="${slide.image}" alt="${slide.title}" loading="lazy">
            <div class="ad-content">
                <h3>${slide.title}</h3>
                <p>${slide.description}</p>
                <a href="#contact" class="btn">${slide.cta}</a>
            </div>
        `;
        adSlider.appendChild(adSlide);
    });

    let currentAdIndex = 0;

    function showNextAd() {
        currentAdIndex = (currentAdIndex + 1) % adSlides.length;
        adSlider.style.transform = `translateX(-${currentAdIndex * 100}%)`;
    }

    setInterval(showNextAd, 5000); // Change ad every 5 seconds

    // Promotion content slider
    const promotionContent = document.querySelector('.promotion-content');
    const promotionItems = document.querySelectorAll('.promotion-item');
    let currentPromotionIndex = 0;

    function showNextPromotion() {
        currentPromotionIndex = (currentPromotionIndex + 1) % promotionItems.length;
        promotionContent.style.transform = `translateX(-${currentPromotionIndex * 100}%)`;
    }

    setInterval(showNextPromotion, 3000); // Change promotion every 3 seconds

    // Form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    });

    // Sticky header
    const topBanner = document.querySelector('.top-banner');
    const mainHeader = document.getElementById('main-header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            topBanner.style.transform = `translateY(-100%)`;
            mainHeader.style.transform = `translateY(-${topBanner.offsetHeight}px)`;
        } else {
            // Scrolling up
            topBanner.style.transform = `translateY(0)`;
            mainHeader.style.transform = `translateY(0)`;
        }
        lastScrollTop = scrollTop;
    });

    // Lazy loading images
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('loading');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // Add smooth scrolling behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});