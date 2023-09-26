let prev = document.querySelector('.slider__arrow_prev')
let next = document.querySelector('.slider__arrow_next')
let slideItems = Array.from(document.querySelectorAll('.slider__item'))
let dots = document.querySelectorAll('.slider__dot')
let activeSlideIndex = slideItems.findIndex(item => item.classList.contains('slider__item_active'))

dots[activeSlideIndex].classList.toggle('slider__dot_active')

dots.forEach((dot, index) => {
	dot.onclick = () => {	
		sliderItemsToggle(activeSlideIndex)	
		activeSlideIndex = index
		sliderItemsToggle(activeSlideIndex)
	}
})

function sliderItemsToggle(index) {
	dots[index].classList.toggle('slider__dot_active')	
	slideItems[index].classList.toggle('slider__item_active')
}

prev.onclick = () => {
	sliderItemsToggle(activeSlideIndex)
	activeSlideIndex--;
	if (activeSlideIndex < 0) {
		activeSlideIndex = slideItems.length - 1;
	}
	sliderItemsToggle(activeSlideIndex)
}

next.onclick = () => {
	sliderItemsToggle(activeSlideIndex)
	activeSlideIndex++;
	if (activeSlideIndex > slideItems.length - 1) {
		activeSlideIndex = 0;
	}
	sliderItemsToggle(activeSlideIndex)
}

