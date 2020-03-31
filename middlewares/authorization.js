const {Todo} = require('../models')

function authorization(req, res, next) {
    Todo.findOne({
        where: {
            UserId: req.currentUserId
        }
    })
        .then(result => {
            if(result) {
                if(result.UserId == req.currentUserId){
                    return next()
                } else {
                    return res.status(401).json({
                        name:'Unauthorized',
                        errors:'Unauthorized'
                    })
                }
            } else {
                return res.status(404).json({
                    name:'NotFound',
                    errors:'User Not Found'
                })
            }
        })
        .catch(err => {
            return res.status(500).json({
                name: 'InternalServerError',
                errors: err
            })
        })
}

module.exports= authorization