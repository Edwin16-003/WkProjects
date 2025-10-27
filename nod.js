//variables
let myName ="Edwin";
console.log(`My name is: ${myName}`);
let cost =(5 + 2*3 + 9)*0.1;
console.log(`Cost of food is: $${cost}`);
//Cart quantity project
let cartQuantity = 0;
//calculator
let calculation;
function getNo(){
let randNO =Math.random();
let reponse="";
    if(randNO >= 0 && randNO < 0.33 ){
        reponse +="Rock";
    }else if(randNO > 0.33 && randNO < 0.66){
      reponse +="Paper";
    }else{
      reponse +="Scissors";
    }
    let giveAward="";
    if(reponse === "Rock"){
    giveAward +="A Win!";
    }else if(reponse === "Paper"){
    giveAward +="Paper beats Rock";
    }else{
    giveAward +="Scissors beats Paper";
    }
    document.getElementById("show").innerText=`You selected ${reponse} meaning ${giveAward}`;
    console.log(`You selected ${reponse} meaning ${giveAward}`);
}
function getNo1(){
  let randNO =Math.random();
let reponse="";
    if(randNO >= 0 && randNO < 0.33 ){
        reponse +="Rock";
    }else if(randNO > 0.33 && randNO < 0.66){
      reponse +="Paper";
    }else{
      reponse +="Scissors";
    }
    let giveAward="";
    if(reponse === "Rock"){
    giveAward +="Rock beats Scissors";
    }else if(reponse === "Paper"){
    giveAward +="Paper Win!";
    }else{
    giveAward +="Scissors beats Paper";
    }
    document.getElementById("show").innerText=`You selected ${reponse} meaning ${giveAward}`;
    console.log(`You selected ${reponse} meaning ${giveAward}`);
}
function getNo2(){
  let randNO =Math.random();
let reponse="";
    if(randNO >= 0 && randNO < 0.33 ){
        reponse +="Rock";
    }else if(randNO > 0.33 && randNO < 0.66){
      reponse +="Paper";
    }else{
      reponse +="Scissors";
    }
    let giveAward="";
    if(reponse === "Rock"){
    giveAward +="Rock beats Scissors";
    }else if(reponse === "Paper"){
    giveAward +="Paper beats Rock";
    }else{
    giveAward +="Scissors Win!";
    }
    document.getElementById("show").innerText=`You selected ${reponse} meaning ${giveAward}`;
    console.log(`You selected ${reponse} meaning ${giveAward}`);
}