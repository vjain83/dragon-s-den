const sequelize = require('../config/connection');
const { Reader, Book } = require('../models');

const readerdata = [
  {
    username: 'varsha',
    email: 'csvarshajain@gmail.com',
    password: 'test123'
  },
  {
    username: 'robert',
    email: 'rawc@me.com',
    password: 'test321'
  },
  {
    username: 'dan',
    email: 'daniel.rufus@gmail.com',
    password: 'password123'
  },
  {
    username: 'christian',
    email: 'christianes611@gmail.com',
    password: 'test1'
  },
  {
    username: 'test',
    email: 'test@test.com',
    password: 'test'
  }
];

const seedReader = () => Reader.bulkCreate(readerdata, {individualHooks: true});

module.exports = seedReader;
