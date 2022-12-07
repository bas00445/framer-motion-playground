import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import styled from "@emotion/styled";

export default {
  title: "components/Transition",
};

export const ToggleElements = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>

      <div style={{ position: "relative" }}>
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              key="open" // Need `key`
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              style={{
                color: "white",
                padding: 12,
                background: "black",
                position: "absolute",
              }}
            >
              Open
            </motion.div>
          ) : (
            <motion.div
              key="close" // Need `key`
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              style={{
                color: "white",
                padding: 12,
                background: "black",
                position: "absolute",
              }}
            >
              Close
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
