// AI Expert Landing Page JavaScript - Fixed Version

document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing AI Expert Landing Page...');

    // Modal functionality for Lead Magnet
    const leadMagnetBtn = document.getElementById('leadMagnetBtn'); // Existing, but not used by default
    const heroTelegramBtn = document.getElementById('heroTelegramBtn'); // New button in hero
    const contactTelegramBtn = document.getElementById('contactTelegramBtn'); // New button in contact
    const leadMagnetModal = document.getElementById('leadMagnetModal');
    const closeModal = document.getElementById('closeModal');
    const modalOverlay = document.getElementById('modalOverlay');

    // Modal functionality for Consultation
    const consultationBtn = document.getElementById('consultationBtn');
    const consultationModal = document.getElementById('consultationModal');
    const closeConsultationModal = document.getElementById('closeConsultationModal');
    const consultationModalOverlay = document.getElementById('consultationModalOverlay');
    const priceCardBtns = document.querySelectorAll('.price-card__btn'); // Buttons in price cards
    const viewCasesBtn = document.getElementById('viewCasesBtn'); // New button in contact

    // Debug logging
    console.log('Modal elements found:', {
        leadMagnetModal: !!leadMagnetModal,
        consultationModal: !!consultationModal,
        heroTelegramBtn: !!heroTelegramBtn,
        contactTelegramBtn: !!contactTelegramBtn,
        consultationBtn: !!consultationBtn,
        priceCardBtns: priceCardBtns.length > 0,
        viewCasesBtn: !!viewCasesBtn
    });

    // Function to open a specific modal
    function openModal(modalElement, event) {
        if (event) {
            event.preventDefault();
        }
        if (modalElement) {
            modalElement.classList.add('open');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
            const modalContent = modalElement.querySelector('.modal__content');
            if (modalContent) {
                modalContent.style.transform = 'scale(0.95)';
                modalContent.style.opacity = '0';
                // Force reflow
                modalContent.offsetHeight;
                setTimeout(() => {
                    modalContent.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
                    modalContent.style.transform = 'scale(1)';
                    modalContent.style.opacity = '1';
                }, 10);
            }
            console.log(`Opening modal: ${modalElement.id}`);
        }
    }

    // Function to close a specific modal
    function closeModalFunc(modalElement) {
        if (modalElement) {
            const modalContent = modalElement.querySelector('.modal__content');
            if (modalContent) {
                modalContent.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
                modalContent.style.transform = 'scale(0.95)';
                modalContent.style.opacity = '0';
                setTimeout(() => {
                    modalElement.classList.remove('open');
                    document.body.style.overflow = ''; // Restore scrolling
                    modalContent.style.transition = ''; // Reset transition
                }, 300); // Match CSS transition duration
            } else {
                modalElement.classList.remove('open');
                document.body.style.overflow = '';
            }
            console.log(`Closing modal: ${modalElement.id}`);
        }
    }

    // Event Listeners for Lead Magnet Modal
    if (heroTelegramBtn) {
        heroTelegramBtn.addEventListener('click', (e) => openModal(leadMagnetModal, e));
    }
    if (contactTelegramBtn) {
        contactTelegramBtn.addEventListener('click', (e) => openModal(leadMagnetModal, e));
    }
    if (closeModal) {
        closeModal.addEventListener('click', () => closeModalFunc(leadMagnetModal));
    }
    if (modalOverlay) {
        modalOverlay.addEventListener('click', () => closeModalFunc(leadMagnetModal));
    }

    // Event Listeners for Consultation Modal
    if (consultationBtn) {
        consultationBtn.addEventListener('click', (e) => openModal(consultationModal, e));
    }
    if (closeConsultationModal) {
        closeConsultationModal.addEventListener('click', () => closeModalFunc(consultationModal));
    }
    if (consultationModalOverlay) {
        consultationModalOverlay.addEventListener('click', () => closeModalFunc(consultationModal));
    }

    // Event Listeners for Price Card Buttons
    priceCardBtns.forEach(button => {
        button.addEventListener('click', (e) => {
            const targetModalId = button.dataset.modalTarget;
            const targetModal = document.getElementById(targetModalId);
            if (targetModal) {
                openModal(targetModal, e);
            }
        });
    });

    // Event Listener for View Cases Button (placeholder for now, can link to portfolio section)
    if (viewCasesBtn) {
        viewCasesBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const portfolioSection = document.querySelector('.portfolio');
            if (portfolioSection) {
                portfolioSection.scrollIntoView({ behavior: 'smooth' });
            }
            console.log('View Cases button clicked!');
        });
    }

    // Hero image hover effect (existing, adapted)
    const heroPhoto = document.querySelector('.hero__photo');
    if (heroPhoto) {
        heroPhoto.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(0deg) scale(1.02)';
            this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.6)';
        });
        heroPhoto.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(3deg) scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.4)';
        });
    }

    // Performance optimization: reduce animations on slower devices
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (reducedMotion.matches) {
        // Disable animations for users who prefer reduced motion
        const style = document.createElement('style');
        style.textContent = `
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        `;
        document.head.appendChild(style);
    }

    // Initialize animations on page load
    setTimeout(() => {
        const heroContent = document.querySelector('.hero__content');
        if (heroContent) {
            heroContent.classList.add('fade-in-up');
        }
    }, 300);

    console.log('AI Expert Landing Page initialized successfully!');
});
