const Salas = require("../models/Salas");

async function getSala(req, res) {
  try {
    const salas = await Salas.Salas.findAll();
    res.json({
      data: salas
    });
  } catch (error) {
    console.log(error);
  }
}

async function getSalaId(req, res) {
  const { id } = req.params;
  const sala = await Salas.Salas.findOne({
    where: {
      id
    }
  });
  res.json({
    data: sala
  });
}

async function createSala(req, res) {
  const { nombre, descripcion } = req.body;
  try {
    let nuevaSala = await Salas.Salas.create(
      {
        nombre,
        descripcion
      },
      {
        fields: ["nombre", "descripcion"]
      }
    );
    if (nuevaSala) {
      res.json({
        message: "Sala creada satisfactoriamente",
        data: nuevaSala
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "No se pudo guardar la sala",
      data: {}
    });
  }
}

async function deleteSala(req, res) {
  const { id } = req.params;
  const deleteSala = await Salas.Salas.destroy({
    where: {
      id
    }
  });
  res.json({
    message: "Sala eliminada satisfactoriamente",
    count: deleteSala
  });
}

async function updateSala(req, res) {
  const { id } = req.params;
  const { nombre, descripcion } = req.body;
  const salas = await Salas.Salas.findAll({
    attributes: ["id", "nombre", "descripcion"],
    where: {
      id
    }
  });

  if (salas.length > 0) {
    salas.forEach(async user => {
      await salas.update({
        nombre,
        descripcion
      });
    });
  }

  return res.json({
    message: "Sala actualizada satisfactoriamente",
    data: salas
  });
}

module.exports = {
  getSala,
  getSalaId,
  createSala,
  deleteSala,
  updateSala
};
