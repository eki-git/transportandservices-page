// blog.js
document.addEventListener('DOMContentLoaded', () => {
    // Primer: aktiviranje "read more" gumba na blog objavah
    const readMoreBtns = document.querySelectorAll('.read-more-btn');

    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const postContent = btn.previousElementSibling;
            postContent.classList.toggle('expanded');

            if (btn.textContent === 'Preberi več') {
                btn.textContent = 'Preberi manj';
            } else {
                btn.textContent = 'Preberi več';
            }
        });
    });
});
