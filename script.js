const outputElement = document.querySelector('#output');
const inputElement = document.querySelector('#input');
const btnTranslate = document.querySelector('#btn-translate');

const basicURL = 'https://api.funtranslations.com/translate/minion.json';

const translate = () => {
    const inputText = inputElement.value;
    const url = basicURL + '?text=' + encodeURI(inputText)
    
    fetch(url)
    .then((response) => response.json())
    .then((res) => {
       outputElement.innerText = res.contents.translated;
    })
    .catch(() => {
        alert("some error occured, please try after some time!")
    })
};

btnTranslate.addEventListener('click', translate);