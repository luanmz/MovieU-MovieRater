const Sequelize = require('sequelize');
const database = require('../../db');



const Filmes = database.define('Filmes', 
{
    id:
    {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },

    original_title:
    {
        type: Sequelize.STRING(50),
        allowNull: false,
    },

    poster_path:
    {
        type: Sequelize.STRING(100),
        allowNull: false,
    },

    sinopse:
    {
        type: Sequelize.TEXT,
        allowNull: false,
    },

    release_date:
    {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
    },

    vote_count:
    {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

    vote_average:
    {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
});

module.exports = Filmes;