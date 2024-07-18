import Biblioteca from '../models/biblioteca_model.js';

const BibliotecaController = {
  criar: async (req, res) => {
    try {
      const livro = await Biblioteca.create(req.body);
      res.status(201).json(livro);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  listar: async (req, res) => {
    try {
      const livros = await Biblioteca.findAll();
      res.status(200).json(livros);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  buscarPorId: async (req, res) => {
    try {
      const livro = await Biblioteca.findByPk(req.params.id);
      if (livro) {
        res.status(200).json(livro);
      } else {
        res.status(404).json({ error: 'Livro não localizado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  atualizar: async (req, res) => {
    try {
      const livro = await Biblioteca.findByPk(req.params.id);
      if (livro) {
        await livro.update(req.body);
        res.status(200).json(livro);
      } else {
        res.status(404).json({ error: 'Livro não localizado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deletar: async (req, res) => {
    try {
      const livro = await Biblioteca.findByPk(req.params.id);
      if (livro) {
        await livro.destroy();
        res.status(200).json({ message: 'Livro deletado' });
      } else {
        res.status(404).json({ error: 'Livro não localizado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  reservar: async (req, res) => {
    try {
      const livro = await Biblioteca.findByPk(req.params.id);
      if (livro) {
        if (!livro.reservado) {
          await livro.update({
            reservado: true,
            id_reserva: req.body.id_reserva,
            data_inicio_reserva: req.body.data_inicio_reserva,
            data_termino_reserva: req.body.data_termino_reserva
          });
          res.status(200).json({ message: 'Livro reservado com sucesso' });
        } else {
          res.status(400).json({ error: 'Livro já está reservado' });
        }
      } else {
        res.status(404).json({ error: 'Livro não localizado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  cancelarReserva: async (req, res) => {
    try {
      const livro = await Biblioteca.findByPk(req.params.id);
      if (livro) {
        if (livro.reservado) {
          await livro.update({
            reservado: false,
            id_reserva: null,
            data_inicio_reserva: null,
            data_termino_reserva: null
          });
          res.status(200).json({ message: 'Reserva cancelada com sucesso' });
        } else {
          res.status(400).json({ error: 'Livro não está reservado' });
        }
      } else {
        res.status(404).json({ error: 'Livro não localizado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export default BibliotecaController;
console.log("porta 3000 - biblioteca_controller");