document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.navbar a');
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (linkPage === "index.html" && currentPage === "")) {
            link.classList.add('active');
            link.setAttribute("aria-current", "page");
        }
    });
});
