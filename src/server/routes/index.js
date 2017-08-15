const router = require('express').Router()
const dbBooks = require('../../db/queries')

router.get('/', (req, res) => {
  dbBooks.getAllBooks()
    .then((books) => {
      res.render('home', {books})
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
