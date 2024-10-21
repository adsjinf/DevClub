let list = document.querySelectorAll('.item')
let next = document.getElementById('next')
let prev = document.getElementById('prev')
let count = list.length
let active = 0

next.onclick = () => {
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')
    active = active >= count -1 ? 0 : active + 1
    /* active = active + 1
    if (active > count-1) {
        active = 0
    }*/
    list[active].classList.add('active')
}

prev.onclick = () => {
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')
    active = active <= 0 ? count -1 : active - 1
    /* active = active - 1
    if (active < 0) {
        active = count - 1
    }*/
    list[active].classList.add('active')
}