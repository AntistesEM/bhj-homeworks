let hasTooltips = Array.from(document.querySelectorAll('.has-tooltip'))

hasTooltips.forEach(tooltip => {
	tooltip.addEventListener('click', (event) => {
		event.preventDefault()

		let activ = document.querySelector('.tooltip_active')

		if (activ) {
			activ.classList.toggle('tooltip_active')
		} 

		let { left, top } = tooltip.getBoundingClientRect()
		let html = `<div class="tooltip tooltip_active" style="left: ${(left + window.scrollX).toString() + 'px'}; top: ${(top + 22 + window.scrollY).toString() + 'px'}; position: absolute ">${tooltip.title}</div>`

		tooltip.insertAdjacentHTML("afterend", html)
	})
})