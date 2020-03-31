const {Todo} = require('../models')

class TodoController {
    static findAll(req, res) {
        Todo.findAll()
            .then(result => {
                res.status(200).json({Todo:result})
            })
            .catch(err => res.status(500).json(err))
    }
    static findByPk(req, res) {
        const {id} =req.params
        Todo.findByPk(id)
            .then(result => {
                if(result) {
                    let output = []
                    output.push(result)
                    res.status(200).json({Todo:output})
                } else {
                    let output = {
                        error : "Not Found"
                    }
                    res.status(404).json(output)
                }
            })
            .catch(err => res.status(500).json(err))
    }
    static create(req, res) {
        const {title, description, status, due_date} =req.body
        Todo.create({
            title : title,
            description: description,
            status: status,
            due_date: due_date,
            UserId: req.currentUserId
        })
            .then(result => {
                res.status(201).json(result)
            })
            .catch(err => {
                if(err.name == 'SequelizeValidationError' ) {
                    res.status(400).json(err)
                } else {
                    res.status(500).json(err)
                }
            })
    }
    static update(req, res) {
        let idEdit = req.params.id
        const {title, description, status, due_date} =req.body
        Todo.update({
            title : title,
            description: description,
            status: status,
            due_date: due_date
        }, {
            where: {
            id: idEdit
            }
        })
            .then((result) => {
                console.log(result)
                if(result != 0) {
                    let output= [{
                    title : title,
                    description: description,
                    status: status,
                    due_date: due_date
                    }]
                    res.status(200).json({Todo:output})
                } else {
                    let output = {
                        error : "Not Found"
                    }
                    res.status(404).json(output)
                }
            })
            .catch(err => {
                if(err.name == 'SequelizeValidationError' ) {
                    res.status(400).json(err)
                } else {
                    res.status(500).json(err)
                }
            })
    }
    static delete(req, res) {
        const {id} = req.params
        Todo.findByPk(id)
            .then(result => {
                if(result) {
                    Todo.destroy({
                        where: {
                            id: id
                        }
                    })
                    .then(() => {
                        let output = []
                        output.push(result)
                        res.status(200).json({Todo:output})
                    })
                } else {
                    let output = {
                        error : "Not Found"
                    }
                    res.status(404).json(output)
                }   
            })
            .catch(err => res.status(500).json(err))
        }
}

module.exports = TodoController