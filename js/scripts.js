
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.sizePrice = function(){
  if (this.size == "small"){
    return 10;
  } else if (this.size === "medium") {
    return 15;
  } else if (this.size === "large") {
    return 20;
  }
}
