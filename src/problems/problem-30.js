/**
 * Problem 30: getLastCharacter
 * Category: Strings
 *
 * Return the last character of a ticket key.
 * Examples: 'QA-104' → '4'
 *
 * Timebox: 20 minutes or less.
 */
export function getLastCharacter(ticketKey) {
  return ticketKey[(ticketKey.length)-1];
}
