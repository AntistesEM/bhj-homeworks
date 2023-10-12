let hasTooltips = Array.from(document.querySelectorAll('.has-tooltip'));

const newElement = document.createElement('div');
newElement.setAttribute('class', 'tooltip');
newElement.style.left = 0;
newElement.style.top = 0;
newElement.style.position = 'absolute';

document.body.appendChild(newElement);


hasTooltips.forEach(tooltip => {
	tooltip.addEventListener('click', (event) => {
		event.preventDefault();

		let activ = document.querySelector('.tooltip');

		if (activ) {
			activ.classList.toggle('tooltip_active');
		};
		
		let { left, top } = tooltip.getBoundingClientRect();
		let styleLeft = (left + window.scrollX).toString() + 'px';
		let styleTop = (top + 22 + window.scrollY).toString() + 'px';
		let text = tooltip.title;
		
		activ.style.left = styleLeft;
		activ.style.top = styleTop;
		activ.textContent = text;
	});
});