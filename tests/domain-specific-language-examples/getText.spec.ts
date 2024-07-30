/**
 * @description     This class shows the solution for getting text from an element that contains the text.
 *                  The class contains examples of Playwright commands and domain-specific language (custom methods).
 *                  As you can see in the Playwright example/s, we use both domain-specific language methods and Playwright functions. The example related to this class is shown in Playwright functions, and the other part of the code is shown (most probably) in domain-specific language methods.
 */

//01. Import libraries and classes.
// Import Playwright test library.
import { test, expect, Page } from "@playwright/test";
// Import the domain-specific language class.
import DomainSpecificLanguage from "../../custom-methods/domain-specific-language/dsl";

//02. Create the "describe" block.
test.describe("This block contains examples for getting text from an element that contains the text.", async () => {
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
    await dsl.navigateTo("https://demoqa.com/text-box/");
  });

  //05. Create the "test" block/s.
  test("Playwright Example", async () => {
    // Declare an element and call this method, to verify that the element is present and it is ready for usage.
    let element = await dsl.element("#permanentAddress-label", 10000);
    // Get the text of an inspected element and assign it to a variable. As you can see, we are getting the first value from the list because "all text contents" return an array list.
    let elementTextValue: string = (await element.allTextContents())[0];
    // Assert that the operation was compleated correctly.
    expect(elementTextValue).toEqual("Permanent Address");
  });

  test("Domain-Specific Language Example 1", async () => {
    // Provide the locator and expected text value.
    await dsl.getText("#permanentAddress-label", "Permanent Address");
  });

  test("Domain-Specific Language Example 2", async () => {
    // Provide the locator
    let textValue = await dsl.getText("#permanentAddress-label");
    // Assert that the operation was compleated correctly.
    expect(textValue).toEqual("Permanent Address");
  });

  test("Domain-Specific Language Example 3", async () => {
    // Declare an element.
    let element = await dsl.element("#permanentAddress-label", 10000);
    // Provide the element and expected text value.
    await dsl.getText(element, "Permanent Address");
  });

  test("Domain-Specific Language Example 4", async () => {
    // Declare an element.
    let element = await dsl.element("#permanentAddress-label", 10000);
    // Provide the element.
    let textValue = await dsl.getText(element);
    // Assert that the operation was compleated correctly.
    expect(textValue).toEqual("Permanent Address");
  });
});
