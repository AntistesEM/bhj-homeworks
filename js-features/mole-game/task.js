// let hole = document.getElementById('hole1');
// let deadCount = document.getElementById('dead')
// if (hole.className.includes( 'hole_has-mole' )) {
// 	deadCount.textContent++;
// }

const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');
let deadCount = 0;
let lostCount = 0;

let clear = () => {  
  deadCount = 0;
  lostCount = 0;
  deadCounter.textContent = deadCount;
  lostCounter.textContent = lostCount;
}

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
    clear();
    alert('Вы выиграли!');
  }
  if (lostCount === 5) {
    clear();
    alert('Вы проиграли!');
  }
}

document.querySelector('.hole-game').addEventListener('click', checkMole);