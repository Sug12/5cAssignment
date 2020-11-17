const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DBNAME, process.env.USERNAME, process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'postgres'
});

(async () => {
    try {
        const d = await sequelize.authenticate();
        console.log('Connection successful');
    } catch (e) {
        console.log('Connection failed', e);
    }
})();

module.exports = {sequelize, Sequelize};