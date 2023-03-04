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
    cy.visit("http://localhost:3000/");
  });
  it("Should have a header", () => {
    cy.get(".logo").should("be.visible");
    cy.get("h1").contains("VanGo").should("be.visible");
  });
  it("Should have buttons and inputs for navigation", () => {
    cy.get("button").first().contains("Favorites").should("be.visible");
    cy.get("input").should("be.visible");
    cy.get(".input").should("be.visible");
    cy.get("button").eq(1).contains("Clear").should("be.visible");
    cy.get("button").eq(2).contains("About Me").should("be.visible");
  });
  it("Should be able to click on the Favorites button and be taken to the Favorites page", () => {
    cy.get("button").first().contains("Favorites").click();
    cy.url().should("include", "/favorites");
    cy.get(".header-container").should("be.visible");
    cy.get(".button-container-faves").should("be.visible");
    cy.get("button").eq(1).contains("About Me").should("be.visible");
  });
  it("Should be able to type into the search input, search a work by it's title, and press the clear button to see all works again", () => {
    cy.get(".input").type("Sunflowers").get(".card-image").first().should("have.attr", "src", "https://images.metmuseum.org/CRDImages/ep/web-large/DP229743.jpg").get("button").contains("Clear").click().get(".card-image").first().should("have.attr", "src", "https://images.metmuseum.org/CRDImages/rl/web-large/DT3154.jpg"); // Testing to see that when a user types the correct work appears, and then when they clear the search input, all of the works show in the order they're fetched. 
  });
  it("Should be able to click the About Me button and go to the About Me page", () => {
    cy.get("button").contains("About Me").click();
    cy.url().should("include", "/about");
    cy.get(".header-container").should("be.visible");
    cy.get(".logo").should("be.visible");
    cy.get("h1").contains("VanGo").should("be.visible");
    cy.get(".button-container").should("be.visible");
    cy.get('[href="/favorites"] > .button').should("be.visible");
    cy.get('[href="/"] > .button').should("be.visible");
    cy.get(".about-container").should("be.visible");
    cy.get("h2").contains("Blanche Haddad they/them").should("be.visible");
    cy.get('[href="https://www.linkedin.com/in/blanche-haddad-denver/"]').should("be.visible");
    cy.get('[href="https://github.com/BHaddad1"]').should("be.visible");
  })
  it("Should display a Van Gogh work and a title", () => {
    cy.get(".card-image").first().should("be.visible");
    cy.get(".card-title").first().contains("Madame Roulin and Her Baby").should("be.visible");
  });
})