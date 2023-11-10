import { useState, useRef, useEffect } from "react";
export function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const htmlEl = ref.current;

    const handleMouseOver = () => setHovered(true);
    const handleMouseOut = () => setHovered(false);

    if (htmlEl) {
      htmlEl.addEventListener("mouseover", handleMouseOver);
      htmlEl.addEventListener("mouseout", handleMouseOut);

      return () => {
        htmlEl.removeEventListener("mouseover", handleMouseOver);
        htmlEl.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, []);

  return { hovered, ref };
}
