const menu = document.querySelector('.Sidebar_Menu');
const open_btn = document.getElementById('Open_Menu');
const close_btn = document.getElementById('Close_Menu');

open_btn.addEventListener('click', function () {
    menu.classList.add('active');
});
close_btn.addEventListener('click', function () {
    menu.classList.remove('active');
});


// load
const number = document.querySelectorAll('.count');
let interval = 2000;


number.forEach((value) => {
    let start = 0;
    let end = parseInt(value.getAttribute('data-count'));
    let duration = Math.floor(interval / end);
    let counter = setInterval(function () {
        start += 1;
        value.textContent = start;
        if (start === end) {
            clearInterval(counter);

        }
    }, duration);
});


// Navbar
const navbar = document.querySelector('.Navbar');
const light_developer = document.getElementById('dev');
const dark_developer = document.getElementById('dev2');
window.addEventListener('scroll', function () {
    var scroll = window.scrollY;
    if (scroll > 60) {
        navbar.classList.add('sticky');
        light_developer.style.display = 'none';
        dark_developer.style.display = 'block';
    } else {
        navbar.classList.remove('sticky');
        light_developer.style.display = 'block';
        dark_developer.style.display = 'none';
    }

});


// Hero Section
const Hero = document.querySelector('.Hero');
window.addEventListener('scroll', function () {
    var scroll = window.scrollY;
    if (scroll > 50) {
        Hero.classList.add('Hero_Sticky');
    } else {
        Hero.classList.remove('Hero_Sticky');
        light_developer.style.display = 'block';
        dark_developer.style.display = 'none';
    }

});





var swiper = new Swiper('.mySwiper', {
    loop: true,
    autoplay: true,
});

var swiper = new Swiper('.Projects_Swiper', {
    loop: true,
    autoplay: true,
    effect: 'coverflow',
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 30,

});




// Static address
document.getElementById('direction').addEventListener('click', function () {
    window.open('https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7318.291454644889!2d87.307244!3d23.49126000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1747931121082!5m2!1sen!2sin', '_blank');
});


// Pdf Download
function downloadPDF() {
    const link = document.createElement('Open_Menua');
    link.href = 'Pdf/Resume- SHUVARANJAN SARKAR.pdf';
    link.download = 'Resume- Shuvaranjan Sarkar.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

