
// 1)
const uppercase = require('./js.js');
test('Verifica se retornar letras maiusculas', (done) => {
    uppercase('laura', (resultado) => {
        try {
            expect(resultado).toMatch('LAURA');
            done();
        } catch (error) {
            done(error);
        }
    });
});

// 2)
const getUserName = require('./js.js');

describe('Simula uma chamada ao banco de dados para buscar usuários', () => {
    it('Caso em que o usuário é encontrado', () => (
        getUserName(1).then((resultado) => expect(resultado).toEqual('Mark'))
    ))
    it('Caso em que o usuário não é encontrado', () => {
        return getUserName(3).catch((error) =>
           expect(error.message).toMatch('User with 3 not found.'))
})
});

describe('Simula uma chamada ao banco de dados para buscar usuários', () => {
    it('Caso em que o usuário é encontrado', async () => {
        await getUserName(1).then((resultado) => expect(resultado).toEqual('Mark'))
    })
    it('Caso em que o usuário não é encontrado', async () => {
        try {
            await getUserName(3);
        } catch (error) {
            expect(error.message).toEqual('User with 3 not found.');
        };
    });
});
/*
// 4)
const getRepos = require('./js.js');
describe('Faz uma busca no GitHub de um usuário, de acordo com a URL, seus repositórios, e retorna uma lista como resultado.', () => {
    test('verifique que os repositórios sd-01-week4-5-project-todo-list e sd-01-week4-5-project-meme-generator', () => {
        return getRepos('https://api.github.com/orgs/tryber/repos')
            .then((resultado) => {
                expect(resultado)
                    .toContain('sd-01-week4-5-project-todo-list');
                expect(resultado)
                    .toContain('sd-01-week4-5-project-meme-generator');
            })
    })
})
*/
const { TestWatcher } = require("jest")

// 5)
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});