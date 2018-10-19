const mongoose = require('mongoose');
const { Schema } = mongoose;

const lugarSchema = new Schema({
    nombre:{type:String, required:true},
    ciudad:{type:String, required:true},
    lugar: {type:String, required:true},
    tipo:{type:String, required:true},
    especialidad:{type:String, required:true},
    direccion:{type:String, required:true},
    telefono:{type:String},
    correo:{type:String},
    web:{type:String},
    calificacion:{type:Array},
    descripcion:{type:String, required:true},
    imagen:{type:String, required:true},
    punto:{type:Object, required:true},
    horarios: {type:Object}
});

module.exports = mongoose.model('lugar',lugarSchema);