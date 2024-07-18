USE biblioteca;

CREATE TABLE Biblioteca (
  id INT NOT NULL AUTO_INCREMENT,
  isbn VARCHAR(13) NOT NULL UNIQUE,
  titulo VARCHAR(100) NOT NULL,
  autor VARCHAR(100) NOT NULL,
  data DATE NOT NULL,
  reservado BOOLEAN DEFAULT FALSE,
  id_reserva INT NULL,
  data_inicio_reserva DATE NULL,
  data_termino_reserva DATE NULL,
  PRIMARY KEY (id)
);
