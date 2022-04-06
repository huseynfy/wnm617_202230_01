CREATE TABLE IF NOT EXISTS `users` (
`id` INT NULL,
`name` VARCHAR(MAX) NULL,
`username` VARCHAR(MAX) NULL,
`email` VARCHAR(MAX) NULL,
`password` VARCHAR(MAX) NULL,
`img` VARCHAR(MAX) NULL,
`date_create` VARCHAR(MAX) NULL
);

INSERT INTO users VALUES
(1,'Alisha Schneider','user1','user1@gmail.com',md5('pass'),'https://via.placeholder.com/400/966/fff/?text=user1','2022-03-09 06:39:49'),
(2,'Tara Jordan','user2','user2@gmail.com',md5('pass'),'https://via.placeholder.com/400/798/fff/?text=user2','2022-03-06 08:54:36'),
(3,'Glover Conrad','user3','user3@gmail.com',md5('pass'),'https://via.placeholder.com/400/906/fff/?text=user3','2022-01-25 08:56:51'),
(4,'Maddox Lindsay','user4','user4@gmail.com',md5('pass'),'https://via.placeholder.com/400/759/fff/?text=user4','2022-02-01 06:28:08'),
(5,'Parsons Hensley','user5','user5@gmail.com',md5('pass'),'https://via.placeholder.com/400/837/fff/?text=user5','2022-01-26 11:14:51'),
(6,'Allyson Powell','user6','user6@gmail.com',md5('pass'),'https://via.placeholder.com/400/896/fff/?text=user6','2022-02-27 03:41:57'),
(7,'Hicks Dawson','user7','user7@gmail.com',md5('pass'),'https://via.placeholder.com/400/815/fff/?text=user7','2022-02-05 07:44:41'),
(8,'Alma Stuart','user8','user8@gmail.com',md5('pass'),'https://via.placeholder.com/400/837/fff/?text=user8','2022-01-09 01:42:33'),
(9,'Jacquelyn Whitaker','user9','user9@gmail.com',md5('pass'),'https://via.placeholder.com/400/719/fff/?text=user9','2022-02-16 12:59:15'),
(10,'Mccoy Shepherd','user10','user10@gmail.com',md5('pass'),'https://via.placeholder.com/400/887/fff/?text=user10','2022-01-04 02:20:56');