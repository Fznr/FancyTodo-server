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
                let output = []
                output.push(result)
                res.status(200).json({Todo:output})
            })
            .catch(err => res.status(404).json(err))
    }
    static create(req, res) {
        const {title, description, status, due_date} =req.body
        Todo.create({
            title : title,
            description: description,
            status: status,
            due_date: due_date
        })
            .then(result => {
                res.status(201).json(result)
            })
            .catch(err => res.status(500).json(err))
    }
    static update(req, res) {
        let idEdit = 1
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
            .then(() => {
                let output= [{
                    title : title,
                description: description,
                status: status,
                due_date: due_date
                }]
                res.status(200).json({Todo:output})
            })
            .catch(err => res.status(500).json(err))
    }
    static delete(req, res) {
        const {id} = req.params
        Todo.destroy({
            where: {
                id: id
            }
        })
            .then(result => {
                res.status(200).json({result})
            })
            .catch(err => res.status(500).json(err))
    }
    
}

module.exports = TodoController