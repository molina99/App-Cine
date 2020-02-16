const Sequelize = require("sequelize");

const db = require("../database/db");

const Compras = db.sequelize.define(
  "compras",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    numero_boletos: {
      type: Sequelize.INTEGER
    },
    id_persona: {
      type: Sequelize.INTEGER
    },
    id_sala_pelicula: {
      type: Sequelize.INTEGER
    }
  },
  {
    timestamps: false
  }
);

module.exports = {
  Compras
};
