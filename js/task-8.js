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


const boxesRootRef = document.querySelector('#boxes');
const createBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const inputRef = document.querySelector('#controls input');

createBtnRef.addEventListener('click', () => {createBoxes(amountOfBoxes)});
destroyBtnRef.addEventListener('click', destroyBoxes);

let amountOfBoxes = 0
inputRef.addEventListener('input', () => {
  amountOfBoxes = Number(inputRef.value);
})

function random_bg_color(element) {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);

  const bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';

  element.style.backgroundColor = bgColor;
}

function createBoxes (amountOfBoxes) {
  const arrayOfBoxes = []

  for (let i = 0; i < amountOfBoxes; i += 1) {
    const newBox = document.createElement('div');
    newBox.style.width =  `${30 + i * 5 }px`;
    newBox.style.height = `${30 + i * 5 }px`;
    random_bg_color(newBox);
    arrayOfBoxes.push(newBox);
  }
  boxesRootRef.append(...arrayOfBoxes)
}

function destroyBoxes() {
  const boxesArray = Array.from(boxesRootRef.childNodes);
  boxesArray.map(box => boxesRootRef.removeChild(box))
}






