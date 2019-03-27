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
VALUES ("TV", "Electronics", 500, 5), ("Monopoly", "Games", 35, 10), ("Toaster", "Appliances", 25, 12), 
("Sandals", "Clothing", 15, 20), ("Yahtzee", "Games", 35, 7), ("Computer", "Electronics", 700, 4), 
("Pencils", "Office Supplies", 3, 13), ("Lipstick", "Beauty", 6, 6), ("Cat Food", "Pet Supplies", 20, 15), 
("Jeans", "Clothing", 25, 3);

SELECT * FROM products;

 -- Departments:
 CREATE TABLE departments(
	department_id INT AUTO_INCREMENT NOT NULL,
    department_name VARCHAR(35) NOT NULL,
    over_head_costs INT(10) NOT NULL,
    PRIMARY KEY(department_id)
 );
 SELECT departments.department_id, products.department_name, departments.over_head_costs
 FROM products
 INNER JOIN departments ON products.department_name = departments.department_name;