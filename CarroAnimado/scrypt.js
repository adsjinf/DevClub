let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');
let list = container.querySelector('.list');

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

function setSlider() {
    let itemOld = container.querySelector('.list .item.active');
    if (itemOld) itemOld.classList.remove('active');

    let dotsOld = indicator.querySelector('ul li.active');
    if (dotsOld) dotsOld.classList.remove('active');

    dots[active].classList.add('active');
    indicator.querySelector('.number').innerHTML = String(active + 1).padStart(2, '0');    
}

function updateSlider(calculation) {
    list.style.setProperty('--calculation', calculation);
    setSlider();
    items[active].classList.add('active');
}

nextButton.onclick = () => {
    active = active + 1 > lastPosition ? 0 : active + 1;
    updateSlider(1);  
}

prevButton.onclick = () => {
    active = active - 1 < firstPosition ? lastPosition : active - 1;
    updateSlider(-1); 
}
