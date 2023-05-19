import { motion } from "framer-motion";

import { Container } from "./styled";
import { useRef } from "react";

export default {
  title: "components/Basic",
};

export const AnimateOnly = () => {
  return (
    <Container
      initial={{ scale: 0.5, x: 0, y: 0, rotate: 180 }}
      animate={{ scale: 1.2, x: 50, y: 50, rotate: 0 }}
    >
      Animate Only
    </Container>
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
    <motion.div
      ref={parentRef}
      className="flex items-center p-5 border-black border"
    >
      <Container
        whileDrag={{ scale: 1, opacity: 0.7 }}
        drag="x"
        dragConstraints={parentRef}
      >
        Drag Me
      </Container>
    </motion.div>
  );
};

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

export const Variants = () => {
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
