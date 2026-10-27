/**
 * Problem 31: getTicketPrefix
 * Category: Strings
 *
 * Return the first three characters of a ticket key.
 * Examples: 'QA-104' → 'QA-'
 *
 * Timebox: 20 minutes or less.
 */
export function getTicketPrefix(ticketKey) {
  return ticketKey.slice(0,3);
}
