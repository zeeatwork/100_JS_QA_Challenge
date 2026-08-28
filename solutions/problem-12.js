/**
 * Reference solution for Problem 12: canRetry
 */
export function canRetry(status, retryCount) {
  return status === 'failed' && retryCount < 2;
}
