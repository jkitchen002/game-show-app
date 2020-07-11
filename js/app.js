const overLay = document.getElementById("overlay");
const startGame = document.querySelector(".btn__reset");
const show = document.getElementsByClassName('show');
const qwerty =document.getElementById('qwerty');
const button = document.getElementsByTagName('button');
const tries = document.getElementsByClassName('tries');
const resetButton = document.querySelector('.btn__reset');
let life = 5;

const phrases = [
    "Learn To Code",
    "Job Ready",
    "Love Code",
    "Job Please",
    "Hire Me"
];

//click button to start game
startGame.addEventListener('click', e => {
    overLay.style.display = 'none';

  });

//return random phrase from the array
function RandomPhrase(phrases) {
    const guessWord = phrases[Math.floor(Math.random()*phrases.length)];
    const word= guessWord.split('');
    return word;
};
const randomPhrase = RandomPhrase(phrases)

//adds the letters of a string to the display
function addPhrasetoDisplay () {
    for (let i = 0; i < randomPhrase.length; i++){ 
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(randomPhrase[i]));
        if(randomPhrase[i] == " ") {
        li.setAttribute('class', 'space');
    } else {
        li.setAttribute('class', 'letter');
    }
    const ul = document.querySelector('#phrase ul');
    ul.appendChild(li);
    };
};
addPhrasetoDisplay();

//check if letter is in phrase
function checkLetter(button) {
    const li = document.querySelectorAll('.letter');
    let match = null;
    for (let i = 0; i < li.length; i++) {
        if (button.textContent.toUpperCase() == li[i].textContent.toUpperCase()) {
            li[i].className += ' show';
            match = button.textContent;
        };
    };
    return match;
};

//listen for button clicks
qwerty.addEventListener('click', e => {
    if (e.target.tagName == 'BUTTON') {
        const button = e.target;
        button.className += 'chosen';
        button.disabled = true;
        const letterFound = checkLetter(button);
    if (letterFound === null) { 
            life -= 1
            tries[life].lastChild.src = 'images/lostHeart.png';  
    }
    } 
    checkWin();
}); 

// Check for win
const checkWin = () => {
    const letter = document.querySelectorAll('.letter');
    const show = document.querySelectorAll('.show');
    const title = document.querySelector('.title');
    const phrase = document.querySelector('#phrase');

        if (letter.length === show.length) {
            overLay.classList.add('win');
            title.textContent = "Whoop whoop, you won!!";
            overLay.style.display = 'flex';
            resetButton.textContent = 'Play Again';
            phrase.style.display = 'none';
            reload(); 
};     
    if (life === 0){
        title.textContent = 'Hard luck, try again?';
        overLay.classList.add('lose');
        overLay.style.display = 'flex';
        resetButton.textContent = 'Play Again';
        phrase.style.display = 'none';
        reload();     
        }  
};   

//restart Game
function reload() {
    resetButton.addEventListener('click', (event) => {
        location.reload();
    });    
  };
