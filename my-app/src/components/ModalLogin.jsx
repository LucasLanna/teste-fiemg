import { useState } from "react";
import { getUser, login } from "../utils/auth";

export default function ModalLogin({ close, setShowSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    const user = getUser();

    if (user && user.email === email && user.password === password) {
      login();
      close();
    } else {
      setError("Email ou senha incorretos.");
    }
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center"
      onClick={close}
    >
      <div
        className="bg-[#F3FDE8] rounded-lg p-6 border border-black shadow-xl w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-center text-xl mb-4">Entre na sua conta</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-black rounded px-3 py-2"
            required
          />
          <input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-black rounded px-3 py-2"
            required
          />
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-4 py-2 rounded"
            >
              Entrar
            </button>
            <button
              type="button"
              onClick={close}
              className="flex-1 bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
            >
              Cancelar
            </button>
          </div>
        </form>
        <p className="text-center text-sm mt-4">
          Não tem conta?{" "}
          <button
            onClick={() => {
              close();
              setShowSignup(true);
            }}
            className="text-blue-600 underline hover:text-blue-800"
          >
            Crie sua conta.
          </button>
        </p>
      </div>
    </div>
  );
}
