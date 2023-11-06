


const randomnum = Math.floor((Math.random() * 100) + 1);

let submit = document.querySelector(".submit")
let userinput = document.querySelector(".guessfield")
let startover = document.querySelector(".result")
let remaning = document.querySelector(".remainingguess")
let guessslot = document.querySelector(".previousguess")
let highorlow = document.querySelector(".highorlow")   
let againButton = document.getElementById('againButton'); 


let p = document.createElement('p')

let previousguess = []
let numguess = 1
let playgame = true;

if(playgame){
    submit.addEventListener('click' , function(e){
        e.preventDefault();
        const guess = parseInt(userinput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){

    if(isNaN(guess)){
        alert('Please Enter a valid Number')
    }
    else if(guess < 1){
        alert('Please Enter a Number grater than 1')
    }
    else if(guess > 100){
        alert('Please Enter a Number smaller than 100')
    }
    else{
        previousguess.push(guess)

        if(numguess == 11){
            displayGuesses(guess)
            diaplayMessage(`Game Over! The Number Was ${randomnum}`)
            endGame()
        }
        else{
            displayGuesses(guess)
            checkGuesses(guess)
        }

    }

}

function checkGuesses(guess){
    if(guess === randomnum){

        diaplayMessage(`You Guessed Correctly!`)
        endGame()
    }
    else if(guess<randomnum){
        diaplayMessage(`Please, Guess a Bigger Number`)
    }
    else if(guess>randomnum)
        diaplayMessage(`Please, Guess a Smaller Number`)
    
}

function displayGuesses(guess){
    userinput.value = ''
    guessslot.innerHTML += `${guess} `
    numguess++
    remaning.innerHTML = `${12- numguess}`
}

function diaplayMessage(message){
    highorlow.innerHTML = `<h3>${message}</h3>`  
}

function endGame(){
    userinput.value = ''
    userinput.setAttribute('disabled' , '')
 

    startover.appendChild(p)
    playgame = false

    againButton.addEventListener('click', function(){
        location.href ="\Learining Java Script\guess_number.html"
      })
}












