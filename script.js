document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const header = document.getElementById('main-header');
    const servicesGrid = document.getElementById('servicesGrid');
    const galleryGrid = document.getElementById('galleryGrid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const contactForm = document.getElementById('contactForm');
    const adSlider = document.getElementById('adSlider');
    const preloader = document.getElementById('preloader');
    const promotionSlider = document.getElementById('promotion-slider');
    const topBanner = document.getElementById('top-banner');

    // Preloader
window.addEventListener('load', () => {
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 500); // Añadimos un pequeño retraso para asegurar que todo se ha cargado
    }
});

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            mobileMenu.classList.add('hidden');
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Header scroll effect
    function updateHeaderPosition() {
        const topBannerHeight = topBanner.offsetHeight;
        header.style.top = `${topBannerHeight}px`;
        headerSpacer.style.height = `${header.offsetHeight + topBannerHeight}px`;
        if (window.scrollY > topBannerHeight) {
            header.classList.add('bg-black', 'shadow-md');
        } else {
            header.classList.remove('bg-black', 'shadow-md');
        }
    }

    window.addEventListener('scroll', updateHeaderPosition);
    window.addEventListener('resize', updateHeaderPosition);
    updateHeaderPosition(); // Llamamos a la función inmediatamente para establecer la posición inicial

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

    // Populate services grid
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover-scale';
        serviceCard.innerHTML = `
            <img src="${service.image}" alt="${service.title}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-xl font-semibold mb-2">${service.title}</h3>
                <p class="text-gray-600 mb-4">${service.description}</p>
                <a href="#contact" class="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">Book Now</a>
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
            galleryItem.className = 'relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover-scale';
            galleryItem.innerHTML = `
                <img src="${item.image}" alt="Gallery item" class="w-full h-64 object-cover">
                <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <span class="text-white text-lg font-semibold">View</span>
                </div>
            `;
            galleryGrid.appendChild(galleryItem);
        });
    }

    populateGallery(galleryItems);

    // Gallery filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.textContent.toLowerCase();
            filterButtons.forEach(btn => btn.classList.remove('active', 'bg-blue-600', 'text-white'));
            button.classList.add('active', 'bg-blue-600', 'text-white');

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
        alert('Thank you for your message. We will contact you soon.');
        contactForm.reset();
    });

    // Ad banner slider
    const ads = [
        { image: "https://images.unsplash.com/photo-1605515298946-d062f2e9da53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", title: "Special Offer", description: "20% off full detailing" },
        { image: "https://images.unsplash.com/photo-1600964373031-f0b65565f354?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", title: "New Service", description: "Ceramic coating now available" },
        { image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", title: "Season Package", description: "Interior + Exterior detailing for $199" }
    ];

    let currentAdIndex = 0;

    function updateAdSlider() {
        const ad = ads[currentAdIndex];
        adSlider.innerHTML = `
            <div class="flex items-center bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl">
                <img src="${ad.image}" alt="${ad.title}" class="w-1/2 h-64 object-cover">
                <div class="w-1/2 p-6">
                    <h3 class="text-2xl font-semibold mb-2">${ad.title}</h3>
                    <p class="text-gray-600 mb-4">${ad.description}</p>
                    <a href="#contact" class="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">Book Now</a>
                </div>
            </div>
        `;
        currentAdIndex = (currentAdIndex + 1) % ads.length;
    }

    updateAdSlider();
    setInterval(updateAdSlider, 5000);

    // Top banner promotion slider
    const promotions = [
        "Special offer! 20% off full detailing",
        "Book now and get a free wash",
        "Season package: Interior + Exterior detailing for $199"
    ];

    let currentPromotionIndex = 0;

    function updatePromotionSlider() {
        promotionSlider.innerHTML = `
            <div class="text-center transition-all duration-500 transform translate-y-0">
                ${promotions[currentPromotionIndex]}
            </div>
        `;
        currentPromotionIndex = (currentPromotionIndex + 1) % promotions.length;
    }

    updatePromotionSlider();
    setInterval(updatePromotionSlider, 5000);

    // Intersection Observer for fade-in effect
    const fadeElems = document.querySelectorAll('.fade-in');
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, { threshold: 0.1 });

    fadeElems.forEach(elem => {
        elem.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-500');
        fadeObserver.observe(elem);
    });
});