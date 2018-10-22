export class Lugar {
    /**
     *
     */
    constructor(_id='', nombre='', ciudad='', lugar='', tipo='', especialidad='', direccion='', telefono='', correo='', web='', descripcion='', calificacion=0, imagen='', punto='', horario='') {
        this._id=_id,
        this.nombre=nombre,
        this.ciudad=ciudad,
        this.lugar=lugar,
        this.tipo=tipo,
        this.especialidad=especialidad,
        this.direccion=direccion,
        this.telefono=telefono,
        this.correo=correo,
        this.web=web,
        this.descripcion=descripcion,
        this.calificacion=calificacion,
        this.imagen=imagen,
        this.punto=punto,
        this.horario=horario
    }
    _id: string;
    nombre: String;
    ciudad: String;
    lugar: String;
    tipo: String;
    especialidad: String;
    direccion: String;
    telefono: String;
    correo: String;
    web: String;
    descripcion: String;
    calificacion: Number;
    imagen: String;
    punto: Object;
    horario: String
}
