// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
// после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция 
// элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px

function random_bg_color(element) {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);

    const bgColor = "rgb(" + x + "," + y + "," + z + ")";

    element.style.background = bgColor;
    }



const boxesRootRef = document.querySelector('#boxes')
const createBtnRef = document.querySelector('button[data-action="render"]')
const destroyBtnRef = document.querySelector('button[data-action="destroy"]')
const inputRef = document.querySelector('#controls input')



inputRef.addEventListener('input', () => {
    const inputValue = Number(inputRef.value)
    console.log(inputValue);
})


createBtnRef.addEventListener('click', createBoxes(inputValue))

function createBoxes (amount) {
    const basicSizeValue = 30;
    const boxesArray = [];
    boxesArray.length = amount;
    
    const newBoxesArray = boxesArray.reduce((acc, currentBox, amount, array) => {

            currentBox = document.createElement('div');
            currentBox.setAttribute('width', `${acc}px`);
            currentBox.setAttribute('height', `${acc}px`);
            acc += 5;
            random_bg_color(currentBox);
    },basicSizeValue)

    boxesRootRef.appendChild(...newBoxesArray)
}

