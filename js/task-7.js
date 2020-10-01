// Напиши скрипт, который реагирует на изменение значения input#font-size-control 
// (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.


const inputRef = document.querySelector('#font-size-control')
const textRef = document.querySelector('#text')

// const minFontSize = 12;
// const maxFontSize = 32;
// const initialFontSize = 20;

// addSizeStyles(minFontSize, maxFontSize, initialFontSize);

addSizeStyles(12,32,20)

inputRef.addEventListener('input',() => {
    textRef.style.fontSize = `${inputRef.value}px`
})

function addSizeStyles(minValue, maxValue, initialValue) {
    
    inputRef.setAttribute('min' , minValue )
    inputRef.setAttribute('max' , maxValue )
    inputRef.setAttribute('value' , initialValue )
    }