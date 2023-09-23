let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns);

dropdowns.forEach((drop) => {
	let dropdownList = drop.querySelector('.dropdown__list');
	let dropdownValue = drop.querySelector('.dropdown__value');
	let dropdownItems = drop.querySelectorAll('.dropdown__item');
	dropdownItems = Array.from(dropdownItems);

	dropdownValue.onclick = () => {
		dropdownList.classList.toggle('dropdown__list_active');
	};

	dropdownItems.forEach((item) => {
		item.onclick = () => {
			dropdownValue.textContent = item.querySelector('.dropdown__link').textContent;
			dropdownList.classList.toggle('dropdown__list_active');
			return false;
		}
	});
});
