INSERT INTO users (id, username, email, enabled, password) VALUES ('277a8158-fe9f-4c2b-9803-ee7d23927c71', 'admin', null, true, '$2a$10$9OJhEIj3eZo3A7pTbPJC8e6cExaFTs3EOVjwLUS9JK5TXPCtBUx2e');
INSERT INTO users (id, username, email, enabled, password) VALUES ('277a8158-fe9f-4c2b-9803-ee7d23927c72', 'user1', null, true, '$2a$10$9OJhEIj3eZo3A7pTbPJC8e6cExaFTs3EOVjwLUS9JK5TXPCtBUx2e');
INSERT INTO users (id, username, email, enabled, password) VALUES ('277a8158-fe9f-4c2b-9803-ee7d23927c73', 'user2', null, true, '$2a$10$9OJhEIj3eZo3A7pTbPJC8e6cExaFTs3EOVjwLUS9JK5TXPCtBUx2e');

INSERT INTO authorities (authority, username) VALUES ('ADMIN', 'admin');
INSERT INTO authorities (authority, username) VALUES ('USER', 'user1');
INSERT INTO authorities (authority, username) VALUES ('USER', 'user2');

INSERT INTO category (title) VALUES ('Электроника');
INSERT INTO category (title) VALUES ('Машины');
INSERT INTO category (title) VALUES ('Одежда');
INSERT INTO category (title) VALUES ('Недвижимость');

INSERT INTO subcategory (title, category_id) VALUES ('Телефоны','1');
INSERT INTO subcategory (title, category_id) VALUES ('Компьютеры','1');
INSERT INTO subcategory (title, category_id) VALUES ('Наушники','1');
INSERT INTO subcategory (title, category_id) VALUES ('Прочее','1');

INSERT INTO subcategory (title, category_id) VALUES ('Легковые','2');
INSERT INTO subcategory (title, category_id) VALUES ('Грузовые','2');

INSERT INTO subcategory (title, category_id) VALUES ('Верхняя одежда','3');
INSERT INTO subcategory (title, category_id) VALUES ('Головные уборы','3');
INSERT INTO subcategory (title, category_id) VALUES ('Штаны','3');

INSERT INTO subcategory (title, category_id) VALUES ('Квартиры','4');
INSERT INTO subcategory (title, category_id) VALUES ('Частные дома','4');