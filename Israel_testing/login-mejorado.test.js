const { login, registro, clearDatabase } = require("./login-mejorado");
const email = "israel@mail.com";
const password = "12345678";

beforeEach(() => {
    registro("i@mail.com", "123456");
    registro(email, password);
});

afterEach(() => {
    clearDatabase();
});

test("Usuario no existe porque email no está en DB", () => {
    expect(login("email@mail.com", "123123")).toBeFalsy();
});

test("Usuario existe pero su password no es correcta", () => {
    expect(login("israel@mail.com", "12345")).toBeFalsy();
});

test("Usuario con email y password válidos", () => {    
    expect(login("israel@mail.com", "12345678")).toBeTruthy();
});