const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class CustomersService {
  constructor() {
    this.customers = [];
  }

  async create(data) {
    const rta = await models.Customer.create(data);
    return rta;
  }

  async find() {
    const rta = await models.Customer.findAll();
    return rta;
  }

  async findOne(id) {
    const customer = await models.Customer.findByPk(id);
    if (!customer) {
      throw boom.notFound('customer not found');
    }
    return customer;
  }

  async update(id, data) {
    const customer = await this.findOne(id);
    const rta = await customer.update(data);
    return rta;
  }

  async delete(id) {
    const customer = await this.findOne(id);
    await customer.destroy();
    return { id };
  }
}

module.exports = CustomersService;
