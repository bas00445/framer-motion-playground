import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Container } from "./styled";

export default {
  title: "components/AnimButton",
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

export const Events = () => {
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

const variants = {
  initial: {
    background: "#a622a6ff",
    color: "#fff",
  },
  hover: {
    background: "#000",
    color: "#fff",
  },
  focus: {
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
      whileTap={variants.focus}
    >
      Click Me
    </Container>
  );
};
