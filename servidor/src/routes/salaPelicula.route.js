const express = require("express");
const router = express.Router();

const {
  getSalaPelicula,
  getSalaPeliculaId,
  createSalaPelicula,
  deleteSalaPelicula,
  updateSalaPelicula,
  allSalasPelis
} = require("../controllers/salaPelicula.controller");

router.get("/allSalasPelis", allSalasPelis);
router.get("/getSalaPelicula", getSalaPelicula);
router.get("/getSalaPelicula/:id", getSalaPeliculaId);
router.post("/createSalaPelicula", createSalaPelicula);
router.delete("/deleteSalaPelicula/:id", deleteSalaPelicula);
router.put("/updateSalaPelicula/:id", updateSalaPelicula);

module.exports = router;
