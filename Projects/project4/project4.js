 // generate the random number

// const { use } = require("react");

 // we are using +1, bca if number randomly become with +1 it will be greater than 0

let random_num = parseInt(Math.random() * 100 + 1);
console.log(random_num)
//  submit button
const submit = document.querySelector('#guess_submit')

const userinput = document.querySelector('#guessfield');

const guessslot = document.querySelector(".guesses");

// in total wecan only guess 10 number , so this is count how many number of guess left
const remaining_guess = document.querySelector('.lastResult');

const lowhigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.result');
const p = document.createElement('p');

// in this we will store the previous guess by the user
let pre_guess = []
// how many guess he guesses
let num_guess = 1;

// when ever you making a game this varialbe enable user to play the game or condition checked before playing game
let playGame = true;

// const guess = parseInt(userinput.value);
if(playGame){
    submit.addEventListener('click',function(e)
    {
        
            e.preventDefault(); 
        // taking value from user
        const guess = parseInt(userinput.value) // parseInt used to read only natural number and eliminatente decimal value 
        console.log(guess);
        validateGuess(guess);
    })
}


//function which validate the nuber which is guessed by user/player . is that number b/w 1 to 100 or not less than 0 etc
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Plz enter a valid number');
    }

    else if(guess < 1){
        alert(`number should be greater than 0`);
    }

    else if(guess > 100){
        alert(`NUmber should be less than 100`);
    }
    else{
        // store the guess number in pre_guess array
        pre_guess.push(guess);
        // check if this is player last attempt
        if(num_guess >= 10){
            displayGuess(guess);
            displayMSG(`Game over. the correct num is, ${random_num}`);
            endgame();
        } else{
            displayGuess(guess);
            checkGuess(guess); 
        }
    }
}

// this will check that guess value is correct, high or low than correct value
function checkGuess(guess){
    if(guess == random_num){
        displayMSG(`you guessed the correct number`);
        endgame();
    }
    else if(guess < random_num){
            displayMSG(`Guessed num. is lower than random(correct num)`);
    }
    else if(guess > random_num){
        displayMSG(`Guessed num. is Greater than random(correct num)`);
    }
    
}


// display which number user guess
function displayGuess(guess){
    userinput.value = `` // clean the user input guess value
    guessslot.innerHTML += `${guess},` // using comma for spacing . when number is displayed on the browser
    num_guess++;
    // now count how many guess remaining(total is 10)
    remaining_guess.innerHTML = `${11 - num_guess}`
}


// print the message
function displayMSG(message){
    lowhigh.innerHTML = `<b><i> ${message} </i></b> `;
}

// function which start the game

function endgame(){
    // when we our ending our game we will clear all the previous guesses and user inputs
    userinput.value = `` // it will clean the userinput value
        userinput.setAttribute(`disabled`,``) // disabled is key value pair thats why we are uisng the anoter (``) that comma
        p.classList.add(`button`)
        p.innerHTML = `<h2 id= "newGame_challu"> Start the new game </h2>`;
        startOver.appendChild(p)
        playGame = false
        newgame();
}


function newgame(){
    const newGamebutton = document.querySelector('#newGame_challu')
    newGamebutton.addEventListener(`click`,function(e){
        //whenerver you making any kind of game don't immediately start the game first reset or clean the variables
        // when start the new game we should now take a new random number
        displayMSG('')
        random_num = parseInt(Math.random() * 100 + 1);
        // reset the previous guees number for data 
        pre_guess =[];
        num_guess = 1;
        guessslot.innerHTML = ``
        remaining_guess.innerHTML = `${11 - num_guess}`
        userinput.removeAttribute(`disabled`)
        startOver.removeChild(p)
        playGame = true;
        
    })
    }