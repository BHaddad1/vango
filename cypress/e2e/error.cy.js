describe('template spec', () => {
  describe('Error Page', () => {
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
    it("Should show an error message when a user goes to a page that does not exist", () => {
      cy.visit("http://localhost:3000/whatever");
      cy.get("h1").contains("VanGo").should("be.visible");
      cy.get(".logo").should("be.visible");
      cy.get("h2").contains("Sorry, page not found.").should("be.visible");
      cy.get("button").contains("Go Back Home").should("be.visible");
    });
    it("Should be able to go to the home page from the error page", () => {
      cy.visit("http://localhost:3000/whatever");
      cy.get("button").click();
      cy.location('href').should("eq", "http://localhost:3000/");
    })
  });
});