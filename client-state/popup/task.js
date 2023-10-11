let modal = document.getElementById('subscribe-modal')
let closeModal = document.querySelector('.modal__close')

if (getCookie('modal') !== 'close') {
	modal.classList.add('modal_active')	
}

closeModal.addEventListener('click', () => {	
	modal.classList.remove('modal_active')
	setCookie('modal', 'close')
})

function setCookie(name, value) {
	document.cookie = name + '=' + encodeURIComponent(value);	
}

function getCookie(name) {
	const pairs = document.cookie.split('; ')
	const cookie = pairs.find(item => item.startsWith(name) + '=')
	return cookie.substring(name.length + 1)
}

function clearCookie(name) {	
	document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

// setCookie('test', 'teststs')

// console.log(getCookie('test'))

// clearCookie('test')
