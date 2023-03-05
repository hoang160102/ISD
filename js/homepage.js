
let sliderIndex = 0
let getSlide = document.getElementsByClassName('slider-img')
showSlides()
function showSlides() {
    let i
    for (i = 0; i < getSlide.length; i++) {
        getSlide[i].style.display = 'none'
        getSlide[i].style.animation = 'slideLeft 1s ease-in-out'
    }
    sliderIndex++
    if (sliderIndex > getSlide.length) {
        sliderIndex = 1
    }
    getSlide[sliderIndex-1].style.display = 'block'
    setTimeout(showSlides, 3000)
}