function getTime() {

        const time = document.getElementById("head-1");
time.innerHTML = Date();

setTimeout(getTime, 1000);


}

getTime();


function greet() {

    const greeting_heading = document.getElementById("greeting-heading");

    const current_time = new Date().getHours();
;
if( (current_time >= 0) & (current_time < 12) ) {


    greeting_heading.innerHTML = "Good morning! Welcome to our website.";

}else if( (current_time >= 12) & (current_time <= 16) ) {

   
   greeting_heading.innerHTML = "Good afternoon! Welcome to our website."; 


}else{

    greeting_heading.innerHTML = "Good evening! Welcome to our website.";

}


}

greet();




const website_creation_date = new Date("2025-07-20");


function calculate_date_created() {




    const today = new Date();

    const diffTime = Math.abs(today-website_creation_date);

    const diffDays = Math.floor(diffTime/ (1000*60*60*24) );

    return diffDays;




}




function show_website_creation_days() {


    const date_show = document.getElementById("intro");

    const days = calculate_date_created();

    date_show.innerHTML = "Chigemezu Emmanuel wrote the computer code that powers this website "+ days +" days ago.";




}

setTimeout( show_website_creation_days() , 1000);