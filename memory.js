// letters
const letters = 'abcdefghijklmnopqrstuvwxyz+#';

// Get Array 
let lettersArray = Array.from(letters);

// select letters container
let lettersContainer = document.querySelector('.letters');

// Generate letters 
lettersArray.forEach(letter => {
    
    // create span 
    let span = document.createElement('span');
    
    // create letter text node
    let theLetter= document.createTextNode(letter);
    
    // append theLetter to span
    span.appendChild(theLetter);
    
    // add class to span 
    span.classList.add('letter-box');
    
    //append span to body 
    lettersContainer.appendChild(span);
    
})
// object of words  +  catogray

const words = {
    programming : ['php','javascript','c++','c#','r','mySql','python'],
    movies : ['prestige','incepation','parasite','intresiteller','meneto','coco','up'],
    people : ['Gezo','Safwat','hamza','mailk','hossom'],
    countries : ['egypt','syrai','palestine','yemen','Bahrain','qater'],
}
// Get random property 
let allKeys = Object.keys(words);

let randomPropNum = Math.floor(Math.random() * allKeys.length);
let randomPropName = allKeys[randomPropNum];
let randomPropValue = words[randomPropName];


let randomValueNum = Math.floor(Math.random() * randomPropValue.length);
let randomValueValue = randomPropValue[randomValueNum];

// set category info 
$(document).ready(function(){
    
   $('.category span').text(randomPropName).fadeOut(10).fadeIn(2000);    
})

// select letter guess Element  

let letterGuessContainer = document.querySelector('.letterrs-guess');

// convert chosen word to Array 

let letterAndSpace = Array.from(randomValueValue);

letterAndSpace.forEach(letter => {
    // create empty span
    
    let emptySpan = document.createElement('span');
    
    // if letter is space add it class 
    if (letter === ' ' ) {
        
        // add it class
        
        emptySpan.className = 'with-space';
            }
    // append span to guess letter 
    
    letterGuessContainer.appendChild(emptySpan);
    
    
});
// select Geuss span 

let geussSpan = document.querySelectorAll('.letterrs-guess span');

// set wrong attempts 
let wrongAttempts = 0 ; 

let theDrew = document.querySelector('.hangman-draw');

// handle  clicked on letters 

console.log(letterAndSpace);

document.addEventListener('click' , (e) => {
    
    //  set the choose status
    let theStatus = false; 
    
    if (e.target.className === 'letter-box') {
        
        e.target.classList.add('clicked');
        
        // get clicked letter 
        
        let theClickedLetter = e.target.innerHTML.toLowerCase();
        
        //  choosen word 
            
        let chosenWord = Array.from(randomValueValue.toLowerCase());
            
        chosenWord.forEach( (wordLetter , wordIndex) => {
            
            // if the clicked letter equal one of the chosen  word Letter
            
            if (theClickedLetter == wordLetter) {
                
                // set   status to correct 

               theStatus = true; 
                
               geussSpan.forEach((span,spanIndex) => {
                   
                   if (spanIndex == wordIndex) {
                       
                       span.innerHTML = wordLetter;
                   } 
               });
            }
        });
        
        // if letter is wrong 
        if (theStatus !== true) {
                
            // increase the wrong
            wrongAttempts++;
            
            // add class wrong on the drew element
            
            theDrew.classList.add(`wrong-${wrongAttempts}`);
            
            // if  wrongAttempts = 8 => stop
            
            if (wrongAttempts === 8) {
                
                endGame();
                
                lettersContainer.classList.add('finished');
                
            }  
        }
        
        // get div have span have class wrong
        
        let wrongs = document.querySelector('.wrong span');
        
        if ( wrongAttempts <= 4) {
            
            wrongs.innerHTML = `wrongs : ${wrongAttempts} , you are good`;
            
        } else {
            
            wrongs.innerHTML = `wrongs : ${wrongAttempts} , you are bad`;
        } 
    }
});


function endGame(){
    
    // create popup div 
    
    let div = document.createElement('div');
    
    // create textnode 
    
    let divText = document.createTextNode(`Game Over , the word is ${randomValueValue}`);
    
    // append text to div 
    
    div.appendChild(divText);
    
    // add class to div 
    
    div.className = 'popup';
    
    // append to the body 
    
    document.body.appendChild(div);
    
}
function Congrat(){
    
    // create popup div 
    
    let divCongrat = document.createElement('div');
    
    // create textnode 
    
    let divTextCongrat = document.createTextNode(`Congratulations`);
    
    // append text to div 
    
    divCongrat.appendChild(divTextCongrat);
    
    // add class to div 
    
    divCongrat.className = 'popupCongrat';
    
    // append to the body 
    
    document.body.appendChild(divCongrat);
    
}























