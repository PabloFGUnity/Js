import {faker} from "@faker-js/faker"

type Usuario = unknown;

const usuarios: Usuario[] = []

function crearUsuario():Usuario {
    return {
        id: faker.string.uuid(),
        name: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthDate: faker.date.birthdate(),
        fechaDeAlta: faker.date.past(),
        fechaDeMuerte: faker.date.recent()
    }
}

Array.from({length:3}).forEach(()=> {
    usuarios.push(crearUsuario())
})

console.log(usuarios)