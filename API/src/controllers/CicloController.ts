import { Request, Response } from "express";
import CicloSchema from "../models/CicloSchema";

class CicloController {
  listar(request: Request, response: Response) {
    const jogo = {
      titulo: "CS",
      plataforma: "PC",
      valor: 50.99,
      genero: "FPS",
    };
    response.json(jogo);
  }

  buscarPorId(request: Request, response: Response) {
    console.log(request.params);
    const { param1, param2, param3 } = request.params;
    const jogo = {
      titulo: "CS GO",
      plataforma: "PC",
      valor: 50.99,
      genero: "FPS",
      param1,
      param2,
      param3,
    };
    response.json(jogo);
  }

  cadastrar(request: Request, response: Response) {
    const objeto = request.body;
    CicloSchema.create(objeto);
    response.json(objeto);
  }
}

export { CicloController };
