import express, { Request, Response } from "express";
const app = express();

console.clear();

app.use(express.json());
//Funcionalidades
//Métodos/Verbos HTTP -> POST e GET ...

app.get("/", (request: Request, response: Response) => {
  response.send("Hello World com ts-node-dev teste 3!");
});

app.get("/jogo/listar", (request: Request, response: Response) => {
  const jogo = {
    titulo: "CS",
    plataforma: "PC",
    valor: 50.99,
    genero: "FPS",
  };
  response.json(jogo);
});

app.get("/jogo/listar/:param1/:param2/:param3", (request: Request, response: Response) => {
  console.log(request.params);
  const { param1, param2 } = request.params;
  const jogo = {
    titulo: "CS GO",
    plataforma: "PC",
    valor: 50.99,
    genero: "FPS",
    param1,
    param2,
  };
  response.json(jogo);
});

app.post("/jogo/cadastrar", (request: Request, response: Response) => {
  const objeto = request.body;
  console.log(objeto);
  response.json(objeto);
});

app.listen(3000, () => {
  console.log("O servidor está rodando...");
});
