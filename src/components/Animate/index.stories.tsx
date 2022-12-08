import React, { useState } from "react";

import {
  motion,
  AnimatePresence,
  animate,
  useMotionValue,
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
