/**
 * Problem 47: clampRetryCount
 * Category: Numbers
 *
 * Return retryCount, but never below 0.
 * Examples: -2 → 0; 2 → 2
 * Practice focus: Math.max
 *
 * Timebox: 20 minutes or less.
 */
export function clampRetryCount(retryCount) {
  if (retryCount <= 0){
    return 0;
  } else {
    return retryCount;
  }
}
