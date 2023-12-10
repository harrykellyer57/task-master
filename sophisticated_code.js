/**
 * filename: sophisticated_code.js
 *
 * This code demonstrates a sophisticated and elaborate implementation of a fictional e-commerce website's shopping cart functionality.
 */

// Define essential global variables
let cart = []; // Array to store the items added to the cart
let totalPrice = 0; // Variable to keep track of the total price of items in the cart

// Define a class representing a product
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

// Function to add a product to the cart
function addToCart(product) {
  cart.push(product);
  totalPrice += product.price * product.quantity;
}

// Function to remove a product from the cart
function removeFromCart(product) {
  const index = cart.findIndex((item) => item.name === product.name);
  if (index !== -1) {
    totalPrice -= cart[index].price * cart[index].quantity;
    cart.splice(index, 1);
  }
}

// Function to update the quantity of a product in the cart
function updateQuantity(product, newQuantity) {
  const index = cart.findIndex((item) => item.name === product.name);
  if (index !== -1) {
    totalPrice -= cart[index].price * cart[index].quantity;
    cart[index].quantity = newQuantity;
    totalPrice += cart[index].price * newQuantity;
  }
}

// Function to calculate the average price of all items in the cart
function calculateAveragePrice() {
  if (cart.length === 0) {
    return 0;
  }
  return totalPrice / cart.length;
}

// Function to empty the cart
function emptyCart() {
  cart = [];
  totalPrice = 0;
}

// Sample usage of the shopping cart functionality

// Create some sample products
const product1 = new Product("Shirt", 20, 2);
const product2 = new Product("Shoes", 50, 1);

// Add products to the cart
addToCart(product1);
addToCart(product2);

// Update the quantity of a product in the cart
updateQuantity(product2, 2);

// Remove a product from the cart
removeFromCart(product1);

// Calculate and log the average price of products in the cart
console.log("Average Price:", calculateAveragePrice());

// Empty the cart
emptyCart();

// Display the final cart and total price
console.log("Cart:", cart);
console.log("Total Price:", totalPrice);

// ... More advanced features and functionalities of an e-commerce website could be added below
// such as user authentication, payment processing, order tracking, etc.
// This is just a simplified example to demonstrate the shopping cart functionality.