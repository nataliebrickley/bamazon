# Bamazon  
Bamazon is an Amazon-like storefront that will take in orders from customers and deplete stock from the store's inventory. Bamazon will also let the Manager add products to the inventory.  

## Customer View: 
1. The customer view can be accessed using the command *node bamazonCustomer.js*. When this command is entered, the user will be shown the current inventory, and be prompted to select the id of the item that they would like to purchase. Once an id is chosen, the user will be prompted to enter how many units they would like to purchase. Once this information is entered, the user will be notified of the cost of their purchase, and the products table will be updated. The user will then be given the option to make another purchase.   
[![Image from Gyazo](https://i.gyazo.com/b1c54f7ad0f1459892f31cd80a6d328b.gif)](https://gyazo.com/b1c54f7ad0f1459892f31cd80a6d328b)  

## Manager View:  
The manager view can be accessed using the command *node bamazonManager.js*. When this command is entered, the user will have 4 commands to choose from:
1. Choosing *View Products for Sale* will list every available item: the item IDs, names, prices, and quantities.  
[![Image from Gyazo](https://i.gyazo.com/9b4b586525bd9e74f2eb422f0b11ab0c.gif)](https://gyazo.com/9b4b586525bd9e74f2eb422f0b11ab0c)   
2. Choosing *View Low Inventory* will list all items with an inventory count lower than five.  
[![Image from Gyazo](https://i.gyazo.com/ddb42ec790ee1dd009cbfdcb5837ae7f.gif)](https://gyazo.com/ddb42ec790ee1dd009cbfdcb5837ae7f)    
3. Choosing *Add to Inventory* will prompt the user to choose which item they would like to add, and how many units. Once this information is entered, the products table will be updated to reflect this addition.  
[![Image from Gyazo](https://i.gyazo.com/868c00410675743ef4f161a86affec53.gif)](https://gyazo.com/868c00410675743ef4f161a86affec53)    
4. Choosing *Add new product* will allow the manager to add a completely new product to the store.
