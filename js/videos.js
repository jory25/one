const vedios=[

"vedios/2.mp4",

"vedios/3.mp4",

"vedios/1.mp4",

];

let random=Math.floor(Math.random()*vedios.length);

document.getElementById("videoSource").src=vedios[random];

document.getElementById("kidsVideo").load();
