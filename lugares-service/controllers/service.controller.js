const Lugar = require('../models/Lugar');
const Email = require('../models/Email');
const nodemailer = require('nodemailer');
const serviceCtrl = {};

serviceCtrl.listarLugares = async (req, res) => {
    const lugares = await Lugar.find();
    res.json(lugares);
    console.log(lugares);
    
}

serviceCtrl.buscarLugar = async (req, res) => {
    const lugar = await Lugar.findById(req.params.id);
    res.json(lugar);
}

serviceCtrl.crearLugar = async (req, res) => {
    const lugar = new Lugar({
        nombre: req.body.nombre,
        lugar: req.body.lugar,
        tipo: req.body.tipo,
        especialidad: req.body.especialidad,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        correo: req.body.correo,
        web: req.body.web,
        calificacion: req.body.calificacion,
        descripcion: req.body.descripcion,
        imagen: req.body.imagen
    });
    await lugar.save();
    res.json({Lugar: 'Creado'});
}

serviceCtrl.editarLugar = async (req, res) => {
    const { id } = req.params;
    const lugar = {
        nombre: req.body.nombre,
        lugar: req.body.lugar,
        tipo: req.body.tipo,
        especialidad: req.body.especialidad,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        correo: req.body.correo,
        web: req.body.web,
        calificacion: req.body.calificacion,
        descripcion: req.body.descripcion,
        imagen: req.body.imagen
    };
    await Lugar.findByIdAndUpdate(id, {$set: lugar}, {new: true});
    res.json({Lugar: 'Editado'});
}

serviceCtrl.eliminarLugar = async (req, res) => {
    await Lugar.findByIdAndRemove(req.params.id);
    res.json({Lugar: 'Eliminado'})
}

serviceCtrl.enviarMail =  (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'jhamiltonvo@gmail.com',
            pass: '56042041Nick'
        }
    });
    const mailOptions = {
        from: 'jhamiltonvo@gmail.com',
        to: 'jhonvio@hotmail.com',
        subject: 'Correo enviado desde web de lugares',
        text: `Nombre: ${req.body.nombremail}\n Email: ${req.body.email}\n Mensaje: ${req.body.msj}`
    };
     transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email enviado: ' + info.response);
            res.json({
                estatus: 'mensaje enviado'
            });
        }
    });
}


module.exports = serviceCtrl;