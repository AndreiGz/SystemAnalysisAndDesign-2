const {DataTypes, Sequelize} =require("sequelize")

module.exports=(Sequelize)=>{
    const post = Sequelize.define("tbl_User",{
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        content:{
            type:DataTypes.TEXT,
            allowNull:false
        },
    });

    return post;
}