const cartItems = [
    {
        id: "fty",
        productName: "Nike Sneaker",
        description: "A beautiful pair of nike sneaker",
        price: 100,
        imageUrl: "assets/baskets.png",
        isFavorite: false,
        quantity: 0,
    },
    {
        id: "rty",
        productName: "Nike socks",
        description: "A beautiful pair of nike socks",
        price: 20,
        imageUrl: "assets/socks.png",
        isFavorite: true,
        quantity: 0,

    },
    {
        id: "uty",
        productName: "Nike Bag",
        description: "A beautiful pair of nike Bag",
        price: 50,
        imageUrl: "assets/bag.png",
        isFavorite: false,
        quantity: 0,

    },
];

// target product list div
const productListDiv = document.querySelector(".list-products");
const totalPriceSpan = document.querySelector(".total");

// render cart items to the DOM
function renderCartItem() {
    productListDiv.innerHTML = "";
    totalPriceSpan.textContent = "";
    let productTotalPrice = 0;
    // loop through cart items array
    for(cartItem of cartItems) {

        let itemPrice = cartItem.price * cartItem.quantity;
        productTotalPrice += itemPrice;

        totalPriceSpan.textContent = `$${productTotalPrice}`;

        // create a new card div
        const cartCard = document.createElement("div");
        cartCard.classList.add("card-body");

        cartCard.innerHTML = `   <div class="card-body">
            <div class="card" style="width: 18rem">
              <img
                src=${cartItem.imageUrl}
                class="card-img-top"
                alt="baskets"
              />
              <div class="card-body">
                <h5 class="card-title">${cartItem.productName}</h5>
                <p class="card-text">${cartItem.description}</p>
                <h4 class="unit-price">${cartItem.price} $</h4>
                <div>
                  <i class="fas fa-plus-circle"  value=${cartItem.id}></i>
                  <span class="quantity">${cartItem.quantity}</span>
                  <i class="fas fa-minus-circle" value=${cartItem.id}></i>
                </div>
                <div>
                  <i class="fas fa-trash-alt" value=${cartItem.id}></i>
                   
                 <i class="fas fa-heart ${cartItem.isFavourite ? 'heart' : ''}" value=${cartItem.id} 
                     style="color: ${cartItem.isFavourite ? 'red' : 'black'};"></i>
              
                </div>
              </div>
            </div>
          </div>`;

          productListDiv.appendChild(cartCard);
    }

 const increaseItemBtn =  document.getElementsByClassName("fa-plus-circle");
 const decreaseCartItemBtn = document.getElementsByClassName("fa-minus-circle");
 const deleteItemBtn = document.getElementsByClassName("fa-trash-alt");
 const favouriteItemBtn = document.getElementsByClassName("fa-heart");

    // loop over the array of increaseItemBtn
    for (increaseBtn of increaseItemBtn) {
        increaseBtn.addEventListener("click", increaseCartItemPrice);
    }
    // loop over the array of decreaseItemBtn
    for (decreaseBtn of decreaseCartItemBtn) {
        decreaseBtn.addEventListener("click", decreaseCartItemPrice);
    }
 // loop over the array of deleteItemBtn
 for (deleteItem of deleteItemBtn) {
    deleteItem.addEventListener("click", deleteCartItem);
 }
    // loop over the array for favoriteItemsBtn
    for (let favouriteItem of favouriteItemBtn) {
        favouriteItem.addEventListener("click", toggleFavourite);
    }
}
// call the renderCartItems function on window load
window.addEventListener("load", renderCartItem);

function increaseCartItemPrice(event){
    const productId = event.target.getAttribute("value");


    const foundProductIndex = cartItems.findIndex(item => item.id === productId);


    const productToUpdate = cartItems[foundProductIndex];


    const updateProduct = {...productToUpdate, quantity: (productToUpdate.quantity += 1),};

    cartItems[foundProductIndex] = updateProduct;

    return renderCartItem();
}

function decreaseCartItemPrice(event){
    const productId = event.target.getAttribute("value");


    const foundProductIndex = cartItems.findIndex(item => item.id === productId);


    const productToUpdate = cartItems[foundProductIndex];


    const updateProduct = {...productToUpdate,
        quantity: productToUpdate.quantity > 0 ? productToUpdate.quantity - 1: 0};

    cartItems[foundProductIndex] = updateProduct;

    return renderCartItem();
}

// To delete cart items quantity and price
function deleteCartItem(event) {
    // get id of the product 

    const productId = event.target.getAttribute("value");

    // find the index of the product on the cart items array

    const foundProductIndex = cartItems.findIndex( item => item.id ===productId);

    // check if the product is found in the cart
    if (foundProductIndex < 0) {
        return
    }
    cartItems.splice(foundProductIndex, 1);

    return renderCartItem();
}

function toggleFavourite(event) {
    const productId = event.target.getAttribute("value");
  
    // Find the index of the clicked product in the cartItems array
    const foundProductIndex = cartItems.findIndex(item => item.id === productId);
  
    // Toggle the isFavourite status of the found product
    if (foundProductIndex !== -1) {
      cartItems[foundProductIndex].isFavourite = !cartItems[foundProductIndex].isFavourite;
    }
  
    renderCartItem();
  }










