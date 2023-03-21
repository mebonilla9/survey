const questions = document.querySelectorAll('.question');
const radios = document.querySelectorAll('input[type="radio"]');

console.log(radios);

for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', changeEvent);
}

function changeEvent(e) {
    /* const currentQuestion = this.closest('.section');
    const nextQuestion = currentQuestion.nextElementSibling;
    currentQuestion.classList.remove('active');
    nextQuestion.classList.add('active'); */
    for (let i = 1; i < 11; i++) {
        window.location.href = `#section${i}`;
    }
}