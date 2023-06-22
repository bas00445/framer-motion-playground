var l=Object.defineProperty;var t=(r,o)=>l(r,"name",{value:o,configurable:!0});import{n as c}from"./emotion-styled.browser.esm.c979914f.js";import{z as i}from"./motion.1c67eed7.js";import{j as n,r as s,a}from"./jsx-runtime.4c542564.js";import"./iframe.6a488344.js";const e=c(i.button)`
  color: white;
  background: #149957;
  padding: 12px;
  outline: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;const u={parameters:{storySource:{source:`import { motion } from "framer-motion";\r
\r
import { Container } from "./styled";\r
import { useRef } from "react";\r
import "./index.css";\r
\r
export default {\r
  title: "components/Basic",\r
};\r
\r
export const AnimateWithCSS = () => {\r
  return <button className="basic-anim">CSS Only</button>;\r
};\r
\r
export const AnimateOnly = () => {\r
  return (\r
    <motion.button\r
      style={{ color: "white", padding: 12 }}\r
      initial={{ scale: 0, opacity: 0, background: "#c6242c" }}\r
      animate={{ scale: 1, opacity: 1, background: "#1662d4" }}\r
    >\r
      Animate Only\r
    </motion.button>\r
  );\r
};\r
\r
export const AnimateOnlyWithTransitionProps = () => {\r
  return (\r
    <Container\r
      initial={{ scale: 0.5, x: 0, y: 0, rotate: 180 }}\r
      animate={{ scale: 1.2, x: 50, y: 50, rotate: 0 }}\r
      transition={{ type: "spring", stiffness: 100, mass: 1 }}\r
    >\r
      Animate Only\r
    </Container>\r
  );\r
};\r
\r
export const Events = () => {\r
  return (\r
    <Container\r
      initial={{ background: "#666" }}\r
      whileTap={{ scale: 1.2, background: "#371d9f" }}\r
      whileHover={{ scale: 1, background: "#f4341a" }}\r
    >\r
      Click Me\r
    </Container>\r
  );\r
};\r
\r
export const DragEvents = () => {\r
  const parentRef = useRef(null);\r
\r
  return (\r
    <div className="flex flex-col gap-4">\r
      <div>\r
        <div className="mb-4">Drag with parent constraint</div>\r
        <motion.div\r
          ref={parentRef}\r
          className="flex items-center border-black border"\r
        >\r
          <Container\r
            whileDrag={{ scale: 1, opacity: 0.7 }}\r
            drag="x"\r
            dragConstraints={parentRef}\r
          >\r
            Drag Me\r
          </Container>\r
        </motion.div>\r
      </div>\r
\r
      <div>\r
        <div className="mb-4">Drag with relative distance</div>\r
        <Container\r
          initial={{ background: "#5a16c0" }}\r
          whileDrag={{ scale: 1, background: "#f21860" }}\r
          drag\r
          dragConstraints={{ top: -50, bottom: 50, left: -50, right: 50 }}\r
        >\r
          Drag Me\r
        </Container>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export const Variants = () => {\r
  const variants = {\r
    initial: {\r
      background: "#a622a6ff",\r
      color: "#fff",\r
    },\r
    hover: {\r
      background: "#000",\r
      color: "#fff",\r
    },\r
    tap: {\r
      background: "#000",\r
      color: "#fff",\r
      scale: 1.2,\r
    },\r
  };\r
\r
  return (\r
    <Container\r
      variants={variants}\r
      initial={variants.initial}\r
      whileHover={variants.hover}\r
      whileTap={variants.tap}\r
    >\r
      Click Me\r
    </Container>\r
  );\r
};\r
`,locationsMap:{"animate-with-css":{startLoc:{col:30,line:11},endLoc:{col:1,line:13},startBody:{col:30,line:11},endBody:{col:1,line:13}},"animate-only":{startLoc:{col:27,line:15},endLoc:{col:1,line:25},startBody:{col:27,line:15},endBody:{col:1,line:25}},"animate-only-with-transition-props":{startLoc:{col:46,line:27},endLoc:{col:1,line:37},startBody:{col:46,line:27},endBody:{col:1,line:37}},events:{startLoc:{col:22,line:39},endLoc:{col:1,line:49},startBody:{col:22,line:39},endBody:{col:1,line:49}},"drag-events":{startLoc:{col:26,line:51},endLoc:{col:1,line:85},startBody:{col:26,line:51},endBody:{col:1,line:85}},variants:{startLoc:{col:24,line:87},endLoc:{col:1,line:114},startBody:{col:24,line:87},endBody:{col:1,line:114}}}}},title:"components/Basic"},h=t(()=>n("button",{className:"basic-anim",children:"CSS Only"}),"AnimateWithCSS"),b=t(()=>n(i.button,{style:{color:"white",padding:12},initial:{scale:0,opacity:0,background:"#c6242c"},animate:{scale:1,opacity:1,background:"#1662d4"},children:"Animate Only"}),"AnimateOnly"),v=t(()=>n(e,{initial:{scale:.5,x:0,y:0,rotate:180},animate:{scale:1.2,x:50,y:50,rotate:0},transition:{type:"spring",stiffness:100,mass:1},children:"Animate Only"}),"AnimateOnlyWithTransitionProps"),y=t(()=>n(e,{initial:{background:"#666"},whileTap:{scale:1.2,background:"#371d9f"},whileHover:{scale:1,background:"#f4341a"},children:"Click Me"}),"Events"),x=t(()=>{const r=s.exports.useRef(null);return a("div",{className:"flex flex-col gap-4",children:[a("div",{children:[n("div",{className:"mb-4",children:"Drag with parent constraint"}),n(i.div,{ref:r,className:"flex items-center border-black border",children:n(e,{whileDrag:{scale:1,opacity:.7},drag:"x",dragConstraints:r,children:"Drag Me"})})]}),a("div",{children:[n("div",{className:"mb-4",children:"Drag with relative distance"}),n(e,{initial:{background:"#5a16c0"},whileDrag:{scale:1,background:"#f21860"},drag:!0,dragConstraints:{top:-50,bottom:50,left:-50,right:50},children:"Drag Me"})]})]})},"DragEvents"),k=t(()=>{const r={initial:{background:"#a622a6ff",color:"#fff"},hover:{background:"#000",color:"#fff"},tap:{background:"#000",color:"#fff",scale:1.2}};return n(e,{variants:r,initial:r.initial,whileHover:r.hover,whileTap:r.tap,children:"Click Me"})},"Variants"),C=["AnimateWithCSS","AnimateOnly","AnimateOnlyWithTransitionProps","Events","DragEvents","Variants"];export{b as AnimateOnly,v as AnimateOnlyWithTransitionProps,h as AnimateWithCSS,x as DragEvents,y as Events,k as Variants,C as __namedExportsOrder,u as default};
//# sourceMappingURL=index.stories.c06a8fee.js.map
