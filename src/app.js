const exp = require("constants");
const express = require("express");
const async = require("hbs/lib/async");
const path = require("path");
const app = express();
const hbs = require("hbs");

require("./db/conn");
const Register = require("./models/registers");

const port = process.env.PORT || 3000;

// console.log(__dirname);
const static_path = path.join(__dirname, "../public");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));       //check static_path...if html file present then it will be served...if not then check below
app.set("view engine", "hbs");


app.get('/', (req, res)=>{
    res.render("index");
});
app.get('/Register', (req, res)=>{
    res.render("register");
});
app.get('/login', (req, res)=>{
    res.render("login");
});

// creating a new user in our database
app.post("/register", async(req,res) => {
    try {
        
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;
        if(password === cpassword){
            const registerUser = new Register({
                name: req.body.name,
                email:req.body.email,
                phone: req.body.phone,
                gender: req.body.gender,
                password: password,
                confirmpassword: cpassword
            })

            const registered = await registerUser.save();
            res.status(201).render("index");

        }else{
            res.send("password are not matching..try again");
        }


    } catch (error) {
        res.status(400).send(error);
    }
})


// login validation
app.post("/login", async(req,res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        // console.log(`email is ${email}, password is ${password}`);    //print in terminal

        const useremail = await Register.findOne({email:email});     //comparing emails in Register collection

        if(useremail.password === password){
            res.status(201).render("index");
        }else{
            res.send("Invalid login details");
        }

    } catch (error) {
        res.status(400).send("invalid login details")
    }
})



// LISTEN/START THE SERVER
app.listen(port, ()=>{
    console.log(`The server started successfully on port ${port}`);
});

