const Peliculas = require("../models/Peliculas");

async function getPelicula(req, res) {
  try {
    const peliculas = await Peliculas.Peliculas.findAll();
    res.json({
      data: peliculas
    });
  } catch (error) {
    console.log(error);
  }
}

async function getPeliculaId(req, res) {
  const { id } = req.params;
  const pelicula = await Peliculas.Peliculas.findOne({
    where: {
      id
    }
  });
  res.json({
    data: pelicula
  });
}

async function createPelicula(req, res) {
  const { titulo, resumen, categoria, valor_entrada } = req.body;
  try {
    let nuevaPelicula = await Peliculas.Peliculas.create(
      {
        titulo,
        resumen,
        categoria,
        valor_entrada
      },
      {
        fields: ["titulo", "resumen", "categoria", "valor_entrada"]
      }
    );
    if (nuevaPelicula) {
      res.json({
        message: "Pelicula creada satisfactoriamente",
        data: nuevaPelicula
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "No se pudo guardar la pelicula",
      data: {}
    });
  }
}

async function deletePelicula(req, res) {
  const { id } = req.params;
  const deletePelicula = await Peliculas.Peliculas.destroy({
    where: {
      id
    }
  });
  res.json({
    message: "Pelicula eliminada satisfactoriamente",
    count: deletePelicula
  });
}

async function updatePelicula(req, res) {
  const { id } = req.params;
  const { titulo, resumen, categoria, valor_entrada } = req.body;
  const peliculas = await Peliculas.Peliculas.findAll({
    attributes: ["id", "titulo", "resumen", "categoria", "valor_entrada"],
    where: {
      id
    }
  });

  if (peliculas.length > 0) {
    peliculas.forEach(async user => {
      await peliculas.update({
        titulo,
        resumen,
        categoria,
        valor_entrada
      });
    });
  }

  return res.json({
    message: "Pelicula actualizada satisfactoriamente",
    data: peliculas
  });
}

module.exports = {
  getPelicula,
  getPeliculaId,
  createPelicula,
  deletePelicula,
  updatePelicula
};
