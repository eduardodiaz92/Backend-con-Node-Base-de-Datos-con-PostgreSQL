const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class OrderService {
  constructor() {
    this.orders = [];
  }

  async create(data) {
    const rta = await models.Order.create(data);
    return rta;
  }

  async find() {
    const rta = await models.Order.findAll();
    return rta;
  }

  async findOne(id) {
    const order = await models.Order.findByPk(id);
    if (!order) {
      throw boom.notFound('order not found');
    }
    return order;
  }

  async update(id, data) {
    const order = await this.findOne(id);
    const rta = await order.update(data);
    return rta;
  }

  async delete(id) {
    const order = this.findOne(id);
    await order.destroy();
    return { id };
  }
}

module.exports = OrderService;
