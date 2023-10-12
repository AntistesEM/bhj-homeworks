const form = document.getElementById('signin__form');
const welcomeBlock = document.getElementById('welcome');
const userIdElement = document.getElementById('user_id');


form.addEventListener('submit', async (event) => {
  event.preventDefault(); 

  // Получаем данные из формы
  const formData = new FormData(form);
  const login = formData.get('login');
  const password = formData.get('password');

  // Отправляем POST-запрос на сервер
  const response = await fetch('https://students.netoservices.ru/nestjs-backend/auth', {
    method: 'POST',
    body: JSON.stringify({ login, password }),
    headers: {
      'Content-Type': 'application/json'
    };
  });

  // Проверяем статус ответа
  if (response.ok) {
    const data = await response.json();

    if (data.success) {
      // Сохраняем id пользователя в локальное хранилище
      localStorage.setItem('user_id', data.user_id);

      // Отображаем блок приветствия с id пользователя
      userIdElement.textContent = data.user_id;
      welcomeBlock.classList.add('welcome_active');

      // Скрываем форму
      const signinInputsBlock = document.getElementById('signin');
      signinInputsBlock.style.display = 'none';

      // Очищаем форму
      form.reset();
    } else {
      alert('Неверный логин/пароль');
      
      form.reset();
    }
  } else {
    alert('Ошибка сервера');
  };
});

// При загрузке страницы
window.addEventListener('load', () => {
  // Проверяем, есть ли сохраненный id пользователя в локальном хранилище
  const userId = localStorage.getItem('user_id');

  if (userId) {
    // Отображаем блок приветствия с сохраненным id пользователя
    userIdElement.textContent = userId;
    welcomeBlock.classList.add('welcome_active');

    // Скрываем форму
    const signinInputsBlock = document.getElementById('signin');
    signinInputsBlock.style.display = 'none';
  }
});

// При клике на кнопку "Выйти"
const logoutButton = document.getElementById('logout');
logoutButton.addEventListener('click', () => {
// Удаляем сохраненный id пользователя из локального хранилища
localStorage.removeItem('user_id');

// Сбрасываем состояние авторизации
welcomeBlock.classList.remove('welcome_active');
userIdElement.textContent = '';

// Показываем блок с инпутами
const signinInputsBlock = document.getElementById('signin');
signinInputsBlock.style.display = 'block';
});
