
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.sizePrice = function() {
  if (this.size == "small"){
    return 10;
  } else if (this.size === "medium") {
    return 15;
  } else if (this.size === "large") {
    return 20;
  } else {
    return 25;
  }
}

Pizza.prototype.pizzaPrice = function() {
  var sizePrice = this.sizePrice(this.size);
  var totalPrice = sizePrice + (this.toppings * 0.75);
  return totalPrice;
}
