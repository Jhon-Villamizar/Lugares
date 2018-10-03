const mongoose = require('mongoose');
const { Schema } = mongoose;

const lugarSchema = new Schema({
    nombre:{type:String, required:true},
    lugar: {type:String, required:true},
    tipo:{type:String, required:true},
    especialidad:{type:String, required:true},
    direccion:{type:String, required:true},
    telefono:{type:String, required:true},
    correo:{type:String, required:true},
    web:{type:String, required:true},
    calificacion:{type:Array, required:true}
});

module.exports = mongoose.model('lugar',lugarSchema);