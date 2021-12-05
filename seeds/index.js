const Book = require(‘./book);
const Reader = require(‘./reader’);
const Review = require(‘./review’);
const sequelize = require(‘.../config/connection’);

const seedAll = async () => {
 await sequelize.sync({ force: true });
 console.log(sync);
 await seedBook();
 console.log(reader);
 await seedReader();
 console.log(reader);
 await seedreview();
 console.log(review);
 process.exit(0);
};
seedAll();