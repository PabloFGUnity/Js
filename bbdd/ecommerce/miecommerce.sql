-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ecommerce
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ecommerce
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ecommerce` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `ecommerce` ;

-- -----------------------------------------------------
-- Table `ecommerce`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`cliente` (
  `id` INT UNSIGNED NOT NULL,
  `nombre` VARCHAR(30) NOT NULL,
  `direccion` VARCHAR(30) NOT NULL,
  `provincia` VARCHAR(30) NOT NULL,
  `dni` CHAR(9) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `ecommerce`.`producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`producto` (
  `id` INT UNSIGNED NOT NULL,
  `titulo` VARCHAR(30) NOT NULL,
  `precio` DECIMAL(2,0) NOT NULL,
  `idProducto` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_id_prestamo` (`idProducto` ASC) VISIBLE,
  CONSTRAINT `fk_id_producto`
    FOREIGN KEY (`idProducto`)
    REFERENCES `ecommerce`.`cliente` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
