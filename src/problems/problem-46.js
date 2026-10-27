/**
 * Problem 46: isNaNValue
 * Category: Numbers
 *
 * Return true when the supplied value is the special NaN value.
 * Examples: NaN → true; 'x' → false
 *
 * Timebox: 20 minutes or less.
 */
export function isNaNValue(value) {
  return Number.isNaN(value);
}
