/**
 * Problem 36: getStatusCharacters
 * Category: Strings
 *
 * Return the character count of a status after trimming.
 * Examples: ' passed ' → 6
 * Practice focus: trim + length
 *
 * Timebox: 20 minutes or less.
 */
export function getStatusCharacters(status) {
  return status.trim().length;
}
