const express = require("express");
const router = express.Router();

const {
  getSala,
  getSalaId,
  createSala,
  deleteSala,
  updateSala
} = require("../controllers/sala.controller");

router.get("/getSala", getSala);
router.get("/getSala/:id", getSalaId);
router.post("/createSala", createSala);
router.delete("/deleteSala/:id", deleteSala);
router.put("/updateSala/:id", updateSala);

module.exports = router;
