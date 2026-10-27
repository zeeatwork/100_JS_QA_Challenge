/**
 * Problem 40: getUsername
 * Category: Strings
 *
 * Return the part before '@' in an email address.
 * Examples: 'qa@example.com' → 'qa'
 *
 * Timebox: 20 minutes or less.
 */
export function getUsername(email) {
  return email.slice(0, email.indexOf('@'));
}
