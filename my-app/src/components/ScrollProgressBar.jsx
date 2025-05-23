import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const totalScroll = docHeight - winHeight;
      const scrollPercent = (scrollTop / totalScroll) * 100;
      setProgress(Math.min(Math.max(scrollPercent, 1), 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="
        fixed top-4 sm:top-6 md:top-7 left-0 right-0 mx-auto
        w-full
        lg:max-w-[1120px] md:max-w-[720px] max-w-[1120px]
        px-4 sm:px-6 lg:px-0 z-50"
    >
      <div className="relative w-full">
        <img
          src="/images/HEARTICON.png"
          alt="Heart"
          className="absolute -top-1 bottom-full mb-1 transform -translate-x-1/2
          w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 z-70"
          style={{
            left: `${progress}%`,
          }}
        />

        <div
          className="relative w-full h-2 sm:h-3 md:h-4 bg-neutral-200
        rounded-full overflow-hidden border-2 border-neutral-300"
        >
          <div
            className="h-full bg-gradient-to-r from-yellow-400 to-orange-400"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
