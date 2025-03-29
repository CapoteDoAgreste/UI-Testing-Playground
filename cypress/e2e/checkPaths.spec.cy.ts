import checkPaths from "../support/pages/checkPaths";

describe("Checking Url paths", () => {
  before(() => {
    cy.visit("");
  });
  it("empty path clicking on logo", () => {
    checkPaths.emptyPathLogo();
  });
  it("Home path clicking on home button", () => {
    checkPaths.homePath();
  });
  it("Resources path clicking in resources button", () => {
    checkPaths.resourcesPath();
  });
});
