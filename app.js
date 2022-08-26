const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render(`index`)
})

app.post('/', (req, res) => {
  console.log('get form POST request')
  res.render('index')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})