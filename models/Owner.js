//const {  Model, DataTypes } = require("sequelize");
const {sequelize, Sequelize} = require("../services/database/connection.service");

const Owner = sequelize.define("owners", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    avatarurl: Sequelize.STRING,
    htmlurl: Sequelize.STRING,
    type: Sequelize.STRING,
    siteadmin: Sequelize.BOOLEAN
}, {
    timestamps: false,
    freezeTableName: true,
});

module.exports = Owner;