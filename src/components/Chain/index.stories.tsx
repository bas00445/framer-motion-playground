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
  start: {
    opacity: 0,
    scale: 0,
  },
  end: {
    opacity: 1,
    scale: 1,
  },
};

// ** Noted **: children's variant keys must be the same with parent variants
const childrenVariants = {
  start: {
    opacity: 0,
    x: 150,
  },
  end: {
    opacity: 1,
    x: 0,
  },
};

export const BasicChainAnimation = () => {
  const items = ["Item #1", "Item #2", "Item #3", "Item #4", "Item #5"];

  return (
    <div className="w-[300px] h-[300px]">
      <motion.div
        initial="start"
        animate="end"
        variants={variants}
        transition={{
          delayChildren: 0.3,
          staggerChildren: 0.2,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        style={{
          background: "#ce6755",
          color: "#ffffff",
          padding: 24,
          borderRadius: 24,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {items.map((item, index) => (
          <motion.div
            key={`${item}-${index}`}
            className="p-4 rounded-sm"
            variants={childrenVariants}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            style={{
              background: "#b34b0f",
              borderRadius: 24,
            }}
          >
            {item}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
