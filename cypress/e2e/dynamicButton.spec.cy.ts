describe("template spec", () => {
  it("Enter in dynamic ID screen", () => {
    cy.visit("");

    cy.get("a").contains("Dynamic ID").click();

    cy.url().then((url) => {
      cy.wrap(url).should("eql", "https://uitestingplayground.com/dynamicid");
    });
  });
  it("Click using css selector", () => {
    cy.get(".btn-primary").click();
  });
  it("Click using contains", () => {
    cy.get("button").contains("Button with Dynamics ID").click();
  });
});
