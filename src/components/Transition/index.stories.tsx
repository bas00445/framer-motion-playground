import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import styled from "@emotion/styled";

export default {
  title: "components/Transition",
};

export const MountedAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <button
        className="mb-4 bg-red-500 p-2"
        onClick={() => setIsVisible(!isVisible)}
      >
        Toggle
      </button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ background: "black", color: "white" }}
          >
            This is content
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const CustomElement = styled(motion.div)`
  color: white;
  padding: 12px;
  background: black;
  position: absolute;
`;

export const ToggleBetweenElements = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="p-2 mb-2 border-[1px] border-red-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        Click to toggle
      </button>

      <div style={{ position: "relative" }}>
        <AnimatePresence>
          {isOpen ? (
            <CustomElement
              key="open" // Need `key`
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              Element 1
            </CustomElement>
          ) : (
            <CustomElement
              key="close" // Need `key`
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, background: "#db2f2f" }}
              exit={{ opacity: 0, scale: 0 }}
            >
              Element 2
            </CustomElement>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export const CarouselExample = () => {
  const items = ["Item #1", "Item #2", "Item #3"];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClickPrevious = () => {
    if (activeIndex >= 1) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleClickNext = () => {
    if (activeIndex < items.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <>
      <button
        className="bg-gray-800 text-white mb-4 p-2 mr-2"
        onClick={handleClickPrevious}
      >
        Previous slide
      </button>
      <button
        className="bg-gray-800 text-white mb-4 p-2"
        onClick={handleClickNext}
      >
        Next slide
      </button>
      <div className="relative">
        <AnimatePresence>
          {items.map(
            (item, index) =>
              activeIndex === index && (
                <Item
                  key={`${item}-${index}`}
                  initial={{ opacity: 0, x: 200 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -200 }}
                >
                  {item}
                </Item>
              )
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

const Item = styled(motion.div)`
  width: 300px;
  height: 200px;
  position: absolute;
  background: #f3bf17;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
`;
