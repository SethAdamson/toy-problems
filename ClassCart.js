//Day 1

// Over a few toy problems we will be building out a class that constructs a cart object and also includes a few methods to manipulate the data, things like adding to the cart and calculating the total.
// To start you will want to make a class called Cart that includes a constructor function. Have the constructor function take in a single parameter that will be the items in the cart. Set that value equal to a value called this.cart
// Second we will want to create a method that will take in an id and then remove the item from the cart with the matching id
// You will want to save this because we will be adding to it in the future.

// Day 2

// We will be building onto the same Cart class from earlier.
// This time we are adding the functions to calculate the total price of the cart.
// First we will be doing the calculate total method. Before we can do that we need to alter our constructor function to take in a tax rate, and keep track of the total price of the cart.
// Add two values in the constructor called total and taxRate. The constructor function should also take in another parameter and set that to the tax rate.
// When the calculate total runs it should set the total value to the total cost of the cart.
// We will also want this function to run any time we remove an item from the cart so the total automatically updates. We also want this to run after all the initial values are set.

// Day 3

// We will be building onto the same Cart class from earlier.
// This time we are adding in the ability to update the quantity of a specific item in the cart.
// This method will take in two parameters, first being the id of the item to update, and second the quantity to set it to.
// After updating the quantity it should recalculate the total of the whole cart.

// Day 4

// We will be building onto the same Cart class from earlier.
// The final step will be building out the functionality to add items to a cart.
// This method will take in an object that will be the item to add to the cart.
// Before we can just add the item to the cart we need to check if that item already exists.
// If it does exist just increase the quantity by one, if it does not push it into the cart.
// Recalculate the total.

class Cart {
    constructor(cartItems, tax){
      this.cart = cartItems;
      this.taxRate = tax;
      this.total = this.totalPrice();
    }
    removeItem(id){
      let copy = this.cart.slice();
        //this.cart = this.cart.filter(e => e.id !== id)
        for(let i=0; i<this.copy.length; i++){
            if(this.copy[i].id===id){
                this.copy.splice(i, 1);
                return this.cart = copy;
            }
        }
    }

    totalPrice(tax) {
      let total = 0;
      this.cart.forEach(elem => {
        total += (elem.price * (1 + this.taxRate)) * elem.quantity
      });
      this.total = total;
      return +total.toFixed(2);
    }

    updateQuantity(id, quantity) {
      for(let i=0; i<this.cart.length; i++){
        if(this.cart[i].id === id){
          this.cart[i].id = quantity;
        }
      }
      this.totalPrice();
    }

    addItems(obj) {
      let idx = this.cart.findIndex(e => e.id === obj.id && e.product === obj.product)
      idx === -1 ? this.cart.push(obj) : this.cart[idx].quantity++;
      this.totalPrice();
    }
}
  
  
  
  
let cartItems =  [
    {
      id: 1,
      product: 'Bob Ross Paint Kit',
      price: 45.99,
      quantity: 2,
    },
    {
      id: 2,
      product: 'Paint Palette',
      price: 7.99,
      quantity: 3,
    },
    {
      id: 3,
      product: 'Paint Thinner',
      price: 15.99,
      quantity: 2,
    },
  ];

  let cart1 = new Cart(cartItems);
  cart1.removeItem(1);
  console.log(cart1);