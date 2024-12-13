import ObjectManager from "../pageobject/PageObject";
describe('1--Practice the automation', () => {

    before('Navigate to url',() => {
        cy.clearLocalStorage();
        cy.visit("https://automationexercise.com/");
    });
    it('Verify that home page is visible successfully', () => {
        ObjectManager.homeObj.home_page_logo().should('exist');
    });
    it('Click on Signup/Login button', () => {
        ObjectManager.homeObj.signup_login_button().click();
    });
    
});