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
  title: "components/Chain",
};

const variants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
};

// ** Noted **: children's variant keys must be the same with parent variants
const childrenVariants = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

export const BasicChainAnimation = () => {
  const items = ["Item #1", "Item #2", "Item #3", "Item #4", "Item #5"];

  return (
    <div className="w-[300px] h-[300px]">
      <motion.div
        className="bg-[#ce6755] text-white p-6 rounded-3xl flex flex-col gap-3"
        initial="initial"
        animate="animate"
        variants={variants}
        transition={{
          delayChildren: 0.3, // wait for 0.3s then start animation of first child element
          staggerChildren: 0.2, // each children will be delayed 0.2s then start animation of next child element
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      >
        {items.map((item, index) => (
          <motion.div
            key={`${item}-${index}`}
            className="p-4 rounded-sm bg-[#b34b0f] rounded-3xl"
            variants={childrenVariants}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 20,
            }}
          >
            {item}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
