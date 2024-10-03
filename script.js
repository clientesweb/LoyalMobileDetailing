// Data
const services = [
    { name: 'Interior Shampooing', image: '/placeholder.svg?height=200&width=300&text=Interior+Shampooing', description: 'Deep cleaning for your car\'s interior, leaving it fresh and spotless.' },
    { name: 'Paint Correction', image: '/placeholder.svg?height=200&width=300&text=Paint+Correction', description: 'Restore your car\'s paint to its original glory, removing scratches and swirls.' },
    { name: 'Ceramic Coatings', image: '/placeholder.svg?height=200&width=300&text=Ceramic+Coatings', description: 'Long-lasting protection for your car\'s exterior, enhancing shine and durability.' },
    { name: 'Buffing Specialist', image: '/placeholder.svg?height=200&width=300&text=Buffing+Specialist', description: 'Expert buffing to remove imperfections and restore your car\'s shine.' },
];

const testimonials = [
    { name: 'John Doe', role: 'Car Enthusiast', comment: "Cams Mobile Detailing transformed my old car into a showroom piece. Their attention to detail is unmatched!" },
    { name: 'Jane Smith', role: 'Business Owner', comment: "I've been using Cams for my company fleet for years. They're always professional, punctual, and deliver exceptional results." },
    { name: 'Mike Johnson', role: 'Classic Car Collector', comment: "The ceramic coating Cams applied to my vintage Mustang is incredible. It looks better than when it rolled off the factory floor!" },
];

const bannerSlides = [
    { image: 'banner1 (1).png', title: 'Professional Car Detailing', subtitle: 'Transform Your Vehicle Today' },
    { image: 'banner3 (1).png', subtitle: 'Restore Your Car\'s Original Shine' },
    { image: 'banner2.png', title: 'Premium Ceramic Coatings', subtitle: 'Long-Lasting Protection for Your Vehicle' },
];

const promoSlides = [
    { text: '🎉 Special Offer: 20% off on all detailing packages this month! Book now!' },
    { text: '🚗 New ceramic coating service available! Protect your car\'s paint today.' },
    { text: '🌟 Refer a friend and get $50 off your next service!' },
];

// Helper function to create elements with classes
function createElement(tag, classes, textContent) {
    const element =  document.createElement(tag);
    element.className = classes;
    if (textContent) element.textContent = textContent;
    return element;
}

// Promo Slider
let currentPromo = 0;
const promoSlider = document.getElementById('promoSlider');
const promoText = promoSlider.querySelector('p');

function updatePromoSlide() {
    promoText.textContent = promoSlides[currentPromo].text;
    currentPromo = (currentPromo + 1) % promoSlides.length;
}

setInterval(updatePromoSlide, 3000);
updatePromoSlide();

// Hero Slider
let currentSlide = 0;
const heroSlider = document.getElementById('heroSlider');
const prevButton = document.getElementById('prevSlide');
const nextButton = document.getElementById('nextSlide');

function updateHeroSlide() {
    const slide = bannerSlides[currentSlide];
    heroSlider.style.backgroundImage = `url(${slide.image})`;
    heroSlider.querySelector('h1').textContent = slide.title;
    heroSlider.querySelector('p').textContent = slide.subtitle;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % bannerSlides.length;
    updateHeroSlide();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + bannerSlides.length) % bannerSlides.length;
    updateHeroSlide();
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);
setInterval(nextSlide, 5000);
updateHeroSlide();

// Services Section
const servicesContainer = document.getElementById('servicesContainer');

services.forEach(service => {
    const card = createElement('div', 'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow');
    
    const image = createElement('img', 'w-full h-48 object-cover');
    image.src = service.image;
    image.alt = service.name;
    
    const content = createElement('div', 'p-6');
    const title = createElement('h3', 'text-xl font-semibold mb-2 text-gradient', service.name);
    const description = createElement('p', 'text-gray-600', service.description);
    
    content.appendChild(title);
    content.appendChild(description);
    card.appendChild(image);
    card.appendChild(content);
    servicesContainer.appendChild(card);
});

// Gallery Section
const galleryContainer = document.getElementById('galleryContainer');

for (let i = 0; i < 8; i++) {
    const item = createElement('div', 'relative group');
    const image = createElement('img', 'w-full h-64 object-cover rounded transition-transform duration-300 group-hover:scale-105');
    image.src = `/placeholder.svg?height=300&width=300&text=Work+${i + 1}`;
    image.alt = `Work ${i + 1}`;
    item.appendChild(image);
    galleryContainer.appendChild(item);
}

// Testimonials Section
const testimonialsContainer = document.getElementById('testimonialsContainer');

testimonials.forEach(testimonial => {
    const card = createElement('div', 'bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow');
    
    const comment = createElement('p', 'text-gray-600 mb-4', `"${testimonial.comment}"`);
    
    const authorInfo = createElement('div', 'flex items-center');
    const avatar = createElement('img', 'w-12 h-12 rounded-full mr-4');
    avatar.src = `/placeholder.svg?height=50&width=50&text=${testimonial.name}`;
    avatar.alt = testimonial.name;
    
    const authorDetails = createElement('div');
    const name = createElement('h4', 'font-semibold text-gradient', testimonial.name);
    const role = createElement('p', 'text-sm text-gray-500', testimonial.role);
    
    authorDetails.appendChild(name);
    authorDetails.appendChild(role);
    authorInfo.appendChild(avatar);
    authorInfo.appendChild(authorDetails);
    
    card.appendChild(comment);
    card.appendChild(authorInfo);
    testimonialsContainer.appendChild(card);
});

// Form submissions
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert('Thank you for your message. We will get back to you soon!');
    this.reset();
});

document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would typically send the email to a server for newsletter subscription
    alert('Thank you for subscribing to our newsletter!');
    this.reset();
});