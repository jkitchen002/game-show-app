const overLay = document.getElementById("overlay");
const startGame = document.querySelector(".btn__reset");
const show = document.getElementsByClassName('show');
const qwerty =document.getElementById('qwerty');
const button = document.getElementsByTagName('button');

const phrases = [
    "LearnToCode",
    "JobReady",
    "LoveCode",
    "JobPlease",
    "HireMe"
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
        if(randomPhrase[i]){
        li.setAttribute('class', 'letter');
    };
    const ul = document.querySelector('#phrase ul');
    ul.appendChild(li);
    };
};

//check if letter is in phrase

// function checkLetter (button){
//     const li = document.getElementById('li');
//     for (let i = 0; i< li.length; i++);
//     if (button === li) {
//         li[i].className = 'show';
//         const match = li;
//         return match;
//     };

qwerty.addEventListener('click', (e) => {
      e.target.className += 'chosen';
  })
// };