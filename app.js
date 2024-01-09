import express from "express";
import connectDB from "./src/database/db.js";
import dotenv from "dotenv";
const app = express();

import pessoaRoutes from "./src/routes/pessoa.route.js";
import visitanteRoutes from "./src/routes/visitante.route.js";
import funcionarioRoutes from "./src/routes/funcionario.route.js";
import caminhoneiroRoutes from "./src/routes/caminhoneiro.route.js";
import authRoutes from "./src/routes/auth.route.js";
import usuarioRoutes from "./src/routes/usuario.route.js";
import controleRoutes from "./src/routes/controle.route.js";
import swaggerRoutes from "./src/routes/swagger.route.js";


dotenv.config();
const port = 3000;

connectDB.connectRedis()
connectDB.connectMongo();

app.use(express.json());
app.use('/p', pessoaRoutes);
app.use('/f', funcionarioRoutes);
app.use('/c', caminhoneiroRoutes);
app.use('/v', visitanteRoutes);
app.use('/auth', authRoutes);
app.use('/user', usuarioRoutes);
app.use('/control', controleRoutes);
app.use('/api-docs', swaggerRoutes);


app.listen(port, () => console.log(`Servidor rodando http://localhost:${port}`));