(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[7061],{67061:(t,e,r)=>{"use strict";r.r(e),r.d(e,{createContextOrErrorHTML:()=>i.s,Program:()=>n.Z,BufferObject:()=>a.Z,Texture:()=>o.Z,VertexArrayObject:()=>s.Z,Renderbuffer:()=>c.Z,FramebufferObject:()=>h.Z,createProgram:()=>f.H,glslifyDefineMap:()=>f.K,ProgramCache:()=>m.Z,RenderingContext:()=>d.Z,ShaderCompiler:()=>l.Z});var i=r(27938),n=r(51007),a=r(69595),o=r(8634),s=r(74038),c=r(29581),h=r(84570),f=r(22212),m=r(99356),d=r(89930),l=r(65025)},51007:(t,e,r)=>{"use strict";r.d(e,{Z:()=>y}),r(95830);var i=r(59472);const n=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"];var a=r(5627),o=999,s=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function c(t){return function(t){var e=function(){var t,e,r,i=0,n=0,c=o,h=[],f=[],m=1,d=0,l=0,u=!1,p=!1,g="";return function(t){return f=[],null!==t?y(t.replace?t.replace(/\r\n/g,"\n"):t):(h.length&&_(h.join("")),c=10,_("(eof)"),f)};function _(t){t.length&&f.push({type:s[c],data:t,position:l,line:m,column:d})}function y(a){var s;for(i=0,r=(g+=a).length;t=g[i],i<r;){switch(s=i,c){case 0:i="/"===t&&"*"===e?(h.push(t),_(h.join("")),c=o,i+1):(h.push(t),e=t,i+1);break;case 1:case 2:i="\r"!==t&&"\n"!==t||"\\"===e?(h.push(t),e=t,i+1):(_(h.join("")),c=o,i);break;case 3:i=x();break;case 4:i="."===t||/[eE]/.test(t)?(h.push(t),c=5,e=t,i+1):"x"===t&&1===h.length&&"0"===h[0]?(c=11,h.push(t),e=t,i+1):/[^\d]/.test(t)?(_(h.join("")),c=o,i):(h.push(t),e=t,i+1);break;case 11:i=/[^a-fA-F0-9]/.test(t)?(_(h.join("")),c=o,i):(h.push(t),e=t,i+1);break;case 5:"f"===t&&(h.push(t),e=t,i+=1),i=/[eE]/.test(t)||"-"===t&&/[eE]/.test(e)?(h.push(t),e=t,i+1):/[^\d]/.test(t)?(_(h.join("")),c=o,i):(h.push(t),e=t,i+1);break;case 9999:i=U();break;case 9:i=/[^\s]/g.test(t)?(_(h.join("")),c=o,i):(h.push(t),e=t,i+1);break;case o:h=h.length?[]:h,i="/"===e&&"*"===t?(l=n+i-1,c=0,e=t,i+1):"/"===e&&"/"===t?(l=n+i-1,c=1,e=t,i+1):"#"===t?(c=2,l=n+i,i):/\s/.test(t)?(c=9,l=n+i,i):(u=/\d/.test(t),p=/[^\w_]/.test(t),l=n+i,c=u?4:p?3:9999,i)}if(s!==i)switch(g[s]){case"\n":d=0,++m;break;default:++d}}return n+=i,g=g.slice(i),f}function x(){if("."===e&&/\d/.test(t))return c=5,i;if("/"===e&&"*"===t)return c=0,i;if("/"===e&&"/"===t)return c=1,i;if("."===t&&h.length){for(;v(h););return c=5,i}if(";"===t||")"===t||"("===t){if(h.length)for(;v(h););return _(t),c=o,i+1}var r=2===h.length&&"="!==t;if(/[\w_\d\s]/.test(t)||r){for(;v(h););return c=o,i}return h.push(t),e=t,i+1}function v(t){for(var e,r,i=0;;){if(e=a.o.indexOf(t.slice(0,t.length+i).join("")),r=a.o[e],-1===e){if(i--+t.length>0)continue;r=t.slice(0,1).join("")}return _(r),l+=r.length,(h=h.slice(r.length)).length}}function U(){if(/[^\d\w_]/.test(t)){var r=h.join("");return c=a.l.indexOf(r)>-1?8:a.b.indexOf(r)>-1?7:6,_(h.join("")),c=o,i}return h.push(t),e=t,i+1}}(),r=[];return(r=r.concat(e(t))).concat(e(null))}(t)}const h=["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"];function f(t,e){for(let r=e-1;r>=0;r--){const e=t[r];if("whitespace"!==e.type&&"block-comment"!==e.type){if("keyword"!==e.type)break;if("attribute"===e.data||"in"===e.data)return!0}}return!1}function m(t,e,r,i){i=i||r;for(const n of t)if("ident"===n.type&&n.data===r)return i in e?e[i]++:e[i]=0,m(t,e,i+"_"+e[i],i);return r}function d(t,e,r="afterVersion"){function i(t,e){for(let r=e;r<t.length;r++){const e=t[r];if("operator"===e.type&&";"===e.data)return r}return null}const n={data:"\n",type:"whitespace"},a=e=>e<t.length&&/[^\r\n]$/.test(t[e].data);let o=function(t){let e=-1,n=0,a=-1;for(let o=0;o<t.length;o++){const s=t[o];if("preprocessor"===s.type&&(s.data.match(/\#(if|ifdef|ifndef)\s+.+/)?++n:s.data.match(/\#endif\s*.*/)&&--n),"afterVersion"!==r&&"afterPrecision"!==r||"preprocessor"===s.type&&/^#version/.test(s.data)&&(a=Math.max(a,o)),"afterPrecision"===r&&"keyword"===s.type&&"precision"===s.data){const e=i(t,o);if(null===e)throw new Error("precision statement not followed by any semicolons!");a=Math.max(a,e)}e<a&&0===n&&(e=o)}return e+1}(t);a(o-1)&&t.splice(o++,0,n);for(const r of e)t.splice(o++,0,r);a(o-1)&&a(o)&&t.splice(o,0,n)}function l(t,e,r,i="lowp"){d(t,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:i},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision")}function u(t,e,r,i,n="lowp"){d(t,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:i.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:n},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision")}function p(t,e){let r,i,n=-1;for(let a=e;a<t.length;a++){const e=t[a];if("operator"===e.type&&("["===e.data&&(r=a),"]"===e.data)){i=a;break}"integer"===e.type&&(n=parseInt(e.data,10))}return r&&i&&t.splice(r,i-r+1),n}class g{constructor(t,e,r,i,n={}){if(this._context=null,this._glName=null,this._locations={},this._initialized=!1,this._vShader=null,this._fShader=null,this._defines={},this._nameToUniformLocation={},this._nameToAttribLocation={},this._nameToUniform1={},this._nameToUniform1v={},this._nameToUniform2={},this._nameToUniform3={},this._nameToUniform4={},this._nameToUniformMatrix3={},this._nameToUniformMatrix4={},t||console.error("RenderingContext isn't initialized!"),0===e.length&&console.error("Shaders source should not be empty!"),t.instanceCounter.increment(3,this),this._context=t,this._vertexShaderSource=e,this._fragmentShaderSource=r,Array.isArray(n))for(const t of n)this._defines[t]="1";else this._defines=n;this._locations=i}get glName(){return this._glName}get locations(){return this._locations}getDefine(t){return this._defines[t]}dispose(){if(!this._context)return;const t=this._context.gl;if(this._vShader){const e=this._vShader;t.deleteShader(e),this._vShader=null}if(this._fShader){const e=this._fShader;t.deleteShader(e),this._fShader=null}this._glName&&(t.deleteProgram(this._glName),this._glName=null),this._context.instanceCounter.decrement(3,this),this._context=null}initialize(){if(this._initialized)return;this._vShader=this._loadShader(35633),this._fShader=this._loadShader(35632),this._vShader&&this._fShader||console.error("Error loading shaders!");const t=this._context.gl,e=t.createProgram();t.attachShader(e,this._vShader),t.attachShader(e,this._fShader);for(const r in this._locations){const i=this._locations[r];t.bindAttribLocation(e,i,r)}t.linkProgram(e),this._glName=e,this._initialized=!0}getUniformLocation(t){return this.initialize(),void 0===this._nameToUniformLocation[t]&&(this._nameToUniformLocation[t]=this._context.gl.getUniformLocation(this._glName,t)),this._nameToUniformLocation[t]}hasUniform(t){return null!==this.getUniformLocation(t)}getAttribLocation(t){return this.initialize(),void 0===this._nameToAttribLocation[t]&&(this._nameToAttribLocation[t]=this._context.gl.getAttribLocation(this._glName,t)),this._nameToAttribLocation[t]}setUniform1i(t,e){const r=this._nameToUniform1[t];void 0!==r&&e===r||(this._context.bindProgram(this),this._context.gl.uniform1i(this.getUniformLocation(t),e),this._nameToUniform1[t]=e)}setUniform1iv(t,e){const r=this._nameToUniform1v[t];_(r,e)&&(this._context.bindProgram(this),this._context.gl.uniform1iv(this.getUniformLocation(t),e),void 0===r?this._nameToUniform1v[t]=g._arrayCopy(e):g._arrayAssign(e,r))}setUniform2iv(t,e){const r=this._nameToUniform2[t];_(r,e)&&(this._context.bindProgram(this),this._context.gl.uniform2iv(this.getUniformLocation(t),e),void 0===r?this._nameToUniform2[t]=g._arrayCopy(e):g._arrayAssign(e,r))}setUniform3iv(t,e){const r=this._nameToUniform3[t];_(r,e)&&(this._context.bindProgram(this),this._context.gl.uniform3iv(this.getUniformLocation(t),e),void 0===r?this._nameToUniform3[t]=g._arrayCopy(e):g._arrayAssign(e,r))}setUniform4iv(t,e){const r=this._nameToUniform4[t];_(r,e)&&(this._context.bindProgram(this),this._context.gl.uniform4iv(this.getUniformLocation(t),e),void 0===r?this._nameToUniform4[t]=g._arrayCopy(e):g._arrayAssign(e,r))}setUniform1f(t,e){const r=this._nameToUniform1[t];void 0!==r&&e===r||(this._context.bindProgram(this),this._context.gl.uniform1f(this.getUniformLocation(t),e),this._nameToUniform1[t]=e)}setUniform1fv(t,e){const r=this._nameToUniform1v[t];_(r,e)&&(this._context.bindProgram(this),this._context.gl.uniform1fv(this.getUniformLocation(t),e),void 0===r?this._nameToUniform1v[t]=g._arrayCopy(e):g._arrayAssign(e,r))}setUniform2f(t,e,r){const i=this._nameToUniform2[t];void 0!==i&&e===i[0]&&r===i[1]||(this._context.bindProgram(this),this._context.gl.uniform2f(this.getUniformLocation(t),e,r),void 0===i?this._nameToUniform2[t]=[e,r]:(i[0]=e,i[1]=r))}setUniform2fv(t,e){const r=this._nameToUniform2[t];_(r,e)&&(this._context.bindProgram(this),this._context.gl.uniform2fv(this.getUniformLocation(t),e),void 0===r?this._nameToUniform2[t]=g._arrayCopy(e):g._arrayAssign(e,r))}setUniform3f(t,e,r,i){const n=this._nameToUniform3[t];void 0!==n&&e===n[0]&&r===n[1]&&i===n[2]||(this._context.bindProgram(this),this._context.gl.uniform3f(this.getUniformLocation(t),e,r,i),void 0===n?this._nameToUniform3[t]=[e,r,i]:(n[0]=e,n[1]=r,n[2]=i))}setUniform3fv(t,e){const r=this._nameToUniform3[t];_(r,e)&&(this._context.bindProgram(this),this._context.gl.uniform3fv(this.getUniformLocation(t),e),void 0===r?this._nameToUniform3[t]=g._arrayCopy(e):g._arrayAssign(e,r))}setUniform4f(t,e,r,i,n){const a=this._nameToUniform4[t];void 0!==a&&e===a[0]&&r===a[1]&&i===a[2]&&n===a[3]||(this._context.bindProgram(this),this._context.gl.uniform4f(this.getUniformLocation(t),e,r,i,n),void 0===a?this._nameToUniform4[t]=[e,r,i,n]:(a[0]=e,a[1]=r,a[2]=i,a[3]=n))}setUniform4fv(t,e){const r=this._nameToUniform4[t];_(r,e)&&(this._context.bindProgram(this),this._context.gl.uniform4fv(this.getUniformLocation(t),e),void 0===r?this._nameToUniform4[t]=g._arrayCopy(e):g._arrayAssign(e,r))}setUniformMatrix3fv(t,e,r=!1){const n=this._nameToUniformMatrix3[t];(function(t,e){return!!(0,i.Wi)(t)||(9!==t.length?_(t,e):9!==t.length||t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||t[3]!==e[3]||t[4]!==e[4]||t[5]!==e[5]||t[6]!==e[6]||t[7]!==e[7]||t[8]!==e[8])})(n,e)&&(this._context.bindProgram(this),this._context.gl.uniformMatrix3fv(this.getUniformLocation(t),r,e),void 0===n?this._nameToUniformMatrix3[t]=g._arrayCopy(e):g._arrayAssign(e,n))}setUniformMatrix4fv(t,e,r=!1){const n=this._nameToUniformMatrix4[t];(function(t,e){return!!(0,i.Wi)(t)||(16!==t.length?_(t,e):16!==t.length||t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||t[3]!==e[3]||t[4]!==e[4]||t[5]!==e[5]||t[6]!==e[6]||t[7]!==e[7]||t[8]!==e[8]||t[9]!==e[9]||t[10]!==e[10]||t[11]!==e[11]||t[12]!==e[12]||t[13]!==e[13]||t[14]!==e[14]||t[15]!==e[15])})(n,e)&&(this._context.bindProgram(this),this._context.gl.uniformMatrix4fv(this.getUniformLocation(t),r,e),void 0===n?this._nameToUniformMatrix4[t]=g._arrayCopy(e):g._arrayAssign(e,n))}assertCompatibleVertexAttributeLocations(t){const e=t.locations===this.locations;return e||console.error("VertexAttributeLocations are incompatible"),e}static _padToThree(t){let e=t.toString();return t<1e3&&(e=("  "+t).slice(-3)),e}_addLineNumbers(t){let e=2;return t.replace(/\n/g,(()=>"\n"+g._padToThree(e++)+":"))}_loadShader(t){const e=35633===t;let r=e?this._vertexShaderSource:this._fragmentShaderSource,i="";for(const t in this._defines)i+=`#define ${t} ${this._defines[t]}\n`;r=i+r,"webgl2"===this._context.contextVersion&&(r=function(t,e){const r=c(t);if("300 es"===function(t,e="100",r="300 es"){const i=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;for(const n of t)if("preprocessor"===n.type){const t=i.exec(n.data);if(t){const i=t[1].replace(/\s\s+/g," ");if(i===r)return i;if(i===e)return n.data="#version "+r,e;throw new Error("unknown glsl version: "+i)}}return t.splice(0,0,{type:"preprocessor",data:"#version "+r},{type:"whitespace",data:"\n"}),null}(r,"100","300 es"))throw new Error("shader is already glsl 300 es");let i=null,a=null;const o={},s={};for(let t=0;t<r.length;++t){const c=r[t];switch(c.type){case"keyword":"vertex"===e&&"attribute"===c.data?c.data="in":"varying"===c.data&&(c.data="vertex"===e?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(c.data.trim())&&(c.data=c.data.replace(/(2D|Cube|EXT)/g,"")),"fragment"===e&&"gl_FragColor"===c.data&&(i||(i=m(r,o,"fragColor"),l(r,i,"vec4")),c.data=i),"fragment"===e&&"gl_FragData"===c.data){const e=p(r,t+1),i=m(r,o,"fragData");u(r,i,"vec4",e,"mediump"),c.data=i}else"fragment"===e&&"gl_FragDepthEXT"===c.data&&(a||(a=m(r,o,"gl_FragDepth")),c.data=a);break;case"ident":if(n.indexOf(c.data)>=0){if("vertex"===e&&f(r,t))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");c.data in s||(s[c.data]=m(r,o,c.data)),c.data=s[c.data]}}}for(let t=r.length-1;t>=0;--t){const e=r[t];if("preprocessor"===e.type){const i=e.data.match(/\#extension\s+(.*)\:/);if(i&&i[1]&&h.indexOf(i[1].trim())>=0){const e=r[t+1];r.splice(t,e&&"whitespace"===e.type?2:1)}const n=e.data.match(/\#ifdef\s+(.*)/);n&&n[1]&&h.indexOf(n[1].trim())>=0&&(e.data="#if 1");const a=e.data.match(/\#ifndef\s+(.*)/);a&&a[1]&&h.indexOf(a[1].trim())>=0&&(e.data="#if 0")}}return r.map((t=>"eof"!==t.type?t.data:"")).join("")}(r,e?"vertex":"fragment"));const a=this._context.gl,o=a.createShader(t);return a.shaderSource(o,r),a.compileShader(o),o}static _arrayCopy(t){const e=[];for(let r=0;r<t.length;++r)e.push(t[r]);return e}static _arrayAssign(t,e){for(let r=0;r<t.length;++r)e[r]=t[r]}}function _(t,e){if((0,i.Wi)(t)||t.length!==e.length)return!0;for(let r=0;r<t.length;++r)if(t[r]!==e[r])return!0;return!1}const y=g},65025:(t,e,r)=>{"use strict";r.d(e,{Z:()=>i});const i=class{constructor(t){this.readFile=t}resolveIncludes(t){return this.resolve(t)}resolve(t,e=new Map){if(e.has(t))return e.get(t);const r=this.read(t);if(!r)throw new Error(`cannot find shader file ${t}`);const i=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let n=i.exec(r);const a=[];for(;null!=n;)a.push({path:n[1],start:n.index,length:n[0].length}),n=i.exec(r);let o=0,s="";return a.forEach((t=>{s+=r.slice(o,t.start),s+=e.has(t.path)?"":this.resolve(t.path,e),o=t.start+t.length})),s+=r.slice(o),e.set(t,s),s}read(t){return this.readFile(t)}}},22212:(t,e,r)=>{"use strict";r.d(e,{H:()=>a,K:()=>n});var i=r(51007);function n(t){let e="";for(const r in t){const i=t[r];if("boolean"==typeof i)i&&(e+=`#define ${r}\n`);else if("number"==typeof i)e+=`#define ${r} ${i.toFixed()}\n`;else if("object"==typeof i){const t=i.options;let n=0;for(const r in t)e+=`#define ${t[r]} ${(n++).toFixed()}\n`;e+=`#define ${r} ${t[i.value]}\n`}}return e}function a(t,e,r,n){r=r||{},n=n||"";const a="function"==typeof e.shaders?e.shaders(r):e.shaders;return new i.Z(t,n+a.vertexShader,n+a.fragmentShader,e.attributes)}}}]);