var t=Object.defineProperty;var r=(n,o)=>t(n,"name",{value:o,configurable:!0});import{n as e}from"./emotion-styled.browser.esm.c979914f.js";import{j as i}from"./jsx-runtime.4c542564.js";import{z as a}from"./motion.1c67eed7.js";import"./iframe.6a488344.js";const l={parameters:{storySource:{source:`import styled from "@emotion/styled";\r
import { motion } from "framer-motion";\r
\r
export default {\r
  title: "components/Keyframe",\r
};\r
\r
export const Keyframe = () => {\r
  return (\r
    <Container\r
      animate={{\r
        x: [0, 300, 300, 0, 0],\r
        y: [0, 0, 300, 300, 0],\r
        borderRadius: ["0%", "50%", "0%", "50%", "0%"],\r
        backgroundColor: [\r
          "#ff2701",\r
          "#0077ff",\r
          "#ffaa00",\r
          "#00ff0d",\r
          "#ff2701",\r
        ],\r
      }}\r
      transition={{\r
        repeat: Infinity,\r
        duration: 3.5,\r
      }}\r
    />\r
  );\r
};\r
\r
const Container = styled(motion.div)\`\r
  width: 100px;\r
  height: 100px;\r
\`;\r
`,locationsMap:{keyframe:{startLoc:{col:24,line:8},endLoc:{col:1,line:29},startBody:{col:24,line:8},endBody:{col:1,line:29}}}}},title:"components/Keyframe"},y=r(()=>i(f,{animate:{x:[0,300,300,0,0],y:[0,0,300,300,0],borderRadius:["0%","50%","0%","50%","0%"],backgroundColor:["#ff2701","#0077ff","#ffaa00","#00ff0d","#ff2701"]},transition:{repeat:1/0,duration:3.5}}),"Keyframe"),f=e(a.div)`
  width: 100px;
  height: 100px;
`,u=["Keyframe"];export{y as Keyframe,u as __namedExportsOrder,l as default};
//# sourceMappingURL=index.stories.c5f3a6e1.js.map
