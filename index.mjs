import randomInteger from "random-int";
import PromptSync from "prompt-sync";
const prompt=PromptSync();





/*

// let name=prompt("what is your name")
// console.log(name);

const num=prompt("enter a no")
let addition=(num+4);
let  addi_tion=(Number(num)+4)

// console.log(addition);
// console.log(addi_tion);

*/

let userInput=prompt("0 for rock,1 for paper,2 for scicssors");

userInput=Number(userInput);

if(userInput =!1 || userInput !=2 || userInput !=0){

    console.log("wrong_input")
    
}else{console.log("lets_play")

};


let choices=["rock","paper","scissors"];

let userChoice=choices[userInput];

let  computerChoice=choices[randomInteger(0,2)];

// function result(){}

let result=("")
if(userChoice==computerChoice){(result="draw")

}else if (userChoice=="rock" && computerChoice=="paper"){

    (result="computer_wins")

} else if (userChoice=="rock" && computerChoice=="scissors"){

    result="user_wins"

}else if(userChoice=="paper" && computerChoice=="scissors"){

    result="computer_wins"

}else if(userChoice=="paper" && computerChoice=="rock"){

    result="user_wins"

} else if(userChoice=="scissors" && "computerChoice==rock"){

    result="computer_wins"
}

console.log("welcome");
console.log("rock,paper,scissors game");
console.log("user  select ",userChoice);
console.log("computer select ",computerChoice);
console.log("result ",result);
console.log("thank-you");



