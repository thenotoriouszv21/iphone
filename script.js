const parallax = document.querySelector('.section'),
    images = document.querySelector('.logo')

window.addEventListener('scroll', function () {
    let windowY = window.scrollY

    if (window.scrollY < 200) {
        images.style.transform = `translateY(${windowY}px)`
    }
})
