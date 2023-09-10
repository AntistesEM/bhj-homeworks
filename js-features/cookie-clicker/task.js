let speedElement = document.createElement("span");
speedElement.id = "clicker__speed";
speedElement.innerHTML = "0";

let statusElement = document.querySelector(".clicker__status");
statusElement.innerHTML += " <br> Скорость кликов ";
statusElement.appendChild(speedElement);

let clickerCounter = document.getElementById('clicker__counter');
let clickerSpeed = document.getElementById('clicker__speed')
let img = document.getElementById('cookie');
let flag = 0;
let lastClickTime = new Date();
let clicks = 0;
img.onclick = () => { 
	clickerCounter.textContent++;
	if (flag == 0) {
		img.width += 20;
		flag = 1;
	} else {
		img.width -= 20;
		flag = 0;
	}
	let currentTime = new Date(); // текущее время
	let timeDiff = (currentTime - lastClickTime) / 1000; // разница в секундах
	clicks++; // увеличиваем количество кликов
	if (timeDiff >= 1) { // если прошла секунда или более
		let speed = clicks / timeDiff; // вычисляем скорость клика
		clickerSpeed.textContent = speed.toFixed(2); // выводим значение скорости с двумя знаками после запятой
		clicks = 0; // сбрасываем количество кликов
		lastClickTime = currentTime; // обновляем время последнего клика
	}
}
