const {User} = require('../models')
const {decryptPassword} = require('../helper/bcrypt')
const {generateToken} =require('../helper/jwt')

class UserController {
    static signup(req, res) {
        const {email, password} = req.body
        let payload = {
            email,
            password
        }
        User.create(payload)
            .then(result => {
                let user = {
                    id: result.id,
                    email: result.email
                }
                let token = generateToken(user)
                res.status(201).json({
                    id: user.id,
                    email: user.email,
                    access_token: token
                })
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
    static signin(req, res) {
        const {email, password} = req.body
        let payload = {
            email,
            password
        }
        User.findOne({
            where: {
                email: payload.email
            }
        })
            .then(result => {
                if(result) {
                    let compare = decryptPassword(payload.password,result.password)
                    if(compare) {
                        let user = {
                            id: result.id,
                            email: result.email
                        }
                        let token = generateToken(user)
                        res.status(200).json({
                            id: user.id,
                            email: user.email,
                            access_token: token
                        })
                    } else {
                        res.status(400).json({
                            type:'Bad Request',
                            msg:'Invalid email/password'
                        })
                    }
                } else {
                    res.status(400).json({
                        type:'Bad Request',
                        msg:'Invalid email/password'
                    })
                }
            })
    }
}

module.exports = UserController