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
VALUES ("TV", "Electronics", 500, 100), ("Monopoly", "Games", 35, 200), ("Toaster", "Appliances", 25, 75), 
("Sandals", "Clothing", 15, 50), ("Yahtzee", "Games", 35, 150), ("Computer", "Electronics", 700, 90), 
("Pencils", "Office Supplies", 3, 70), ("Lipstick", "Beauty", 6, 40), ("Cat Food", "Pet Supplies", 20, 60), 
("Jeans", "Clothing", 25, 60);

SELECT * FROM products