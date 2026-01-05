document.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.getElementById('newsWrapper');
    const prevButton = document.getElementById('prevNewsButton');
    const nextButton = document.getElementById('nextNewsButton');

    // ตรวจสอบว่ามี Element อยู่จริงไหม
    if (!wrapper || !prevButton || !nextButton) {
        // ถ้าไม่เจอ (เช่นอยู่หน้าอื่น) ก็ให้จบการทำงานเงียบๆ ไม่ต้อง Error
        return;
    }

    const slides = document.querySelectorAll('.news-slide-item');
    const totalSlides = slides.length;

    // --- แก้ไขจุดนี้: คำนวณความกว้างจากสไลด์ตัวแรก แทนการใส่เลขตายตัว ---
    // ถ้าหา slides[0] ไม่เจอ ให้ใช้ค่า Default 370
    let slideWidth = slides.length > 0 ? slides[0].offsetWidth : 370;

    // (Option) ถ้าอยากให้ปรับขนาดใหม่เมื่อหมุนจอ สามารถเปิดใช้ส่วนนี้ได้
    window.addEventListener('resize', () => {
        if (slides.length > 0) slideWidth = slides[0].offsetWidth;
        goToSlide(currentIndex); // จัดตำแหน่งใหม่
    });
    // -------------------------------------------------------------

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

    // เริ่มต้นทำงาน
    goToSlide(0);
});