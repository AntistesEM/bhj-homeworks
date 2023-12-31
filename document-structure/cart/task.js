const controls = Array.from(document.querySelectorAll('.product'));
const cart = document.querySelector('.cart__products');
let cartSave = JSON.parse(localStorage.getItem("basket")) || {};
const cartVisible = document.querySelector('.cart');
let ids;

emptyOrNot();

function emptyOrNot() {
	if ("basket" in localStorage) {
		if (Object.keys(cartSave).length !== 0) {
			ids = Array.from(cart.querySelectorAll('.cart__product'));

			ids.forEach(function(element) {
				element.remove();
			});

			cartVisible.classList.add('cart_active');

			for (const key in cartSave) {
				insertHtml(cartSave[key][0], cartSave[key][1], cartSave[key][2]);
			};

		} else {			
			cartVisible.classList.remove('cart_active');
			
		};
	};
};

function insertHtml(idValue, srcValue, countValue) {
	const html = `
		<div class="cart__product" data-id=${idValue}>
			<img class="cart__product-image" src=${srcValue}>
			<div class="cart__product-count">${countValue}</div>
			<div class="product__add remove">
				Удалить
			</div>
		</div>
	`;	
	cart.insertAdjacentHTML("afterbegin", html);
};

function localStorageSave() {
	localStorage.setItem("basket", JSON.stringify(cartSave));
	emptyOrNot();
};

controls.forEach(control => {
	control.addEventListener('click', (e) => {
		let value = control.querySelector('.product__quantity-value');

		if (e.target.classList.contains('product__quantity-control_dec')) {

			if (value.textContent > 1) {
				value.textContent--;
			};

		} else if (e.target.classList.contains('product__quantity-control_inc')) {
			value.textContent++;

		} else if (e.target.classList.contains('product__add')) {
			const id = control.getAttribute('data-id');
			const src = control.querySelector('img').getAttribute('src');
			ids = Array.from(cart.querySelectorAll('.cart__product'));
			const hasTargetId = ids.some(item => item.dataset.id === id);

			if (hasTargetId) {
				let product = ids.find(item => item.dataset.id === id);
				let count = product.querySelector('.cart__product-count');

				if (Object.keys(cartSave).length !== 0) {
					animation(id, control, ids);			
				};

				count.textContent = Number(count.textContent) + Number(value.textContent);
				cartSave[id][2] = count.textContent;

				localStorageSave();

				
				value.textContent = 1;
				
			} else {
				cartSave[id] = [id, src, value.textContent];

				localStorageSave();
			};
		};
	});
});

cart.addEventListener('click', (e) => {
	if (e.target.classList.contains('remove')) {
		let keyId = e.target.parentNode.getAttribute('data-id');

		e.target.parentNode.remove();
		delete cartSave[keyId];

		localStorageSave();
	};
});

function animation(id, control, ids) {
	let product = ids.find(item => item.dataset.id === id);
	if (product) {
		const productImage = control.querySelector('img');
		const cartImage = product.querySelector('img');
		const productRect = productImage.getBoundingClientRect();
		const cartRect = cartImage.getBoundingClientRect();
		const diffX = cartRect.left - productRect.left;
		const diffY = cartRect.top - productRect.top;
		let steps = 50;
		const stepX = diffX / steps;
		const stepY = diffY / steps;
		
		const clonedImage = productImage.cloneNode(false);
		clonedImage.style.position = 'fixed';
		clonedImage.style.left = productRect.left + 'px';
		clonedImage.style.top = productRect.top + 'px';
		
		control.appendChild(clonedImage);

		const animationInterval = setInterval(() => {
			const left = parseFloat(clonedImage.style.left) + stepX;
			const top = parseFloat(clonedImage.style.top) + stepY;

			clonedImage.style.left = left + 'px';
			clonedImage.style.top = top + 'px';

			steps--;

			if (steps === 0) {
				clearInterval(animationInterval);

				control.removeChild(clonedImage);
			};
		}, 10);
	};
};
