import express from "express";
import { Request, Response } from "express";
const app = express();

console.clear();

//Funcionalidades
//Métodos/Verbos HTTP -> POST e GET ...

app.get("/", (request: Request, response: Response) => {
  response.send("Hello World com ts-node-dev teste 2!");
});

app.listen(3000, () => {
  console.log("O servidor está rodando...");
});