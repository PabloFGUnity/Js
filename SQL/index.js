let mysql= require("mysql");
const Connection = require("mysql/lib/Connection");

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

// connection.query('SELECT * FROM `cliente` ',function(error,results,fields){
    
//     if (error){
//         return console.error('error:' + error.message);
//     }
//     console.log(results);

// });

// connection.query('SELECT * FROM `producto`  ',function(error,results,fields){
    
//     if (error){
//         return console.error('error:' + error.message);
//     }
//     console.log(results);

// });

// connection.query('SELECT * FROM `producto` WHERE `id`=? ',[1],function(error,results,fields){
    
//     if (error){
//         return console.error('error:' + error.message);
//     }
//     console.log(results);

// });

// connection.query(
//     'INSERT INTO `cliente` (`id`, `nombre`,`direccion`, `provincia`,`dni`) VALUES (5,"Manolo","Calle del Medio","Madrid","6653412A")'
// ,[1],function(error,results,fields){
    
//     if (error){
//         return console.error('error:' + error.message);
//     }
//     console.log(results);

// });



// function logearse(email,password)
// {
//     connection.query(
//             'Select * from `cliente` where email=? and password=?'
//         ,[email,password],function(error,results,fields){
            
//             if (error){
//                 console.error('error:' + error.message);
//             }
//             else if(email==="manolo@gmail.com" && password === "098adc")
//             {
//                 console.log("Usuario existe");
//             }
//             else
//             {
//                 console.log("Usuario no existe");
//             }
                
//     });
// }

// logearse("manolo@gmail.com","098adc")
// logearse("manolo@","098ac")
   
let order = {fecha:"2023-02-01", idCliente: 2, idProducto:4};
        function registrarOrder (order){
            if (validarProducto(order.idProducto))
                insertarOrden(order)
        }
        function insertarOrden (order ){
            let insert = 'insert into pedidos (fecha, idCliente, idProducto) value (?,?,?)';
            connection.query(insert,[order.fecha,order.idCliente,order.idProducto],function(err,result,fields){
                if(err){
                    console.log('error' + err);
                }else{
                    console.log(result);
                }
            })
        }
        async function validarProducto (producto) {
            return await existsQuery ('SELECT idProducto from producto where idProducto=?',[producto])
        }
        async function existsQuery (query,params) {
            const result = connection.query(query,params);
            return (result instanceof Array) && result.length > 0;
        }
        registrarOrder (order);
        

connection.end(function(error)
{
    if(error)
    {
        return console.log('error' + error.message);
    }
    console.log('Close the database connection');
});
