const { Sequelize } = require('sequelize');

const { config } = require('../config/config');

//Conexcion(misma que el archivo postgres.pool)
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

// Option 1: Passing a connection URI

// Example for postgres
const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true,
});

module.exports = sequelize;
