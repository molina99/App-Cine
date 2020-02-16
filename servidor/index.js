const expres = require("express");
const app = expres();
const port = process.env.PORT || 4000;

const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require("./src/routes/persona.route"));
app.use(require("./src/routes/pelicula.route"));
app.use(require("./src/routes/sala.route"));
app.use(require("./src/routes/horario.route"));
app.use(require("./src/routes/salaPelicula.route"));

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
