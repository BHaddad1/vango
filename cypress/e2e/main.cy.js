describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/459123", {fixture: "vanGoghData"});
    cy.visit("http://localhost:3000/");
  });
  it("Should have a header", () => {
    cy.get(".logo").should("be.visible");
    cy.get("h1").contains("VanGo").should("be.visible");
  });
  it("Should have buttons and inputs for navigation", () => {
    cy.get("button").first().contains("Favorites").should("be.visible");
    cy.get("input").should("be.visible");
    cy.get("button").eq(1).contains("Clear").should("be.visible");
  });
  it("Should display a Van Gogh work and a title", () => {
    cy.get(".card-image").first().should("be.visible");
    cy.get(".card-title").first().contains("Madame Roulin and Her Baby").should("be.visible");
  });
})