-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versione server:              10.4.18-MariaDB - mariadb.org binary distribution
-- S.O. server:                  Win64
-- HeidiSQL Versione:            11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dump della struttura del database charternautico
CREATE DATABASE IF NOT EXISTS `charternautico` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `charternautico`;

-- Dump della struttura di tabella charternautico.acque
CREATE TABLE IF NOT EXISTS `acque` (
  `nomeZona` enum('Mar Tirreno','Costiera Amalfitana','Delta del Po','Mar Ligure','Parco delle cinque terre','Mar Ionio','Costa Smeralda') NOT NULL,
  `profondita` double DEFAULT NULL,
  PRIMARY KEY (`nomeZona`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dump dei dati della tabella charternautico.acque: ~7 rows (circa)
/*!40000 ALTER TABLE `acque` DISABLE KEYS */;
INSERT INTO `acque` (`nomeZona`, `profondita`) VALUES
	('Mar Tirreno', 1000),
	('Costiera Amalfitana', 400),
	('Delta del Po', 200),
	('Mar Ligure', 600),
	('Parco delle cinque terre', 300),
	('Mar Ionio', 1800),
	('Costa Smeralda', 100);
/*!40000 ALTER TABLE `acque` ENABLE KEYS */;

-- Dump della struttura di tabella charternautico.amministrare
CREATE TABLE IF NOT EXISTS `amministrare` (
  `iDAmministrare` tinyint(4) NOT NULL AUTO_INCREMENT,
  `iDAmministratore` tinyint(4) DEFAULT NULL,
  `iDPorto` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`iDAmministrare`),
  KEY `iDAmministratore` (`iDAmministratore`),
  KEY `iDPorto` (`iDPorto`),
  CONSTRAINT `amministrare_ibfk_1` FOREIGN KEY (`iDAmministratore`) REFERENCES `amministratori` (`iDAmministratore`),
  CONSTRAINT `amministrare_ibfk_2` FOREIGN KEY (`iDPorto`) REFERENCES `porti` (`iDPorto`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- Dump dei dati della tabella charternautico.amministrare: ~7 rows (circa)
/*!40000 ALTER TABLE `amministrare` DISABLE KEYS */;
INSERT INTO `amministrare` (`iDAmministrare`, `iDAmministratore`, `iDPorto`) VALUES
	(1, 2, 1),
	(2, 3, 1),
	(3, 4, 5),
	(4, 3, 6),
	(5, 6, 2),
	(6, 1, 3),
	(7, 5, 4);
/*!40000 ALTER TABLE `amministrare` ENABLE KEYS */;

-- Dump della struttura di tabella charternautico.amministratori
CREATE TABLE IF NOT EXISTS `amministratori` (
  `iDAmministratore` tinyint(4) NOT NULL AUTO_INCREMENT,
  `nome` varchar(20) DEFAULT NULL,
  `cognome` varchar(15) DEFAULT NULL,
  `email` varchar(40) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`iDAmministratore`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Dump dei dati della tabella charternautico.amministratori: ~6 rows (circa)
/*!40000 ALTER TABLE `amministratori` DISABLE KEYS */;
INSERT INTO `amministratori` (`iDAmministratore`, `nome`, `cognome`, `email`, `password`) VALUES
	(1, 'Giovanni', 'Aleo', 'giovannialeo27@bhor.it', 'giovannialeo'),
	(2, 'Roberto', 'Stella', 'robertostella@bhor.it', 'robertostella'),
	(3, 'Antonio', 'Marca', 'antoniomarca@bhor.it', 'antoniomarca'),
	(4, 'Riccardo', 'Chiesa', 'riccardochiesa@bhor.it', 'riccardochiesa'),
	(5, 'Simone', 'Torrisi', 'simonetorrisi@bhor.it', 'simonetorrisi'),
	(6, 'Salvo', 'Castagna', 'salvocastagna@bhor.it', 'salvocastagna');
/*!40000 ALTER TABLE `amministratori` ENABLE KEYS */;

-- Dump della struttura di tabella charternautico.centraline
CREATE TABLE IF NOT EXISTS `centraline` (
  `iDCentralina` tinyint(4) NOT NULL AUTO_INCREMENT,
  `x` double DEFAULT NULL,
  `y` double DEFAULT NULL,
  PRIMARY KEY (`iDCentralina`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=latin1;

-- Dump dei dati della tabella charternautico.centraline: ~36 rows (circa)
/*!40000 ALTER TABLE `centraline` DISABLE KEYS */;
INSERT INTO `centraline` (`iDCentralina`, `x`, `y`) VALUES
	(1, 100, 100),
	(2, 60, 140),
	(3, 27, 27),
	(4, 70, 100),
	(5, 190, 280),
	(6, 300, 100),
	(7, 220, 49),
	(8, 300, 28),
	(9, 270, 300),
	(10, 120, 145),
	(11, 170, 202),
	(12, 190, 110),
	(13, 300, 230),
	(14, 100, 290),
	(15, 320, 110),
	(16, 220, 123),
	(17, 340, 230),
	(18, 140, 150),
	(19, 230, 140),
	(20, 320, 340),
	(21, 102, 256),
	(22, 257, 189),
	(23, 320, 237),
	(24, 430, 280),
	(25, 150, 200),
	(26, 410, 230),
	(27, 200, 380),
	(28, 290, 370),
	(29, 234, 338),
	(30, 360, 290),
	(31, 248, 179),
	(32, 250, 320),
	(33, 189, 834),
	(34, 127, 272),
	(35, 377, 137),
	(36, 287, 340);
/*!40000 ALTER TABLE `centraline` ENABLE KEYS */;

-- Dump della struttura di tabella charternautico.clienti
CREATE TABLE IF NOT EXISTS `clienti` (
  `codDocumento` varchar(16) NOT NULL,
  `tipoDocumento` enum('Carta d identità','Passaporto','Patente nautica') DEFAULT NULL,
  `nome` varchar(20) DEFAULT NULL,
  `cognome` varchar(15) DEFAULT NULL,
  `ddn` date DEFAULT NULL,
  `email` varchar(40) DEFAULT NULL,
  `nTel` varchar(15) DEFAULT NULL,
  `indirizzo` varchar(30) DEFAULT NULL,
  `numeroCivico` varchar(3) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `patentenautica` enum('SI','NO') DEFAULT NULL,
  PRIMARY KEY (`codDocumento`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dump dei dati della tabella charternautico.clienti: ~4 rows (circa)
/*!40000 ALTER TABLE `clienti` DISABLE KEYS */;
INSERT INTO `clienti` (`codDocumento`, `tipoDocumento`, `nome`, `cognome`, `ddn`, `email`, `nTel`, `indirizzo`, `numeroCivico`, `password`, `patentenautica`) VALUES
	('2727009', 'Patente nautica', 'Emanuele', 'Porto', '1969-09-27', 'emanueleporto@gmail.com', '3272708633', 'Via Europa', '10', 'emanueleporto', 'SI'),
	('AB1275467', 'Passaporto', 'Gabriele', 'Testa', '1980-01-01', 'gabrieletesta@gmail.com', '3402586710', 'Via Verdi', '45', 'gabrieletesta', 'SI'),
	('HPFPYM47A27D408H', 'Carta d identità', 'Francesco', 'Russo', '1960-07-01', 'francescorusso@gmail.com', '3295607104', 'Via Vittorio Emanuele', '66', 'francescorusso', 'SI'),
	('TZMKSF54L46I711U', 'Carta d identità', 'Antonio', 'Di Mauro', '1996-12-10', 'antoniodimauro@gmail.com', '334437723', 'Via Rossi', '93', 'antoniodimauro', 'NO');
/*!40000 ALTER TABLE `clienti` ENABLE KEYS */;

-- Dump della struttura di tabella charternautico.comunicazioni
CREATE TABLE IF NOT EXISTS `comunicazioni` (
  `iDComunicazione` smallint(6) NOT NULL AUTO_INCREMENT,
  `iDCentralina` tinyint(4) DEFAULT NULL,
  `iDPorto` tinyint(4) DEFAULT NULL,
  `d` datetime DEFAULT NULL,
  PRIMARY KEY (`iDComunicazione`),
  KEY `iDCentralina` (`iDCentralina`),
  KEY `iDPorto` (`iDPorto`),
  CONSTRAINT `comunicazioni_ibfk_1` FOREIGN KEY (`iDCentralina`) REFERENCES `centraline` (`iDCentralina`),
  CONSTRAINT `comunicazioni_ibfk_2` FOREIGN KEY (`iDPorto`) REFERENCES `porti` (`iDPorto`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- Dump dei dati della tabella charternautico.comunicazioni: ~7 rows (circa)
/*!40000 ALTER TABLE `comunicazioni` DISABLE KEYS */;
INSERT INTO `comunicazioni` (`iDComunicazione`, `iDCentralina`, `iDPorto`, `d`) VALUES
	(1, 2, 6, '2021-05-10 13:27:06'),
	(2, 6, 6, '2021-05-10 13:27:20'),
	(3, 1, 3, '2021-04-10 13:27:32'),
	(4, 3, 1, '2021-05-02 13:27:00'),
	(5, 4, 2, '2021-05-10 13:28:49'),
	(6, 5, 5, '2021-04-19 13:29:16'),
	(7, 1, 4, '2021-01-27 13:29:42');
/*!40000 ALTER TABLE `comunicazioni` ENABLE KEYS */;

-- Dump della struttura di tabella charternautico.imbarcazioni
CREATE TABLE IF NOT EXISTS `imbarcazioni` (
  `iDImb` tinyint(4) NOT NULL AUTO_INCREMENT,
  `iDCentralina` tinyint(4) DEFAULT NULL,
  `nome` varchar(20) DEFAULT NULL,
  `marca` varchar(20) DEFAULT NULL,
  `modello` enum('Economy','Cruiser','Luxury') DEFAULT NULL,
  `prezzonoleggio_al_giorno` smallint(6) DEFAULT NULL,
  `lunghezza` tinyint(4) DEFAULT NULL,
  `potenza_cv` varchar(3) DEFAULT NULL,
  `nPostiLetto` enum('6','8','10') DEFAULT NULL,
  `obbligoPatenteNautica` enum('SI','NO') DEFAULT NULL,
  PRIMARY KEY (`iDImb`),
  KEY `iDCentralina` (`iDCentralina`),
  CONSTRAINT `imbarcazioni_ibfk_1` FOREIGN KEY (`iDCentralina`) REFERENCES `centraline` (`iDCentralina`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=latin1;

-- Dump dei dati della tabella charternautico.imbarcazioni: ~36 rows (circa)
/*!40000 ALTER TABLE `imbarcazioni` DISABLE KEYS */;
INSERT INTO `imbarcazioni` (`iDImb`, `iDCentralina`, `nome`, `marca`, `modello`, `prezzonoleggio_al_giorno`, `lunghezza`, `potenza_cv`, `nPostiLetto`, `obbligoPatenteNautica`) VALUES
	(1, 1, 'Dea', 'Apreamare', 'Luxury', 250, 60, '100', '10', 'SI'),
	(2, 2, 'Nox', 'Dufour', 'Luxury', 200, 52, '90', '10', 'SI'),
	(3, 3, 'Mea', 'Cruisers Yachts', 'Cruiser', 160, 45, '70', '8', 'SI'),
	(4, 4, 'Drog', 'Doral', 'Cruiser', 125, 35, '65', '8', 'SI'),
	(5, 5, 'Baste', 'Houseboat', 'Economy', 100, 25, '35', '6', 'NO'),
	(6, 6, 'Mors', 'Oyster Marine', 'Economy', 115, 25, '35', '6', 'NO'),
	(7, 7, 'Athena\r\n', 'Apreamare', 'Luxury', 250, 55, '110', '10', 'SI'),
	(8, 8, 'Poseidon', 'Dufour', 'Luxury', 240, 50, '95', '10', 'SI'),
	(9, 9, 'Nautilus', 'Apreamare', 'Luxury', 230, 53, '100', '10', 'SI'),
	(10, 10, 'Fenrir', 'Dufour', 'Luxury', 210, 56, '90', '10', 'SI'),
	(11, 11, 'Freia', 'Apreamare', 'Luxury', 200, 53, '90', '10', 'SI'),
	(12, 12, 'Loki', 'Dufour', 'Luxury', 220, 48, '95', '10', 'SI'),
	(13, 13, 'Thor', 'Apreamare', 'Luxury', 230, 50, '100', '10', 'SI'),
	(14, 14, 'Nasus', 'Dufour', 'Luxury', 210, 55, '110', '10', 'SI'),
	(15, 15, 'Renekton', 'Apreamare', 'Luxury', 200, 55, '85', '10', 'SI'),
	(16, 16, 'Ani', 'Dufour', 'Luxury', 210, 50, '80', '10', 'SI'),
	(17, 17, 'Atalanta', 'Cruisers Yachts', 'Cruiser', 140, 43, '75', '8', 'SI'),
	(18, 18, 'Caronte', 'Doral', 'Cruiser', 130, 40, '70', '8', 'SI'),
	(19, 19, 'Cassandra', 'Cruisers Yachts', 'Cruiser', 150, 45, '65', '8', 'SI'),
	(20, 20, 'Circe', 'Doral', 'Cruiser', 165, 43, '63', '8', 'SI'),
	(21, 21, 'Elena', 'Cruisers Yachts', 'Cruiser', 130, 37, '68', '8', 'SI'),
	(22, 22, 'Europa', 'Doral', 'Cruiser', 140, 38, '72', '8', 'SI'),
	(23, 23, 'Mida', 'Cruisers Yachts', 'Cruiser', 136, 40, '74', '8', 'SI'),
	(24, 24, 'Mirmidone', 'Doral', 'Cruiser', 150, 36, '65', '8', 'SI'),
	(25, 25, 'Odisseo', 'Cruisers Yachts', 'Cruiser', 165, 42, '78', '8', 'SI'),
	(26, 26, 'Sisifo', 'Doral', 'Cruiser', 150, 42, '74', '8', 'SI'),
	(27, 27, 'Marco', 'Houseboat', 'Economy', 110, 25, '35', '6', 'NO'),
	(28, 28, 'Enzuccio', 'Oyster Marine', 'Economy', 120, 30, '38', '6', 'NO'),
	(29, 29, 'Martina', 'Houseboat', 'Economy', 100, 28, '32', '6', 'NO'),
	(30, 30, 'Agata', 'Oyster Marine', 'Economy', 98, 26, '30', '6', 'NO'),
	(31, 31, 'Angelo', 'Houseboat', 'Economy', 112, 24, '39', '6', 'NO'),
	(32, 32, 'Mirko', 'Oyster Marine', 'Economy', 105, 25, '38', '6', 'NO'),
	(33, 33, 'Riccardo', 'Houseboat', 'Economy', 100, 22, '37', '6', 'NO'),
	(34, 34, 'Salvo', 'Oyster Marine', 'Economy', 113, 26, '34', '6', 'NO'),
	(35, 35, 'Gabriele', 'Houseboat', 'Economy', 116, 24, '36', '6', 'NO'),
	(36, 36, 'Tano', 'Oyster Marine', 'Economy', 120, 28, '38', '6', 'NO');
/*!40000 ALTER TABLE `imbarcazioni` ENABLE KEYS */;

-- Dump della struttura di tabella charternautico.monitoraggi
CREATE TABLE IF NOT EXISTS `monitoraggi` (
  `iDMonitoraggio` smallint(6) NOT NULL AUTO_INCREMENT,
  `nomeZona` enum('Mar Tirreno','Costiera Amalfitana','Delta del Po','Mar Ligure','Parco delle cinque terre','Mar Ionio','Costa Smeralda') DEFAULT NULL,
  `iDCentralina` tinyint(4) DEFAULT NULL,
  `ph` double DEFAULT NULL,
  `temperatura` double DEFAULT NULL,
  `conducibilita` smallint(6) DEFAULT NULL,
  `redox` double DEFAULT NULL,
  `ossigeno` double DEFAULT NULL,
  `torbidita` double DEFAULT NULL,
  `d` datetime DEFAULT NULL,
  PRIMARY KEY (`iDMonitoraggio`),
  KEY `nomeZona` (`nomeZona`),
  KEY `iDCentralina` (`iDCentralina`),
  CONSTRAINT `monitoraggi_ibfk_1` FOREIGN KEY (`nomeZona`) REFERENCES `acque` (`nomeZona`),
  CONSTRAINT `monitoraggi_ibfk_2` FOREIGN KEY (`iDCentralina`) REFERENCES `centraline` (`iDCentralina`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- Dump dei dati della tabella charternautico.monitoraggi: ~8 rows (circa)
/*!40000 ALTER TABLE `monitoraggi` DISABLE KEYS */;
INSERT INTO `monitoraggi` (`iDMonitoraggio`, `nomeZona`, `iDCentralina`, `ph`, `temperatura`, `conducibilita`, `redox`, `ossigeno`, `torbidita`, `d`) VALUES
	(1, 'Mar Tirreno', 5, 7.3, 25, 53, 350, 5.3, 6, '2021-05-13 10:31:53'),
	(2, 'Costiera Amalfitana', 1, 7.5, 26, 51, 390, 8.1, 6.3, '2021-05-11 10:32:15'),
	(3, 'Delta del Po', 3, 7.6, 29, 51, 345, 4.9, 8, '2021-05-03 10:32:35'),
	(4, 'Mar Ionio', 1, 8, 24, 53, 360, 5, 7.2, '2021-05-13 11:24:18'),
	(5, 'Costa Smeralda', 6, 7.9, 23, 53, 375, 6.1, 5.9, '2021-05-10 11:24:19'),
	(6, 'Mar Ligure', 4, 6.9, 25, 50, 370, 6.9, 6.7, '2021-05-02 11:24:27'),
	(7, 'Parco delle cinque terre', 2, 6.9, 26, 51, 365, 6, 7, '2021-05-04 11:24:36'),
	(8, 'Mar Ionio', 6, 7.6, 27, 53, 350, 7, 8, '2021-04-18 11:24:48');
/*!40000 ALTER TABLE `monitoraggi` ENABLE KEYS */;

-- Dump della struttura di tabella charternautico.ormeggi
CREATE TABLE IF NOT EXISTS `ormeggi` (
  `iDOrmeggio` smallint(6) NOT NULL AUTO_INCREMENT,
  `iDPorto` tinyint(4) DEFAULT NULL,
  `iDImb` tinyint(4) DEFAULT NULL,
  `dataOrmeggio` datetime DEFAULT NULL,
  PRIMARY KEY (`iDOrmeggio`),
  KEY `iDPorto` (`iDPorto`),
  KEY `iDImb` (`iDImb`),
  CONSTRAINT `ormeggi_ibfk_1` FOREIGN KEY (`iDPorto`) REFERENCES `porti` (`iDPorto`),
  CONSTRAINT `ormeggi_ibfk_2` FOREIGN KEY (`iDImb`) REFERENCES `imbarcazioni` (`iDImb`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=latin1;

-- Dump dei dati della tabella charternautico.ormeggi: ~36 rows (circa)
/*!40000 ALTER TABLE `ormeggi` DISABLE KEYS */;
INSERT INTO `ormeggi` (`iDOrmeggio`, `iDPorto`, `iDImb`, `dataOrmeggio`) VALUES
	(1, 6, 1, '2021-05-13 10:47:27'),
	(2, 6, 2, '2021-05-03 10:47:57'),
	(3, 1, 5, '2021-05-10 10:47:59'),
	(4, 2, 3, '2021-04-13 10:48:46'),
	(5, 5, 6, '2021-04-03 10:49:05'),
	(6, 1, 27, '2021-05-29 23:11:26'),
	(7, 1, 16, '2021-05-29 23:12:15'),
	(8, 1, 11, '2021-05-29 23:12:14'),
	(9, 1, 21, '2021-05-29 23:13:02'),
	(10, 1, 22, '2021-05-29 23:13:13'),
	(11, 2, 4, '2021-05-29 23:13:44'),
	(12, 2, 10, '2021-05-29 23:14:13'),
	(13, 2, 9, '2021-05-29 23:14:26'),
	(14, 2, 35, '2021-05-29 23:14:38'),
	(15, 2, 34, '2021-05-29 23:14:51'),
	(16, 3, 15, '2021-05-29 23:15:19'),
	(17, 3, 14, '2021-05-29 23:15:37'),
	(18, 3, 26, '2021-05-29 23:15:53'),
	(19, 3, 25, '2021-05-29 23:16:02'),
	(20, 3, 33, '2021-05-29 23:16:26'),
	(21, 3, 32, '2021-05-29 23:16:42'),
	(22, 4, 13, '2021-05-29 23:17:05'),
	(23, 4, 12, '2021-05-29 23:17:15'),
	(24, 4, 24, '2021-05-29 23:17:29'),
	(25, 4, 23, '2021-05-29 23:17:51'),
	(26, 4, 31, '2021-05-29 23:18:08'),
	(27, 4, 30, '2021-05-29 23:18:39'),
	(28, 5, 36, '2021-05-29 23:19:32'),
	(29, 5, 8, '2021-05-29 23:19:50'),
	(30, 5, 7, '2021-05-29 23:20:04'),
	(31, 5, 20, '2021-05-29 23:20:19'),
	(32, 6, 28, '2021-05-29 23:20:30'),
	(33, 5, 19, '2021-05-29 23:20:47'),
	(34, 6, 17, '2021-05-29 23:21:21'),
	(35, 6, 18, '2021-05-29 23:22:02'),
	(36, 6, 29, '2021-05-29 23:22:20');
/*!40000 ALTER TABLE `ormeggi` ENABLE KEYS */;

-- Dump della struttura di tabella charternautico.personale
CREATE TABLE IF NOT EXISTS `personale` (
  `iDPersonale` tinyint(4) NOT NULL AUTO_INCREMENT,
  `codice` enum('SK','ST','HO') DEFAULT NULL,
  `iDImb` tinyint(4) DEFAULT NULL,
  `nome` varchar(20) DEFAULT NULL,
  `cognome` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`iDPersonale`),
  KEY `codice` (`codice`),
  KEY `iDImb` (`iDImb`),
  CONSTRAINT `personale_ibfk_1` FOREIGN KEY (`codice`) REFERENCES `qualifiche` (`codice`),
  CONSTRAINT `personale_ibfk_2` FOREIGN KEY (`iDImb`) REFERENCES `imbarcazioni` (`iDImb`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Dump dei dati della tabella charternautico.personale: ~0 rows (circa)
/*!40000 ALTER TABLE `personale` DISABLE KEYS */;
INSERT INTO `personale` (`iDPersonale`, `codice`, `iDImb`, `nome`, `cognome`) VALUES
	(1, 'HO', 3, 'Laura', 'Camicia'),
	(2, 'ST', 2, 'Lorenzo', 'Scoglio'),
	(3, 'SK', 5, 'Filippo', 'Insulla'),
	(4, 'HO', 1, 'Enula', 'Tommasini'),
	(5, 'ST', 1, 'Eric', 'Etna');
/*!40000 ALTER TABLE `personale` ENABLE KEYS */;

-- Dump della struttura di tabella charternautico.porti
CREATE TABLE IF NOT EXISTS `porti` (
  `iDPorto` tinyint(4) NOT NULL AUTO_INCREMENT,
  `citta` enum('Napoli','Catania','Venezia','Genova','Porto Cervo','Palermo') DEFAULT NULL,
  `nome` varchar(20) DEFAULT NULL,
  `provincia` enum('Napoli','Catania','Venezia','Genova','Olbia','Palermo') DEFAULT NULL,
  `nTel` varchar(15) DEFAULT NULL,
  `indirizzo` varchar(30) DEFAULT NULL,
  `numeroCivico` varchar(3) DEFAULT NULL,
  PRIMARY KEY (`iDPorto`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Dump dei dati della tabella charternautico.porti: ~0 rows (circa)
/*!40000 ALTER TABLE `porti` DISABLE KEYS */;
INSERT INTO `porti` (`iDPorto`, `citta`, `nome`, `provincia`, `nTel`, `indirizzo`, `numeroCivico`) VALUES
	(1, 'Napoli', 'Brilla', 'Napoli', '3337772727', 'Via Verdi', '27'),
	(2, 'Catania', 'Verde', 'Catania', '3205622710', 'Via del Casale', '100'),
	(3, 'Venezia', 'Azzuro', 'Venezia', '3478521140', 'Via Stella', '40'),
	(4, 'Genova', 'Calmo', 'Genova', '3928544471', 'Via Bellini', '11'),
	(5, 'Porto Cervo', 'Serio', 'Olbia', '3401005665', 'Via Europa', '1'),
	(6, 'Palermo', 'Palo', 'Palermo', '3203205589', 'Via Roma', '22');
/*!40000 ALTER TABLE `porti` ENABLE KEYS */;

-- Dump della struttura di tabella charternautico.prenotazioninoleggi
CREATE TABLE IF NOT EXISTS `prenotazioninoleggi` (
  `iDPrenotazione` smallint(6) NOT NULL AUTO_INCREMENT,
  `codDocumento` varchar(16) DEFAULT NULL,
  `iDImb` tinyint(4) DEFAULT NULL,
  `dataPrenotazione` date DEFAULT NULL,
  `inizioNoleggio` date DEFAULT NULL,
  `fineNoleggio` date DEFAULT NULL,
  `caparra` varchar(4) DEFAULT NULL,
  `noleggiata` enum('SI','NO') DEFAULT NULL,
  PRIMARY KEY (`iDPrenotazione`),
  KEY `codDocumento` (`codDocumento`),
  KEY `iDImb` (`iDImb`),
  CONSTRAINT `prenotazioninoleggi_ibfk_1` FOREIGN KEY (`codDocumento`) REFERENCES `clienti` (`codDocumento`),
  CONSTRAINT `prenotazioninoleggi_ibfk_2` FOREIGN KEY (`iDImb`) REFERENCES `imbarcazioni` (`iDImb`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dump dei dati della tabella charternautico.prenotazioninoleggi: ~0 rows (circa)
/*!40000 ALTER TABLE `prenotazioninoleggi` DISABLE KEYS */;
INSERT INTO `prenotazioninoleggi` (`iDPrenotazione`, `codDocumento`, `iDImb`, `dataPrenotazione`, `inizioNoleggio`, `fineNoleggio`, `caparra`, `noleggiata`) VALUES
	(1, '2727009', 1, '2021-05-01', '2021-05-13', '2021-05-23', '1000', 'SI'),
	(2, 'AB1275467', 6, '2021-05-10', '2021-05-14', '2021-05-17', '500', 'NO'),
	(3, 'HPFPYM47A27D408H', 2, '2021-04-30', '2021-05-10', '2021-05-12', '700', 'SI');
/*!40000 ALTER TABLE `prenotazioninoleggi` ENABLE KEYS */;

-- Dump della struttura di tabella charternautico.qualifiche
CREATE TABLE IF NOT EXISTS `qualifiche` (
  `codice` enum('SK','ST','HO') NOT NULL,
  `descrizione` enum('SKIPPER','STEWARD','HOSTESS') DEFAULT NULL,
  `stipendio` varchar(6) DEFAULT NULL,
  PRIMARY KEY (`codice`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dump dei dati della tabella charternautico.qualifiche: ~0 rows (circa)
/*!40000 ALTER TABLE `qualifiche` DISABLE KEYS */;
INSERT INTO `qualifiche` (`codice`, `descrizione`, `stipendio`) VALUES
	('SK', 'SKIPPER', '3500'),
	('ST', 'STEWARD', '3000'),
	('HO', 'HOSTESS', '1500');
/*!40000 ALTER TABLE `qualifiche` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
