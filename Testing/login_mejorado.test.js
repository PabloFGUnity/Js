const {login, registro, borrar} = require('./login_mejorado');
const email= "@email.com";
const password = "1234";

beforeEach(() => {
    registro("1232@emai.com","12312")                                
    registro(email,password)
})

afterEach(() => {
    borrar();
})


test("Usuario con email correcto y password incorrecto", () => {
    expect(login("@email.com", "12232342")).toBeFalsy()
});

test("Usuario con email y password correcto", () => {
    expect(login("@email.com", "1234")).toBeTruthy()
});

test("Usuario no exitse porque email no esta en base de datos", () => {
    expect(login("@wcaca.com", "1234")).toBeFalsy()
})