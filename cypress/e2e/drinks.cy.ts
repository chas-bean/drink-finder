describe("drinks", () => {
  it("defaults to empty list", () => {
    cy.visit("http://localhost:3000/drinks");

    cy.get("nav").should("have.text", "Thirsty?");
    cy.get("input").should("have.attr", "placeholder", "Find a drink");
    cy.get("div").should("be.empty");
  });

});
