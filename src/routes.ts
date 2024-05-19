/**
 * An array of routes that are accessible to the public 
 * These routes do not require authentication
 * @type {string[]}
 */

export const publicRoutes = [
    "/verify-email",
    "/reset-password",
    "/change-password"
]


/**
 * An array of routes that are accessible to the public 
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */

export const authRoutes = [
    "/login",
    "/signup",
    "/error"
]



/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string[]}
 */


export const apiAuthPrefix = "/api";

/**
 * The default redirect route after a successful login
 * @type {string[]}
 */


export const DEFAULT_LOGIN_REDIRECT = "/conversations";