// Save user information to localStorage
export function saveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

// Get the saved user from localStorage
export function getUser() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

// Create a login session (mark as logged in)
export function login() {
  localStorage.setItem("isLoggedIn", "true");
}

// Check if user is logged in
export function isLoggedIn() {
  return localStorage.getItem("isLoggedIn") === "true";
}

// Logout (clear session)
export function logout() {
  localStorage.removeItem("isLoggedIn");
  // localStorage.removeItem("user");
}
