// Показ экрана загрузки
document.addEventListener('DOMContentLoaded', () => {
  const loadingScreen = document.getElementById('loading-screen');
  const mainContent = document.getElementById('main-content');

  // Таймер для загрузки
  setTimeout(() => {
    loadingScreen.style.display = 'none';
    mainContent.style.display = 'block';

    // Получаем данные погоды
    getWeather();
  }, 3000);
});

// Функция для получения данных о погоде
async function getWeather() {
  const apiKey = 'e6a418de3b43498b998124910242911'; // Замените на ваш ключ
  const city = 'Moscow'; // Можно заменить на другой город
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=ru`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Обновляем данные на сайте
    document.getElementById('location').textContent = `Местоположение: ${data.location.name}, ${data.location.country}`;
    document.getElementById('temperature').textContent = `Температура: ${data.current.temp_c}°C`;
    document.getElementById('description').textContent = `Погодные условия: ${data.current.condition.text}`;
    
    // Меняем фон в зависимости от погодных условий
    updateBackground(data.current.condition.text);
  } catch (error) {
    console.error('Ошибка получения данных:', error);
  }
}

// Функция для изменения фона
function updateBackground(condition) {
  const body = document.body;
  condition = condition.toLowerCase();

  if (condition.includes('ясно') || condition.includes('sunny')) {
    body.style.background = 'linear-gradient(to top, #ff7e5f, #feb47b)';
  } else if (condition.includes('облачно') || condition.includes('cloud')) {
    body.style.background = 'linear-gradient(to top, #bdc3c7, #2c3e50)';
  } else if (condition.includes('дождь') || condition.includes('rain')) {
    body.style.background = 'linear-gradient(to top, #00c6ff, #0072ff)';
  } else if (condition.includes('снег') || condition.includes('snow')) {
    body.style.background = 'linear-gradient(to top, #83a4d4, #b6fbff)';
  } else {
    body.style.background = 'linear-gradient(to top, #4facfe, #00f2fe)';
  }
}
