const express = require('express')
const app = express()
const router = require('./server/routes')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static('public'))
app.use('/', router)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Express server running on port ${port}.`)
})
