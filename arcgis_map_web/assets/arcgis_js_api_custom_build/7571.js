"use strict";(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[7571],{15642:(e,t,r)=>{function n(e,t){const r=e.count;t||(t=new e.TypedArrayConstructor(r));for(let n=0;n<r;n++)t[n]=e.get(n);return t}r.d(t,{m:()=>n}),Object.freeze(Object.defineProperty({__proto__:null,copy:function(e,t,r){const n=e.typedBuffer,s=e.typedBufferStride,o=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*s,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let e=0;e<a;++e)n[u]=o[c],u+=s,c+=i},makeDense:n},Symbol.toStringTag,{value:"Module"}))},385:(e,t,r)=>{r.d(t,{f:()=>i,n:()=>o});var n=r(90331);function s(e,t,r){const n=e.typedBuffer,s=e.typedBufferStride,o=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*s,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let e=0;e<a;++e)n[u]=o[c],n[u+1]=o[c+1],u+=s,c+=i}function o(e,t,r){const o=e.typedBuffer,i=e.typedBufferStride,a=t.typedBuffer,u=t.typedBufferStride,c=r?r.count:t.count;let f=(r&&r.dstIndex?r.dstIndex:0)*i,d=(r&&r.srcIndex?r.srcIndex:0)*u;if((0,n.U)(t.elementType)){const e=(0,n.Op)(t.elementType);if((0,n.B3)(t.elementType))for(let t=0;t<c;++t)o[f]=Math.max(a[d]/e,-1),o[f+1]=Math.max(a[d+1]/e,-1),f+=i,d+=u;else for(let t=0;t<c;++t)o[f]=a[d]/e,o[f+1]=a[d+1]/e,f+=i,d+=u}else s(e,t,r);return e}function i(e,t,r,n){const s=e.typedBuffer,o=e.typedBufferStride,i=n?.count??e.count;let a=(n?.dstIndex??0)*o;for(let e=0;e<i;++e)s[a]=t,s[a+1]=r,a+=o}Object.freeze(Object.defineProperty({__proto__:null,copy:s,normalizeIntegerBuffer:o,fill:i},Symbol.toStringTag,{value:"Module"}))},56999:(e,t,r)=>{r.d(t,{a:()=>a,n:()=>o,s:()=>i,t:()=>s});var n=r(45150);function s(e,t,r){if(e.count!==t.count)return void n.c.error("source and destination buffers need to have the same number of elements");const s=e.count,o=r[0],i=r[1],a=r[2],u=r[3],c=r[4],f=r[5],d=r[6],l=r[7],p=r[8],h=e.typedBuffer,m=e.typedBufferStride,y=t.typedBuffer,g=t.typedBufferStride;for(let e=0;e<s;e++){const t=e*m,r=e*g,n=y[r],s=y[r+1],b=y[r+2],w=y[r+3];h[t]=o*n+u*s+d*b,h[t+1]=i*n+c*s+l*b,h[t+2]=a*n+f*s+p*b,h[t+3]=w}}function o(e,t){const r=Math.min(e.count,t.count),n=e.typedBuffer,s=e.typedBufferStride,o=t.typedBuffer,i=t.typedBufferStride;for(let e=0;e<r;e++){const t=e*s,r=e*i,a=o[r],u=o[r+1],c=o[r+2],f=a*a+u*u+c*c;if(f>0){const e=1/Math.sqrt(f);n[t]=e*a,n[t+1]=e*u,n[t+2]=e*c}}}function i(e,t,r){const n=Math.min(e.count,t.count),s=e.typedBuffer,o=e.typedBufferStride,i=t.typedBuffer,a=t.typedBufferStride;for(let e=0;e<n;e++){const t=e*o,n=e*a;s[t]=r*i[n],s[t+1]=r*i[n+1],s[t+2]=r*i[n+2],s[t+3]=r*i[n+3]}}function a(e,t,r){const n=Math.min(e.count,t.count),s=e.typedBuffer,o=e.typedBufferStride,i=t.typedBuffer,a=t.typedBufferStride;for(let e=0;e<n;e++){const t=e*o,n=e*a;s[t]=i[n]>>r,s[t+1]=i[n+1]>>r,s[t+2]=i[n+2]>>r,s[t+3]=i[n+3]>>r}}Object.freeze(Object.defineProperty({__proto__:null,transformMat4:function(e,t,r){if(e.count!==t.count)return void n.c.error("source and destination buffers need to have the same number of elements");const s=e.count,o=r[0],i=r[1],a=r[2],u=r[3],c=r[4],f=r[5],d=r[6],l=r[7],p=r[8],h=r[9],m=r[10],y=r[11],g=r[12],b=r[13],w=r[14],T=r[15],_=e.typedBuffer,x=e.typedBufferStride,S=t.typedBuffer,I=t.typedBufferStride;for(let e=0;e<s;e++){const t=e*x,r=e*I,n=S[r],s=S[r+1],A=S[r+2],O=S[r+3];_[t]=o*n+c*s+p*A+g*O,_[t+1]=i*n+f*s+h*A+b*O,_[t+2]=a*n+d*s+m*A+w*O,_[t+3]=u*n+l*s+y*A+T*O}},transformMat3:s,normalize:o,scale:i,shiftRight:a},Symbol.toStringTag,{value:"Module"}))},32101:(e,t,r)=>{function n(e,t,r){const n=e.typedBuffer,s=e.typedBufferStride,o=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*s,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let e=0;e<a;++e)n[u]=o[c],n[u+1]=o[c+1],n[u+2]=o[c+2],n[u+3]=o[c+3],u+=s,c+=i}function s(e,t,r,n,s,o){const i=e.typedBuffer,a=e.typedBufferStride,u=o?.count??e.count;let c=(o?.dstIndex??0)*a;for(let e=0;e<u;++e)i[c]=t,i[c+1]=r,i[c+2]=n,i[c+3]=s,c+=a}r.d(t,{c:()=>n,f:()=>s}),Object.freeze(Object.defineProperty({__proto__:null,copy:n,fill:s},Symbol.toStringTag,{value:"Module"}))},19480:(e,t,r)=>{r.d(t,{x:()=>s});var n=r(66581);class s{constructor(e){this.allocator=e,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,n.Y)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*o);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}_grow(){for(let e=0;e<Math.max(8,Math.min(this._items.length,o));e++)this._items.push(this.allocator())}}const o=1024},26139:(e,t,r)=>{r.d(t,{G:()=>s});var n=r(70375);class s{constructor(e,t,r=""){this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}since(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",r=this._context&&this._context+" ";throw new n.Z(t+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new s(this.major,this.minor,this._context)}static parse(e,t=""){const[r,o]=e.split("."),i=/^\s*\d+\s*$/;if(!r||!r.match||!r.match(i))throw new n.Z((t&&t+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:e});if(!o||!o.match||!o.match(i))throw new n.Z((t&&t+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:e});const a=parseInt(r,10),u=parseInt(o,10);return new s(a,u,t)}}},90331:(e,t,r)=>{function n(e){switch(e){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8;default:return}}function s(e){switch(e){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0;default:return}}function o(e){switch(e){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1;default:return}}function i(e){switch(e){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303;default:return}}r.d(t,{B3:()=>s,Op:()=>i,U:()=>o,n1:()=>n}),r(39994)},79:(e,t,r)=>{r.d(t,{gS:()=>s});var n=r(90331);function s(e,t){return new e(new ArrayBuffer(t*e.ElementCount*(0,n.n1)(e.ElementType)))}Object.freeze(Object.defineProperty({__proto__:null,copy:function(e,t,r){const n=e.typedBuffer,s=e.typedBufferStride,o=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*s,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let e=0;e<a;++e){for(let e=0;e<9;++e)n[u+e]=o[c+e];u+=s,c+=i}}},Symbol.toStringTag,{value:"Module"})),Object.freeze(Object.defineProperty({__proto__:null,copy:function(e,t,r){const n=e.typedBuffer,s=e.typedBufferStride,o=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*s,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let e=0;e<a;++e){for(let e=0;e<16;++e)n[u+e]=o[c+e];u+=s,c+=i}}},Symbol.toStringTag,{value:"Module"})),r(15642),r(385),r(14789),r(32101)},56215:(e,t,r)=>{r.d(t,{Ue:()=>u,nF:()=>f,zk:()=>c});var n=r(19431),s=r(19480),o=r(6766),i=r(8909),a=r(68817);function u(e){return e?{origin:(0,i.a)(e.origin),vector:(0,i.a)(e.vector)}:{origin:(0,i.c)(),vector:(0,i.c)()}}function c(e,t,r=u()){return(0,o.c)(r.origin,e),(0,o.b)(r.vector,t,e),r}function f(e,t,r){return function(e,t,r,s,i){const{vector:u,origin:c}=e,f=(0,o.b)(a.WM.get(),t,c),d=(0,o.e)(u,f)/(0,o.p)(u);return(0,o.g)(i,u,(0,n.uZ)(d,0,1)),(0,o.a)(i,i,e.origin)}(e,t,0,0,r)}(0,i.c)(),(0,i.c)(),new s.x((()=>({origin:null,vector:null})))},68817:(e,t,r)=>{r.d(t,{MP:()=>h,WM:()=>p});var n=r(4745),s=r(66581),o=r(34344),i=r(39100),a=r(61044),u=r(69666),c=r(8909),f=r(1983);class d{constructor(e,t,r){this.itemByteSize=e,this.itemCreate=t,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(r/this.itemByteSize)}get(){0===this._itemsPtr&&(0,s.Y)((()=>this._reset()));const e=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=e;){const e=new ArrayBuffer(this._itemsPerBuffer*this.itemByteSize);for(let t=0;t<this._itemsPerBuffer;++t)this._items.push(this.itemCreate(e,t*this.itemByteSize));this._buffers.push(e)}return this._items[this._itemsPtr++]}_reset(){const e=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>e;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(e=l){return new d(16,u.c,e)}static createVec3f64(e=l){return new d(24,c.b,e)}static createVec4f64(e=l){return new d(32,f.a,e)}static createMat3f64(e=l){return new d(72,o.a,e)}static createMat4f64(e=l){return new d(128,i.a,e)}static createQuatf64(e=l){return new d(32,a.c,e)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this.itemByteSize}}}const l=4*n.Y8.KILOBYTES,p=(d.createVec2f64(),d.createVec3f64()),h=(d.createVec4f64(),d.createMat3f64(),d.createMat4f64());d.createQuatf64()},91420:(e,t,r)=>{r.d(t,{C:()=>c});var n=r(66341),s=r(67979),o=r(70375),i=r(61681),a=r(78668),u=r(3466);class c{constructor(e){this.streamDataRequester=e}async loadJSON(e,t){return this._load("json",e,t)}async loadBinary(e,t){return(0,u.HK)(e)?((0,a.k_)(t),(0,u.AH)(e)):this._load("binary",e,t)}async loadImage(e,t){return this._load("image",e,t)}async _load(e,t,r){if((0,i.Wi)(this.streamDataRequester))return(await(0,n.default)(t,{responseType:f[e]})).data;const u=await(0,s.q6)(this.streamDataRequester.request(t,e,r));if(!0===u.ok)return u.value;throw(0,a.r9)(u.error),new o.Z("",`Request for resource failed: ${u.error}`)}}const f={image:"image",binary:"array-buffer",json:"json"}},1731:(e,t,r)=>{r.d(t,{DA:()=>i,jX:()=>a,nh:()=>o});var n=r(86098),s=r(51701);function o(e,t=s.p){return"number"==typeof e?t(e):(0,n.Uc)(e)||(0,n.lq)(e)?new Uint32Array(e):e}function i(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(n[e++]=t,n[e++]=t+1,n[e++]=t+2):(n[e++]=t+1,n[e++]=t,n[e++]=t+2)}else{let t=0;for(let s=0;s<r;s+=1)if(s%2==0){const r=e[s],o=e[s+1],i=e[s+2];n[t++]=r,n[t++]=o,n[t++]=i}else{const r=e[s+1],o=e[s],i=e[s+2];n[t++]=r,n[t++]=o,n[t++]=i}}return n}function a(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)n[e++]=0,n[e++]=t+1,n[e++]=t+2;return n}{const t=e[0];let s=e[1],o=0;for(let i=0;i<r;++i){const r=e[i+2];n[o++]=t,n[o++]=s,n[o++]=r,s=r}return n}}},40462:(e,t,r)=>{r.d(t,{z:()=>P});var n=r(61681),s=r(39100),o=r(70375);const i=r(13802).Z.getLogger("esri.views.3d.glTF");var a,u,c=r(91907),f=r(27755),d=r(86114),l=r(3466),p=r(26139),h=r(24455),m=r(10663),y=r(61044),g=r(81936),b=r(15642);class w{constructor(e){this.data=e,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const e=this.offset4;return this.offset4+=1,this.dataUint32[e]}readUint8Array(e){const t=4*this.offset4;return this.offset4+=e/4,new Uint8Array(this.data,t,e)}remainingBytes(){return this.data.byteLength-4*this.offset4}}!function(e){e.SCALAR="SCALAR",e.VEC2="VEC2",e.VEC3="VEC3",e.VEC4="VEC4",e.MAT2="MAT2",e.MAT3="MAT3",e.MAT4="MAT4"}(a||(a={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(u||(u={}));const T={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},_={pbrMetallicRoughness:T,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},x={ESRI_externalColorMixMode:"tint"},S=(e={})=>{const t={...T,...e.pbrMetallicRoughness},r=function(e){switch(e.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:(0,f.Bg)(e.ESRI_externalColorMixMode),e.ESRI_externalColorMixMode="tint"}return e}({...x,...e.extras});return{..._,...e,pbrMetallicRoughness:t,extras:r}},I={magFilter:c.cw.LINEAR,minFilter:c.cw.LINEAR_MIPMAP_LINEAR,wrapS:c.e8.REPEAT,wrapT:c.e8.REPEAT},A=e=>({...I,...e}),O=1179937895;class E{constructor(e,t,r,n,s){this.context=e,this.errorContext=t,this.uri=r,this.json=n,this.glbBuffer=s,this.bufferLoaders=new Map,this.textureLoaders=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=function(e){let t,r;return e.replace(/^(.*\/)?([^/]*)$/,((e,n,s)=>(t=n||"",r=s||"",""))),{dirPart:t,filePart:r}}(this.uri).dirPart,this._checkVersionSupported(),this._checkRequiredExtensionsSupported(),t.errorUnsupportedIf(null==n.scenes,"Scenes must be defined."),t.errorUnsupportedIf(null==n.meshes,"Meshes must be defined"),t.errorUnsupportedIf(null==n.nodes,"Nodes must be defined."),this._computeNodeParents()}static async load(e,t,r,n){if((0,l.HK)(r)){const n=(0,l.sJ)(r);if("model/gltf-binary"!==n.mediaType)try{const s=JSON.parse(n.isBase64?atob(n.data):n.data);return new E(e,t,r,s)}catch{}const s=(0,l.AH)(r);if(E._isGLBData(s))return this._fromGLBData(e,t,r,s)}if(r.endsWith(".gltf")){const s=await e.loadJSON(r,n);return new E(e,t,r,s)}const s=await e.loadBinary(r,n);if(E._isGLBData(s))return this._fromGLBData(e,t,r,s);const o=await e.loadJSON(r,n);return new E(e,t,r,o)}static _isGLBData(e){const t=new w(e);return t.remainingBytes()>=4&&t.readUint32()===O}static async _fromGLBData(e,t,r,n){const s=await E._parseGLBData(t,n);return new E(e,t,r,s.json,s.binaryData)}static async _parseGLBData(e,t){const r=new w(t);e.assert(r.remainingBytes()>=12,"GLB binary data is insufficiently large.");const n=r.readUint32(),s=r.readUint32(),o=r.readUint32();e.assert(n===O,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=o,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(2!==s,"An unsupported GLB container version was detected. Only version 2 is supported.");let i,a,u=0;for(;r.remainingBytes()>=8;){const t=r.readUint32(),n=r.readUint32();0===u?(e.assert(1313821514===n,"First GLB chunk must be JSON."),e.assert(t>=0,"No JSON data found."),i=await C(r.readUint8Array(t))):1===u?(e.errorUnsupportedIf(5130562!==n,"Second GLB chunk expected to be BIN."),a=r.readUint8Array(t)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),u+=1}return i||e.error("No GLB JSON chunk detected."),{json:i,binaryData:a}}async getBuffer(e,t){const r=this.json.buffers[e],n=this.errorContext;if(null==r.uri)return n.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;const s=await this._getBufferLoader(e,t);return n.assert(s.byteLength===r.byteLength,"Buffer byte lengths should match."),s}async _getBufferLoader(e,t){const r=this.bufferLoaders.get(e);if(r)return r;const n=this.json.buffers[e],s=this.context.loadBinary(this._resolveUri(n.uri),t).then((e=>new Uint8Array(e)));return this.bufferLoaders.set(e,s),s}async getAccessor(e,t){const r=this.errorContext;r.errorUnsupportedIf(!this.json.accessors,"Accessors missing.");const n=this.json.accessors[e];r.errorUnsupportedIf(null==n?.bufferView,"Some accessor does not specify a bufferView."),r.errorUnsupportedIf(n.type in[a.MAT2,a.MAT3,a.MAT4],`AttributeType ${n.type} is not supported`);const s=this.json.bufferViews[n.bufferView],o=await this.getBuffer(s.buffer,t),i=v[n.type],u=M[n.componentType],c=i*u,f=s.byteStride||c;return{raw:o.buffer,byteStride:f,byteOffset:o.byteOffset+(s.byteOffset||0)+(n.byteOffset||0),entryCount:n.count,isDenselyPacked:f===c,componentCount:i,componentByteSize:u,componentType:n.componentType,min:n.min,max:n.max,normalized:!!n.normalized}}async getIndexData(e,t){if(null==e.indices)return null;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case c.g.UNSIGNED_BYTE:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case c.g.UNSIGNED_SHORT:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case c.g.UNSIGNED_INT:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case c.g.UNSIGNED_BYTE:return(0,b.m)(this._wrapAccessor(g.D_,r));case c.g.UNSIGNED_SHORT:return(0,b.m)(this._wrapAccessor(g.av,r));case c.g.UNSIGNED_INT:return(0,b.m)(this._wrapAccessor(g.Nu,r))}}async getPositionData(e,t){const r=this.errorContext;r.errorUnsupportedIf(null==e.attributes.POSITION,"No POSITION vertex data found.");const n=await this.getAccessor(e.attributes.POSITION,t);return r.errorUnsupportedIf(n.componentType!==c.g.FLOAT,"Expected type FLOAT for POSITION vertex attribute, but found "+R[n.componentType]),r.errorUnsupportedIf(3!==n.componentCount,"POSITION vertex attribute must have 3 components, but found "+n.componentCount.toFixed()),this._wrapAccessor(g.ct,n)}async getNormalData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.NORMAL,"No NORMAL vertex data found.");const n=await this.getAccessor(e.attributes.NORMAL,t);return r.errorUnsupportedIf(n.componentType!==c.g.FLOAT,"Expected type FLOAT for NORMAL vertex attribute, but found "+R[n.componentType]),r.errorUnsupportedIf(3!==n.componentCount,"NORMAL vertex attribute must have 3 components, but found "+n.componentCount.toFixed()),this._wrapAccessor(g.ct,n)}async getTangentData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TANGENT,"No TANGENT vertex data found.");const n=await this.getAccessor(e.attributes.TANGENT,t);return r.errorUnsupportedIf(n.componentType!==c.g.FLOAT,"Expected type FLOAT for TANGENT vertex attribute, but found "+R[n.componentType]),r.errorUnsupportedIf(4!==n.componentCount,"TANGENT vertex attribute must have 4 components, but found "+n.componentCount.toFixed()),new g.ek(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount)}async getTextureCoordinates(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const n=await this.getAccessor(e.attributes.TEXCOORD_0,t);return r.errorUnsupportedIf(2!==n.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+n.componentCount.toFixed()),n.componentType===c.g.FLOAT?this._wrapAccessor(g.Eu,n):(r.errorUnsupportedIf(!n.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),function(e){switch(e.componentType){case c.g.BYTE:return new g.Vs(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case c.g.UNSIGNED_BYTE:return new g.xA(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case c.g.SHORT:return new g.or(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case c.g.UNSIGNED_SHORT:return new g.TS(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case c.g.UNSIGNED_INT:return new g.qt(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case c.g.FLOAT:return new g.Eu(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);default:return void(0,f.Bg)(e.componentType)}}(n))}async getVertexColors(e,t){const r=this.errorContext;r.assert(null!=e.attributes.COLOR_0,"No COLOR_0 vertex data found.");const n=await this.getAccessor(e.attributes.COLOR_0,t);if(r.errorUnsupportedIf(4!==n.componentCount&&3!==n.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+n.componentCount.toFixed()),4===n.componentCount){if(n.componentType===c.g.FLOAT)return this._wrapAccessor(g.ek,n);if(n.componentType===c.g.UNSIGNED_BYTE)return this._wrapAccessor(g.mc,n);if(n.componentType===c.g.UNSIGNED_SHORT)return this._wrapAccessor(g.v6,n)}else if(3===n.componentCount){if(n.componentType===c.g.FLOAT)return this._wrapAccessor(g.ct,n);if(n.componentType===c.g.UNSIGNED_BYTE)return this._wrapAccessor(g.ne,n);if(n.componentType===c.g.UNSIGNED_SHORT)return this._wrapAccessor(g.mw,n)}r.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+R[n.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t,r){let n=this.materialCache.get(e.material);if(!n){const s=null!=e.material?S(this.json.materials[e.material]):S(),o=s.pbrMetallicRoughness,i=this.hasVertexColors(e),a=this.getTexture(o.baseColorTexture,t),u=this.getTexture(s.normalTexture,t),c=r?this.getTexture(s.occlusionTexture,t):null,f=r?this.getTexture(s.emissiveTexture,t):null,d=r?this.getTexture(o.metallicRoughnessTexture,t):null,l=null!=e.material?e.material:-1;n={alphaMode:s.alphaMode,alphaCutoff:s.alphaCutoff,color:o.baseColorFactor,doubleSided:!!s.doubleSided,colorTexture:await a,normalTexture:await u,name:s.name,id:l,occlusionTexture:await c,emissiveTexture:await f,emissiveFactor:s.emissiveFactor,metallicFactor:o.metallicFactor,roughnessFactor:o.roughnessFactor,metallicRoughnessTexture:await d,hasVertexColors:i,ESRI_externalColorMixMode:s.extras.ESRI_externalColorMixMode}}return n}async getTexture(e,t){if(!e)return null;this.errorContext.errorUnsupportedIf(0!==(e.texCoord||0),"Only TEXCOORD with index 0 is supported.");const r=e.index,n=this.errorContext,s=this.json.textures[r],o=A(null!=s.sampler?this.json.samplers[s.sampler]:{});n.errorUnsupportedIf(null==s.source,"Source is expected to be defined for a texture.");const i=this.json.images[s.source],a=await this._loadTextureImageData(r,s,t);return(0,d.s1)(this.textureCache,r,(()=>{const e=e=>33071===e||33648===e||10497===e,t=e=>(n.error(`Unexpected TextureSampler WrapMode: ${e}. Using default REPEAT(10497).`),10497);return{data:a,wrapS:e(o.wrapS)?o.wrapS:t(o.wrapS),wrapT:e(o.wrapT)?o.wrapT:t(o.wrapT),minFilter:o.minFilter,name:i.name,id:r}}))}getNodeTransform(e){if(void 0===e)return B;let t=this.nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this._getNodeParent(e)),n=this.json.nodes[e];n.matrix?t=(0,h.m)((0,s.c)(),r,n.matrix):n.translation||n.rotation||n.scale?(t=(0,s.b)(r),n.translation&&(0,h.j)(t,t,n.translation),n.rotation&&(U[3]=(0,m.g)(U,n.rotation),(0,h.e)(t,t,U[3],U)),n.scale&&(0,h.h)(t,t,n.scale)):t=r,this.nodeTransformCache.set(e,t)}return t}_wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}_resolveUri(e){return(0,l.hF)(e,this.baseUri)}_getNodeParent(e){return this.nodeParentMap.get(e)}_checkVersionSupported(){const e=p.G.parse(this.json.asset.version,"glTF");N.validate(e)}_checkRequiredExtensionsSupported(){const e=this.json,t=this.errorContext;e.extensionsRequired&&0!==e.extensionsRequired.length&&t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}_computeNodeParents(){this.json.nodes.forEach(((e,t)=>{e.children&&e.children.forEach((e=>{this.nodeParentMap.set(e,t)}))}))}async _loadTextureImageData(e,t,r){const n=this.textureLoaders.get(e);if(n)return n;const s=this._createTextureLoader(t,r);return this.textureLoaders.set(e,s),s}async _createTextureLoader(e,t){const r=this.json.images[e.source];if(r.uri)return this.context.loadImage(this._resolveUri(r.uri),t);const n=this.errorContext;n.errorUnsupportedIf(null==r.bufferView,"Image bufferView must be defined."),n.errorUnsupportedIf(null==r.mimeType,"Image mimeType must be defined.");const s=this.json.bufferViews[r.bufferView],o=await this.getBuffer(s.buffer,t);return n.errorUnsupportedIf(null!=s.byteStride,"byteStride not supported for image buffer"),async function(e,t){return new Promise(((r,n)=>{const s=new Blob([e],{type:t}),o=URL.createObjectURL(s),i=new Image;i.addEventListener("load",(()=>{URL.revokeObjectURL(o),"decode"in i?i.decode().then((()=>r(i)),(()=>r(i))):r(i)})),i.addEventListener("error",(e=>{URL.revokeObjectURL(o),n(e)})),i.src=o}))}(new Uint8Array(o.buffer,o.byteOffset+(s.byteOffset||0),s.byteLength),r.mimeType)}}const N=new p.G(2,0,"glTF"),B=(0,h.z)((0,s.c)(),Math.PI/2),U=(0,y.a)(),v={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},M={[c.g.BYTE]:1,[c.g.UNSIGNED_BYTE]:1,[c.g.SHORT]:2,[c.g.UNSIGNED_SHORT]:2,[c.g.FLOAT]:4,[c.g.UNSIGNED_INT]:4};async function C(e){return new Promise(((t,r)=>{const n=new Blob([e]),s=new FileReader;s.onload=()=>{const e=s.result;t(JSON.parse(e))},s.onerror=e=>{r(e)},s.readAsText(n)}))}const R={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};let L=0;async function P(e,t,r={},o=!0){const i=await E.load(e,V,t,r),a="gltf_"+L++,u={lods:[],materials:new Map,textures:new Map,meta:F(i)},f=!(!i.json.asset.extras||"symbolResource"!==i.json.asset.extras.ESRI_type),d=new Map;await D(i,(async(e,t,f,l)=>{const p=d.get(f)??0;d.set(f,p+1);const h=void 0!==e.mode?e.mode:c.MX.TRIANGLES,m=h===c.MX.TRIANGLES||h===c.MX.TRIANGLE_STRIP||h===c.MX.TRIANGLE_FAN?h:null;if((0,n.Wi)(m))return void V.warnUnsupported("Unsupported primitive mode ("+z[h]+"). Skipping primitive.");if(!i.hasPositions(e))return void V.warn("Skipping primitive without POSITION vertex attribute.");const y=i.getPositionData(e,r),g=i.getMaterial(e,r,o),b=i.hasNormals(e)?i.getNormalData(e,r):null,w=i.hasTangents(e)?i.getTangentData(e,r):null,T=i.hasTextureCoordinates(e)?i.getTextureCoordinates(e,r):null,_=i.hasVertexColors(e)?i.getVertexColors(e,r):null,x=i.getIndexData(e,r),S={transform:(0,s.b)(t),attributes:{position:await y,normal:b?await b:null,texCoord0:T?await T:null,color:_?await _:null,tangent:w?await w:null},indices:await x,primitiveType:m,material:G(u,await g,a)};let I=null;(0,n.pC)(u.meta)&&(0,n.pC)(u.meta.ESRI_lod)&&"screenSpaceRadius"===u.meta.ESRI_lod.metric&&(I=u.meta.ESRI_lod.thresholds[f]),u.lods[f]=u.lods[f]||{parts:[],name:l,lodThreshold:I},u.lods[f].parts[p]=S}));for(const e of u.lods)e.parts=e.parts.filter((e=>!!e));return{model:u,meta:{isEsriSymbolResource:f,uri:i.uri},customMeta:{}}}function F(e){const t=e.json;let r=null;return t.nodes.forEach((e=>{const t=e.extras;(0,n.pC)(t)&&(t.ESRI_proxyEllipsoid||t.ESRI_lod)&&(r=t)})),r}async function D(e,t){const r=e.json,n=r.scenes[r.scene||0].nodes,s=n.length>1,o=[];for(const e of n){const t=r.nodes[e];o.push(i(e,0)),j(t)&&!s&&t.extensions.MSFT_lod.ids.forEach(((e,t)=>i(e,t+1)))}async function i(n,s){const a=r.nodes[n],u=e.getNodeTransform(n);if(V.warnUnsupportedIf(null!=a.weights,"Morph targets are not supported."),null!=a.mesh){const e=r.meshes[a.mesh];for(const r of e.primitives)o.push(t(r,u,s,e.name))}for(const e of a.children||[])o.push(i(e,s))}await Promise.all(o)}function j(e){return e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function G(e,t,r){const n=t=>{const n=`${r}_tex_${t&&t.id}${t&&t.name?"_"+t.name:""}`;if(t&&!e.textures.has(n)){const r=function(e,t={}){return{data:e,parameters:{wrap:{s:c.e8.REPEAT,t:c.e8.REPEAT,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}(t.data,{wrap:{s:t.wrapS,t:t.wrapT},mipmap:k.includes(t.minFilter),noUnpackFlip:!0});e.textures.set(n,r)}return n},s=`${r}_mat_${t.id}_${t.name}`;if(!e.materials.has(s)){const r=function(e={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?n(t.colorTexture):void 0,textureNormal:t.normalTexture?n(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?n(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?n(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?n(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});e.materials.set(s,r)}return s}const V=new class{error(e){throw new o.Z("gltf-loader-error",e)}errorUnsupported(e){throw new o.Z("gltf-loader-unsupported-feature",e)}errorUnsupportedIf(e,t){e&&this.errorUnsupported(t)}assert(e,t){e||this.error(t)}warn(e){i.warn(e)}warnUnsupported(e){this.warn("[Unsupported Feature] "+e)}warnUnsupportedIf(e,t){e&&this.warnUnsupported(t)}},k=[c.cw.LINEAR_MIPMAP_LINEAR,c.cw.LINEAR_MIPMAP_NEAREST],z=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"]},51701:(e,t,r)=>{r.d(t,{NO:()=>m,cM:()=>h,p:()=>l,DX:()=>p});var n=r(6766),s=r(8909),o=r(19480),i=r(56215);r(68817),new o.x(i.Ue),new o.x((()=>({p0:null,p1:null,p2:null})));const a=(0,s.c)(),u=(0,s.c)();let c=(()=>{const e=new Uint32Array(131072);for(let t=0;t<e.length;++t)e[t]=t;return e})();const f=new Uint16Array([0]),d=(()=>{const e=new Uint16Array(65536);for(let t=0;t<e.length;++t)e[t]=t;return e})();function l(e){if(1===e)return f;if(e<d.length)return new Uint16Array(d.buffer,0,e);if(e>c.length){const t=Math.max(2*c.length,e);c=new Uint32Array(t);for(let e=0;e<c.length;e++)c[e]=e}return new Uint32Array(c.buffer,0,e)}function p(e){if(1===e)return new Uint16Array(f);if(e<d.length)return new Uint16Array(d.slice(0,e));if(e>c.length){const t=new Uint32Array(e);for(let e=0;e<t.length;e++)t[e]=e;return t}return new Uint32Array(c.slice(0,e))}function h(e,t,r){if(!e)return!1;const{size:s,data:o}=e;(0,n.s)(r,0,0,0),(0,n.s)(w,0,0,0);let i=0,c=0;for(let e=0;e<t.length-2;e+=3){const p=t[e+0]*s,h=t[e+1]*s,m=t[e+2]*s;(0,n.s)(y,o[p+0],o[p+1],o[p+2]),(0,n.s)(g,o[h+0],o[h+1],o[h+2]),(0,n.s)(b,o[m+0],o[m+1],o[m+2]);const T=(f=y,d=g,l=b,(0,n.b)(a,d,f),(0,n.b)(u,l,f),(0,n.l)((0,n.f)(a,a,u))/2);T?((0,n.a)(y,y,g),(0,n.a)(y,y,b),(0,n.g)(y,y,1/3*T),(0,n.a)(r,r,y),i+=T):((0,n.a)(w,w,y),(0,n.a)(w,w,g),(0,n.a)(w,w,b),c+=3)}var f,d,l;return!(0===c&&0===i||(0!==i?((0,n.g)(r,r,1/i),0):0===c||((0,n.g)(r,w,1/c),0)))}function m(e,t,r){if(!e||!t)return!1;const{size:s,data:o}=e;(0,n.s)(r,0,0,0);let i=-1,a=0;for(let e=0;e<t.length;e++){const n=t[e]*s;i!==n&&(r[0]+=o[n+0],r[1]+=o[n+1],r[2]+=o[n+2],a++),i=n}return a>1&&(0,n.g)(r,r,1/a),a>0}const y=(0,s.c)(),g=(0,s.c)(),b=(0,s.c)(),w=(0,s.c)()},14634:(e,t,r)=>{r.d(t,{K:()=>n});const n=2.1}}]);