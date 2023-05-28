const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const category = Joi.string();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  category: category.required(),
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  category: category,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
