import { Sequelize } from 'sequelize';
import sequelize from '../config/connection.js';

const Biblioteca = sequelize.define('Biblioteca', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  isbn: {
    type: Sequelize.STRING(13),
    allowNull: false,
    unique: true
  },
  titulo: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  autor: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  data: {
    type: Sequelize.DATE,
    allowNull: false
  },
  reservado: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  id_reserva: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  data_inicio_reserva: {
    type: Sequelize.DATE,
    allowNull: true
  },
  data_termino_reserva: {
    type: Sequelize.DATE,
    allowNull: true
  }
}, {
  freezeTableName: true,
  timestamps: false,
  underscored: true,
});

export default Biblioteca;
console.log("porta 5000 - biblioteca_model");