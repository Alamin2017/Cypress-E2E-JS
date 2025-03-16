// class Actions {
//     clickElement(locator) {
//       return cy.xpath(locator).click();
//     }
//     textValidation(locator,expectedText) {
//         return cy.xpath(locator).invoke('text').then((actualText)=>{
//             expect(actualText).to.equal(expectedText);
//         });
//     }
//     doEnterValue(locator, value) {
//         return cy.xpath(locator).clear().type(value);
//     }
//     elementVisible(locator){
//         return cy.xpath(locator).should('be.visible');
//     }
// }  
// export default new Actions;

class Actions {
    async clickElement(locator) {
        try {
            await cy.xpath(locator).click();
        } 
        catch (error) {
            cy.log(`Error clicking element: ${locator}, Error: ${error.message}`);
            throw error;
        }
    }
    async textValidation(locator, expectedText) {
        try {
            await cy.xpath(locator).invoke('text').then((actualText) => {
                expect(actualText.trim()).to.equal(expectedText);
            });
        } 
        catch (error) {
            cy.log(`Text validation failed for: ${locator}, Error: ${error.message}`);
            throw error;
        }
    }
    async doEnterValue(locator, value) {
        try {
            await cy.xpath(locator).clear().type(value);
        } 
        catch (error) {
            cy.log(`Error entering value in: ${locator}, Error: ${error.message}`);
            throw error;
        }
    }
    async elementVisible(locator) {
        try {
            await cy.xpath(locator).should('be.visible');
        } 
        catch (error) {
            cy.log(`Element not visible: ${locator}, Error: ${error.message}`);
            throw error;
        }
    }
}
export default new Actions;
  