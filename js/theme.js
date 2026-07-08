const toggle=document.getElementById("themeToggle");

if(localStorage.getItem("theme")=="dark"){
    document.body.classList.add("dark");
    toggle.innerHTML='<i class="fa-solid fa-sun"></i>';
}

toggle.onclick=function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        toggle.innerHTML='<i class="fa-solid fa-sun"></i>';

    }else{

        localStorage.setItem("theme","light");

        toggle.innerHTML='<i class="fa-solid fa-moon"></i>';

    }

}
