import DynamicButtonPage from "../pages/DynamicButtonPage";
import generalFunctions from "./generalFunctions";

export default new (class DynamicButton {
  page = new DynamicButtonPage();
  enterInDymicButtonScreen() {
    cy.visit("");

    this.page.openDynamicButton().click();

    generalFunctions.checkUrl("https://uitestingplayground.com/dynamicid");
  }
  clickWithCssSelector() {
    this.page.buttonCss().click();
  }
  clickWithContains() {
    this.page.buttonContains().click();
  }
})();
