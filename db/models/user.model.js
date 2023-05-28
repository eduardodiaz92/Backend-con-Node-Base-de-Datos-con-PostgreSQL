const { Model, DataTypes, Sequelize } = require('sequelize');

//Una buena practica es empezar a definir cual será el nombre de nuestra tabla
const USER_TABLE = 'users';

//Este schema defina la estructura de la base de datos
const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
};
//Gracias a la extension de modelo nosotros tenemos atributos como find, etc
class User extends Model {
  static associate() {
    //models
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false,
    };
  }
}
module.exports = { USER_TABLE, UserSchema, User };
