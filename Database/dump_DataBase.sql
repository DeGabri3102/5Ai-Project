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
  `email` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY (`iDAmministratore`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Dump dei dati della tabella charternautico.amministratori: ~6 rows (circa)
/*!40000 ALTER TABLE `amministratori` DISABLE KEYS */;
INSERT INTO `amministratori` (`iDAmministratore`, `nome`, `cognome`, `email`, `password`) VALUES
	(1, 'Giovanni', 'Aleo', 'giovanni@bhor.it', 'giovanni'),
	(2, 'Roberto', 'Stella', 'roberto@bhor.it', 'roberto'),
	(3, 'Antonio', 'Marca', 'antonio@bhor.it', 'antonio'),
	(4, 'Riccardo', 'Chiesa', 'riccardo@bhor.it', 'riccardo'),
	(5, 'Simone', 'Torrisi', 'simone@bhor.it', 'simone'),
	(6, 'Salvo', 'Castagna', 'salvo@bhor.it', 'salvo');
/*!40000 ALTER TABLE `amministratori` ENABLE KEYS */;

-- Dump della struttura di tabella charternautico.centraline
CREATE TABLE IF NOT EXISTS `centraline` (
  `iDCentralina` tinyint(4) NOT NULL AUTO_INCREMENT,
  `x` double DEFAULT NULL,
  `y` double DEFAULT NULL,
  PRIMARY KEY (`iDCentralina`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Dump dei dati della tabella charternautico.centraline: ~6 rows (circa)
/*!40000 ALTER TABLE `centraline` DISABLE KEYS */;
INSERT INTO `centraline` (`iDCentralina`, `x`, `y`) VALUES
	(1, 100, 100),
	(2, 60, 140),
	(3, 27, 27),
	(4, 70, 100),
	(5, 190, 280),
	(6, 300, 100);
/*!40000 ALTER TABLE `centraline` ENABLE KEYS */;

-- Dump della struttura di tabella charternautico.clienti
CREATE TABLE IF NOT EXISTS `clienti` (
  `codDocumento` varchar(16) NOT NULL,
  `tipoDocumento` enum('Carta d identità','Passaporto','Patente nautica') DEFAULT NULL,
  `nome` varchar(20) DEFAULT NULL,
  `cognome` varchar(15) DEFAULT NULL,
  `ddn` date DEFAULT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(20) DEFAULT NULL,
  `nTel` varchar(15) DEFAULT NULL,
  `indirizzo` varchar(30) DEFAULT NULL,
  `numeroCivico` varchar(3) DEFAULT NULL,
  `patentenautica` enum('SI','NO') DEFAULT NULL,
  PRIMARY KEY (`codDocumento`),
  UNIQUE KEY `UNIQUE` (`email`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dump dei dati della tabella charternautico.clienti: ~4 rows (circa)
/*!40000 ALTER TABLE `clienti` DISABLE KEYS */;
INSERT INTO `clienti` (`codDocumento`, `tipoDocumento`, `nome`, `cognome`, `ddn`, `email`, `password`, `nTel`, `indirizzo`, `numeroCivico`, `patentenautica`) VALUES
	('2727009', 'Patente nautica', 'Emanuele', 'Porto', '1969-09-27', 'emanueleporto@gmail.com', 'emanueleporto', '3272708633', 'Via Europa', '10', 'SI'),
	('AB1275467', 'Passaporto', 'Gabriele', 'Testa', '1980-01-01', 'gabrieletesta@gmail.com', 'gabrieletesta', '3402586710', 'Via Verdi', '45', 'SI'),
	('HPFPYM47A27D408H', 'Carta d identità', 'Francesco', 'Russo', '1960-07-01', 'francescorusso@gmail.com', 'francescorusso', '3295607104', 'Via Vittorio Emanuele', '66', 'SI'),
	('TZMKSF54L46I711U', 'Carta d identità', 'Antonio', 'Di Mauro', '1996-12-10', 'antoniodimauro@gmail.com', 'antoniodimauro', '334437723', 'Via Rossi', '93', 'NO');
/*!40000 ALTER TABLE `clienti` ENABLE KEYS */;

-- Dump della struttura di tabella charternautico.comunicazioni
CREATE TABLE IF NOT EXISTS `comunicazioni` (
  `iDComunicazione` varchar(5) NOT NULL,
  `iDCentralina` tinyint(4) DEFAULT NULL,
  `iDPorto` tinyint(4) DEFAULT NULL,
  `d` datetime DEFAULT NULL,
  PRIMARY KEY (`iDComunicazione`),
  KEY `iDCentralina` (`iDCentralina`),
  KEY `iDPorto` (`iDPorto`),
  CONSTRAINT `comunicazioni_ibfk_1` FOREIGN KEY (`iDCentralina`) REFERENCES `centraline` (`iDCentralina`),
  CONSTRAINT `comunicazioni_ibfk_2` FOREIGN KEY (`iDPorto`) REFERENCES `porti` (`iDPorto`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dump dei dati della tabella charternautico.comunicazioni: ~7 rows (circa)
/*!40000 ALTER TABLE `comunicazioni` DISABLE KEYS */;
INSERT INTO `comunicazioni` (`iDComunicazione`, `iDCentralina`, `iDPorto`, `d`) VALUES
	('1', 2, 6, '2021-05-10 13:27:06'),
	('2', 6, 6, '2021-05-10 13:27:20'),
	('3', 1, 3, '2021-04-10 13:27:32'),
	('4', 3, 1, '2021-05-02 13:27:00'),
	('5', 4, 2, '2021-05-10 13:28:49'),
	('6', 5, 5, '2021-04-19 13:29:16'),
	('7', 1, 4, '2021-01-27 13:29:42');
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Dump dei dati della tabella charternautico.imbarcazioni: ~6 rows (circa)
/*!40000 ALTER TABLE `imbarcazioni` DISABLE KEYS */;
INSERT INTO `imbarcazioni` (`iDImb`, `iDCentralina`, `nome`, `marca`, `modello`, `prezzonoleggio_al_giorno`, `lunghezza`, `potenza_cv`, `nPostiLetto`, `obbligoPatenteNautica`) VALUES
	(1, 2, 'Dea', 'Apreamare', 'Luxury', 250, 60, '100', '10', 'SI'),
	(2, 3, 'Nox', 'Dufour', 'Luxury', 200, 40, '90', '10', 'SI'),
	(3, 1, 'Mea', 'Cruisers Yachts', 'Cruiser', 160, 35, '70', '8', 'SI'),
	(4, 6, 'Drog', 'Doral', 'Cruiser', 125, 32, '65', '8', 'SI'),
	(5, 5, 'Baste', 'Houseboat', 'Economy', 100, 25, '35', '6', 'NO'),
	(6, 4, 'Mors', 'Oyster Marine', 'Economy', 115, 25, '35', '6', 'NO');
/*!40000 ALTER TABLE `imbarcazioni` ENABLE KEYS */;

-- Dump della struttura di tabella charternautico.monitoraggi
CREATE TABLE IF NOT EXISTS `monitoraggi` (
  `iDMonitoraggio` varchar(5) NOT NULL,
  `nomeZona` enum('Mar Tirreno','Costiera Amalfitana','Delta del Po','Mar Ligure','Parco delle cinque terre','Mar Ionio','Costa Smeralda') DEFAULT NULL,
  `iDCentralina` tinyint(4) DEFAULT NULL,
  `ph` double DEFAULT NULL,
  `temperatura` double DEFAULT NULL,
  `conducibilità` double DEFAULT NULL,
  `redox` double DEFAULT NULL,
  `ossigeno` double DEFAULT NULL,
  `torbidita` double DEFAULT NULL,
  `d` datetime DEFAULT NULL,
  PRIMARY KEY (`iDMonitoraggio`),
  KEY `nomeZona` (`nomeZona`),
  KEY `iDCentralina` (`iDCentralina`),
  CONSTRAINT `monitoraggi_ibfk_1` FOREIGN KEY (`nomeZona`) REFERENCES `acque` (`nomeZona`),
  CONSTRAINT `monitoraggi_ibfk_2` FOREIGN KEY (`iDCentralina`) REFERENCES `centraline` (`iDCentralina`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dump dei dati della tabella charternautico.monitoraggi: ~8 rows (circa)
/*!40000 ALTER TABLE `monitoraggi` DISABLE KEYS */;
INSERT INTO `monitoraggi` (`iDMonitoraggio`, `nomeZona`, `iDCentralina`, `ph`, `temperatura`, `conducibilità`, `redox`, `ossigeno`, `torbidita`, `d`) VALUES
	('1', 'Mar Tirreno', 5, 7.3, 25, 53, 350, 5.3, 6, '2021-05-13 10:31:53'),
	('2', 'Costiera Amalfitana', 1, 7.5, 26, 51.2, 390, 8.1, 6.3, '2021-05-11 10:32:15'),
	('3', 'Delta del Po', 3, 7.6, 29, 50.9, 345, 4.9, 8, '2021-05-03 10:32:35'),
	('4', 'Mar Ionio', 1, 8, 24, 52.6, 360, 5, 7.2, '2021-05-13 11:24:18'),
	('5', 'Costa Smeralda', 6, 7.9, 23, 53, 375, 6.1, 5.9, '2021-05-10 11:24:19'),
	('6', 'Mar Ligure', 4, 6.9, 25, 50, 370, 6.9, 6.7, '2021-05-02 11:24:27'),
	('7', 'Parco delle cinque terre', 2, 6.9, 26, 51.3, 365, 6, 7, '2021-05-04 11:24:36'),
	('8', 'Mar Ionio', 6, 7.6, 27, 53.1, 350, 7, 8, '2021-04-18 11:24:48');
/*!40000 ALTER TABLE `monitoraggi` ENABLE KEYS */;

-- Dump della struttura di tabella charternautico.ormeggi
CREATE TABLE IF NOT EXISTS `ormeggi` (
  `iDOrmeggio` varchar(5) NOT NULL,
  `iDPorto` tinyint(4) DEFAULT NULL,
  `iDImb` tinyint(4) DEFAULT NULL,
  `dataOrmeggio` datetime DEFAULT NULL,
  PRIMARY KEY (`iDOrmeggio`),
  KEY `iDPorto` (`iDPorto`),
  KEY `iDImb` (`iDImb`),
  CONSTRAINT `ormeggi_ibfk_1` FOREIGN KEY (`iDPorto`) REFERENCES `porti` (`iDPorto`),
  CONSTRAINT `ormeggi_ibfk_2` FOREIGN KEY (`iDImb`) REFERENCES `imbarcazioni` (`iDImb`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dump dei dati della tabella charternautico.ormeggi: ~5 rows (circa)
/*!40000 ALTER TABLE `ormeggi` DISABLE KEYS */;
INSERT INTO `ormeggi` (`iDOrmeggio`, `iDPorto`, `iDImb`, `dataOrmeggio`) VALUES
	('1', 6, 1, '2021-05-13 10:47:27'),
	('2', 6, 2, '2021-05-03 10:47:57'),
	('3', 1, 5, '2021-05-10 10:47:59'),
	('4', 2, 3, '2021-04-13 10:48:46'),
	('5', 5, 6, '2021-04-03 10:49:05');
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

-- Dump dei dati della tabella charternautico.personale: ~5 rows (circa)
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

-- Dump dei dati della tabella charternautico.porti: ~6 rows (circa)
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
  `iDPrenotazione` varchar(5) NOT NULL,
  `codDocumento` varchar(16) DEFAULT NULL,
  `iDImb` tinyint(4) DEFAULT NULL,
  `dataPrenotazione` datetime DEFAULT NULL,
  `inizioNoleggio` datetime DEFAULT NULL,
  `fineNoleggio` datetime DEFAULT NULL,
  `caparra` varchar(4) DEFAULT NULL,
  `noleggiata` enum('SI','NO') DEFAULT NULL,
  PRIMARY KEY (`iDPrenotazione`),
  KEY `codDocumento` (`codDocumento`),
  KEY `iDImb` (`iDImb`),
  CONSTRAINT `prenotazioninoleggi_ibfk_1` FOREIGN KEY (`codDocumento`) REFERENCES `clienti` (`codDocumento`),
  CONSTRAINT `prenotazioninoleggi_ibfk_2` FOREIGN KEY (`iDImb`) REFERENCES `imbarcazioni` (`iDImb`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dump dei dati della tabella charternautico.prenotazioninoleggi: ~3 rows (circa)
/*!40000 ALTER TABLE `prenotazioninoleggi` DISABLE KEYS */;
INSERT INTO `prenotazioninoleggi` (`iDPrenotazione`, `codDocumento`, `iDImb`, `dataPrenotazione`, `inizioNoleggio`, `fineNoleggio`, `caparra`, `noleggiata`) VALUES
	('1', '2727009', 1, '2021-05-01 10:37:16', '2021-05-13 10:37:32', '2021-05-23 10:37:37', '1000', 'SI'),
	('2', 'AB1275467', 6, '2021-05-10 10:39:36', '2021-05-14 10:39:31', '2021-05-17 10:38:24', '500', 'NO'),
	('3', 'HPFPYM47A27D408H', 2, '2021-04-30 10:40:57', '2021-05-10 10:41:12', '2021-05-12 10:41:25', '700', 'SI');
/*!40000 ALTER TABLE `prenotazioninoleggi` ENABLE KEYS */;

-- Dump della struttura di tabella charternautico.qualifiche
CREATE TABLE IF NOT EXISTS `qualifiche` (
  `codice` enum('SK','ST','HO') NOT NULL,
  `descrizione` enum('SKIPPER','STEWARD','HOSTESS') DEFAULT NULL,
  `stipendio` varchar(6) DEFAULT NULL,
  PRIMARY KEY (`codice`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dump dei dati della tabella charternautico.qualifiche: ~3 rows (circa)
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
