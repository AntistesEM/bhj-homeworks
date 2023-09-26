let cards = Array.from(document.querySelectorAll('.card')).forEach(card => {
	let rotatorCases = Array.from(card.querySelectorAll('.rotator__case'));
	let index = 0;
	let speed = Number(rotatorCases[index].getAttribute('data-speed'));

	rotatorCases[index].style.color = rotatorCases[index].getAttribute('data-color');

	function changeClass() {
		rotatorCases.forEach(elem => {
			elem.classList.remove('rotator__case_active');
			elem.style.color = elem.getAttribute('data-color');
		});

		rotatorCases[index].classList.add('rotator__case_active');

		if (index < rotatorCases.length - 1) {
			index++;
		} else {
			index = 0;
		};

		speed = Number(rotatorCases[index].getAttribute('data-speed'));
		clearInterval(intervalId);
		intervalId = setInterval(changeClass, speed);
	};

	let intervalId = setInterval(changeClass, speed);
});







