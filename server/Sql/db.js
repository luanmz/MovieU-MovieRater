const Sequelize = requere('sequelize');
//Parametros: Nome do banco, usuario do banco, senha
const sequelize = new Sequelize('MoviesDB', 'root', '12345', 
{
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
});

//Verificação se a conexão com o banco foi realizada
/*
sequelize.authenticate().then(function()
{
    console.log("Conectado com sucesso!");
}).catch(function(erro)
{
    console.log("Falha ao se conectar: "+erro);
})
*/


module.exports = sequelize;
