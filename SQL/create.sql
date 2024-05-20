CREATE DATABASE EOS CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE TABLE User(
  userId VARCHAR(60) CHARACTER SET utf8mb4,
  username VARCHAR(20) CHARACTER SET utf8mb4,
  profileImg VARCHAR(200),
  created DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  Updated DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  PRIMARY KEY(userId)
);
 
 INSERT INTO User(userId,username,profileImg) VALUES
 ('짱짱맨','김기재','img_1'),
 ('정공','김우리','img_2'),
 ('asd','박규현','img_3'),
 ('컴박사','박근원','img_4'),
 ('문도박사','이규근','img_5');
 
 
SELECT userId, username
FROM User
ORDER BY created DESC
LIMIT 1;

SELECT username
FROM User
WHERE userId = 'asd';

DELETE 
FROM User
WHERE username = '박근원';

UPDATE User
SET userId = 'dsa'
WHERE username = '김기재';