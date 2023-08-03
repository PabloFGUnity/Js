const userController = require("../app/controllers/userController");

let status
let send 
let response;
let request;

beforeEach(() => {

    send = jest.fn((message) => {});

    status = jest.fn((statusCode) => {return {send: send}});

    response = {status : status};

    
})

// test("Email no esta en base de datos", () => {
//     request = {body: {name: "" , email: "", password: "" }};

//     userController.addUser(request, response);

//     expect(status.mock.calls).toHaveLength(1)
//     expect(status.mock.calls[0][0]).toBe(400)

//     expect(send.mock.calls).toHaveLength(1)
//     expect(send.mock.calls[0][0]).toBe("Error al recibir el body")
// });


// test("Crear usuario con email pero sin nombre ni password devuelve 400", () => {
//     request = {body: {name: "" , email: "lalala@vawv.com", password: "" }};

//     userController.addUser(request, response);

//     expect(response.status.mock.calls).toHaveLength(1)
//     expect(response.status.mock.calls[0][0]).toBe(400)

//     expect(send.mock.calls).toHaveLength(1)
//     expect(send.mock.calls[0][0]).toBe("Error al recibir el body")
// });


// test("Crear usuario con email y contraseña pero sin nombre devuelve 400", () => {
//     request = {body: {name: "" , email: "lalala@vawv.com", password: "2131sf" }};

//     userController.addUser(request, response);

//     expect(response.status.mock.calls).toHaveLength(1)
//     expect(response.status.mock.calls[0][0]).toBe(400)

//     expect(send.mock.calls).toHaveLength(1)
//     expect(send.mock.calls[0][0]).toBe("Error al recibir el body")
// });


// test("Crear usuario que ya existe en base de datos error 409", async() => {
//     request = {body: {name: "Pablo" , email: "peter@gl.com", password: "2131sf" }};

//     userController.dao = { 
//         getUserByEmail: jest.fn( async (email) => {
//             if (email === "peter@gl.com")
//             {
//                 return [{name: "Pablo" , email: "peter@gl.com", password: "2131sf" }]
//             } else {
//                 return false
//             }
//         })};

//     await userController.addUser(request, response);

//     expect(userController.dao.getUserByEmail.mock.calls).toHaveLength(1)
//     expect(userController.dao.getUserByEmail.mock.calls[0][0]).toBe(request.body.email)

//     expect(status.mock.calls).toHaveLength(1)
//     expect(status.mock.calls[0][0]).toBe(409)

//     expect(send.mock.calls).toHaveLength(1)
//     expect(send.mock.calls[0][0]).toBe("usuario ya registrado")
   
// });

// test("Crear usuario 200", async() => {
//     request = {body: {name: "Pablo" , email: "peter@gl.com", password: "2131sf" }};

//     userController.dao = { 
//         getUserByEmail: jest.fn( async (email) => {
//             if (email === "pe@gl.com")
//             {
//                 return [{name: "Pablo" , email: "peter@gl.com", password: "2131sf" }]
//             } else {
//                 return false
//             }
//         }),
//         addUser: jest.fn( async (userData) => {
//             let userObj = {
//                 name: userData.name,
//                 surname: userData.surname,
//                 email: userData.email,
//                 password:userData.password,
                
//             }
//             return userObj
//         })
//     };

//     await userController.addUser(request, response);

//     expect(userController.dao.getUserByEmail.mock.calls).toHaveLength(1)
//     expect(userController.dao.getUserByEmail.mock.calls[0][0]).toBe(request.body.email)

//     expect(userController.dao.addUser.mock.calls).toHaveLength(1)
//     expect(userController.dao.addUser.mock.calls[0][0]).toBe(request.body)

//     expect(status.mock.calls).toHaveLength(1)
//     expect(status.mock.calls[0][0]).toBe(200)

//     expect(send.mock.calls).toHaveLength(1)
//     expect(send.mock.calls[0][0]).toBe(`Usuario ${request.body.name} con id:  registrado`)
   
// });


test("Login con usuario válido",  async () => {
    let response = await fetch("http://localhost:3000/user/login", {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email: "peter@gml.com",password: "1234"})
    });

    const data = await response.json()
    console.log(data);
    const jwt = data.jwt;

    expect(response.status).toBe(200)
    expect(jwt.length > 0 ).toBeTruthy()
}) 

test("Login con email válido y password incorrecta",  async () => {
    let response = await fetch("http://localhost:3000/user/login", {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email: "peter@gml.com", password: "123"})
    });
    const send = await response.text()
    console.log(send);

    expect(response.status).toBe(401)
    expect(send).toBe("password incorrecta")
}) 

test("Login con email incorrecto y password correcta ",  async () => {
    let response = await fetch("http://localhost:3000/user/login", {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email: "peter@g.com", password: "1234"})
    });
    const send = await response.text()
    console.log(send);

    expect(response.status).toBe(404)
    expect(send).toBe("Usuario no econtrado")
}) 

test("Registrar usuario",  async () => {
    let response = await fetch("http://localhost:3000/user/", {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            name: "patetetette",
            surname: "Feut",
            email: "arboltet@gil.coewdwem",
            password: "1234",
        })
    });
    console.log(response.send);
    const send = await response.text()
    console.log(send);

    expect(response.status).toBe(200)
}) 



