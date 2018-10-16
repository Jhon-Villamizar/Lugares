export class Lugar {
    /**
     *
     */
    constructor(_id='', nombre='', lugar='', tipo='', especialidad='', direccion='', telefono='', correo='', web='', calificacion=0, imagen='') {
        this._id=_id,
        this.nombre=nombre,
        this.lugar=lugar,
        this.tipo=tipo,
        this.especialidad=especialidad,
        this.direccion=direccion,
        this.telefono=telefono,
        this.correo=correo,
        this.web=web,
        this.calificacion=calificacion,
        this.imagen=imagen
    }
    _id: string;
    nombre: String;
    lugar: String;
    tipo: String;
    especialidad: String;
    direccion: String;
    telefono: String;
    correo: String;
    web: String;
    calificacion: number;
    imagen: String;
}
