//class 
class Person{
    constructor(name,age,gender){
       this.firstName =name;
       this.personAge=age;
       this.personGender =gender;
    }
    introduce(){
        console.log(`My name is ${this.firstName} and I am ${this.personAge} years old and I am a ${this.personGender}.`);
    }
}
let myFriend =new Person("Rose M",21,"female");
myFriend.introduce();
let myBro = new Person("Albert R",19,"male");
myBro.introduce();
//Rectangle Area calculator
class Rectangle{
    constructor(width,height){
        this.rectWidth =width;
        this.rectHeight =height;
    }
    getArea(){
        let area = (this.rectWidth * this.rectHeight)* 2;
        console.log(`The area of a rectangle is: ${area}`);
    }
    getPerimeter(){
        let perimeter = this.rectWidth + this.rectWidth + this.rectHeight + this.rectHeight;
        console.log(`The perimeter of a rectangle is: ${perimeter}`);
    }
}
let rectWidthHeight =new Rectangle(60,40);
rectWidthHeight.getArea();
rectWidthHeight.getPerimeter();
//E-commerce cart
class Item{
    constructor(item1,item2,item3){
       this.itemA =item1;
       this.itemB =item2;
       this.itemC =item3;
    }
    showItems(){
        console.log(`E-Commerce items: ${this.itemA},${this.itemB} and ${this.itemC}`)
    }
}
let items =new Item("shoes","shirt","Tv")
items.showItems();
//Class-bank account system
class Account{
    constructor(owner,balance){
        this.accOwner =owner;
        this.accBalance =balance;
    }
    deposit(amount){
        const newBalance =this.accBalance + amount;
        console.log(`${this.accOwner} you have deposited ${amount} and the balance is: ${newBalance}`);
    }
    withdraw(amount){
        if(amount > this.accBalance){
             console.warn(`${this.accOwner} you have insufficient balance!`);
        }else{
            const newBalance =this.accBalance - amount;
            console.log(`${this.accOwner} you have withdrawn ${amount} and the remaining balance is:${newBalance}`);
        }
    }
    getBalnce(){
        console.log(`${this.accOwner} your total account balance is: ${this.accBalance}`);
    }
} 
let client =new Account("Mark",20000);
client.deposit(5000);//25000
client.withdraw(10000);//15000
client.getBalnce();
//object destructuring
//create an object
const userObj ={
    name:"William Smith",
    age:30,
    job:"IT Expert",
    experience:"5 years",
};
//display user information using object destructuring
const {name,age,job,experience} = userObj;
console.log(`${name} is ${age} years old and is an ${job} with ${experience} of experience.`);
//array destructuring 
//create an array
const scores =[90,82,75,68,56,45];
console.log([first,second,...rest] = scores);
//object and array destructuring
//create and object with an array
const obj ={
    list:[1,2,3,4,5,6,7,8]
}
//display the array from object using destructuring
const {list} = obj;
console.log(list);
//variables
let myName ="EDWIN";
console.log(`My name is: ${myName}`);