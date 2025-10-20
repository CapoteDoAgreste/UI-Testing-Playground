import MainMenuPage from "./MainMenuPage";

export default class DynamicButtonPage extends MainMenuPage {
  buttonCss = () => cy.get(".btn-primary");
  buttonContains = () => cy.get("button").contains("Button with Dynamic ID");
}
