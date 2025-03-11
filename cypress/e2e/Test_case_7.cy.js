describe('File upload test automation', () => {
    it('performs the test steps', () => {
      cy.clearCookies();
      cy.clearLocalStorage();
      cy.window().then((win)=> win.sessionStorage.clear());
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.get("input[placeholder='Username']").type("Admin");
      cy.get("input[placeholder='Password']").type("admin123");
      cy.contains("button", "Login").click();
      cy.contains("span", "My Info").click();
      cy.contains("button", "Add").click();
      cy.wait(2000);
      cy.xpath("//input[@type='file']").selectFile('D:\\CypressE2E\\cypress\\fixtures\\Point-Out-Manual-Check.txt',{force:true});
      cy.wait(2000);
      cy.get("textarea[placeholder='Type comment here']").type("Test Purpose");
      cy.wait(2000);
      cy.get(".orangehrm-attachment button[type='submit']").click();
      cy.get("i.oxd-icon.bi-trash").click();
      cy.wait(2000);
      cy.contains("button", "Yes, Delete").click();
      cy.wait(2000);
    });
  });
  