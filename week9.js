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
