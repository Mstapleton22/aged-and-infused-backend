const express = require('express')
const app = express()
// const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const knex = require('knex')(config)

const bodyParser = require('body-parser')
app.use(bodyParser.json())
const cors = require('cors')
app.use(cors())

app.get('/preset', (req, res, next) => {
  knex('preset')
    .then((rows) => {
      res.send(rows)
    })
    .catch((err) => {
      next(err)
    })
})

app.get('/ingredientcategory', (req, res, next) => {
  knex('ingredient_category')
    .then((rows) => {
      res.send(rows)
    })
    .catch((err) => {
      next(err)
    })
})

app.get('/liquor', (req, res, next) => {
  knex('liquor')
    .then((rows) => {
      res.send(rows)
    })
    .catch((err) => {
      next(err)
    })
})

app.get('/ingredients', (req, res, next) => {
  knex('ingredients')
    .then((rows) => {
      res.send(rows)
    })
    .catch((err) => {
      next(err)
    })
})

app.get('/ingredients/:image', (req, res, next) => {
  knex('ingredients')
    .then((rows) => {
      res.send(rows)
    })
    .catch((err) => {
      next(err)
    })
})

app.get('/category_and_ingredient', (req, res, next) => {
  knex('category_and_ingredient')
    .then((rows) => {
      res.send(rows)
    })
    .catch((err) => {
      next(err)
    })
})
app.use(function (req, res, next) {
  res.status(200).send("It works, it's just not getting you what you need")
})

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})


app.listen(port, () => console.log(`App listening on port ${port}!`))