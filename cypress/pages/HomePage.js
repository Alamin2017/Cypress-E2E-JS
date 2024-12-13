class HomeLocator{

    home_page_logo(){
        return cy.xpath("//img[@alt='Website for automation practice']");
    }
    signup_login_button(){
        return cy.xpath("//a[normalize-space()='Signup / Login']");
    }
    products_button(){
        return cy.xpath("//a[@href='/products']");
    }
    
  
}
export default HomeLocator
