/**
 * Reference solution for Problem 83: isRetryableStatus
 */
export function isRetryableStatus(status) {
  return status === 'failed' || status === 'timed-out';
}
