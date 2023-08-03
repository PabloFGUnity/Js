const mysql = require("mysql")

let connection = mysql.createConnection({

host: 'localhost',
user: 'root',
password: 'root',
database: 'sakila'})

connection.connect(function(err) {
if (err) {
return console.error('error: ' +
err.message);
}
console.log('Connected to the MySQL server.')
});

/*connection.query('select * from actor limit 10', function(error,results,fields){
    console.log(results)
    console.log(fields)
})*/

function resultQuery(){

    let myQuery = 'select * from actor limit 10'

    var result = getResultFromQuery(myQuery)

    console.log(result)

    result.then(function(results){
        console.log("aqui llega")
        console.log(results)
    })

}

function getResultFromQuery(myQuery)
{
    return new Promise(function(resolve, reject){
        connection.query(
            myQuery,
            function(err, rows){                                                
                if(rows === undefined){
                    reject(new Error("Error rows is undefined"));
                }else{
                    resolve(rows);
                }
            }
        )})
}

async function resultQuery1(){

    let myQuery = 'select * from actor limit 10'

    var query = await getResultFromQuery(myQuery)

    console.log(query[0].actor_id)
}


resultQuery1()