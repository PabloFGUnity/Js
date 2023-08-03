const suma = require("./suma");

test('sumar 1 + 2 es igual a 3', () => {
    const resultado = suma(1, 2);
    
    expect(resultado).toBe(3);
});

test('sumar -6 y -5 es igual a -11', () => {
    const resultado = suma(-6, -5);

    expect(resultado).toBe(-11);
});