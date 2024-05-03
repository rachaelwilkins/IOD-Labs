const { Add, Multiply, Subtract, Divide } = require('./operators')

test('add 1 and 2 to get 3', () => {
    expect(Add(1, 2)).toBe(3);
});

test('multiply 11 and 2 to get 22', () => {
    expect(Multiply(11, 2)).toBe(22);
});

test('subtract 15 and 2 to get 12', () => {
    expect(Subtract(15, 2)).toBe(13);
});

test('add 22 and 2 to get 11', () => {
    expect(Divide(22, 2)).toBe(11);
});
