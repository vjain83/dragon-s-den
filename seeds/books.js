const { Book } = require('../models');
const bookdata = [
    {
        title: 'A Tale of two Cities',
        author: 'Charles Dickens',
        isbn: '95855555',
        edition: 1998,
        genre: 'Historical Fiction',
    },
    {
        title: 'The Hobbit',
        author: 'J.R.R.Tolkien',
        isbn: '754646545454',
        edition: 2013,
        genre: 'Novel, High fantasy, Fantasy Fiction, Epic',
    },
    {
        title: 'Will',
        author: 'Will Smith',
        isbn: '1444444',
        edition: 2021,
        genre: 'Biography & Memoirs',
    },
    {
        title: 'The Judges List: A Novel',
        author: 'John Grisham',
        isbn: '0385546025',
        edition: 2021,
        genre: 'Fiction, Thrillers, Suspense',
    },
    {
        title: 'The Lion, the Witch and the Wardrobe',
        author: 'C. S. Lewis',
        isbn: '9780064471046',
        edition: 2002,
        genre: 'Childrens fantasy, Christian literature',
    },
    {
        title: 'The Catcher in the Rye',
        author: 'J. D. Salinger',
        isbn: '7543321726',
        edition: 1995,
        genre: 'Realistic fiction, Coming-of-age fiction',
    },
    {
        title: 'Harry Potter and the Goblet of Fire',
        author: 'J.K. Rowling',
        isbn: '1408855682',
        edition: 2014,
        genre: 'Adventure fiction, Gothic fiction, Fantasy Fiction, Romance novel',
    },
    {
        title: 'Black Beauty',
        author: 'Anna Sewell',
        isbn: '1490523464',
        edition: 2013,
        genre: 'Fiction',
    },
    {
        title: 'The Ginger Man',
        author: 'J.P.Donleavy ',
        isbn: '9780802198167',
        edition: 2010,
        genre: 'Novel',
    },
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        isbn: '0446310786',
        edition: 1995,
        genre: 'Novel, Southern Gothic, Thriller, Domestic Fiction, Legal Story',
    },
    {
        title: 'Angels & Demons',
        author: 'Dan Brown',
        isbn: '074349346X',
        edition: 2006,
        genre: 'Mystery-thriller',
    },
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        isbn: '0446310786',
        edition: 1995,
        genre: 'Novel, Southern Gothic, Thriller, Domestic Fiction, Legal Story',
    },
    {
        title: 'Angels & Demons',
        author: 'Dan Brown',
        isbn: '074349346X',
        edition: 2006,
        genre: 'Mystery-thriller',
    },

];

const seedBook = () => Book.bulkCreate(bookdata);

module.exports = seedBook;

