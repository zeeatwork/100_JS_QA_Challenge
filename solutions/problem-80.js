/**
 * Reference solution for Problem 80: isPositiveFinite
 */
export function isPositiveFinite(value) {
  return Number.isFinite(value) && value > 0;
}
