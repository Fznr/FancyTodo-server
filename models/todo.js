'use strict';
module.exports = (sequelize, DataTypes) => {
const {Model}= sequelize.Sequelize

class Todo extends Model {}

Todo.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    notNull: {
      args: true,
      msg: 'Title cannot be null'
    },
    notEmpty: {
      args: true,
      msg: 'Pleaase insert title'
    }
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    notNull: {
      args: true,
      msg: 'Description cannot be null'
    },
    notEmpty: {
      args: true,
      msg: 'Please insert description'
    }
  },
  status: DataTypes.BOOLEAN,
  due_date: DataTypes.DATE,
  UserId: DataTypes.INTEGER
}, {
  hooks: {
    beforeValidate(todo, options) {
      if(todo.status=='' || todo.status== null){
        todo.status = false
      }
    }
  },
  sequelize
})

  Todo.associate = function(models) {
    // associations can be defined here
    Todo.belongsTo(models.User)
  };
  return Todo;
};