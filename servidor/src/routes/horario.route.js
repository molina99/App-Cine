const express = require("express");
const router = express.Router();

const {
  getHorario,
  getHorarioId,
  createHorario,
  deleteHorario,
  updateHorario
} = require("../controllers/horario.controller");

router.get("/getHorario", getHorario);
router.get("/getHorario/:id", getHorarioId);
router.post("/createHorario", createHorario);
router.delete("/deleteHorario/:id", deleteHorario);
router.put("/updateHorario/:id", updateHorario);

module.exports = router;
