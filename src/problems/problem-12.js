/**
 * Problem 12: canRetry
 * Category: Evaluators
 *
 * Return true when a test failed AND retryCount is less than 2.
 * Examples: 'failed', 1 → true
 *
 * Timebox: 20 minutes or less.
 */
export function canRetry(status, retryCount) {
  return status === 'failed' && retryCount < 2;
}
