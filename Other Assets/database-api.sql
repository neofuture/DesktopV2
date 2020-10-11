CREATE TABLE users (
    id int(200) primary key auto_increment,
    forename varchar(200),
    surname varchar(200),
    dateCreated datetime,
    dateUpdated datetime,
    lastLogin datetime,
    emailAddress varchar(200),
    password varchar(200),
    activated int(1)
);

INSERT INTO users (id, forename, surname, emailAddress, password, activated) VALUES (1, 'Carl', 'Fearby', 'carlfearby@me.com', PASSWORD('password'), 1);
