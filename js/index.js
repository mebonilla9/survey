const questions = document.querySelectorAll('.question');
const radios = document.querySelectorAll('input[type="radio"]');

const regex = /(\d+)|(\D+)/g;

console.log(radios);
let values = 0;

for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', changeEvent);
}

function changeEvent(e) {
    values += parseInt(e.target.value);
    console.log(values);
    window.location.href = `#section${parseInt(e.target.name.split('q')[1])+1}`;
    if(e.target.name === 'q10'){
        document.querySelector('.score').innerHTML = values/10;
        document.querySelector('.level').innerHTML = 'loquesea';
    }

}

function defineLevel(score){
    let level = '';
}