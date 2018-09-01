const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const ctrl = require('./controller')
const massive = require('massive')
const connectionString = process.env.db_CONNECTION_STRING //postgres:gxgjdvrvepugwu:ef8dfcf19d26affe09e5171f3aa1f7d0e4a079195b22cc394150351a88ffe81c@ec2-174-129-225-9.compute-1.amazonaws.com:5432/d3f7s33g3508q7?ssl=true


require('dotenv').config()


const app = express()
app.use(bodyParser.json())

const PORT = 3333

app.listen(PORT, () => console.log(`Mr Smith lives on port ${PORT}`))