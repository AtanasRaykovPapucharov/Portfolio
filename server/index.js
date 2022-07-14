const environment = process.env.NODE_ENV || 'development'

const express = require('express')
const app = express()

// App Constants
const params = require('./config')[environment]

// HTTP Server
const http = require('http')
const server = http.createServer(app)

// Database
const mongoose = require('mongoose')
const mongoConnection = params.db
const collections = params.collections
const dbRequester = require('./services/db-requester')

// Express configuration
require('./config/express')(app)

// Mongoose configuration
require('./config/mongoose')(mongoose, mongoConnection)

// Main data object
const db = {}

collections.forEach(element => {
	const modelPath = `./models/${element}-model`
	const model = require(modelPath).init(mongoose)

	db[element] = require('./services/data')(model, dbRequester)
	db[`${element}Model`] = model
})

// Main controller object
const controller = {}

collections.forEach(element => {
	controller[element] = require('./services/controller')(db[element], db[`${element}Model`], params)
})

// Routing
require('./services/router')(app, controller, collections, params)

// Server listener
server.listen(params.port, () => {
	console.log(`Server is listening on ${params.url}`)
})