import usuariosService from "../services/usuarios.service.js";

class UsuarioController {
  async criar(req, res) {
    try {
      const {
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
      } = req.body;

      const novoUsuario = await usuariosService.criarUsuario(
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
      );

      return res.status(201).json({
        mensagem: "Usuário criado com sucesso.",
        usuario: {
          id: novoUsuario.id,
          nome: novoUsuario.nome,
          email: novoUsuario.email,
          descricao: novoUsuario.descricao,
        },
      });
    } catch (err) {
      return res.status(400).json({
        erro: err.message,
      });
    }
  }

  async listarTodos(req, res) {
    try {
      const usuarios = await usuariosService.listarUsuarios();
      return res.status(200).json(usuarios);
    } catch (err) {
      return res.status(404).json({ erro: err.message });
    }
  }

  async listarUsuarioPorId(req, res) {
    try {
      const { id } = req.params;
      const usuario = await usuariosService.listarUsuarioId(id);
      return res.status(200).json({ usuario });
    } catch (err) {
      return res.status(404).json({ erro: err.message });
    }
  }

  async atualizarUsuarioPorId(req, res) {
    try {
      const { id } = req.params;
      const {
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
      } = req.body;
      
      const usuarioAtualizado = await usuariosService.atualizarUsuario(
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
      );
      return res.status(200).json({ usuarioAtualizado });
    } catch (err) {
      return res.status(400).json({ erro: err.message });
    }
  }

  async removerUsuario(req, res) {
    try {
      const { id } = req.params;
      await usuariosService.removerUsuario(id);
      return res
        .status(200)
        .json({ messagem: "Usuário removido com sucesso." });
    } catch (err) {
      return res.status(404).json({ erro: err.message });
    }
  }
}

export default new UsuarioController();
