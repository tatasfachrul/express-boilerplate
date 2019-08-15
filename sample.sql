-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 15, 2019 at 02:32 PM
-- Server version: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.2.19-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sample`
--
CREATE DATABASE IF NOT EXISTS `sample` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `sample`;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--
-- Creation: Aug 15, 2019 at 07:11 AM
-- Last update: Aug 15, 2019 at 07:16 AM
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `categoryid` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`categoryid`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Listrik', '2019-08-15 14:16:45', '2019-08-15 14:16:45'),
(2, 'Rumah Tangga', '2019-08-15 14:16:45', '2019-08-15 14:16:45');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--
-- Creation: Aug 15, 2019 at 07:10 AM
-- Last update: Aug 15, 2019 at 07:29 AM
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `productid` int(1) NOT NULL,
  `name` varchar(100) NOT NULL,
  `categoryid` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`productid`, `name`, `categoryid`, `created_at`, `updated_at`) VALUES
(2, 'Lampu', 1, '2019-08-15 14:17:09', '2019-08-15 14:17:09'),
(3, 'Plastik Sampah', 2, '2019-08-15 14:17:18', '2019-08-15 14:17:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`productid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `productid` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
