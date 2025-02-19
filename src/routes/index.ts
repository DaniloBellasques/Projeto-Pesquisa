import { Router } from 'express';

import { sequelize } from '../instances/mysql';
import * as usuarioController from '../controllers/usuarioController';
import '../models/associacao'; // Garante que as associações sejam carregadas antes do sync
import { Etapa1 } from '../models/Etapa1';

sequelize.sync({ alter: true }) // `force: true` recria as tabelas, cuidado!
    .then(() => console.log('Banco de dados sincronizado com sucesso!'))
    .catch((error) => console.error('Erro ao sincronizar o banco de dados:', error));

const router = Router();

// Rotas das etapas
router.get('/etapa1', usuarioController.etapa1);
router.post('/etapa1', usuarioController.etapa1Post);

router.get('/etapa2', usuarioController.etapa2);
router.post('/etapa2', usuarioController.etapa2Post);

router.get('/etapa3', usuarioController.etapa3);
router.post('/etapa3', usuarioController.etapa3Post);

router.get('/etapa4', usuarioController.etapa4);
router.post('/etapa4', usuarioController.etapa4Post);

router.get('/etapa5', usuarioController.etapa5);
router.post('/etapa5', usuarioController.etapa5Post);

router.get('/etapa6', usuarioController.etapa6);
router.post('/etapa6', usuarioController.etapa6Post);

router.get('/etapa7', usuarioController.etapa7);

// Rota para submissão final
router.post('/submit', usuarioController.submit);

// Rota de pesquisa
router.get('/pesquisa', usuarioController.pesquisarUsuario);

router.get('/editar/:id', usuarioController.editarUsuario);

// Rota para processar a edição e salvar no banco
router.post('/editar/:id', usuarioController.salvarEdicaoUsuario);




export default router;
