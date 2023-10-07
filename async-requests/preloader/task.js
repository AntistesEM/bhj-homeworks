let xhr = new XMLHttpRequest();
const url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';
const items = document.getElementById('items');
let item = document.querySelectorAll('.item');
let valuteSave = JSON.parse(localStorage.getItem("Valute")) || {};

updatePage();

function updatePage() {
	
	for (const key in valuteSave) {
		htmlInsert(valuteSave[key]['CharCode'], valuteSave[key]['Value']);
	};
};

function localStorageSave() {
	localStorage.setItem("Valute", JSON.stringify(valuteSave));
};

function htmlInsert(charcode, value) {
	const html = `
		<div class="item">
			<div class="item__code">
				${charcode}
			</div>
			<div class="item__value">
				${value}
			</div>
			<div class="item__currency">
				руб.
			</div>
		</div>
	`;
	items.insertAdjacentHTML("beforeend", html);
};

xhr.addEventListener('readystatechange', () => {
	if (xhr.readyState === xhr.DONE) {
		let response = JSON.parse(xhr.responseText);
		let img = document.getElementById('loader');
		img.classList.toggle('loader_active');

		for (const key in response['response']['Valute']) {
			let charcode = response['response']['Valute'][key]['CharCode'];
			let value = response['response']['Valute'][key]['Value'];

			valuteSave[key] = {
				'CharCode': charcode,
				'Value': value
			};

			localStorageSave();
		};
		
		item = Array.from(document.querySelectorAll('.item'));
		
		item.forEach((element) => {
			element.remove();
		});

		updatePage();
	};
});

xhr.open('GET', url);
xhr.send();
