import { Router } from "express";
import { CicloController } from "../controllers/CicloController"

const router = Router();
const cicloController = new CicloController();

//Funcionalidades
//Métodos/Verbos HTTP -> POST e GET ...
router.get("/ciclo/listar", cicloController.listar);
router.get("/ciclo/listar/:id", cicloController.buscarPorId);
router.post("/ciclo/cadastrar", cicloController.cadastrar);

export { router };
