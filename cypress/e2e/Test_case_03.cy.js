import PageObject from "../pageobject/PageObject";
describe('Code test automation', () => {
    it('test started', () => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.window().then((win)=> win.sessionStorage.clear());
        cy.visit("https://automationexercise.com/login");
        PageObject.loginObj.name_input_field().type("tania");
        PageObject.loginObj.email_address_input_field().type("tania12@gmail.com");
    });
});