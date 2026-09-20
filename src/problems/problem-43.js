/**
 * Problem 43: toFixedScore
 * Category: Numbers
 *
 * Return a score rounded to two decimal places as a string.
 * Examples: 98.126 → '98.13'
 * Practice focus: toFixed
 *
 * Timebox: 20 minutes or less.
 */
export function toFixedScore(score) {
  return Number.parseFloat(score).toFixed(2);
}
