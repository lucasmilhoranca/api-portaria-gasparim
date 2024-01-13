import { Router } from 'express';
import pessoaRoutes from './pessoa.route.js';
import funcionarioRoutes from './funcionario.route.js';
import caminhoneiroRoutes from './caminhoneiro.route.js';
import visitanteRoutes from './visitante.route.js';
import authRoutes from './auth.route.js';
import usuarioRoutes from './usuario.route.js';
import controleRoutes from './controle.route.js';
import swaggerRoutes from './swagger.route.js';

const router = Router();

router.use('/p', pessoaRoutes);
router.use('/f', funcionarioRoutes);
router.use('/c', caminhoneiroRoutes);
router.use('/v', visitanteRoutes);
router.use('/auth', authRoutes);
router.use('/user', usuarioRoutes);
router.use('/control', controleRoutes);
router.use('/api-docs', swaggerRoutes);

export default router;