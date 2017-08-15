const db = require('./db')

const getAllBooks = () => {
  return db.query(`SELECT * FROM books`)
  .catch(error => {
    console.log("Error in getAllBooks in queries.js")
    throw error
  })
}

const getBook = (id) => {
  return db.one(`Select * from books WHERE id = $1`, [id])
  .catch(error => {
    console.log("Error in getBook in queries.js")
    throw error
  })
}

const search = (searchTerm) => {
  const variable = '%'+searchTerm.toLowerCase+'%'
  console.log(variable)
  return db.query(`
    SELECT * from books
    WHERE UPPER(author || title || genre) LIKE UPPER('%frea%')
  `)
}

const deleteBook = (id) => {
  return db.query(`DELETE FROM books WHERE id = $1`, [id])
  .catch(error => {
    console.log("Error in deleteBook in queries.js")
    throw error
  })
}


module.exports = {
  getAllBooks,
  deleteBook,
  getBook
}
