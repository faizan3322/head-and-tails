const choices = document.querySelectorAll(".choice");
const resBtn= document.querySelector("#res-btn");
let userScore=0;
let compScore = 0;

// When user clicked
choices.forEach((choice) => {
    choice.addEventListener('click', ()=>{
        let userChoice= choice.getAttribute("id");
        Comp(userChoice);
        playGame(userChoice);
    }) 
    
});
let comDec ;
// computer selects
let Comp=(userChoice)=>{
    
    if(userChoice==="heads"){
        comDec="tails";
    }
    else{
        comDec="heads";
    }
}
// lets decide who wins
let decision = () =>{
    let options=["heads","tails"]
    let toss=Math.floor(Math.random()*2);
    return options[toss];

}

// When game played
let playGame=(userChoice)=>{
console.log("User Selects: ",userChoice);
console.log("Computer Selects: ",comDec);
console.log(decision());
if(userChoice=== decision()){
    resBtn.innerText="Loading...";
    // document.getElementById('load').style.display="block";
    setTimeout(()=>{
        
        userWins();
    },3000)
   
    
}
else{
    resBtn.innerText="Loading....";
    setTimeout(compWins,3000)
}
}
// user wins
let userWins=()=>{
    resBtn.innerText="Congrats, You Won :-)";
    resBtn.style.backgroundColor="green ";
    userScore++;
    document.querySelector("#user").innerText = userScore;
}

let compWins=()=>{
    console.log("Computer won");
    resBtn.innerText="OOPS, You Lost :(";
    resBtn.style.backgroundColor="red";
    compScore++;
    document.querySelector("#comp").innerText = compScore;
}