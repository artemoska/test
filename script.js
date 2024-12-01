// Песенные строки
const lines = [
    "Я вампир, какая твоя группа крови?",
"Дай мне укусить, я клянусь, не будет больно",
"Приходи ко мне, я не хочу быть одиноким",
"Нож в моих руках поможет мне чертить дороги",
"Детка, я вампир, какая твоя группа крови?",
"Дай мне укусить, я клянусь, не будет больно",
"Приходи ко мне, я не хочу быть одиноким",
"Нож в моих руках поможет мне чертить дороги",
"Детка, я вампир",
"Да, ты знаешь, что мне больно",
"Дай мне укусить, я люблю вкус твоей крови",
"Приезжай ко мне, и ты уедешь довольной",
"Да, я хочу жить, дай кровь, это пойдёт мне на пользу",
"Со мной сука, её кроет, и мы с ней не спим всю ночь",
"Я в алкоголе, она хорни, и я в тя войти не прочь",
"И я ублюдок, и мне всё равно, что она чья-то дочь",
"Дай мне кровь, и тогда смогу почувствовать любовь",
"В школе я был одиноким, на уроках были двойки",
"Они думали, я клоун, и мне было так хуёво",
"И мне было так хуёво, ну и где они теперь?",
"И мне было так хуёво, ну и где они теперь?",
"Детка, я вампир, какая твоя группа крови?",
"Дай мне укусить, я клянусь, не будет больно",
"Приходи ко мне, я не хочу быть одиноким",
"Нож в моих руках поможет мне чертить дороги",
"Детка, я вампир, какая твоя группа крови?",
"Дай мне укусить, я клянусь, не будет больно",
"Приходи ко мне, я не хочу быть одиноким",
"Нож в моих руках поможет мне чертить дороги",
"Детка, я вампир",
];

// Ссылки на элементы
const container = document.getElementById('text-container');
const playButton = document.getElementById('play-button');
const audio = document.getElementById('audio');

// Добавление текста под бит
let lineIndex = 0;
let textInterval;

const playTextAnimation = () => {
    // Первая строка через 13 секунд
    setTimeout(() => {
        displayLine();
        // Следующие строки каждые 3.5 секунды
        textInterval = setInterval(displayLine, 3500);
    }, 13000); // Задержка перед первой строкой
};

// Функция для отображения строки
const displayLine = () => {
    container.innerHTML = ''; // Очистка предыдущей строки
    const textElement = document.createElement('div');
    textElement.textContent = lines[lineIndex];
    textElement.className = 'text-line';
    container.appendChild(textElement);

    lineIndex = (lineIndex + 1) % lines.length; // Цикл строк
};

// Управление воспроизведением
playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.textContent = '⏸️ Пауза';
        playTextAnimation();
    } else {
        audio.pause();
        playButton.textContent = '▶️ Воспроизвести';
        clearInterval(textInterval);
    }
});
