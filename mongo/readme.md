# MongoDb

## Instalar mongo en docker

- Instalar docker descargando el ejecutable desde su página web
- Crear un cuenta en docker hub

```
docker run --name mongodb -p 27017:27017 -d mongo
```

- Conectar con la consola de mongo:

```
docker exec -it mongodb bash
```

- Crear una base de datos: use test

- [Relación de comandos Mongo](https://geekflare.com/es/mongodb-queries-examples/)

## Proyecto con Mongoose

- npm init
- npm install mongoose validator
- usar el archivo index.js como ejemplo de como conectar a mongo usango mongoose.
