describe("Portfolio Home Page", () => {
  it("Loads home page", () => {
    cy.visit("http://localhost:5173/");
    cy.contains("Welcome").should("exist");
    cy.contains("Projects").should("exist");
  });
});
