import HomeLocator from "../pages/HomePage";
import ProductLocator from "../pages/ProductPage";
import { LoginLocator } from "../pages/LoginPage";
class PageObject{
    constructor(){
        this.homeObj=new HomeLocator();
        this.productObj=new ProductLocator();
        this.loginObj=new LoginLocator();
        
    }
}
export default new PageObject;



