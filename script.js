const left = document.getElementById('left');
const right = document.getElementById('right');
const slider = document.getElementById('slider');

const header = document.getElementById('header');
const para = document.getElementById('para');

const states = ['first', 'second', 'third'];
let clicked = false;

setInterval(() => {
    if (!clicked) {
        slider.classList.replace(slider.getAttribute('class'),
            states[(states.indexOf(slider.getAttribute('class')) + 1) % 3])
            changeText();
    }
}, 5000)

right.onclick = () => {
    clicked = true;
    if (clicked) {
        setTimeout(() => { clicked = false }, 3000);
    }
    slider.classList.replace(slider.getAttribute('class'),
        states[(states.indexOf(slider.getAttribute('class')) + 1) % 3])
        changeText();
}

left.onclick = () => {
    clicked = true;
    if (clicked) {
        setTimeout(() => { clicked = false }, 3000);
    }
    let n = states.indexOf(slider.getAttribute('class')) - 1;
    if (n < 0) {
        n = 2;
    }
    slider.classList.replace(slider.getAttribute('class'), states[n]);
    changeText();
}

function changeText() {
    let state = slider.getAttribute('class');
    if (state === 'first') {
        header.textContent = "Discover innovative ways to decorate";
        para.textContent = `We provide unmatched quality, comfort, and style for property owners across the country. 
        Our experts combine form and function in bringing your vision to life. Create a room in your 
        own style with our collection and make your property a reflection of you and what you love.`
    } else if (state === 'second') {
        header.textContent = "We are available all across the globe";
        para.textContent = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
        store locator. Any questions? Don't hesitate to contact us today.`
    } else if (state === 'third') {
        header.textContent = "Manufactured with the best materials";
        para.textContent = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
        experience in this industry, we understand what customers want for their home and office.`
    }
}

const menuIcon = document.getElementById('menu-icon');
const menu = document.querySelector('.menu');
const closeIcon = document.getElementById('close');
const filter = document.querySelector('.filter');

menuIcon.onclick = () => {
    menu.classList.add('active');
    filter.style.opacity = '1';
    filter.style['pointer-events'] = 'all';
}

closeIcon.onclick = () => {
    menu.classList.remove('active');
    filter.style.opacity = '0';
    filter.style['pointer-events'] = 'none';
}

const photos = document.querySelectorAll('.slider>ul img');
const imagesDesk = ['images/desk-1.jpg', 'images/desk-2.jpg', 'images/desk-3.jpg'];
const imagesMobile = ['images/mobile-1.jpg', 'images/mobile-2.jpg', 'images/mobile-3.jpg'];

function setImages() {
    let n = 0;
    if (document.body.clientWidth >= 700) {
        photos.forEach(photo => {
            photo.setAttribute('src', imagesDesk[n]);
            n++;
        });
    } else {
        photos.forEach(photo => {
            photo.setAttribute('src', imagesMobile[n]);
            n++;
        })
    }
};

window.onresize = setImages;

setImages();