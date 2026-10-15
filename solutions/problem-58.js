/**
 * Reference solution for Problem 58: ?? (nullish coalescing) drill
 * Type: Drill
 */
export function getBaseUrl(configured) {
  return configured ?? 'http://localhost:3000';
}

export function getRetryCount(configured) {
  return configured ?? 2;
}

export function getHeadless(setting) {
  return setting ?? true;
}
