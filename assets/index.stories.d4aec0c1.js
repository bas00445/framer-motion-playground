var f=Object.defineProperty;var m=(n,e)=>f(n,"name",{value:e,configurable:!0});import{j as r,r as p,a as u}from"./jsx-runtime.4c542564.js";import{z as c}from"./motion.1c67eed7.js";import{A as y}from"./index.198986b9.js";import"./iframe.6a488344.js";function b(n){function e(t){var i=255-t,s=0|Math.random()*i+t,o=s.toString(16);return o.length==1?"0"+o:o}return m(e,"randomChannel"),"#"+e(n)+e(n)+e(n)}m(b,"randomColor");const N={title:"components/Chain",parameters:{storySource:{source:`import React, { useEffect, useState } from "react";\r
\r
import {\r
  motion,\r
  AnimatePresence,\r
  animate,\r
  useMotionValue,\r
  useAnimationControls,\r
  useTransform,\r
} from "framer-motion";\r
import styled from "@emotion/styled";\r
import { randomColor } from "../../utils";\r
\r
export default {\r
  title: "components/Chain",\r
  parameters: {\r
    layout: "centered",\r
  },\r
};\r
\r
export const BasicChainAnimation = () => {\r
  const items = ["Item #1", "Item #2", "Item #3", "Item #4", "Item #5"];\r
\r
  const variants = {\r
    initial: {\r
      opacity: 0,\r
      scale: 0,\r
    },\r
    animate: {\r
      opacity: 1,\r
      scale: 1,\r
    },\r
  };\r
\r
  // ** Noted **: children's variant keys must be the same with parent variants\r
  const childrenVariants = {\r
    initial: {\r
      opacity: 0,\r
      x: 50,\r
    },\r
    animate: {\r
      opacity: 1,\r
      x: 0,\r
    },\r
  };\r
\r
  return (\r
    <div className="w-[300px] h-[300px]">\r
      <motion.div\r
        className="bg-[#ce6755] text-white p-6 rounded-3xl flex flex-col gap-3"\r
        initial="initial"\r
        animate="animate"\r
        variants={variants}\r
        transition={{\r
          delayChildren: 0.3, // wait for 0.3s then start animation of first child element\r
          staggerChildren: 0.2, // each children will be delayed 0.2s then start animation of next child element\r
          type: "spring",\r
          stiffness: 100,\r
          damping: 20,\r
        }}\r
      >\r
        {items.map((item, index) => (\r
          <motion.div\r
            key={\`\${item}-\${index}\`}\r
            className="p-4 rounded-3xl bg-[#b34b0f]"\r
            variants={childrenVariants}\r
            transition={{\r
              type: "spring",\r
              stiffness: 100,\r
              damping: 20,\r
            }}\r
          >\r
            {item}\r
          </motion.div>\r
        ))}\r
      </motion.div>\r
    </div>\r
  );\r
};\r
\r
export const RadialMenu = () => {\r
  const [toggle, setToggle] = useState(true);\r
\r
  const radius = 120;\r
  const numberOfItem = 10;\r
\r
  const items = Array.from({ length: numberOfItem }).map((_, i) => ({\r
    label: i + 1,\r
    background: randomColor(5),\r
  }));\r
\r
  let gapInDegree = 360 / numberOfItem;\r
  let degree = 0;\r
\r
  const sections = items.map((item) => {\r
    const radian = (degree * Math.PI) / 180;\r
    const coordX = radius * Math.cos(radian);\r
    const coordY = radius * Math.sin(radian);\r
    degree += gapInDegree;\r
\r
    return {\r
      x: coordX,\r
      y: coordY,\r
      label: item.label,\r
      background: item.background,\r
    };\r
  });\r
\r
  return (\r
    <div className="flex flex-col items-center ">\r
      <div className="relative">\r
        <motion.div\r
          className="bg-purple-600 text-white absolute w-[32px] h-[32px] text-sm rounded-full flex items-center justify-center cursor-pointer"\r
          whileHover={{ scale: 1.2 }}\r
          onClick={() => {\r
            setToggle(!toggle);\r
          }}\r
        >\r
          Click\r
        </motion.div>\r
        {sections.map((section, index) => (\r
          <motion.div\r
            key={\`\${section.label}-\${index}\`}\r
            className="w-[32px] h-[32px] rounded-full absolute flex items-center justify-center text-white"\r
            initial={{ opacity: 0, rotate: 90 }}\r
            animate={{\r
              x: section.x,\r
              y: section.y,\r
              background: section.background,\r
              opacity: 1,\r
              rotate: 0,\r
            }}\r
            transition={{ delay: index * 0.1 }}\r
          >\r
            {section.label}\r
          </motion.div>\r
        ))}\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export const ChainWithTransition = () => {\r
  const [openMenu, setOpenMenu] = useState(false);\r
\r
  const items = ["Item #1", "Item #2", "Item #3", "Item #4", "Item #5"];\r
\r
  const variants = {\r
    initial: {\r
      opacity: 0,\r
      scale: 0,\r
    },\r
    animate: {\r
      opacity: 1,\r
      scale: 1,\r
    },\r
    exit: {\r
      opacity: 0,\r
      scale: 0,\r
    },\r
  };\r
\r
  // ** Noted **: children's variant keys must be the same with parent variants\r
  const childrenVariants = {\r
    initial: {\r
      opacity: 0,\r
      x: 50,\r
    },\r
    animate: {\r
      opacity: 1,\r
      x: 0,\r
    },\r
  };\r
\r
  return (\r
    <div className="w-[300px] h-[300px]">\r
      <motion.button\r
        className="bg-purple-600 text-white rounded-lg p-2 text-lg outline-none mb-6"\r
        initial={{ background: "#8a1ac7" }}\r
        whileTap={{ scale: 1.2, background: "#cb2020" }}\r
        onClick={() => setOpenMenu(!openMenu)}\r
      >\r
        Toggle Menu\r
      </motion.button>\r
      <AnimatePresence>\r
        {openMenu && (\r
          <motion.div\r
            className="bg-[#ce6755] text-white p-6 rounded-3xl flex flex-col gap-3"\r
            initial="initial"\r
            animate="animate"\r
            exit="exit"\r
            variants={variants}\r
            transition={{\r
              delayChildren: 0.3, // wait for 0.3s then start animation of first child element\r
              staggerChildren: 0.2, // each children will be delayed 0.2s then start animation of next child element\r
              type: "spring",\r
              stiffness: 100,\r
              damping: 20,\r
            }}\r
          >\r
            {items.map((item, index) => (\r
              <motion.div\r
                key={\`\${item}-\${index}\`}\r
                className="p-4 bg-[#b34b0f] rounded-3xl"\r
                variants={childrenVariants}\r
                transition={{\r
                  type: "spring",\r
                  stiffness: 100,\r
                  damping: 20,\r
                }}\r
              >\r
                {item}\r
              </motion.div>\r
            ))}\r
          </motion.div>\r
        )}\r
      </AnimatePresence>\r
    </div>\r
  );\r
};\r
`,locationsMap:{"basic-chain-animation":{startLoc:{col:35,line:21},endLoc:{col:1,line:79},startBody:{col:35,line:21},endBody:{col:1,line:79}},"radial-menu":{startLoc:{col:26,line:81},endLoc:{col:1,line:141},startBody:{col:26,line:81},endBody:{col:1,line:141}},"chain-with-transition":{startLoc:{col:35,line:143},endLoc:{col:1,line:220},startBody:{col:35,line:143},endBody:{col:1,line:220}}}},layout:"centered"}},M=m(()=>{const n=["Item #1","Item #2","Item #3","Item #4","Item #5"],e={initial:{opacity:0,scale:0},animate:{opacity:1,scale:1}},t={initial:{opacity:0,x:50},animate:{opacity:1,x:0}};return r("div",{className:"w-[300px] h-[300px]",children:r(c.div,{className:"bg-[#ce6755] text-white p-6 rounded-3xl flex flex-col gap-3",initial:"initial",animate:"animate",variants:e,transition:{delayChildren:.3,staggerChildren:.2,type:"spring",stiffness:100,damping:20},children:n.map((i,s)=>r(c.div,{className:"p-4 rounded-3xl bg-[#b34b0f]",variants:t,transition:{type:"spring",stiffness:100,damping:20},children:i},`${i}-${s}`))})})},"BasicChainAnimation"),$=m(()=>{const[n,e]=p.exports.useState(!0),t=120,i=10,s=Array.from({length:i}).map((a,l)=>({label:l+1,background:b(5)}));let o=360/i,d=0;const x=s.map(a=>{const l=d*Math.PI/180,h=t*Math.cos(l),g=t*Math.sin(l);return d+=o,{x:h,y:g,label:a.label,background:a.background}});return r("div",{className:"flex flex-col items-center ",children:u("div",{className:"relative",children:[r(c.div,{className:"bg-purple-600 text-white absolute w-[32px] h-[32px] text-sm rounded-full flex items-center justify-center cursor-pointer",whileHover:{scale:1.2},onClick:()=>{e(!n)},children:"Click"}),x.map((a,l)=>r(c.div,{className:"w-[32px] h-[32px] rounded-full absolute flex items-center justify-center text-white",initial:{opacity:0,rotate:90},animate:{x:a.x,y:a.y,background:a.background,opacity:1,rotate:0},transition:{delay:l*.1},children:a.label},`${a.label}-${l}`))]})})},"RadialMenu"),A=m(()=>{const[n,e]=p.exports.useState(!1),t=["Item #1","Item #2","Item #3","Item #4","Item #5"],i={initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},exit:{opacity:0,scale:0}},s={initial:{opacity:0,x:50},animate:{opacity:1,x:0}};return u("div",{className:"w-[300px] h-[300px]",children:[r(c.button,{className:"bg-purple-600 text-white rounded-lg p-2 text-lg outline-none mb-6",initial:{background:"#8a1ac7"},whileTap:{scale:1.2,background:"#cb2020"},onClick:()=>e(!n),children:"Toggle Menu"}),r(y,{children:n&&r(c.div,{className:"bg-[#ce6755] text-white p-6 rounded-3xl flex flex-col gap-3",initial:"initial",animate:"animate",exit:"exit",variants:i,transition:{delayChildren:.3,staggerChildren:.2,type:"spring",stiffness:100,damping:20},children:t.map((o,d)=>r(c.div,{className:"p-4 bg-[#b34b0f] rounded-3xl",variants:s,transition:{type:"spring",stiffness:100,damping:20},children:o},`${o}-${d}`))})})]})},"ChainWithTransition"),T=["BasicChainAnimation","RadialMenu","ChainWithTransition"];export{M as BasicChainAnimation,A as ChainWithTransition,$ as RadialMenu,T as __namedExportsOrder,N as default};
//# sourceMappingURL=index.stories.d4aec0c1.js.map
