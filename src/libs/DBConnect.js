const Sequelize = require("sequelize")

async function connectToDB(){
    const sequelize = new Sequelize("db_sad2_gonzales", "root", "",{
        host: "localhost",
        dialect: "mysql",
    });
    await sequelize.authenticate().then(()=>{
        //This is the resolve promise
        console.log("DB Connection is successful!")
    }).catch(()=>{
        //Reject the promise
        console.error("Encountered error",err)
    })

}

exports.connectToDB=connectToDB