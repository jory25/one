const payments=document.querySelectorAll("input[name='payment']");

const visa=document.getElementById("visaBox");

payments.forEach(payment=>{

payment.addEventListener("change",()=>{

if(payment.nextSibling.textContent.trim()=="Visa"){

visa.style.display="block";

}else{

visa.style.display="none";

}

});

});

document.querySelector(".btn").onclick=function(){

alert("✅ Your Order Has Been Placed Successfully!");

window.location.href="order-success.html";

}
