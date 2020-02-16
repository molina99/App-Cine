const Horarios = require("../models/Horarios");

async function getHorario(req, res) {
  try {
    const horarios = await Horarios.Horarios.findAll();
    res.json({
      data: horarios
    });
  } catch (error) {
    console.log(error);
  }
}

async function getHorarioId(req, res) {
  const { id } = req.params;
  const horario = await Horarios.Horarios.findOne({
    where: {
      id
    }
  });
  res.json({
    data: horario
  });
}

async function createHorario(req, res) {
  const { fecha, hora } = req.body;
  try {
    let nuevoHorario = await Horarios.Horarios.create(
      {
        fecha,
        hora
      },
      {
        fields: ["fecha", "hora"]
      }
    );
    if (nuevoHorario) {
      res.json({
        message: "Horario creado satisfactoriamente",
        data: nuevoHorario
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "No se pudo guardar el nuevo horario",
      data: {}
    });
  }
}

async function deleteHorario(req, res) {
  const { id } = req.params;
  const deleteHorario = await Horarios.Horarios.destroy({
    where: {
      id
    }
  });
  res.json({
    message: "Persona eliminada satisfactoriamente",
    count: deleteHorario
  });
}

async function updateHorario(req, res) {
  const { id } = req.params;
  const { fecha, hora } = req.body;
  const horarios = await Horarios.Horarios.findAll({
    attributes: ["id", "fecha", "hora"],
    where: {
      id
    }
  });

  if (horarios.length > 0) {
    horarios.forEach(async user => {
      await horarios.update({
        fecha,
        hora
      });
    });
  }

  return res.json({
    message: "Horario actualizado satisfactoriamente",
    data: horarios
  });
}

module.exports = {
  getHorario,
  getHorarioId,
  createHorario,
  deleteHorario,
  updateHorario
};
