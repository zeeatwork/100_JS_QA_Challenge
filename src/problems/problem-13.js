/**
 * Problem 13: needsAttention
 * Category: Evaluators
 *
 * Return true when status is 'failed' OR 'blocked'.
 * Examples: 'blocked' → true
 * Practice focus: ||
 *
 * Timebox: 20 minutes or less.
 */
export function needsAttention(status) {
  return status === 'failed' || status === 'blocked';
}
