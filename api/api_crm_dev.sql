-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 19, 2022 at 11:23 PM
-- Server version: 10.3.32-MariaDB-0ubuntu0.20.04.1
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `api_crm_dev`
--

-- --------------------------------------------------------

--
-- Table structure for table `contactManagerCategories`
--

CREATE TABLE `contactManagerCategories` (
  `id` int(200) NOT NULL,
  `typeId` int(200) DEFAULT NULL,
  `name` varchar(60) DEFAULT NULL,
  `editable` int(1) DEFAULT NULL,
  `colours` varchar(200) DEFAULT NULL,
  `defaultOption` int(1) DEFAULT NULL,
  `sortOrder` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contactManagerCategories`
--

INSERT INTO `contactManagerCategories` (`id`, `typeId`, `name`, `editable`, `colours`, `defaultOption`, `sortOrder`) VALUES
(1, 1, 'Contacts', 0, '[[254, 244, 225], [234, 254, 234], [44, 44, 44]]', 0, 2),
(2, 1, 'Staff', 0, '[[234, 254, 234], [224, 237, 255], [44, 44, 44]]', 0, 1),
(3, 2, 'Customers', 1, '[[255,243,224],[242,225,254],[44,44,44]]', 0, 2),
(4, 2, 'Suppliers', 1, '[[224, 237, 255], [234, 254, 234], [44, 44, 44]]', 1, 3),
(5, 1, 'Contractors', 1, '[[234,254,242],[254,224,255],[44,44,44]]', 0, 3),
(6, 2, 'Testing', 1, '[[254,233,255],[224,237,255],[44,44,44]]', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `contactManagerGroups`
--

CREATE TABLE `contactManagerGroups` (
  `id` int(200) NOT NULL,
  `name` varchar(60) DEFAULT NULL,
  `editable` int(1) DEFAULT NULL,
  `defaultOption` int(1) DEFAULT NULL,
  `sortOrder` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contactManagerGroups`
--

INSERT INTO `contactManagerGroups` (`id`, `name`, `editable`, `defaultOption`, `sortOrder`) VALUES
(100, 'User', 0, 1, 2),
(200, 'Supervisor', 0, 0, 3),
(300, 'Manager', 0, 0, 5),
(400, 'Moderator', 0, 0, 4),
(500, 'Administrator', 0, 0, 6);

-- --------------------------------------------------------

--
-- Table structure for table `contactManagerRecords`
--

CREATE TABLE `contactManagerRecords` (
  `id` int(200) NOT NULL,
  `recordType` int(1) DEFAULT NULL,
  `title` varchar(10) DEFAULT NULL,
  `forename` varchar(200) DEFAULT NULL,
  `surname` varchar(200) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `address2` varchar(200) DEFAULT NULL,
  `town` varchar(200) DEFAULT NULL,
  `county` varchar(200) DEFAULT NULL,
  `postcode` varchar(20) DEFAULT NULL,
  `country` varchar(200) DEFAULT NULL,
  `jobTitle` varchar(200) DEFAULT NULL,
  `department` varchar(200) DEFAULT NULL,
  `work` varchar(200) DEFAULT NULL,
  `fax` varchar(200) DEFAULT NULL,
  `mobile` varchar(200) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `group` int(200) DEFAULT NULL,
  `category` int(200) DEFAULT NULL,
  `status` int(200) DEFAULT NULL,
  `type` int(200) DEFAULT NULL,
  `website` varchar(200) DEFAULT NULL,
  `company` varchar(200) DEFAULT NULL,
  `accountNumber` varchar(200) DEFAULT NULL,
  `username` varchar(200) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `allowLogin` varchar(1) DEFAULT NULL,
  `addedBy` int(200) DEFAULT NULL,
  `addedByName` varchar(200) DEFAULT NULL,
  `updatedBy` int(200) DEFAULT NULL,
  `updatedByName` varchar(200) DEFAULT NULL,
  `lastLogin` datetime DEFAULT NULL,
  `added` datetime DEFAULT NULL,
  `updated` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contactManagerRecords`
--

INSERT INTO `contactManagerRecords` (`id`, `recordType`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `addedBy`, `addedByName`, `updatedBy`, `updatedByName`, `lastLogin`, `added`, `updated`) VALUES
(1, 1, 'mr', 'Carl', 'Fearby', '409 Queen Elizabeth Road', '', 'Nuneaton', 'Warwickshire', 'CV10 9BU', 'GB', '', '', '', '', '', 'carlfearby@me.com', 100, 2, 1, 1, '', '', '', 'NeoFuture', '*6FC13CAA9F43CA6F74B384A993727632E63AE970', '1', 1, 'Carl Fearby', 1, 'Carl Fearby', '2022-02-19 22:32:34', '2020-10-11 01:37:17', '2022-02-19 22:32:34'),
(2, 1, 'mr', 'Bob', 'Jones', '307 Queen Elizabeth Road', '', 'Nuneaton', 'Warwickshire', 'CV10 9BU', 'GB', '', '', '', '', '', 'a@a.com', 100, 2, 1, 1, '', '', '', '', '*06F9E801FB5F7E5A43762DCC13D994656B962B1A', '', 1, 'Carl Fearby', 1, 'Carl Fearby', NULL, '2020-10-11 01:37:39', '2020-10-19 20:18:33'),
(3, 1, 'mr', 'Simon', 'James', '345 Queen Elizabeth Road', '', 'Nuneaton', 'Warwickshire', 'CV10 9BU', 'GB', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '', '', 1, 'Carl Fearby', 1, 'Carl Fearby', NULL, '2020-10-11 01:38:00', '2020-10-11 01:40:07'),
(4, 1, 'mr', 'Peter', 'Godwin', 'Flat 9', '431 Queen Elizabeth Road', 'Nuneaton', 'Warwickshire', 'CV10 9BU', 'GB', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '', '', 1, 'Carl Fearby', 1, 'Carl Fearby', NULL, '2020-10-11 01:38:28', '2020-10-11 01:39:57'),
(5, 1, 'mr', 'Derek', 'Ablegood', '333 Queen Elizabeth Road', '', 'Nuneaton', 'Warwickshire', 'CV10 9BU', 'GB', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '*06F9E801FB5F7E5A43762DCC13D994656B962B1A', '', 1, 'Carl Fearby', 1, 'Carl Fearby', NULL, '2020-10-11 01:38:51', '2020-10-20 00:50:13'),
(6, 2, 'mrs', 'Sarah', 'Ablegood', '333 Queen Elizabeth Road', '', 'Nuneaton', 'Warwickshire', 'CV10 9BU', 'GB', '', '', '', '', '', 'sarah@gmail.com', 100, 2, 1, 1, '', '', '', '', '*06F9E801FB5F7E5A43762DCC13D994656B962B1A', '', 1, 'Carl Fearby', 1, 'Carl Fearby', NULL, '2020-10-11 01:39:00', '2020-10-19 20:57:34'),
(7, 2, 'mr', 'Mike', 'Brump', '311 Queen Elizabeth Road', '', 'Nuneaton', 'Warwickshire', 'CV10 9BU', 'GB', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '*06F9E801FB5F7E5A43762DCC13D994656B962B1A', '', 1, 'Carl Fearby', 1, 'Carl Fearby', NULL, '2020-10-11 01:39:13', '2020-10-19 20:57:45'),
(8, 2, 'lord', 'Stuart', 'Ebank', '415 Queen Elizabeth Road', '', 'Nuneaton', 'Warwickshire', 'CV10 9BU', 'GB', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '', '', 1, 'Carl Fearby', 1, 'Carl Fearby', NULL, '2020-10-11 01:41:03', '2020-10-11 01:41:03'),
(9, 1, 'lord', 'Tristen', 'Melbank', '7 Keepers Close', '', 'Burntwood', '', 'WS7 4UT', 'GB', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '', '', 1, 'Carl Fearby', 1, 'Carl Fearby', NULL, '2020-10-11 01:41:39', '2020-10-11 01:41:39'),
(10, 1, 'mr', 'William', 'Shakespear', '17 Keepers Close', '', 'Burntwood', '', 'WS7 4UT', 'GB', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '', '', 1, 'Carl Fearby', 1, 'Carl Fearby', NULL, '2020-10-11 01:41:59', '2020-10-11 01:41:59'),
(11, 1, 'mr', 'Homer', 'Simpson', '14 Kelynmead Road', '', 'Birmingham', 'West Midlands', 'B33 8HL', 'GB', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '', '', 1, 'Carl Fearby', 1, 'Carl Fearby', NULL, '2020-10-11 01:42:18', '2020-10-11 01:42:18'),
(12, 1, 'mr', 'Ben', 'Parsons', '104 Moor Lane', 'Bolehall', 'Tamworth', 'Staffordshire', 'B77 3LL', 'GB', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '', '', 1, 'Carl Fearby', 1, 'Carl Fearby', NULL, '2020-10-11 01:43:42', '2020-10-11 01:43:42'),
(13, 1, 'mr', 'Steven', 'McFearson', '5 Westfields', 'Birchmoor', 'Tamworth', 'Warwickshire', 'B78 1AL', 'GB', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '', '', 1, 'Carl Fearby', 1, 'Carl Fearby', NULL, '2020-10-11 01:44:06', '2020-10-11 01:44:06'),
(14, 1, 'mr', 'Andrew', 'Fyfe', '7 Westfields', 'Birchmoor', 'Tamworth', 'Warwickshire', 'B78 1AL', 'GB', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '', '', 1, 'Carl Fearby', 1, 'Carl Fearby', NULL, '2020-10-11 01:44:23', '2020-10-11 01:44:23'),
(15, 1, '', '', '', 'Ash Tree House', 'Norman Court', 'Ashby-de-la-Zouch', '', 'LE65 2UZ', 'GB', '', '', '', '', '', '', 100, 4, 1, 3, '', 'Compusoft GB Ltd', 'cs001', '', '*06F9E801FB5F7E5A43762DCC13D994656B962B1A', '', 1, 'Carl Fearby', 1, 'Carl Fearby', NULL, '2020-10-11 02:06:48', '2020-10-20 00:38:22'),
(16, 1, '', '', '', 'Ash Tree House', 'Norman Court', 'Ashby-de-la-Zouch', '', 'LE65 2UZ', 'GB', '', '', '', '', '', '', 100, 3, 1, 1, '', 'E Q Software', '', '', '', '', 1, 'Carl Fearby', 1, 'Carl Fearby', NULL, '2020-10-11 02:06:52', '2020-10-11 02:06:52'),
(17, 1, '', '', '', 'The Estates Office Unit A1', 'Norman Court', 'Ashby-de-la-Zouch', '', 'LE65 2UZ', 'GB', '', '', '', '', '', '', 100, 3, 1, 1, '', 'Fisher German LLP', '', '', '', '', 1, 'Carl Fearby', 1, 'Carl Fearby', NULL, '2020-10-11 02:06:57', '2020-10-11 02:06:57'),
(18, 1, '', '', '', 'Unit A3', 'Norman Court', 'Ashby-de-la-Zouch', '', 'LE65 2UZ', 'GB', '', '', '', '', '', '', 100, 3, 1, 1, '', 'Incredible Kids', '', '', '', '', 1, 'Carl Fearby', 1, 'Carl Fearby', NULL, '2020-10-11 02:07:02', '2020-10-11 02:07:02'),
(19, 1, '', '', '', 'Ash Tree House', 'Norman Court', 'Ashby-de-la-Zouch', '', 'LE65 2UZ', 'GB', '', '', '', '', '', '', 100, 3, 1, 1, '', 'Intregrated Ordering Systems Ltd', '', '', '', '', 1, 'Carl Fearby', 1, 'Carl Fearby', NULL, '2020-10-11 02:07:08', '2020-10-11 02:07:08'),
(20, 1, '', '', '', 'Unit C', 'Norman Court', 'Ashby-de-la-Zouch', '', 'LE65 2UZ', 'GB', '', '', '', '', '', '', 100, 3, 1, 1, '', 'M I E S International Ltd', '', '', '', '', 1, 'Carl Fearby', 1, 'Carl Fearby', NULL, '2020-10-11 02:07:13', '2020-10-11 02:07:13'),
(21, 1, '', '', '', 'Cedar House Unit A4', 'Norman Court', 'Ashby-de-la-Zouch', '', 'LE65 2UZ', 'GB', '', '', '', '', '', '', 100, 3, 1, 1, '', 'Premtech Ltd', '', '', '', '', 1, 'Carl Fearby', 1, 'Carl Fearby', NULL, '2020-10-11 02:07:19', '2020-10-11 02:07:19'),
(22, 1, '', '', '', 'Trunet House', 'Norman Court', 'Ashby-de-la-Zouch', '', 'LE65 2UZ', 'GB', '', '', '', '', '', '', 100, 3, 1, 1, '', 'Trunet Packaging Services Ltd', '', '', '', '', 1, 'Carl Fearby', 1, 'Carl Fearby', NULL, '2020-10-11 02:07:28', '2020-10-11 02:07:28'),
(23, 1, '', '', '', 'Unit B1', 'Norman Court', 'Ashby-de-la-Zouch', '', 'LE65 2UZ', 'GB', '', '', '', '', '', '', 100, 3, 1, 1, '', 'Vivid Laminating Technologies Ltd', '', '', '', '', 1, 'Carl Fearby', 1, 'Carl Fearby', NULL, '2020-10-11 02:07:34', '2020-10-11 02:07:34'),
(24, 1, '', '', '', 'Unit A2', 'Norman Court', 'Ashby-de-la-Zouch', '', 'LE65 2UZ', 'GB', '', '', '', '', '', '', 100, 3, 1, 1, '', 'Woodward Vets', '', '', '', '', 1, 'Carl Fearby', 1, 'Carl Fearby', NULL, '2020-10-11 02:07:41', '2020-10-11 02:07:41'),
(25, 1, 'mr', 'Jones', 'Malcolm', '18 Ellastone Way', 'Amington', 'Tamworth', 'Staffordshire', 'B77 4FT', 'GB', 'Dev Manager', 'Development', '0121 765 4321', '', '07872 777666', 'malcome@jones.com', 100, 1, 1, 1, '', '', '', '', '', '', 1, 'Carl Fearby', 1, 'Carl Fearby', NULL, '2020-10-12 01:15:01', '2020-10-12 01:16:46'),
(33, 1, '', '', '', '19 Kelynmead Road', '', 'Birmingham', 'West Midlands', 'B33 8HL', 'GB', '', '', '', '', '', '', 100, 3, 1, 0, '', 'Systems Inc', '', '', '*06F9E801FB5F7E5A43762DCC13D994656B962B1A', '', 1, 'Carl Fearby', 1, 'Carl Fearby', NULL, '2020-10-19 20:44:38', '2020-10-19 20:44:38'),
(35, 1, '', '', '', 'Apartment 1909', 'Beetham Tower', 'Birmingham', 'West Midlands', 'B1 1BA', 'GB', '', '', '', '', '', '', 100, 3, 1, 5, '', 'ABCO 1', 'Ba1101', '', '*06F9E801FB5F7E5A43762DCC13D994656B962B1A', '', 1, 'Carl Fearby', 1, 'Carl Fearby', NULL, '2020-10-19 21:33:30', '2020-10-22 17:05:40'),
(36, 1, '', '', '', '', 'wefwefwefw', '', '', '', '', '', '', '', '', '', '', 100, 6, 1, 0, '', 'ffwefwef', '', '', '*06F9E801FB5F7E5A43762DCC13D994656B962B1A', '', 1, 'Carl Fearby', 1, 'Carl Fearby', NULL, '2022-02-18 16:55:34', '2022-02-18 16:55:34');

-- --------------------------------------------------------

--
-- Table structure for table `contactManagerStatus`
--

CREATE TABLE `contactManagerStatus` (
  `id` int(200) NOT NULL,
  `name` varchar(60) DEFAULT NULL,
  `editable` int(1) DEFAULT NULL,
  `defaultOption` int(1) DEFAULT NULL,
  `sortOrder` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contactManagerStatus`
--

INSERT INTO `contactManagerStatus` (`id`, `name`, `editable`, `defaultOption`, `sortOrder`) VALUES
(1, 'Not Contacted', 1, 1, 1),
(2, 'Appointment Booked', 1, 0, 2),
(3, '2nd Appointment Booked', 1, 0, 3),
(4, 'Awaiting Decision', 1, 0, 5),
(5, 'Customer', 1, 0, 6),
(6, 'Live', 1, 0, 7),
(7, 'Dead', 1, 0, 8),
(8, 'Proposal Sent', 1, 0, 4);

-- --------------------------------------------------------

--
-- Table structure for table `contactManagerTypes`
--

CREATE TABLE `contactManagerTypes` (
  `id` int(200) NOT NULL,
  `name` varchar(60) DEFAULT NULL,
  `editable` int(1) DEFAULT NULL,
  `defaultOption` int(1) DEFAULT NULL,
  `sortOrder` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contactManagerTypes`
--

INSERT INTO `contactManagerTypes` (`id`, `name`, `editable`, `defaultOption`, `sortOrder`) VALUES
(1, 'None', 0, 1, 1),
(2, 'Opportunity', 1, 0, 2),
(3, 'Prospect', 1, 0, 3),
(4, 'Customer', 1, 0, 4),
(5, 'Dans Customer', 1, 0, 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contactManagerCategories`
--
ALTER TABLE `contactManagerCategories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contactManagerGroups`
--
ALTER TABLE `contactManagerGroups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contactManagerRecords`
--
ALTER TABLE `contactManagerRecords`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contactManagerStatus`
--
ALTER TABLE `contactManagerStatus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contactManagerTypes`
--
ALTER TABLE `contactManagerTypes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contactManagerCategories`
--
ALTER TABLE `contactManagerCategories`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `contactManagerGroups`
--
ALTER TABLE `contactManagerGroups`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=501;

--
-- AUTO_INCREMENT for table `contactManagerRecords`
--
ALTER TABLE `contactManagerRecords`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `contactManagerStatus`
--
ALTER TABLE `contactManagerStatus`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `contactManagerTypes`
--
ALTER TABLE `contactManagerTypes`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
