const { login, registro, clearDatabase } = require("./login-mejorado-mock");
const email = "israel@mail.com";
const password = "12345678";

const findByEmailMock = jest.fn((e) =>  {
    if (e === email) {
        return { email: e, password: password };
    } else {
        return false;
    }
});

beforeEach(() => {
    registro("i@mail.com", "123456");
    registro(email, password);
});

afterEach(() => {
    clearDatabase();
});

test("Usuario no existe porque email no está en DB", () => {
    expect(login("email@mail.com", "123123", findByEmailMock)).toBeFalsy();
});

test("Usuario existe pero su password no es correcta", () => {
    expect(login("israel@mail.com", "12345", findByEmailMock)).toBeFalsy();
});

test("Usuario con email y password válidos", () => {    
    expect(login("israel@mail.com", "12345678", findByEmailMock)).toBeTruthy();
});