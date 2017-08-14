const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set('views', __dirname + '/src/views')

app.get('/', (req, res) => {
  res.render('home')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Express server running on port ${port}.`)
})
