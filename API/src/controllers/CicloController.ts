import { Request, Response } from "express";
import CicloSchema from "../models/CicloSchema";

class CicloController {
  async listar(request: Request, response: Response) {
    const ciclos = await CicloSchema.find();
    response.status(200).json(ciclos);
  }

  async buscarPorId(request: Request, response: Response) {
    const { id } = request.params;
    const ciclo = await CicloSchema.find({ _id: id });
    response.status(200).json(ciclo);
  }

  async cadastrar(request: Request, response: Response) {
    try {
      const novoCiclo = await CicloSchema.create(request.body);
      response.status(201).json({
        objeto: novoCiclo,
        msg: "Ciclo cadastrado com sucesso",
        erro: false
      });
    } catch (error) {
      response.status(400).json({
        objeto: error,
        msg: "Falha na validação",
        erro: true
      });
    }
  }
}

export { CicloController };
