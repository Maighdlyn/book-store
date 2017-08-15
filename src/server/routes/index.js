const router = require('express').Router()
const dbBooks = require('../../db/queries')

router.get('/', (req, res) => {
  dbBooks.getAllBooks()
    .then((books) => {
      res.render('home', {books})
    })
    .catch((error) => {
      console.log("Error in index.js, router.get('/')")
      throw error
    })
  })

router.get('/book/:bookId', (req, res) => {
  const bookId = req.params.bookId
  dbBooks.getBook(bookId)
  .then((book) => {
    console.log("I'm a book", book)
    res.render('book', {book})
  })
  .catch((error) => {
    console.log("Error in index.js, router.get('/book/:bookId')")
    throw error
  })
})



router.get('/delete/:bookId', (req, res) => {
  const bookId = req.params.bookId
  dbBooks.deleteBook(bookId)
    .then(res.redirect('/'))
    .catch((error) => {
      console.log("Error in index.js, router.get('/delete/:bookId')")
      throw error
    })
})

module.exports = router
