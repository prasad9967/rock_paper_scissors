let userScore = 0
let compScore = 0

const choices = document.querySelectorAll('.choice')
const msg = document.querySelector('#msg')
const user_score = document.querySelector('#user-score')
const comp_score = document.querySelector('#computer-score')



const genComputerChoice = () =>{
    const options = ['rock', 'paper', 'scissors']
    const randIdx = Math.floor(Math.random()*3)
    return options[randIdx]
}

const drawGame = () => {
    msg.innerText = 'Game was Draw. Play again.'
    msg.style.backgroundColor = '#4F5D75'
}
const showWinner = (userWin, compChoice, userChoice) => {
    if(userWin){
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = '#4DA167'
        userScore ++
        user_score.innerText = userScore 
        
    }
    else{
        msg.innerText = `You Lost. ${compChoice} beats  your ${userChoice}`
        msg.style.backgroundColor = '#F24236'
        compScore ++
        comp_score.innerText = compScore
        
    }
}

const playGame = (userChoice) => {
    const compChoice = genComputerChoice()

    if(userChoice === compChoice){
        drawGame()
    }
    else{
        let userWin = true
        if(userChoice === 'rock'){
            userWin = compChoice === 'paper' ? false : true
        }
        else if(userChoice === 'paper'){
            userWin = compChoice === 'scissors' ? false : true
        }
        else {
            userWin = compChoice === 'rock' ? false : true
        }
        showWinner(userWin, compChoice, userChoice)
    }
    
}

choices.forEach(choice => {
    choice.addEventListener('click',()=>{
        const userChoice = choice.getAttribute('id')
        playGame(userChoice)
    })
})