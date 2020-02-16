const Sequelize = require("sequelize");
const db = require("../database/db");
const Compras = require("./Compras");

const Sala_peliculas = db.sequelize.define(
  "sala_peliculas",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_pelicula: {
      type: Sequelize.INTEGER
    },
    id_sala: {
      type: Sequelize.INTEGER
    },
    id_horario: {
      type: Sequelize.INTEGER
    }
  },
  {
    timestamps: false
  }
);

Sala_peliculas.hasMany(Compras.Compras, {
  foreignKey: "id_sala_pelicula",
  sourceKey: "id"
});
Compras.Compras.belongsTo(Sala_peliculas, {
  foreignKey: "id_sala_pelicula",
  sourceKey: "id"
});

module.exports = {
  Sala_peliculas
};
