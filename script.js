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
  const apiKey = 'ваш_ключ_из_OpenWeatherMap';
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&lang=ru&appid=' + apiKey;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Обновляем данные на сайте
    document.getElementById('location').textContent = `Местоположение: ${data.name}`;
    document.getElementById('temperature').textContent = `Температура: ${data.main.temp}°C`;
    document.getElementById('description').textContent = `Погодные условия: ${data.weather[0].description}`;
    
    // Меняем фон в зависимости от погоды
    updateBackground(data.weather[0].main);
  } catch (error) {
    console.error('Ошибка получения данных:', error);
  }
}

// Функция для изменения фона
function updateBackground(weather) {
  const body = document.body;
  switch (weather.toLowerCase()) {
    case 'clear':
      body.style.background = 'linear-gradient(to top, #ff7e5f, #feb47b)';
      break;
    case 'clouds':
      body.style.background = 'linear-gradient(to top, #bdc3c7, #2c3e50)';
      break;
    case 'rain':
      body.style.background = 'linear-gradient(to top, #00c6ff, #0072ff)';
      break;
    case 'snow':
      body.style.background = 'linear-gradient(to top, #83a4d4, #b6fbff)';
      break;
    default:
      body.style.background = 'linear-gradient(to top, #4facfe, #00f2fe)';
  }
}
