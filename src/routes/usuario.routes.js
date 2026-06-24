import { Router } from "express";
import usuariosController from "../controllers/Usuario.controller.js";

const router = Router();

router.get("/usuarios", usuariosController.listarTodos);
router.get("/usuarios/:id", usuariosController.listarUsuarioPorId);
router.post("/usuarios", usuariosController.criar);
router.patch("/usuarios/:id", usuariosController.atualizarUsuarioPorId)
router.delete('/usuarios/:id', usuariosController.removerUsuario)

export default router;
