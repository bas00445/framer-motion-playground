import { motion } from "framer-motion";

import { Container } from "./styled";
import { useRef } from "react";
import "./index.css";

export default {
  title: "components/Basic",
};

export const AnimateWithCSS = () => {
  return (
    <button style={{ color: "white", padding: 12 }} className="basic-anim">
      CSS Only
    </button>
  );
};

export const AnimateOnly = () => {
  return (
    <motion.button
      style={{ color: "white", padding: 12 }}
      initial={{ scale: 0, opacity: 0, background: "#c6242c" }}
      animate={{ scale: 1, opacity: 1, background: "#1662d4" }}
    >
      Animate Only
    </motion.button>
  );
};

export const AnimateOnlyWithTransitionProps = () => {
  return (
    <Container
      initial={{ scale: 0.5, x: 0, y: 0, rotate: 180 }}
      animate={{ scale: 1.2, x: 50, y: 50, rotate: 0 }}
      transition={{ type: "spring", stiffness: 100, mass: 1 }}
    >
      Animate Only
    </Container>
  );
};

export const BasicEvents = () => {
  return (
    <Container
      initial={{ background: "#666" }}
      whileTap={{ scale: 1.2, background: "#000" }}
      whileHover={{ scale: 1, background: "#333" }}
    >
      Click Me
    </Container>
  );
};

export const DragEvents = () => {
  const parentRef = useRef(null);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="mb-4">Drag with parent constraint</div>
        <motion.div
          ref={parentRef}
          className="flex items-center border-black border"
        >
          <Container
            whileDrag={{ scale: 1, opacity: 0.7 }}
            drag="x"
            dragConstraints={parentRef}
          >
            Drag Me
          </Container>
        </motion.div>
      </div>

      <div>
        <div className="mb-4">Drag with relative distance</div>
        <Container
          initial={{ background: "#5a16c0" }}
          whileDrag={{ scale: 1, background: "#f21860" }}
          drag
          dragConstraints={{ top: -50, bottom: 50, left: -50, right: 50 }}
        >
          Drag Me
        </Container>
      </div>
    </div>
  );
};

export const Variants = () => {
  const variants = {
    initial: {
      background: "#a622a6ff",
      color: "#fff",
    },
    hover: {
      background: "#000",
      color: "#fff",
    },
    tap: {
      background: "#000",
      color: "#fff",
      scale: 1.2,
    },
  };

  return (
    <Container
      variants={variants}
      initial={variants.initial}
      whileHover={variants.hover}
      whileTap={variants.tap}
    >
      Click Me
    </Container>
  );
};
