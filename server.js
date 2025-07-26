import express from "express";
import path from "path";
import ejs from "ejs";
import bodyParser from "body-parser";




const _dirname = path.resolve();
const app = express();




const port = process.env.PORT || 3800;


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(_dirname, "public")));
app.set("view engine", "ejs");


app.get("/" , (req, res) => {

/* filePath is the file path to the home page file to render.*/

    const filePath = path.join(_dirname, "public", "Home-Page.html");

    res.sendFile(filePath);


});



app.get("/create-account", (req, res) => {

   const filePath = path.join(_dirname, "public", "create-account.html");

    res.sendFile(filePath);

});



app.post("/create-account", (req,res) => {



const { first_name, last_name, email, dateOfBirth, password } = req.body;



const err = document.getElementById("error");

if(password.length < 8) {


err.innerHTML = "Your password is too weak. Please use a password at least 8 characters long.";

err.style.color = "red";



}else{

res.render("dashboard", { user_name: first_name } );

}


} );



app.get("/log-in", (req, res) => {

const filePath = path.join(_dirname, "public", "log-in.html");

res.sendFile(filePath);

});


app.post("/log-in", (req, res) => {

    const { user_name } = req.body;

    res.render("dashboard", { user_name: user_name});


});


app.get("/dashboard", (req, res) => {

const { first_name, email, password } = req.body;




});








app.listen(port, "0.0.0.0",() => {

    console.log(`Server is running on port ${port}.`);


});










