let intro = document.querySelector('.intro');
let logoSpan = document.querySelectorAll('.logo');
let navbar = document.querySelector('.navbar');


function showIntro() {
    intro.style.top = '0'; 
    navbar.style.display = 'none'; 
}


function hideIntro() {
    intro.style.top = '-100vh'; 
    navbar.style.display = 'block'; 
}


if (!sessionStorage.getItem('introPlayed')) {
    showIntro(); 
} else {
    hideIntro(); 
}


window.addEventListener('DOMContentLoaded', () => {
    if (!sessionStorage.getItem('introPlayed')) {
        
        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.add('active');
                }, (idx + 1) * 400);
            });

            setTimeout(() => {
                logoSpan.forEach((span, idx) => {
                    setTimeout(() => {
                        span.classList.remove('active');
                        span.classList.add('fade');
                    }, (idx + 1) * 50);
                });
            }, 2000);

            setTimeout(() => {
                hideIntro(); 
                sessionStorage.setItem('introPlayed', 'true'); 
            }, 2300);
        }, 0); 
    }
});
