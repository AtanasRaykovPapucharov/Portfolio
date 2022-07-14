'use strict'

/*
 * Express Middleware configuration
 *
 */

// Build-in Dependencies
const path = require('path')
const fs = require('fs')

// Outer Dependencies
const pretty = require('express-prettify')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

module.exports = app => {
    try {
        app.set('view engine', 'pug');
        app.set('views', path.join(__dirname, '../views'));

        // Pretty JSON Middleware
        app.use(pretty({
            query: 'pretty'
        }))

        // Write Stream to access.log file
        const logsFile = path.join(__dirname, '../api-access.log')
        const accessLogStream = fs.createWriteStream(logsFile, {
            flags: 'a'
        })

        // Access Logger Middleware
        app.use(morgan('combined', {
            stream: accessLogStream
        }))

        // Security Middleware
        app.use(helmet())

        // Cross-Origin Resource Sharing Middleware
        app.use(cors())

        // Parsers Middleware
        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({
            extended: false
        }))
	    app.use(cookieParser())

        return app
    } catch (error) {
        throw error
    } finally {
        // For testing purposes
        return 'Express config error!'
    }
}