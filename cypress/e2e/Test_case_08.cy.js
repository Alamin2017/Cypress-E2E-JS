
// import Actions from "../pageobject/Action";
// import { DashboardPage } from "../pages/DashboardPage";
// describe('File upload test automation', () => {

//     it('performs the test steps', () => {
//       cy.clearCookies();
//       cy.clearLocalStorage();
//       cy.window().then((win)=> win.sessionStorage.clear());
//       cy.visit("https://automationexercise.com/");
//       Actions.elementVisible(DashboardPage.logo_locator);
//       Actions.clickElement(DashboardPage.signup_login_locator);
//       Actions.textValidation(DashboardPage.new_user_signup_text,"New User Signup!");
      
//     });

//   });

describe('Cypress Session Example', () => {

  beforeEach(() => {
    // Manually clear session-related storage before running the tests
    cy.session('loginSession', () => {
      cy.clearCookies();
      cy.clearLocalStorage();
      cy.window().then((win) => win.sessionStorage.clear());
      cy.visit('https://automationexercise.com/login');
      cy.xpath("//input[@data-qa='login-email']").type('tania1212@gmail.com');
      cy.xpath("//input[@placeholder='Password']").type('tania1212');
      cy.xpath("//button[normalize-space()='Login']").click();
    }, 
    {
      validate: () => {
        // Validate if session is still active; if not, it will be re-created
        cy.xpath("//a[normalize-space()='Logout']").should('be.visible');
      }
    }
  );
    // Ensure we are on the homepage after session restoration
    // cy.visit('https://automationexercise.com/');
});

  it('Test Case 1: Verify Features Items', () => {
    cy.xpath("//h2[normalize-space()='Features Items']").should('be.visible');
  });
  it('Test Case 2: Click to cart button', () => {
    cy.xpath("//a[normalize-space()='Cart']").click();
  });
  it('Test Case 3: Click to Logout button', () => {
    cy.xpath("//a[normalize-space()='Logout']").click();
  });


});
