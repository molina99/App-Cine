const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'cine-yavirac',
    'postgres',
    '123',
    {
        host: 'localhost',
        dialect: 'postgres',
        pool:{
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
);

module.exports = {
    sequelize
}