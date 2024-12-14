export class LoginLocator{
    name_input_field(){
        return cy.xpath("//input[@placeholder='Name']");
    }
    email_address_input_field(){
        return cy.xpath("//input[@data-qa='signup-email']");
    }
}