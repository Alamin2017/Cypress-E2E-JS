describe('Cypress Session Example', () => {

  beforeEach(() => {
    
    cy.session('loginSession', () => {
      cy.clearCookies();
      cy.clearLocalStorage();
      cy.window().then((win)=> win.sessionStorage.clear());
      cy.visit('https://automationexercise.com/login');
      cy.xpath("//input[@data-qa='login-email']").type('tania1212@gmail.com');
      cy.xpath("//input[@placeholder='Password']").type('tania1212');
      cy.xpath("//button[normalize-space()='Login']").click();
      // cy.url().should('eq', 'https://automationexercise.com/'); 
    },{
      validate: () => {
        // Validate if session is still active; if not, it will be re-created
        cy.url().should('eq', 'https://automationexercise.com/'); 
      }
    });
    // Ensure we are on the homepage after session restoration
    // cy.visit('https://automationexercise.com/');
  });

  it('Test Case 1: Verify Features Items', () => {
    cy.xpath("//h2[normalize-space()='Features Items']").should('be.visible');
  });

  it('Test Case 2: Scroll to Bottom', () => {
    cy.xpath("//a[normalize-space()='Logout']").click();
  });
  
});
