let textarea = document.getElementById('editor');
const btn = document.querySelector('.btn')
let saveText = JSON.parse(localStorage.getItem("text")) || [];

if ("text" in localStorage) {
	if (Object.keys(saveText).length !== 0) {
		textarea.value = JSON.parse(localStorage.getItem("text"));
		btn.classList.add('btn_activ')
	};
};

textarea.addEventListener('keyup', () => {
	clearStyle()
	saveText = textarea.value;
	localStorage.setItem("text", JSON.stringify(saveText));
	if (textarea.value !== '') {
		btn.classList.add('btn_activ')
	} else {		
		btn.classList.remove('btn_activ')
	}
});

btn.addEventListener('click', () => {
	textarea.value = '';
	btn.textContent = 'Удалить из хранилища'
	btn.style.background = 'red'

	btn.addEventListener('click', () => {
		localStorage.clear()
		clearStyle()

	})
})

function clearStyle(params) {
	btn.classList.remove('btn_activ')
	btn.removeAttribute('style')		
	btn.textContent = 'Очистить содержимое'
	
}