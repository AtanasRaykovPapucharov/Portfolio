'use strict'

/*
 * Environment parameters
 *
 */

const PASS = require('../DBPASS.json')

module.exports = {
    development: {
        db: `mongodb+srv://hapiherb-db-user:${PASS}@cluster0.ofj7e.mongodb.net/?retryWrites=true&w=majority`,
        collections: ['blog', 'item', 'user'],
        port: 9999,
        url: 'http://localhost:9999',
		transporterConnectionString: 'smtps://webdjsandpy@gmail.com:webdjs2017andPy@smtp.gmail.com'
    },
    production: {
        db: `mongodb+srv://hapiherb-db-user:${PASS}@cluster0.ofj7e.mongodb.net/?retryWrites=true&w=majority`,
        collections: ['blog', 'item', 'user'],
        port: process.env.PORT,
        url: '',
		transporterConnectionString: process.env.SMTP_INFO
    }
}