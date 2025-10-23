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

    }
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
    }
}
let obj4 =new School("Mark",60);
let obj5 =new School("Mercy",70);
let obj6 =new School("Job",80);
let obj7 =new School("Chao",50);
console.log(obj4.getGrade());