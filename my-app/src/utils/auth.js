// Salva informação no localStorage.
export function saveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

// Puxa o usuário salvo do localstorage.
export function getUser() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

// Sessão Criar Login.
export function login() {
  localStorage.setItem("isLoggedIn", "true");
}

// Checagem se o usuário está logado.
export function isLoggedIn() {
  return localStorage.getItem("isLoggedIn") === "true";
}

// Loggout, termina a sessão. (Usuário contínua no local storage.)
export function logout() {
  localStorage.removeItem("isLoggedIn");
}
