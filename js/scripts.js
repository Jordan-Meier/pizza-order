//BDD
function Pizza(name, toppings, size) {
  this.name = name;
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.sizePrice = function() {
  if (this.size === "small"){
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


//User Interface Logic
$(document).ready(function() {
  $("#myBtn").click(function() {
    $("#myModal").modal();

    var name = $("input#orderName").val();
    var toppings = 0;
    var toppingArray = [];
      $(".toppings:checked").each(function()  {
        toppingArray[toppings++] = parseInt($(this).val());
      });

    var size = $(".size:checked").val();
    var quantity = $("input#pizzaQuantity").val();
    var newPizza = new Pizza(name, toppings, size);
    var total = newPizza.pizzaPrice() * quantity;
    $(".order-name").text(name);
    $(".pizza-toppings").text(toppings);
    $(".pizza-size").text(size);
    $(".pizza-number").text(quantity);
    $(".pizza-price").text("$" + total);

    event.preventDefault();
  });

});
