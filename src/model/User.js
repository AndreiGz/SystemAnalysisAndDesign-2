const {DataTypes, Sequelize} =require("sequelize")

module.exports=(Sequelize)=>{
    const User = Sequelize.define("tbl_User",{
        username:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        },
    });

    return User;
}