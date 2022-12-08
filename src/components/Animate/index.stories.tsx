import React, { useEffect, useState } from "react";

import {
  motion,
  AnimatePresence,
  animate,
  useMotionValue,
  useAnimationControls,
} from "framer-motion";
import styled from "@emotion/styled";

export default {
  title: "components/Animate",
};

export const AnimateMotionValue = () => {
  const y = useMotionValue(0);
  const scale = useMotionValue(0);

  React.useEffect(() => {
    animate(y, 100, {
      duration: 2,
      repeatType: "mirror",
      repeat: Infinity,
      onUpdate: (latest) => {
        // console.log({ latest });
      },
    });

    animate(scale, 1, {
      duration: 2,
      repeatType: "mirror",
      repeat: Infinity,
    });
  }, []);

  return (
    <>
      <motion.div
        style={{
          y,
          scale,
          width: 100,
          background: "red",
          color: "white",
          textAlign: "center",
        }}
      >
        Hello
      </motion.div>
    </>
  );
};

export const AnimateUsingControl = () => {
  const controlA = useAnimationControls();
  const controlB = useAnimationControls();

  const sequenceAnim = async () => {
    await controlA.start({
      x: 300,
      height: 200,
      background: "#b83333",
      color: "#fff",
    });
    await controlB.start({ x: 300, background: "#a41fab", color: "#fff" });
    await controlA.start({ x: 100, background: "#85da41" });
    await controlB.start({
      x: 200,
      height: 150,
      background: "#a41fab",
      color: "#fff",
    });
    await controlA.start({ x: 100, height: "initial", background: "#85da41" });
  };

  useEffect(() => {
    sequenceAnim();
  }, []);

  return (
    <>
      <motion.div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        initial={{
          x: -100,
          background: "#fff",
          color: "#111",
          width: 100,
        }}
        animate={controlA}
      >
        Element A
      </motion.div>
      <motion.div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        initial={{
          x: -50,
          width: 100,
          background: "#fff",
          color: "#111",
        }}
        animate={controlB}
      >
        Element B
      </motion.div>
    </>
  );
};
