const Sequelize = require("sequelize");

require("dotenv").config();

// connect to the server by using username and password
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PW,
  {
    host: "localhost",
    dialect: "sqlite",
    storage: "./database.sqlite",
    port: 3306,
  }
);

module.exports = sequelize;
