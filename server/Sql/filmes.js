const Sequelize = require('sequelize');
const database = require('./db');

const Filmes = database.define('Filmes', 
{
    id:
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo:
    {
        type: Sequelize.STRING(30),
        allowNull: false,
    },
    Genero:
    {
        type: Sequelize.STRING(30),
        allowNull: false,
    },
});

module.exports = Filmes;