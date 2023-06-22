var ln=Object.defineProperty;var a=(n,t)=>ln(n,"name",{value:t,configurable:!0});import{r as M,R as D,j as b,F,a as un}from"./jsx-runtime.4c542564.js";import{u as N,M as fn,m as mn,i as dn,a as nn,c as pn,f as gn,b as yn,d as hn,s as An,e as xn,S as bn,H as En,v as U,g as vn,h as Sn,j as wn,k as Mn,l as Vn,n as kn,r as Tn,o as tn,p as Cn,q as Bn,t as In,w as Ln,x as en,y as jn,z as C}from"./motion.1c67eed7.js";import"./iframe.6a488344.js";function B(n){const t=N(()=>mn(n)),{isStatic:e}=M.exports.useContext(fn);if(e){const[,r]=M.exports.useState(n);M.exports.useEffect(()=>t.on("change",r),[])}return t}a(B,"useMotionValue");const Rn=a(n=>typeof n=="object"&&n.mix,"isCustomValueType"),Dn=a(n=>Rn(n)?n.mix:void 0,"getMixer");function Un(...n){const t=!Array.isArray(n[0]),e=t?0:-1,r=n[0+e],o=n[1+e],s=n[2+e],i=n[3+e],c=dn(o,s,{mixer:Dn(s[0]),...i});return t?c(r):c}a(Un,"transform");function Fn(n,t){const e=B(t()),r=a(()=>e.set(t()),"updateValue");return r(),nn(()=>{const o=a(()=>gn.update(r,!1,!0),"scheduleUpdate"),s=n.map(i=>i.on("change",o));return()=>{s.forEach(i=>i()),pn(r)}}),e}a(Fn,"useCombineMotionValues");function R(n,t,e,r){const o=typeof t=="function"?t:Un(t,e,r);return Array.isArray(n)?$(n,o):$([n],([s])=>o(s))}a(R,"useTransform");function $(n,t){const e=N(()=>[]);return Fn(n,()=>{e.length=0;const r=n.length;for(let o=0;o<r;o++)e[o]=n[o].get();return t(e)})}a($,"useListTransform");function rn(n,t,e){var r;if(typeof n=="string"){let o=document;t&&(yn(Boolean(t.current)),o=t.current),e?((r=e[n])!==null&&r!==void 0||(e[n]=o.querySelectorAll(n)),n=e[n]):n=o.querySelectorAll(n)}else n instanceof Element&&(n=[n]);return Array.from(n||[])}a(rn,"resolveElements");function Nn(n){n.values.forEach(t=>t.stop())}a(Nn,"stopAnimation");function _n(){const n=new Set,t={subscribe(e){return n.add(e),()=>void n.delete(e)},start(e,r){const o=[];return n.forEach(s=>{o.push(hn(s,e,{transitionOverride:r}))}),Promise.all(o)},set(e){return n.forEach(r=>{An(r,e)})},stop(){n.forEach(e=>{Nn(e)})},mount(){return()=>{t.stop()}}};return t}a(_n,"animationControls");class _{constructor(t){this.animations=t.filter(Boolean)}then(t,e){return Promise.all(this.animations).then(t).catch(e)}getAll(t){return this.animations[0][t]}setAll(t,e){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=e}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get duration(){let t=0;for(let e=0;e<this.animations.length;e++)t=Math.max(t,this.animations[e].duration);return t}runAll(t){this.animations.forEach(e=>e[t]())}play(){this.runAll("play")}pause(){this.runAll("pause")}stop(){this.runAll("stop")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}a(_,"GroupPlaybackControls");function Hn(n){return typeof n=="object"&&!Array.isArray(n)}a(Hn,"isDOMKeyframes");function Kn(n){const t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},e=xn(n)?new bn(t,{enableHardwareAcceleration:!1}):new En(t,{enableHardwareAcceleration:!0});e.mount(n),U.set(n,e)}a(Kn,"createVisualElement");function Gn(n,t=100){const e=vn({keyframes:[0,t],...n}),r=Math.min(Sn(e),wn);return{type:"keyframes",ease:o=>e.next(r*o).value/t,duration:Mn(r)}}a(Gn,"createGeneratorEasing");function J(n,t,e,r){var o;return typeof t=="number"?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,n+parseFloat(t)):t==="<"?e:(o=r.get(t))!==null&&o!==void 0?o:n}a(J,"calcNextTime");const On=a((n,t,e)=>{const r=t-n;return((e-n)%r+r)%r+n},"wrap");function qn(n,t){return Vn(n)?n[On(0,n.length,t)]:n}a(qn,"getEasingForSegment");function Pn(n,t,e){for(let r=0;r<n.length;r++){const o=n[r];o.at>t&&o.at<e&&(Tn(n,o),r--)}}a(Pn,"eraseKeyframes");function Yn(n,t,e,r,o,s){Pn(n,o,s);for(let i=0;i<t.length;i++)n.push({value:t[i],at:kn(o,s,r[i]),easing:qn(e,i)})}a(Yn,"addKeyframes");function zn(n,t){return n.at===t.at?n.value===null?1:t.value===null?-1:0:n.at-t.at}a(zn,"compareByTime");const Wn="easeInOut";function $n(n,{defaultTransition:t={},...e}={},r){const o=t.duration||.3,s=new Map,i=new Map,c={},u=new Map;let V=0,f=0,I=0;for(let v=0;v<n.length;v++){const p=n[v];if(typeof p=="string"){u.set(p,f);continue}else if(!Array.isArray(p)){u.set(p.name,J(f,p.at,V,u));continue}let[E,g,m={}]=p;m.at!==void 0&&(f=J(f,m.at,V,u));let d=0;const S=a((y,h,x,k=0,T=0)=>{const l=Jn(y),{delay:j=0,times:w=Cn(l),type:an="keyframes",...sn}=h;let{ease:H=t.ease||"easeOut",duration:A}=h;const K=typeof j=="function"?j(k,T):j,G=l.length;if(G<=2&&an==="spring"){let Y=100;if(G===2&&Zn(l)){const cn=l[1]-l[0];Y=Math.abs(cn)}const z={...sn};A!==void 0&&(z.duration=Ln(A));const W=Gn(z,Y);H=W.ease,A=W.duration}A!=null||(A=o);const O=f+K,q=O+A;w.length===1&&w[0]===0&&(w[1]=1);const P=w.length-l.length;P>0&&Bn(w,P),l.length===1&&l.unshift(null),Yn(x,l,H,w,O,q),d=Math.max(K+A,d),I=Math.max(q,I)},"resolveValueSequence");if(tn(E)){const y=Q(E,i);S(g,m,X("default",y))}else{const y=rn(E,r,c),h=y.length;for(let x=0;x<h;x++){g=g,m=m;const k=y[x],T=Q(k,i);for(const l in g)S(g[l],Qn(m,l),X(l,T),x,h)}V=f,f+=d}}return i.forEach((v,p)=>{for(const E in v){const g=v[E];g.sort(zn);const m=[],d=[],S=[];for(let h=0;h<g.length;h++){const{at:x,value:k,easing:T}=g[h];m.push(k),d.push(In(0,I,x)),S.push(T||"easeOut")}d[0]!==0&&(d.unshift(0),m.unshift(m[0]),S.unshift(Wn)),d[d.length-1]!==1&&(d.push(1),m.push(null)),s.has(p)||s.set(p,{keyframes:{},transition:{}});const y=s.get(p);y.keyframes[E]=m,y.transition[E]={...t,duration:I,ease:S,times:d,...e}}}),s}a($n,"createAnimationsFromSequence");function Q(n,t){return!t.has(n)&&t.set(n,{}),t.get(n)}a(Q,"getSubjectSequence");function X(n,t){return t[n]||(t[n]=[]),t[n]}a(X,"getValueSequence");function Jn(n){return Array.isArray(n)?n:[n]}a(Jn,"keyframesAsList");function Qn(n,t){return n[t]?{...n,...n[t]}:{...n}}a(Qn,"getValueTransition");const Xn=a(n=>typeof n=="number","isNumber"),Zn=a(n=>n.every(Xn),"isNumberKeyframesArray");function on(n,t,e,r){const o=rn(n,r),s=o.length,i=[];for(let c=0;c<s;c++){const u=o[c];U.has(u)||Kn(u);const V=U.get(u),f={...e};typeof f.delay=="function"&&(f.delay=f.delay(c,s)),i.push(...jn(V,{...t,transition:f},{}))}return new _(i)}a(on,"animateElements");const nt=a(n=>Array.isArray(n)&&Array.isArray(n[0]),"isSequence");function tt(n,t,e){const r=[];return $n(n,t,e).forEach(({keyframes:s,transition:i},c)=>{let u;tn(c)?u=en(c,s.default,i.default):u=on(c,s,i),r.push(u)}),new _(r)}a(tt,"animateSequence");const et=a(n=>{function t(e,r,o){let s;return nt(e)?s=tt(e,r,n):Hn(r)?s=on(e,r,o,n):s=en(e,r,o),n&&n.animations.push(s),s}return a(t,"scopedAnimate"),t},"createScopedAnimate"),L=et();function Z(){const n=N(_n);return nn(n.mount,[]),n}a(Z,"useAnimationControls");const it={parameters:{storySource:{source:`import React, { useEffect, useState } from "react";\r
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
\r
export default {\r
  title: "components/Animate",\r
};\r
\r
export const AnimateMotionValue = () => {\r
  const y = useMotionValue(0);\r
  const scale = useMotionValue(0);\r
\r
  React.useEffect(() => {\r
    animate(y, 100, {\r
      duration: 2,\r
      repeatType: "mirror",\r
      repeat: Infinity,\r
      onUpdate: (latest) => {\r
        // console.log({ latest });\r
      },\r
    });\r
\r
    animate(scale, 1, {\r
      duration: 2,\r
      repeatType: "mirror",\r
      repeat: Infinity,\r
    });\r
  }, []);\r
\r
  return (\r
    <>\r
      <motion.div\r
        style={{\r
          y,\r
          scale,\r
          width: 100,\r
          background: "red",\r
          color: "white",\r
          textAlign: "center",\r
        }}\r
      >\r
        Hello\r
      </motion.div>\r
    </>\r
  );\r
};\r
\r
export const AnimateUseTransform = () => {\r
  const progress = useMotionValue(0);\r
  const scale = useTransform(progress, [0, 0.5, 1], [0.5, 1, 1.5]);\r
  const borderRadius = useTransform(progress, [0, 0.5, 1], [0, 24, 100]);\r
  const background = useTransform(\r
    progress,\r
    [0, 0.5, 1],\r
    ["#c54e4a", "#000000", "#276ac2"]\r
  );\r
\r
  useEffect(() => {\r
    animate(progress, 1, {\r
      type: "spring",\r
      repeatType: "mirror",\r
      repeat: Infinity,\r
      stiffness: 160,\r
      damping: 30,\r
    });\r
  }, []);\r
\r
  return (\r
    <div className="flex flex-col justify-center p-10">\r
      <motion.div\r
        className="bg-red-500 w-[200px] h-[200px]"\r
        style={{ scale, background, borderRadius }}\r
      />\r
    </div>\r
  );\r
};\r
\r
export const AnimateUsingControl = () => {\r
  const controlA = useAnimationControls();\r
  const controlB = useAnimationControls();\r
\r
  const sequenceAnim = async () => {\r
    await controlA.start({\r
      x: 300,\r
      height: 200,\r
      background: "#b83333",\r
      color: "#fff",\r
    });\r
    await controlB.start({ x: 300, background: "#a41fab", color: "#fff" });\r
    await controlA.start({ x: 100, background: "#85da41" });\r
    await controlB.start({\r
      x: 200,\r
      height: 150,\r
      background: "#a41fab",\r
      color: "#fff",\r
    });\r
    await controlA.start({ x: 100, height: "initial", background: "#85da41" });\r
  };\r
\r
  useEffect(() => {\r
    sequenceAnim();\r
  }, []);\r
\r
  return (\r
    <>\r
      <motion.div\r
        style={{\r
          display: "flex",\r
          justifyContent: "center",\r
          alignItems: "center",\r
        }}\r
        initial={{\r
          x: -100,\r
          background: "#fff",\r
          color: "#111",\r
          width: 100,\r
        }}\r
        animate={controlA}\r
      >\r
        Element A\r
      </motion.div>\r
      <motion.div\r
        style={{\r
          display: "flex",\r
          justifyContent: "center",\r
          alignItems: "center",\r
        }}\r
        initial={{\r
          x: -150,\r
          width: 100,\r
          background: "#fff",\r
          color: "#111",\r
        }}\r
        animate={controlB}\r
      >\r
        Element B\r
      </motion.div>\r
    </>\r
  );\r
};\r
\r
export const RenderingAnimateMotionValueOnScreen = () => {\r
  const y = useMotionValue(0);\r
\r
  const [yState, setYState] = useState(y.get());\r
\r
  React.useEffect(() => {\r
    animate(y, 100, {\r
      duration: 2,\r
      repeatType: "mirror",\r
      repeat: Infinity,\r
      onUpdate: (latest) => {\r
        // console.log({ latest });\r
      },\r
    });\r
  }, []);\r
\r
  React.useEffect(() => {\r
    const unSubscribe = y.onChange((val) => setYState(val));\r
    return () => unSubscribe();\r
  }, [y]);\r
\r
  return (\r
    <>\r
      <motion.div\r
        style={{\r
          y,\r
          width: 100,\r
          background: "red",\r
          color: "white",\r
          textAlign: "center",\r
        }}\r
      >\r
        {\`y: \${yState.toFixed(0)}\`}\r
      </motion.div>\r
    </>\r
  );\r
};\r
`,locationsMap:{"animate-motion-value":{startLoc:{col:34,line:17},endLoc:{col:1,line:54},startBody:{col:34,line:17},endBody:{col:1,line:54}},"animate-use-transform":{startLoc:{col:35,line:56},endLoc:{col:1,line:84},startBody:{col:35,line:56},endBody:{col:1,line:84}},"animate-using-control":{startLoc:{col:35,line:86},endLoc:{col:1,line:148},startBody:{col:35,line:86},endBody:{col:1,line:148}},"rendering-animate-motion-value-on-screen":{startLoc:{col:51,line:150},endLoc:{col:1,line:186},startBody:{col:51,line:150},endBody:{col:1,line:186}}}}},title:"components/Animate"},ct=a(()=>{const n=B(0),t=B(0);return D.useEffect(()=>{L(n,100,{duration:2,repeatType:"mirror",repeat:1/0,onUpdate:e=>{}}),L(t,1,{duration:2,repeatType:"mirror",repeat:1/0})},[]),b(F,{children:b(C.div,{style:{y:n,scale:t,width:100,background:"red",color:"white",textAlign:"center"},children:"Hello"})})},"AnimateMotionValue"),lt=a(()=>{const n=B(0),t=R(n,[0,.5,1],[.5,1,1.5]),e=R(n,[0,.5,1],[0,24,100]),r=R(n,[0,.5,1],["#c54e4a","#000000","#276ac2"]);return M.exports.useEffect(()=>{L(n,1,{type:"spring",repeatType:"mirror",repeat:1/0,stiffness:160,damping:30})},[]),b("div",{className:"flex flex-col justify-center p-10",children:b(C.div,{className:"bg-red-500 w-[200px] h-[200px]",style:{scale:t,background:r,borderRadius:e}})})},"AnimateUseTransform"),ut=a(()=>{const n=Z(),t=Z(),e=a(async()=>{await n.start({x:300,height:200,background:"#b83333",color:"#fff"}),await t.start({x:300,background:"#a41fab",color:"#fff"}),await n.start({x:100,background:"#85da41"}),await t.start({x:200,height:150,background:"#a41fab",color:"#fff"}),await n.start({x:100,height:"initial",background:"#85da41"})},"sequenceAnim");return M.exports.useEffect(()=>{e()},[]),un(F,{children:[b(C.div,{style:{display:"flex",justifyContent:"center",alignItems:"center"},initial:{x:-100,background:"#fff",color:"#111",width:100},animate:n,children:"Element A"}),b(C.div,{style:{display:"flex",justifyContent:"center",alignItems:"center"},initial:{x:-150,width:100,background:"#fff",color:"#111"},animate:t,children:"Element B"})]})},"AnimateUsingControl"),ft=a(()=>{const n=B(0),[t,e]=M.exports.useState(n.get());return D.useEffect(()=>{L(n,100,{duration:2,repeatType:"mirror",repeat:1/0,onUpdate:r=>{}})},[]),D.useEffect(()=>{const r=n.onChange(o=>e(o));return()=>r()},[n]),b(F,{children:b(C.div,{style:{y:n,width:100,background:"red",color:"white",textAlign:"center"},children:`y: ${t.toFixed(0)}`})})},"RenderingAnimateMotionValueOnScreen"),mt=["AnimateMotionValue","AnimateUseTransform","AnimateUsingControl","RenderingAnimateMotionValueOnScreen"];export{ct as AnimateMotionValue,lt as AnimateUseTransform,ut as AnimateUsingControl,ft as RenderingAnimateMotionValueOnScreen,mt as __namedExportsOrder,it as default};
//# sourceMappingURL=index.stories.5dc2b07a.js.map
