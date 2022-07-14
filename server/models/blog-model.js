'use strict'

/*
 * Item mongoose model
 *
 */

module.exports.init = mongoose => {
    try {
        const Schema = mongoose.Schema

        const blog = new Schema({
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
            image: {
                type: String,
                required: false
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

        const Blog = mongoose.model('Blog', blog)

        return Blog
    } catch (error) {
        throw new Error('Blog model error: ' + error)
    }
}