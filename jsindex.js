document.addEventListener('DOMContentLoaded', function() {
    setCurrentDate();
    
    initMobileMenu();
    
    initSlider();
    
    initVideoPlayers();
});

function setCurrentDate() {
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        dateElement.textContent = now.toLocaleDateString('uk-UA', options);
    }
}


function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
}

// Слайдер
function initSlider() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    if (slides.length > 1) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000);
    }
}

function initVideoPlayers() {
    const playButtons = document.querySelectorAll('.play-button');
    
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            const videoItem = this.closest('.video-item');
            alert('Відео програвач відкриється у модальному вікні. У реальному сайті тут буде функціонал відтворення відео.');
        });
    });
}

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


const subscribeBtn = document.querySelector('.subscribe-btn');
if (subscribeBtn) {
    subscribeBtn.addEventListener('click', function() {
        const emailInput = this.closest('.newsletter').querySelector('input[type="email"]');
        if (emailInput && emailInput.value) {
            alert('Дякуємо за підписку! На вашу email адресу відправлено лист з підтвердженням.');
            emailInput.value = '';
        } else {
            alert('Будь ласка, введіть вашу email адресу.');
        }
    });
}
// Слайдер
function initSlider() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    if (slides.length > 1) {
        // Автоматична зміна слайдів
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000);
        
        // Додаємо точки навігації
        createSliderDots(slides.length);
    }
}

function createSliderDots(count) {
    const sliderContainer = document.querySelector('.slider-container');
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'slider-dots';
    
    for (let i = 0; i < count; i++) {
        const dot = document.createElement('button');
        dot.className = 'slider-dot';
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
    
    sliderContainer.appendChild(dotsContainer);
}

function goToSlide(slideIndex) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');
}

const sliderStyles = `
.slider-dots {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    z-index: 10;
}

.slider-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid var(--text-light);
    background: transparent;
    cursor: pointer;
    transition: all 0.3s;
}

.slider-dot.active {
    background: var(--accent-gold);
    border-color: var(--accent-gold);
}

.slider-dot:hover {
    background: var(--accent-gold);
}
`;

// Додаємо стилі в документ
const styleSheet = document.createElement('style');
styleSheet.textContent = sliderStyles;
document.head.appendChild(styleSheet);


// Функція для розгортання/згортання новин
function toggleNews(button) {
    const newsCard = button.closest('.news-card');
    const excerpt = newsCard.querySelector('.news-excerpt');
    const fullText = newsCard.querySelector('.news-full');
    
    if (fullText.classList.contains('expanded')) {
        // Згортаємо
        fullText.classList.remove('expanded');
        button.textContent = 'Читати далі';
        button.classList.remove('active');
        
        // Плавно показуємо 
        setTimeout(() => {
            excerpt.style.display = 'block';
        }, 300);
    } else {
        // Розгортаємо
        excerpt.style.display = 'none';
        fullText.classList.add('expanded');
        button.textContent = 'Згорнути';
        button.classList.add('active');
        
        // Прокручуємо до новини 
        newsCard.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'nearest' 
        });
    }
}

// Автоматична ініціалізація всіх кнопок
document.addEventListener('DOMContentLoaded', function() {
    
    //"Читати далі"
    document.querySelectorAll('.read-more-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            toggleNews(this);
        });
    });
    
    //CSS для плавних переходів
    const additionalStyles = `
    .news-full {
        transition: max-height 0.5s ease-out, opacity 0.3s ease-out;
        opacity: 0;
    }
    
    .news-full.expanded {
        opacity: 1;
    }
    
    .news-excerpt {
        transition: opacity 0.3s ease-out;
    }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = additionalStyles;
    document.head.appendChild(styleSheet);
});

// Функції для прямого ефіру
function openLiveStream() {
    const modal = document.getElementById('liveModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Блокуємо прокрутку
}

function closeLiveStream() {
    const modal = document.getElementById('liveModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Відновлюємо прокрутку
}

// Закритя модальнього вікна при кліку поза ним
window.addEventListener('click', function(event) {
    const modal = document.getElementById('liveModal');
    if (event.target === modal) {
        closeLiveStream();
    }
});

// Закритя модального вікна при натисканні Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLiveStream();
    }
});

// Оновлюємо ініціалізацію
document.addEventListener('DOMContentLoaded', function() {
    
    // Додаємо обробник "Читати далі"
    document.querySelectorAll('.read-more-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            toggleNews(this);
        });
    });
});
// Валідація форми
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Скидаємо попередні помилки
            clearErrors();
            
            // Валідація всіх полів
            const isNameValid = validateName();
            const isEmailValid = validateEmail();
            const isPhoneValid = validatePhone();
            const isPasswordValid = validatePassword();
            const isMessageValid = validateMessage();
            
            // Якщо всі поля валідні
            if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid && isMessageValid) {
                // Симуляція відправки форми
                const formData = new FormData(this);
                const name = formData.get('name');
                const email = formData.get('email');
                
                showSuccess(`Дякуємо, ${name}! Ваше повідомлення успішно відправлено. Ми зв'яжемося з вами на email: ${email}`);
                this.reset();
                clearValidationStates();
            }
        });
        
        // Додаємо реальну валідацію при введенні
        addRealTimeValidation();
        
        // Додаємо маску для телефону
        initPhoneMask();
    }
}

// ВАЛІДАЦІЯ ФОРМИ "НАПИШІТЬ НАМ"
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) {
        console.error('Форма не знайдена!');
        return;
    }
    
    // Елементи форми
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
    const charCount = document.getElementById('char-count');
    const submitBtn = document.getElementById('submit-btn');
    
    // Ініціалізація
    initPhoneMask();
    initMessageCounter();
    
    // Валідація в реальному часі
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    phoneInput.addEventListener('input', validatePhone);
    messageInput.addEventListener('input', validateMessage);
    
    // Валідація при втраті фокусу
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    phoneInput.addEventListener('blur', validatePhone);
    messageInput.addEventListener('blur', validateMessage);
    
    // Обробка відправки форми
    contactForm.addEventListener('submit', handleFormSubmit);
}

// ВАЛІДАЦІЯ ІМЕНІ
function validateName() {
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('name-error');
    const name = nameInput.value.trim();
    const formGroup = nameInput.closest('.form-group');
    
    // Очищаємо попередні стани
    formGroup.classList.remove('valid', 'invalid');
    
    // Перевірка на пусте поле
    if (!name) {
        showError(formGroup, nameError, "Введіть ваше ім'я");
        return false;
    }
    
    // Перевірка довжини
    if (name.length < 2) {
        showError(formGroup, nameError, "Ім'я має містити мінімум 2 символи");
        return false;
    }
    
    if (name.length > 50) {
        showError(formGroup, nameError, "Ім'я не може перевищувати 50 символів");
        return false;
    }
    
    // Перевірка на цифри
    if (/\d/.test(name)) {
        showError(formGroup, nameError, "Ім'я не може містити цифри");
        return false;
    }
    
    // Перевірка на спецсимволи
    if (!/^[a-zA-Zа-яА-ЯґҐєЄіІїЇ'\s-]+$/.test(name)) {
        showError(formGroup, nameError, "Дозволені тільки літери, апостроф та дефіс");
        return false;
    }
    
    // Успішна валідація
    showSuccess(formGroup, nameError);
    return true;
}

// ВАЛІДАЦІЯ EMAIL
function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const email = emailInput.value.trim();
    const formGroup = emailInput.closest('.form-group');
    
    formGroup.classList.remove('valid', 'invalid');
    
    if (!email) {
        showError(formGroup, emailError, "Введіть ваш email");
        return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError(formGroup, emailError, "Введіть коректний email (приклад: example@mail.com)");
        return false;
    }
    
    // Перевірка на поширені домени
    const commonDomains = ['gmail.com', 'ukr.net', 'mail.com', 'yahoo.com', 'outlook.com', 'icloud.com'];
    const domain = email.split('@')[1];
    if (!commonDomains.some(d => domain.includes(d))) {
        // Це не помилка, але можна додати попередження
    }
    
    showSuccess(formGroup, emailError);
    return true;
}

// ВАЛІДАЦІЯ ТЕЛЕФОНУ
function validatePhone() {
    const phoneInput = document.getElementById('phone');
    const phoneError = document.getElementById('phone-error');
    let phone = phoneInput.value.trim();
    const formGroup = phoneInput.closest('.form-group');
    
    formGroup.classList.remove('valid', 'invalid');
    
    if (!phone) {
        showError(formGroup, phoneError, "Введіть ваш номер телефону");
        return false;
    }
    
    // Очищаємо від форматування для перевірки
    const cleanPhone = phone.replace(/\s|\(|\)|-/g, '');
    
    // Формат 1: +380XXXXXXXXX
    // Формат 2: 380XXXXXXXXX
    // Формат 3: 0XXXXXXXXX
    const phoneRegex = /^(\+?38)?0\d{9}$/;
    
    if (!phoneRegex.test(cleanPhone)) {
        showError(formGroup, phoneError, "Введіть коректний номер (формат: +380 або 0XX XXX XX XX)");
        return false;
    }
    
    // Автоматичне форматування
    if (cleanPhone.length === 10 && cleanPhone.startsWith('0')) {
        phoneInput.value = '+38' + cleanPhone;
    } else if (cleanPhone.length === 12 && cleanPhone.startsWith('38')) {
        phoneInput.value = '+' + cleanPhone;
    }
    
    showSuccess(formGroup, phoneError);
    return true;
}

// ВАЛІДАЦІЯ ПОВІДОМЛЕННЯ
function validateMessage() {
    const messageInput = document.getElementById('message');
    const messageError = document.getElementById('message-error');
    const charCount = document.getElementById('char-count');
    const message = messageInput.value.trim();
    const formGroup = messageInput.closest('.form-group');
    const counter = charCount.closest('.counter');
    
    formGroup.classList.remove('valid', 'invalid');
    counter.classList.remove('warning', 'error');
    
    // Оновлюємо лічильник
    const currentLength = message.length;
    charCount.textContent = currentLength;
    
    if (!message) {
        showError(formGroup, messageError, "Введіть ваше повідомлення");
        return false;
    }
    
    if (currentLength < 10) {
        showError(formGroup, messageError, "Повідомлення має містити мінімум 10 символів");
        counter.classList.add('warning');
        return false;
    }
    
    if (currentLength > 500) {
        showError(formGroup, messageError, "Повідомлення не може перевищувати 500 символів");
        counter.classList.add('error');
        return false;
    }
    
    // Попередження при наближенні до ліміту
    if (currentLength > 400) {
        counter.classList.add('warning');
    }
    
    showSuccess(formGroup, messageError);
    return true;
}

// ЛІЧИЛЬНИК СИМВОЛІВ
function initMessageCounter() {
    const messageInput = document.getElementById('message');
    const charCount = document.getElementById('char-count');
    
    if (!messageInput || !charCount) return;
    
    messageInput.addEventListener('input', function() {
        const length = this.value.length;
        charCount.textContent = length;
        
        const counter = charCount.closest('.counter');
        counter.classList.remove('warning', 'error');
        
        if (length > 400) {
            counter.classList.add('warning');
        }
        
        if (length > 500) {
            counter.classList.add('error');
        }
    });
}

// МАСКА ДЛЯ ТЕЛЕФОНУ
function initPhoneMask() {
    const phoneInput = document.getElementById('phone');
    
    if (!phoneInput) return;
    
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        // Автоматично додаємо +38 для українських номерів
        if (value.startsWith('380')) {
            value = '+' + value;
        } else if (value.startsWith('80') && value.length >= 10) {
            value = '+3' + value;
        } else if (value.startsWith('0') && value.length >= 9) {
            value = '+38' + value;
        }
        
        // Форматування: +380 XX XXX XX XX
        if (value.length > 3) {
            value = value.substring(0, 4) + ' ' + value.substring(4);
        }
        if (value.length > 7) {
            value = value.substring(0, 8) + ' ' + value.substring(8);
        }
        if (value.length > 11) {
            value = value.substring(0, 12) + ' ' + value.substring(12);
        }
        if (value.length > 14) {
            value = value.substring(0, 15) + ' ' + value.substring(15);
        }
        
        e.target.value = value.substring(0, 19); // Обмежуємо довжину
    });
}

// ОБРОБКА ВІДПРАВКИ ФОРМИ
function handleFormSubmit(e) {
    e.preventDefault();
    
    // Валідація всіх полів
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isMessageValid = validateMessage();
    
    // Перевірка всіх полів
    if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
        // Отримуємо дані
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            message: document.getElementById('message').value.trim(),
            timestamp: new Date().toISOString()
        };
        
        // Симуляція відправки
        simulateFormSubmit(formData);
    } else {
        // Знаходимо перше поле з помилкою
        const firstError = document.querySelector('.form-group.invalid');
        if (firstError) {
            const input = firstError.querySelector('input, textarea');
            if (input) {
                input.focus();
            }
        }
    }
}

// СИМУЛЯЦІЯ ВІДПРАВКИ
function simulateFormSubmit(data) {
    const submitBtn = document.getElementById('submit-btn');
    const successMessage = document.getElementById('success-message');
    
    // Блокуємо кнопку
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Відправка...';
    
    // Симулюємо затримку мережі
    setTimeout(() => {
        // Показуємо повідомлення про успіх
        successMessage.textContent = `Дякуємо, ${data.name}! Ваше повідомлення успішно відправлено. Ми зв'яжемося з вами найближчим часом.`;
        successMessage.style.display = 'block';
        
        // Скидаємо форму
        document.getElementById('contactForm').reset();
        document.getElementById('char-count').textContent = '0';
        
        // Скидаємо стани валідації
        document.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('valid', 'invalid');
        });
        
        // Відновлюємо кнопку
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Надіслати повідомлення';
        
        // Ховаємо повідомлення через 5 секунд
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
        
        // Логуємо дані (в реальному проекті тут буде відправка на сервер)
        console.log('Форма відправлена:', data);
        
    }, 1500);
}

// ДОПОМІЖНІ ФУНКЦІЇ
function showError(formGroup, errorElement, message) {
    formGroup.classList.add('invalid');
    formGroup.classList.remove('valid');
    errorElement.textContent = message;
    errorElement.style.color = '#dc3545';
}

function showSuccess(formGroup, errorElement) {
    formGroup.classList.add('valid');
    formGroup.classList.remove('invalid');
    errorElement.textContent = '';
}

// ІНІЦІАЛІЗАЦІЯ ПРИ ЗАВАНТАЖЕННІ
document.addEventListener('DOMContentLoaded', function() {
    console.log('Ініціалізація форми "Напишіть нам"...');
    initContactForm();
});
// Оновіть функцію DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    setCurrentDate();
    initMobileMenu();
    initSlider();
    initVideoPlayers();
    initNavigation();
    initContactForm();
    initNewsletterForm();
});
//Адаптивнсть Гамбургер
// Оновлена функція для мобільного меню
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.querySelector('.main-nav');
    const body = document.body;
    
    if (menuToggle && mainNav) {
        // Створюємо три смужки для гамбургера
        menuToggle.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
        
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            this.classList.toggle('active');
            mainNav.classList.toggle('active');
            body.classList.toggle('menu-open');
            
            // Блокуємо прокрутку при відкритому меню
            if (mainNav.classList.contains('active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = 'auto';
            }
        });
        
        // Закриваємо меню при кліку поза ним
        document.addEventListener('click', function(e) {
            if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
                body.classList.remove('menu-open');
                body.style.overflow = 'auto';
            }
        });
        
        // Закриваємо меню при кліку на посилання
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
                body.classList.remove('menu-open');
                body.style.overflow = 'auto';
            });
        });
        
        // Закриваємо меню при зміні розміру вікна
        window.addEventListener('resize', function() {
            if (window.innerWidth > 1024) {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
                body.classList.remove('menu-open');
                body.style.overflow = 'auto';
            }
        });
    }
}

// Оновіть подію DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    setCurrentDate();
    initMobileMenu();
    initSlider();
    initVideoPlayers();
    initNavigation();
    initContactForm();
    initNewsletterForm();
    
    // Додаємо обробник для закриття меню при скролі
    window.addEventListener('scroll', function() {
        const menuToggle = document.getElementById('menuToggle');
        const mainNav = document.querySelector('.main-nav');
        
        if (menuToggle && mainNav && mainNav.classList.contains('active')) {
            menuToggle.classList.remove('active');
            mainNav.classList.remove('active');
            document.body.classList.remove('menu-open');
            document.body.style.overflow = 'auto';
        }
    });
});