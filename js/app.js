const overLay = document.getElementById("overlay");
const startGame = document.querySelector(".btn__reset");
const show = document.getElementsByClassName('show');
const qwerty =document.getElementById('qwerty');
const button = document.getElementsByTagName('button');
const tries = document.getElementsByClassName('tries');
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
    addPhrasetoDisplay();
  });

//return random phrase from the array
function RandomPhrase() {
    const guessWord = phrases[Math.floor(Math.random()*phrases.length)];
    const word= guessWord.split('');
    return word;
};
const randomPhrase = RandomPhrase()

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

//check if letter is in phrase
function checkLetter(button) {
    const li = document.querySelectorAll('.letter');
    let match = null;
    for (let i = 0; i < li.length; i++) {
        if (button.textContent.toUpperCase() == li[i].textContent.toUpperCase()) {
            li[i].className += 'show';
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
    
    if (letterFound == null) {
        for (let i = 0; i <tries.length; i--) {
            tries[i].style.display = 'none';
            console.log('Nothing found')
 
    else { button.classList.add('show')
            button.classList.remove('chosen')
        } // line 74
    } // line 70 for loop
    }; // line 69 
    }; // line 63 
}); // line 62 Event Listener