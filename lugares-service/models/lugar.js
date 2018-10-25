const admin = require('firebase-admin');
const FirebaseSchema = require('firebase-schema');

const {
    Array,
    string,
    number,
    boolean,
    list,
    hash,
    index,
    key
} = FirebaseSchema.Types;

const HOST = 'https://callejiandox2-lugares.firebaseio.com';

// pass in Firebase so you can use this on the server or client
const schema = FirebaseSchema.create(Firebase, HOST, (child) => {
    child('nombre', string);
    child('direccion', string, (child) => {
        child(':direccionciudad', hash, (child) => {
            child('name', string);
            child('groups', index('../../groups'), (child) => {
                child(':groupId', boolean);
            });
        });
    });
}

// const lugarSchema = new Schema({
//     nombre:{type:String, required:true},
//     lugar: {type:String, required:true},
//     tipo:{type:String, required:true},
//     especialidad:{type:String, required:true},
//     direccion:{type:String, required:true},
//     telefono:{type:String, required:true},
//     correo:{type:String},
//     web:{type:String},
//     calificacion:{type:Array, required:true},
//     descripcion:{type:String, required:true},
//     imagen:{type:String, required:true}
// });

module.exports = schema;