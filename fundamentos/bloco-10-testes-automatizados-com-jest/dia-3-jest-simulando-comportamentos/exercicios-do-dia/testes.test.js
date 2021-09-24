const { TestWatcher } = require('jest');
let numeroAleatorio = require('./js.js');
// 1)
test('Testa retorno da função, se foi chamada e quantas vezes foi chamada', () => {
    numeroAleatorio = jest.fn().mockReturnValue(10);

    expect(numeroAleatorio()).toBe(10);
    expect(numeroAleatorio).toHaveBeenCalled();
    expect(numeroAleatorio).toHaveBeenCalledTimes(1);
});

// 2)
test('testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros', () => {
    numeroAleatorio = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(numeroAleatorio(10, 5)).toBe(2);
});

// 3)
test('mockando função para receber 3 parâmetros e retornar sua multiplicação', () => {
    numeroAleatorio = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(numeroAleatorio(2, 2, 2)).toBe(8);
})
test('mockando função para receber um parâmetro e retornar seu dobro', () => {
    numeroAleatorio = jest.fn().mockImplementation((a) => a * 2);

    expect(numeroAleatorio(3)).toBe(6);
})

// 4)
let caixaAlta = require('./js.js');
let primeiraLetra = require('./js.js');
let concatena = require('./js.js');

describe('Utiliza as funçoes caixaAlta, primeiraLetra e concatena', () => {
    test('Nova implementação para a função aixaAlta, ela agora deve retornar a string em caixa baixa', () => {
        caixaAlta = jest.fn().mockImplementation((palavra) => palavra.toLowerCase());

        expect(caixaAlta('laura')).toMatch('laura');
    })

    test('A nova implementação deve retornar a última letra de uma string', () => {
        primeiraLetra = jest.fn().mockImplementation((palavra) => palavra.charAt(palavra.length - 1));

        expect(primeiraLetra('laura')).toMatch('a');
    })

    test('A terceira deve receber três strings e concatená-las', () => {
        contatena = jest.fn().mockImplementation((a, b, c) => a.concatena(b, c));

        expect(concatena('laura')).toMatch('a');
    })
})