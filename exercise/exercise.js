//basic for loops 
/*Count from 1 to 10
Write a loop that prints numbers from 1 to 10.*/
for(let i =0;i < 10;i++){
    console.log(i);
}
/*Even numbers between 1 and 20
Print only the even numbers between 1 and 20.*/
for(let i =0;i <= 20;i += 2){
    console.log(i);
}
/*Sum of numbers
Use a loop to find the sum of numbers from 1 to 100.*/
let sum =0;
for(let i = 0;i <= 100;i++){
 sum += i;
}
console.log(sum);
//loops with array
/*Print each element in an array
Given let fruits = ["apple", "banana", "cherry"];
Use a loop to print each fruit.
*/
let fruits =["apple","banana","cherry"];
for(let text of fruits){
   console.log(text);
}
/*Find the largest number in an array
Given let numbers = [3, 7, 2, 9, 5];
Write a loop to find the largest number.*/
let numbers =[3,7,2,9,5];
let largest =numbers[0];//assume the first number is the largest
//but we use the for loop to go over the other elements to see if there is a larger and replace
for(let i = 0;i<numbers.length;i++){
    if(numbers[i] > largest){
        largest=numbers[i];
    }
}
console.log(largest);//9
//Basic Iteration with for Loop
/*
Print all elements
Given:
let colors = ["red", "green", "blue"];
*/
let colors =["red","green","blue"];
for(let items of colors){
    console.log(items);
}
/*Sum of numbers
let numbers = [5, 10, 15, 20];
loop through the array and calculate the total sum
 */

let nums=[5,10,15,20];
for(let i=0;i < nums.length;i++){
    let sum1 = nums[0] + nums[1] + nums[2] + nums[3] + nums[4];
    console.log(sum1);
}
/*Find the largest number
let nums = [2, 8, 4, 10, 6];
Use a loop to find the maximum number.
*/
let num1 =[2,8,4,10,6];
let big =num1[0];//assume the first element is large 
//but we need to loop over all elements in order to get the largest number
for(let i=0;i < num1.length;i++){
    //we compare the number from each loop to see which is the largest
    if(num1[i] > big){
        big=num1[i];
    }
}
//output the largest number
console.log(big);
/*
Uppercase words
let fruits = ["apple", "banana", "cherry"];
Print each fruit in uppercase using for...of.
*/
let myFruits =["apple","banana","cherry"];
for(let text of myFruits){
    console.log(text.toUpperCase());
}
/*
Count even numbers
let values = [3, 6, 9, 12, 15];
Count how many numbers are even.
*/
let values =[3,6,9,12,15];
for(let i = 0;i < values.length;i++){
   if(values[i] % 2 === 0){
    console.log(values[i]);
   }
}
let currentDate =new Date("2025/10/03");
console.log(currentDate);
console.log(currentDate.getDate());
console.log(currentDate.getMonth());
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getFullYear());

let tomoroDate =new Date("2025/10/04");
console.log(tomoroDate);

let yesterDate =new Date("2025/10/02");
console.log(yesterDate);
//brief javascript review
let myNum1 =50;
let myNum2 =20;
let operate ="-";
getNumber(myNum1,myNum2,operate);
function getNumber(number1,number2,operator){
    if(operator !== "+"){
        return number1 - number2;
    }else{
        return number1 + number2;
    }
}
console.log(getNumber(myNum1,myNum2,operate));
console.log(getNumber(80,20,"+"));
console.log(getNumber(1000,500,"-"));
//loop with function
const numArr=[];//I have not made any changes to it
for(let i=0;i<10;i++){
    let firstV =i*5;//multiply the value of the loop count by 5
    let secV =i*i;//multiply the value of the loop counter by itself
   console.log(getValues(firstV,secV));//call the function form the loop for the two values
}
function getValues(para1,para2){
    return para1 + para2;
}
//classes
//create a class and ClassName
class Person{
    //object constructor method
    constructor(first,last){
       this.firstname =first;
       this.lastname =last;
    }
    fullname(){
        return this.firstname +" "+ this.lastname;
    }
}
//accessing the class and changing the properties
let myObj =new Person("Edwin","Pelu");
let myObj2 =new Person("Aldina","Mwaka");
console.log(myObj.fullname());
console.log(myObj2);
//employee tracking app
class Employee{
    constructor(first,last,year){
      this.firstname =first;
      this.lastname =last;
      this.years =year;
    }
    employ(){
        return "This is " + this.firstname + " "+this.lastname +" and has worked for "+this.years+" years.";
    }
}
let p1 =new Employee("Edu","P",20);
let p2 =new Employee("Aldina","Mwaka",10);
console.log(p2.employ());
let empArr=[];
empArr.push(p1,p2);
console.log(empArr);
//find the average using function and loop
let arr1 =[10,20,30,50];
average(arr1);
function average(arr){
    for(let i = 0;i < arr.length;i++){
        return (arr[0] + arr[1] + arr[2] + arr[3])/arr.length;
    }
}
console.log(average(arr1));//27.5
//filter number greater than 10
let arr3 =[5,12,3,18,7,25];
let high =arr3[0];
for(let i =0;i < arr3.length;i++){
    if(arr3[i] > 10){
        console.log(arr3[i]);//12,18,25
    }
}
let arr4 =[4,6,7,11,12];
let num =arr4[0];
getEven(arr4);
function getEven(arr){
    for(let i = 0;i < arr.length ;i++){
        if(num % 2 === 0){
            return arr[i];
        }
    }
}
console.log(getEven(arr4));

let arr5 =[80,92,75,60,99,85];//create an array of numbers
let highest =arr5[0];//assume index 0 is the largest
let lowest =arr5[0];//assume index 0 is the lowest
//loop over the array to find the large number
for(let i = 0;i<arr5.length;i++){
    //give condition if the first element is large then continue to find  
    if(arr5[i] > highest){
        highest=arr5[i];
    }
}
//loop over the array to find the lowest number
for(let i = 0;i<arr5.length;i++){
    //give condition if the first element is small then continue
    if(arr5[i] < lowest){
        lowest=arr5[i];
    }
}
for(let i = 0;i<arr5.length;i++){
    let average =(arr5[0] + arr5[1] + arr5[2] + arr5[3] + arr5[4])/arr5.length;
    console.log("Total average is "+ average.toFixed());
}
console.log(highest + " is the largest number");
console.log(lowest + " is the smallest number");
//finding an even number
let arr6 =[2,3,4,5,6];//an array of numbers
//loop over the array 
for(let i =0;i < arr6.length;i++){
    //use if condition to check the even number
    if(arr6[i] % 2 === 0){
        console.log(arr6[i]);//2,4,6
    }
}
//objects 
let prop ={name:"john",age:22};
prop.course="computer science";
console.log(prop);
//array of objects
const arr7 =[
    {name:"edie",age:20},
    {name:"dan",age:18},
    {name:"rose",age:21}
];
//loop through the array
for(const turn of arr7){
    console.log(turn);
}
//nested object
const user ={
    name:"Alice",
    contact:{
        email:"alice@gmail.com",
        phone:"0728291908"
    }
};
//display the phone number
console.log(user.contact.phone);