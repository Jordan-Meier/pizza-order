describe('Pizza', function() {
  it("creates a new pizza with the given specifications", function() {
    var testPizza = new Pizza(1, "large");
    expect(testPizza.size).to.equal("large");
    expect(testPizza.toppings).to.equal(1);
  });

  it("creates a base price for a small sized pizza", function () {
    var testPizza = new Pizza (0, "small");
    expect(testPizza.sizePrice()).to.equal(10);
  });

  it("creates a base price for a medium sized pizza", function () {
    var testPizza = new Pizza (0, "medium");
    expect(testPizza.sizePrice()).to.equal(15);
  });

  it("creates a base price for a large sized pizza", function () {
    var testPizza = new Pizza (0, "large");
    expect(testPizza.sizePrice()).to.equal(20);
  });

});
