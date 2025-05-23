import { useEffect, useState } from "react";

export default function Scroll1UpAnimation() {
  const [show, setShow] = useState(false);
  const [canTrigger, setCanTrigger] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const atBottom = scrollTop + windowHeight >= documentHeight - 150;
      const aboveMiddle = scrollTop + windowHeight / 2 <= documentHeight / 2;

      // ✅ Reset trigger if user goes back above middle
      if (aboveMiddle && !canTrigger) {
        setCanTrigger(true);
      }

      // ✅ Trigger if at bottom and allowed
      if (atBottom && canTrigger) {
        setShow(true);
        setCanTrigger(false); // Disable further triggers until reset
        setTimeout(() => setShow(false), 1500); // Hide after animation
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [canTrigger]);

  return (
    <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-[100] pointer-events-none">
      {show && (
        <img src="/images/1up.png" alt="1UP" className="animate-rise h-10" />
      )}
    </div>
  );
}
