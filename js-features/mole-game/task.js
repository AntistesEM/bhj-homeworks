// let hole = document.getElementById('hole1');
// let deadCount = document.getElementById('dead')
// if (hole.className.includes( 'hole_has-mole' )) {
// 	deadCount.textContent++;
// }

const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');
let deadCount = 0;
let lostCount = 0;

const checkMole = event => {
  const target = event.target;
  if (target.classList.contains('hole_has-mole')) {
    deadCount++;
    deadCounter.textContent = deadCount;
  } else {
    lostCount++;
    lostCounter.textContent = lostCount;
  }
  if (deadCount === 10) {
    alert('Вы выиграли!');
    playing = false;
  }
  if (lostCount === 5) {
    alert('Вы проиграли!');
    playing = false;
  }
}

document.querySelector('.hole-game').addEventListener('click', checkMole);