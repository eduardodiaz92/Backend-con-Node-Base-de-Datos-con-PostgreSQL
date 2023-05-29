const boom = require('@hapi/boom');

// const pool = require('../libs/postgres.pool');

//Cada vez que hacemos la configuracion de setupModel-init, se crea un espacio de
//nombres reservados que se llama models, donde guarda los modelos
const { models } = require('../libs/sequelize');

class UserService {
  constructor() {}

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find() {
    const rta = await models.User.findAll();
    return rta;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async update(id, data) {
    //opc1
    // const rta = await models.User.update(
    //   {
    //     ...data,
    //   },
    //   {
    //     where: {
    //       id: id,
    //     },
    //   }
    // );
    // return rta;
    //opc 2
    const user = await this.findOne(id);
    const rta = await user.update(data);
    return rta;
  }

  async delete(id) {
    //opc1
    // const rta = await models.User.destroy({
    //   where: {
    //     id: id,
    //   },
    // });
    // return rta;
    //opc2
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;
