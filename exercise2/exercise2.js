//Js HTML DOM
document.getElementById("text1").innerHTML="JavaScript Projects and Exercises";
document.getElementById("text2").innerHTML="Welcome into the amazing world of javascript projects and exercises.";
//change the background-color of an element
function changeColor(){
    let el1 =document.getElementById("field");
    el1.setAttribute("style","background-color:red;border:1px solid black");
    el1.setAttribute("id","square");
}
//classes and objects
//create a class
class Person{
    //use a constructor method
    constructor(first,second){
        this.name =first;
        this.age =second;
    }
    //method
    introduce(){
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}
//accessing class properties
let obj1 =new Person("Edu",20);
obj1.introduce();
//create a class
class People{
    constructor(name){
        this.fullname =name;
    }
}
class Student extends People{
    constructor(name,admno){
        super(name);
        this.studentId =admno;
    }
    study(){
        console.log(`${this.fullname} your id ${this.studentId} is being processed`)
    }
}
let obj2 =new Student("Aldinah","T4W300");
obj2.study();
//array of objects
let contact =[
    {name:"Edu",phone:"074536527"},
    {name:"Mike",phone:"0739288192"}
];
showContact();
function showContact(){
    for(let cont of contact){
        console.log(contact[0].name +" phone is "+ contact[0].phone);
    }
}
//student grade system (classes)
class School{
    constructor(first,score){
       this.studentname =first;
       this.mark =score;
    }
    getAverage(){
       let avg =this.mark;
       let totalAvg = avg.reduce((acc,current) => acc + current,0)/4;
       if(totalAvg > 80 && totalAvg <= 100){
            console.log(totalAvg);
            console.log("Grade A")
        }else if(totalAvg > 60 && totalAvg <= 79){
            console.log(totalAvg);
            console.log("Grade B");
        }else if(totalAvg > 50 && totalAvg <= 69){
            console.log(totalAvg);
            console.log("Grade C");
        }else{
            console.log(totalAvg);
            console.log("Grade D");
        }
    }/*
    getGrade(){
        if(this.mark > 80 && this.mark <= 100){
            console.log("Grade A")
        }else if(this.mark > 60 && this.mark <= 79){
            console.log("Grade B");
        }else if(this.mark > 50 && this.mark <= 69){
            console.log("Grade C");
        }else{
            console.log("Grade D");
        }
    }*/
}
let obj4 =new School("Mark",[50,74,60,85]);
let obj5 =new School("Mercy",[70,55,40,50]);
let obj6 =new School("Job",[30,40,60,40]);
let obj7 =new School("Chao",[50,70,80,80]);
obj4.getAverage();
obj5.getAverage();
obj6.getAverage();
obj7.getAverage();