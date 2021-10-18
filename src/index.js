var path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const methodOverride = require('method-override')
const { query } = require('express')
const app = express()
const port = 3000

const route = require('./routes')
const db = require('./config/db')

//connect DB
db.connect()

//add middleware
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())
//HTTP logger
app.use(morgan('combined'))

//add img
app.use(express.static(path.join(__dirname, 'public')))

//PUT HTML
app.use(methodOverride('_method'))

//Template egine
app.engine('hbs', 
  handlebars({
    extname: '.hbs',
    helpers:{
      sum: (a , b) => a + b,
    }
}));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

//route init
route(app)

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})