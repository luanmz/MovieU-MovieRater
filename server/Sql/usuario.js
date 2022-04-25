const Sequelize = require('sequelize');
const database = require('./db');

const Usuario = database.define('Usuario', 
{
    id:
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:
    {
        type: Sequelize.STRING(30),
        allowNull: false,
    },
    sobrenome:
    {
        type: Sequelize.STRING(30),
        allowNull: false,
    },
    email:
    {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    Genero:
    {
        //Mudar o tipo depois
        type: Sequelize.STRING(30),
        allowNull: false,
    },
   //Adicionar depois atributos
});

module.exports = Usuario;