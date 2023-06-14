describe("drinks", () => {
  before(() => {
    // @todo Ideally would mock API
    // cy.intercept(
    //   "GET",
    //   "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=*",
    //   {
    //     statusCode: 200,
    //     body: {
    //       drinks: mockDrinks,
    //     },
    //   }
    // );
  });

  it("defaults to some list", () => {
    cy.visit("http://localhost:3000/drinks");

    cy.get("nav").should("have.text", "Thirsty?");
    cy.get("input").should("have.attr", "placeholder", "Find a drink");
    cy.get("div").should("not.be.empty");
  });

  it("searches drinks by name", () => {
    cy.visit("http://localhost:3000/drinks");

    // Initial page state
    cy.get("nav").should("have.text", "Thirsty?");
    cy.get("input").should("have.attr", "placeholder", "Find a drink");
    cy.get("div").should("not.be.empty");

    // Action
    cy.get("input").type("Mar");

    // Expectations
    cy.url().should("contain", "Mar");
    cy.get("div").children().should("contain", "Margarita");
    cy.get("div").children().should("contain", "Blue Margarita");
  });

});
