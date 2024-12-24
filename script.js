// Лог для проверки загрузки скрипта
console.log("Скрипт подключен.");

// Добавляем обработчики событий для всех ссылок 'read-more'
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM полностью загружен.");

    const readMoreLinks = document.querySelectorAll('.read-more');
    const galleryBtns = document.querySelectorAll('.gallery-btn');
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('close-btn');
    const imageContainer = document.getElementById('image-container');

    // Данные картинок для каждой категории
    const images = {
        'btn1': ['antivirus1.svg', 'antivirus2.svg', 'antivirus3.svg', 'antivirus4.svg', 'antivirus5.svg'],
        'btn2': ['browser1.svg', 'browser2.svg', 'browser3.svg', 'browser4.svg', 'browser5.svg'],
        'btn3': ['social1.svg', 'social2.svg', 'social3.svg', 'social4.svg', 'social5.svg'],
        'btn4': ['tablet1.svg', 'tablet2.svg', 'tablet3.svg', 'tablet4.svg', 'tablet5.svg'],
        'btn5': ['speaker1.svg', 'speaker2.svg', 'speaker3.svg', 'speaker4.svg', 'speaker5.svg'],
        'btn6': ['watch1.svg', 'watch2.svg', 'watch3.svg', 'watch4.svg', 'watch5.svg'],
        'btn7': ['virus1.svg', 'virus2.svg', 'virus3.svg', 'virus4.svg', 'virus5.svg'],
    };

    // Открыть модальное окно и загрузить изображения
    function openModal(buttonId) {
        imageContainer.innerHTML = ''; // Очистить старые изображения

        // Загружаем изображения для выбранной категории
        images[buttonId].forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = `assets/images/${imgSrc}`; // Загружаем из папки assets/images
            img.alt = imgSrc;
            img.classList.add('gallery-image');
            img.addEventListener('click', () => {
                // Создаем ссылку для скачивания изображения
                const link = document.createElement('a');
                link.href = `assets/images/${imgSrc}`;  // Устанавливаем правильный путь
                link.download = imgSrc;  // Имя файла для скачивания
                link.click();  // Инициируем скачивание
            });
            imageContainer.appendChild(img);
        });

        modal.classList.add('show'); // Показываем модальное окно с анимацией
    }

    // Кнопка "Назад" для закрытия окна
    const backBtn = document.getElementById('back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            modal.classList.remove('show');
        });
    }

    // Обработчики для кнопок галереи
    galleryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const buttonId = btn.getAttribute('id');
            openModal(buttonId);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const presentationModal = document.getElementById('presentation-modal');
    const openPresentationBtn = document.getElementById('hidden-presentation-btn');
    const closePresentationBtn = document.getElementById('close-presentation-btn');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev-slide-btn');
    const nextBtn = document.getElementById('next-slide-btn');
    let currentSlide = 0;

    // Показать слайд
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    // Обработчики для кнопок
    openPresentationBtn.addEventListener('click', () => {
        presentationModal.classList.add('show');
        showSlide(currentSlide);
    });

    closePresentationBtn.addEventListener('click', () => {
        presentationModal.classList.remove('show');
    });

    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            showSlide(currentSlide);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            showSlide(currentSlide);
        }
    });
});

