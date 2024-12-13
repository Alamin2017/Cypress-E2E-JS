describe('Color code test automation', () => {
    it('test started', () => {
        cy.visit("https://www.skitto.com/");
        cy.xpath("//ul[@class='secondary_menu']//a[normalize-space()='contact us']").click();
        
    });
});