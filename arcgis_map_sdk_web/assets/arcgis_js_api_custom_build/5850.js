"use strict";(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[5850],{20776:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(66341),n=a(70375),i=a(78668),s=a(20182),o=a(12928);const c=[137,80,78,71,13,10,26,10];function h(e){const t=new Uint8Array(e);return!c.some(((e,a)=>e!==t[a]))}function l(e){if(!h(e))return!1;const t=new DataView(e),a=new Uint8Array(e);let r,n=8;do{const e=t.getUint32(n);if(r=String.fromCharCode.apply(String,Array.prototype.slice.call(a.subarray(n+4,n+8))),"acTL"===r)return!0;n+=12+e}while("IEND"!==r&&n<a.length);return!1}var u=a(29573),g=a(60211);const f=[71,73,70];function m(e){if(!function(e){const t=new Uint8Array(e);return!f.some(((e,a)=>e!==t[a]))}(e))return!1;const t=new DataView(e),a=t.getUint8(10);let r=13+(128&a?3*2**(1+(7&a)):0),n=0,i=!1;for(;!i;){switch(t.getUint8(r++)){case 33:if(!s())return!1;break;case 44:o();break;case 59:i=!0;break;default:return!1}if(n>1)return!0}function s(){switch(t.getUint8(r++)){case 249:r++,r+=4,c();break;case 1:n++,r++,r+=12,c();break;case 254:c();break;case 255:r++,r+=8,r+=3,c();break;default:return!1}return!0}function o(){n++,r+=8;const e=t.getUint8(r++);r+=128&e?3*2**(1+(7&e)):0,r++,c()}function c(){let e;for(;e=t.getUint8(r++);)r+=e}return!1}class d{constructor(){this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}destroy(){this._inFlightResourceMap.clear(),this._resourceMap.clear()}getResource(e){return this._resourceMap.get(e)??null}async fetchResource(e,t){const a=this._resourceMap.get(e);if(a)return{width:a.width,height:a.height};let c=this._inFlightResourceMap.get(e);return c?c.then((e=>({width:e.width,height:e.height}))):(c=async function(e,t){const{arrayBuffer:a,mediaType:c}=await async function(e,t){let a;const s=";base64,";if(e.includes(s)){const t=e.indexOf(s),r=e.indexOf(s)+s.length,n=e.substring(r),i=atob(n),o=new Uint8Array(i.length);for(let e=0;e<i.length;e++)o[e]=i.charCodeAt(e);a={arrayBuffer:o.buffer,mediaType:e.substring(0,t).replace("data:","")}}else try{const n=await(0,r.default)(e,{responseType:"array-buffer",...t});a={arrayBuffer:n.data,mediaType:n.getHeader("Content-Type")}}catch(t){if(!(0,i.D_)(t))throw new n.Z("mapview-invalid-resource",`Could not fetch requested resource at ${e}`)}return a}(e,t),h="image/png"===c;return"image/gif"===c&&m(a)?async function(e,t){const a=(0,g.p)(e),r=(0,g.d)(a,!0),{width:n,height:i}=a.lsd,s=document.createElement("canvas");s.width=n,s.height=i;const c=s.getContext("2d",{willReadFrequently:!0}),h=[],l=[];for(const e of r){l.push((0,o.HA)(e.delay||100));const t=new ImageData(e.patch,e.dims.width,e.dims.height),a=(0,u.E0)(t),r=3===e.disposalType?c.getImageData(e.dims.left,e.dims.top,e.dims.width,e.dims.height):void 0;c.drawImage(a,e.dims.left,e.dims.top);const s=c.getImageData(0,0,n,i);h.push(s),1===e.disposalType||(2===e.disposalType?c.clearRect(e.dims.left,e.dims.top,e.dims.width,e.dims.height):3===e.disposalType&&c.putImageData(r,e.dims.left,e.dims.top))}return{frameDurations:l,getFrame:e=>h[e],width:n,height:i}}(a):h&&l(a)?async function(e,t){const a=(0,s.p)(e);if(a instanceof Error)throw a;await a.createImages(),(0,i.k_)(t);const{frames:r,width:n,height:c}=a,h=document.createElement("canvas");h.width=n,h.height=c;const l=h.getContext("2d",{willReadFrequently:!0}),u=[],g=[];for(const e of r){g.push((0,o.HA)(e.delay||100));const t=e.imageElement;0===e.blendOp?l.globalCompositeOperation="copy":l.globalCompositeOperation="source-over";const a=2===e.disposeOp?l.getImageData(e.left,e.top,e.width,e.height):void 0;l.drawImage(t,e.left,e.top);const r=l.getImageData(0,0,n,c);u.push(r),0===e.disposeOp||(1===e.disposeOp?l.clearRect(e.left,e.top,e.width,e.height):2===e.disposeOp&&l.putImageData(a,e.left,e.top))}return{frameDurations:g,getFrame:e=>u[e],width:n,height:c}}(a,t):async function(e,t){const a=window.URL.createObjectURL(e);try{const{data:e}=await(0,r.default)(a,{...t,responseType:"image"});return e}catch(e){if(!(0,i.D_)(e))throw new n.Z("mapview-invalid-resource",`Could not fetch requested resource at ${a}`);throw e}finally{window.URL.revokeObjectURL(a)}}(new Blob([a],{type:c}),t)}(e,t),this._inFlightResourceMap.set(e,c),c.then((t=>(this._inFlightResourceMap.delete(e),this._resourceMap.set(e,t),{width:t.width,height:t.height})),(()=>({width:0,height:0}))))}deleteResource(e){this._inFlightResourceMap.delete(e),this._resourceMap.delete(e)}}},2059:(e,t,a)=>{a.r(t),a.d(t,{CIMSymbolRasterizer:()=>b,GeometryStyle:()=>r});var r,n,i=a(30936),s=a(66341),o=a(61681),c=a(78668),h=a(95550),l=a(24361),u=a(20776),g=a(34245),f=a(95215),m=a(556),d=a(88005),w=a(60789),p=a(97500),y=a(37939);(n=r||(r={})).Legend="legend",n.Preview="preview";const C=e=>e&&e.scaleFactor?e.scaleFactor:1;class b{constructor(e,t){this._spatialReference=e,this._avoidSDF=t,this._resourceCache=new Map,this._imageDataCanvas=null,this._pictureMarkerCache=new Map,this._textRasterizer=new d.Z,this._cimResourceManager=new u.Z,this._rasterizer=new m.Z(this._cimResourceManager)}get resourceManager(){return this._cimResourceManager}async rasterizeCIMSymbolAsync(e,t,a,r,n,i,s,o){if(!e)return null;const{data:c}=e;if(!c||"CIMSymbolReference"!==c.type||!c.symbol)return null;const{symbol:h}=c;i||(i=(0,w.JW)(h));const l=await f.E0.resolveSymbolOverrides(c,t,this._spatialReference,n,i,s,o);this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const u=this._imageDataCanvas,m=this._cimResourceManager,d=[];f.B$.fetchResources(l,m,d),d.length>0&&await Promise.all(d);const{width:p,height:y}=a,C=function(e,t,a,r){const n=1,i=-t/2+n,s=t/2-n,o=a/2-n,c=-a/2+n;switch(e){case"esriGeometryPoint":return{x:0,y:0};case"esriGeometryPolyline":return{paths:[[[i,0],[0,0],[s,0]]]};default:return"legend"===r?{rings:[[[i,o],[s,0],[s,c],[i,c],[i,o]]]}:{rings:[[[i,o],[s,o],[s,c],[i,c],[i,o]]]}}}(i,p,y,r),b=f.B$.getEnvelope(l,C,m);if(!b)return null;const v=1.3333333333333333*(window.devicePixelRatio||1);let _=1,R=0,M=0;switch(h.type){case"CIMPointSymbol":case"CIMTextSymbol":{let e=1;b.width>p&&(e=p/b.width);let t=1;b.height>y&&(t=y/b.height),"preview"===r&&(b.width<p&&(e=p/b.width),b.height<y&&(t=y/b.height)),_=Math.min(e,t),R=b.x+b.width/2,M=b.y+b.height/2}break;case"CIMLineSymbol":{let e=1;b.height>y&&(e=y/b.height),_=e,M=b.y+b.height/2;const t=b.x*_+p/2,a=(b.x+b.width)*_+p/2;if(t<0){const{paths:e}=C;e[0][0][0]-=t}if(a>p){const{paths:e}=C;e[0][2][0]-=a-p}}break;case"CIMPolygonSymbol":{R=b.x+b.width/2,M=b.y+b.height/2;const e=b.x*_+p/2,t=(b.x+b.width)*_+p/2,a=b.y*_+y/2,r=(b.y+b.height)*_+y/2,{rings:n}=C;e<0&&(n[0][0][0]-=e,n[0][3][0]-=e,n[0][4][0]-=e),a<0&&(n[0][0][1]+=a,n[0][1][1]+=a,n[0][4][1]+=a),t>p&&(n[0][1][0]-=t-p,n[0][2][0]-=t-p),r>y&&(n[0][2][1]+=r-y,n[0][3][1]+=r-y)}}u.width=p*v,u.height=y*v;u.width+=2,u.height+=2;const P=u.getContext("2d"),I=g.zA.createIdentity();return I.translate(-R,-M),I.scale(_*v,-_*v),I.translate(p*v/2+1,y*v/2+1),P.clearRect(0,0,u.width,u.height),new g.cD(P,m,I,!0).drawSymbol(l,C),P.getImageData(0,0,u.width,u.height)}async analyzeCIMSymbol(e,t,a,r,n){const i=[],s=t?{geometryType:r,spatialReference:this._spatialReference,fields:t}:null;let o;await(0,l.c)(e.data,s,this._cimResourceManager,i,this._avoidSDF),(0,c.k_)(n);for(const e of i)"CIMPictureMarker"!==e.cim.type&&"CIMPictureFill"!==e.cim.type&&"CIMPictureStroke"!==e.cim.type||(o||(o=[]),o.push(this._fetchPictureMarkerResource(e,n))),a&&"text"===e.type&&"string"==typeof e.text&&e.text.includes("[")&&(e.text=(0,w.Qs)(a,e.text,e.cim.textCase));return o&&await Promise.all(o),i}rasterizeCIMSymbol3D(e,t,a,r,n,i){const s=[];for(const o of e){r&&"function"==typeof r.scaleFactor&&(r.scaleFactor=r.scaleFactor(t,n,i));const e=this._getRasterizedResource(o,t,a,r,n,i);if(!e)continue;let c=0,h=e.anchorX||0,l=e.anchorY||0,u=!1,g=0,f=0;if("esriGeometryPoint"===a){const e=C(r);if(g=(0,w.hf)(o.offsetX,t,n,i)*e||0,f=(0,w.hf)(o.offsetY,t,n,i)*e||0,"marker"===o.type)c=(0,w.hf)(o.rotation,t,n,i)||0,u=!!o.rotateClockwise&&o.rotateClockwise;else if("text"===o.type){if(c=(0,w.hf)(o.angle,t,n,i)||0,void 0!==o.horizontalAlignment)switch(o.horizontalAlignment){case"left":h=-.5;break;case"right":h=.5;break;default:h=0}if(void 0!==o.verticalAlignment)switch(o.verticalAlignment){case"top":l=.5;break;case"bottom":l=-.5;break;case"baseline":l=-.25;break;default:l=0}}}null!=e&&s.push({angle:c,rotateClockWise:u,anchorX:h,anchorY:l,offsetX:g,offsetY:f,rasterizedResource:e})}return this.getSymbolImage(s)}getSymbolImage(e){const t=document.createElement("canvas"),a=(0,o.s3)(t.getContext("2d"));let r=0,n=0,i=0,s=0;const c=[];for(let t=0;t<e.length;t++){const o=e[t],l=o.rasterizedResource;if(!l)continue;const u=l.size,g=o.offsetX,f=o.offsetY,m=o.anchorX,d=o.anchorY,w=o.rotateClockWise||!1;let p=o.angle,y=(0,h.F2)(g)-u[0]*(.5+m),C=(0,h.F2)(f)-u[1]*(.5+d),b=y+u[0],v=C+u[1];if(p){w&&(p=-p);const e=Math.sin(p*Math.PI/180),t=Math.cos(p*Math.PI/180),a=y*t-C*e,r=y*e+C*t,n=y*t-v*e,i=y*e+v*t,s=b*t-v*e,o=b*e+v*t,c=b*t-C*e,h=b*e+C*t;y=Math.min(a,n,s,c),C=Math.min(r,i,o,h),b=Math.max(a,n,s,c),v=Math.max(r,i,o,h)}r=y<r?y:r,n=C<n?C:n,i=b>i?b:i,s=v>s?v:s;const _=a.createImageData(l.size[0],l.size[1]);_.data.set(new Uint8ClampedArray(l.image.buffer));const R={offsetX:g,offsetY:f,rotateClockwise:w,angle:p,rasterizedImage:_,anchorX:m,anchorY:d};c.push(R)}t.width=i-r,t.height=s-n;const l=-r,u=s;for(let e=0;e<c.length;e++){const t=c[e],r=this._imageDataToCanvas(t.rasterizedImage),n=t.rasterizedImage.width,i=t.rasterizedImage.height,s=l-n*(.5+t.anchorX),o=u-i*(.5-t.anchorY);if(t.angle){const e=(360-t.angle)*Math.PI/180;a.save(),a.translate((0,h.F2)(t.offsetX),-(0,h.F2)(t.offsetY)),a.translate(l,u),a.rotate(e),a.translate(-l,-u),a.drawImage(r,s,o),a.restore()}else a.drawImage(r,s+(0,h.F2)(t.offsetX),o-(0,h.F2)(t.offsetY))}const g=new y.e({x:l/t.width-.5,y:u/t.height-.5});return{imageData:0!==t.width&&0!==t.height?a.getImageData(0,0,t.width,t.height):a.createImageData(1,1),anchorPosition:g}}async _fetchPictureMarkerResource(e,t){const a=e.materialHash;if(!this._pictureMarkerCache.get(a)){const r=(await(0,s.default)(e.cim.url,{responseType:"image",signal:t&&t.signal})).data;this._pictureMarkerCache.set(a,r)}}_imageDataToCanvas(e){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const t=this._imageDataCanvas,a=(0,o.s3)(t.getContext("2d"));return t.width=e.width,t.height=e.height,a.putImageData(e,0,0),t}_imageTo32Array(e,t,a,r){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const n=this._imageDataCanvas,s=(0,o.s3)(n.getContext("2d"));if(n.width=t,n.height=a,s.drawImage(e,0,0,t,a),r){s.save();const n=new i.Z(r);s.fillStyle=n.toHex(),s.globalCompositeOperation="multiply",s.fillRect(0,0,t,a),s.globalCompositeOperation="destination-atop",s.drawImage(e,0,0,t,a),s.restore()}return new Uint32Array(s.getImageData(0,0,t,a).data.buffer)}_getRasterizedResource(e,t,a,r,n,i){let s,c,h;if("text"===e.type)return this._rasterizeTextResource(e,t,r,n,i);({analyzedCIM:s,hash:c}=function(e,t,a,r){let n,i;"function"==typeof e.materialHash?(n=(0,e.materialHash)(t,a,r),i=(0,l.S)(e.cim,e.materialOverrides)):(n=e.materialHash,i=e.cim);return{analyzedCIM:i,hash:n}}(e,t,n,i));const u=C(r);if("CIMPictureMarker"===e.cim.type){const a=(0,w.hf)(e.size,t,n,i)*u,{image:r,width:s,height:c}=(0,o.s3)(this._getPictureResource(e,a,(0,w.hf)(e.color,t,n,i)));return h={image:r,size:[s,c],sdf:!1,simplePattern:!1,anchorX:e.anchorPoint?e.anchorPoint.x:0,anchorY:e.anchorPoint?e.anchorPoint.y:0},h}(0,p.FW)(s,u,{preserveOutlineWidth:!1});const g=s;c+=a,r&&(c+=JSON.stringify(r));const f=this._resourceCache;return f.has(c)?f.get(c):(h=this._rasterizer.rasterizeJSONResource({cim:g,type:e.type,url:e.url,mosaicHash:c,size:null,path:null},window.devicePixelRatio||1,this._avoidSDF),f.set(c,h),h)}_rasterizeTextResource(e,t,a,r,n){const i=C(a),s=(0,w.hf)(e.text,t,r,n);if(!s||0===s.length)return null;const o=(0,w.hf)(e.fontName,t,r,n),c=(0,w.hf)(e.style,t,r,n),h=(0,w.hf)(e.weight,t,r,n),l=(0,w.hf)(e.decoration,t,r,n),u=(0,w.hf)(e.size,t,r,n)*i,g=(0,w.hf)(e.horizontalAlignment,t,r,n),f=(0,w.hf)(e.verticalAlignment,t,r,n),m=(0,w.nn)((0,w.hf)(e.color,t,r,n)),d=(0,w.nn)((0,w.hf)(e.outlineColor,t,r,n)),p={color:m,size:u,horizontalAlignment:g,verticalAlignment:f,font:{family:o,style:c,weight:h,decoration:l},halo:{size:(0,w.hf)(e.outlineSize,t,r,n)||0,color:d,style:c},pixelRatio:1,premultiplyColors:!this._avoidSDF};return this._textRasterizer.rasterizeText(s,p)}_getPictureResource(e,t,a){const r=this._pictureMarkerCache.get(e.materialHash);if(!r)return null;const n=r.height/r.width,i=t?n>1?(0,h.F2)(t):(0,h.F2)(t)/n:r.width,s=t?n>1?(0,h.F2)(t)*n:(0,h.F2)(t):r.height;return{image:this._imageTo32Array(r,i,s,a),width:i,height:s}}}},31090:(e,t,a)=>{var r,n;function i(e){switch(e){case"left":return r.Left;case"right":return r.Right;case"center":return r.Center}}function s(e){switch(e){case"top":return n.Top;case"middle":return n.Center;case"baseline":return n.Baseline;case"bottom":return n.Bottom}}function o(e){switch(e){case"above-left":case"esriServerPointLabelPlacementAboveLeft":return[r.Right,n.Bottom];case"above-center":case"above-along":case"esriServerPointLabelPlacementAboveCenter":case"esriServerLinePlacementAboveAlong":return[r.Center,n.Bottom];case"above-right":case"esriServerPointLabelPlacementAboveRight":return[r.Left,n.Bottom];case"center-left":case"esriServerPointLabelPlacementCenterLeft":return[r.Right,n.Center];case"center-center":case"center-along":case"esriServerPointLabelPlacementCenterCenter":case"esriServerLinePlacementCenterAlong":case"always-horizontal":case"esriServerPolygonPlacementAlwaysHorizontal":return[r.Center,n.Center];case"center-right":case"esriServerPointLabelPlacementCenterRight":return[r.Left,n.Center];case"below-left":case"esriServerPointLabelPlacementBelowLeft":return[r.Right,n.Top];case"below-center":case"below-along":case"esriServerPointLabelPlacementBelowCenter":case"esriServerLinePlacementBelowAlong":return[r.Center,n.Top];case"below-right":case"esriServerPointLabelPlacementBelowRight":return[r.Left,n.Top];default:return console.debug(`Found invalid placement type ${e}`),[r.Center,n.Center]}}function c(e){switch(e){case r.Right:return-1;case r.Center:return 0;case r.Left:return 1;default:return console.debug(`Found invalid horizontal alignment ${e}`),0}}function h(e){switch(e){case n.Top:return 1;case n.Center:return 0;case n.Bottom:case n.Baseline:return-1;default:return console.debug(`Found invalid vertical alignment ${e}`),0}}function l(e){switch(e){case"left":return r.Left;case"right":return r.Right;case"center":return r.Center}}function u(e){switch(e){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}a.d(t,{Hd:()=>l,M7:()=>r,NS:()=>u,TR:()=>n,b7:()=>s,g:()=>c,kH:()=>i,qv:()=>o,tf:()=>h}),function(e){e[e.Left=-1]="Left",e[e.Center=0]="Center",e[e.Right=1]="Right"}(r||(r={})),function(e){e[e.Top=1]="Top",e[e.Center=0]="Center",e[e.Bottom=-1]="Bottom",e[e.Baseline=2]="Baseline"}(n||(n={}))},8530:(e,t,a)=>{a.d(t,{Au:()=>n,Jz:()=>s,UJ:()=>i});const r=new Float32Array(1);new Uint32Array(r.buffer);function n(e){return[255&e,(65280&e)>>>8,(16711680&e)>>>16,(4278190080&e)>>>24]}function i(e,t){return 65535&e|t<<16}function s(e,t,a,r){return 255&e|(255&t)<<8|(255&a)<<16|r<<24}}}]);