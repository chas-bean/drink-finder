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

  it("shows a single drink", () => {
    cy.visit("http://localhost:3000/drinks?q=Mar");

    // Initial page state
    cy.get("input").should("contain.value", "Mar");
    cy.get("div").should("not.be.empty");

    // Action
    cy.get("div").children().first().click();

    // Expectations
    cy.url().should("equal", "http://localhost:3000/drinks/11007"); // @todo Should be mock ID
  });
});
