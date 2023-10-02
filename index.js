const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')
const app = express()
const port = 8000

const payersController = require('./controllers/payer')

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', payersController.index)
app.post('/add', payersController.add)
app.post('/spend', payersController.spend)
app.get('/balance', payersController.balance)

app.listen(port, () => {
    db.connect()
    console.log(`Example app listening on port ${port}!`)
})