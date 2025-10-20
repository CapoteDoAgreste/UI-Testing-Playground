import MainMenuPage from "../pages/MainMenuPage";
import generalFunctions from "./generalFunctions";

export default new (class checkPaths {
  page = new MainMenuPage();
  emptyPathLogo() {
    this.page.navbar.logo().click();
    generalFunctions.checkUrl("https://uitestingplayground.com/");
  }
  homePath() {
    this.page.navbar.home().click();
    generalFunctions.checkUrl("https://uitestingplayground.com/home");
  }
  resourcesPath() {
    this.page.navbar.resources().click();
    generalFunctions.checkUrl("https://uitestingplayground.com/resources");
  }
})();
