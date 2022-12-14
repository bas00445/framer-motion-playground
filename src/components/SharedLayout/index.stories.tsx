import { useState } from "react";

import { motion } from "framer-motion";

export default {
  title: "components/SharedLayout",
};

export const TabsWithUnderline = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [items, setItems] = useState(["Tab 1", "Tab 2", "Tab 3"]);

  return (
    <div style={{ display: "flex", gap: 12 }}>
      {items.map((item, index) => (
        <div key={item} onClick={() => setActiveTabIndex(index)}>
          <motion.div
            style={{ padding: 12, cursor: "pointer" }}
            initial={{ color: "#000", background: "#fff", borderRadius: 0 }}
            animate={{
              background: activeTabIndex === index ? "#ffa5a7" : "#fff",
            }}
          >
            {item}
          </motion.div>
          {activeTabIndex === index && (
            <motion.div
              layoutId="underline"
              style={{
                width: "100%",
                height: "2px",
                marginTop: "4px",
                background: "#931010",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};
