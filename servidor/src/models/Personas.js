const Sequelize = require("sequelize");
const db = require("../database/db");
const Compras = require("./Compras");

const Personas = db.sequelize.define(
  "personas",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: Sequelize.STRING
    },
    apellido: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    pass: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);

Personas.hasMany(Compras.Compras, {
  foreignKey: "id_persona",
  sourceKey: "id"
});
Compras.Compras.belongsTo(Personas, {
  foreignKey: "id_persona",
  sourceKey: "id"
});

module.exports = {
  Personas
};
