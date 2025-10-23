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
