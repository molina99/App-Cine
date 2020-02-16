const express = require("express");
const router = express.Router();

const {
    getPelicula,
    getPeliculaId,
    createPelicula,
    deletePelicula,
    updatePelicula
} = require("../controllers/pelicula.controller");

router.get("/getPelicula", getPelicula);
router.get("/getPelicula/:id", getPeliculaId);
router.post("/createPelicula", createPelicula);
router.delete("/deletePelicula/:id", deletePelicula);
router.put("/updatePelicula/:id", updatePelicula);

module.exports = router;
