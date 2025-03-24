import ObjectManager from "../pageobject/PageObject";
import * as url from "../support/urls"
describe('1--Practice the automation', () => {

    before('Navigate to url',() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.window().then((win)=> win.sessionStorage.clear());
        cy.visit(url.PageUrl1);
    });
    it('Verify that home page is visible successfully', () => {
        ObjectManager.homeObj.home_page_logo().should('exist');
    });
    it('Click on Signup/Login button', () => {
        ObjectManager.homeObj.signup_login_button().click();
    });
    
});