// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.

const inputRef = document.querySelector('input#name-input');
const titleRef = document.querySelector('span#name-output');

inputRef.addEventListener('input', ({ target }) => {
  target.value === ''
    ? (titleRef.textContent = ' Незнакомец')
    : (titleRef.textContent = target.value);
});
