var Te=Object.defineProperty;var s=(e,r)=>Te(e,"name",{value:r,configurable:!0});import{b as oe,r as I}from"./jsx-runtime.4c542564.js";function re(){return re=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},re.apply(this,arguments)}s(re,"_extends");function ye(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}s(ye,"memoize");var Re=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,$e=ye(function(e){return Re.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function _e(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}s(_e,"sheetForTag");function Me(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),e.nonce!==void 0&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}s(Me,"createStyleElement");var Ie=function(){function e(t){var n=this;this._insertTag=function(a){var i;n.tags.length===0?n.insertionPoint?i=n.insertionPoint.nextSibling:n.prepend?i=n.container.firstChild:i=n.before:i=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(a,i),n.tags.push(a)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}s(e,"StyleSheet");var r=e.prototype;return r.hydrate=s(function(n){n.forEach(this._insertTag)},"hydrate"),r.insert=s(function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Me(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var i=_e(a);try{i.insertRule(n,i.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(n));this.ctr++},"insert"),r.flush=s(function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},"flush"),e}(),C="-ms-",K="-moz-",u="-webkit-",be="comm",ae="rule",ie="decl",Ne="@import",ve="@keyframes",Fe=Math.abs,Z=String.fromCharCode,Le=Object.assign;function ze(e,r){return k(e,0)^45?(((r<<2^k(e,0))<<2^k(e,1))<<2^k(e,2))<<2^k(e,3):0}s(ze,"hash");function xe(e){return e.trim()}s(xe,"trim");function He(e,r){return(e=r.exec(e))?e[0]:e}s(He,"match");function l(e,r,t){return e.replace(r,t)}s(l,"replace");function te(e,r){return e.indexOf(r)}s(te,"indexof");function k(e,r){return e.charCodeAt(r)|0}s(k,"charat");function W(e,r,t){return e.slice(r,t)}s(W,"substr");function $(e){return e.length}s($,"strlen");function se(e){return e.length}s(se,"sizeof");function V(e,r){return r.push(e),e}s(V,"append");function We(e,r){return e.map(r).join("")}s(We,"combine");var J=1,L=1,we=0,P=0,x=0,z="";function Q(e,r,t,n,a,i,o){return{value:e,root:r,parent:t,type:n,props:a,children:i,line:J,column:L,length:o,return:""}}s(Q,"node");function H(e,r){return Le(Q("",null,null,"",null,null,0),e,{length:-e.length},r)}s(H,"copy");function De(){return x}s(De,"char");function Ue(){return x=P>0?k(z,--P):0,L--,x===10&&(L=1,J--),x}s(Ue,"prev");function O(){return x=P<we?k(z,P++):0,L++,x===10&&(L=1,J++),x}s(O,"next");function M(){return k(z,P)}s(M,"peek");function B(){return P}s(B,"caret");function j(e,r){return W(z,e,r)}s(j,"slice");function D(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}s(D,"token");function ke(e){return J=L=1,we=$(z=e),P=0,[]}s(ke,"alloc");function Se(e){return z="",e}s(Se,"dealloc");function X(e){return xe(j(P-1,ne(e===91?e+2:e===40?e+1:e)))}s(X,"delimit");function je(e){for(;(x=M())&&x<33;)O();return D(e)>2||D(x)>3?"":" "}s(je,"whitespace");function qe(e,r){for(;--r&&O()&&!(x<48||x>102||x>57&&x<65||x>70&&x<97););return j(e,B()+(r<6&&M()==32&&O()==32))}s(qe,"escaping");function ne(e){for(;O();)switch(x){case e:return P;case 34:case 39:e!==34&&e!==39&&ne(x);break;case 40:e===41&&ne(e);break;case 92:O();break}return P}s(ne,"delimiter");function Ge(e,r){for(;O()&&e+x!==47+10;)if(e+x===42+42&&M()===47)break;return"/*"+j(r,P-1)+"*"+Z(e===47?e:O())}s(Ge,"commenter");function Ve(e){for(;!D(M());)O();return j(e,P)}s(Ve,"identifier");function Be(e){return Se(Y("",null,null,null,[""],e=ke(e),0,[0],e))}s(Be,"compile");function Y(e,r,t,n,a,i,o,c,g){for(var w=0,d=0,p=o,R=0,A=0,m=0,f=1,y=1,b=1,v=0,S="",N=a,T=i,E=n,h=S;y;)switch(m=v,v=O()){case 40:if(m!=108&&k(h,p-1)==58){te(h+=l(X(v),"&","&\f"),"&\f")!=-1&&(b=-1);break}case 34:case 39:case 91:h+=X(v);break;case 9:case 10:case 13:case 32:h+=je(m);break;case 92:h+=qe(B()-1,7);continue;case 47:switch(M()){case 42:case 47:V(Xe(Ge(O(),B()),r,t),g);break;default:h+="/"}break;case 123*f:c[w++]=$(h)*b;case 125*f:case 59:case 0:switch(v){case 0:case 125:y=0;case 59+d:A>0&&$(h)-p&&V(A>32?fe(h+";",n,t,p-1):fe(l(h," ","")+";",n,t,p-2),g);break;case 59:h+=";";default:if(V(E=ce(h,r,t,w,d,a,c,S,N=[],T=[],p),i),v===123)if(d===0)Y(h,r,E,E,N,i,p,c,T);else switch(R===99&&k(h,3)===110?100:R){case 100:case 109:case 115:Y(e,E,E,n&&V(ce(e,E,E,0,0,a,c,S,a,N=[],p),T),a,T,p,c,n?N:T);break;default:Y(h,E,E,E,[""],T,0,c,T)}}w=d=A=0,f=b=1,S=h="",p=o;break;case 58:p=1+$(h),A=m;default:if(f<1){if(v==123)--f;else if(v==125&&f++==0&&Ue()==125)continue}switch(h+=Z(v),v*f){case 38:b=d>0?1:(h+="\f",-1);break;case 44:c[w++]=($(h)-1)*b,b=1;break;case 64:M()===45&&(h+=X(O())),R=M(),d=p=$(S=h+=Ve(B())),v++;break;case 45:m===45&&$(h)==2&&(f=0)}}return i}s(Y,"parse");function ce(e,r,t,n,a,i,o,c,g,w,d){for(var p=a-1,R=a===0?i:[""],A=se(R),m=0,f=0,y=0;m<n;++m)for(var b=0,v=W(e,p+1,p=Fe(f=o[m])),S=e;b<A;++b)(S=xe(f>0?R[b]+" "+v:l(v,/&\f/g,R[b])))&&(g[y++]=S);return Q(e,r,t,a===0?ae:c,g,w,d)}s(ce,"ruleset");function Xe(e,r,t){return Q(e,r,t,be,Z(De()),W(e,2,-2),0)}s(Xe,"comment");function fe(e,r,t,n){return Q(e,r,t,ie,W(e,0,n),W(e,n+1,-1),n)}s(fe,"declaration");function F(e,r){for(var t="",n=se(e),a=0;a<n;a++)t+=r(e[a],a,e,r)||"";return t}s(F,"serialize");function Ye(e,r,t,n){switch(e.type){case Ne:case ie:return e.return=e.return||e.value;case be:return"";case ve:return e.return=e.value+"{"+F(e.children,n)+"}";case ae:e.value=e.props.join(",")}return $(t=F(e.children,n))?e.return=e.value+"{"+t+"}":""}s(Ye,"stringify");function Ke(e){var r=se(e);return function(t,n,a,i){for(var o="",c=0;c<r;c++)o+=e[c](t,n,a,i)||"";return o}}s(Ke,"middleware");function Ze(e){return function(r){r.root||(r=r.return)&&e(r)}}s(Ze,"rulesheet");var Je=s(function(r,t,n){for(var a=0,i=0;a=i,i=M(),a===38&&i===12&&(t[n]=1),!D(i);)O();return j(r,P)},"identifierWithPointTracking"),Qe=s(function(r,t){var n=-1,a=44;do switch(D(a)){case 0:a===38&&M()===12&&(t[n]=1),r[n]+=Je(P-1,t,n);break;case 2:r[n]+=X(a);break;case 4:if(a===44){r[++n]=M()===58?"&\f":"",t[n]=r[n].length;break}default:r[n]+=Z(a)}while(a=O());return r},"toRules"),er=s(function(r,t){return Se(Qe(ke(r),t))},"getRules"),ue=new WeakMap,rr=s(function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var t=r.value,n=r.parent,a=r.column===n.column&&r.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(r.props.length===1&&t.charCodeAt(0)!==58&&!ue.get(n))&&!a){ue.set(r,!0);for(var i=[],o=er(t,i),c=n.props,g=0,w=0;g<o.length;g++)for(var d=0;d<c.length;d++,w++)r.props[w]=i[g]?o[g].replace(/&\f/g,c[d]):c[d]+" "+o[g]}}},"compat"),tr=s(function(r){if(r.type==="decl"){var t=r.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(r.return="",r.value="")}},"removeLabel");function Ce(e,r){switch(ze(e,r)){case 5103:return u+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return u+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return u+e+K+e+C+e+e;case 6828:case 4268:return u+e+C+e+e;case 6165:return u+e+C+"flex-"+e+e;case 5187:return u+e+l(e,/(\w+).+(:[^]+)/,u+"box-$1$2"+C+"flex-$1$2")+e;case 5443:return u+e+C+"flex-item-"+l(e,/flex-|-self/,"")+e;case 4675:return u+e+C+"flex-line-pack"+l(e,/align-content|flex-|-self/,"")+e;case 5548:return u+e+C+l(e,"shrink","negative")+e;case 5292:return u+e+C+l(e,"basis","preferred-size")+e;case 6060:return u+"box-"+l(e,"-grow","")+u+e+C+l(e,"grow","positive")+e;case 4554:return u+l(e,/([^-])(transform)/g,"$1"+u+"$2")+e;case 6187:return l(l(l(e,/(zoom-|grab)/,u+"$1"),/(image-set)/,u+"$1"),e,"")+e;case 5495:case 3959:return l(e,/(image-set\([^]*)/,u+"$1$`$1");case 4968:return l(l(e,/(.+:)(flex-)?(.*)/,u+"box-pack:$3"+C+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+u+e+e;case 4095:case 3583:case 4068:case 2532:return l(e,/(.+)-inline(.+)/,u+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if($(e)-1-r>6)switch(k(e,r+1)){case 109:if(k(e,r+4)!==45)break;case 102:return l(e,/(.+:)(.+)-([^]+)/,"$1"+u+"$2-$3$1"+K+(k(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~te(e,"stretch")?Ce(l(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(k(e,r+1)!==115)break;case 6444:switch(k(e,$(e)-3-(~te(e,"!important")&&10))){case 107:return l(e,":",":"+u)+e;case 101:return l(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+u+(k(e,14)===45?"inline-":"")+"box$3$1"+u+"$2$3$1"+C+"$2box$3")+e}break;case 5936:switch(k(e,r+11)){case 114:return u+e+C+l(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return u+e+C+l(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return u+e+C+l(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return u+e+C+e+e}return e}s(Ce,"prefix");var nr=s(function(r,t,n,a){if(r.length>-1&&!r.return)switch(r.type){case ie:r.return=Ce(r.value,r.length);break;case ve:return F([H(r,{value:l(r.value,"@","@"+u)})],a);case ae:if(r.length)return We(r.props,function(i){switch(He(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return F([H(r,{props:[l(i,/:(read-\w+)/,":"+K+"$1")]})],a);case"::placeholder":return F([H(r,{props:[l(i,/:(plac\w+)/,":"+u+"input-$1")]}),H(r,{props:[l(i,/:(plac\w+)/,":"+K+"$1")]}),H(r,{props:[l(i,/:(plac\w+)/,C+"input-$1")]})],a)}return""})}},"prefixer"),ar=[nr],ir=s(function(r){var t=r.key;if(t==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(f){var y=f.getAttribute("data-emotion");y.indexOf(" ")!==-1&&(document.head.appendChild(f),f.setAttribute("data-s",""))})}var a=r.stylisPlugins||ar,i={},o,c=[];o=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(f){for(var y=f.getAttribute("data-emotion").split(" "),b=1;b<y.length;b++)i[y[b]]=!0;c.push(f)});var g,w=[rr,tr];{var d,p=[Ye,Ze(function(f){d.insert(f)})],R=Ke(w.concat(a,p)),A=s(function(y){return F(Be(y),R)},"stylis");g=s(function(y,b,v,S){d=v,A(y?y+"{"+b.styles+"}":b.styles),S&&(m.inserted[b.name]=!0)},"insert")}var m={key:t,sheet:new Ie({key:t,container:o,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:i,registered:{},insert:g};return m.sheet.hydrate(c),m},"createCache"),sr=!0;function or(e,r,t){var n="";return t.split(" ").forEach(function(a){e[a]!==void 0?r.push(e[a]+";"):n+=a+" "}),n}s(or,"getRegisteredStyles");var Pe=s(function(r,t,n){var a=r.key+"-"+t.name;(n===!1||sr===!1)&&r.registered[a]===void 0&&(r.registered[a]=t.styles)},"registerStyles"),cr=s(function(r,t,n){Pe(r,t,n);var a=r.key+"-"+t.name;if(r.inserted[t.name]===void 0){var i=t;do r.insert(t===i?"."+a:"",i,r.sheet,!0),i=i.next;while(i!==void 0)}},"insertStyles");function fr(e){for(var r=0,t,n=0,a=e.length;a>=4;++n,a-=4)t=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(t&65535)*1540483477+((t>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(a){case 3:r^=(e.charCodeAt(n+2)&255)<<16;case 2:r^=(e.charCodeAt(n+1)&255)<<8;case 1:r^=e.charCodeAt(n)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}s(fr,"murmur2");var ur={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},lr=/[A-Z]|^ms/g,dr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ae=s(function(r){return r.charCodeAt(1)===45},"isCustomProperty"),le=s(function(r){return r!=null&&typeof r!="boolean"},"isProcessableValue"),ee=ye(function(e){return Ae(e)?e:e.replace(lr,"-$&").toLowerCase()}),de=s(function(r,t){switch(r){case"animation":case"animationName":if(typeof t=="string")return t.replace(dr,function(n,a,i){return _={name:a,styles:i,next:_},a})}return ur[r]!==1&&!Ae(r)&&typeof t=="number"&&t!==0?t+"px":t},"processStyleValue");function U(e,r,t){if(t==null)return"";if(t.__emotion_styles!==void 0)return t;switch(typeof t){case"boolean":return"";case"object":{if(t.anim===1)return _={name:t.name,styles:t.styles,next:_},t.name;if(t.styles!==void 0){var n=t.next;if(n!==void 0)for(;n!==void 0;)_={name:n.name,styles:n.styles,next:_},n=n.next;var a=t.styles+";";return a}return hr(e,r,t)}case"function":{if(e!==void 0){var i=_,o=t(e);return _=i,U(e,r,o)}break}}if(r==null)return t;var c=r[t];return c!==void 0?c:t}s(U,"handleInterpolation");function hr(e,r,t){var n="";if(Array.isArray(t))for(var a=0;a<t.length;a++)n+=U(e,r,t[a])+";";else for(var i in t){var o=t[i];if(typeof o!="object")r!=null&&r[o]!==void 0?n+=i+"{"+r[o]+"}":le(o)&&(n+=ee(i)+":"+de(i,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(r==null||r[o[0]]===void 0))for(var c=0;c<o.length;c++)le(o[c])&&(n+=ee(i)+":"+de(i,o[c])+";");else{var g=U(e,r,o);switch(i){case"animation":case"animationName":{n+=ee(i)+":"+g+";";break}default:n+=i+"{"+g+"}"}}}return n}s(hr,"createStringFromObject");var he=/label:\s*([^\s;\n{]+)\s*(;|$)/g,_,pr=s(function(r,t,n){if(r.length===1&&typeof r[0]=="object"&&r[0]!==null&&r[0].styles!==void 0)return r[0];var a=!0,i="";_=void 0;var o=r[0];o==null||o.raw===void 0?(a=!1,i+=U(n,t,o)):i+=o[0];for(var c=1;c<r.length;c++)i+=U(n,t,r[c]),a&&(i+=o[c]);he.lastIndex=0;for(var g="",w;(w=he.exec(i))!==null;)g+="-"+w[1];var d=fr(i)+g;return{name:d,styles:i,next:_}},"serializeStyles"),mr=s(function(r){return r()},"syncFallback"),gr=oe["useInsertionEffect"]?oe["useInsertionEffect"]:!1,yr=gr||mr,Ee=I.exports.createContext(typeof HTMLElement<"u"?ir({key:"css"}):null);Ee.Provider;var br=s(function(r){return I.exports.forwardRef(function(t,n){var a=I.exports.useContext(Ee);return r(t,a,n)})},"withEmotionCache"),vr=I.exports.createContext({}),xr=$e,wr=s(function(r){return r!=="theme"},"testOmitPropsOnComponent"),pe=s(function(r){return typeof r=="string"&&r.charCodeAt(0)>96?xr:wr},"getDefaultShouldForwardProp"),me=s(function(r,t,n){var a;if(t){var i=t.shouldForwardProp;a=r.__emotion_forwardProp&&i?function(o){return r.__emotion_forwardProp(o)&&i(o)}:i}return typeof a!="function"&&n&&(a=r.__emotion_forwardProp),a},"composeShouldForwardProps"),kr=s(function(r){var t=r.cache,n=r.serialized,a=r.isStringTag;return Pe(t,n,a),yr(function(){return cr(t,n,a)}),null},"Insertion"),Sr=s(function e(r,t){var n=r.__emotion_real===r,a=n&&r.__emotion_base||r,i,o;t!==void 0&&(i=t.label,o=t.target);var c=me(r,t,n),g=c||pe(a),w=!g("as");return function(){var d=arguments,p=n&&r.__emotion_styles!==void 0?r.__emotion_styles.slice(0):[];if(i!==void 0&&p.push("label:"+i+";"),d[0]==null||d[0].raw===void 0)p.push.apply(p,d);else{p.push(d[0][0]);for(var R=d.length,A=1;A<R;A++)p.push(d[A],d[0][A])}var m=br(function(f,y,b){var v=w&&f.as||a,S="",N=[],T=f;if(f.theme==null){T={};for(var E in f)T[E]=f[E];T.theme=I.exports.useContext(vr)}typeof f.className=="string"?S=or(y.registered,N,f.className):f.className!=null&&(S=f.className+" ");var h=pr(p.concat(N),y.registered,T);S+=y.key+"-"+h.name,o!==void 0&&(S+=" "+o);var Oe=w&&c===void 0?pe(v):g,q={};for(var G in f)w&&G==="as"||Oe(G)&&(q[G]=f[G]);return q.className=S,q.ref=b,I.exports.createElement(I.exports.Fragment,null,I.exports.createElement(kr,{cache:y,serialized:h,isStringTag:typeof v=="string"}),I.exports.createElement(v,q))});return m.displayName=i!==void 0?i:"Styled("+(typeof a=="string"?a:a.displayName||a.name||"Component")+")",m.defaultProps=r.defaultProps,m.__emotion_real=m,m.__emotion_base=a,m.__emotion_styles=p,m.__emotion_forwardProp=c,Object.defineProperty(m,"toString",{value:s(function(){return"."+o},"value")}),m.withComponent=function(f,y){return e(f,re({},t,y,{shouldForwardProp:me(m,y,!0)})).apply(void 0,p)},m}},"createStyled"),Cr=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],ge=Sr.bind();Cr.forEach(function(e){ge[e]=ge(e)});export{ge as n};
//# sourceMappingURL=emotion-styled.browser.esm.c979914f.js.map