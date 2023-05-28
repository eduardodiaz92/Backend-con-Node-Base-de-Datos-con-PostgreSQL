const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);
const createdAt = Joi.date();

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  createdAt: createdAt.required(),
});

const updateUserSchema = Joi.object({
  email: email,
  password: password,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema };
