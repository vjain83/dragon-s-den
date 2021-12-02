import express from "express";
import { create } from "express-handlebars";

var hbs = create({});

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.engine("handlebars", hbs.engine);

app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", function (req, res) {
  res.render("landing");
});

//This snipbit captures the input from the forms and logs them, ready to be sent to the server
app.post("/", function (req, res) {
  var body = req.body;
  console.log(body.fname);
  console.log(body.email);
  console.log(body.bcaffil);
  console.log(body.psw);
  //Place the code here to make make API call

  var name = { userName: body.fname };
  res.render("login", name);
});

//Function which takes you to the signup page. The first line is the command executed by the button called signup, which takes you to the rendering (view) of the signup page.
app.get("/signup", function (req, res) {
  res.render("signup");
});

//Function which takes you to the login page. The first line is the command executed by the button called login, which takes you to the rendering (view) of the login page.
app.get("/login", function (req, res) {
  var name = { userName: "stranger" };
  res.render("login", name);
});

//Function which takes you to the selection page. The first line is the command executed by the button called login, which takes you to the rendering (view) of the selection page.
app.post("/login", function (req, res) {
  var body = req.body;
  console.log(body.uname);
  res.render("selection");
});

//This snipbit of code operates the drop down menu of the selection page. If you choose Comment, it takes you to the comment page, if you choose research, it takes you to the research page.
app.post("/finalpage", function (req, res) {
  var body = req.body;

  let commentOrResearch = body.commentSelection;
  let authorOrTitle = body.authorSelection;
  let authorOrTitleText = body.authorTitleInput;

  if (commentOrResearch === "c") {
    console.log("Level my comment");
    res.render("comment");
  } else {
    if (authorOrTitle === "a") {
      // API call get books here, below it example response

      var books = [
        {
          title: "The Hobbit",
          isbn: "12345",
          author: "J.K. Rowlings",
          gene: "Fiction",
          edition: "Frist Edition",
        },
        {
          title: "The Hobbit",
          isbn: "12345",
          author: "J.K. Rowlings",
          gene: "Fiction",
          edition: "Frist Edition",
        },
        {
          title: "The Hobbit",
          isbn: "12345",
          author: "J.K. Rowlings",
          gene: "Fiction",
          edition: "Frist Edition",
        },
        {
          title: "The Hobbit",
          isbn: "12345",
          author: "J.K. Rowlings",
          gene: "Fiction",
          edition: "Frist Edition",
        },
        {
          title: "The Hobbit",
          isbn: "12345",
          author: "J.K. Rowlings",
          gene: "Fiction",
          edition: "Frist Edition",
        },
      ];
      console.log("Search book for author: " + authorOrTitleText);
      res.render("research", { books: books });
    } else {
      console.log("View comment for title: " + authorOrTitleText);
      res.render("viewComment");
    }
  }
});

app.post("/viewOthers", function (req, res) {
  var body = req.body;
  console.log("View comment for book: " + body.authorBooks);
  res.render("viewComment");
});

app.listen(port, () => {
  console.log(`HTTP Server running at http://localhost:${port}`);
});
