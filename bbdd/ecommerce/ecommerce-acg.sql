CREATE DATABASE  IF NOT EXISTS `ecommerce-acg` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `ecommerce-acg`;
-- MariaDB dump 10.19  Distrib 10.9.3-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: ecommerce-acg
-- ------------------------------------------------------
-- Server version	10.9.3-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carateristica`
--

DROP TABLE IF EXISTS `carateristica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carateristica` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `producto` int(10) unsigned NOT NULL,
  `titulo` varchar(128) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `orden` int(10) unsigned NOT NULL,
  `tsAlta` timestamp NULL DEFAULT current_timestamp(),
  `tsMod` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_caracteristica_producto_idx` (`producto`),
  CONSTRAINT `fk_caracteristica_producto` FOREIGN KEY (`producto`) REFERENCES `producto` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carateristica`
--

LOCK TABLES `carateristica` WRITE;
/*!40000 ALTER TABLE `carateristica` DISABLE KEYS */;
/*!40000 ALTER TABLE `carateristica` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carrito`
--

DROP TABLE IF EXISTS `carrito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carrito` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `token` varchar(64) DEFAULT NULL,
  `usuario` int(10) unsigned DEFAULT NULL,
  `cupon` int(10) unsigned DEFAULT NULL,
  `tsAlta` timestamp NULL DEFAULT current_timestamp(),
  `tsMod` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_carrito_usuario_idx` (`usuario`),
  KEY `fk_carrito_cupon_idx` (`cupon`),
  CONSTRAINT `fk_carrito_cupon` FOREIGN KEY (`cupon`) REFERENCES `cupon` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_carrito_usuario` FOREIGN KEY (`usuario`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrito`
--

LOCK TABLES `carrito` WRITE;
/*!40000 ALTER TABLE `carrito` DISABLE KEYS */;
/*!40000 ALTER TABLE `carrito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carritodetalle`
--

DROP TABLE IF EXISTS `carritodetalle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carritodetalle` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `carrito` int(10) unsigned NOT NULL,
  `producto` int(10) unsigned NOT NULL,
  `cantidad` decimal(15,2) NOT NULL,
  `precio` decimal(15,2) NOT NULL,
  `tsAlta` timestamp NULL DEFAULT current_timestamp(),
  `tsMod` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_carritodetalle` (`carrito`,`producto`),
  KEY `fk_carritodetalle_carrito_idx` (`carrito`),
  KEY `fk_carritodetalle_producto_idx` (`producto`),
  CONSTRAINT `fk_carritodetalle_carrito` FOREIGN KEY (`carrito`) REFERENCES `carrito` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_carritodetalle_producto` FOREIGN KEY (`producto`) REFERENCES `producto` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carritodetalle`
--

LOCK TABLES `carritodetalle` WRITE;
/*!40000 ALTER TABLE `carritodetalle` DISABLE KEYS */;
/*!40000 ALTER TABLE `carritodetalle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categoria` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `categoria` int(10) unsigned DEFAULT NULL,
  `tsAlta` timestamp NULL DEFAULT current_timestamp(),
  `tsMod` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cupon`
--

DROP TABLE IF EXISTS `cupon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cupon` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `codigo` varchar(16) NOT NULL,
  `fechaIni` date NOT NULL,
  `fechaFin` date NOT NULL,
  `tipo` enum('fijo','porcentaje') NOT NULL,
  `precio` decimal(15,2) NOT NULL,
  `usuario` int(10) unsigned DEFAULT NULL,
  `tsAlta` timestamp NULL DEFAULT current_timestamp(),
  `tsMod` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_cupon_usuario_idx` (`usuario`),
  CONSTRAINT `fk_cupon_usuario` FOREIGN KEY (`usuario`) REFERENCES `usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cupon`
--

LOCK TABLES `cupon` WRITE;
/*!40000 ALTER TABLE `cupon` DISABLE KEYS */;
/*!40000 ALTER TABLE `cupon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `direccion`
--

DROP TABLE IF EXISTS `direccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `direccion` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `usuario` int(10) unsigned NOT NULL,
  `domicilio` varchar(100) NOT NULL,
  `restodom` varchar(20) DEFAULT NULL,
  `poblacion` varchar(45) NOT NULL,
  `provincia` varchar(25) NOT NULL,
  `pais` varchar(45) NOT NULL,
  `cpostal` varchar(10) NOT NULL,
  `principal` tinyint(4) NOT NULL,
  `tsAlta` timestamp NULL DEFAULT current_timestamp(),
  `tsMod` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_direccion_usuario_idx` (`usuario`),
  CONSTRAINT `fk_direccion_usuario` FOREIGN KEY (`usuario`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `direccion`
--

LOCK TABLES `direccion` WRITE;
/*!40000 ALTER TABLE `direccion` DISABLE KEYS */;
/*!40000 ALTER TABLE `direccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `especificacion`
--

DROP TABLE IF EXISTS `especificacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `especificacion` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `producto` int(10) unsigned NOT NULL,
  `clave` varchar(128) NOT NULL,
  `valor` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `orden` int(10) unsigned NOT NULL,
  `tsAlta` timestamp NULL DEFAULT current_timestamp(),
  `tsMod` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_especificacion_producto_idx` (`producto`),
  CONSTRAINT `fk_especificacion_producto` FOREIGN KEY (`producto`) REFERENCES `producto` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `especificacion`
--

LOCK TABLES `especificacion` WRITE;
/*!40000 ALTER TABLE `especificacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `especificacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagen`
--

DROP TABLE IF EXISTS `imagen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `imagen` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `producto` int(10) unsigned NOT NULL,
  `tipo` enum('s','m','l') NOT NULL COMMENT 'short, medium, larga ',
  `path` varchar(255) NOT NULL,
  `orden` int(11) NOT NULL,
  `tsAlta` timestamp NULL DEFAULT current_timestamp(),
  `tsMod` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_imagen_producto_idx` (`producto`),
  CONSTRAINT `fk_imagen_producto` FOREIGN KEY (`producto`) REFERENCES `producto` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagen`
--

LOCK TABLES `imagen` WRITE;
/*!40000 ALTER TABLE `imagen` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `opinion`
--

DROP TABLE IF EXISTS `opinion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `opinion` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `pedidodetalle` int(10) unsigned NOT NULL,
  `rating` tinyint(4) NOT NULL,
  `opinion` text DEFAULT NULL,
  `tsAlta` timestamp NULL DEFAULT current_timestamp(),
  `tsMod` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_opinion_pedidodetalle_idx` (`pedidodetalle`),
  CONSTRAINT `fk_opinion_pedidodetalle` FOREIGN KEY (`pedidodetalle`) REFERENCES `pedidodetalle` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `opinion`
--

LOCK TABLES `opinion` WRITE;
/*!40000 ALTER TABLE `opinion` DISABLE KEYS */;
/*!40000 ALTER TABLE `opinion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido`
--

DROP TABLE IF EXISTS `pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pedido` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `usuario` int(10) unsigned NOT NULL,
  `total` decimal(15,2) NOT NULL,
  `fecha` date NOT NULL,
  `cupon` int(10) unsigned DEFAULT NULL,
  `tarjeta` int(10) unsigned DEFAULT NULL,
  `direccion` int(10) unsigned DEFAULT NULL,
  `estado` enum('vuelo','creado','pagado') NOT NULL,
  `envio` decimal(15,2) DEFAULT NULL COMMENT 'coste del transporte',
  `tsAlta` timestamp NULL DEFAULT current_timestamp(),
  `tsMod` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_pedido_usuario_idx` (`usuario`),
  KEY `fk_pedido_tarjeta_idx` (`tarjeta`),
  KEY `fk_pedido_cupon_idx` (`cupon`),
  KEY `fk_pedido_direccion_idx` (`direccion`),
  CONSTRAINT `fk_pedido_cupon` FOREIGN KEY (`cupon`) REFERENCES `cupon` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedido_direccion` FOREIGN KEY (`direccion`) REFERENCES `direccion` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedido_tarjeta` FOREIGN KEY (`tarjeta`) REFERENCES `tarjeta` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedido_usuario` FOREIGN KEY (`usuario`) REFERENCES `usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='falta por crear la fk de cupon';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido`
--

LOCK TABLES `pedido` WRITE;
/*!40000 ALTER TABLE `pedido` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidodetalle`
--

DROP TABLE IF EXISTS `pedidodetalle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pedidodetalle` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `pedido` int(10) unsigned NOT NULL,
  `producto` int(10) unsigned NOT NULL,
  `cantidad` decimal(15,2) NOT NULL,
  `precio` decimal(15,2) NOT NULL,
  `tsAlta` timestamp NULL DEFAULT current_timestamp(),
  `tsMod` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_pedidodetalle_pedido_idx` (`pedido`),
  KEY `fk_pedidodetalle_producto_idx` (`producto`),
  KEY `uk_pedidodetalle` (`pedido`,`producto`),
  CONSTRAINT `fk_pedidodetalle_pedido` FOREIGN KEY (`pedido`) REFERENCES `pedido` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_pedidodetalle_producto` FOREIGN KEY (`producto`) REFERENCES `producto` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidodetalle`
--

LOCK TABLES `pedidodetalle` WRITE;
/*!40000 ALTER TABLE `pedidodetalle` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedidodetalle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `producto` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `precio` decimal(15,2) NOT NULL,
  `stock` decimal(15,2) NOT NULL,
  `sumRating` int(10) unsigned NOT NULL,
  `numOpiniones` int(10) unsigned NOT NULL,
  `categoria` int(10) unsigned NOT NULL,
  `tsAlta` timestamp NULL DEFAULT current_timestamp(),
  `tsMod` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_producto_categoria_idx` (`categoria`),
  CONSTRAINT `fk_producto_categoria` FOREIGN KEY (`categoria`) REFERENCES `categoria` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjeta`
--

DROP TABLE IF EXISTS `tarjeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjeta` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `usuario` int(11) unsigned NOT NULL,
  `tarjeta` char(16) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `caducidad` char(4) NOT NULL,
  `baja` tinyint(3) unsigned NOT NULL,
  `fechaBaja` date DEFAULT NULL,
  `tsAlta` timestamp NOT NULL DEFAULT current_timestamp(),
  `tsMod` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_tarjeta_usuario_idx` (`usuario`),
  CONSTRAINT `fk_tarjeta_usuario` FOREIGN KEY (`usuario`) REFERENCES `usuario` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta`
--

LOCK TABLES `tarjeta` WRITE;
/*!40000 ALTER TABLE `tarjeta` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarjeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(128) NOT NULL,
  `password` varchar(64) NOT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `nombre` varchar(25) DEFAULT NULL,
  `apellidos` varchar(50) DEFAULT NULL,
  `tsAlta` timestamp NULL DEFAULT current_timestamp(),
  `tsMod` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-05 18:34:28
