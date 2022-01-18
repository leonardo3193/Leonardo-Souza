/*SEQUELIZE CONFIG: https://sequelize.org/master/manual/getting-started.html#connecting-to-a-database*/

const Sequelize = require('sequelize');

const sequelize = new Sequelize("myproject" ,  "root"  , "123456",{
  host:'localhost',
  dialect:'mysql'
});

sequelize.authenticate()
.then(function(){
  console.log("Database connection successful!");
}).catch(function(){
  console.log("Error: Database connection not successful!");
});

module.exports = sequelize;