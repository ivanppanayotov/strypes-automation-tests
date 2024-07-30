/**
 * @description     This class shows the solution for dismissing alert pop-up windows.
 *                  The class contains examples of Playwright commands and domain-specific language (custom methods).
 *                  As you can see in the Playwright example/s, we use both domain-specific language methods and Playwright functions. The example related to this class is shown in Playwright functions, and the other part of the code is shown (most probably) in domain-specific language methods.
 */

//01. Import libraries and classes.
// Import Playwright test library.
import { test, expect, Page } from "@playwright/test";
// Import the domain-specific language class.
import DomainSpecificLanguage from "../../custom-methods/domain-specific-language/dsl";

//02. Create the "describe" block.
test.describe("This block contains examples for dismissing alert pop-up windows.", async () => {
  let page: Page; // Create a new variable for Page. Add a specific type (of the Page class) to enable the suggestions.
  let dsl: DomainSpecificLanguage; // Create a new variable for a domain-specific language. Add a specific type (of the domainSpecificLanguage class) to enable the suggestions.

  //03. Create the "beforeAll" block.
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage(); // Add value to 'page'.
    dsl = new DomainSpecificLanguage(page); // Create a new 'dsl' and include 'page' inside.
  });

  //04. Create the "beforeEach" block.
  test.beforeEach(async () => {
    // Navigate to the URL address.
    await dsl.navigateTo("https://demoqa.com/alerts/");
  });

  //05. Create the "test" block/s.
  test("Playwright Example", async () => {
    // Handle the alert pop-up window.
    page.once("dialog", async (dialog) => {
      // Assert to verify that the pop-up window contains the expected text.
      expect(dialog.message()).toEqual("Do you confirm action?");
      // Dismiss the pop-up window.
      await dialog.dismiss();
    });
    // Click the element that forces the alert pop-up window. It is a bit confusing, but we should take this action after handling the alert pop-up window.
    await dsl.click("#confirmButton");
    // Assert that the operation was compleated correctly.
    expect(await dsl.getText("#confirmResult")).toEqual("You selected Cancel");
  });

  test("Domain-Specific Language Example 1", async () => {
    // Provide the locator of a button that triggers the alert pop-up window and provide the text contained inside the alert pop-up window.
    dsl.alertCancel("#confirmButton", "Do you confirm action?");
    // Assert that the operation was compleated correctly.
    await dsl.getText("#confirmResult", "You selected Cancel");
  });

  test("Domain-Specific Language Example 2", async () => {
    // Provide the locator of a button that triggers the alert pop-up window.
    dsl.alertCancel("#confirmButton");
    // Assert that the operation was compleated correctly.
    await dsl.getText("#confirmResult", "You selected Cancel");
  });
});
