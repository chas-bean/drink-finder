describe("drinks", () => {
  before(() => {
    // @todo Ideally would mock API
  });

  it("defaults to some list", () => {
    cy.visit("http://localhost:3000/drinks");

    cy.get("input").should("have.attr", "placeholder", "Find a drink");
    cy.get("ul").should("not.be.empty");
  });

  it("searches drinks by name", () => {
    cy.visit("http://localhost:3000/drinks");

    // Action
    cy.get("input").type("Mar");

    // Expectations
    cy.url().should("contain", "Mar");
    cy.get("ul").children().should("contain", "Margarita");
    cy.get("ul").children().should("contain", "Blue Margarita");
  });

  it("initializes from query param", () => {
    cy.visit("http://localhost:3000/drinks?q=Mar");

    // Expectations
    cy.get("input").should("contain.value", "Mar");
    cy.get("ul").should("not.be.empty");
  });

  it("shows a single drink", () => {
    // Action
    // @fix Navigation not occurring on click
    cy.visit("http://localhost:3000/drinks/11007");

    // Expectations
    cy.get("main").children().get("img").should("exist");
    cy.get("main").children().get("p").should("contain", "Margarita");
  });
});
