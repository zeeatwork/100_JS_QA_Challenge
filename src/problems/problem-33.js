/**
 * Problem 33: replaceEnvironment
 * Category: Strings
 *
 * Replace 'staging' with 'qa' in a URL-like string.
 * Examples: 'app-staging' → 'app-qa'
 * Practice focus: replace
 *
 * Timebox: 20 minutes or less.
 */
export function replaceEnvironment(value) {
  return value.replace('staging', 'qa');
}
