// let timer = document.getElementById('timer');
// let interval = setInterval(() => {
// 	timer.textContent = timer.textContent - 1;
// 	if (Number(timer.textContent) === 0) {
// 		alert('Вы победили в конкурсе!')
// 		clearInterval(interval)
// 	}
// }, 1000);

// let timer = document.getElementById('timer');
// let secondsLeft = timer.textContent;
// let interval = setInterval(() => {
// 	let hours = Math.floor(secondsLeft / 3600);
// 	let minutes = Math.floor((secondsLeft - (hours * 3600)) / 60);
// 	let seconds = secondsLeft % 60;
// 	timer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
// 	secondsLeft--;
// 	if (secondsLeft < 0) {
// 		alert('Вы победили в конкурсе!')
// 		clearInterval(interval)
// 	}
// }, 1000);

let timer = document.getElementById('timer');
let secondsLeft = timer.textContent;
let interval = setInterval(() => {
  let hours = Math.floor(secondsLeft / 3600);
  let minutes = Math.floor((secondsLeft - (hours * 3600)) / 60);
  let seconds = secondsLeft % 60;
  timer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  secondsLeft--;
  if (secondsLeft < 0) {
    clearInterval(interval);
    let link = document.createElement('a');
    link.href = 'http://example.com/file.txt'; 
    link.download = 'file.txt';
    link.style.display = 'none';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    alert('Вы победили в конкурсе!');
  }
}, 1000);