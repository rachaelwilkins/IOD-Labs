const request = require('supertest');
const calculator = require('./calculator')

describe('Calculator Routes', () => {

 let number1 = Math.floor(Math.random() * 1_000_000);
 let number2 = Math.floor(Math.random() * 1_000_000);

test('GET /calculator/Add => sum of numbers', () => {
    return request(app)
   .get(`/calculator/add?num1=${number1}&num2=${number2}`)
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
        expect(response.body).toEqual({
        result: (number1 + number2)
        });
    });    
});
}); 

test('GET /calculator/Multiply => sum of numbers', () => {
    return request(app)
   .get(`/calculator/add?num1=${number1}&num2=${number2}`)
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
        expect(response.body).toEqual({
        result: (number1 * number2)
        });
    });    
});

test('GET /calculator/Subtract => sum of numbers', () => {
    return request(app)
   .get(`/calculator/subtract?num1=${number1}&num2=${number2}`)
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
        expect(response.body).toEqual({
        result: (number1 - number2)
        });
    });    
});

test('GET /calculator/Divide => sum of numbers', () => {
    return request(app)
   .get(`/calculator/divide?num1=${number1}&num2=${number2}`)
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
        expect(response.body).toEqual({
        result: (number1 / number2)
        });
    });    
});