import { useState } from "react";

import { motion, AnimatePresence, Variants } from "framer-motion";
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

const nextAnim = {
  initial: { opacity: 0, x: 300, scale: 1.2 },
  animate: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0 },
};

const backAnim = {
  initial: { opacity: 0, x: -300, scale: 1.2 },
  animate: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0 },
};

export const CarouselExample = () => {
  const items = ["Index #0", "Index #1", "Index #2"];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const handleClickPrevious = () => {
    setDirection("back");

    if (activeIndex >= 1) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleClickNext = () => {
    setDirection("next");

    if (activeIndex < items.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <>
      <button
        className="bg-gray-800 text-white mb-4 p-2 mr-2 rounded-lg"
        onClick={handleClickPrevious}
      >
        Previous slide
      </button>
      <button
        className="bg-gray-800 text-white mb-4 p-2 rounded-lg"
        onClick={handleClickNext}
      >
        Next slide
      </button>
      <div className="relative">
        <div>{`activeIndex: ${activeIndex}, direction: ${direction}`}</div>
        <AnimatePresence initial={false}>
          {items.map((item, index) => {
            const itemProps = direction === "next" ? nextAnim : backAnim;
            return (
              activeIndex === index && (
                <Item
                  key={`${item}-${index}`}
                  {...itemProps}
                  transition={{ type: "spring", damping: 30, stiffness: 200 }}
                >
                  {item}
                </Item>
              )
            );
          })}
        </AnimatePresence>
      </div>
    </>
  );
};

const Item = styled(motion.div)`
  width: 300px;
  height: 200px;
  position: absolute;
  border-radius: 8px;
  background: #f3bf17;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
`;

export const TodoList = () => {
  const [items, setItems] = useState<any[]>([]);

  const handleClickAdd = () => {
    setItems([...items, { id: Date.now(), label: "Item" }]);
  };

  const handleClickRemoveItem = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);

    setItems(newItems);
  };

  return (
    <>
      <button
        className="mb-4 bg-green-700 text-white p-2"
        onClick={handleClickAdd}
      >
        Add Item
      </button>

      <div className="flex flex-col gap-2">
        <AnimatePresence>
          {items.map((item, index) => (
            <motion.div
              layout
              key={item.id}
              onClick={() => handleClickRemoveItem(index)}
              style={{
                background: "black",
                color: "white",
                padding: "12px",
                cursor: "pointer",
              }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
            >
              {item.label}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};
