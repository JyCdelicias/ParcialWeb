'use strict'
const {Model, DataTypes} = require('sequelize');

module.exports = (sequelize) => {
  class Empleados extends Model {
   
  }
  Empleados.init({
    id: {
      type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    salarioBase: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
   
    diasTrabajados:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
    
    horasExtra:{
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    estado: {
      type:DataTypes.STRING,
      allowNull: false
    },
    salarioTotal: {
      type: DataTypes.DECIMAL,
      allowNull : false
    },
  }, {
    sequelize,
    modelName: 'Empleados',
    tableName: 'Empleados',
    timestamps: false

  });
  return Empleados;
}