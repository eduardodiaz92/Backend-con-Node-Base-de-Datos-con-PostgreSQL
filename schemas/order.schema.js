const Joi = require('joi');

const id = Joi.number().integer();
const orderUser = Joi.string();
const orderProduct = Joi.string();

const createOrderSchema = Joi.object({
  orderUser: orderUser.required(),
  orderProduct: orderProduct.required(),
});

const updateOrderSchema = Joi.object({
  orderUser: orderUser,
  orderProduct: orderProduct,
});

const getOrderSchema = Joi.object({
  id: id.required(),
});

module.exports = { createOrderSchema, updateOrderSchema, getOrderSchema };
