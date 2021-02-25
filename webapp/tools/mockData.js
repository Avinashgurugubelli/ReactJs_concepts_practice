const courses = require('./mock-data/courses.json');
const authors = require('./mock-data/authors.json');

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  courses,
  authors
};
