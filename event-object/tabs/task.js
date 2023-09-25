let tabsAll = Array.from(document.querySelectorAll('.tabs'));
tabsAll.forEach((tabs) => {
	let tabAll = Array.from(tabs.querySelectorAll('.tab'));
	let tabContents = Array.from(tabs.querySelectorAll('.tab__content'));
	tabAll.forEach((tab, index) => {
		tab.onclick = (() => {
			tabAll.forEach((tab, i) => {
				tab.classList.remove('tab_active');
				tabContents[i].classList.remove('tab__content_active');
			});
			
			tab.classList.add('tab_active');
			tabContents[index].classList.add('tab__content_active');
		});
	});
});
