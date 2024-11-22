let slideIndex = 1;
const slides = [
    'https://placehold.co/600x400/EEE/31343C',
    'https://placehold.co/600x400/FFF/31343C',
    'https://placehold.co/600x400/000/31343C'
];

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.slider')) {
        showSlide(slideIndex);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                nextSlide(1);
            } else if (e.key === 'ArrowLeft') {
                nextSlide(-1);
            }
        });
    }
});

function showSlide(n) {
    const slideImage = document.getElementById('slideImage');
    if (n > slides.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
    }
    slideImage.src = slides[slideIndex - 1];
}

function nextSlide(n) {
    showSlide(slideIndex += n);
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.gallery')) {
        const galleryItems = document.querySelectorAll('.gallery-item img');
        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                openImageModal(index);
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeImageModal();
            }
        });
    }
});

function openImageModal(index) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `<img src="${document.querySelectorAll('.gallery-item img')[index].src}" alt="Просмотр изображения">`;
    document.body.appendChild(modal);

    modal.addEventListener('click', closeImageModal);
}

function closeImageModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('#contactForm')) {
        const form = document.getElementById('contactForm');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            form.reset();
            alert('Спасибо! Ваше сообщение отправлено.');
        });

        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach((input, index) => {
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    if (index < inputs.length - 1) {
                        inputs[index + 1].focus();
                    } else {
                        form.querySelector('button').focus();
                    }
                }
            });
        });
    }
});

