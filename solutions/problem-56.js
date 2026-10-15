/**
 * Reference solution for Problem 56: Number.parseInt drill
 * Type: Drill
 */
export function parseDurationMs(text) {
  return Number.parseInt(text, 10);
}

export function parseRetryAfter(headerValue) {
  return Number.parseInt(headerValue, 10);
}

export function getMajorVersion(version) {
  return Number.parseInt(version, 10);
}
