const input = document.getElementById('task__input');
const btnAdd = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

let returnObj = JSON.parse(localStorage.getItem("Tasks")) || [];

function insertHtml(params) {
	const html = `
	<div class="task">
		<div class="task__title">
			${params}
		</div>
		<a href="#" class="task__remove">&times;</a>
	</div>
	`;
	tasksList.insertAdjacentHTML("afterbegin", html);
};

function localStorageSave(params) {
	localStorage.setItem("myKey", JSON.stringify(returnObj));
}

for (const iterator of returnObj) {
	insertHtml(iterator);
};

tasksList.addEventListener('click', (e) => {
	if (e.target.classList.contains('task__remove')) {
		e.preventDefault();	
		let taskTitle = e.target.parentNode.querySelector('.task__title').textContent.trim();
		let index = returnObj.indexOf(taskTitle);

		if (index !== -1) {
			returnObj.splice(index, 1);
		};

		localStorageSave();

		e.target.parentNode.remove();
	};
});

btnAdd.addEventListener('click', (e) => {
	e.preventDefault()

	if (input.value.trim() !== '') {
		insertHtml(input.value);
		
		returnObj.push(input.value);
		input.value = '';
	
		localStorageSave();
	};

});
