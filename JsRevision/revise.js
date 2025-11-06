//string,number and conditional statement
//greeting formatter
//string
let greeting ="Hello, ";
//conditional statement
if(myName = "Edwin"){
   console.log(greeting + myName);
}else{
  console.log("Hello, guest!");
}
//even and odd num checker
//number
let num = 15;
//conditional statement
if(num % 2 ===0){
  console.log(num + " is an even number.");
}else{
  console.log(num + " is an odd number.");
}
//simple discount calculator
//number
let price = 800;
//conditional statement
if(price > 1000){
   let discPrice = price * 0.5;
   console.log(`The price was ${price} and with discount of 10% is ${discPrice}`)
}else{
  let disPrice = price * 0.2;
  console.log(`The price was ${price} and with discount of 5% it is ${disPrice}`)
}
//time-based greeting
//number
let userInput = parseInt(prompt("Enter a hour 0-23"));
//conditional statement
if(userInput < 12){
  console.log("Good Morning");
}else if(userInput >= 12 && userInput <= 18){
  console.log("Good Afternoon");
}else{
  console.log("Good Evening");
}
//
