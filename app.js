const express = require('express')
const exphbs = require('express-handlebars')
const generatePassword = require('./generate_password')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render(`index`)
})

app.post('/', (req, res) => {
  const options = req.body
  res.render('index', { password: generatePassword(options), options: options })
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})