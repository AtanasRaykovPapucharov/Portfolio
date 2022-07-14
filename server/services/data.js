'use strict'

/*
 * Message data service
 *
 */

module.exports = (collection, requester) => {
    return {
        getAll: (props) => {
            try {
                return requester.getAll(collection, props)
            } catch (error) {
                throw new Error('Message date "geAll" error: ' + error)
            }
        },
        getById: (id) => {
            try {
                return requester.getById(collection, id)
            } catch (error) {
                throw new Error('Message date "geById" error: ' + error)
            }
        },
        post: (newMsg) => {
            try {
                return requester.post(collection, newMsg)
            } catch (error) {
                throw new Error('Message date "post" error: ' + error)
            }
        },
        delete: (id) => {
            try {
                return requester.delete(collection, id)
            } catch (error) {
                throw new Error('Message date "delete" error: ' + error)
            }
        },
        update: (id, updateMsg) => {
            try {
                return requester.update(collection, id, updateMsg)
            } catch (error) {
                throw new Error('Message date "update" error: ' + error)
            }
        }
    }
}