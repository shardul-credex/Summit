import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MouseGlow() {

  const [position, setPosition] = useState({
    x: -300,
    y: -300,
  });

  useEffect(() => {

    const move = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );

  }, []);

  return (

    <motion.div

      animate={{
        x: position.x - 200,
        y: position.y - 200,
      }}

      transition={{
        type: "spring",
        stiffness: 80,
        damping: 20,
      }}

      className="
      fixed
      pointer-events-none
      z-50
      w-100
      h-100
      rounded-full
      blur-3xl"

      style={{
        background:
          "radial-gradient(circle, rgba(201,122,85,.12) 0%, rgba(122,138,110,.06) 40%, transparent 75%)",
      }}

    />

  );
}
