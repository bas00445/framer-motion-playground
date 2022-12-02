import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Container } from "./styled";

export default {
  title: "components/AnimButton",
};

export const Basic = () => {
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
