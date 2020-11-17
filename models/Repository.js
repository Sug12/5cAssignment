const Owner = require("../models/Owner");
const {sequelize, Sequelize} = require("../services/database/connection.service");

const Repository = sequelize.define("repositories", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: Sequelize.STRING,
    htmlurl: Sequelize.STRING,
    description: Sequelize.STRING,
    createdat: Sequelize.DATE,
    openissues: Sequelize.INTEGER,
    watchers: Sequelize.INTEGER,
    ownerid: {
        type: Sequelize.INTEGER,
        references: {
            model: 'owners',
            key: 'id',
        }
    }
}, {
    timestamps: false,
    freezeTableName: true,
});

Repository.belongsTo(Owner, {foreignKey: 'ownerid'});

module.exports = Repository;