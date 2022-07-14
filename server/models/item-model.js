'use strict'

/*
 * Item mongoose model
 *
 */

module.exports.init = mongoose => {
    try {
        const Schema = mongoose.Schema

        const item = new Schema({
            genre: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            author: {
                type: String,
                required: true
            },
            content: {
                type: String,
                required: true
            },
            section: {
                type: String,
                required: false
            },
            subsection: {
                type: String,
                required: false
            },
            year: {
                type: Number,
                required: false
            },
            image: {
                type: String,
                required: false
            },
            path: {
                type: String,
                required: false
            },
            tags: [String],
            date: {
                type: Object,
                default: new Date()
            }
        })

        const Item = mongoose.model('Item', item)

        return Item
    } catch (error) {
        throw new Error('Item model error: ' + error)
    }
}