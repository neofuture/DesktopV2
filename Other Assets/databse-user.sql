DROP TABLE IF EXISTS contactManagerRecords;
DROP TABLE IF EXISTS contactManagerCategories;
DROP TABLE IF EXISTS contactManagerGroups;
DROP TABLE IF EXISTS contactManagerStatus;
DROP TABLE IF EXISTS contactManagerTypes;

CREATE TABLE contactManagerRecords (
    id int(200) primary key auto_increment,
    title varchar(10),
    forename varchar(200),
    surname varchar(200),
    address varchar(200),
    address2 varchar(200),
    town varchar(200),
    county varchar(200),
    postcode varchar(20),
    country varchar(200),
    notes text,
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
    division varchar(200),
    company varchar(200),
    accountNumber varchar(200),
    username varchar(200),
    password varchar(200),
    allowLogin varchar(1),
    added datetime,
    updated DATETIME NOT NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE contactManagerCategories (
    id int(200) primary key auto_increment,
    typeId int(200),
    name varchar(60),
    editable int(1),
    colours varchar(200),
    defaultCategory int(1),
    sortOrder int(10)
);

INSERT INTO contactManagerCategories (id, typeId, name, editable, colours, defaultCategory, sortOrder) VALUES (1, 1, 'contacts', 0, '["rgb(254, 244, 225)", "rgb(234, 254, 234)"]', 0, 1);
INSERT INTO contactManagerCategories (id, typeId, name, editable, colours, defaultCategory, sortOrder) VALUES (2, 1, 'staff', 0, '["rgb(234, 254, 234)", "rgb(224, 237, 255)"]', 1, 2);
INSERT INTO contactManagerCategories (id, typeId, name, editable, colours, defaultCategory, sortOrder) VALUES (3, 2, 'customers', 0, '["rgb(224, 237, 255)", "rgb(254, 244, 225)"]', 0, 1);
INSERT INTO contactManagerCategories (id, typeId, name, editable, colours, defaultCategory, sortOrder) VALUES (4, 2, 'suppliers', 0, '["rgb(224, 237, 255)", "rgb(234, 254, 234)"]', 0, 2);


CREATE TABLE contactManagerGroups (
    id int(200) primary key auto_increment,
    name varchar(60),
    editable int(1),
    defaultGroup int(1),
    sortOrder int(10)
);

INSERT INTO contactManagerGroups (id, name, editable, defaultGroup, sortOrder) VALUES (500, 'Administrator', 0, 0, 5);
INSERT INTO contactManagerGroups (id, name, editable, defaultGroup, sortOrder) VALUES (400, 'Moderator', 0, 0, 4);
INSERT INTO contactManagerGroups (id, name, editable, defaultGroup, sortOrder) VALUES (300, 'Manager', 0, 0, 3);
INSERT INTO contactManagerGroups (id, name, editable, defaultGroup, sortOrder) VALUES (200, 'Supervisor', 0, 0, 2);
INSERT INTO contactManagerGroups (id, name, editable, defaultGroup, sortOrder) VALUES (100, 'User', 0, 1, 1);

CREATE TABLE contactManagerStatus (
    id int(200) primary key auto_increment,
    name varchar(60),
    editable int(1),
    defaultStatus int(1),
    sortOrder int(10)
);

INSERT INTO contactManagerStatus (id, name, editable, defaultStatus, sortOrder) VALUES (1, 'No Status', 0, 1, 1);
INSERT INTO contactManagerStatus (id, name, editable, defaultStatus, sortOrder) VALUES (2, 'Opportunity', 0, 0, 2);
INSERT INTO contactManagerStatus (id, name, editable, defaultStatus, sortOrder) VALUES (3, 'Prospect', 0, 0, 3);
INSERT INTO contactManagerStatus (id, name, editable, defaultStatus, sortOrder) VALUES (4, 'Customer', 0, 0, 4);

CREATE TABLE contactManagerTypes (
    id int(200) primary key auto_increment,
    name varchar(60),
    editable int(1),
    defaultType int(1),
    sortOrder int(10)
);

INSERT INTO contactManagerTypes (id, name, editable, defaultType, sortOrder) VALUES (1, 'Not Contacted', 0, 1, 1);
INSERT INTO contactManagerTypes (id, name, editable, defaultType, sortOrder) VALUES (2, 'Appointment Booked', 0, 0, 2);
INSERT INTO contactManagerTypes (id, name, editable, defaultType, sortOrder) VALUES (3, '2nd Appointment Booked', 0, 0, 3);
INSERT INTO contactManagerTypes (id, name, editable, defaultType, sortOrder) VALUES (4, 'Awaiting Decision', 0, 0, 4);
INSERT INTO contactManagerTypes (id, name, editable, defaultType, sortOrder) VALUES (5, 'Customer', 0, 0, 5);
INSERT INTO contactManagerTypes (id, name, editable, defaultType, sortOrder) VALUES (6, 'Live', 0, 0, 6);
INSERT INTO contactManagerTypes (id, name, editable, defaultType, sortOrder) VALUES (7, 'Dead', 0, 0, 7);



INSERT INTO `contactManagerRecords` (`id`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `notes`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `division`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `added`, `updated`) VALUES(1, 'mr', 'Carl', 'Fearby', '409 Queen Elizabeth Road', '', 'Nuneaton', 'Warwickshire', 'CV10 9BU', 'GB', '', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '', '', '', '2020-10-11 01:37:17', '2020-10-11 01:40:27');
INSERT INTO `contactManagerRecords` (`id`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `notes`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `division`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `added`, `updated`) VALUES(2, 'mr', 'Bob', 'Jones', '307 Queen Elizabeth Road', '', 'Nuneaton', 'Warwickshire', 'CV10 9BU', 'GB', '', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '', '', '', '2020-10-11 01:37:39', '2020-10-11 01:40:18');
INSERT INTO `contactManagerRecords` (`id`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `notes`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `division`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `added`, `updated`) VALUES(3, 'mr', 'Simon', 'James', '345 Queen Elizabeth Road', '', 'Nuneaton', 'Warwickshire', 'CV10 9BU', 'GB', '', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '', '', '', '2020-10-11 01:38:00', '2020-10-11 01:40:07');
INSERT INTO `contactManagerRecords` (`id`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `notes`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `division`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `added`, `updated`) VALUES(4, 'mr', 'Peter', 'Godwin', 'Flat 9', '431 Queen Elizabeth Road', 'Nuneaton', 'Warwickshire', 'CV10 9BU', 'GB', '', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '', '', '', '2020-10-11 01:38:28', '2020-10-11 01:39:57');
INSERT INTO `contactManagerRecords` (`id`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `notes`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `division`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `added`, `updated`) VALUES(5, 'mr', 'Derek', 'Ablegood', '333 Queen Elizabeth Road', '', 'Nuneaton', 'Warwickshire', 'CV10 9BU', 'GB', '', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '', '', '', '2020-10-11 01:38:51', '2020-10-11 01:38:51');
INSERT INTO `contactManagerRecords` (`id`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `notes`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `division`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `added`, `updated`) VALUES(6, 'mrs', 'Sarah', 'Ablegood', '333 Queen Elizabeth Road', '', 'Nuneaton', 'Warwickshire', 'CV10 9BU', 'GB', '', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '', '', '', '2020-10-11 01:39:00', '2020-10-11 01:39:39');
INSERT INTO `contactManagerRecords` (`id`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `notes`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `division`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `added`, `updated`) VALUES(7, 'mr', 'Mike', 'Trump', '311 Queen Elizabeth Road', '', 'Nuneaton', 'Warwickshire', 'CV10 9BU', 'GB', '', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '', '', '', '2020-10-11 01:39:13', '2020-10-11 01:39:13');
INSERT INTO `contactManagerRecords` (`id`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `notes`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `division`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `added`, `updated`) VALUES(8, 'lord', 'Stuart', 'Ebank', '415 Queen Elizabeth Road', '', 'Nuneaton', 'Warwickshire', 'CV10 9BU', 'GB', '', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '', '', '', '2020-10-11 01:41:03', '2020-10-11 01:41:03');
INSERT INTO `contactManagerRecords` (`id`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `notes`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `division`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `added`, `updated`) VALUES(9, 'lord', 'Tristen', 'Melbank', '7 Keepers Close', '', 'Burntwood', '', 'WS7 4UT', 'GB', '', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '', '', '', '2020-10-11 01:41:39', '2020-10-11 01:41:39');
INSERT INTO `contactManagerRecords` (`id`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `notes`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `division`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `added`, `updated`) VALUES(10, 'mr', 'William', 'Shakespear', '17 Keepers Close', '', 'Burntwood', '', 'WS7 4UT', 'GB', '', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '', '', '', '2020-10-11 01:41:59', '2020-10-11 01:41:59');
INSERT INTO `contactManagerRecords` (`id`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `notes`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `division`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `added`, `updated`) VALUES(11, 'mr', 'Homer', 'Simpson', '14 Kelynmead Road', '', 'Birmingham', 'West Midlands', 'B33 8HL', 'GB', '', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '', '', '', '2020-10-11 01:42:18', '2020-10-11 01:42:18');
INSERT INTO `contactManagerRecords` (`id`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `notes`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `division`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `added`, `updated`) VALUES(12, 'mr', 'Ben', 'Parsons', '104 Moor Lane', 'Bolehall', 'Tamworth', 'Staffordshire', 'B77 3LL', 'GB', '', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '', '', '', '2020-10-11 01:43:42', '2020-10-11 01:43:42');
INSERT INTO `contactManagerRecords` (`id`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `notes`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `division`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `added`, `updated`) VALUES(13, 'mr', 'Steven', 'McFearson', '5 Westfields', 'Birchmoor', 'Tamworth', 'Warwickshire', 'B78 1AL', 'GB', '', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '', '', '', '2020-10-11 01:44:06', '2020-10-11 01:44:06');
INSERT INTO `contactManagerRecords` (`id`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `notes`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `division`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `added`, `updated`) VALUES(14, 'mr', 'Andrew', 'Fyfe', '7 Westfields', 'Birchmoor', 'Tamworth', 'Warwickshire', 'B78 1AL', 'GB', '', '', '', '', '', '', '', 100, 2, 1, 1, '', '', '', '', '', '', '', '2020-10-11 01:44:23', '2020-10-11 01:44:23');
INSERT INTO `contactManagerRecords` (`id`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `notes`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `division`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `added`, `updated`) VALUES(15, '', '', '', 'Ash Tree House', 'Norman Court', 'Ashby-de-la-Zouch', '', 'LE65 2UZ', 'GB', '', '', '', '', '', '', '', 100, 3, 1, 1, '', '', 'Compusoft GB Ltd', '', '', '', '', '2020-10-11 02:06:48', '2020-10-11 02:06:48');
INSERT INTO `contactManagerRecords` (`id`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `notes`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `division`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `added`, `updated`) VALUES(16, '', '', '', 'Ash Tree House', 'Norman Court', 'Ashby-de-la-Zouch', '', 'LE65 2UZ', 'GB', '', '', '', '', '', '', '', 100, 3, 1, 1, '', '', 'E Q Software', '', '', '', '', '2020-10-11 02:06:52', '2020-10-11 02:06:52');
INSERT INTO `contactManagerRecords` (`id`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `notes`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `division`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `added`, `updated`) VALUES(17, '', '', '', 'The Estates Office Unit A1', 'Norman Court', 'Ashby-de-la-Zouch', '', 'LE65 2UZ', 'GB', '', '', '', '', '', '', '', 100, 3, 1, 1, '', '', 'Fisher German LLP', '', '', '', '', '2020-10-11 02:06:57', '2020-10-11 02:06:57');
INSERT INTO `contactManagerRecords` (`id`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `notes`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `division`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `added`, `updated`) VALUES(18, '', '', '', 'Unit A3', 'Norman Court', 'Ashby-de-la-Zouch', '', 'LE65 2UZ', 'GB', '', '', '', '', '', '', '', 100, 3, 1, 1, '', '', 'Incredible Kids', '', '', '', '', '2020-10-11 02:07:02', '2020-10-11 02:07:02');
INSERT INTO `contactManagerRecords` (`id`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `notes`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `division`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `added`, `updated`) VALUES(19, '', '', '', 'Ash Tree House', 'Norman Court', 'Ashby-de-la-Zouch', '', 'LE65 2UZ', 'GB', '', '', '', '', '', '', '', 100, 3, 1, 1, '', '', 'Intregrated Ordering Systems Ltd', '', '', '', '', '2020-10-11 02:07:08', '2020-10-11 02:07:08');
INSERT INTO `contactManagerRecords` (`id`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `notes`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `division`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `added`, `updated`) VALUES(20, '', '', '', 'Unit C', 'Norman Court', 'Ashby-de-la-Zouch', '', 'LE65 2UZ', 'GB', '', '', '', '', '', '', '', 100, 3, 1, 1, '', '', 'M I E S International Ltd', '', '', '', '', '2020-10-11 02:07:13', '2020-10-11 02:07:13');
INSERT INTO `contactManagerRecords` (`id`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `notes`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `division`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `added`, `updated`) VALUES(21, '', '', '', 'Cedar House Unit A4', 'Norman Court', 'Ashby-de-la-Zouch', '', 'LE65 2UZ', 'GB', '', '', '', '', '', '', '', 100, 3, 1, 1, '', '', 'Premtech Ltd', '', '', '', '', '2020-10-11 02:07:19', '2020-10-11 02:07:19');
INSERT INTO `contactManagerRecords` (`id`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `notes`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `division`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `added`, `updated`) VALUES(22, '', '', '', 'Trunet House', 'Norman Court', 'Ashby-de-la-Zouch', '', 'LE65 2UZ', 'GB', '', '', '', '', '', '', '', 100, 3, 1, 1, '', '', 'Trunet Packaging Services Ltd', '', '', '', '', '2020-10-11 02:07:28', '2020-10-11 02:07:28');
INSERT INTO `contactManagerRecords` (`id`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `notes`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `division`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `added`, `updated`) VALUES(23, '', '', '', 'Unit B1', 'Norman Court', 'Ashby-de-la-Zouch', '', 'LE65 2UZ', 'GB', '', '', '', '', '', '', '', 100, 3, 1, 1, '', '', 'Vivid Laminating Technologies Ltd', '', '', '', '', '2020-10-11 02:07:34', '2020-10-11 02:07:34');
INSERT INTO `contactManagerRecords` (`id`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `notes`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `division`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `added`, `updated`) VALUES(24, '', '', '', 'Unit A2', 'Norman Court', 'Ashby-de-la-Zouch', '', 'LE65 2UZ', 'GB', '', '', '', '', '', '', '', 100, 3, 1, 1, '', '', 'Woodward Vets', '', '', '', '', '2020-10-11 02:07:41', '2020-10-11 02:07:41');
INSERT INTO `contactManagerRecords` (`id`, `title`, `forename`, `surname`, `address`, `address2`, `town`, `county`, `postcode`, `country`, `notes`, `jobTitle`, `department`, `work`, `fax`, `mobile`, `email`, `group`, `category`, `status`, `type`, `website`, `division`, `company`, `accountNumber`, `username`, `password`, `allowLogin`, `added`, `updated`) VALUES(25, 'mr', 'Jones', 'Malcolm', '18 Ellastone Way', 'Amington', 'Tamworth', 'Staffordshire', 'B77 4FT', 'GB', '', 'Dev Manager', 'Development', '0121 765 4321', '', '07872 777666', 'malcome@jones.com', 100, 1, 1, 1, '', '', '', '', '', '', '', '2020-10-12 01:15:01', '2020-10-12 01:16:46');
