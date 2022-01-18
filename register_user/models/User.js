const Sequelize = require('sequelize'); //import sequelize
const db = require('./db'); // database connection

const User = db.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

User.sync(); // create new table (if not exist)
User.sync({ alter: true }) // check if there is an alteration

module.exports = User; // export User