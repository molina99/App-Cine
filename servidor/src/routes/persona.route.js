const express = require("express");
const router = express.Router();

const {
  getPersona,
  getPersonaId,
  createPersona,
  deletePersona,
  updatePersona,
  loginPersona
} = require("../controllers/persona.controller");

router.post("/login", loginPersona);
router.get("/getPersona", getPersona);
router.get("/getPersona/:id", getPersonaId);
router.post("/createPersona", createPersona);
router.delete("/deletePersona/:id", deletePersona);
router.put("/updatePersona/:id", updatePersona);

module.exports = router;
