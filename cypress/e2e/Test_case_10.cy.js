describe('Cypress Session Example', () => {
  
  beforeEach(() => {
    cy.session('loginSession', () => {
      cy.clearCookies();
      cy.clearLocalStorage();
      cy.window().then((win) => win.sessionStorage.clear());
      cy.visit('https://www.saucedemo.com/');
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
      cy.url().should('include', 'inventory.html');
    },{
      validate: () => {
        // Validate if session is still active; if not, it will be re-created
        cy.url().should('include', 'inventory.html');
      }
    });
  });

  it('Test Case 1: Verify Features Items', () => {
    cy.xpath("//div[normalize-space()='Sauce Labs Backpack']").should('exist');
  });

  it('Test Case 2: Scroll to Bottom', () => {
    cy.xpath("//div[normalize-space()='Sauce Labs Backpack']").should('be.visible').click();
    cy.get('[data-test="add-to-cart"]').click();
  });

});
