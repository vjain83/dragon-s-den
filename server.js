
const express = require('express');
// connection with the routes folder
const routes = require('./routes');
// connection with sequelize
const sequelize = require('./config/connection');
const router = require('./routes');


const app = express();
//port connection
const PORT = process.env.PORT || 3001;

//middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Now Listening, Welcome to the Dragon's Den"));
});