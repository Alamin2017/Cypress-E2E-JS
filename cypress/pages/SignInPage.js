export class SignInLocator{
    
    static sign_in_button(){
        return cy.xpath("//button[normalize-space()='Sign in']");
    }
    static email_address_text_field(){
        return cy.xpath("//input[@id='user_email']");
    }
    static password_text_field(){
        return cy.xpath("//input[@name='user[password]']");
    }

}
