describe('Pizza', function() {
  it("creates a new pizza with the given specifications", function() {
    var testPizza = new Pizza("Wayne", 1, "large");
    expect(testPizza.orderName).to.equal("Wayne");
    expect(testPizza.size).to.equal("large");
    expect(testPizza.toppings).to.equal(1);
  });

  it("creates a base price for a small sized pizza", function () {
    var testPizza = new Pizza ("Wayne", 0, "small");
    expect(testPizza.sizePrice()).to.equal(10);
  });

  it("creates a base price for a medium sized pizza", function () {
    var testPizza = new Pizza ("Wayne", 0, "medium");
    expect(testPizza.sizePrice()).to.equal(15);
  });

  it("creates a base price for a large sized pizza", function () {
    var testPizza = new Pizza ("Wayne", 0, "large");
    expect(testPizza.sizePrice()).to.equal(20);
  });

  it("creates a base price for an extra large sized pizza", function () {
    var testPizza = new Pizza ("Wayne", 0, "extra large");
    expect(testPizza.sizePrice()).to.equal(25);
  });

  it("creates a prototype method to calculate a total price from sizePrice plus number of toppings added", function () {
    var testPizza = new Pizza ("Wayne", 3, "medium");
    expect(testPizza.pizzaPrice()).to.equal(17.25);
  })

});
