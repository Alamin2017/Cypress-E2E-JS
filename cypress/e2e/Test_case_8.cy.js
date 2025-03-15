import Actions from "../support/actions";
import { DashboardPage } from "../pages/DashboardPage";
describe('File upload test automation', () => {
    it('performs the test steps', () => {
      cy.clearCookies();
      cy.clearLocalStorage();
      cy.window().then((win)=> win.sessionStorage.clear());
      cy.visit("https://automationexercise.com/");
      Actions.elementVisible(DashboardPage.logo_locator);
      Actions.clickElement(DashboardPage.signup_login_locator);
      Actions.textValidation(DashboardPage.new_user_signup_text,"New User Signup!");

    });
  });
  