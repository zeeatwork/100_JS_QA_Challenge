/**
 * Problem 48: capWorkers
 * Category: Numbers
 *
 * Return workerCount, but never above 8.
 * Examples: 10 → 8; 4 → 4
 *
 * Timebox: 20 minutes or less.
 */
export function capWorkers(workerCount) {
  return Math.min(workerCount, 8);
}
