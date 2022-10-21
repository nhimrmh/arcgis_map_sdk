/*! For license information please see 3113.js.LICENSE.txt */
"use strict";(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[3113],{73113:(t,i,e)=>{e.r(i),e.d(i,{CalciteIcon:()=>n,defineCustomElement:()=>r});var a=e(83719);const n=a.I,r=a.d},84294:(t,i,e)=>{function a(t){const i=(e="[dir]",function t(i){return i?i.closest(e)||t((a=function(t){return t.getRootNode()}(i),a.host||null)):null;var a}(t));var e;return i?i.getAttribute("dir"):"ltr"}e.d(i,{a:()=>a,b:()=>r,s:()=>s,t:()=>c});const n=":not([slot])";function r(t,i,e){i&&!Array.isArray(i)&&"string"!=typeof i&&(e=i,i=null);const a=i?Array.isArray(i)?i.map((t=>`[slot="${t}"]`)).join(","):`[slot="${i}"]`:n;return(null==e?void 0:e.all)?function(t,i,e){let a=i===n?o(t,n):Array.from(t.querySelectorAll(i));a=e&&!1===e.direct?a:a.filter((i=>i.parentElement===t)),a=(null==e?void 0:e.matches)?a.filter((t=>null==t?void 0:t.matches(e.matches))):a;const r=null==e?void 0:e.selector;return r?a.map((t=>Array.from(t.querySelectorAll(r)))).reduce(((t,i)=>[...t,...i]),[]).filter((t=>!!t)):a}(t,a,e):function(t,i,e){let a=i===n?o(t,n)[0]||null:t.querySelector(i);a=e&&!1===e.direct||(null==a?void 0:a.parentElement)===t?a:null,a=(null==e?void 0:e.matches)?(null==a?void 0:a.matches(e.matches))?a:null:a;const r=null==e?void 0:e.selector;return r?null==a?void 0:a.querySelector(r):a}(t,a,e)}function o(t,i){return t?Array.from(t.children||[]).filter((t=>null==t?void 0:t.matches(i))):[]}function s(t,i,e){return"string"==typeof i&&""!==i?i:""===i?t[e]:void 0}function c(t){return(!!t).toString()}},83719:(t,i,e)=>{e.d(i,{I:()=>l,d:()=>m});var a=e(77210),n=e(84294),r=e(39938);const o={},s={},c={s:16,m:24,l:32};const l=(0,a.GH)(class extends a.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.visible=!1}connectedCallback(){this.waitUntilVisible((()=>{this.visible=!0,this.loadIconPathData()}))}disconnectedCallback(){var t;null===(t=this.intersectionObserver)||void 0===t||t.disconnect(),this.intersectionObserver=null}async componentWillLoad(){this.loadIconPathData()}render(){const{el:t,flipRtl:i,pathData:e,scale:r,textLabel:o}=this,s=(0,n.a)(t),l=c[r],m=!!o,h=[].concat(e||"");return(0,a.h)(a.AA,{"aria-hidden":(0,n.t)(!m),"aria-label":m?o:null,role:m?"img":null},(0,a.h)("svg",{class:{"flip-rtl":"rtl"===s&&i,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${l} ${l}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},h.map((t=>"string"==typeof t?(0,a.h)("path",{d:t}):(0,a.h)("path",{d:t.d,opacity:"opacity"in t?t.opacity:1})))))}async loadIconPathData(){const{icon:t,scale:i,visible:e}=this;a.Z5.isBrowser&&t&&e&&(this.pathData=await async function({icon:t,scale:i}){const e=c[i],n=function(t){const i=!isNaN(Number(t.charAt(0))),e=t.split("-");return 1===e.length?i?`i${t}`:t:e.map(((t,e)=>0===e?i?`i${t.toUpperCase()}`:t:t.charAt(0).toUpperCase()+t.slice(1))).join("")}(t),r="F"===n.charAt(n.length-1),l=`${r?n.substring(0,n.length-1):n}${e}${r?"F":""}`;if(o[l])return o[l];s[l]||(s[l]=fetch((0,a.K3)(`./assets/icon/${l}.json`)).then((t=>t.json())).catch((()=>(console.error(`"${l}" is not a valid calcite-ui-icon name`),""))));const m=await s[l];return o[l]=m,m}({icon:t,scale:i}))}waitUntilVisible(t){this.intersectionObserver=(0,r.c)("intersection",(i=>{i.forEach((i=>{i.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,t())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):t()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){height:1rem;width:1rem;min-width:1rem;min-height:1rem}:host([scale=m]){height:1.5rem;width:1.5rem;min-width:1.5rem;min-height:1.5rem}:host([scale=l]){height:2rem;width:2rem;min-width:2rem;min-height:2rem}.flip-rtl{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.svg{display:block}"}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]}]);function m(){"undefined"!=typeof customElements&&["calcite-icon"].forEach((t=>{"calcite-icon"===t&&(customElements.get(t)||customElements.define(t,l))}))}m()},39938:(t,i,e)=>{e.d(i,{c:()=>n});var a=e(77210);function n(t,i,e){const n=function(t){return"intersection"===t?window.IntersectionObserver:"mutation"===t?window.MutationObserver:window.ResizeObserver}(t);return a.Z5.isBrowser?new n(i,e):void 0}}}]);