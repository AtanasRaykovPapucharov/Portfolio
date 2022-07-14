'use strict'

/*
 * Message HTTP controller
 *
 */
const jwt = require('jsonwebtoken')
const crypto = require('./crypt')
const isAuth = require('./auth').isAuth

module.exports = (collection, Model, params) => {
  return {
    login: (req, resp) => {
      if(!isAuth(req)) {
        resp.status(401).json({error: "Unauthorized request!"})
      } else {
        let data = req.body

        if(data.email && data.password) {
          try {
            return collection.getAll({ email: data.email })
              .then(user => {
                if(user.length > 0) {
                  user = user[0]

                  const decrypted = crypto.decrypt(user.cryptPassword, user.privateKey)
                  const passwordsAreEquals = crypto.generateHashedPassword(data.password, user.privateKey) === decrypted

                  if(passwordsAreEquals) {
                    user.cryptPassword = ""
                    user.privateKey = ""

                    return resp.status(200).cookie('user-access-token', {user}).json(user)
                  } else {
                    return resp.status(400).json({error: 'Password not found!' })
                  }

                } else {
                  return resp.status(400).json({error: 'User email not found!' })
                }
              })
              .catch(err => {
                return resp.status(400).json(err)
              })
          } catch (err) {
            resp.status(500).json(err)
            throw new Error('Controller "User login" error: ' + err)
          }
        }
      }
    },
    post: (req, resp) => {
      if(!isAuth(req)) {
          resp.status(401).json({error: "Unauthorized request!"})
      } else {
        let data = req.body

        // User registration
        if(data.username && data.email && data.password) {
          try {
            return collection.getAll({email: data.email })
              .then(user => {
                if(user.length > 0) {
                  resp.status(400).json({error: "User already exists!"})
                } else {
                  const salt = crypto.generateSalt()
                  const hashedPassword = crypto.generateHashedPassword(data.password, salt)

                  data.privateKey = salt
                  data.cryptPassword = crypto.encrypt(hashedPassword, salt)
                  data.token = jwt.sign({ username: data.email}, data.cryptPassword)
          
                  let newModel = new Model(data)
                  try {
                    return collection.post(newModel)
                      .then(data => {
                        data.cryptPassword = ""
                        data.privateKey = ""
                        
                        return resp
                                .status(200)
                                .cookie('user-access-token', JSON.stringify({ user: data }))
                                .json(data)
                      })
                      .catch(err => {
                        return resp.status(500).json(err)
                      })
                  } catch (err) {
                    resp.status(500).json(err)
                    throw new Error('Controller "post" error: ' + err)
                  }
                }
              })
              .catch(err => {
                return resp.status(500).json(err)
              })
          } catch (err) {
            resp.status(500)
            throw new Error('Controller "post" error: ' + err)
          }
        }
  
        let newModel = new Model(data)
        try {
          return collection.post(newModel)
            .then(data => {
              return resp.status(200).json(data)
            })
            .catch(err => {
              return resp.status(400)
            })
        } catch (error) {
          resp.status(400)
          throw new Error('Controller "post" error: ' + error)
        }
      }
    },
    getAll: (req, resp) => {
      if(!isAuth(req)) {
        resp.status(401).json({error: "Unauthorized request!"})
      } else {
        if (!(req.query.pretty == '')) {
          try {
            return collection.getAll(req.query)
              .then(data => {
                return resp.status(200).json(data)
              })
              .catch(err => {
                return resp.status(400)
              })
          } catch (error) {
            throw new Error('Controller "getAll" error: ' + error)
          }
        } else {
          try {
            return collection.getAll()
              .then(data => {
                return resp.status(200).json(data)
              })
              .catch(err => {
                return resp.status(400)
              })
          } catch (error) {
            resp.status(400)
            throw new Error('Controller "getAll" error: ' + error)
          }
        }
      }
    },
    getById: (req, resp) => {
      if(!isAuth(req)) {
        resp.status(401).json({error: "Unauthorized request!"})
      } else {
        try {
          return collection.getById(req.params.id)
            .then(data => {
              return resp.status(200).json(data)
            })
            .catch(err => {
              return resp.status(400)
            })
        } catch (error) {
          resp.status(400)
          throw new Error('Controller "getById" error: ' + error)
        }
      }
    },
    delete: (req, resp) => {
      if(!isAuth(req)) {
        resp.status(401).json({error: "Unauthorized request!"})
      } else {
        try {
          return collection.delete(req.params.id)
            .then(data => {
              return resp.status(200).json(data)
            })
            .catch(err => {
              return resp.status(400)
            })
        } catch (error) {
          resp.status(400)
          throw new Error('Controller "delete" error: ' + error)
        }
      }
    },
    update: (req, resp) => {
      if(!isAuth(req)) {
        resp.status(401).json({error: "Unauthorized request!"})
      } else {
        const id = req.params.id
        const updateObj = req.body.updateObj
  
        try {
          return collection.update(id, updateObj)
            .then(data => {
              return resp.status(200).json(data)
            })
            .catch(err => {
              return resp.status(400)
            })
        } catch (error) {
          resp.status(400)
          throw new Error('Controller "update" error: ' + error)
        }
      }
    }
  }
}