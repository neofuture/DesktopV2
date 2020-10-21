DROP TABLE IF EXISTS contactManagerRecords;
DROP TABLE IF EXISTS contactManagerCategories;
DROP TABLE IF EXISTS contactManagerGroups;
DROP TABLE IF EXISTS contactManagerStatus;
DROP TABLE IF EXISTS contactManagerTypes;

CREATE TABLE contactManagerRecords (
    id int(200) primary key auto_increment,
    recordType int(1),
    title varchar(10),
    forename varchar(200),
    surname varchar(200),
    address varchar(200),
    address2 varchar(200),
    town varchar(200),
    county varchar(200),
    postcode varchar(20),
    country varchar(200),
    jobTitle varchar(200),
    department varchar(200),
    work varchar(200),
    fax varchar(200),
    mobile varchar(200),
    email varchar(200),
    `group` int(200),
    category int(200),
    status int(200),
    type int(200),
    website varchar(200),
    company varchar(200),
    accountNumber varchar(200),
    username varchar(200),
    password varchar(200),
    allowLogin varchar(1),
    addedBy int(200),
    addedByName varchar(200),
    updatedBy int(200),
    updatedByName varchar(200),
    lastLogin datetime,
    added datetime,
    updated DATETIME NOT NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE contactManagerCategories (
    id int(200) primary key auto_increment,
    typeId int(200),
    name varchar(60),
    editable int(1),
    colours varchar(200),
    defaultOption int(1),
    sortOrder int(10)
);

INSERT INTO contactManagerCategories (id, typeId, name, editable, colours, defaultOption, sortOrder) VALUES (1, 1, 'Contacts', 0, '[[254, 244, 225], [234, 254, 234], [44, 44, 44]]', 0, 1);
INSERT INTO contactManagerCategories (id, typeId, name, editable, colours, defaultOption, sortOrder) VALUES (2, 1, 'Staff', 0, '[[234, 254, 234], [224, 237, 255], [44, 44, 44]]', 1, 2);
INSERT INTO contactManagerCategories (id, typeId, name, editable, colours, defaultOption, sortOrder) VALUES (3, 2, 'Customers', 1, '[[224, 237, 255], [254, 244, 225], [44, 44, 44]]', 0, 1);
INSERT INTO contactManagerCategories (id, typeId, name, editable, colours, defaultOption, sortOrder) VALUES (4, 2, 'Suppliers', 1, '[[224, 237, 255], [234, 254, 234], [44, 44, 44]]', 0, 2);


CREATE TABLE contactManagerGroups (
    id int(200) primary key auto_increment,
    name varchar(60),
    editable int(1),
    defaultOption int(1),
    sortOrder int(10)
);

INSERT INTO contactManagerGroups (id, name, editable, defaultOption, sortOrder) VALUES (500, 'Administrator', 0, 0, 5);
INSERT INTO contactManagerGroups (id, name, editable, defaultOption, sortOrder) VALUES (400, 'Moderator', 0, 0, 4);
INSERT INTO contactManagerGroups (id, name, editable, defaultOption, sortOrder) VALUES (300, 'Manager', 0, 0, 3);
INSERT INTO contactManagerGroups (id, name, editable, defaultOption, sortOrder) VALUES (200, 'Supervisor', 0, 0, 2);
INSERT INTO contactManagerGroups (id, name, editable, defaultOption, sortOrder) VALUES (100, 'User', 0, 1, 1);

CREATE TABLE contactManagerStatus (
    id int(200) primary key auto_increment,
    name varchar(60),
    editable int(1),
    defaultOption int(1),
    sortOrder int(10)
);

INSERT INTO contactManagerStatus (id, name, editable, defaultOption, sortOrder) VALUES (1, 'Not Contacted', 1, 1, 1);
INSERT INTO contactManagerStatus (id, name, editable, defaultOption, sortOrder) VALUES (2, 'Appointment Booked', 1, 0, 2);
INSERT INTO contactManagerStatus (id, name, editable, defaultOption, sortOrder) VALUES (3, '2nd Appointment Booked', 1, 0, 3);
INSERT INTO contactManagerStatus (id, name, editable, defaultOption, sortOrder) VALUES (4, 'Awaiting Decision', 1, 0, 4);
INSERT INTO contactManagerStatus (id, name, editable, defaultOption, sortOrder) VALUES (5, 'Customer', 1, 0, 5);
INSERT INTO contactManagerStatus (id, name, editable, defaultOption, sortOrder) VALUES (6, 'Live', 1, 0, 6);
INSERT INTO contactManagerStatus (id, name, editable, defaultOption, sortOrder) VALUES (7, 'Dead', 1, 0, 7);


CREATE TABLE contactManagerTypes (
    id int(200) primary key auto_increment,
    name varchar(60),
    editable int(1),
    defaultOption int(1),
    sortOrder int(10)
);

INSERT INTO contactManagerTypes (id, name, editable, defaultOption, sortOrder) VALUES (1, 'None', 0, 1, 1);
INSERT INTO contactManagerTypes (id, name, editable, defaultOption, sortOrder) VALUES (2, 'Opportunity', 1, 0, 2);
INSERT INTO contactManagerTypes (id, name, editable, defaultOption, sortOrder) VALUES (3, 'Prospect', 1, 0, 3);
INSERT INTO contactManagerTypes (id, name, editable, defaultOption, sortOrder) VALUES (4, 'Customer', 1, 0, 4);


INSERT INTO `contactManagerRecords` (`id`, `recordType`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `addedBy`, `updatedBy`, `lastLogin`, `added`, `updated`, `addedByName`, `updatedByName`) VALUES(1, 1, 'mr', 'Carl', 'Fearby', '409 Queen Elizabeth Road', '', 'Nuneaton', 'Warwickshire', 'CV10 9BU', 'GB', '', '', '', '', '', 'carlfearby@me.com', 100, 2, 1, 1, '', '', '', 'NeoFuture', '*6FC13CAA9F43CA6F74B384A993727632E63AE970', '1', 1, 1, '2020-10-13 22:11:35', '2020-10-11 01:37:17', '2020-10-13 22:11:35', 'Carl Fearby', 'Carl Fearby');
INSERT INTO `contactManagerRecords` (`id`, `recordType`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `addedBy`, `updatedBy`, `lastLogin`, `added`, `updated`, `addedByName`, `updatedByName`) VALUES(2, 1, 'mr', 'Bob', 'Jones', '307 Queen Elizabeth Road', '', 'Nuneaton', 'Warwickshire', 'CV10 9BU', 'GB', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '', '', 1, 1, NULL, '2020-10-11 01:37:39', '2020-10-11 01:40:18', 'Carl Fearby', 'Carl Fearby');
INSERT INTO `contactManagerRecords` (`id`, `recordType`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `addedBy`, `updatedBy`, `lastLogin`, `added`, `updated`, `addedByName`, `updatedByName`) VALUES(3, 1, 'mr', 'Simon', 'James', '345 Queen Elizabeth Road', '', 'Nuneaton', 'Warwickshire', 'CV10 9BU', 'GB', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '', '', 1, 1, NULL, '2020-10-11 01:38:00', '2020-10-11 01:40:07', 'Carl Fearby', 'Carl Fearby');
INSERT INTO `contactManagerRecords` (`id`, `recordType`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `addedBy`, `updatedBy`, `lastLogin`, `added`, `updated`, `addedByName`, `updatedByName`) VALUES(4, 1, 'mr', 'Peter', 'Godwin', 'Flat 9', '431 Queen Elizabeth Road', 'Nuneaton', 'Warwickshire', 'CV10 9BU', 'GB', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '', '', 1, 1, NULL, '2020-10-11 01:38:28', '2020-10-11 01:39:57', 'Carl Fearby', 'Carl Fearby');
INSERT INTO `contactManagerRecords` (`id`, `recordType`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `addedBy`, `updatedBy`, `lastLogin`, `added`, `updated`, `addedByName`, `updatedByName`) VALUES(5, 1, 'mr', 'Derek', 'Ablegood', '333 Queen Elizabeth Road', '', 'Nuneaton', 'Warwickshire', 'CV10 9BU', 'GB', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '', '', 1, 1, NULL, '2020-10-11 01:38:51', '2020-10-11 01:38:51', 'Carl Fearby', 'Carl Fearby');
INSERT INTO `contactManagerRecords` (`id`, `recordType`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `addedBy`, `updatedBy`, `lastLogin`, `added`, `updated`, `addedByName`, `updatedByName`) VALUES(6, 2, 'mrs', 'Sarah', 'Ablegood', '333 Queen Elizabeth Road', '', 'Nuneaton', 'Warwickshire', 'CV10 9BU', 'GB', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '', '', 1, 1, NULL, '2020-10-11 01:39:00', '2020-10-11 01:39:39', 'Carl Fearby', 'Carl Fearby');
INSERT INTO `contactManagerRecords` (`id`, `recordType`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `addedBy`, `updatedBy`, `lastLogin`, `added`, `updated`, `addedByName`, `updatedByName`) VALUES(7, 2, 'mr', 'Mike', 'Trump', '311 Queen Elizabeth Road', '', 'Nuneaton', 'Warwickshire', 'CV10 9BU', 'GB', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '', '', 1, 1, NULL, '2020-10-11 01:39:13', '2020-10-11 01:39:13', 'Carl Fearby', 'Carl Fearby');
INSERT INTO `contactManagerRecords` (`id`, `recordType`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `addedBy`, `updatedBy`, `lastLogin`, `added`, `updated`, `addedByName`, `updatedByName`) VALUES(8, 2, 'lord', 'Stuart', 'Ebank', '415 Queen Elizabeth Road', '', 'Nuneaton', 'Warwickshire', 'CV10 9BU', 'GB', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '', '', 1, 1, NULL, '2020-10-11 01:41:03', '2020-10-11 01:41:03', 'Carl Fearby', 'Carl Fearby');
INSERT INTO `contactManagerRecords` (`id`, `recordType`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `addedBy`, `updatedBy`, `lastLogin`, `added`, `updated`, `addedByName`, `updatedByName`) VALUES(9, 1, 'lord', 'Tristen', 'Melbank', '7 Keepers Close', '', 'Burntwood', '', 'WS7 4UT', 'GB', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '', '', 1, 1, NULL, '2020-10-11 01:41:39', '2020-10-11 01:41:39', 'Carl Fearby', 'Carl Fearby');
INSERT INTO `contactManagerRecords` (`id`, `recordType`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `addedBy`, `updatedBy`, `lastLogin`, `added`, `updated`, `addedByName`, `updatedByName`) VALUES(10, 1, 'mr', 'William', 'Shakespear', '17 Keepers Close', '', 'Burntwood', '', 'WS7 4UT', 'GB', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '', '', 1, 1, NULL, '2020-10-11 01:41:59', '2020-10-11 01:41:59', 'Carl Fearby', 'Carl Fearby');
INSERT INTO `contactManagerRecords` (`id`, `recordType`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `addedBy`, `updatedBy`, `lastLogin`, `added`, `updated`, `addedByName`, `updatedByName`) VALUES(11, 1, 'mr', 'Homer', 'Simpson', '14 Kelynmead Road', '', 'Birmingham', 'West Midlands', 'B33 8HL', 'GB', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '', '', 1, 1, NULL, '2020-10-11 01:42:18', '2020-10-11 01:42:18', 'Carl Fearby', 'Carl Fearby');
INSERT INTO `contactManagerRecords` (`id`, `recordType`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `addedBy`, `updatedBy`, `lastLogin`, `added`, `updated`, `addedByName`, `updatedByName`) VALUES(12, 1, 'mr', 'Ben', 'Parsons', '104 Moor Lane', 'Bolehall', 'Tamworth', 'Staffordshire', 'B77 3LL', 'GB', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '', '', 1, 1, NULL, '2020-10-11 01:43:42', '2020-10-11 01:43:42', 'Carl Fearby', 'Carl Fearby');
INSERT INTO `contactManagerRecords` (`id`, `recordType`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `addedBy`, `updatedBy`, `lastLogin`, `added`, `updated`, `addedByName`, `updatedByName`) VALUES(13, 1, 'mr', 'Steven', 'McFearson', '5 Westfields', 'Birchmoor', 'Tamworth', 'Warwickshire', 'B78 1AL', 'GB', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '', '', 1, 1, NULL, '2020-10-11 01:44:06', '2020-10-11 01:44:06', 'Carl Fearby', 'Carl Fearby');
INSERT INTO `contactManagerRecords` (`id`, `recordType`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `addedBy`, `updatedBy`, `lastLogin`, `added`, `updated`, `addedByName`, `updatedByName`) VALUES(14, 1, 'mr', 'Andrew', 'Fyfe', '7 Westfields', 'Birchmoor', 'Tamworth', 'Warwickshire', 'B78 1AL', 'GB', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '', '', 1, 1, NULL, '2020-10-11 01:44:23', '2020-10-11 01:44:23', 'Carl Fearby', 'Carl Fearby');
INSERT INTO `contactManagerRecords` (`id`, `recordType`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `addedBy`, `updatedBy`, `lastLogin`, `added`, `updated`, `addedByName`, `updatedByName`) VALUES(15, 1, '', '', '', 'Ash Tree House', 'Norman Court', 'Ashby-de-la-Zouch', '', 'LE65 2UZ', 'GB', '', '', '', '', '', '', 100, 3, 1, 1, '', 'Compusoft GB Ltd', '', '', '', '', 1, 1, NULL, '2020-10-11 02:06:48', '2020-10-11 02:06:48', 'Carl Fearby', 'Carl Fearby');
INSERT INTO `contactManagerRecords` (`id`, `recordType`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `addedBy`, `updatedBy`, `lastLogin`, `added`, `updated`, `addedByName`, `updatedByName`) VALUES(16, 1, '', '', '', 'Ash Tree House', 'Norman Court', 'Ashby-de-la-Zouch', '', 'LE65 2UZ', 'GB', '', '', '', '', '', '', 100, 3, 1, 1, '', 'E Q Software', '', '', '', '', 1, 1, NULL, '2020-10-11 02:06:52', '2020-10-11 02:06:52', 'Carl Fearby', 'Carl Fearby');
INSERT INTO `contactManagerRecords` (`id`, `recordType`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `addedBy`, `updatedBy`, `lastLogin`, `added`, `updated`, `addedByName`, `updatedByName`) VALUES(17, 1, '', '', '', 'The Estates Office Unit A1', 'Norman Court', 'Ashby-de-la-Zouch', '', 'LE65 2UZ', 'GB', '', '', '', '', '', '', 100, 3, 1, 1, '', 'Fisher German LLP', '', '', '', '', 1, 1, NULL, '2020-10-11 02:06:57', '2020-10-11 02:06:57', 'Carl Fearby', 'Carl Fearby');
INSERT INTO `contactManagerRecords` (`id`, `recordType`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `addedBy`, `updatedBy`, `lastLogin`, `added`, `updated`, `addedByName`, `updatedByName`) VALUES(18, 1, '', '', '', 'Unit A3', 'Norman Court', 'Ashby-de-la-Zouch', '', 'LE65 2UZ', 'GB', '', '', '', '', '', '', 100, 3, 1, 1, '', 'Incredible Kids', '', '', '', '', 1, 1, NULL, '2020-10-11 02:07:02', '2020-10-11 02:07:02', 'Carl Fearby', 'Carl Fearby');
INSERT INTO `contactManagerRecords` (`id`, `recordType`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `addedBy`, `updatedBy`, `lastLogin`, `added`, `updated`, `addedByName`, `updatedByName`) VALUES(19, 1, '', '', '', 'Ash Tree House', 'Norman Court', 'Ashby-de-la-Zouch', '', 'LE65 2UZ', 'GB', '', '', '', '', '', '', 100, 3, 1, 1, '', 'Intregrated Ordering Systems Ltd', '', '', '', '', 1, 1, NULL, '2020-10-11 02:07:08', '2020-10-11 02:07:08', 'Carl Fearby', 'Carl Fearby');
INSERT INTO `contactManagerRecords` (`id`, `recordType`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `addedBy`, `updatedBy`, `lastLogin`, `added`, `updated`, `addedByName`, `updatedByName`) VALUES(20, 1, '', '', '', 'Unit C', 'Norman Court', 'Ashby-de-la-Zouch', '', 'LE65 2UZ', 'GB', '', '', '', '', '', '', 100, 3, 1, 1, '', 'M I E S International Ltd', '', '', '', '', 1, 1, NULL, '2020-10-11 02:07:13', '2020-10-11 02:07:13', 'Carl Fearby', 'Carl Fearby');
INSERT INTO `contactManagerRecords` (`id`, `recordType`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `addedBy`, `updatedBy`, `lastLogin`, `added`, `updated`, `addedByName`, `updatedByName`) VALUES(21, 1, '', '', '', 'Cedar House Unit A4', 'Norman Court', 'Ashby-de-la-Zouch', '', 'LE65 2UZ', 'GB', '', '', '', '', '', '', 100, 3, 1, 1, '', 'Premtech Ltd', '', '', '', '', 1, 1, NULL, '2020-10-11 02:07:19', '2020-10-11 02:07:19', 'Carl Fearby', 'Carl Fearby');
INSERT INTO `contactManagerRecords` (`id`, `recordType`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `addedBy`, `updatedBy`, `lastLogin`, `added`, `updated`, `addedByName`, `updatedByName`) VALUES(22, 1, '', '', '', 'Trunet House', 'Norman Court', 'Ashby-de-la-Zouch', '', 'LE65 2UZ', 'GB', '', '', '', '', '', '', 100, 3, 1, 1, '', 'Trunet Packaging Services Ltd', '', '', '', '', 1, 1, NULL, '2020-10-11 02:07:28', '2020-10-11 02:07:28', 'Carl Fearby', 'Carl Fearby');
INSERT INTO `contactManagerRecords` (`id`, `recordType`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `addedBy`, `updatedBy`, `lastLogin`, `added`, `updated`, `addedByName`, `updatedByName`) VALUES(23, 1, '', '', '', 'Unit B1', 'Norman Court', 'Ashby-de-la-Zouch', '', 'LE65 2UZ', 'GB', '', '', '', '', '', '', 100, 3, 1, 1, '', 'Vivid Laminating Technologies Ltd', '', '', '', '', 1, 1, NULL, '2020-10-11 02:07:34', '2020-10-11 02:07:34', 'Carl Fearby', 'Carl Fearby');
INSERT INTO `contactManagerRecords` (`id`, `recordType`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `addedBy`, `updatedBy`, `lastLogin`, `added`, `updated`, `addedByName`, `updatedByName`) VALUES(24, 1, '', '', '', 'Unit A2', 'Norman Court', 'Ashby-de-la-Zouch', '', 'LE65 2UZ', 'GB', '', '', '', '', '', '', 100, 3, 1, 1, '', 'Woodward Vets', '', '', '', '', 1, 1, NULL, '2020-10-11 02:07:41', '2020-10-11 02:07:41', 'Carl Fearby', 'Carl Fearby');
INSERT INTO `contactManagerRecords` (`id`, `recordType`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `addedBy`, `updatedBy`, `lastLogin`, `added`, `updated`, `addedByName`, `updatedByName`) VALUES(25, 1, 'mr', 'Jones', 'Malcolm', '18 Ellastone Way', 'Amington', 'Tamworth', 'Staffordshire', 'B77 4FT', 'GB', 'Dev Manager', 'Development', '0121 765 4321', '', '07872 777666', 'malcome@jones.com', 100, 1, 1, 1, '', '', '', '', '', '', 1, 1, NULL, '2020-10-12 01:15:01', '2020-10-12 01:16:46', 'Carl Fearby', 'Carl Fearby');
