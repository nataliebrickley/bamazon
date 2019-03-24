DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products(
	item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(35) NOT NULL,
    department_name VARCHAR(35) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT(10) NOT NULL, 
    PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("TV", "Electronics", 500, 10), ("Monopoly", "Games", 35, 20), ("Toaster", "Appliances", 25, 15), 
("Sandals", "Clothing", 15, 50), ("Yahtzee", "Games", 35, 15), ("Computer", "Electronics", 700, 9), 
("Pencils", "Office Supplies", 3, 20), ("Lipstick", "Beauty", 6, 40), ("Cat Food", "Pet Supplies", 20, 16), 
("Jeans", "Clothing", 25, 30);

SELECT * FROM products