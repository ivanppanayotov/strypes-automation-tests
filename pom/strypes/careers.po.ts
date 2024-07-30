//01. Import libraries and classes.
// Import Playwright test library.
import { expect, Page } from "@playwright/test";
// Import BaseClass.
import { BaseClass } from "../../baseClass/baseClass";

//02. Declare a class.
class CareersPom extends BaseClass {
  //03. Declare a page variable.

  //04. Declare elements and selectors.
  greatPlaceToWork_button: string;
  clickLiardice: string;
  dropdown: string;
  technology: string;
  scrollbutton: string;
  watchvideo: string;
 
  //05. Declare a constructor.
  constructor(page: Page) {
    // Add 'super' because the constructor for the derived class must contain that call. Add 'page' argument inside.
    super(page);
    //06. Get access to the page property.
    this.page = page;

    //07. Add selectors.
    this.greatPlaceToWork_button = `(//*[@class="elementor-widget-container"]/a)[3]`;
    this.clickLiardice = '//*[@href="/careers/liars-dice/"]';
    this.dropdown = '//div[@class ="facetwp-facet facetwp-facet-jobs_by_technology facetwp-type-dropdown"]' ;
    this.technology = '//option[@value="python-development"]';
    this.watchvideo = '//*[@data-id="6c8d6a87"]'
    this.scrollbutton = '//div[@id ="ast-scroll-top"]';

  }

  /**
   * @description       This method changes the screen size.
   */
  async screenSize() {
    // Set the screen size to 1920-1080.
    await this.dsl.screenSize(1920, 1080);
  }

  /**
   * @description       This method navigates the user to the URL address.
   * @param url         Provide the URL address where the automation will redirect the user.
   */
  async navigate(url: string) {
    // Navigate to: https://strypes.eu/careers/ .
    await this.dsl.navigateTo(url);
  }

  /**
   * @description       This method fills the input text element.
   * @param assertUrl   Provide the URL address that should be loaded after pressing the 'Great Place To Work' button.
   */
  async clickGreatPlaceToWork () {
    // Click on the "Great Place To Work"
    // Assert URL for Great Place to Work page
    await this.dsl.click(this.greatPlaceToWork_button,this.page)
    await expect(this.page).toHaveURL('https://strypes.eu/blog/strypes-group-great-place-to-work-certification/')

    
  }
  async LiarsDice() {
    // Click on the "Lisa'sDice"
    // Assert URL for Lisa's Dice page
    await this.dsl.click(this.clickLiardice,this.page)
    await expect(this.page).toHaveURL('https://strypes.eu/careers/liars-dice/')
   
  }
  async Dropdown(){
   await this.page.click(this.dropdown)
   await this.page.keyboard.down('Tab');
   await this.page.keyboard.press('ArrowDown');
   await expect(this.page).toHaveURL('https://strypes.eu/careers/?_jobs_by_technology=python-development')
   


  }
async Watchvideo(){
  //Click on the "Watch Video"
  //Can not assert if the video player is opened
  await this.dsl.click(this.watchvideo,this.page)
}
async Scrollbutton(){
  //Click on the "scrollbutton"
  await this.dsl.click(this.scrollbutton,this.page)
  expect(this.scrollbutton).toBe(0)
  
}
}

//09. Export the class
export default CareersPom;
