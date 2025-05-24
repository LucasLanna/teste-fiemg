export default function Header({ logged, user, onLogin, onSignup, onLogout }) {
  return (
    <header className="w-full px-12 pt-6 pb-2">
      <div className="max-w-[1178px] mt-8 mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <img
          src="/images/logo.png"
          alt="ATE ADVENTURES"
          className="h-6 md:h-5"
        />

        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
          {logged ? (
            <>
              <span className="text-white text-xs md:text-sm flex items-center">
                🚀 Olá, {user?.name}!
              </span>
              <button
                onClick={onLogout}
                className="text-xs md:text-sm text-[#0c0034] border border-gray-200 bg-white px-4 py-1 rounded hover:bg-gray-100 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={onLogin}
                className="text-xs md:text-sm text-brown border bg-[#F5FFE8] border-brown px-4 py-1 rounded hover:bg-yellow-200 transition pixel-font"
              >
                Login
              </button>
              <button
                onClick={onSignup}
                className="text-xs md:text-sm text-brown bg-[#F0B541] px-4 py-1 rounded font-semibold hover:bg-yellow-300"
              >
                Cadastro
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
