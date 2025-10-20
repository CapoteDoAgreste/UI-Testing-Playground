import MainMenuPage from "./MainMenuPage";

export default class ClickByClassPage extends MainMenuPage {
  button = () => cy.get("button.btn-primary");
}
