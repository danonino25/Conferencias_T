const mongoose = require('mongoose');

const ConferenciaSchema = mongoose.Schema({
    titulo:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    ponente:{
        type: String,
        required: true
    },
    cupo:{
        type: Number,
        required: true
    },
    horaInicio:{
        type: String,
        required: true
    },
    horaTermino:{
        type: String,
        required: true
    },
    lugar:{
        type: String,
        required: true
    },
    fecha:{
        type: Date,
        required: true
    },
    area:{
        type: String,
        required: true
    },
    asistentes:[
        { type: Object}
    ]
});

module.exports = mongoose.model('Conferencia', ConferenciaSchema);