'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('usuarios', 
     { 
       id:{
      type:Sequelize.INTEGER,
      autoIncrement:true,
      primaryKey:true,
      alloNull:false
       },
       nome:{
       type:Sequelize.STRING,
       alloNull:false
      },
      email:{
       type:Sequelize.STRING,
       alloNull:false
      },
      senha:{
        type:Sequelize.STRING,
       alloNull:false
      },
      foto:{
        type:Sequelize.STRING,
       
      },
      createdAt:{
        type:Sequelize.DATE
      },
      updateAt:{
        type:Sequelize.DATE,
      },
     });
     
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.dropTable('usuarios');

  }
};
