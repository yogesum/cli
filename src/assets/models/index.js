const Sequelize = require('sequelize')

const config = require('<%= configFile %>')

const sequelize = new Sequelize(config)

Object.getPrototypeOf(sequelize).setup = function setup() {
  [...Object.entries(this.models)].forEach((model) => {
    if ('associate' in model) model.associate(this.models);
  });
}

module.exports = sequelize
