it('data driven test automation', () => {
    cy.fixture("orange_hrm").then((data)=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        data.forEach((user_data)=>{
            cy.xpath("//input[@placeholder='Username']").type(user_data.username);
            cy.xpath("//input[@placeholder='Password']").type(user_data.password);
            cy.xpath("//button[normalize-space()='Login']").click();
            if(user_data.username=='Admin' && user_data.password=='admin123')
            {
                cy.xpath("//h6[normalize-space()='Dashboard']").should('have.text',user_data.expected);
                cy.xpath("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click();
                cy.wait(2000);
                cy.xpath("//a[normalize-space()='Logout']").click();
            }
            else
            {
                cy.xpath("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").should("have.text",user_data.expected);
            }
        });
    });
});
const test_data=require("../fixtures/login_data.json")
it('should login successfully with valid credentials', () => {
    cy.visit("https://demo.applitools.com/index.html");
    cy.get("#username").type(test_data.user.username);
    cy.get("#password").type(test_data.user.password);
    cy.get("#log-in").click();
    cy.url().should("not.include", "/index.html");
});
// cy.xpath("//div[@class='alert alert-danger mt5 ng-star-inserted'] | //p[contains(text(),'We are unable to access your account due to an inv')]").should('be.visible').then(($msg) => {
//       const errorMsg = $msg.text().trim();
//       if (errorMsg === "Verification Code is invalid") {
//         cy.log("Test is completed");
//       } 
//       else if (errorMsg === "We are unable to access your account due to an invalid verification code. Please contact Participant Services at 888.333.6315, option 1.") {
//         cy.Unlock_LOCK_Status();
//       } 
//       else {
//         cy.log("Unknown error message: " + errorMsg);
//       }
// });
  