const service = require('./service');
jest.mock("./service");

test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
  service.randomNumber = jest.fn().mockReturnValue(27);

  expect(service.randomNumber()).toBe(27);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
});

test("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
  service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(service.randomNumber(4, 2)).toBe(2);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber).toHaveBeenCalledWith(4, 2);
});

describe("testando implementações", () => {
  test("mockando função para receber 3 parâmetros e retornar sua multiplicação", () => {
    service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(service.randomNumber(2, 2, 2)).toBe(8);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(2, 2, 2);
  });

  test("mockando função que recebe um parâmetro e retorna seu dobro", () => {
    service.randomNumber.mockReset();
    service.randomNumber = jest.fn().mockImplementation((a) => a * 2);

    expect(service.randomNumber(2)).toBe(4);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(2);
  });
});

describe("testando implementações", () => {
  test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
    service.firstFunction.mockImplementation(a => a.toLowerCase());

    expect(service.firstFunction("LAURA")).toBe("laura");
    expect(service.firstFunction).toHaveBeenCalled();
    expect(service.firstFunction).toHaveBeenCalledTimes(1);
    expect(service.firstFunction).toHaveBeenCalledWith("LAURA");

    //service.firstFunction.mockRestore();

   // expect(service.firstFunction("lowercase")).toBe("LOWERCASE");
  });

  test("mockando função que recebe um parâmetro e retorna a última letra", () => {
    service.secondFunction.mockImplementation(a => a.charAt(a.length - 1));

    expect(service.secondFunction("letter")).toBe("r");
    expect(service.secondFunction).toHaveBeenCalled();
    expect(service.secondFunction).toHaveBeenCalledTimes(1);
    expect(service.secondFunction).toHaveBeenCalledWith("letter");
  });

  test("mockando função que recebe 3 parâmetros e os concatena", () => {
    service.thirdFunction.mockImplementation((a, b, c) => a.concat(b, c));

    expect(service.thirdFunction("tr", "y", "be")).toBe("trybe");
    expect(service.thirdFunction).toHaveBeenCalled();
    expect(service.thirdFunction).toHaveBeenCalledTimes(1);
    expect(service.thirdFunction).toHaveBeenCalledWith("tr", "y", "be");
  });
});

describe("testando a requisição", () => {
  service.fetchDog = jest.fn();
  afterEach(service.fetchDog.mockReset);

  test("testando requisição caso a promisse resolva", async () => {
    service.fetchDog.mockResolvedValue("request sucess");

    service.fetchDog();
    expect(service.fetchDog).toHaveBeenCalled();
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
    await expect(service.fetchDog()).resolves.toBe("request sucess");
    expect(service.fetchDog).toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso a promisse seja rejeitada", async () => {
    service.fetchDog.mockRejectedValue("request failed");

    expect(service.fetchDog).toHaveBeenCalledTimes(0);
    await expect(service.fetchDog()).rejects.toMatch("request failed");
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
  });
});