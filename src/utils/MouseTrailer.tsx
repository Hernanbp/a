import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import React, { useEffect, useRef } from "react";

function MouseTrailer() {
  const trailerRef = useRef<HTMLDivElement>(null);

  const [interacting, setInteracting] = React.useState(false);

  useEffect(() => {
    function animateTrailer(event: MouseEvent, interacting: boolean) {
      const trailer = trailerRef.current;
      if (trailer) {
        const x = event.clientX + window.scrollX - trailer.offsetWidth / 2;
        const y = event.clientY + window.scrollY - trailer.offsetHeight / 2;

        const keyframes = {
          transform: `translate(${x}px, ${y}px) scale(${interacting ? 6 : 1}) `,
        };
        trailer.animate(keyframes, {
          duration: 800,
          fill: "forwards",
        });
      }
    }

    window.onmousemove = (e: MouseEvent) => {
      const target = e.target;
      if (!(target instanceof Element)) {
        return;
      }
      const interactable = target.closest(".interactable"),
        interacting = interactable !== null;
      setInteracting(interacting);

      animateTrailer(e, interacting);
    };
  }, [trailerRef]);

  return (
    <div
      style={{
        position: "absolute",
        width: "15px",
        height: "15px",
        borderRadius: "50%",
        zIndex: 9999,
      }}
      className={`pointer-events-none flex items-center justify-center bg-[#f8f8f8]`}
      ref={trailerRef}
    >
      {interacting && <ArrowTopRightIcon className="scale-50 text-[#282728]" />}
    </div>
  );
}

export default MouseTrailer;
