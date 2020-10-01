
const inputRef = document.querySelector('#validation-input')


inputRef.addEventListener('blur', ()=>{
const inputDataLength = inputRef.value.length
const dataAttributeLength = Number(inputRef.getAttribute('data-length'))

   if ( inputDataLength === dataAttributeLength) {
    inputRef.classList.add( 'valid')
    inputRef.classList.remove('invalid')
   }
   else {
    inputRef.classList.add( 'invalid')
    inputRef.classList.remove('valid')
   }
})