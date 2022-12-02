import styled from "@emotion/styled";
import { motion } from "framer-motion";

export default {
  title: "components/Keyframe",
};

export const Keyframe = () => {
  return (
    <Container
      animate={{
        x: [0, 300, 300, 0, 0],
        y: [0, 0, 300, 300, 0],
        borderRadius: ["0%", "50%", "0%", "50%", "0%"],
        backgroundColor: [
          "#ff2701",
          "#0077ff",
          "#ffaa00",
          "#00ff0d",
          "#ff2701",
        ],
      }}
      transition={{
        repeat: Infinity,
        duration: 3.5,
      }}
    />
  );
};

const Container = styled(motion.div)`
  width: 100px;
  height: 100px;
`;
