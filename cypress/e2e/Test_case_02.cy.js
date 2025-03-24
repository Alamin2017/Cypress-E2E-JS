import PageObject from "../pageobject/PageObject";
describe('2--Practice the Automation', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.window().then((win)=> win.sessionStorage.clear());
        cy.visit("https://automationexercise.com/");
    });
    it('Test Case 1: Register User', () => {
        PageObject.homeObj.home_page_logo().should('exist');
        PageObject.homeObj.products_button().click();
        PageObject.productObj.all_products_title_text().should("have.text","All Products");
    });
    it('Test Case 2: Register User', () => {
        PageObject.homeObj.home_page_logo().should('exist');
        PageObject.homeObj.products_button().click();
        PageObject.productObj.all_products_title_text().should("have.text","All Products");
    });
});