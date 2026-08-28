/**
 * Reference solution for Problem 39: getDomain
 */
export function getDomain(email) {
  return email.slice(email.indexOf('@') + 1);
}
