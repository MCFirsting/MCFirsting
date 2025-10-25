document.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.getElementById('newsWrapper');
    const prevButton = document.getElementById('prevNewsButton');
    const nextButton = document.getElementById('nextNewsButton');
    if (!wrapper || !prevButton || !nextButton) {
        console.error("ไม่พบองค์ประกอบของสไลด์ข่าวสาร!");
        return;
    }

    const slides = document.querySelectorAll('.news-slide-item');
    const totalSlides = slides.length;

    const slideWidth = 370;
    let currentIndex = 0;

    function updateButtonStates() {
        prevButton.disabled = (currentIndex === 0);
        nextButton.disabled = (currentIndex === totalSlides - 1);
        prevButton.style.opacity = prevButton.disabled ? '0.3' : '1';
        nextButton.style.opacity = nextButton.disabled ? '0.3' : '1';
    }

    function goToSlide(index) {
        const offset = -index * slideWidth;
        wrapper.style.transform = `translateX(${offset}px)`;
        currentIndex = index;
        updateButtonStates();
    }
    nextButton.addEventListener('click', function () {
        if (currentIndex < totalSlides - 1) {
            goToSlide(currentIndex + 1);
        }
    });
    prevButton.addEventListener('click', function () {
        if (currentIndex > 0) {
            goToSlide(currentIndex - 1);
        }
    });
    goToSlide(0);
});