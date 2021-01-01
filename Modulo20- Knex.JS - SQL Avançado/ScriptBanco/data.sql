create database knexjs;
use knexjs;

select * from games;
select * from estudios;

CREATE TABLE `knexjs`.`estudios` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL,
  `game_id` INT NULL,
  CONSTRAINT `game_id`    FOREIGN KEY (`game_id`)    REFERENCES `knexjs`.`games` (`id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8

-- TABELA DE RELACIONAMENTO MUITOS PARA MUITOS
CREATE TABLE `knexjs`.`estudio_games` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `id_game` INT NULL,
  `id_estudio` INT NULL,
  CONSTRAINT `fk_game`
    FOREIGN KEY (`id_game`)
    REFERENCES `knexjs`.`games` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_estudio`
    FOREIGN KEY (`id_estudio`)
    REFERENCES `knexjs`.`estudios` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);