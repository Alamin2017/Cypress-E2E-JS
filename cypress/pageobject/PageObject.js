import HomeLocator from "../pages/HomePage";
import ProductLocator from "../pages/ProductPage";
class PageObject{
    constructor(){
        this.homeObj=new HomeLocator();
        this.productObj=new ProductLocator();
        
    }
}
export default new PageObject;



