import generalFunctions from "./generalFunctions";

export default new (class checkPaths {
  emptyPathLogo() {
    cy.get(".navbar-brand").click();
    generalFunctions.checkUrl("https://uitestingplayground.com/");
  }
  homePath() {
    cy.get(".nav-item").contains("Home").click();
    generalFunctions.checkUrl("https://uitestingplayground.com/home");
  }
  resourcesPath() {
    cy.get(".nav-item").contains("Resources").click();
    generalFunctions.checkUrl("https://uitestingplayground.com/resources");
  }
})();
