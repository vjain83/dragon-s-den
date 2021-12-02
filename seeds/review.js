const { review } = require('../models');

const reviewdata = [
  {
    review_text: 'Test - text for review 1',
    reader_id: 10,
    book_id: 01
  },
  {
    review_text: 'Test - text for review 1',
    reader_id: 11,
    book_id: 02
  },
  {
    review_text: 'Test - text for review 1',
    reader_id: 12,
    book_id: 
  },
  {
    review_text: 'Test - text for review 1',
    reader_id: 13,
    book_id: 03
  },
];

const seedreview = () => Comment.bulkCreate(reviewdata);

module.exports = seedreview;