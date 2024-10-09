class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }


  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  }

  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }

  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    removeItem(index) {
      this.items.splice(index, 1);
    }
  
    getTotalPrice() {
      return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
  }


  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    getTotalItems() {
      return this.items.length;
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    removeItem(index) {
      this.items.splice(index, 1);
    }
  
    displayCartItems() {
      console.log("Your shopping cart:");
      this.items.forEach((item, index) => {
        console.log(`${index + 1}. ${item.product.name} - Quantity: ${item.quantity} - Total Price: ${item.getTotalPrice()}`);
      });
    }
  }


  // Create products
const product1 = new Product(1, "Laptop", 1000);
const product2 = new Product(2, "Smartphone", 500);

// Create a shopping cart
const shoppingCart = new ShoppingCart();

// Add items to the cart
shoppingCart.addItem(new ShoppingCartItem(product1, 2));
shoppingCart.addItem(new ShoppingCartItem(product2, 3));

// Display the cart
shoppingCart.displayCartItems();

// Remove an item from the cart
shoppingCart.removeItem(0);

// Display the updated cart
shoppingCart.displayCartItems();