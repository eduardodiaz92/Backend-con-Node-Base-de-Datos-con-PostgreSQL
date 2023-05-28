// const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CategoryService {
  constructor() {}

  async create(data) {
    const rta = await models.Category.create(data);
    return rta;
  }

  async find() {
    const rta = await models.Category.findAll();
    return rta;
  }

  async findOne(id) {
    const rta = await models.Category.findByPk(id);
    return rta;
  }

  async update(id, data) {
    const rta = await models.Category.update(
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
    const rta = await models.Category.destroy({
      where: {
        id: id,
      },
    });
    return rta;
  }
}

module.exports = CategoryService;
