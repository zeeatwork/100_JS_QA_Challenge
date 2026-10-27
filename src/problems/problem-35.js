/**
 * Problem 35: hasCaseInsensitiveStatus
 * Category: Strings
 *
 * Return true when a status matches 'passed' regardless of case.
 * Examples: 'PASSED' → true
 *
 * Timebox: 20 minutes or less.
 */
export function hasCaseInsensitiveStatus(status) {
  return status.toLowerCase() === 'passed';
}
