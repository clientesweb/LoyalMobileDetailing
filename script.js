// Promotion banner rotation
const promotionContent = document.querySelector('.promotion-content');
let promotionIndex = 0;
setInterval(() => {
    promotionIndex = (promotionIndex + 1) % 3;
    promotionContent.style.transform = `translateX(-${promotionIndex * 100}%)`;
}, 5000);

// Hero image rotation
const heroImages = document.querySelectorAll('.hero-image');
let heroIndex = 0;
setInterval(() => {
    heroImages[heroIndex].classList.remove('active');
    heroIndex = (heroIndex + 1) % heroImages.length;
    heroImages[heroIndex].classList.add('active');
}, 7000);

// Ad banner slider
const adSlider = document.querySelector('.ad-slider');
let adIndex = 0;
const adSlides = document.querySelectorAll('.ad-slide');
setInterval(() => {
    adIndex = (adIndex + 1) % adSlides.length;
    adSlider.style.transform = `translateX(-${adIndex * 100}%)`;
}, 5000);

// Services data
const services = [
    { name: "Interior Detailing", image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", message: "Hi, I'm interested in Interior Detailing services." },
    { name: "Exterior Detailing", image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80", message: "Hi, I'm interested in Exterior Detailing services." },
    { name: "Ceramic Coating", image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", message: "Hi, I'm interested in Ceramic Coating services." },
    { name: "Paint Correction", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", message: "Hi, I'm interested in Paint Correction services." },
    { name: "Golf Cart Detailing", image: "https://images.unsplash.com/photo-1566933293069-b55c7f326dd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", message: "Hi, I'm interested in Golf Cart Detailing services." },
    { name: "Wheel Cleaning", image: "https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80", message: "Hi, I'm interested in Wheel Cleaning services." }
];

// Populate services
const servicesGrid = document.querySelector('.services-grid');
services.forEach(service => {
    const serviceCard = document.createElement('div');
    serviceCard.className = 'service-card animate-on-scroll';
    serviceCard.innerHTML = `
        <img src="${service.image}" alt="${service.name}">
        <div class="service-card-content">
            <h3>${service.name}</h3>
            <p>Professional ${service.name.toLowerCase()} for your vehicle.</p>
            <a href="https://wa.me/1234567890?text=${encodeURIComponent(service.message)}" class="btn" target="_blank" rel="noopener noreferrer">
                Contact on WhatsApp
            </a>
        </div>
    `;
    servicesGrid.appendChild(serviceCard);
});

// Populate gallery
const galleryGrid = document.querySelector('.gallery-grid');
const galleryImages = [
    { src: "https://images.unsplash.com/photo-1605515298946-d062f2e9da53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", category: "exterior" },
    { src: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", category: "interior" },
    { src: "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", category: "ceramic" },
    { src: "https://images.unsplash.com/photo-1600964373031-f0b65565f354?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", category: "exterior" },
    { src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", category: "ceramic" },
    { src: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", category: "paint" },
    { src: "https://images.unsplash.com/photo-1566933293069-b55c7f326dd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", category: "interior" },
    { src: "https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80", category: "exterior" }
];

galleryImages.forEach((image, index) => {
    const galleryItem = document.createElement('div');
    galleryItem.className = `gallery-item animate-on-scroll ${image.category}`;
    galleryItem.innerHTML = `
        <img src="${image.src}" alt="Detailing work ${index + 1}">
    `;
    galleryGrid.appendChild(galleryItem);
});

// Gallery filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Form submission (you'll need to implement the actual form submission logic)
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Implement form submission logic here
    alert('Thank you for your message. We will get back to you soon!');
    contactForm.reset();
});

// Scroll animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
            element.classList.add('is-visible');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});