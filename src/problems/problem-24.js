/**
 * Problem 24: hasApiSuffix
 * Category: Strings
 *
 * Return true when a test name ends with '-api'.
 * Examples: 'orders-api' → true
 * Practice focus: endsWith
 *
 * Timebox: 20 minutes or less.
 */
export function hasApiSuffix(testName) {
  return testName.endsWith('-api');
}
