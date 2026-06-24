import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";

const Usuario = sequelize.define('Usuario',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    contato1:{
      type: DataTypes.STRING,
      allowNull: false
    },
    contato2:{
      type: DataTypes.STRING,
      allowNull:true
    },
    tipo: {
      type: DataTypes.ENUM,
      values:['fornecedor','cliente']
    },
    cep: {
      type: DataTypes.STRING,
      allowNull: false
    },
    logradouro: {
      type: DataTypes.STRING,
      allowNull:false
    },
    numero:{
      type: DataTypes.STRING,
      allowNull:false
    },
    bairro:{
      type: DataTypes.STRING,
      allowNull:false
    },
    cidade:{
      type: DataTypes.STRING,
      allowNull:false
    },
    estado:{
      type:DataTypes.STRING,
      allowNull:false
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "usuarios",
    timestamp: true,
  },
);

export default Usuario
