document.addEventListener('DOMContentLoaded', function () {
    const tabLinks = document.querySelectorAll('.tab-link')
    const tabContents = document.querySelectorAll('.tab-content');
    tabLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            const tabId = link.getAttribute('data-tab');
            tabLinks.forEach(function (item) {
                item.classList.remove('active');
            });
            tabContents.forEach(function (content) {
                content.classList.remove('active');
            });
            link.classList.add('active');
            const targetContent = document.querySelector('.tab-content[data-tab="' + tabId + '"]');
            targetContent.classList.add('active');
        });
    });
});

function setupCopyButtons() {
    const allCopyButtons = document.querySelectorAll('.copy-btn');
    allCopyButtons.forEach(button => {
        button.addEventListener('click', function () {
            const preElement = this.previousElementSibling;
            const textToCopy = preElement.innerText;
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    button.innerText = 'คัดลอกแล้ว!';
                    setTimeout(() => {
                        button.innerText = 'คัดลอก';
                    }, 2000);
                })
                .catch(err => {
                    console.error('คัดลอกไม่สำเร็จ: ', err);
                });
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {

    const wrapper = document.getElementById('newsWrapper');
    if (wrapper) {
    }
    setupCopyButtons();
});