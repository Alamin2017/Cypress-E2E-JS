import { SignInLocator } from "../pages/SignInPage";
describe('Color code test automation', () => {
    it('test started', () => {
        cy.visit("https://secure.login.gov/");
        SignInLocator.sign_in_button().click();
        SignInLocator.email_address_text_field().should('have.css', 'border-color', 'rgb(226, 28, 61)');
        SignInLocator.password_text_field().should('have.css', 'border-color', 'rgb(226, 28, 61)');

    });
});