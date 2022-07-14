'use strict'

/*
 * Abstract Mongoose DB service object
 *
 */

module.exports = {
    getAll: (collection, props) => {
        props = props || {}
        return new Promise((resolve, reject) => {
            try {
                collection.find(props, (err, data) => {
                    if (err) {
                        reject(err)
                    }
                    resolve(data)
                })
            } catch (error) {
                throw new Error('DB Requester "find" error: ' + error)
            }
        })
    },
    getById: (collection, id) => {
        return new Promise((resolve, reject) => {
            try {
                collection.findOne({
                    _id: id
                }, (err, data) => {
                    if (err) {
                        reject(err)
                    }
                    resolve(data)
                })
            } catch (error) {
                throw new Error('DB Requester "findOne" error: ' + error)
            }
        })
    },
    getByProp: (collection, prop) => {
        return new Promise((resolve, reject) => {
            try {
                collection.findOne(prop, (err, data) => {
                    if (err) {
                        reject(err)
                    }
                    resolve(data)
                })
            } catch (error) {
                throw new Error('DB Requester "findOne" error: ' + error)
            }
        })
    },
    post: (collection, newObject) => {
        return new Promise((resolve, reject) => {
            try {
                collection.create(newObject, (err, data) => {
                    if (err) {
                        reject(err)
                    }
                    resolve(data)
                })
            } catch (error) {
                throw new Error('DB Requester "create" error: ' + error)
            }
        })
    },
    update: (collection, id, updateObject) => {
        return new Promise((resolve, reject) => {
            try {
                collection.findOneAndUpdate({
                    _id: id
                }, updateObject, {
                        multi: false
                    }, (err, data) => {
                        if (err) {
                            reject(err)
                        }
                        resolve(data)
                    })
            } catch (error) {
                throw new Error('DB Requester "findOneAndUpdate" error: ' + error)
            }
        })
    },
    delete: (collection, id) => {
        return new Promise((resolve, reject) => {
            try {
                collection.findOneAndDelete({
                    _id: id
                }, (err, data) => {
                    if (err) {
                        reject(err)
                    }
                    resolve(data)
                })
            } catch (error) {
                throw new Error('DB Requester "findOneAndDelete" error: ' + error)
            }
        })
    }
}