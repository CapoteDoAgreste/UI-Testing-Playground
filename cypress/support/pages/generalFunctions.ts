export default new (class GeneralFunctions {
  checkUrl(url: string) {
    cy.location('href')
      .should('include', url, { timeout: 60000 });
  }
})();