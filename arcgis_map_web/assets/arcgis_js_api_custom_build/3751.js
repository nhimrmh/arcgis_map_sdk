"use strict";(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[3751],{93751:(e,a,t)=>{t.r(a),t.d(a,{createSymbolSchema:()=>c});var r=t(38716),s=t(89106);function n(e){return"line-marker"===e.type?{type:"line-marker",color:e.color?.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function l(e){return(0,s.hF)(e)}function c(e,a,t=!1){if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return function(e,a,t){const c=(0,s.jj)(r.LW.FILL,a),o=t?l(c):c,i=e.clone(),h=i.outline,m=(0,s.jy)(a.symbologyType);m||(i.outline=null);const u={materialKey:o,hash:i.hash(),...n(i)};if(m)return u;const y=[];if(y.push(u),h){const e=(0,s.jj)(r.LW.LINE,{...a,isOutline:!0}),c={materialKey:t?l(e):e,hash:h.hash(),...n(h)};y.push(c)}return{type:"composite-symbol",layers:y,hash:y.reduce(((e,a)=>a.hash+e),"")}}(e,a,t);case"simple-marker":case"picture-marker":return function(e,a,t){const c=(0,s.jj)(r.LW.MARKER,a),o=t?l(c):c,i=n(e);return{materialKey:o,hash:e.hash(),...i,angle:e.angle,maxVVSize:a.maxVVSize}}(e,a,t);case"simple-line":return function(e,a,t){const c=(0,s.jy)(a.symbologyType)?r.mD.DEFAULT:a.symbologyType,o=(0,s.jj)(r.LW.LINE,{...a,symbologyType:c}),i=t?l(o):o,h=e.clone(),m=h.marker;h.marker=null;const u=[];if(u.push({materialKey:i,hash:h.hash(),...n(h)}),m){const e=(0,s.jj)(r.LW.MARKER,a),c=t?l(e):e;m.color=m.color??h.color,u.push({materialKey:c,hash:m.hash(),lineWidth:h.width,...n(m)})}return{type:"composite-symbol",layers:u,hash:u.reduce(((e,a)=>a.hash+e),"")}}(e,a,t);case"text":return function(e,a,t){const c=(0,s.jj)(r.LW.TEXT,a),o=t?l(c):c,i=n(e);return{materialKey:o,hash:e.hash(),...i,angle:e.angle,maxVVSize:a.maxVVSize}}(e,a,t);case"label":return function(e,a,t){const n=e.toJSON(),c=(0,s.jj)(r.LW.LABEL,{...a,placement:n.labelPlacement});return{materialKey:t?l(c):c,hash:e.hash(),...n,labelPlacement:n.labelPlacement}}(e,a,t);case"cim":return{type:"cim",rendererKey:a.vvFlags,data:e.data,maxVVSize:a.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:a.vvFlags,data:e,maxVVSize:a.maxVVSize};case"web-style":return{...n(e),type:"web-style",hash:e.hash(),rendererKey:a.vvFlags,maxVVSize:a.maxVVSize};default:throw new Error(`symbol not supported ${e.type}`)}}}}]);