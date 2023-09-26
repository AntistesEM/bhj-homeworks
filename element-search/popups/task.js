let modalMain = document.getElementById('modal_main')
modalMain.className += ' modal_active'

let showSuccess = document.querySelector('.show-success')
let modalSuccess = document.getElementById('modal_success')
showSuccess.onclick = () => {
	modalMain.className = 'modal modal__close'
	modalSuccess.className += ' modal_active'
}

let modalClose = document.querySelectorAll('.modal__close.modal__close_times')
modalCloses = Array.from(modalClose).forEach(element => {
	element.onclick = () => {
		modalSuccess.className = 'modal modal__close'
		modalMain.className = 'modal modal__close'
	}
	
});
