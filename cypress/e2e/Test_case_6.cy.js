it('should login successfully with valid credentials', () => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.window().then((win)=> win.sessionStorage.clear());
    cy.visit('https://automationexercise.com/');

    cy.xpath("//a[normalize-space()='Home']").should('have.text', ' Home');
    cy.xpath("//div[@class='col-sm-9 padding-right']//div[2]//div[1]//div[2]//ul[1]//li[1]//a[1]").click();
    cy.xpath("//button[normalize-space()='Add to cart']").click();
    cy.xpath("//u[normalize-space()='View Cart']").click();
    cy.xpath("//a[normalize-space()='Proceed To Checkout']").click();
    cy.xpath("//u[normalize-space()='Register / Login']").click();

    // Generate a random email
    const randomEmail = `test${Date.now()}@example.com`;

    cy.xpath('//*[@id="form"]/div/div/div[3]/div/form/input[2]').type('tania');
    cy.xpath('//*[@id="form"]/div/div/div[3]/div/form/input[3]').type(randomEmail);
    cy.xpath('//*[@id="form"]/div/div/div[3]/div/form/button').click();

    cy.xpath('//*[@id="id_gender1"]').check();
    cy.xpath('//*[@id="password"]').type('34567890');
    cy.get('#days').select('14');
    cy.get('#months').select('July');
    cy.get('#years').select('2006');
    cy.xpath('//*[@id="newsletter"]').check();
    cy.xpath('//*[@id="optin"]').check();
    cy.xpath('//*[@id="first_name"]').type('tania');
    cy.xpath('//*[@id="last_name"]').type('akter');
    cy.xpath('//*[@id="address1"]').type('dhaka');
    cy.xpath('//*[@id="state"]').type('Dhaka');
    cy.xpath('//*[@id="city"]').type('Khilkhet');
    cy.xpath('//*[@id="zipcode"]').type('1229');
    cy.xpath('//*[@id="mobile_number"]').type('01723456721');
    cy.xpath('//*[@id="form"]/div/div/div/div[1]/form/button').click();

    cy.xpath("//b[normalize-space()='Account Created!']").should('have.text', 'Account Created!');
    cy.xpath('//*[@id="form"]/div/div/div/div/a').click();

    cy.xpath("//header[@id='header']//li[10]").should('have.text', ' Logged in as tania');
    cy.xpath("//a[normalize-space()='Cart']").click();
    cy.xpath("//a[normalize-space()='Proceed To Checkout']").click();

    cy.xpath("//h2[normalize-space()='Address Details']").should('have.text', 'Address Details');
    cy.xpath("//h2[normalize-space()='Review Your Order']").should('have.text', 'Review Your Order');

    cy.xpath("//textarea[@name='message']").type("Already order some products");
    cy.xpath("//a[normalize-space()='Place Order']").click();

    cy.get('input[name="name_on_card"]').type('sumon');
    cy.get('input[name="card_number"]').type('4485233521979909');
    cy.xpath("//input[@placeholder='ex. 311']").type('748');
    cy.xpath("//input[@placeholder='MM']").type('9');
    cy.xpath("//input[@placeholder='YYYY']").type('2025');
    cy.xpath("//button[@id='submit']").click();

    cy.wait(2000); // Cypress discourages static waits; prefer `.should()` where possible
    cy.xpath("//p[normalize-space()='Congratulations! Your order has been confirmed!']").should('contain.text', 'Congratulations! Your order has been confirmed!');
    cy.get(":nth-child(5) > a").click();
    cy.get('[data-qa="continue-button"]').click();

});
