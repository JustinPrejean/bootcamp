require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const chalk = require('chalk')
const logger = require('morgan')

app.use(cors(),
    bodyParser.urlencoded({ extended: false }),
    bodyParser.json(),
    logger('dev')
)

let port = process.env.PORT || 3000;

const mongoUrl = 'mongodb://localHost:27017/formdata'

mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log(`Connected to ${mongoUrl} database.`))
  .catch(err => console.log(`Issue connecting to ${url} database: `, err))

let formSchema = mongoose.Schema({
    fname : {
        type: String,
        required: [true, "Must have a first name."]
    },
    lname : {
        type: String,
        required: [true, "Must have a last name."]
    },
    email: {
        type: String,
        required: [true, "Must have an email."]
    },
    phone: String,
    message: {
        type: String,
        default: "No message submitted"
    }
})

let FormModel = mongoose.model('Form', formSchema)

app.listen(port, console.log(`App listening on port ${port}`))

app.get('/', (req, res)=>{
    res.send('This worked!!!')
})

app.post('/new', (req, res)=>{
    req.body.message = req.body.message ? 
                        req.body.message 
                        : undefined;
    FormModel.create(
        { ...req.body},
        (err, result) => {
            err ?
                console.log('Error: ', chalk.yellow(err.message), ()=>{
                    res.status(400).json(err)
                })
                :res.status(201).json(result);
        }
    )
})


