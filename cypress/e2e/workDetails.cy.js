describe('Work Details Page', () => {
  beforeEach(() => {
    // cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/419570", {fixture: "vanGoghData"});
    cy.visit("http://localhost:3000/");
  });
  it("Should be able to click on a work and see more details about it on another page", () => {
    cy.get(".card-image").first().click();
    cy.on("url:changed", (newUrl) => {
      expect(newUrl).to.contain("/459123");
    })
    cy.get("img").first().should("be.visible");
    cy.get("label").contains("Add to Favorites").should("be.visible");
    cy.get(".title-details").contains("Madame Roulin and Her Baby by Vincent van Gogh").should("be.visible");
    cy.get(".work-details").first().contains("Gallery Number: 962").should("be.visible");
    cy.get(".work-details").eq(1).contains("Accession Year: 1975").should("be.visible");
    cy.get(".work-details").eq(2).contains("Dimensions: 25 x 20 1/8 in.").should("be.visible");
    cy.get(".work-details").eq(3).contains("Medium: Oil on canvas").should("be.visible");
    cy.get(".work-details").eq(4).contains("Department: Robert Lehman Collection").should("be.visible");
    cy.get(".work-details").eq(5).contains("Credit Line: Robert Lehman Collection, 1975").should("be.visible");
    cy.get(".work-details").eq(6).contains("More information: https://www.metmuseum.org/art/collection/search/459123").should("be.visible");
  });
  // it("Should be able to add a work to favorites list on the Details page", () => {
  //   cy.get("img").first().should("be.visible");
  //   cy.get("img").first().click();
  //   cy.get("img").should("be.visible");
  //   // cy.get(".favorite-details").contains("Add to Favorites").should("be.visible");
  // })
})