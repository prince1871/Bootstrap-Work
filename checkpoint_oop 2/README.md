  Overview
This project implements a simple shopping cart application using JavaScript classes. The application models products, shopping cart items, and a shopping cart.

Classes and their properties:
  <!-- Product: -->

- id: Unique identifier for the product.
- name: Name of the product.
- price: Price of the product.

<!-- ShoppingCartItem: -->

- product: Reference to a Product object.
- quantity: Quantity of the product in the shopping cart.

<!-- ShoppingCart: -->

- items: Array of ShoppingCartItem objects.

N/A
<!-- ShoppingCartItem: -->

- getTotalPrice(): Calculates the total price of the item based on its quantity and product price.

<!-- ShoppingCart: -->

- getTotalItems(): Returns the total number of items in the shopping cart.
- addItem(item): Adds a ShoppingCartItem to the cart.
removeItem(index): Removes a ShoppingCartItem from the cart at a given index.
- displayCartItems(): Displays the contents of the shopping cart, including item name, quantity, and total price.
- getTotalPrice(): Calculates the total price of all items in the cart.


