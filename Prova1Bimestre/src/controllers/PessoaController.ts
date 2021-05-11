import { Request, Response } from "express";
import PessoaSchema from "../models/PessoaSchema";

class PessoaController {
  async listar(request: Request, response: Response) {
    response.status(200).json(await PessoaSchema.find({}));
  }

  async buscarPorCpf(request: Request, response: Response) {
    const { cpf } = request.params;
    response.status(200).json(await PessoaSchema.findOne({ cpf }));
  }

  async cadastrar(request: Request, response: Response) {
    try {
      const { cpf } = request.body;
      if (await PessoaSchema.exists({ cpf })) {
        response.status(409).json({ msg: "Essa pessoa já existe!" });
      } else {
        const novaPessoa = await PessoaSchema.create(request.body);
        response.status(201).json(novaPessoa);
      }
    } catch (error) {
      response.status(400).json({
        objeto: error,
        msg: "Falha na validação",
        erro: true,
      });
    }
  }

  async deletar(request: Request, response: Response) {
    const { cpf } = request.params;
    response.status(200).json(await PessoaSchema.findOneAndDelete({ cpf }));
  }

  async alterar(request: Request, response: Response) {
    const { cpf } = request.body;
    response.status(200).json(await PessoaSchema.findOneAndUpdate({ cpf }, request.body));
  }
}

export { PessoaController };
