const storageInput = document.querySelector('.storage');
const text = document.querySelector('.text');
const  button = document.querySelector('.button');
const storedInput = localStorage.getItem('textinput')

if(storageInput) {
    text.textContent = storedInput
}

storageInput.addEventListener('input', letter => {
    text.textContent = letter.target.value              
})

const saveToLocalStorage = () => {
    localStorage.setItem('texinput', text.textContent)
}

button.addEventListener('click' , saveToLocalStorage)