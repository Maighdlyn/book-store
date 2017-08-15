const router = require('express').Router()
const dbBooks = require('../../db/queries')

router.get('/', (req, res) => {
  dbBooks.getAllBooks()
    .then((books) => {
      console.log(books)
      res.render('home', {books})
    })
})

module.exports = router
