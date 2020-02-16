const Sequelize = require("sequelize");
const db = require("../database/db");
const Sala_peliculas = require("./Sala_peliculas");

const Peliculas = db.sequelize.define(
  "peliculas",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    titulo: {
      type: Sequelize.STRING
    },
    resumen: {
      type: Sequelize.STRING
    },
    categoria: {
      type: Sequelize.STRING
    },
    valor_entrada: {
      type: Sequelize.INTEGER
    }
  },
  {
    timestamps: false
  }
);

Peliculas.hasMany(Sala_peliculas.Sala_peliculas, {
  foreignKey: "id_pelicula",
  sourceKey: "id"
});
Sala_peliculas.Sala_peliculas.belongsTo(Peliculas, {
  foreignKey: "id_pelicula",
  sourceKey: "id"
});

module.exports = {
  Peliculas
};
