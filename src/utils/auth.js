import { USER_STORAGE_KEY, AUTH_ROUTES } from "@/constants/authConstants";

/**
 * Auth utility functions.
 * Handles user data retrieval and logout via internal API routes.
 *
 * User data is stored in localStorage (NOT sessionStorage) so it
 * persists across browser tabs. The JWT token is NEVER stored here —
 * it lives only in the HTTP-only cookie managed by the server.
 */

/**
 * Save user data to localStorage (non-sensitive data only — no token).
 */
export function saveUser(userData) {
  if (typeof window === "undefined") return;
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userData));
}

/**
 * Get user data from localStorage.
 * Returns null if not found or invalid.
 */
export function getUser() {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(USER_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

/**
 * Clear user data from localStorage.
 */
export function clearUser() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(USER_STORAGE_KEY);
}

/**
 * Logout: clears the HTTP-only cookie via the internal API route
 * and then removes cached user data from localStorage.
 *
 * The API call runs first so the cookie is cleared before local state.
 * If the API call fails, local state is still cleared to avoid a
 * stale UI, but the error is re-thrown so callers can handle it.
 */
export async function logout() {
  try {
    const res = await fetch(AUTH_ROUTES.LOGOUT, {
      method: "POST",
      credentials: "include",
    });
    if (!res.ok) {
      throw new Error("Logout request failed");
    }
  } finally {
    // Always clear local state so the UI stays consistent
    clearUser();
  }
}
