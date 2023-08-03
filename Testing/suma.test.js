const suma = require('./suma');

test('sumar 1 + 2 es igual a 3', () => { 
    expect(suma(1, 2)).toBe(3);
 })

test('suma -6 y -5 es igual a -11', () => {
    expect(suma(-6, -5)).toBe(-11);
})