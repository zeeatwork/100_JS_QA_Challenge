/**
 * Problem 18: isWithinRetryLimit
 * Category: Evaluators
 *
 * Return true when retryCount is less than or equal to 2.
 * Examples: 2 → true; 3 → false
 *
 * Timebox: 20 minutes or less.
 */
export function isWithinRetryLimit(retryCount) {
  return retryCount <= 2;
}
