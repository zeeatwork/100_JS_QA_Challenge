/**
 * Problem 37: isBlankText
 * Category: Strings
 *
 * Return true when text is empty after trimming.
 * Examples: '   ' → true; 'x' → false
 * Practice focus: trim + ===
 *
 * Timebox: 20 minutes or less.
 */
export function isBlankText(text) {
  return text.trim() === ''; 
}
