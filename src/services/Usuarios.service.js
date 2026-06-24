import { where } from "sequelize";
import Usuario from "../models/Usuarios.js";

class UsuariosService {
  async criarUsuario(
    nome,
    email,
    descricao,
    contato1,
    contato2,
    tipo,
    cep,
    logradouro,
    numero,
    bairro,
    cidade,
    estado,
  ) {
    if (
      !nome ||
      !email ||
      !descricao ||
      !contato1 ||
      !tipo ||
      !cep ||
      !logradouro ||
      !numero ||
      !bairro ||
      !cidade ||
      !estado
    ) {
      throw new Error("Todos os campos são obrigatórios.");
    }

    const usuarioExistente = await Usuario.findOne({ where: { email } });

    if (usuarioExistente) {
      throw new Error("E-mail já em uso.");
    }

    const novoUsuario = await Usuario.create({
      nome,
      email,
      descricao,
      contato1,
      contato2,
      tipo,
      cep,
      logradouro,
      numero,
      bairro,
      cidade,
      estado,
    });

    return novoUsuario;
  }

  async listarUsuarios() {
    const usuarios = await Usuario.findAll();
    return usuarios;
  }

  async listarUsuarioId(id) {
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      throw new Error("Usuário não encontrado.");
    }
    return usuario;
  }

  async atualizarUsuario(
    id,
    nome,
    email,
    descricao,
    contato1,
    contato2,
    tipo,
    cep,
    logradouro,
    numero,
    bairro,
    cidade,
    estado,
  ) {
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      throw new Error("Usuário não encontrado.");
    }

    await usuario.update({
      nome,
      email,
      descricao,
      contato1,
      contato2,
      tipo,
      cep,
      logradouro,
      numero,
      bairro,
      cidade,
      estado,
    });

    return usuario;
  }

  async removerUsuario(id) {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      throw new Error("Usuário não encontrado.");
    }
    await usuario.destroy();
  }
}

export default new UsuariosService();
