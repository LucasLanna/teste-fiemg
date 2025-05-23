import { useState, useEffect } from "react";

import Background from "./components/Background";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";

import ModalLogin from "./components/ModalLogin";
import ModalSignup from "./components/ModalSignup";

import { isLoggedIn, logout, getUser } from "./utils/auth";
import Scroll1UpAnimation from "./components/scroll1UpAnimation";
import ScrollProgressBar from "./components/ScrollProgressBar";
import PurpleTransition from "./components/PurpleTransition";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [logged, setLogged] = useState(isLoggedIn());

  useEffect(() => {
    setLogged(isLoggedIn());
  }, [showLogin, showSignup]);

  return (
    <div
      className="w-full min-h-screen   bg-gradient-to-b
  from-[#120675] via-[#15068A] to-[#E86B73]  flex flex-col items-center overflow-x-hidden"
    >
      <ScrollProgressBar />

      <div className="relative w-full flex justify-center z-0">
        <Background />

        <div className="relative w-full max-w-7xl flex flex-col z-10">
          <Header
            logged={logged}
            user={getUser()}
            onLogin={() => setShowLogin(true)}
            onSignup={() => setShowSignup(true)}
            onLogout={() => {
              logout();
              setLogged(false);
            }}
          />
          <Intro />
          <Section2 />
        </div>
      </div>

      <PurpleTransition />
      <Section3 />
      <PurpleTransition invert />

      <div className="w-full  flex flex-col gap-8 items-center">
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Footer />
      </div>

      {showLogin && (
        <ModalLogin
          close={() => setShowLogin(false)}
          setShowSignup={() => setShowSignup(true)}
        />
      )}
      {showSignup && (
        <ModalSignup
          close={() => setShowSignup(false)}
          setShowLogin={() => setShowLogin(true)}
        />
      )}

      <Scroll1UpAnimation />
    </div>
  );
}

export default App;
