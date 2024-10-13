document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const header = document.getElementById('main-header');
    const servicesGrid = document.getElementById('servicesGrid');
    const galleryGrid = document.getElementById('galleryGrid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const contactForm = document.getElementById('contactForm');
    const adSlider = document.getElementById('adSlider');

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Services data
    const services = [
        {
            title: "Detallado Interior",
            description: "Limpieza profunda y desinfección del interior de su auto para una sensación fresca y como nueva.",
            image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        },
        {
            title: "Detallado Exterior",
            description: "Restaure el brillo de su auto con nuestro servicio de detallado exterior completo.",
            image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            title: "Recubrimiento Cerámico",
            description: "Proteja la pintura de su auto con nuestro servicio de recubrimiento cerámico de larga duración.",
            image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
        },
        {
            title: "Corrección de Pintura",
            description: "Elimine rayones y marcas de remolino para restaurar el acabado perfecto de su auto.",
            image: "https://images.unsplash.com/photo-1612570158821-4503900049b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
        }
    ];

    // Populate services grid
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card animate-on-scroll';
        serviceCard.innerHTML = `
            <img src="${service.image}" alt="${service.title}">
            <div class="service-card-content">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <a href="#contact" class="btn">Reservar Ahora</a>
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

    // Populate gallery grid
    function populateGallery(items) {
        galleryGrid.innerHTML = '';
        items.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item animate-on-scroll';
            galleryItem.innerHTML = `<img src="${item.image}" alt="Gallery item">`;
            galleryGrid.appendChild(galleryItem);
        });
    }

    populateGallery(galleryItems);

    // Gallery filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filteredItems = filter === 'all' 
                ? galleryItems 
                : galleryItems.filter(item => item.category === filter);
            
            populateGallery(filteredItems);
        });
    });

    // Contact form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Gracias por su mensaje. Nos pondremos en contacto con usted pronto.');
        contactForm.reset();
    });

    // Ad banner slider
    const ads = [
        { image: "https://images.unsplash.com/photo-1605515298946-d062f2e9da53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", title: "Oferta Especial", description: "20% de descuento en detallado completo" },
        { image: "https://images.unsplash.com/photo-1600964373031-f0b65565f354?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", title: "Nuevo Servicio", description: "Recubrimiento cerámico ahora disponible" },
        { image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Paquete de Temporada", description: "Detallado interior + exterior por $199" }
    ];

    ads.forEach(ad => {
        const adSlide = document.createElement('div');
        adSlide.className = 'ad-slide';
        adSlide.innerHTML = `
            <img src="${ad.image}" alt="${ad.title}">
            <div class="ad-content">
                <h3>${ad.title}</h3>
                <p>${ad.description}</p>
                <a href="#contact" class="btn">Reservar Ahora</a>
            </div>
        `;
        adSlider.appendChild(adSlide);
    });

    let currentSlide = 0;
    function nextSlide() {
        currentSlide = (currentSlide + 1) % ads.length;
        adSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    setInterval(nextSlide, 5000);

    // Scroll animation
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            if (rect.top <= windowHeight * 0.75) {
                el.classList.add('is-visible');
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check

    // Hero image slider
    const heroImages = [
        "https://images.unsplash.com/photo-1600964373031-f0b65565f354?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1605515298946-d062f2e9da53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    ];

    let currentHeroImage = 0;
    const heroImageContainer = document.querySelector('.hero-image-container');

    function createHeroImage(src, index) {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Hero image ${index + 1}`;
        img.className = `hero-image ${index === 0 ? 'active' : ''}`;
        heroImageContainer.appendChild(img);
    }

    heroImages.forEach(createHeroImage);

    function nextHeroImage() {
        const images = heroImageContainer.querySelectorAll('.hero-image');
        images[currentHeroImage].classList.remove('active');
        currentHeroImage = (currentHeroImage + 1) % images.length;
        images[currentHeroImage].classList.add('active');
    }

    setInterval(nextHeroImage, 5000);

    // Promotion banner
    const promotionItems = document.querySelectorAll('.promotion-item');
    let currentPromotion = 0;

    function nextPromotion() {
        promotionItems[currentPromotion].style.transform = 'translateX(-100%)';
        currentPromotion = (currentPromotion + 1) % promotionItems.length;
        promotionItems[currentPromotion].style.transform = 'translateX(0)';
    }

    setInterval(nextPromotion, 3000);
});