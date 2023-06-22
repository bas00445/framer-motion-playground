var g=Object.defineProperty;var r=(t,e)=>g(t,"name",{value:e,configurable:!0});import{r as s,a,F as d,j as n}from"./jsx-runtime.4c542564.js";import{n as y}from"./emotion-styled.browser.esm.c979914f.js";import{A as m}from"./index.198986b9.js";import{z as p}from"./motion.1c67eed7.js";import"./iframe.6a488344.js";const S={parameters:{storySource:{source:`import { useState } from "react";\r
\r
import { motion, AnimatePresence, Variants } from "framer-motion";\r
import styled from "@emotion/styled";\r
\r
export default {\r
  title: "components/Transition",\r
};\r
\r
export const MountedAnimation = () => {\r
  const [isVisible, setIsVisible] = useState(true);\r
\r
  return (\r
    <>\r
      <button\r
        className="mb-4 bg-red-500 p-2"\r
        onClick={() => setIsVisible(!isVisible)}\r
      >\r
        Toggle\r
      </button>\r
      <AnimatePresence>\r
        {isVisible && (\r
          <motion.div\r
            initial={{ opacity: 0 }}\r
            animate={{ opacity: 1 }}\r
            exit={{ opacity: 0 }}\r
            style={{ background: "black", color: "white" }}\r
          >\r
            This is content\r
          </motion.div>\r
        )}\r
      </AnimatePresence>\r
    </>\r
  );\r
};\r
\r
const CustomElement = styled(motion.div)\`\r
  color: white;\r
  padding: 12px;\r
  background: black;\r
  position: absolute;\r
\`;\r
\r
export const ToggleBetweenElements = () => {\r
  const [isOpen, setIsOpen] = useState(false);\r
\r
  return (\r
    <>\r
      <button\r
        className="p-2 mb-2 border-[1px] border-red-500"\r
        onClick={() => setIsOpen(!isOpen)}\r
      >\r
        Click to toggle\r
      </button>\r
\r
      <div style={{ position: "relative" }}>\r
        <AnimatePresence>\r
          {isOpen ? (\r
            <CustomElement\r
              key="open" // Need \`key\`\r
              initial={{ opacity: 0, scale: 0 }}\r
              animate={{ opacity: 1, scale: 1 }}\r
              exit={{ opacity: 0, scale: 0 }}\r
            >\r
              Element 1\r
            </CustomElement>\r
          ) : (\r
            <CustomElement\r
              key="close" // Need \`key\`\r
              initial={{ opacity: 0, scale: 0 }}\r
              animate={{ opacity: 1, scale: 1, background: "#db2f2f" }}\r
              exit={{ opacity: 0, scale: 0 }}\r
            >\r
              Element 2\r
            </CustomElement>\r
          )}\r
        </AnimatePresence>\r
      </div>\r
    </>\r
  );\r
};\r
\r
const nextAnim = {\r
  initial: { opacity: 0, x: 300, scale: 1.2 },\r
  animate: { opacity: 1, x: 0, scale: 1 },\r
  exit: { opacity: 0 },\r
};\r
\r
const backAnim = {\r
  initial: { opacity: 0, x: -300, scale: 1.2 },\r
  animate: { opacity: 1, x: 0, scale: 1 },\r
  exit: { opacity: 0 },\r
};\r
\r
export const CarouselExample = () => {\r
  const items = ["Index #0", "Index #1", "Index #2"];\r
\r
  const [activeIndex, setActiveIndex] = useState(0);\r
  const [direction, setDirection] = useState("next");\r
\r
  const handleClickPrevious = () => {\r
    setDirection("back");\r
\r
    if (activeIndex >= 1) {\r
      setActiveIndex(activeIndex - 1);\r
    }\r
  };\r
\r
  const handleClickNext = () => {\r
    setDirection("next");\r
\r
    if (activeIndex < items.length - 1) {\r
      setActiveIndex(activeIndex + 1);\r
    }\r
  };\r
\r
  return (\r
    <>\r
      <button\r
        className="bg-gray-800 text-white mb-4 p-2 mr-2 rounded-lg"\r
        onClick={handleClickPrevious}\r
      >\r
        Previous slide\r
      </button>\r
      <button\r
        className="bg-gray-800 text-white mb-4 p-2 rounded-lg"\r
        onClick={handleClickNext}\r
      >\r
        Next slide\r
      </button>\r
      <div className="relative">\r
        <div>{\`activeIndex: \${activeIndex}, direction: \${direction}\`}</div>\r
        <AnimatePresence initial={false}>\r
          {items.map((item, index) => {\r
            const itemProps = direction === "next" ? nextAnim : backAnim;\r
            return (\r
              activeIndex === index && (\r
                <Item\r
                  key={\`\${item}-\${index}\`}\r
                  {...itemProps}\r
                  transition={{ type: "spring", damping: 30, stiffness: 200 }}\r
                >\r
                  {item}\r
                </Item>\r
              )\r
            );\r
          })}\r
        </AnimatePresence>\r
      </div>\r
    </>\r
  );\r
};\r
\r
const Item = styled(motion.div)\`\r
  width: 300px;\r
  height: 200px;\r
  position: absolute;\r
  border-radius: 8px;\r
  background: #f3bf17;\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
  color: white;\r
  font-size: 24px;\r
\`;\r
\r
export const TodoList = () => {\r
  const [items, setItems] = useState<any[]>([]);\r
\r
  const handleClickAdd = () => {\r
    setItems([...items, { id: Date.now(), label: "Item" }]);\r
  };\r
\r
  const handleClickRemoveItem = (index: number) => {\r
    const newItems = [...items];\r
    newItems.splice(index, 1);\r
\r
    setItems(newItems);\r
  };\r
\r
  return (\r
    <>\r
      <button\r
        className="mb-4 bg-green-700 text-white p-2"\r
        onClick={handleClickAdd}\r
      >\r
        Add Item\r
      </button>\r
\r
      <div className="flex flex-col gap-2">\r
        <AnimatePresence>\r
          {items.map((item, index) => (\r
            <motion.div\r
              layout\r
              key={item.id}\r
              onClick={() => handleClickRemoveItem(index)}\r
              style={{\r
                background: "black",\r
                color: "white",\r
                padding: "12px",\r
                cursor: "pointer",\r
              }}\r
              initial={{ opacity: 0, x: 100 }}\r
              animate={{ opacity: 1, x: 0 }}\r
              exit={{ opacity: 0, x: -100 }}\r
            >\r
              {item.label}\r
            </motion.div>\r
          ))}\r
        </AnimatePresence>\r
      </div>\r
    </>\r
  );\r
};\r
`,locationsMap:{"mounted-animation":{startLoc:{col:32,line:10},endLoc:{col:1,line:35},startBody:{col:32,line:10},endBody:{col:1,line:35}},"toggle-between-elements":{startLoc:{col:37,line:44},endLoc:{col:1,line:81},startBody:{col:37,line:44},endBody:{col:1,line:81}},"carousel-example":{startLoc:{col:31,line:95},endLoc:{col:1,line:152},startBody:{col:31,line:95},endBody:{col:1,line:152}},"todo-list":{startLoc:{col:24,line:167},endLoc:{col:1,line:214},startBody:{col:24,line:167},endBody:{col:1,line:214}}}}},title:"components/Transition"},T=r(()=>{const[t,e]=s.exports.useState(!0);return a(d,{children:[n("button",{className:"mb-4 bg-red-500 p-2",onClick:()=>e(!t),children:"Toggle"}),n(m,{children:t&&n(p.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},style:{background:"black",color:"white"},children:"This is content"})})]})},"MountedAnimation"),b=y(p.div)`
  color: white;
  padding: 12px;
  background: black;
  position: absolute;
`,B=r(()=>{const[t,e]=s.exports.useState(!1);return a(d,{children:[n("button",{className:"p-2 mb-2 border-[1px] border-red-500",onClick:()=>e(!t),children:"Click to toggle"}),n("div",{style:{position:"relative"},children:n(m,{children:t?n(b,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},exit:{opacity:0,scale:0},children:"Element 1"},"open"):n(b,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1,background:"#db2f2f"},exit:{opacity:0,scale:0},children:"Element 2"},"close")})})]})},"ToggleBetweenElements"),h={initial:{opacity:0,x:300,scale:1.2},animate:{opacity:1,x:0,scale:1},exit:{opacity:0}},k={initial:{opacity:0,x:-300,scale:1.2},animate:{opacity:1,x:0,scale:1},exit:{opacity:0}},L=r(()=>{const t=["Index #0","Index #1","Index #2"],[e,c]=s.exports.useState(0),[l,i]=s.exports.useState("next");return a(d,{children:[n("button",{className:"bg-gray-800 text-white mb-4 p-2 mr-2 rounded-lg",onClick:r(()=>{i("back"),e>=1&&c(e-1)},"handleClickPrevious"),children:"Previous slide"}),n("button",{className:"bg-gray-800 text-white mb-4 p-2 rounded-lg",onClick:r(()=>{i("next"),e<t.length-1&&c(e+1)},"handleClickNext"),children:"Next slide"}),a("div",{className:"relative",children:[n("div",{children:`activeIndex: ${e}, direction: ${l}`}),n(m,{initial:!1,children:t.map((x,u)=>e===u&&n(v,{...l==="next"?h:k,transition:{type:"spring",damping:30,stiffness:200},children:x},`${x}-${u}`))})]})]})},"CarouselExample"),v=y(p.div)`
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
`,O=r(()=>{const[t,e]=s.exports.useState([]),c=r(()=>{e([...t,{id:Date.now(),label:"Item"}])},"handleClickAdd"),l=r(i=>{const o=[...t];o.splice(i,1),e(o)},"handleClickRemoveItem");return a(d,{children:[n("button",{className:"mb-4 bg-green-700 text-white p-2",onClick:c,children:"Add Item"}),n("div",{className:"flex flex-col gap-2",children:n(m,{children:t.map((i,o)=>n(p.div,{layout:!0,onClick:()=>l(o),style:{background:"black",color:"white",padding:"12px",cursor:"pointer"},initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},children:i.label},i.id))})})]})},"TodoList"),V=["MountedAnimation","ToggleBetweenElements","CarouselExample","TodoList"];export{L as CarouselExample,T as MountedAnimation,O as TodoList,B as ToggleBetweenElements,V as __namedExportsOrder,S as default};
//# sourceMappingURL=index.stories.1d6727ec.js.map
