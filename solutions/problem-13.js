/**
 * Reference solution for Problem 13: needsAttention
 */
export function needsAttention(status) {
  return status === 'failed' || status === 'blocked';
}
