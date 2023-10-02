let chatWidget = document.querySelector('.chat-widget');
let input = document.getElementById('chat-widget__input');
let answers = [
	'Добрый день!',
	'У нас все хорошо, а вас?',
	'Мы вам перезвоним',
	'Я вас не понимаю',
	'Пока',
];

let timerId;

chatWidget.addEventListener('click', () => {
	chatWidget.classList.add('chat-widget_active');
	timerId = setTimeout(startTimer, 5000)
});


input.addEventListener('keydown', (event) => {
	if (event.key === 'Enter' && input.value.trim() !== '') {
		clearTimeout(timerId)
		const messages = document.querySelector('.chat-widget__messages');
		
		messages.innerHTML += `
			<div class="message message_client">
				<div class="message__time">${getTime()}</div>
				<div class="message__text">${input.value.trim()}</div>
			</div>
		`;

		messages.innerHTML += `
			<div class="message">
				<div class="message__time">${getTime()}</div>
				<div class="message__text">${answers[Math.floor(Math.random() * answers.length)]}</div>
			</div>
		`;

		input.value = '';	
		
		messages.lastElementChild.scrollIntoView();

		timerId = setTimeout(startTimer, 5000);
	};
});

function startTimer() {
	const messages = document.querySelector('.chat-widget__messages');
	
	messages.innerHTML += `
		<div class="message">
			<div class="message__time">${getTime()}</div>
			<div class="message__text">Чем могу помочь?</div>
		</div>
	`;
	
	messages.lastElementChild.scrollIntoView();
	};

function getTime() {
	let currentTime = new Date();
	let hours = currentTime.getHours();
	let minutes = currentTime.getMinutes();
	currentTime = `${hours}:${minutes}`;	
	return currentTime;
};
