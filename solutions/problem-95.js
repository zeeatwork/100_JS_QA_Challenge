/**
 * Reference solution for Problem 95: getEmailDomainLength
 */
export function getEmailDomainLength(email) {
  return email.slice(email.indexOf('@') + 1).length;
}
