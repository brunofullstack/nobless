// Vertical Menu Toggle
const menuToggleBtn = document.getElementById('menu-toggle-btn');
const verticalMenuOverlay = document.getElementById('vertical-menu-overlay');
const menuBackdrop = document.getElementById('menu-backdrop');
const closeMenuBtn = document.getElementById('close-menu-btn');

// Property Slider
const propertySlider = document.getElementById('property-slider');
const sliderPrev = document.getElementById('slider-prev');
const sliderNext = document.getElementById('slider-next');
let currentSlide = 0;
const totalSlides = document.querySelectorAll('.property-slide').length || 5;

// Open vertical menu
if (menuToggleBtn) {
    menuToggleBtn.addEventListener('click', function () {
        verticalMenuOverlay.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
    });
}

// Close vertical menu
function closeMenu() {
    if (verticalMenuOverlay) {
        verticalMenuOverlay.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }
}

if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenu);
if (menuBackdrop) menuBackdrop.addEventListener('click', closeMenu);

// Close menu on escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && verticalMenuOverlay && !verticalMenuOverlay.classList.contains('hidden')) {
        closeMenu();
    }
});

// Property Slider Navigation
function updateSlider() {
    if (propertySlider) {
        const translateX = -currentSlide * 100;
        propertySlider.style.transform = `translateX(${translateX}%)`;
    }
}

if (sliderNext) {
    sliderNext.addEventListener('click', function () {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
        resetAutoSlide();
    });
}

if (sliderPrev) {
    sliderPrev.addEventListener('click', function () {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
        resetAutoSlide();
    });
}

// Auto-slide functionality
let autoSlideInterval;

function startAutoSlide() {
    if (propertySlider) {
        autoSlideInterval = setInterval(function () {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        }, 5000);
    }
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

startAutoSlide();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Close menu if open
            if (verticalMenuOverlay && !verticalMenuOverlay.classList.contains('hidden')) {
                closeMenu();
            }
        }
    });
});

// Add scroll effect to header
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.classList.add('bg-white/98');
            header.classList.remove('bg-white/95');
        } else {
            header.classList.add('bg-white/95');
            header.classList.remove('bg-white/98');
        }
    }
});

// Slider Implementation
function initSlider() {
    const slides = document.querySelectorAll('.flex__container');
    const navLinks = document.querySelectorAll('.slide-nav');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentSlideIndex = 0;
    let sliderInterval;

    if (slides.length === 0) return;

    // Mostrar slide inicial
    showSlide(currentSlideIndex);

    // Navegação por pontos
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const slideIndex = parseInt(this.getAttribute('data-slide')) - 1;
            goToSlide(slideIndex);
        });
    });

    // Controles de navegação
    if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentSlideIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentSlideIndex + 1));

    // Função para mostrar slide específico
    function goToSlide(n) {
        // Limitar o índice do slide
        if (n >= slides.length) n = 0;
        if (n < 0) n = slides.length - 1;

        // Esconder slide atual
        slides[currentSlideIndex].classList.remove('flex--active');
        slides[currentSlideIndex].classList.add('animate--start');
        if (navLinks[currentSlideIndex]) navLinks[currentSlideIndex].classList.remove('active');

        // Atualizar índice
        currentSlideIndex = n;

        // Mostrar novo slide
        showSlide(currentSlideIndex);
    }

    // Mostrar slide
    function showSlide(n) {
        slides[n].classList.add('flex--active');
        slides[n].classList.remove('animate--start');
        if (navLinks[n]) navLinks[n].classList.add('active');
    }

    // Autoplay
    function startSliderInterval() {
        sliderInterval = setInterval(() => goToSlide(currentSlideIndex + 1), 5000);
    }

    startSliderInterval();

    // Pausar autoplay ao interagir
    slides.forEach(slide => {
        slide.addEventListener('mouseenter', () => clearInterval(sliderInterval));
        slide.addEventListener('mouseleave', startSliderInterval);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    initSlider();
    initPropertyCarousel();
});


// Mobile menu toggle
document.getElementById('mobile-menu-btn').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Mobile filter toggle
document.getElementById('mobile-filter-btn').addEventListener('click', function () {
    const filterPanel = document.getElementById('mobile-filter-panel');
    const chevron = document.getElementById('filter-chevron');

    filterPanel.classList.toggle('hidden');
    chevron.classList.toggle('rotate-180');
});

// Sort functionality
document.getElementById('sort-select').addEventListener('change', function () {
    const sortValue = this.value;
    console.log('Sorting by:', sortValue);
    // Implement sorting logic here
});

// Load more functionality
document.getElementById('load-more-btn').addEventListener('click', function () {
    const loadingCards = document.getElementById('loading-cards');
    const button = this;

    // Show loading state
    button.textContent = 'Carregando...';
    button.disabled = true;
    loadingCards.classList.remove('hidden');

    // Simulate loading delay
    setTimeout(() => {
        loadingCards.classList.add('hidden');
        button.textContent = 'Carregar Mais Propriedades';
        button.disabled = false;

        // In a real application, you would load more properties here
        console.log('Loading more properties...');
    }, 2000);
});

// Smooth scrolling for anchor links
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

// Add scroll effect to header
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('bg-white/98');
        header.classList.remove('bg-white/95');
    } else {
        header.classList.add('bg-white/95');
        header.classList.remove('bg-white/98');
    }
});

// Infinite scroll simulation (optional)
let isLoading = false;
window.addEventListener('scroll', function () {
    if (isLoading) return;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight - 1000) {
        isLoading = true;

        // Simulate loading more content
        setTimeout(() => {
            console.log('Auto-loading more properties...');
            isLoading = false;
        }, 1000);
    }
});


// Filtros principais - MISSING IMPLEMENTATION
function initFilters() {
    const typeFilter = document.querySelector('select[placeholder="Tipo de Propriedade"]');
    const locationFilter = document.querySelector('select[placeholder="Localização"]');
    const propertyCards = document.querySelectorAll('.property-card'); // Need to add this class

    if (typeFilter && locationFilter) {
        typeFilter.addEventListener('change', applyFilters);
        locationFilter.addEventListener('change', applyFilters);
    }

    function applyFilters() {
        const selectedType = typeFilter ? typeFilter.value : 'all';
        const selectedLocation = locationFilter ? locationFilter.value : 'all';

        propertyCards.forEach(card => {
            const cardType = card.dataset.type || '';
            const cardLocation = card.dataset.location || '';

            const typeMatch = selectedType === 'all' || cardType === selectedType;
            const locationMatch = selectedLocation === 'all' || cardLocation === selectedLocation;

            card.style.display = (typeMatch && locationMatch) ? 'block' : 'none';
        });
    }
}

// Limpar filtros - MISSING IMPLEMENTATION  
function initClearFilters() {
    const clearBtn = document.querySelector('button:contains("Limpar Filtros")');
    if (clearBtn) {
        clearBtn.addEventListener('click', function () {
            // Reset all filter selects
            // Reapply filters (show all)
        });
    }
}

// Fix for initPropertyCarousel error
function initPropertyCarousel() {
    // Your carousel initialization code here
    console.log('Property carousel initialized');
}