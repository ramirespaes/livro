import express from 'express';
import BibliotecaController from '../controllers/biblioteca_controller.js';

const bibliotecaRouter = express.Router();


bibliotecaRouter.post('/livros', BibliotecaController.criar);
bibliotecaRouter.get('/livros', BibliotecaController.listar);
bibliotecaRouter.get('/livros/:id', BibliotecaController.buscarPorId);
bibliotecaRouter.put('/livros/:id', BibliotecaController.atualizar);
bibliotecaRouter.delete('/livros/:id', BibliotecaController.deletar);

bibliotecaRouter.put('/livros/:id/reservar', BibliotecaController.reservar);
bibliotecaRouter.put('/livros/:id/cancelarReserva', BibliotecaController.cancelarReserva);

export default bibliotecaRouter;
console.log("porta 3000 - biblioteca_routes");