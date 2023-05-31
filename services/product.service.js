// const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

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
    const rta = await models.Product.findAll({
      include: 'category',
    });
    return rta;
  }

  async findOne(id) {
    const product = await models.Product.findByPk(id);
    if (!product) {
      throw boom.notFound('customer not found');
    }
    return product;
  }

  async update(id, data) {
    const product = await this.findOne(id);
    const rta = await product.update(data);
    return rta;
  }

  async delete(id) {
    const product = await this.findOne(id);
    await product.destroy();
    return { id };
  }
}

module.exports = ProductsService;
