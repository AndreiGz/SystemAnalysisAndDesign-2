const Sequelize = require("sequelize");



  const sequelize = new Sequelize("db_sad2_gonzales", "root", "", {
    host: "localhost",
    dialect: "mysql",
  });

  const User = require("../model/User")(sequelize);
  
  function createUsers(payload) {
    User.create(payload).then((user)=>{
        return user;
    })
  }



exports.createrUsers=this.createrUsers