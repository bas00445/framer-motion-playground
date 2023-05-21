import React, { useEffect, useState } from "react";

import {
  motion,
  AnimatePresence,
  animate,
  useMotionValue,
  useAnimationControls,
  useTransform,
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

export const AnimateUseTransform = () => {
  const progress = useMotionValue(0);
  const scale = useTransform(progress, [0, 0.5, 1], [0.5, 1, 1.5]);
  const background = useTransform(
    progress,
    [0, 0.5, 1],
    ["#c54e4a", "#000000", "#276ac2"]
  );
  const borderRadius = useTransform(progress, [0, 0.5, 1], [0, 24, 100]);

  useEffect(() => {
    animate(progress, 1, {
      type: "spring",
      repeatType: "mirror",
      repeat: Infinity,
      stiffness: 160,
      damping: 30,
    });
  }, []);

  return (
    <div className="flex flex-col justify-center p-10">
      <motion.div
        className="bg-red-500 w-[200px] h-[200px]"
        style={{ scale, background, borderRadius }}
      />
    </div>
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
          x: -150,
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

export const RenderingAnimateMotionValueOnScreen = () => {
  const y = useMotionValue(0);

  const [yState, setYState] = useState(y.get());

  React.useEffect(() => {
    animate(y, 100, {
      duration: 2,
      repeatType: "mirror",
      repeat: Infinity,
      onUpdate: (latest) => {
        // console.log({ latest });
      },
    });
  }, []);

  React.useEffect(() => {
    const unSubscribe = y.onChange((val) => setYState(val));
    return () => unSubscribe();
  }, [y]);

  return (
    <>
      <motion.div
        style={{
          y,
          width: 100,
          background: "red",
          color: "white",
          textAlign: "center",
        }}
      >
        {`y: ${yState.toFixed(0)}`}
      </motion.div>
    </>
  );
};
