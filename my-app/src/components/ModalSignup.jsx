import { useState } from "react";
import { saveUser, login } from "../utils/auth";

export default function ModalSignup({ close, setShowLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignup(e) {
    e.preventDefault();
    const newUser = { name, email, password };
    saveUser(newUser);
    login();
    close();
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
        <h2 className="text-center text-xl mb-4">Crie sua conta</h2>
        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <input
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-black rounded px-3 py-2"
            required
          />
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
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-4 py-2 rounded"
            >
              Cadastrar
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
          Já tem conta?{" "}
          <button
            onClick={() => {
              close();
              setShowLogin(true);
            }}
            className="text-blue-600 underline hover:text-blue-800"
          >
            Fazer login.
          </button>
        </p>
      </div>
    </div>
  );
}
