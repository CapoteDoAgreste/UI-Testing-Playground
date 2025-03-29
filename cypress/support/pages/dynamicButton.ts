import generalFunctions from "./generalFunctions";

export default new (class DynamicButton {
  enterInDymicButtonScreen() {
    cy.visit("");

    cy.get("a").contains("Dynamic ID").click();

    generalFunctions.checkUrl("https://uitestingplayground.com/dynamicid");
  }
  clickWithCssSelector() {
    cy.get(".btn-primary").click();
  }
  clickWithContains() {
    cy.get("button").contains("Button with Dynamic ID").click();
  }
})();
