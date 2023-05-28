// const boom = require('@hapi/boom');

// const pool = require('../libs/postgres.pool');

//Cada vez que hacemos la configuracion de setupModel-init, se crea un espacio de
//nombres reservados que se llama models, donde guarda los modelos
const { models } = require('../libs/sequelize');

class UserService {
  constructor() {}

  async create(data) {
    const rta = await models.User.create(data);
    return rta;
  }

  async find() {
    const rta = await models.User.findAll();
    return rta;
  }

  async findOne(id) {
    const rta = await models.User.findByPk(id);
    return rta;
  }

  async update(id, data) {
    const rta = await models.User.update(
      {
        ...data,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return rta;
  }

  async delete(id) {
    const rta = await models.User.destroy({
      where: {
        id: id,
      },
    });
    return rta;
  }
}

module.exports = UserService;
