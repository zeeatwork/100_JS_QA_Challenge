/**
 * Problem 23: hasProdPrefix
 * Category: Strings
 *
 * Return true when a test name starts with 'prod-'.
 * Examples: 'prod-login' → true
 *
 * Timebox: 20 minutes or less.
 */
export function hasProdPrefix(testName) {
 return testName.startsWith('prod-');
}
