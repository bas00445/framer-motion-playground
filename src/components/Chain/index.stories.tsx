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
import { randomColor } from "../../utils";

export default {
  title: "components/Chain",
  parameters: {
    layout: "centered",
  },
};

export const BasicChainAnimation = () => {
  const items = ["Item #1", "Item #2", "Item #3", "Item #4", "Item #5"];

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
            className="p-4 rounded-3xl bg-[#b34b0f]"
            variants={childrenVariants}
            transition={{
              type: "spring",
              stiffness: 100,
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

export const RadialMenu = () => {
  const [toggle, setToggle] = useState(true);

  const radius = 120;
  const numberOfItem = 10;

  const items = Array.from({ length: numberOfItem }).map((_, i) => ({
    label: i + 1,
    background: randomColor(5),
  }));

  let gapInDegree = 360 / numberOfItem;
  let degree = 0;

  const sections = items.map((item) => {
    const radian = (degree * Math.PI) / 180;
    const coordX = radius * Math.cos(radian);
    const coordY = radius * Math.sin(radian);
    degree += gapInDegree;

    return {
      x: coordX,
      y: coordY,
      label: item.label,
      background: item.background,
    };
  });

  return (
    <div className="flex flex-col items-center ">
      <div className="relative">
        <motion.div
          className="bg-purple-600 text-white absolute w-[32px] h-[32px] text-sm rounded-full flex items-center justify-center cursor-pointer"
          whileHover={{ scale: 1.2 }}
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          Click
        </motion.div>
        {sections.map((section, index) => (
          <motion.div
            key={`${section.label}-${index}`}
            className="w-[32px] h-[32px] rounded-full absolute flex items-center justify-center text-white"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{
              x: section.x,
              y: section.y,
              background: section.background,
              opacity: 1,
              rotate: 0,
            }}
            transition={{ delay: index * 0.1 }}
          >
            {section.label}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const ChainWithTransition = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const items = ["Item #1", "Item #2", "Item #3", "Item #4", "Item #5"];

  const variants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0,
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

  return (
    <div className="w-[300px] h-[300px]">
      <motion.button
        className="bg-purple-600 text-white rounded-lg p-2 text-lg outline-none mb-6"
        initial={{ background: "#8a1ac7" }}
        whileTap={{ scale: 1.2, background: "#cb2020" }}
        onClick={() => setOpenMenu(!openMenu)}
      >
        Toggle Menu
      </motion.button>
      <AnimatePresence>
        {openMenu && (
          <motion.div
            className="bg-[#ce6755] text-white p-6 rounded-3xl flex flex-col gap-3"
            initial="initial"
            animate="animate"
            exit="exit"
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
                className="p-4 bg-[#b34b0f] rounded-3xl"
                variants={childrenVariants}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
