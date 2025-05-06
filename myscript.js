let currentPage = window.location.pathname.split('/').pop();
if (!currentPage || currentPage === '/') currentPage = 'index.html';

const navLinks = document.querySelectorAll('#nav-items li a');
navLinks.forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    if (linkPage === currentPage) {
        link.classList.add('activate');
    } else {
        link.classList.remove('activate');
    }
});
