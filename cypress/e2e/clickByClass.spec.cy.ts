import ClickByClass from "../support/flows/clickByClass";

describe("Click by css test", () => {
  const clickByClass = new ClickByClass();
  it("Should detect by class btn-primary", () => {
    clickByClass.clickByClass();
  });
});
