//paragraph
document.getElementById("para").style.color="green";
document.getElementById("para").style.fontSize="20px";
document.getElementById("para").style.backgroundColor="gray";
function appear(){
    document.getElementById("para").style.padding="10px";
}
function changeVisibility(){
    document.getElementById("shape").classList.toggle("hide");
}
function addRandNo(){
    let el =document.createElement("p");
    el.style.backgroundColor="blue";
    el.style.height="40px";
    el.style.width="40px";
    el.style.border="2px solid black";
    el.innerText=Math.floor(Math.random()*100);
    document.body.appendChild(el);
}