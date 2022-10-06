(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[6563],{69595:(t,e,i)=>{"use strict";i.d(e,{Z:()=>s});var r=i(6962),n=i(23660);class o{constructor(t,e,i,r,o){this._context=t,this.bufferType=e,this.usage=i,this._glName=null,this._size=-1,this._indexType=void 0,t.instanceCounter.increment(1,this),this._glName=this._context.gl.createBuffer(),(0,n.z)(this._context.gl),r&&this.setData(r,o)}static createIndex(t,e,i,r){return new o(t,34963,e,i,r)}static createVertex(t,e,i){return new o(t,34962,e,i)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get byteSize(){return 34962===this.bufferType?this._size:5125===this._indexType?4*this._size:2*this._size}dispose(){this._context&&(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(1,this),this._context=null)}setData(t,e){if(!t)return;if("number"==typeof t){if(t<0&&console.error("Buffer size cannot be negative!"),34963===this.bufferType&&e)switch(this._indexType=e,this._size=t,e){case 5123:t*=2;break;case 5125:t*=4}}else{let e=t.byteLength;(0,r.Uc)(t)&&(e/=2,this._indexType=5123),(0,r.ZY)(t)&&(e/=4,this._indexType=5125),this._size=e}const i=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this),this._context.gl.bufferData(this.bufferType,t,this.usage),this._context.bindVAO(i)}setSubData(t,e=0,i=0,n=t.byteLength){if(!t)return;(e<0||e>=this._size)&&console.error("offset is out of range!");let o=e,s=i,a=n,c=t.byteLength;(0,r.Uc)(t)&&(c/=2,o*=2,s*=2,a*=2),(0,r.ZY)(t)&&(c/=4,o*=4,s*=4,a*=4),void 0===n&&(n=c-1),i>=n&&console.error("end must be bigger than start!"),e+i-n>this._size&&console.error("An attempt to write beyond the end of the buffer!");const f=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this);const h=this._context.gl,u=ArrayBuffer.isView(t)?t.buffer:t,l=0===s&&a===t.byteLength?u:u.slice(s,a);h.bufferSubData(this.bufferType,o,l),this._context.bindVAO(f)}}const s=o},51007:(t,e,i)=>{"use strict";i.d(e,{Z:()=>x}),i(95830);var r=i(59472);const n=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"];var o=i(5627),s=999,a=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function c(t){return function(t){var e=function(){var t,e,i,r=0,n=0,c=s,f=[],h=[],u=1,l=0,d=0,m=!1,_=!1,g="";return function(t){return h=[],null!==t?x(t.replace?t.replace(/\r\n/g,"\n"):t):(f.length&&p(f.join("")),c=10,p("(eof)"),h)};function p(t){t.length&&h.push({type:a[c],data:t,position:d,line:u,column:l})}function x(o){var a;for(r=0,i=(g+=o).length;t=g[r],r<i;){switch(a=r,c){case 0:r="/"===t&&"*"===e?(f.push(t),p(f.join("")),c=s,r+1):(f.push(t),e=t,r+1);break;case 1:case 2:r="\r"!==t&&"\n"!==t||"\\"===e?(f.push(t),e=t,r+1):(p(f.join("")),c=s,r);break;case 3:r=y();break;case 4:r="."===t||/[eE]/.test(t)?(f.push(t),c=5,e=t,r+1):"x"===t&&1===f.length&&"0"===f[0]?(c=11,f.push(t),e=t,r+1):/[^\d]/.test(t)?(p(f.join("")),c=s,r):(f.push(t),e=t,r+1);break;case 11:r=/[^a-fA-F0-9]/.test(t)?(p(f.join("")),c=s,r):(f.push(t),e=t,r+1);break;case 5:"f"===t&&(f.push(t),e=t,r+=1),r=/[eE]/.test(t)||"-"===t&&/[eE]/.test(e)?(f.push(t),e=t,r+1):/[^\d]/.test(t)?(p(f.join("")),c=s,r):(f.push(t),e=t,r+1);break;case 9999:r=v();break;case 9:r=/[^\s]/g.test(t)?(p(f.join("")),c=s,r):(f.push(t),e=t,r+1);break;case s:f=f.length?[]:f,r="/"===e&&"*"===t?(d=n+r-1,c=0,e=t,r+1):"/"===e&&"/"===t?(d=n+r-1,c=1,e=t,r+1):"#"===t?(c=2,d=n+r,r):/\s/.test(t)?(c=9,d=n+r,r):(m=/\d/.test(t),_=/[^\w_]/.test(t),d=n+r,c=m?4:_?3:9999,r)}if(a!==r)switch(g[a]){case"\n":l=0,++u;break;default:++l}}return n+=r,g=g.slice(r),h}function y(){if("."===e&&/\d/.test(t))return c=5,r;if("/"===e&&"*"===t)return c=0,r;if("/"===e&&"/"===t)return c=1,r;if("."===t&&f.length){for(;b(f););return c=5,r}if(";"===t||")"===t||"("===t){if(f.length)for(;b(f););return p(t),c=s,r+1}var i=2===f.length&&"="!==t;if(/[\w_\d\s]/.test(t)||i){for(;b(f););return c=s,r}return f.push(t),e=t,r+1}function b(t){for(var e,i,r=0;;){if(e=o.o.indexOf(t.slice(0,t.length+r).join("")),i=o.o[e],-1===e){if(r--+t.length>0)continue;i=t.slice(0,1).join("")}return p(i),d+=i.length,(f=f.slice(i.length)).length}}function v(){if(/[^\d\w_]/.test(t)){var i=f.join("");return c=o.l.indexOf(i)>-1?8:o.b.indexOf(i)>-1?7:6,p(f.join("")),c=s,r}return f.push(t),e=t,r+1}}(),i=[];return(i=i.concat(e(t))).concat(e(null))}(t)}const f=["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"];function h(t,e){for(let i=e-1;i>=0;i--){const e=t[i];if("whitespace"!==e.type&&"block-comment"!==e.type){if("keyword"!==e.type)break;if("attribute"===e.data||"in"===e.data)return!0}}return!1}function u(t,e,i,r){r=r||i;for(const n of t)if("ident"===n.type&&n.data===i)return r in e?e[r]++:e[r]=0,u(t,e,r+"_"+e[r],r);return i}function l(t,e,i="afterVersion"){function r(t,e){for(let i=e;i<t.length;i++){const e=t[i];if("operator"===e.type&&";"===e.data)return i}return null}const n={data:"\n",type:"whitespace"},o=e=>e<t.length&&/[^\r\n]$/.test(t[e].data);let s=function(t){let e=-1,n=0,o=-1;for(let s=0;s<t.length;s++){const a=t[s];if("preprocessor"===a.type&&(a.data.match(/\#(if|ifdef|ifndef)\s+.+/)?++n:a.data.match(/\#endif\s*.*/)&&--n),"afterVersion"!==i&&"afterPrecision"!==i||"preprocessor"===a.type&&/^#version/.test(a.data)&&(o=Math.max(o,s)),"afterPrecision"===i&&"keyword"===a.type&&"precision"===a.data){const e=r(t,s);if(null===e)throw new Error("precision statement not followed by any semicolons!");o=Math.max(o,e)}e<o&&0===n&&(e=s)}return e+1}(t);o(s-1)&&t.splice(s++,0,n);for(const i of e)t.splice(s++,0,i);o(s-1)&&o(s)&&t.splice(s,0,n)}function d(t,e,i,r="lowp"){l(t,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"keyword",data:i},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision")}function m(t,e,i,r,n="lowp"){l(t,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:r.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:n},{type:"whitespace",data:" "},{type:"keyword",data:i},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision")}function _(t,e){let i,r,n=-1;for(let o=e;o<t.length;o++){const e=t[o];if("operator"===e.type&&("["===e.data&&(i=o),"]"===e.data)){r=o;break}"integer"===e.type&&(n=parseInt(e.data,10))}return i&&r&&t.splice(i,r-i+1),n}class g{constructor(t,e,i,r,n={}){if(this._context=null,this._glName=null,this._locations={},this._initialized=!1,this._vShader=null,this._fShader=null,this._defines={},this._nameToUniformLocation={},this._nameToAttribLocation={},this._nameToUniform1={},this._nameToUniform1v={},this._nameToUniform2={},this._nameToUniform3={},this._nameToUniform4={},this._nameToUniformMatrix3={},this._nameToUniformMatrix4={},t||console.error("RenderingContext isn't initialized!"),0===e.length&&console.error("Shaders source should not be empty!"),t.instanceCounter.increment(3,this),this._context=t,this._vertexShaderSource=e,this._fragmentShaderSource=i,Array.isArray(n))for(const t of n)this._defines[t]="1";else this._defines=n;this._locations=r}get glName(){return this._glName}get locations(){return this._locations}getDefine(t){return this._defines[t]}dispose(){if(!this._context)return;const t=this._context.gl;if(this._vShader){const e=this._vShader;t.deleteShader(e),this._vShader=null}if(this._fShader){const e=this._fShader;t.deleteShader(e),this._fShader=null}this._glName&&(t.deleteProgram(this._glName),this._glName=null),this._context.instanceCounter.decrement(3,this),this._context=null}initialize(){if(this._initialized)return;this._vShader=this._loadShader(35633),this._fShader=this._loadShader(35632),this._vShader&&this._fShader||console.error("Error loading shaders!");const t=this._context.gl,e=t.createProgram();t.attachShader(e,this._vShader),t.attachShader(e,this._fShader);for(const i in this._locations){const r=this._locations[i];t.bindAttribLocation(e,r,i)}t.linkProgram(e),this._glName=e,this._initialized=!0}getUniformLocation(t){return this.initialize(),void 0===this._nameToUniformLocation[t]&&(this._nameToUniformLocation[t]=this._context.gl.getUniformLocation(this._glName,t)),this._nameToUniformLocation[t]}hasUniform(t){return null!==this.getUniformLocation(t)}getAttribLocation(t){return this.initialize(),void 0===this._nameToAttribLocation[t]&&(this._nameToAttribLocation[t]=this._context.gl.getAttribLocation(this._glName,t)),this._nameToAttribLocation[t]}setUniform1i(t,e){const i=this._nameToUniform1[t];void 0!==i&&e===i||(this._context.bindProgram(this),this._context.gl.uniform1i(this.getUniformLocation(t),e),this._nameToUniform1[t]=e)}setUniform1iv(t,e){const i=this._nameToUniform1v[t];p(i,e)&&(this._context.bindProgram(this),this._context.gl.uniform1iv(this.getUniformLocation(t),e),void 0===i?this._nameToUniform1v[t]=g._arrayCopy(e):g._arrayAssign(e,i))}setUniform2iv(t,e){const i=this._nameToUniform2[t];p(i,e)&&(this._context.bindProgram(this),this._context.gl.uniform2iv(this.getUniformLocation(t),e),void 0===i?this._nameToUniform2[t]=g._arrayCopy(e):g._arrayAssign(e,i))}setUniform3iv(t,e){const i=this._nameToUniform3[t];p(i,e)&&(this._context.bindProgram(this),this._context.gl.uniform3iv(this.getUniformLocation(t),e),void 0===i?this._nameToUniform3[t]=g._arrayCopy(e):g._arrayAssign(e,i))}setUniform4iv(t,e){const i=this._nameToUniform4[t];p(i,e)&&(this._context.bindProgram(this),this._context.gl.uniform4iv(this.getUniformLocation(t),e),void 0===i?this._nameToUniform4[t]=g._arrayCopy(e):g._arrayAssign(e,i))}setUniform1f(t,e){const i=this._nameToUniform1[t];void 0!==i&&e===i||(this._context.bindProgram(this),this._context.gl.uniform1f(this.getUniformLocation(t),e),this._nameToUniform1[t]=e)}setUniform1fv(t,e){const i=this._nameToUniform1v[t];p(i,e)&&(this._context.bindProgram(this),this._context.gl.uniform1fv(this.getUniformLocation(t),e),void 0===i?this._nameToUniform1v[t]=g._arrayCopy(e):g._arrayAssign(e,i))}setUniform2f(t,e,i){const r=this._nameToUniform2[t];void 0!==r&&e===r[0]&&i===r[1]||(this._context.bindProgram(this),this._context.gl.uniform2f(this.getUniformLocation(t),e,i),void 0===r?this._nameToUniform2[t]=[e,i]:(r[0]=e,r[1]=i))}setUniform2fv(t,e){const i=this._nameToUniform2[t];p(i,e)&&(this._context.bindProgram(this),this._context.gl.uniform2fv(this.getUniformLocation(t),e),void 0===i?this._nameToUniform2[t]=g._arrayCopy(e):g._arrayAssign(e,i))}setUniform3f(t,e,i,r){const n=this._nameToUniform3[t];void 0!==n&&e===n[0]&&i===n[1]&&r===n[2]||(this._context.bindProgram(this),this._context.gl.uniform3f(this.getUniformLocation(t),e,i,r),void 0===n?this._nameToUniform3[t]=[e,i,r]:(n[0]=e,n[1]=i,n[2]=r))}setUniform3fv(t,e){const i=this._nameToUniform3[t];p(i,e)&&(this._context.bindProgram(this),this._context.gl.uniform3fv(this.getUniformLocation(t),e),void 0===i?this._nameToUniform3[t]=g._arrayCopy(e):g._arrayAssign(e,i))}setUniform4f(t,e,i,r,n){const o=this._nameToUniform4[t];void 0!==o&&e===o[0]&&i===o[1]&&r===o[2]&&n===o[3]||(this._context.bindProgram(this),this._context.gl.uniform4f(this.getUniformLocation(t),e,i,r,n),void 0===o?this._nameToUniform4[t]=[e,i,r,n]:(o[0]=e,o[1]=i,o[2]=r,o[3]=n))}setUniform4fv(t,e){const i=this._nameToUniform4[t];p(i,e)&&(this._context.bindProgram(this),this._context.gl.uniform4fv(this.getUniformLocation(t),e),void 0===i?this._nameToUniform4[t]=g._arrayCopy(e):g._arrayAssign(e,i))}setUniformMatrix3fv(t,e,i=!1){const n=this._nameToUniformMatrix3[t];(function(t,e){return!!(0,r.Wi)(t)||(9!==t.length?p(t,e):9!==t.length||t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||t[3]!==e[3]||t[4]!==e[4]||t[5]!==e[5]||t[6]!==e[6]||t[7]!==e[7]||t[8]!==e[8])})(n,e)&&(this._context.bindProgram(this),this._context.gl.uniformMatrix3fv(this.getUniformLocation(t),i,e),void 0===n?this._nameToUniformMatrix3[t]=g._arrayCopy(e):g._arrayAssign(e,n))}setUniformMatrix4fv(t,e,i=!1){const n=this._nameToUniformMatrix4[t];(function(t,e){return!!(0,r.Wi)(t)||(16!==t.length?p(t,e):16!==t.length||t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||t[3]!==e[3]||t[4]!==e[4]||t[5]!==e[5]||t[6]!==e[6]||t[7]!==e[7]||t[8]!==e[8]||t[9]!==e[9]||t[10]!==e[10]||t[11]!==e[11]||t[12]!==e[12]||t[13]!==e[13]||t[14]!==e[14]||t[15]!==e[15])})(n,e)&&(this._context.bindProgram(this),this._context.gl.uniformMatrix4fv(this.getUniformLocation(t),i,e),void 0===n?this._nameToUniformMatrix4[t]=g._arrayCopy(e):g._arrayAssign(e,n))}assertCompatibleVertexAttributeLocations(t){const e=t.locations===this.locations;return e||console.error("VertexAttributeLocations are incompatible"),e}static _padToThree(t){let e=t.toString();return t<1e3&&(e=("  "+t).slice(-3)),e}_addLineNumbers(t){let e=2;return t.replace(/\n/g,(()=>"\n"+g._padToThree(e++)+":"))}_loadShader(t){const e=35633===t;let i=e?this._vertexShaderSource:this._fragmentShaderSource,r="";for(const t in this._defines)r+=`#define ${t} ${this._defines[t]}\n`;i=r+i,"webgl2"===this._context.contextVersion&&(i=function(t,e){const i=c(t);if("300 es"===function(t,e="100",i="300 es"){const r=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;for(const n of t)if("preprocessor"===n.type){const t=r.exec(n.data);if(t){const r=t[1].replace(/\s\s+/g," ");if(r===i)return r;if(r===e)return n.data="#version "+i,e;throw new Error("unknown glsl version: "+r)}}return t.splice(0,0,{type:"preprocessor",data:"#version "+i},{type:"whitespace",data:"\n"}),null}(i,"100","300 es"))throw new Error("shader is already glsl 300 es");let r=null,o=null;const s={},a={};for(let t=0;t<i.length;++t){const c=i[t];switch(c.type){case"keyword":"vertex"===e&&"attribute"===c.data?c.data="in":"varying"===c.data&&(c.data="vertex"===e?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(c.data.trim())&&(c.data=c.data.replace(/(2D|Cube|EXT)/g,"")),"fragment"===e&&"gl_FragColor"===c.data&&(r||(r=u(i,s,"fragColor"),d(i,r,"vec4")),c.data=r),"fragment"===e&&"gl_FragData"===c.data){const e=_(i,t+1),r=u(i,s,"fragData");m(i,r,"vec4",e,"mediump"),c.data=r}else"fragment"===e&&"gl_FragDepthEXT"===c.data&&(o||(o=u(i,s,"gl_FragDepth")),c.data=o);break;case"ident":if(n.indexOf(c.data)>=0){if("vertex"===e&&h(i,t))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");c.data in a||(a[c.data]=u(i,s,c.data)),c.data=a[c.data]}}}for(let t=i.length-1;t>=0;--t){const e=i[t];if("preprocessor"===e.type){const r=e.data.match(/\#extension\s+(.*)\:/);if(r&&r[1]&&f.indexOf(r[1].trim())>=0){const e=i[t+1];i.splice(t,e&&"whitespace"===e.type?2:1)}const n=e.data.match(/\#ifdef\s+(.*)/);n&&n[1]&&f.indexOf(n[1].trim())>=0&&(e.data="#if 1");const o=e.data.match(/\#ifndef\s+(.*)/);o&&o[1]&&f.indexOf(o[1].trim())>=0&&(e.data="#if 0")}}return i.map((t=>"eof"!==t.type?t.data:"")).join("")}(i,e?"vertex":"fragment"));const o=this._context.gl,s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}static _arrayCopy(t){const e=[];for(let i=0;i<t.length;++i)e.push(t[i]);return e}static _arrayAssign(t,e){for(let i=0;i<t.length;++i)e[i]=t[i]}}function p(t,e){if((0,r.Wi)(t)||t.length!==e.length)return!0;for(let i=0;i<t.length;++i)if(t[i]!==e[i])return!0;return!1}const x=g},57319:(t,e,i)=>{"use strict";function r(t,e){return t.vertexBuffers[e].size/function(t){return t[0].stride}(t.layout[e])}function n(t,e,i,r,n){const o=t.gl,s=t.capabilities.instancing;t.bindBuffer(i);for(const t of r){const i=e[t.name],r=(n||(0+t.baseInstance?t.baseInstance:0))*t.stride;if(void 0===i&&console.error(`There is no location for vertex attribute '${t.name}' defined.`),t.baseInstance&&!t.divisor&&console.error(`Vertex attribute '${t.name}' uses baseInstanceOffset without divisor.`),t.count<=4)o.vertexAttribPointer(i,t.count,t.type,t.normalized,t.stride,t.offset+r),o.enableVertexAttribArray(i),t.divisor&&t.divisor>0&&s&&s.vertexAttribDivisor(i,t.divisor);else if(9===t.count)for(let e=0;e<3;e++)o.vertexAttribPointer(i+e,3,t.type,t.normalized,t.stride,t.offset+12*e+r),o.enableVertexAttribArray(i+e),t.divisor&&t.divisor>0&&s&&s.vertexAttribDivisor(i+e,t.divisor);else if(16===t.count)for(let e=0;e<4;e++)o.vertexAttribPointer(i+e,4,t.type,t.normalized,t.stride,t.offset+16*e+r),o.enableVertexAttribArray(i+e),t.divisor&&t.divisor>0&&s&&s.vertexAttribDivisor(i+e,t.divisor);else console.error("Unsupported vertex attribute element count: "+t.count)}}function o(t,e,i,r){const n=t.gl,o=t.capabilities.instancing;t.bindBuffer(i);for(const t of r){const i=e[t.name];if(t.count<=4)n.disableVertexAttribArray(i),t.divisor&&t.divisor>0&&o&&o.vertexAttribDivisor(i,0);else if(9===t.count)for(let e=0;e<3;e++)n.disableVertexAttribArray(i+e),t.divisor&&t.divisor>0&&o&&o.vertexAttribDivisor(i+e,0);else if(16===t.count)for(let e=0;e<4;e++)n.disableVertexAttribArray(i+e),t.divisor&&t.divisor>0&&o&&o.vertexAttribDivisor(i+e,0);else console.error("Unsupported vertex attribute element count: "+t.count)}t.unbindBuffer(34962)}function s(t){switch(t){case 6406:case 6409:case 36168:return 1;case 6410:case 32854:case 33325:case 32854:case 33189:return 2;case 6407:case 6402:return 3;case 6408:case 34041:case 33326:case 35898:case 33327:case 34041:return 4;case 33328:case 34842:return 8;case 34836:return 16;case 33776:case 33777:return.5;case 33778:case 33779:return 1;case 37488:case 37489:case 37492:case 37493:case 37494:case 37495:return.5;case 37490:case 37491:case 37496:case 37497:return 1}return 0}i.d(e,{XP:()=>n,RG:()=>s,UF:()=>o,_V:()=>r}),i(95830)},74038:(t,e,i)=>{"use strict";i.d(e,{Z:()=>o});var r=i(59472),n=i(57319);const o=class{constructor(t,e,i,r,n){this._context=t,this._locations=e,this._layout=i,this._buffers=r,this._indexBuffer=n,this._glName=null,this._initialized=!1,t.instanceCounter.increment(2,this)}get glName(){return this._glName}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get size(){return Object.keys(this._buffers).reduce(((t,e)=>t+this._buffers[e].size),this._indexBuffer?this._indexBuffer.size:0)}get layout(){return this._layout}get locations(){return this._locations}dispose(t=!0){if(!this._context)return;const e=this._context.capabilities.vao;if(e&&this._glName&&(e.deleteVertexArray(this._glName),this._glName=null),this._context.getBoundVAO()===this&&this._context.bindVAO(null),t){for(const t in this._buffers)this._buffers[t].dispose(),delete this._buffers[t];this._indexBuffer=(0,r.O3)(this._indexBuffer)}this._context.instanceCounter.decrement(2,this),this._context=null}initialize(){if(this._initialized)return;const t=this._context.capabilities.vao;if(t){const e=t.createVertexArray();t.bindVertexArray(e),this._bindLayout(),t.bindVertexArray(null),this._glName=e}this._initialized=!0}bind(){this.initialize();const t=this._context.capabilities.vao;t?t.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())}_bindLayout(){const t=this._buffers,e=!!this._context.capabilities.vao,i=this._layout,r=this._indexBuffer;t||console.error("Vertex buffer dictionary is empty!");const o=this._context.gl;for(const e in t){const r=t[e];r||console.error("Vertex buffer is uninitialized!");const o=i[e];o||console.error("Vertex element descriptor is empty!"),(0,n.XP)(this._context,this._locations,r,o)}r&&(e?o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,r.glName):this._context.bindBuffer(r))}unbind(){this.initialize();const t=this._context.capabilities.vao;t?t.bindVertexArray(null):this._unbindLayout()}_unbindLayout(){const t=this._buffers,e=this._layout;t||console.error("Vertex buffer dictionary is empty!");for(const i in t){const r=t[i];r||console.error("Vertex buffer is uninitialized!");const o=e[i];(0,n.UF)(this._context,this._locations,r,o)}this._indexBuffer&&this._context.unbindBuffer(this._indexBuffer.bufferType)}}}}]);