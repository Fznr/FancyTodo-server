'use strict';
module.exports = (sequelize, DataTypes) => {
const {Model}= sequelize.Sequelize

class Todo extends Model {}

Todo.init({
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  status: DataTypes.BOOLEAN,
  due_date: DataTypes.DATE,
  UserId: DataTypes.INTEGER
}, {
  validate :{
    notnull() {
      if(this.title == ''|| this.description == '') {
        throw new Error ('PLEASE FILL THE BLANK')
      } else if(this.due_date < new Date()){
        throw new Error ('Date can not fulfilled by before today date')
      }
    }
  },
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