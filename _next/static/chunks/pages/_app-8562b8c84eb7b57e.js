(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1316)}])},8045:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(s){l=!0,i=s}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return o}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}t.default=function(e){var t=e.src,n=e.sizes,r=e.unoptimized,l=void 0!==r&&r,s=e.priority,g=void 0!==s&&s,v=e.loading,j=e.lazyRoot,z=void 0===j?null:j,I=e.lazyBoundary,B=void 0===I?"200px":I,O=e.className,R=e.quality,$=e.width,E=e.height,A=e.objectFit,P=e.objectPosition,C=e.onLoadingComplete,W=e.loader,M=void 0===W?k:W,L=e.placeholder,T=void 0===L?"empty":L,D=e.blurDataURL,N=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),_=c.useRef(null),H=c.useContext(p.ImageConfigContext),U=c.useMemo((function(){var e=m||H||u.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return h({},e,{allSizes:t,deviceSizes:n})}),[H]),q=N,F=n?"responsive":"intrinsic";"layout"in q&&(q.layout&&(F=q.layout),delete q.layout);var G="";if(function(e){return"object"===typeof e&&(S(e)||function(e){return void 0!==e.src}(e))}(t)){var V=S(t)?t.default:t;if(!V.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(V)));if(D=D||V.blurDataURL,G=V.src,(!F||"fill"!==F)&&(E=E||V.height,$=$||V.width,!V.height||!V.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(V)))}t="string"===typeof t?t:G;var J=w($),X=w(E),Z=w(R),K=!g&&("lazy"===v||"undefined"===typeof v);(t.startsWith("data:")||t.startsWith("blob:"))&&(l=!0,K=!1);b.has(t)&&(K=!1);0;var Y,Q=o(f.useIntersection({rootRef:z,rootMargin:B,disabled:!K}),2),ee=Q[0],te=Q[1],ne=!K||te,re={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ie={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},oe=!1,ae={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:A,objectPosition:P},le="blur"===T?{filter:"blur(20px)",backgroundSize:A||"cover",backgroundImage:'url("'.concat(D,'")'),backgroundPosition:P||"0% 0%"}:{};if("fill"===F)re.display="block",re.position="absolute",re.top=0,re.left=0,re.bottom=0,re.right=0;else if("undefined"!==typeof J&&"undefined"!==typeof X){var se=X/J,ce=isNaN(se)?"100%":"".concat(100*se,"%");"responsive"===F?(re.display="block",re.position="relative",oe=!0,ie.paddingTop=ce):"intrinsic"===F?(re.display="inline-block",re.position="relative",re.maxWidth="100%",oe=!0,ie.maxWidth="100%",Y="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(J,"%27%20height=%27").concat(X,"%27/%3e")):"fixed"===F&&(re.display="inline-block",re.position="relative",re.width=J,re.height=X)}else 0;var de={src:y,srcSet:void 0,sizes:void 0};ne&&(de=x({config:U,src:t,unoptimized:l,layout:F,width:J,quality:Z,sizes:n,loader:M}));var ue=t;0;var fe;0;var pe=(i(fe={},"imagesrcset",de.srcSet),i(fe,"imagesizes",de.sizes),fe),ge=c.default.useLayoutEffect,he=c.useRef(C);return c.useEffect((function(){he.current=C}),[C]),ge((function(){ee(_.current)}),[ee]),c.useEffect((function(){!function(e,t,n,r,i){var o=function(){var n=e.current;n&&(n.src!==y&&("decode"in n?n.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.current&&(b.add(t),"blur"===r&&(n.style.filter="",n.style.backgroundSize="",n.style.backgroundImage="",n.style.backgroundPosition=""),i.current)){var o=n.naturalWidth,a=n.naturalHeight;i.current({naturalWidth:o,naturalHeight:a})}})))};e.current&&(e.current.complete?o():e.current.onload=o)}(_,ue,0,T,he)}),[ue,F,T,ne]),c.default.createElement("span",{style:re},oe?c.default.createElement("span",{style:ie},Y?c.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:Y}):null):null,c.default.createElement("img",Object.assign({},q,de,{decoding:"async","data-nimg":F,className:O,ref:_,style:h({},ae,le)})),K&&c.default.createElement("noscript",null,c.default.createElement("img",Object.assign({},q,x({config:U,src:t,unoptimized:l,layout:F,width:J,quality:Z,sizes:n,loader:M}),{decoding:"async","data-nimg":F,style:ae,className:O,loading:v||"lazy"}))),g?c.default.createElement(d.default,null,c.default.createElement("link",Object.assign({key:"__nimg-"+de.src+de.srcSet+de.sizes,rel:"preload",as:"image",href:de.srcSet?void 0:de.src},pe))):null)};var s,c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),d=(s=n(5443))&&s.__esModule?s:{default:s},u=n(5809),f=n(7190),p=n(9977);function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){g(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}var m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai"},b=new Set,y=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var v=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t.path).concat(j(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(j(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(j(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function S(e){return void 0!==e.default}function x(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.layout,o=e.width,l=e.quality,s=e.sizes,c=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var d=function(e,t,n,r){var i=e.deviceSizes,o=e.allSizes;if(r&&("fill"===n||"responsive"===n)){for(var l,s=/(^|\s)(1?\d?\d)vw/g,c=[];l=s.exec(r);l)c.push(parseInt(l[2]));if(c.length){var d,u=.01*(d=Math).min.apply(d,a(c));return{widths:o.filter((function(e){return e>=i[0]*u})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return o.find((function(t){return t>=e}))||o[o.length-1]})))),kind:"x"}}(t,o,i,s),u=d.widths,f=d.kind,p=u.length-1;return{sizes:s||"w"!==f?s:"100vw",srcSet:u.map((function(e,r){return"".concat(c({config:t,src:n,quality:l,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:c({config:t,src:n,quality:l,width:u[p]})}}function w(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function k(e){var t,n=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",r=v.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(n))}function j(e){return"/"===e[0]?e.slice(1):e}},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(s){l=!0,i=s}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},l=n(6273),s=n(387),c=n(7190);var d={};function u(e,t,n,r){if(e&&l.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;d[t+"%"+n+(i?"%"+i:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,r=s.useRouter(),o=a.default.useMemo((function(){var t=i(l.resolveHref(r,e.href,!0),2),n=t[0],o=t[1];return{href:n,as:e.as?l.resolveHref(r,e.as):o||n}}),[r,e.href,e.as]),f=o.href,p=o.as,g=e.children,h=e.replace,m=e.shallow,b=e.scroll,y=e.locale;"string"===typeof g&&(g=a.default.createElement("a",null,g));var v=(t=a.default.Children.only(g))&&"object"===typeof t&&t.ref,S=i(c.useIntersection({rootMargin:"200px"}),2),x=S[0],w=S[1],k=a.default.useCallback((function(e){x(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,x]);a.default.useEffect((function(){var e=w&&n&&l.isLocalURL(f),t="undefined"!==typeof y?y:r&&r.locale,i=d[f+"%"+p+(t?"%"+t:"")];e&&!i&&u(r,f,p,{locale:t})}),[p,f,w,y,n,r]);var j={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,a,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n))&&(e.preventDefault(),t[i?"replace":"push"](n,r,{shallow:o,locale:s,scroll:a}))}(e,r,f,p,h,m,b,y)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(f)&&u(r,f,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var z="undefined"!==typeof y?y:r&&r.locale,I=r&&r.isLocaleDomain&&l.getDomainLocale(p,z,r&&r.locales,r&&r.domainLocales);j.href=I||l.addBasePath(l.addLocale(p,z,r&&r.defaultLocale))}return a.default.cloneElement(t,j)};t.default=f},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(s){l=!0,i=s}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!l,d=o.useRef(),u=i(o.useState(!1),2),f=u[0],p=u[1],g=i(o.useState(t?t.current:null),2),h=g[0],m=g[1],b=o.useCallback((function(e){d.current&&(d.current(),d.current=void 0),r||f||e&&e.tagName&&(d.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=s.get(r):(t=s.get(n),c.push(n));if(t)return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(n,t={id:n,observer:o,elements:i}),t}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),s.delete(i);var t=c.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:h,rootMargin:n}))}),[r,h,n,f]);return o.useEffect((function(){if(!l&&!f){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),o.useEffect((function(){t&&m(t.current)}),[t]),[b,f]};var o=n(7294),a=n(9311),l="undefined"!==typeof IntersectionObserver;var s=new Map,c=[]},1316:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return B}});var r=n(5893),i=n(7294),o=n(1664),a=n(5675),l="/DocesDias",s=n(6520).Z,c=n(5109),d=(0,c.z)("footer",{borderBottom:"5px solid $green",marginTop:"20px",a:{display:"flex",transition:"transform 0.5s cubic-bezier(0.4, 1, 0.8, 1)","&:hover, &:active":{transform:"scale3d(1.1, 1.1, 1.1)"}}}),u=(0,c.z)("a",{position:"relative",fontWeight:"800",padding:"20px 0 20px 20px",color:"$brand-text","&:after":{content:"",width:"0",transform:"translateX(-50%)",bottom:"15px",left:"50%",borderBottom:"2px solid $green",position:"absolute",transition:"width 0.5s ease"},"&:hover::after, &:focus::after":{width:"50%"},"@phoneOnly":{fontSize:"1.4rem"}}),f=(0,c.z)("ul",{display:"flex",gap:"15px"}),p="".concat(l,"/images/instagramLogo.svg"),g="".concat(l,"/images/whatsappLogo.svg"),h=function(){return(0,r.jsx)(d,{children:(0,r.jsxs)(s,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,r.jsxs)(f,{children:[(0,r.jsx)("li",{children:(0,r.jsx)(o.default,{href:"https://www.instagram.com/docesdiasdagi/",children:(0,r.jsx)("a",{"aria-label":"Instagram",children:(0,r.jsx)(a.default,{src:p,alt:"",width:30,height:30})})})}),(0,r.jsx)("li",{children:(0,r.jsx)(o.default,{href:"http://wa.me/+5521970594240",children:(0,r.jsx)("a",{"aria-label":"Whatsapp",children:(0,r.jsx)(a.default,{src:g,alt:"",width:30,height:30})})})})]}),(0,r.jsx)(o.default,{href:"https://github.com/JujubaOhime",passHref:!0,children:(0,r.jsxs)(u,{children:[" ","Desenvolvido por Am\xe9lia Guerreiro"," "]})})]})})},m=(0,c.z)("header",{borderTop:"5px solid $green",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"}),b=(0,c.z)("h2",{fontSize:"3rem",fontFamily:"Parisienne",color:"$brand-text",lineHeight:"1","@phoneOnly":{fontSize:"2.4rem"}}),y=(0,c.z)("h2",{fontSize:"3rem",fontFamily:"Parisienne",color:"$brand-text",lineHeight:"1",marginLeft:"20px","@phoneOnly":{fontSize:"2.4rem"}}),v=(0,c.z)("div",{padding:"10px 20px 0",display:"flex",flexDirection:"column",transition:"transform 0.5s cubic-bezier(0.4, 1, 0.8, 1)","&:hover, &:active":{transform:"scale3d(1.1, 1.1, 1.1)"}}),S=(0,c.z)("nav",{display:"flex",gap:"20px",padding:"20px",a:{color:"$brand-text",position:"relative",fontWeight:"800",transition:"transform 0.5s cubic-bezier(0.4, 1, 0.8, 1)","&:hover, &:active":{transform:"scale3d(1.1, 1.1, 1.1)"},"&:after":{content:"",width:"0",transform:"translateX(-50%)",top:"20px",left:"50%",borderBottom:"2px solid $green",position:"absolute",transition:"width 0.5s ease"},"&:hover::after, &:focus::after":{width:"50%"},"@phoneOnly":{fontSize:"1.4rem"}}}),x=function(){return(0,r.jsxs)(m,{children:[(0,r.jsx)(o.default,{href:"#",children:(0,r.jsx)("a",{"aria-label":"P\xe1gina inicial",children:(0,r.jsxs)(v,{children:[(0,r.jsx)(b,{children:"Doces"}),(0,r.jsx)(y,{children:"Dias"})]})})}),(0,r.jsxs)(S,{children:[(0,r.jsx)(o.default,{href:"#",children:(0,r.jsx)("a",{children:"Card\xe1pio"})}),(0,r.jsx)(o.default,{href:"#",children:(0,r.jsx)("a",{children:"Sobre n\xf3s"})})]})]})},w=function(e){var t=e.children,n=(0,i.useState)(0),o=n[0],a=n[1];return(0,i.useEffect)((function(){var e=function(){var e,t,n=document.querySelector("footer"),r=null!==(e=parseInt(window.getComputedStyle(n).marginTop))&&void 0!==e?e:0,i=null!==(t=null===n||void 0===n?void 0:n.getBoundingClientRect().height)&&void 0!==t?t:0;a(i+r)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"content",style:{minHeight:"calc(100vh - ".concat(o,"px")},children:[(0,r.jsx)(x,{}),(0,r.jsx)("main",{children:t})]}),(0,r.jsx)(h,{})]})};function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=(0,n(6744).zY)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){k(e,t,n[t])}))}return e}({},{"body,h1,h2,h3,h4,h5,h6,p,ol,ul,textarea,select,option,table,th,td,blockquote,hr,button,figure":{margin:"0",padding:"0"},"header, footer, article, nav, section":{display:"block"},html:{textSizeAdjust:"none",wordWrap:"break-word",fontSmooth:"antialiased","-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale",fontSize:"62.5%"},"ul,ol":{listStyle:"none"},button:{border:0,cursor:"pointer",background:"transparent"},"body, textarea, input, select, option, button":{fontSize:"1.6rem",lineHeight:"1.2",fontWeight:"500",fontFamily:"Comfortaa"},img:{border:0,fontSize:0},textarea:{resize:"none"},a:{textDecoration:"none"},body:{fontFamily:"Comfortaa",margin:0,padding:0,boxSizing:"border-box"},"input[type='search']::-webkit-search-decoration, input[type='search']::-webkit-search-cancel-button, input[type='search']::-webkit-search-results-button, input[type='search']::-webkit-search-results-decoration":{display:"none"},"@media (prefers-reduced-motion: reduce)":{"*, ::before, ::after":{animationDuration:"0.001s !important",animationIterationCount:"1 !important",transitionDuration:"0.001s !important",transitionDelay:"0s !important"}}},{"@import":"".concat(l,"/fonts/custom.css")}));function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){z(e,t,n[t])}))}return e}var B=function(e){var t=e.Component,n=e.pageProps;return j(),(0,r.jsx)(w,{children:(0,r.jsx)(t,I({},n))})}},6520:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5893),i=(0,n(5109).z)("div",{"@phoneOnly":{marginLeft:"20px",marginRight:"20px"},"@tabletOnly":{marginLeft:"32px",marginRight:"32px"},"@tabletDown":{width:"auto"},"@notebookUp":{marginLeft:"auto",marginRight:"auto"},"@notebookOnly":{width:"1036px"},"@desktopOnly":{width:"960px"}}),o=function(e){var t=e.children,n=e.style,o=e.id;return(0,r.jsx)(i,{id:o,style:n,tabIndex:-1,children:t})}},5109:function(e,t,n){"use strict";n.d(t,{z:function(){return i}});var r=(0,n(6744).Th)({theme:{fonts:{system:"system-ui"},colors:{brand:"#f6d5d7","brand-text":"#f07f83","brand-dark":"#693e5b",green:"#9eaf83","green-text":"#75a480"}},media:{phoneOnly:"(max-width:680px)",tabletOnly:"(min-width:681px) and (max-width:1060px)",notebookOnly:"(min-width:1061px) and (max-width:1200px)",desktopOnly:"(min-width:1201px)",tabletUp:"(min-width:681px)",notebookUp:"(min-width:1061px)",tabletDown:"(max-width:1060px)",notebookDown:"(max-width:1200px)"}}),i=r.styled;r.getCssText},5675:function(e,t,n){e.exports=n(8045)},1664:function(e,t,n){e.exports=n(8418)},6744:function(e,t,n){"use strict";n.d(t,{Th:function(){return Q},zY:function(){return te}});var r,i=n(7294),o="colors",a="sizes",l="space",s={gap:l,gridGap:l,columnGap:l,gridColumnGap:l,rowGap:l,gridRowGap:l,inset:l,insetBlock:l,insetBlockEnd:l,insetBlockStart:l,insetInline:l,insetInlineEnd:l,insetInlineStart:l,margin:l,marginTop:l,marginRight:l,marginBottom:l,marginLeft:l,marginBlock:l,marginBlockEnd:l,marginBlockStart:l,marginInline:l,marginInlineEnd:l,marginInlineStart:l,padding:l,paddingTop:l,paddingRight:l,paddingBottom:l,paddingLeft:l,paddingBlock:l,paddingBlockEnd:l,paddingBlockStart:l,paddingInline:l,paddingInlineEnd:l,paddingInlineStart:l,top:l,right:l,bottom:l,left:l,scrollMargin:l,scrollMarginTop:l,scrollMarginRight:l,scrollMarginBottom:l,scrollMarginLeft:l,scrollMarginX:l,scrollMarginY:l,scrollMarginBlock:l,scrollMarginBlockEnd:l,scrollMarginBlockStart:l,scrollMarginInline:l,scrollMarginInlineEnd:l,scrollMarginInlineStart:l,scrollPadding:l,scrollPaddingTop:l,scrollPaddingRight:l,scrollPaddingBottom:l,scrollPaddingLeft:l,scrollPaddingX:l,scrollPaddingY:l,scrollPaddingBlock:l,scrollPaddingBlockEnd:l,scrollPaddingBlockStart:l,scrollPaddingInline:l,scrollPaddingInlineEnd:l,scrollPaddingInlineStart:l,fontSize:"fontSizes",background:o,backgroundColor:o,backgroundImage:o,borderImage:o,border:o,borderBlock:o,borderBlockEnd:o,borderBlockStart:o,borderBottom:o,borderBottomColor:o,borderColor:o,borderInline:o,borderInlineEnd:o,borderInlineStart:o,borderLeft:o,borderLeftColor:o,borderRight:o,borderRightColor:o,borderTop:o,borderTopColor:o,caretColor:o,color:o,columnRuleColor:o,fill:o,outline:o,outlineColor:o,stroke:o,textDecorationColor:o,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:a,minBlockSize:a,maxBlockSize:a,inlineSize:a,minInlineSize:a,maxInlineSize:a,width:a,minWidth:a,maxWidth:a,height:a,minHeight:a,maxHeight:a,flexBasis:a,gridTemplateColumns:a,gridTemplateRows:a,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},c=(e,t)=>"function"==typeof t?{"()":Function.prototype.toString.call(t)}:t,d=()=>{const e=Object.create(null);return(t,n,...r)=>{const i=(e=>JSON.stringify(e,c))(t);return i in e?e[i]:e[i]=n(t,...r)}},u=Symbol.for("sxs.internal"),f=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),p=e=>{for(const t in e)return!0;return!1},{hasOwnProperty:g}=Object.prototype,h=e=>e.includes("-")?e:e.replace(/[A-Z]/g,(e=>"-"+e.toLowerCase())),m=/\s+(?![^()]*\))/,b=e=>t=>e(..."string"==typeof t?String(t).split(m):[t]),y={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:b(((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e}))),marginInline:b(((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e}))),maxSize:b(((e,t)=>({maxBlockSize:e,maxInlineSize:t||e}))),minSize:b(((e,t)=>({minBlockSize:e,minInlineSize:t||e}))),paddingBlock:b(((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e}))),paddingInline:b(((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e})))},v=/([\d.]+)([^]*)/,S=(e,t)=>e.length?e.reduce(((e,n)=>(e.push(...t.map((e=>e.includes("&")?e.replace(/&/g,/[ +>|~]/.test(n)&&/&.*&/.test(e)?`:is(${n})`:n):n+" "+e))),e)),[]):t,x=(e,t)=>e in w&&"string"==typeof t?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,((t,n,r,i)=>n+("stretch"===r?`-moz-available${i};${h(e)}:${n}-webkit-fill-available`:`-moz-fit-content${i};${h(e)}:${n}fit-content`)+i)):String(t),w={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},k=e=>e?e+"-":"",j=(e,t,n)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,((e,r,i,o,a)=>"$"==o==!!i?e:(r||"--"==o?"calc(":"")+"var(--"+("$"===o?k(t)+(a.includes("$")?"":k(n))+a.replace(/\$/g,"-"):a)+")"+(r||"--"==o?"*"+(r||"")+(i||"1")+")":""))),z=/\s*,\s*(?![^()]*\))/,I=Object.prototype.toString,B=(e,t,n,r,i)=>{let o,a,l;const s=(e,t,n)=>{let c,d;const u=e=>{for(c in e){const g=64===c.charCodeAt(0),m=g&&Array.isArray(e[c])?e[c]:[e[c]];for(d of m){const e=/[A-Z]/.test(p=c)?p:p.replace(/-[^]/g,(e=>e[1].toUpperCase())),m="object"==typeof d&&d&&d.toString===I&&(!r.utils[e]||!t.length);if(e in r.utils&&!m){const t=r.utils[e];if(t!==a){a=t,u(t(d)),a=null;continue}}else if(e in y){const t=y[e];if(t!==l){l=t,u(t(d)),l=null;continue}}if(g&&(f=c.slice(1)in r.media?"@media "+r.media[c.slice(1)]:c,c=f.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,((e,t,n,r,i,o)=>{const a=v.test(t),l=.0625*(a?-1:1),[s,c]=a?[r,t]:[t,r];return"("+("="===n[0]?"":">"===n[0]===a?"max-":"min-")+s+":"+("="!==n[0]&&1===n.length?c.replace(v,((e,t,r)=>Number(t)+l*(">"===n?1:-1)+r)):c)+(i?") and ("+(">"===i[0]?"min-":"max-")+s+":"+(1===i.length?o.replace(v,((e,t,n)=>Number(t)+l*(">"===i?-1:1)+n)):o):"")+")"}))),m){const e=g?n.concat(c):[...n],r=g?[...t]:S(t,c.split(z));void 0!==o&&i(O(...o)),o=void 0,s(d,r,e)}else void 0===o&&(o=[[],t,n]),c=g||36!==c.charCodeAt(0)?c:`--${k(r.prefix)}${c.slice(1).replace(/\$/g,"-")}`,d=m?d:"number"==typeof d?d&&e in R?String(d)+"px":String(d):j(x(e,null==d?"":d),r.prefix,r.themeMap[e]),o[0].push(`${g?`${c} `:`${h(c)}:`}${d}`)}}var f,p};u(e),void 0!==o&&i(O(...o)),o=void 0};s(e,t,n)},O=(e,t,n)=>`${n.map((e=>`${e}{`)).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(n.length?n.length+1:0).join("}")}`,R={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},$=e=>String.fromCharCode(e+(e>25?39:97)),E=e=>(e=>{let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=$(t%52)+n;return $(t%52)+n})(((e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e})(5381,JSON.stringify(e))>>>0),A=["themed","global","styled","onevar","resonevar","allvar","inline"],P=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch(e){return!1}},C=e=>{let t;const n=()=>{const{cssRules:e}=t.sheet;return[].map.call(e,((n,r)=>{const{cssText:i}=n;let o="";if(i.startsWith("--sxs"))return"";if(e[r-1]&&(o=e[r-1].cssText).startsWith("--sxs")){if(!n.cssRules.length)return"";for(const e in t.rules)if(t.rules[e].group===n)return`--sxs{--sxs:${[...t.rules[e].cache].join(" ")}}${i}`;return n.cssRules.length?`${o}${i}`:""}return i})).join("")},r=()=>{if(t){const{rules:e,sheet:n}=t;if(!n.deleteRule){for(;3===Object(Object(n.cssRules)[0]).type;)n.cssRules.splice(0,1);n.cssRules=[]}for(const t in e)delete e[t]}const i=Object(e).styleSheets||[];for(const e of i)if(P(e)){for(let i=0,o=e.cssRules;o[i];++i){const a=Object(o[i]);if(1!==a.type)continue;const l=Object(o[i+1]);if(4!==l.type)continue;++i;const{cssText:s}=a;if(!s.startsWith("--sxs"))continue;const c=s.slice(14,-3).trim().split(/\s+/),d=A[c[0]];d&&(t||(t={sheet:e,reset:r,rules:{},toString:n}),t.rules[d]={group:l,index:i,cache:new Set(c)})}if(t)break}if(!t){const i=(e,t)=>({type:t,cssRules:[],insertRule(e,t){this.cssRules.splice(t,0,i(e,{import:3,undefined:1}[(e.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return"@media{}"===e?`@media{${[].map.call(this.cssRules,(e=>e.cssText)).join("")}}`:e}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:i("","text/css"),rules:{},reset:r,toString:n}}const{sheet:o,rules:a}=t;for(let e=A.length-1;e>=0;--e){const t=A[e];if(!a[t]){const n=A[e+1],r=a[n]?a[n].index:o.cssRules.length;o.insertRule("@media{}",r),o.insertRule(`--sxs{--sxs:${e}}`,r),a[t]={group:o.cssRules[r+1],index:r,cache:new Set([e])}}W(a[t])}};return r(),t},W=e=>{const t=e.group;let n=t.cssRules.length;e.apply=e=>{try{t.insertRule(e,n),++n}catch(e){}}},M=Symbol(),L=d(),T=(e,t)=>L(e,(()=>(...n)=>{let r={type:null,composers:new Set};for(const t of n)if(null!=t)if(t[u]){null==r.type&&(r.type=t[u].type);for(const e of t[u].composers)r.composers.add(e)}else t.constructor!==Object||t.$$typeof?null==r.type&&(r.type=t):r.composers.add(D(t,e));return null==r.type&&(r.type="span"),r.composers.size||r.composers.add(["PJLV",{},[],[],{},[]]),N(e,r,t)})),D=({variants:e,compoundVariants:t,defaultVariants:n,...r},i)=>{const o=`${k(i.prefix)}c-${E(r)}`,a=[],l=[],s=Object.create(null),c=[];for(const f in n)s[f]=String(n[f]);if("object"==typeof e&&e)for(const f in e){d=s,u=f,g.call(d,u)||(s[f]="undefined");const t=e[f];for(const e in t){const n={[f]:String(e)};"undefined"===String(e)&&c.push(f);const r=t[e],i=[n,r,!p(r)];a.push(i)}}var d,u;if("object"==typeof t&&t)for(const f of t){let{css:e,...t}=f;e="object"==typeof e&&e||{};for(const r in t)t[r]=String(t[r]);const n=[t,e,!p(e)];l.push(n)}return[o,r,a,l,s,c]},N=(e,t,n)=>{const[r,i,o,a]=_(t.composers),l="function"==typeof t.type||t.type.$$typeof?(e=>{function t(){for(let n=0;n<t[M].length;n++){const[r,i]=t[M][n];e.rules[r].apply(i)}return t[M]=[],null}return t[M]=[],t.rules={},A.forEach((e=>t.rules[e]={apply:n=>t[M].push([e,n])})),t})(n):null,s=(l||n).rules,c=`.${r}${i.length>1?`:where(.${i.slice(1).join(".")})`:""}`,d=d=>{d="object"==typeof d&&d||U;const{css:u,...f}=d,p={};for(const e in o)if(delete f[e],e in d){let t=d[e];"object"==typeof t&&t?p[e]={"@initial":o[e],...t}:(t=String(t),p[e]="undefined"!==t||a.has(e)?t:o[e])}else p[e]=o[e];const g=new Set([...i]);for(const[r,i,o,a]of t.composers){n.rules.styled.cache.has(r)||(n.rules.styled.cache.add(r),B(i,[`.${r}`],[],e,(e=>{s.styled.apply(e)})));const t=H(o,p,e.media),l=H(a,p,e.media,!0);for(const i of t)if(void 0!==i)for(const[t,o,a]of i){const i=`${r}-${E(o)}-${t}`;g.add(i);const l=(a?n.rules.resonevar:n.rules.onevar).cache,c=a?s.resonevar:s.onevar;l.has(i)||(l.add(i),B(o,[`.${i}`],[],e,(e=>{c.apply(e)})))}for(const i of l)if(void 0!==i)for(const[t,o]of i){const i=`${r}-${E(o)}-${t}`;g.add(i),n.rules.allvar.cache.has(i)||(n.rules.allvar.cache.add(i),B(o,[`.${i}`],[],e,(e=>{s.allvar.apply(e)})))}}if("object"==typeof u&&u){const t=`${r}-i${E(u)}-css`;g.add(t),n.rules.inline.cache.has(t)||(n.rules.inline.cache.add(t),B(u,[`.${t}`],[],e,(e=>{s.inline.apply(e)})))}for(const e of String(d.className||"").trim().split(/\s+/))e&&g.add(e);const h=f.className=[...g].join(" ");return{type:t.type,className:h,selector:c,props:f,toString:()=>h,deferredInjector:l}};return f(d,{className:r,selector:c,[u]:t,toString:()=>(n.rules.styled.cache.has(r)||d(),r)})},_=e=>{let t="";const n=[],r={},i=[];for(const[o,,,,a,l]of e){""===t&&(t=o),n.push(o),i.push(...l);for(const e in a){const t=a[e];(void 0===r[e]||"undefined"!==t||l.includes(t))&&(r[e]=t)}}return[t,n,r,new Set(i)]},H=(e,t,n,r)=>{const i=[];e:for(let[o,a,l]of e){if(l)continue;let e,s=0,c=!1;for(e in o){const r=o[e];let i=t[e];if(i!==r){if("object"!=typeof i||!i)continue e;{let e,t,o=0;for(const a in i){if(r===String(i[a])){if("@initial"!==a){const e=a.slice(1);(t=t||[]).push(e in n?n[e]:a.replace(/^@media ?/,"")),c=!0}s+=o,e=!0}++o}if(t&&t.length&&(a={["@media "+t.join(", ")]:a}),!e)continue e}}}(i[s]=i[s]||[]).push([r?"cv":`${e}-${o[e]}`,a,c])}return i},U={},q=d(),F=(e,t)=>q(e,(()=>(...n)=>{const r=()=>{for(let r of n){r="object"==typeof r&&r||{};let n=E(r);if(!t.rules.global.cache.has(n)){if(t.rules.global.cache.add(n),"@import"in r){let e=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let n of[].concat(r["@import"]))n=n.includes('"')||n.includes("'")?n:`"${n}"`,t.sheet.insertRule(`@import ${n};`,e++);delete r["@import"]}B(r,[],[],e,(e=>{t.rules.global.apply(e)}))}}return""};return f(r,{toString:r})})),G=d(),V=(e,t)=>G(e,(()=>n=>{const r=`${k(e.prefix)}k-${E(n)}`,i=()=>{if(!t.rules.global.cache.has(r)){t.rules.global.cache.add(r);const i=[];B(n,[],[],e,(e=>i.push(e)));const o=`@keyframes ${r}{${i.join("")}}`;t.rules.global.apply(o)}return r};return f(i,{get name(){return i()},toString:i})})),J=class{constructor(e,t,n,r){this.token=null==e?"":String(e),this.value=null==t?"":String(t),this.scale=null==n?"":String(n),this.prefix=null==r?"":String(r)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+k(this.prefix)+k(this.scale)+this.token}toString(){return this.computedValue}},X=d(),Z=(e,t)=>X(e,(()=>(n,r)=>{r="object"==typeof n&&n||Object(r);const i=`.${n=(n="string"==typeof n?n:"")||`${k(e.prefix)}t-${E(r)}`}`,o={},a=[];for(const t in r){o[t]={};for(const n in r[t]){const i=`--${k(e.prefix)}${t}-${n}`,l=j(String(r[t][n]),e.prefix,t);o[t][n]=new J(n,l,t,e.prefix),a.push(`${i}:${l}`)}}const l=()=>{if(a.length&&!t.rules.themed.cache.has(n)){t.rules.themed.cache.add(n);const i=`${r===e.theme?":root,":""}.${n}{${a.join(";")}}`;t.rules.themed.apply(i)}return n};return{...o,get className(){return l()},selector:i,toString:l}})),K=d(),Y=d(),Q=e=>{const t=(e=>{let t=!1;const n=K(e,(e=>{t=!0;const n="prefix"in(e="object"==typeof e&&e||{})?String(e.prefix):"",r="object"==typeof e.media&&e.media||{},i="object"==typeof e.root?e.root||null:globalThis.document||null,o="object"==typeof e.theme&&e.theme||{},a={prefix:n,media:r,theme:o,themeMap:"object"==typeof e.themeMap&&e.themeMap||{...s},utils:"object"==typeof e.utils&&e.utils||{}},l=C(i),c={css:T(a,l),globalCss:F(a,l),keyframes:V(a,l),createTheme:Z(a,l),reset(){l.reset(),c.theme.toString()},theme:{},sheet:l,config:a,prefix:n,getCssText:l.toString,toString:l.toString};return String(c.theme=c.createTheme(o)),c}));return t||n.reset(),n})(e);return t.styled=(({config:e,sheet:t})=>Y(e,(()=>{const n=T(e,t);return(...e)=>{const t=n(...e),r=t[u].type,o=i.forwardRef(((e,n)=>{const o=e&&e.as||r,{props:a,deferredInjector:l}=t(e);return delete a.as,a.ref=n,l?i.createElement(i.Fragment,null,i.createElement(o,a),i.createElement(l,null)):i.createElement(o,a)}));return o.className=t.className,o.displayName=`Styled.${r.displayName||r.name||r}`,o.selector=t.selector,o.toString=()=>t.selector,o[u]=t[u],o}})))(t),t},ee=()=>r||(r=Q()),te=(...e)=>ee().globalCss(...e)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(387)}));var n=e.O();_N_E=n}]);