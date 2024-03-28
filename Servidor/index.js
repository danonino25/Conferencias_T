const express = require("express");
const canectarDB = require('./config/db');
const cors = require("cors");

//Creamos el servidor
const app = express();

// Conectamos a la BD

canectarDB();
app.use(cors());

app.use(express.json());

app.use('/api/conferencias', require('./routes/conferencia'));

app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente')
})