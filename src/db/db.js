const pgp = require('pg-promise')()
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/book_store'
// console.log(process.env)
const db = pgp(connectionString)

module.exports = db
