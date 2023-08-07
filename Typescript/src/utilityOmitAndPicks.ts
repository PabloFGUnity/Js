import {ROLES} from './tiposAvanzados/enum';

interface IUsuario {
    id: string | number;
    nombre: string;
    correo: string;
    departamento: string;
    rol: ROLES;
    fecha_de_creacion: string;
    fecha_de_modificacion: string;
}

interface INewUser 
extends Omit<IUsuario, "id" | "fecha_de_creacion" | "fecha_de_modificacion" > {
    contraseña: string
}

const nuevo_usuario: INewUser = {
    nombre: "PEPE",
    correo: "@gmail.com",
    departamento: "IT",
    rol: ROLES.USER,
    contraseña: "fwefwefewf"
}

interface INewUser2
extends Pick<IUsuario, "correo" | "departamento" | "rol" > {
    contraseña: string
}

const nuevo_usuario2: INewUser2 = {
    correo: "@gmail.com",
    departamento: "IT",
    rol: ROLES.USER,
    contraseña: "fwefwefewf"
}