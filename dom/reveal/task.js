let reveals = Array.from(document.querySelectorAll('.reveal'));

window.addEventListener('scroll', () => {
	reveals.forEach(reveal => {
		let { top, bottom } = reveal.getBoundingClientRect();

		if (top < window.innerHeight && bottom > 0) {
			reveal.classList.add('reveal_active');
		} else {
			reveal.classList.remove('reveal_active');
		};
	});
});
