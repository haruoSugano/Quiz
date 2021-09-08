const quiz = [
    {
        question: 'Qual é o console game mais vendido?',
        answers: [
            'Super Famicon',
            'PlayStation 2', 
            'Nintendo Switch', 
            'Nintendo DS'
        ],
        correct: 'Nintendo DS'
    }, {
        question: 'Qual é o jogo PS4 mais vendido de 2021?',
        answers: [
            'Cyberpunk 2077',
            'GTA 5', 
            'God of War', 
            'FIFA 2021'
        ],
        correct: 'Cyberpunk 2077'
    }, {
        question: 'Qual é o jogo da nintendo mais vendido?',
        answers: [
            'Splatoon 2',
            'Pokemon Sword and Shield', 
            'Mario kart 8 Deluxe', 
            'Animal crossing: New Horizons'
        ],
        correct: 'Mario kart 8 Deluxe'
    }
]

const $button = document.getElementsByTagName('button');// Quando colocado $ o objeto esta dentro de HTML //boa prática!
let quizIndex = 0;
let score = 0;

// Escolhendo as questões:
const setupQuiz = () => {
        document.getElementById('js-question').textContent = quiz[quizIndex].question; // textContent: pega o texto dentro deste elemento e também fazer a 
        for (let i=0; i<quiz[quizIndex].answers.length; i++){
            $button[i].textContent = quiz[quizIndex].answers[i];
        }
    }
setupQuiz();

const clickHandler = (e) => { 
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert("Correto!");
        score++;
    }
    else {
        window.alert("Incorreto!");
    }

    quizIndex++;

    if (quizIndex < quiz.length){
        setupQuiz();
    }
    else {
        window.alert("Fim! Seus acertos: " + score + "/" + quiz.length + ".");
        window.location.reload();
    }
}

for (let i=0; i<$button.length; i++) {
    $button[i].addEventListener('click', (e) => {
        clickHandler(e);
    })
}

/* const question = 'Qual é o console game mais vendido?';
const answers = [
    'Super Famicon',
    'PlayStation 2', 
    'Nintendo Switch', 
    'Nintendo DS'
] 
const correct = 'Nintendo DS';
document.getElementById('js-question').textContent = question; // textContent: pega o texto dentro deste elemento e também fazer a 
*/;