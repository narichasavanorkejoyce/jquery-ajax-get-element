'use strict'

const onSuccess = function (data) {
  // if we have only one book, then it will display that book in the console
  // data.book is the result of the AJAX call
  // testing for the existence of data.book
  // true if we've requested only one book
  if (data.book) {
    console.log(data.book)
  // else, it will display all of the books
  } else {
    console.table(data.books)
  }
}

const onError = function (response) {
  console.error(response)
}

module.exports = {
  onSuccess,
  onError
}
