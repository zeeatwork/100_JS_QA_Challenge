/**
 * Problem 32: getTicketIdText
 * Category: Strings
 *
 * Return the numeric portion of a ticket key as text.
 * Examples: 'QA-104' → '104'
 *
 * Timebox: 20 minutes or less.
 */
export function getTicketIdText(ticketKey) {
  return ticketKey.slice(3);
}
