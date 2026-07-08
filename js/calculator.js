function calculateCalories(){

let weight=document.getElementById("weight").value;

let height=document.getElementById("height").value;

let age=document.getElementById("age").value;

let gender=document.getElementById("gender").value;

let bmr;

if(gender==="male"){

bmr=(10*weight)+(6.25*height)-(5*age)+5;

}

else{

bmr=(10*weight)+(6.25*height)-(5*age)-161;

}

document.getElementById("result").innerHTML=

`
🔥 Daily Calories

<br><br>

<b>${Math.round(bmr)} kcal</b>

`;

}
