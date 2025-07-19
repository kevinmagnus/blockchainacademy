

function changeBackGroundColorToWhite() {

    const body = document.body;

    body.style.backgroundColor = "white";

}


 function changeBackGroundColorToBlack() {

    const body = document.body;

    body.style.backgroundColor = "black";

}

const head = document.body.getElementById("time1");


const current_time = new Date();

if (current_time.getUTCHours() >= 1 && current_time.getUTCHours() < 12) {


head.innerHTML = "Good morning!";


}else if(current_time.getUTCHours() >= 12 && current_time.getUTCHours() < 16){

 head.innerHTML = "Good afternoon!";

}else{

   head.innerHTML = "Good evening!"; 
}

