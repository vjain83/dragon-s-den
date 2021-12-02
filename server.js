const express = require("express");
const cors = require("cors");

// connection with the routes folder
const routes = require("./routes");
// connection with sequelize
const sequelize = require("./config/connection");

const app = express();
//port connection
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log("Now Listening, Welcome to the Dragon's Den")
  );
});
