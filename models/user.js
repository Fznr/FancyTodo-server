'use strict';
const {encryptPassword} = require('../helper/bcrypt')

module.exports = (sequelize, DataTypes) => {
  const {Model} = sequelize.Sequelize

  class User extends Model {}

  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'please fulfill email field'
        },
        notEmpty: {
          args: true,
          msg: 'please fulfill email field'
        },
        isEmail: {
          args:true,
          msg:'invalid email format'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'please insert password'
        },
        notEmpty: {
          args: true,
          msg: 'please insert password'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate(user, options) {
        user.password = encryptPassword(user.password)
      }
    },
    sequelize
  })

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Todo)
  };
  return User;
};