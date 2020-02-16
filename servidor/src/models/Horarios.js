const Sequelize = require("sequelize");
const db = require("../database/db");
const Sala_peliculas = require("./Sala_peliculas");

const Horarios = db.sequelize.define(
  "horarios",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fecha: {
      type: Sequelize.STRING
    },
    hora: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);

Horarios.hasMany(Sala_peliculas.Sala_peliculas, {
  foreignKey: "id_horario",
  sourceKey: "id"
});
Sala_peliculas.Sala_peliculas.belongsTo(Horarios, {
  foreignKey: "id_horario",
  sourceKey: "id"
});

module.exports = {
  Horarios
};
