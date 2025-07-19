

function changeBackGroundColorToWhite() {

    const body = document.body;

    body.style.backgroundColor = "white";

}


 function changeBackGroundColorToBlack() {

    const body = document.body;

    body.style.backgroundColor = "black";

}


time_Element = document.getElementById("time");

const current_time = new Date();

if (current_time.getUTCHours() >= 1 && current_time.getUTCHours() <= 11) {


time_Element.innerHTML = "Good morning!";


}else{

    time_Element.innerHTML = "This is not morning.";
}

document.body.style.backgroundImage = "url('c:\Users\KEVIN MAGNUS\Downloads\IMG-20250715-WA0012.jpg')";
document.body.style.backgroundSize = "cover";