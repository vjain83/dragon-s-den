const seedBook = require('./books');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
  

    await seedBook();
    console.log('--------------');

    

    process.exit(0);
};

seedAll();
