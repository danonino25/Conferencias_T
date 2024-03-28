const Conferencia = require("../models/Conferencia");

//Inserta una nueva conferencia
exports.crearConferencia = async (req, res) => {
    try {
        let conferencia;

        // Creamos nuestra conferencia
        conferencia = new Conferencia(req.body);

        await conferencia.save();
        res.send(conferencia);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

// Trae lista de conferencias de la BD
exports.obtenerConferencias = async (req, res) => {
    try {
        
        const conferencia = await Conferencia.find();
        res.json(conferencia)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

//Actualiza una conferencia por id
exports.actualizarConferencia = async (req, res) => {
    try {
        
        const {titulo, descripcion, ponente, cupo, horaInicio, horaTermino, lugar, fecha, area } = req.body;
        let conferencia = await Conferencia.findById(req.params.id);

        if(!conferencia){
            req.status(404).json({msg:'No existe la conferencia'})
        }

        conferencia.titulo = titulo;
        conferencia.descripcion = descripcion;
        conferencia.ponente = ponente;
        conferencia.cupo = cupo;
        conferencia.horaInicio = horaInicio;
        conferencia.horaTermino = horaTermino;
        conferencia.lugar = lugar;
        conferencia.fecha = fecha;
        conferencia.area = area;
        
        conferencia = await Conferencia.findOneAndUpdate({ _id: req.params.id}, conferencia, {new:true})
        res.json(conferencia);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


//obtener una sola Conferencia
exports.obtenerConferencia = async (req, res) => {
    try {
        
        let conferencia = await Conferencia.findById(req.params.id);

        if(!conferencia){
            req.status(404).json({msg:'No existe la conferencia'})
        }
               
        res.json(conferencia);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

// Elimina una Conferencia
exports.eliminarConferencia = async (req, res) => {
    try {
        
        let conferencia = await Conferencia.findById(req.params.id);

        if(!conferencia){
            req.status(404).json({msg:'No existe la conferencia'})
        }
        
        await Conferencia.findByIdAndDelete(req.params.id)
        res.json({ msg: 'Producto eliminado con exito'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}