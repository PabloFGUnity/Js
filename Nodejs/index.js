const express = require ("express")
const app= express();
const mysql= require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json())

let connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'PabolSQL',
    database:'ecommerce',
});

connection.connect(function(err)
{
    if (err){
        return console.error('error:' + err.message);
    }
    console.log('Connected to the MYSQL server.');
}); 



app.get("/hello", (request, response) => {
    response.send("Hello world!")
});

app.get("/querystring", (request, response) => {

    console.log(request.query);

    response.send(request.query)
});

app.post("/login", (request, response) => {

    const email= request.body.email;
    const password= request.body.password;

    connection.query("Select * from `cliente` where email=? and password=?",
    [email,password],(error, results, fields) => {

        if (error){
            console.error('error:' + error.message);
        }
        else if (email==="manolo@gmail.com" && password === "098adc") {
            response.send("usuario ok");
            console.log(results);
        }   else {
            response.status(401).send("usuario no ok")
        }
    
    })

    
});

app.post("/register", (request, response) => {

    const nombre=request.body.nombre;
    const email= request.body.email;
    const password= request.body.password;
    const direccion=request.body.direccion;
    const provincia=request.body.provincia;
    const dni=request.body.dni;
    const id=request.body.id;
    let insertquery='INSERT INTO `cliente` (`id`, `nombre`,`direccion`, `provincia`,`dni`,`email`,`password`) VALUES (?,?,?,?,?,?,?)'
    
    connection.query(insertquery,[id,nombre,direccion,provincia,dni,email,password],(error, results, fields) => {

        if (error){
            return console.error('error:' + error.message);
        } else  {
            console.log("Usuario registrado");
        } 
        console.log(results);
    
    })

    
});

app.get("/solounproducto", (request, response) => {

    connection.query('SELECT * FROM `producto` WHERE `id`=? ',[request.query.id],(error, results, fields) => {

        if (error){
            return console.error('error:' + error.message);
        } else if (results.length !== 0 )  {
            console.log("Producto elegido");
            response.send(results)
        } else {
            response.status(401).send("No se ha encontrado")
        }
    
    })

    
});


app.get("/productos", (request, response) => {

    

    connection.query('SELECT * FROM `producto` ' ,(error, results, fields) => {

        if (error){
            return console.error('error:' + error.message);
        } else if (results.length !== 0 )  {
            response.send(results)
        } else {
            response.status(401).send("No se ha encontrado");
        }
        console.log(results);
    
    })

    
});

app.post("/pedidos", (request, response) => {
    const id=request.body.id;
    const cliente=request.body.cliente;
    const producto=request.body.producto;
    const cantidad=request.body.cantidad;

    for (let i=0; i<4;i++)
    {
         connection.query('insert into `pedidos` (`id`,`cliente`,`producto`,`cantidad`) values(?,?,?,?) ',
         [id[i],cliente[i],producto[i],cantidad[i]],(error, results,fields) => {

            if (error){
                return (
                    console.error('error:' + error.message),
                    response.status(401).send("No se ha realizado")
                )
            }   else
                {
                    response.send(results);
                }
         });
    }


})

app.post("/pedidos_productos", (request, response) => {

// coger la id de results y hacer un for en la query

    const id=request.body.id;
    const cliente=request.body.cliente;
    const producto=request.body.producto;
    const cantidad=request.body.cantidad;
    const idProducto=request.body.idProducto;
    const idPedido=request.body.idPedido;

    connection.query('insert into `pedidos` (`id`,`cliente`,`producto`,`cantidad`) values(?,?,?,?) ',
    [id,cliente,producto,cantidad],(error, results,fields) => {

        if (error){
            return (
                console.error('error:' + error.message),
                response.status(401).send("No se ha realizado")
            )
        }   else 
            {   
                console.log(results);
                connection.query("insert into `pedidos_productos` (`idProducto`,`idPedido`) value (?,?)",
                [results.idProducto,results.idPedido],(error, results, fields) => {

                    if (error){
                        return (
                            console.error('error:' + error.message),
                            response.status(401).send("No se ha encontrado")
                        )
                    }   else 
                        {
                            response.send(results);
                        }
                })
                
            }
    });


});





app.listen(3000, () => {
    console.log("Escuchando peticiones");
});






