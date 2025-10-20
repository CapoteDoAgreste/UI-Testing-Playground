import ClickByClassPage from "../pages/ClickByClassPage";

export default class ClickByClass {
  private page = new ClickByClassPage();
  clickByClass() {
    this.page.openClassAttribute().click();
    this.page.button().click();
  }
}
