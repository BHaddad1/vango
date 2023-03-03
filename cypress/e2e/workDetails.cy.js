describe('Work Details Page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/459123", {fixture: "vanGoghData"});
    cy.visit("http://localhost:3000/");
  });
  it("Should be able to click on a work and see more details about it on another page", () => {
    cy.get(":nth-child(1) > .card > a > .card-image").click();
    cy.on("url:changed", (newUrl) => {
      expect(newUrl).to.contain("/459123");
    });
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
  it("Should be able to add a work to favorites list on the Details page, and it should show up on the Favorites page", () => {
    cy.get(":nth-child(1) > .card > a > .card-image").should("be.visible");
    cy.get(":nth-child(1) > .card > a > .card-image").click();
    cy.get(".primary-img").should("be.visible");
    cy.get(".title-details").contains("Madame Roulin and Her Baby").should("be.visible");
    cy.get(".favorite-details").contains("Add to Favorites").should("be.visible");
    cy.get('[type="checkbox"]').check();
    cy.get('[type="checkbox"]').should('be.checked');
    cy.get(".back-button").eq(1).should("be.visible");
    cy.get(".back-button").eq(1).click();
    cy.get(".card-image").should("be.visible");
    cy.get(".card-title").contains("Madame Roulin and Her Baby").should("be.visible");
  });
})