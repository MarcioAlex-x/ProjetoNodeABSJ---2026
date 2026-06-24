import express from "express";
import cors from 'cors'

import sequelize from "./config/database.js";
import usuarioRouter from "./src/routes/usuario.routes.js";

const app = express();
const port = 3000;

app.use(cors())
app.use(express.json());
app.use(usuarioRouter);

//CRUD
// Create (Cria um objeto na base de dados)
// Read (Lê os dados de uma base de dados)
// Update (Atualiza os dados de uma base de dados)
// Delete (Apaga os dados em uma base de dados)

app.get("/", (req, res) => {
  res.send("Aplicação NodeJS");
});

sequelize.sync({alter: false}).then(() => {
  console.log("Tabelas sincronizadas no banco de dados com sucesso.");
  app.listen(port, () => {
    console.log(`Aplicacao rodando em http://localhost:${port}`);
  });
}).catch((err)=>{
  console.error('Erro ao conectar ao banco de dados.')
});
