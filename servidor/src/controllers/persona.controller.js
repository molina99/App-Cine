const Personas = require("../models/Personas");

async function loginPersona(req, res) {
  const email = req.body.email;
  const pass = req.body.pass;

  Personas.Personas.findAll().then(resultado => {
    resultado.forEach(element => {
      if (element.email === email && element.pass == pass) {
        res.status(200).json({
          ok: true,
          mensaje: "Encontrado"
        });
      }
    });
    return res.status(500).json({
      ok: false,
      mensaje: "No encontrado"
    });
  });
}

async function getPersona(req, res) {
  try {
    const personas = await Personas.Personas.findAll();
    res.json({
      data: personas
    });
  } catch (error) {
    console.log(error);
  }
}

async function getPersonaId(req, res) {
  const { id } = req.params;
  const persona = await Personas.Personas.findOne({
    where: {
      id
    }
  });
  res.json({
    data: persona
  });
}

async function createPersona(req, res) {
  const { nombre, apellido, email, pass } = req.body;
  try {
    let nuevaPersona = await Personas.Personas.create(
      {
        nombre,
        apellido,
        email,
        pass
      },
      {
        fields: ["nombre", "apellido", "email", "pass"]
      }
    );
    if (nuevaPersona) {
      res.json({
        message: "Persona creada satisfactoriamente",
        data: nuevaPersona
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "No se pudo guardar la nueva persona",
      data: {}
    });
  }
}

async function deletePersona(req, res) {
  const { id } = req.params;
  const deletePersona = await Personas.Personas.destroy({
    where: {
      id
    }
  });
  res.json({
    message: "Persona eliminada satisfactoriamente",
    count: deletePersona
  });
}

async function updatePersona(req, res) {
  const { id } = req.params;
  const { nombre, apellido, email, pass } = req.body;
  const personas = await Personas.Personas.findAll({
    attributes: ["id", "nombre", "apellido", "email", "pass"],
    where: {
      id
    }
  });

  if (personas.length > 0) {
    personas.forEach(async user => {
      await personas.update({
        nombre,
        apellido,
        email,
        pass
      });
    });
  }

  return res.json({
    message: "Persona actualizada satisfactoriamente",
    data: personas
  });
}

module.exports = {
  loginPersona,
  getPersona,
  getPersonaId,
  createPersona,
  deletePersona,
  updatePersona
};
