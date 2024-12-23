import { SignInLocator } from "../pages/SignInPage";
describe('Color code test automation', () => {
    it('test-1', () => {
        cy.visit("https://secure.login.gov/");
        SignInLocator.sign_in_button().click();
        SignInLocator.email_address_text_field().should('have.css', 'border-color', 'rgb(226, 28, 61)');
        SignInLocator.password_text_field().should('have.css', 'border-color', 'rgb(226, 28, 61)');
    });
    it.only('test-2', () => {
        cy.visit("https://www.buy.vendidit.com/");
        cy.xpath("//button[normalize-space()='Sign Up']").click();
        cy.xpath("//input[@placeholder='Email']").type("test@gmail.com");
        cy.xpath("//input[@placeholder='First Name']").type("test");
        cy.xpath("//input[@placeholder='Last Name']").type("amin");
        cy.xpath("//button[normalize-space()='Continue']").click();
    });
});