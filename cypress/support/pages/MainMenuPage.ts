export default class MainMenuPage {
  navbar = {
    logo: () => cy.get(".navbar-brand"),
    home: () => cy.get(".nav-item").contains("Home"),
    resources: () => cy.get(".nav-item").contains("Resources"),
  };

  openDynamicButton = () => cy.get("a").contains("Dynamic ID");
  openClassAttribute = () => cy.get("a").contains("Class Attribute");
}
