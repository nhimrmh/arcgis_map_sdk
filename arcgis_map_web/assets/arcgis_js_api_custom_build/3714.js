"use strict";(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[3714],{53714:(e,t,s)=>{s.r(t),s.d(t,{execute:()=>i});var a=s(70375),r=s(61681);let n;function i(e,t){let s=t.responseType;s?"array-buffer"!==s&&"blob"!==s&&"json"!==s&&"native"!==s&&"native-request-init"!==s&&"text"!==s&&(s="text"):s="json",t.responseType=s;const i=(0,r.Wg)(t.signal);return delete t.signal,globalThis.invokeStaticMessage("request",{url:e,options:t},{signal:i}).then((async r=>{let o,l,c,u,b;if(r.data)if(r.data instanceof ArrayBuffer){if(!("json"!==s&&"text"!==s&&"blob"!==s||(o=new Blob([r.data]),"json"!==s&&"text"!==s||(n||(n=new FileReaderSync),u=n.readAsText(o),"json"!==s)))){try{l=JSON.parse(u||null)}catch(s){const r={...s,url:e,requestOptions:t};throw new a.Z("request:server",s.message,r)}if(l.error){const s={...l.error,url:e,requestOptions:t};throw new a.Z("request:server",l.error.message,s)}}}else"native"===s&&(r.data.signal=i,c=await fetch(r.data.url,r.data));switch(s){case"blob":b=o;break;case"json":b=l;break;case"native":b=c;break;case"text":b=u;break;default:b=r.data}return{data:b,requestOptions:t,ssl:r.ssl,url:e}}))}}}]);