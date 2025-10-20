import checkPaths from "../support/flows/checkPaths";

describe("Checking Url paths", () => {
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
