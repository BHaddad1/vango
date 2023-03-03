describe('Main Page', () => {
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
    cy.intercept("GET", "https://collectionapi.metmuseum.org/public/collection/v1/objects/", {fixture: ""});

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