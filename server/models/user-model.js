'use strict'

/*
 * User mongoose model
 *
 */

module.exports.init = mongoose => {
    try {
        const Schema = mongoose.Schema

        const user = new Schema({
            username: {
                type: String,
                required: true
            },
            imageUrl: {
                type: String,
                default: ''
            },
            email: {
                type: String,
                required: true
            },
            cryptPassword: {
                type: String,
                required: true
            },
            token: {
                type: String,
                required: true
            },
            privateKey: {
                type: String,
                required: true
            },
            date: {
                type: Object,
                default: new Date()
            }
        })

        const User = mongoose.model('User', user)

        return User
    } catch (error) {
        throw new Error('User model error: ' + error)
    }
}