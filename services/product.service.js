// const { faker } = require('@faker-js/faker');
// const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class ProductsService {
  constructor() {
    this.products = [];
  }

  async create(data) {
    const rta = await models.Product.create(data);
    return rta;
  }

  async find() {
    const rta = await models.Product.findAll();
    return rta;
  }

  async findOne(id) {
    const rta = models.Product.findByPk(id);
    return rta;
  }

  async update(id, data) {
    const rta = await models.Product.update(
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
    const rta = await models.Product.destroy({
      where: {
        id: id,
      },
    });
    return rta;
  }
}

module.exports = ProductsService;
