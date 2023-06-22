var c=Object.defineProperty;var a=(n,r)=>c(n,"name",{value:r,configurable:!0});import{r as o,j as t,a as l}from"./jsx-runtime.4c542564.js";import{z as d}from"./motion.1c67eed7.js";import"./iframe.6a488344.js";const x={parameters:{storySource:{source:`import { useState } from "react";\r
\r
import { motion } from "framer-motion";\r
\r
export default {\r
  title: "components/SharedLayout",\r
};\r
\r
export const TabsWithUnderline = () => {\r
  const [activeTabIndex, setActiveTabIndex] = useState(0);\r
  const [items, setItems] = useState(["Tab 1", "Tab 2", "Tab 3"]);\r
\r
  return (\r
    <div style={{ display: "flex", gap: 12 }}>\r
      {items.map((item, index) => (\r
        <div key={item} onClick={() => setActiveTabIndex(index)}>\r
          <motion.div\r
            style={{ padding: 12, cursor: "pointer" }}\r
            initial={{ color: "#000", background: "#fff", borderRadius: 0 }}\r
            animate={{\r
              background: activeTabIndex === index ? "#ffa5a7" : "#fff",\r
            }}\r
          >\r
            {item}\r
          </motion.div>\r
          {activeTabIndex === index && (\r
            <motion.div\r
              layoutId="underline"\r
              style={{\r
                width: "100%",\r
                height: "2px",\r
                marginTop: "4px",\r
                background: "#931010",\r
              }}\r
            />\r
          )}\r
        </div>\r
      ))}\r
    </div>\r
  );\r
};\r
`,locationsMap:{"tabs-with-underline":{startLoc:{col:33,line:9},endLoc:{col:1,line:41},startBody:{col:33,line:9},endBody:{col:1,line:41}}}}},title:"components/SharedLayout"},v=a(()=>{const[n,r]=o.exports.useState(0),[s,m]=o.exports.useState(["Tab 1","Tab 2","Tab 3"]);return t("div",{style:{display:"flex",gap:12},children:s.map((i,e)=>l("div",{onClick:()=>r(e),children:[t(d.div,{style:{padding:12,cursor:"pointer"},initial:{color:"#000",background:"#fff",borderRadius:0},animate:{background:n===e?"#ffa5a7":"#fff"},children:i}),n===e&&t(d.div,{layoutId:"underline",style:{width:"100%",height:"2px",marginTop:"4px",background:"#931010"}})]},i))})},"TabsWithUnderline"),T=["TabsWithUnderline"];export{v as TabsWithUnderline,T as __namedExportsOrder,x as default};
//# sourceMappingURL=index.stories.52776846.js.map
