/**
 * Reference solution for Problem 99: needsRerun
 */
export function needsRerun(status, attempts) {
  return status === 'failed' && attempts < 3;
}
