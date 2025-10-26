//student score analyzer
const students =[
    {name:"Mark",score:[40,50,50,40]},
    {name:"Jane",score:[60,55,60,55]},
    {name:"Tony",score:[80,60,70,80]},
];
//average score
//first student
let student1 =students[0].score;
console.log(student1);//gives me the scores for the first student
//average for first student
let avg1 =(student1[0] + student1[1] + student1[2] + student1[3]) /4;
console.log(avg1);
//second student
let student2 =students[1].score;
console.log(student2);//gives me the scores for the second student
//average for second student
let avg2 = (student2[0] + student2[1] + student2[2] + student2[3]) /4;
console.log(avg2);
//third student
let student3 = students[2].score;
console.log(student3);//gives me the scores for the fourth student
//average for fourth student
let avg3 =(student3[0] + student3[1] + student3[2] + student3[3]) /4;
console.log(avg3);
//compare the average of each student
const totalAvg =[
    avg1,avg2,avg3
];
//loop 
for(let i = 0;i < totalAvg.length; i++){
    if(totalAvg[i] > 70){
        console.log(`Name is ${students[2].name} and the Grade is A`);
    }else if(totalAvg[i]> 50 && totalAvg[i] < 70){
        console.log(`Name is ${students[1].name} and the Grade is B`);
    }else{
        console.log(`Name is ${students[0].name} and the Grade is C`);
    }
}
for(let i =0;i < totalAvg.length ;i++){
    if(totalAvg[i] > 70){
         console.log(`Top student is ${students[2].name}`)
    }
}
//product price checker
const product =[
    {name:"TV",price:1000,category:"electronics"},
    {name:"speaker",price:700,category:"electronics"},
    {name:"shirt",price:200,category:"stationary"},
];
//change the product name to upperCase
let prod1 = product[0].name.toUpperCase();
console.log(prod1);
let prod2 = product[1].name.toUpperCase();
console.log(prod2);
let prod3 = product[2].name.toUpperCase();
console.log(prod3);
//conditional statement
let price1 =product[0].price;
let price2 =product[1].price;
let price3 =product[2].price;
//place the price in an array so that you can compare
let combinedPrice =[price1,price2,price3];
//loop
for(let i =0;i < combinedPrice.length;i++){
    //compare the price
    if(combinedPrice[i] >= 1000){
     console.log(`High-end product:${product[0].name}`);
    }else if(combinedPrice[i] > 500 && combinedPrice[i] <= 999){
    console.log(`Mid-range product:${product[1].name}`);
    }else{
    console.log(`budget product:${product[2].name}`);
    }
}
//an array that stores only names of products form category electronics
let ele1 =product[0].name;
let ele2 =product[1].name;
const elArr =[];
elArr.push(ele1);
elArr.push(ele2);
console.log(elArr);
//date and time
let dayOfWk =["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]//an array of days of the week
let myBirthday = new Date("2004/07/05");//created my birthday date
let day = dayOfWk[myBirthday.getDate()];//created a variable that is assigned to the days of the week array that coverts the date 5 from myBirthday to the day of the week saturday
console.log(day);
//Adding some days 
let today = new Date();
let findToDate = today.getDate();
let addDays = findToDate + 7;
console.log(addDays);
console.log(new Date(2025,9,addDays));
//return an array in which each element has been divided with 10
let arr1 =[10,20,30,40];
for(let i=0; i < arr1.length;i++){
    console.log(arr1[i]/10);
}
//return an array with only even numbers
let arr2 =[2,5,8,11,14];
for(let i = 0; i < arr2.length; i++){
    if(arr2[i] % 2 ===0){
        console.log(arr2[i]);
    }
}
//sort array alphabetically
let fruits =["banana","apple","mango","cherry"];
console.log(fruits.sort());
//shopping cart system
//create an array of product objects
const proItem =[
    {item:"shirt",price:200},
    {item:"shoe",price:800}
];
//add more items to the cart
proItem.push({item:"table",price:1000});//item one 
proItem.push({item:"book",price:100});//item two
//display the new shopping cart system
console.log(proItem);
//using for...loop to list all items
for(const key of proItem){
   console.log(key);
}
//calculate the total cost using reduce() method
let calItem1 =proItem[0].price;
let calItem2 =proItem[1].price;
let calItem3 =proItem[2].price;
let calItem4 =proItem[3].price;
//keep all items in an array
let calArr =[];
calArr.push(calItem1,calItem2,calItem3,calItem4);
//use the reduce() method to display total price for items
let totalItem =calArr.reduce((acc,current) => acc + current, 0);//reduce method
console.log(`Total price for the shopping cart system is:${totalItem}`);
//Data Extractor(regular expressions and string)
let messyText ="customer: John Doe, Email: john.doe@gmail.com, Phone: +254-712-345678";
let cleanTxt1 = messyText.search(/"customer: John Doe"/g);
console.log(cleanTxt1);
//js review
//datatypes
//string
let nickname ="edu";
//string methods
let othername ="p";
//concat
console.log("i am " + nickname + " and " + othername);
console.log(`I am ${nickname} and my othername is ${othername}`);
console.log(nickname.toLocaleUpperCase());
//other methods are toLowerCase,trim,replace,search,include,match toString e.t.c
//number
let num = 300;
//number methods
console.log(num + 10);
//other methods number,isSafeInteger,float ,fixed,parseInt,parseFloat
//javascript operations
//arithmetic ,logical,compound,assignment,comparision(equality and relational),increment and decreament e.t.c
//non-primitive datatypes
//objects
const libray ={
    title:"javascript",
    author:"Charles",
    pages:500
};
//object methods
//accessing property keys
console.log(libray.title);
console.log(libray["author"]);
//adding and removing properties in an object 
console.log(libray.date="20/03/1900");
console.log(delete libray.pages);
//other methods and ways to manipulate the object
//method ,constructor,object destructuring
//constructor
function Car(para1,para2){
    this.model=para1;
    this.engine =para2;
    //method
    getDescription(){
        console.log(`this is my car description: the model is ${this.model} and engine type is ${this.engine}`);
    }
}
//accessing property keys
let myCar =new Car("V8",500);
//call method
myCar.getDescription();
//object destructuring
//destructure the libray object
//access all the property keys
console.log({title,author,date} = libray);
//arrays
const digits =[10,20,30,40,50];
//array methods
console.log(digits);//all
console.log(digits[0]);//10
console.log(digits.shift());//delete first element
console.log(digits.pop());//delete last element
console.log(digits.push(60));//add elements into an array
//other splice,sort,reduce,copy,...spread e.t.c
//helper functions every,from,filter,reduce
//array destructuring,set,map
//conditional statements if,else if,else and switch
//loop
//while,do while,for,for...of,for...in loop
//for loop
for(let i =0;i<5;i++){
    console.log(i);
}
//for...of loop in arrays
const marks= [1,2,3,4,5];
for(const keys of marks){
    console.log(keys);
}
//for...in loop in objects
const data ={
    name:"database",
    storage:20
};
for(const lists in data){
    console.log(lists);
}
//regular expression(text validation and search)
//Javascript rules and guidelines
//use of camelCase,semicolon,,keywords,variable declaration,hoisting
//functions
//function declaration
function funcName(/*parameter*/){/*code to be executed*/}
//function expression
let myFunc =funcName(/*parameter*/){/*code to be executed*/};
//IIFE function
//arrow function
(/*parameter*/)=>{/*code to be executed*/};
//anonymous functions
let myFun =funcName(/*parameter*/){ /*code to be executed*/};
//callbacks
//passing another function as an argument
let getGrade =function graded(){};//anonymous
function main(){}//normal function
//call a function
main(getGrade);//passing a function as an argument
//promises
//recommended rather than callbacks,got the producing code and consuming code
//execution will continue if the producing code ends with a result
let prom =new Promise();//producing code
prom.then();//consuming code
//asynchronouse javascript,delaying a certain execution for others to finish executing
setInterval(main,2000);
setTimeout(getGrade,1000);
//execution context
//this is how javascript process of execution is done
//GEC(creation phase,execution phase)
//FEC(creation phase,execution phase)
//memory allocation(stack(primitive values),heap(non-primitive values))
//javascript closures
//this is when a main function has a child function and when execution of the main function ends the child function remembers the main function
//banking system-the balance remains unchanged so every child function uses the balance like a deposit function use the balance and adds up then the withdraw function gets the balance that was used in the deposit function and deduct the amount.(balance - balance + deposit - (balance - withdraw) - balance )
//javascript scope
//where a certain code is located(global,block,function)
//global scope,code is located in the open javascript environment
//block scope,code is located inside paranthesis like in conditional statements
//function scope,code is located inside the function
/*concept-if we declare a variable at the global scope and want to access it using the function the scope mechanism does its work(in the function scope the function starts executing trying to find the variable but it does not find any variable so with the help of scope the execution goes back to the global scope to search for a variable then when it finds and completes it's execution)*/
//javascript this keyword
//this is an object document(this === window)
//this refers to the object itself
//classes
class Classy{
    constructor(arg,ad){
        this.one=arg;
        this.two=ad;
    }
    gtInn(){}
}
let him=new Classy("tree",2);
him.gtInn();
//html DOM
//javascript brings inteructivity to an html page
//document object model
//js inteructivity
//clicking buttons
//entering data into forms 
//changing html elements
//style html with js
//change attribute
//html DOM methods
document.getElementById();//manipulate html element using id attribute
document.getElementsByClassName();//manipulate html element using class
document.getElementsByName();
document.getElementsByTagName();//manipulate html element using element tags
document.querySelector();//selecting an element
document.querySelectorAll();//selecting all elements
//within html elements we can use onclick and addEventListener methods 



