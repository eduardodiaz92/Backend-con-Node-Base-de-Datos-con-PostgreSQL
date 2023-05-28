// const boom = require('@hapi/boom');

// const pool = require('../libs/postgres.pool');

//Cada vez que hacemos la configuracion de setupModel-init, se crea un espacio de
//nombres reservados que se llama models, donde guarda los modelos
const { models } = require('../libs/sequelize');

class UserService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
    const rta = await models.User.findAll();
    return rta;
  }

  async findOne(id) {
    return id;
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
