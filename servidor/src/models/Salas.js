const Sequelize = require("sequelize");
const db = require("../database/db");
const Sala_peliculas = require("./Sala_peliculas");

const Salas = db.sequelize.define(
  "salas",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: Sequelize.STRING
    },
    descripcion: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);

Salas.hasMany(Sala_peliculas.Sala_peliculas, {
  foreignKey: "id_sala",
  sourceKey: "id"
});
Sala_peliculas.Sala_peliculas.belongsTo(Salas, {
  foreignKey: "id_sala",
  sourceKey: "id"
});

module.exports = {
  Salas
};
