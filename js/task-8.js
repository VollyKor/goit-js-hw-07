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

  const bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';

  element.style.backgroundColor = bgColor;
}

const boxesRootRef = document.querySelector('#boxes');
const createBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const inputRef = document.querySelector('#controls input');

let amountOfBoxes;

inputRef.addEventListener('input', () => {
  amountOfBoxes = Number(inputRef.value);
  return amountOfBoxes;
});

createBtnRef.addEventListener('click', () => {
  for (let i = 0; i < amountOfBoxes; i += 1) {
    const newBox = document.createElement('div');
    newBox.style.width = '30px';
    newBox.style.height = '30px';
    random_bg_color(newBox);
    boxesRootRef.appendChild(newBox);
  }
});

// createBtnRef.addEventListener('click', createBoxes(amountOfBoxes));
// inputRef.addEventListener('input', () => {
//   const inputValue = Number(inputRef.value);
//   console.log(inputValue);
//   createBtnRef.addEventListener('click', createBoxes(inputValue));
// });

// function createBoxes(amount) {
//   const basicSizeValue = 30;
//   const boxesArray = [];
//   boxesArray.length = amount;

//   const newBoxesArray = boxesArray.reduce((acc, currentBox, amount, array) => {
//     currentBox = document.createElement('div');
//     currentBox.setAttribute('width', `${acc}px`);
//     currentBox.setAttribute('height', `${acc}px`);
//     acc += 5;
//     random_bg_color(currentBox);
//   }, basicSizeValue);

//   console.dir(newBoxesArray);

//   //   boxesRootRef.appendChild(...newBoxesArray);
// }
