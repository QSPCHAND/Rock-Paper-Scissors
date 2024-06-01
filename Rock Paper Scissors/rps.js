let userScore = 0;
let compScore = 0; 

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice= () =>{
    //rock,paper,scissors
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

};

const drawGame=() =>{
     //console.log("game was Draw");
     msg.innerText= "Game Was Draw,Play Again";
     msg.style.backgroundColor="#081b31";
}
const showWinner=(userWin,userChoice,compChoice) =>{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText= `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    } else{
        compScore++;
        compScorePara.innerText=compScore;
       // console.log("You Lose!");
        msg.innerText= `You Lose! ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
   console.log("user choice =",userChoice);

    //Generate Computor Choice//
const compChoice= genCompChoice();
console.log("Computer choice =",compChoice);

 if(userChoice ===compChoice)
 {    //Draw Game
       drawGame();
 }else{
    let userWin=true;

    if(userChoice==="rock")
    {    //comp :paper,scissors
       userWin=compChoice==="paper" ? false :true;
    }
    else if(userChoice==="paper")
    {    //comp :rock,scissors
         userWin= compChoice==="scissors" ? false :true;
    }
    else if(userChoice==="scissors")
    {   //rock ,paper
        userWin=compChoice==="rock" ? false:true
    }

    showWinner(userWin,userChoice,compChoice);
 }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice);
    });
});