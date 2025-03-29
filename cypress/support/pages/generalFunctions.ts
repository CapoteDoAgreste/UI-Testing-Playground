export default new (class GeneralFunctions {
  checkUrl(url: string) {
    cy.url().then((url) => {
      cy.wrap(url).should("eql", url);
    });
  }
})();
