/**
 * @description   This class contains the custom types and interfaces used for the domain-specific language.
 */

//01. Import libraries and classes.
// Import the Playwright locator.
import { Locator } from "@playwright/test";

//02. Create and export the custom types.
/**
 * @description Type representing positive integers used for screen sizes.
 */
export type PositiveInteger = number;

/**
 * @description Type representing a URL.
 */
export type Url = string;

/**
 * @description Type representing a CSS or XPATH selector as a string or a Playwright locator object.
 */
export type LocatorOrElement = string | Locator;

/**
 * @description Type representing a CSS or XPATH selector as a string. 
 */
export type Selector = string;

/**
 * @description Type representing a Playwright locator object.
 */
export type Element = Locator | null;

/**
 * @description Type representing valid actions for checkable elements such as radio buttons and checkboxes.
 */
export type CheckOrClickAction = 'check' | 'click';

/**
 * @description Type representing valid actions for cunheckable elements such as radio buttons and checkboxes.
 */
export type UnCheckOrUnClickAction = 'uncheck' | 'click';

/**
 * @description Type representing valid actions for the keyboard.
 */
export type KeyboardKeys = "Alt" | "Control" | "Meta" | "Shift" | "ArrowDown" | "Tab" ;