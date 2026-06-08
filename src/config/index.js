/**
 * Application configuration
 * Centralizes environment variables and app-wide settings.
 *
 * - `publicConfig` contains only NEXT_PUBLIC_* values safe for the browser bundle.
 * - `serverConfig` contains server-only values (API keys, secrets paths, internal URLs).
 *   Import `serverConfig` only in API routes, middleware, and server components.
 * - The default export merges both for backward-compatibility in server-side code.
 */

/** Public config — safe to import from client components */
export const publicConfig = {
 
};

/** Server-only config — never import from client components */
export const serverConfig = {
  keyVaultPath: "app-secrets/secrets/secrets.json",
};

/** Combined config (backward-compatible default export for server-side code) */
const config = {
  ...publicConfig,
  ...serverConfig,
};

export default config;
