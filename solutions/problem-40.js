/**
 * Reference solution for Problem 40: getUsername
 */
export function getUsername(email) {
  return email.slice(0, email.indexOf('@'));
}
