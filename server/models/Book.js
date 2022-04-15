const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const bookSchema = new Schema({
  authors: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
    trim: true
  },
  // saved book id from GoogleBooks
  bookId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    trim: true
  },
  link: {
    type: String,
    trim: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
},
{
  toJSON: {
    getters: true
  }
});

module.exports = bookSchema;
