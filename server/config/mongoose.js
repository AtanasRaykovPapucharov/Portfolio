'use strict'

/*
 * Mongoose configuration
 *
 */

module.exports = (mongoose, mongo) => {
    let db

    try {
        mongoose.connect(mongo, {
            useNewUrlParser: true
        })

        db = mongoose.connection

        db.on('error', err => {
            throw new Error(err)
        })

        db.on('connected', () => {
            console.log('DB connected!')
        })

        db.on('disconnected', () => {
            console.log('DB disconnected!')
        })

        // For testing purposes
        return db

    } catch (error) {
        throw error
    } finally {
        // For testing purposes
        return 'Mongoose config error!'
    }
}