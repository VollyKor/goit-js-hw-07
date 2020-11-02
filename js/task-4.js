const btnIncrementRef = document.querySelector(
  'button[data-action="increment"]',
);
const btnDecrementRef = document.querySelector(
  'button[data-action="decrement"]',
);
const value = document.querySelector('span#value');

//var1
// btnIncrementRef.addEventListener('click', addIncrement);
// btnDecrementRef.addEventListener('click', addDecrement);

// function addIncrement() {
//   valueData.textContent = Number(valueData.textContent) + 1;
// }

// function addDecrement() {
//   valueData.textContent = Number(valueData.textContent) - 1;
// }

//var2
btnIncrementRef.addEventListener('click', () => {
  value.textContent = Number(value.textContent) + 1;
});
btnDecrementRef.addEventListener('click', () => {
  value.textContent = Number(value.textContent) - 1;
});
