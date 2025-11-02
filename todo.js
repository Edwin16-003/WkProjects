//create an array that holds random qoutes 
const randQoutes =[
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "Do something today that your future self will thank you for.",
  "Push yourself, because no one else is going to do it for you.",
  "Don’t stop until you’re proud.",
  "It always seems impossible until it’s done. – Nelson Mandela",
  "Dream big and dare to fail. – Norman Vaughan",
  "The secret of getting ahead is getting started. – Mark Twain",
  "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
  "Work hard in silence, let success make the noise.",
  "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
  "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
  "You don’t find willpower, you create it.",
  "Little things make big days.",
  "Don’t wish for it. Work for it.",
  "Success is not for the lazy.",
  "Don’t be afraid to give up the good to go for the great. – John D. Rockefeller",
  "Hustle until your haters ask if you’re hiring."
];
//create a function that generates random qoutes
function qouteGenerator(array){
  //loop over an array
  for(let i=0;i<array.length;i++){
   document.getElementById("qoute-text").innerHTML = array[i];
}
}