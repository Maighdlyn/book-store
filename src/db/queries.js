const db = require('./db')

const getAllBooks = () => {
  return db.query(`SELECT * FROM books`)
  .catch(error => {
    console.log("Error in getAllBooks in queries.js")
    throw error
  })
}

const deleteBook = (id) => {
  return db.query(`
    DELETE FROM books
    WHERE id = $1
    `, [id])
}


module.exports = {
  getAllBooks
}
