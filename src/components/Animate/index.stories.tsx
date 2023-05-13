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
  const x = useMotionValue(0);
  const y = useTransform(x, [0, 100, 200], [50, 100, 200]);
  const scale = useTransform(x, [0, 100, 200], [0.5, 1, 3]);

  useEffect(() => {
    animate(x, 200);
  }, []);

  return (
    <>
      <motion.div
        className="bg-red-500 rounded-full w-[50px] h-[50px]"
        style={{ x, y, scale }}
      />
    </>
  );
};

export const AnimateUsingControl = () => {
  const controlA = useAnimationControls();
  const controlB = useAnimationControls();

  controlA.stop();

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
