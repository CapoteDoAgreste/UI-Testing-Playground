import dynamicButton from "../support/pages/dynamicButton";

describe("Clicking in a button with a dynamic ID", () => {
  it("Enter in dynamic ID screen", () => {
    dynamicButton.enterInDymicButtonScreen();
  });
  it("Click using css selector", () => {
    dynamicButton.clickWithCssSelector();
  });
  it("Click using contains", () => {
    dynamicButton.clickWithContains();
  });
});
