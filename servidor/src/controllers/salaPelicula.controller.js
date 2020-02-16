const Sala_peliculas = require("../models/Sala_peliculas");

async function allSalasPelis(req, res) {
  try {
    const { query } = ("select peliculas.titulo, salas.nombre, salas.descripcion, horarios.fecha, horarios.hora from sala_peliculas join peliculas on peliculas.id=id_pelicula join salas on salas.id=id_sala join horarios on horarios.id=id_horario");
    const sala_peliculas = await Sala_peliculas.Sala_peliculas.findAll({query}) 
    res.json({
      data: sala_peliculas
    });
  } catch (error) {
    console.log(error);
  }
}

async function getSalaPelicula(req, res) {
  try {
    const sala_peliculas = await Sala_peliculas.Sala_peliculas.findAll();
    res.json({
      data: sala_peliculas
    });
  } catch (error) {
    console.log(error);
  }
}

async function getSalaPeliculaId(req, res) {
  const { id } = req.params;
  const sala_pelicula = await Sala_peliculas.Sala_peliculas.findOne({
    where: {
      id
    }
  });
  res.json({
    data: sala_pelicula
  });
}

async function createSalaPelicula(req, res) {
  const { id_pelicula, id_sala, id_horario } = req.body;
  try {
    let nuevaSalaPelicula = await Sala_peliculas.Sala_peliculas.create(
      {
        id_pelicula,
        id_sala,
        id_horario
      },
      {
        fields: ["id_pelicula", "id_sala", "id_horario"]
      }
    );
    if (nuevaSalaPelicula) {
      res.json({
        message: "SalaPelicula creada satisfactoriamente",
        data: nuevaSalaPelicula
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "No se pudo guardar la SalaPelicula",
      data: {}
    });
  }
}

async function deleteSalaPelicula(req, res) {
  const { id } = req.params;
  const deleteSalaPelicula = await Sala_peliculas.Sala_peliculas.destroy({
    where: {
      id
    }
  });
  res.json({
    message: "SalaPelicula eliminada satisfactoriamente",
    count: deleteSalaPelicula
  });
}

async function updateSalaPelicula(req, res) {
  const { id } = req.params;
  const { id_pelicula, id_sala, id_horario } = req.body;
  const salaPeliculas = await Sala_peliculas.Sala_peliculas.findAll({
    attributes: ["id", "id_pelicula", "id_sala", "id_horario"],
    where: {
      id
    }
  });

  if (salaPeliculas.length > 0) {
    salaPeliculas.forEach(async user => {
      await salaPeliculas.update({
        id_pelicula,
        id_sala,
        id_horario
      });
    });
  }

  return res.json({
    message: "SalaPelicula actualizada satisfactoriamente",
    data: salaPeliculas
  });
}

module.exports = {
  getSalaPelicula,
  getSalaPeliculaId,
  createSalaPelicula,
  deleteSalaPelicula,
  updateSalaPelicula,
  allSalasPelis
};
