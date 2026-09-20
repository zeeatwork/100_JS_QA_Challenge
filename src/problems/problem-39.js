/**
 * Problem 39: getDomain
 * Category: Strings
 *
 * Return the part after '@' in an email address.
 * Examples: 'qa@example.com' → 'example.com'
 * Practice focus: indexOf + slice
 *
 * Timebox: 20 minutes or less.
 */
export function getDomain(email) {
  return email.slice(email.indexOf('@') + 1);
}
