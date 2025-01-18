it('should login successfully with valid credentials', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.xpath("//input[@placeholder='Username']").type("Admin");
    cy.xpath("//input[@placeholder='Password']").type("admin123");
    cy.xpath("//button[normalize-space()='Login']").click();
    cy.xpath("//span[normalize-space()='My Info']").click();
    cy.xpath("//h6[normalize-space()='Custom Fields']").scrollIntoView().should('have.text',"Custom Fields");
});
