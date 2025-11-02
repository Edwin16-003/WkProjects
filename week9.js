//change background color of the body
function changeBcolor1(){
  document.getElementById("parent").style.backgroundColor="red";
}
function changeBcolor2(){
  document.getElementById("parent").style.backgroundColor="blue";
}
function changeBcolor3(){
  document.getElementById("parent").style.backgroundColor="green";
}
//change the background color of the div element
function changeDcolor1(){
  document.getElementById("container").style.backgroundColor="yellow";
}
function changeDcolor2(){
  document.getElementById("container").style.backgroundColor="brown";
}
//random number generator
function random(){
  let randNo =Math.floor(Math.random()*100);
  document.getElementById("randNum").innerHTML =randNo;
}
//show and hide text-concept
function disappear(){
  document.getElementById("para").classList.toggle("hide");
}
//employee tracking app
class Employee{
   constructor(fname,lname,year){
     this.firstname =fname;
     this.lastname=lname;
     this.noOfYears=year;
   }
}
Employee.prototype.getDetail=function(){
  document.getElementById("emp").innerText=`My name is ${this.firstname} ${this.lastname} and I have worked in this company for ${this.noOfYears} years.`;
}
let emp1 =new Employee("Edu","P",5);
let emp2 =new Employee("Mary","S",10);
console.log(emp1.getDetail());
const people=[];
people.push(emp1,emp2);
//iterate people array
for(let i =0;i<people.length;i++){
  console.log(people[i]);
}
//student grade system
//create an array of objects
const students =[
 {name:"Alice",marks:78},
 {name:"Bob",marks:92},
 {name:"John",marks:60}
];
//award the grades
function getGrade(score){
   if(score >= 80){
     return "Grade is A";
   }else if(score >= 70 && score <= 79){
    return "Grade is B";
   }else if(score >= 60 && score <= 69){
    return "Grade is C";
   }else{
    return "Grade is F";
   }
}
//display the grades
console.log(getGrade(students[0].marks));
console.log(getGrade(students[1].marks));
console.log(getGrade(students[2].marks));
//loop and output the students array
for(const pupils of students){
    console.log(pupils);
}
//shopping cart total
//create an array of obj items
const cart =[
  {name:"Shirt",price:1200,quantity:2},
  {name:"Shoes",price:2500,quantity:1},
  {name:"Cap",price:500,quantity:3}
];
//calculate the total cost of each item
//item1
let itemPrice1 =cart[0].price;//1200
let itemQuantity1 =cart[0].quantity;//2
let totalCost1 =itemPrice1 * itemQuantity1;//2400
//item2
let itemPrice2 =cart[1].price;//2500
let itemQuantity2 =cart[1].quantity;//1
let totalCost2 =itemPrice2 * itemQuantity2;//2500
//item3
let itemPrice3 =cart[2].price;//500
let itemQuantity3 =cart[2].quantity;//3
let totalCost3 =itemPrice3 * itemQuantity3;//1500
//store the items in array
const itemCost =[totalCost1,totalCost2,totalCost3];
//calculate the total cost of items in the cart
function calTotal(array){
   let total =array.reduce((acc,current) => acc + current,0);
   if(total > 4000){
     console.log("The total cost is : " + total * 0.10);
   }else{
     console.log(total);
   }
}
//call and display a function 
console.log(calTotal(itemCost));
//bank account system
//create an object
const account ={
  ower:"Edwin",
  balance: 1000,
  //deposit
  deposit(amount){
    return account.balance + amount;
  },
  //withdraw
  withdraw(amount){
    if(account.balance > 500){
       return account.balance - amount;
    }else{
       return console.warn("Insufficient funds!");
    }
  },
  //checkbalance
  checkBalance(){
    return `Your current balance is: ${account.balance}`;
  }
}
//call and display each function
console.log(account.deposit(500));
console.log(account.withdraw(500));
console.log(account.checkBalance());