let quantity = 1;

const mealPrice = 150;
const delivery = 40;
const discount = 20;

const qty = document.getElementById("qty");

const total = document.getElementById("totalPrice");

document.getElementById("plus").onclick=function(){

quantity++;

updatePrice();

}

document.getElementById("minus").onclick=function(){

if(quantity>1){

quantity--;

updatePrice();

}

}

function updatePrice(){

qty.innerHTML=quantity;

document.getElementById("mealPrice").innerHTML=(mealPrice*quantity)+" EGP";

let finalPrice=(mealPrice*quantity)+delivery-discount;

total.innerHTML=finalPrice+" EGP";

}
