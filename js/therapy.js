const emojis=document.querySelectorAll(".emoji");

const result=document.getElementById("moodResult");

emojis.forEach(item=>{

item.onclick=()=>{

if(item.innerHTML=="😁")

result.innerHTML="Amazing! Keep smiling 😊";

if(item.innerHTML=="😊")

result.innerHTML="Have a wonderful day 💚";

if(item.innerHTML=="😐")

result.innerHTML="Take a short break 🌿";

if(item.innerHTML=="😔")

result.innerHTML="Everything gets better ❤️";

if(item.innerHTML=="😡")

result.innerHTML="Take a deep breath 🧘";

}

});

const quotes=[

"Believe in yourself.",

"Every healthy meal is a step forward.",

"Small habits create big changes.",

"Your body deserves the best.",

"Take care of your mind first.",

"You are stronger than you think."

];

function newQuote(){

let random=Math.floor(Math.random()*quotes.length);

document.getElementById("quoteText").innerHTML=quotes[random];

}
