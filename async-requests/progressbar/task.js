let form = document.forms['form']
let progres = document.getElementById('progress')

form.addEventListener('submit', (e) => {
	e.preventDefault()
	progres.value = 0
	xhr = new XMLHttpRequest()
	xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload1');

	xhr.upload.addEventListener('progress', (event) => {
		progress.value = event.loaded / event.total;
	})

	let newForm = new FormData(form)
	xhr.send(newForm)

	xhr.addEventListener('readystatechange', () => {
		if (xhr.readyState === xhr.DONE) {
			progres.value = 0
		} else {
			alert('Ошибка при загрузке файла.')
		}
	})
})
