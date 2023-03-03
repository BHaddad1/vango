describe('Work Details Page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/459123", {fixture: "madameRoulin"});
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/436533", {fixture: "shoes"});
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/437984", {fixture: "cradle"});
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/436535", {fixture: "wheatField"});
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/436528", {fixture: "irises"});
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/436532", {fixture: "strawHat"});
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/459193", {fixture: "etten"});
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/436529", {fixture: "madameJoseph"});
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/436530", {fixture: "oleanders"});
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/436531", {fixture: "woman"});
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/436527", {fixture: "orchard"});
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/336327", {fixture: "asylum"});
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/437998", {fixture: "olive"});
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/438722", {fixture: "potato"});
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/436526", {fixture: "steps"});
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/436524", {fixture: "sunflowers"});
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/436536", {fixture: "pickingOlives"});
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/436534", {fixture: "roses"});
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/437980", {fixture: "cypresses"});
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/436525", {fixture: "bouquet"});
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/336318", {fixture: "street"});
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/849056", {fixture: "doctor"});
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/335537", {fixture: "wheatFields"});
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/849055", {fixture: "weeds"});
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/849054", {fixture: "appleTree"});
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/849052", {fixture: "gate"});
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/276299", {fixture: "letters"});
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