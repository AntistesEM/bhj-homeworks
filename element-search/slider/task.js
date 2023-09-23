let prev = document.querySelector('.slider__arrow_prev')
let next = document.querySelector('.slider__arrow_next')
let indexImg = 0
let slideItems = document.querySelectorAll('.slider__item')
slideItems = Array.from(slideItems)
let dots = document.querySelectorAll('.slider__dot')
dots[indexImg].classList.toggle('slider__dot_active')

dots.forEach((dot, index) => {
	dot.onclick = () => {	
		sliderItemsToggle(indexImg)	
		indexImg = index
		sliderItemsToggle(indexImg)
	}
})

function sliderItemsToggle(index) {
	dots[index].classList.toggle('slider__dot_active')	
	slideItems[index].classList.toggle('slider__item_active')
}

prev.onclick = () => {
	sliderItemsToggle(indexImg)
	indexImg--;
	if (indexImg < 0) {
		indexImg = slideItems.length - 1;
	}
	sliderItemsToggle(indexImg)
}

next.onclick = () => {
	sliderItemsToggle(indexImg)
	indexImg++;
	if (indexImg > slideItems.length - 1) {
		indexImg = 0;
	}
	sliderItemsToggle(indexImg)
}

