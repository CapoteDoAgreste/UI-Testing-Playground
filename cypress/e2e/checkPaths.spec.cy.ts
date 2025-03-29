import generalFunctions from "../support/pages/generalFunctions";

describe("Checking Url paths", () => {
  before(() => {
    cy.visit("");
  });
  it("empty path clicking on logo", () => {
    cy.get(".navbar-brand").click();
    generalFunctions.checkUrl("https://uitestingplayground.com/");
  });
  it("Home path clicking on home button", () => {
    cy.get(".nav-item").contains("Home").click();
    generalFunctions.checkUrl("https://uitestingplayground.com/home");
  });
  it("Resources path clicking in resources button", () => {
    cy.get(".nav-item").contains("Resources").click();
    generalFunctions.checkUrl("https://uitestingplayground.com/resources");
  });
});
