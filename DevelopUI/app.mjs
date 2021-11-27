import express from "express";
import { engine } from "express-handlebars";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", function(req, res) {
    res.render("landing");
});

app.post("/", function(req, res) {
    var body = req.body;
    console.log(body.fname);
    console.log(body.email);
    console.log(body.bcaffil);
    console.log(body.psw);
    //Place the code here to make make API call

    var name = { userName: body.fname }
    res.render("login", name);
});

app.get("/signup", function(req, res) {
    res.render("signup");
});

app.get("/login", function(req, res) {
    var name = { userName: "stranger" }
    res.render("login", name);
});

app.listen(port, () => {
    console.log(`HTTP Server running at http://localhost:${port}`);
});