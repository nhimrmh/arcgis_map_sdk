"use strict";(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[2736],{69609:(e,t,r)=>{r.d(t,{$:()=>C});var o=r(7753),a=(r(39994),r(61681)),n=r(6174),i=r(36172),s=r(91907);const l=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"];var c,f={exports:{}};void 0!==(c=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"])&&(f.exports=c);const m=f.exports;var u,g={exports:{}};void 0!==(u=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"])&&(g.exports=u);const h=g.exports;var d,_={exports:{}};void 0!==(d=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"])&&(_.exports=d);const p=_.exports;var x=999,v=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function T(e){return function(e){var t=function(){var e,t,r,o=0,a=0,n=x,i=[],s=[],l=1,c=0,f=0,u=!1,g=!1,d="";return function(e){return s=[],null!==e?T(e.replace?e.replace(/\r\n/g,"\n"):e):(i.length&&_(i.join("")),n=10,_("(eof)"),s)};function _(e){e.length&&s.push({type:v[n],data:e,position:f,line:l,column:c})}function T(t){var i;for(o=0,r=(d+=t).length;e=d[o],o<r;){switch(i=o,n){case 0:o=U();break;case 1:case 2:o=M();break;case 3:o=w();break;case 4:o=P();break;case 11:o=E();break;case 5:o=C();break;case 9999:o=L();break;case 9:o=S();break;case x:o=y()}i!==o&&("\n"===d[i]?(c=0,++l):++c)}return a+=o,d=d.slice(o),s}function y(){return i=i.length?[]:i,"/"===t&&"*"===e?(f=a+o-1,n=0,t=e,o+1):"/"===t&&"/"===e?(f=a+o-1,n=1,t=e,o+1):"#"===e?(n=2,f=a+o,o):/\s/.test(e)?(n=9,f=a+o,o):(u=/\d/.test(e),g=/[^\w_]/.test(e),f=a+o,n=u?4:g?3:9999,o)}function S(){return/[^\s]/g.test(e)?(_(i.join("")),n=x,o):(i.push(e),t=e,o+1)}function M(){return"\r"!==e&&"\n"!==e||"\\"===t?(i.push(e),t=e,o+1):(_(i.join("")),n=x,o)}function U(){return"/"===e&&"*"===t?(i.push(e),_(i.join("")),n=x,o+1):(i.push(e),t=e,o+1)}function w(){if("."===t&&/\d/.test(e))return n=5,o;if("/"===t&&"*"===e)return n=0,o;if("/"===t&&"/"===e)return n=1,o;if("."===e&&i.length){for(;D(i););return n=5,o}if(";"===e||")"===e||"("===e){if(i.length)for(;D(i););return _(e),n=x,o+1}var r=2===i.length&&"="!==e;if(/[\w_\d\s]/.test(e)||r){for(;D(i););return n=x,o}return i.push(e),t=e,o+1}function D(e){for(var t,r,o=0;;){if(t=h.indexOf(e.slice(0,e.length+o).join("")),r=h[t],-1===t){if(o--+e.length>0)continue;r=e.slice(0,1).join("")}return _(r),f+=r.length,(i=i.slice(r.length)).length}}function E(){return/[^a-fA-F0-9]/.test(e)?(_(i.join("")),n=x,o):(i.push(e),t=e,o+1)}function P(){return"."===e||/[eE]/.test(e)?(i.push(e),n=5,t=e,o+1):"x"===e&&1===i.length&&"0"===i[0]?(n=11,i.push(e),t=e,o+1):/[^\d]/.test(e)?(_(i.join("")),n=x,o):(i.push(e),t=e,o+1)}function C(){return"f"===e&&(i.push(e),t=e,o+=1),/[eE]/.test(e)||"-"===e&&/[eE]/.test(t)?(i.push(e),t=e,o+1):/[^\d]/.test(e)?(_(i.join("")),n=x,o):(i.push(e),t=e,o+1)}function L(){if(/[^\d\w_]/.test(e)){var r=i.join("");return n=m.indexOf(r)>-1?8:p.indexOf(r)>-1?7:6,_(i.join("")),n=x,o}return i.push(e),t=e,o+1}}(),r=[];return(r=r.concat(t(e))).concat(t(null))}(e)}const y=["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"];function S(e,t){for(let r=t-1;r>=0;r--){const t=e[r];if("whitespace"!==t.type&&"block-comment"!==t.type){if("keyword"!==t.type)break;if("attribute"===t.data||"in"===t.data)return!0}}return!1}function M(e,t,r,o){o=o||r;for(const a of e)if("ident"===a.type&&a.data===r)return o in t?t[o]++:t[o]=0,M(e,t,o+"_"+t[o],o);return r}function U(e,t,r="afterVersion"){function o(e,t){for(let r=t;r<e.length;r++){const t=e[r];if("operator"===t.type&&";"===t.data)return r}return null}const a={data:"\n",type:"whitespace"},n=t=>t<e.length&&/[^\r\n]$/.test(e[t].data);let i=function(e){let t=-1,a=0,n=-1;for(let i=0;i<e.length;i++){const s=e[i];if("preprocessor"===s.type&&(s.data.match(/\#(if|ifdef|ifndef)\s+.+/)?++a:s.data.match(/\#endif\s*.*/)&&--a),"afterVersion"!==r&&"afterPrecision"!==r||"preprocessor"===s.type&&/^#version/.test(s.data)&&(n=Math.max(n,i)),"afterPrecision"===r&&"keyword"===s.type&&"precision"===s.data){const t=o(e,i);if(null===t)throw new Error("precision statement not followed by any semicolons!");n=Math.max(n,t)}t<n&&0===a&&(t=i)}return t+1}(e);n(i-1)&&e.splice(i++,0,a);for(const r of t)e.splice(i++,0,r);n(i-1)&&n(i)&&e.splice(i,0,a)}function w(e,t,r,o="lowp"){U(e,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:o},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function D(e,t,r,o,a="lowp"){U(e,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:o.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:a},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function E(e,t){let r,o,a=-1;for(let n=t;n<e.length;n++){const t=e[n];if("operator"===t.type&&("["===t.data&&(r=n),"]"===t.data)){o=n;break}"integer"===t.type&&(a=parseInt(t.data,10))}return r&&o&&e.splice(r,o-r+1),a}function P(e,t){if((0,a.pC)(null))return null;const r=T(e);if("300 es"===function(e,t="100",r="300 es"){const o=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;for(const a of e)if("preprocessor"===a.type){const e=o.exec(a.data);if(e){const o=e[1].replace(/\s\s+/g," ");if(o===r)return o;if(o===t)return a.data="#version "+r,t;throw new Error("unknown glsl version: "+o)}}return e.splice(0,0,{type:"preprocessor",data:"#version "+r},{type:"whitespace",data:"\n"}),null}(r,"100","300 es"))return e;let o=null,n=null;const i={},c={};for(let e=0;e<r.length;++e){const a=r[e];switch(a.type){case"keyword":t===s.Ho.VERTEX_SHADER&&"attribute"===a.data?a.data="in":"varying"===a.data&&(a.data=t===s.Ho.VERTEX_SHADER?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(a.data.trim())&&(a.data=a.data.replace(/(2D|Cube|EXT)/g,"")),t===s.Ho.FRAGMENT_SHADER&&"gl_FragColor"===a.data&&(o||(o=M(r,i,"fragColor"),w(r,o,"vec4")),a.data=o),t===s.Ho.FRAGMENT_SHADER&&"gl_FragData"===a.data){const t=E(r,e+1),o=M(r,i,"fragData");D(r,o,"vec4",t,"mediump"),a.data=o}else t===s.Ho.FRAGMENT_SHADER&&"gl_FragDepthEXT"===a.data&&(n||(n=M(r,i,"gl_FragDepth")),a.data=n);break;case"ident":if(l.includes(a.data)){if(t===s.Ho.VERTEX_SHADER&&S(r,e))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");a.data in c||(c[a.data]=M(r,i,a.data)),a.data=c[a.data]}}}for(let e=r.length-1;e>=0;--e){const t=r[e];if("preprocessor"===t.type){const o=t.data.match(/\#extension\s+(.*)\:/);if(o&&o[1]&&y.includes(o[1].trim())){const t=r[e+1];r.splice(e,t&&"whitespace"===t.type?2:1)}const a=t.data.match(/\#ifdef\s+(.*)/);a&&a[1]&&y.includes(a[1].trim())&&(t.data="#if 1");const n=t.data.match(/\#ifndef\s+(.*)/);n&&n[1]&&y.includes(n[1].trim())&&(t.data="#if 0")}}return function(e,t){return t}(0,function(e){return e.map((e=>"eof"!==e.type?e.data:"")).join("")}(r))}new Map;class C{constructor(e,t,r,o,a=new Map){this._context=e,this._locations=o,this._uniformBlockBindings=a,this._refCount=1,this._compiled=!1,this._nameToUniformLocation={},this._nameToUniform1={},this._nameToUniform1v=new Map,this._nameToUniform2=new Map,this._nameToUniform3=new Map,this._nameToUniform4=new Map,this._nameToUniformMatrix3=new Map,this._nameToUniformMatrix4=new Map,e||console.error("RenderingContext isn't initialized!"),0===t.length&&console.error("Shaders source should not be empty!"),this._context.type===i.zO.WEBGL2&&(t=P(t,s.Ho.VERTEX_SHADER),r=P(r,s.Ho.FRAGMENT_SHADER)),this._vShader=L(this._context,s.Ho.VERTEX_SHADER,t),this._fShader=L(this._context,s.Ho.FRAGMENT_SHADER,r),this._vShader&&this._fShader||console.error("Error loading shaders!"),this._context.instanceCounter.increment(s._g.Shader,this),(0,n.CG)()&&(this.vertexShader=t,this.fragmentShader=r)}get glName(){if((0,a.pC)(this._glName))return this._glName;if((0,a.Wi)(this._vShader))return null;const e=this._context.gl,t=e.createProgram();if(e.attachShader(t,this._vShader),e.attachShader(t,this._fShader),this._locations.forEach(((r,o)=>e.bindAttribLocation(t,r,o))),e.linkProgram(t),(0,n.CG)()&&!e.getProgramParameter(t,e.LINK_STATUS)&&console.error(`Could not link shader\nvalidated: ${e.getProgramParameter(t,e.VALIDATE_STATUS)}, gl error ${e.getError()}, vertex: ${e.getShaderParameter(this._vShader,e.COMPILE_STATUS)}, fragment: ${e.getShaderParameter(this._fShader,e.COMPILE_STATUS)}, info log: ${e.getProgramInfoLog(t)}, vertex source: ${this.vertexShader}, fragment source: ${this.fragmentShader}`),this._context.type===i.zO.WEBGL2){const r=e;for(const[e,o]of this._uniformBlockBindings){const a=r.getUniformBlockIndex(t,e);a<4294967295&&r.uniformBlockBinding(t,a,o)}}return this._glName=t,this._context.instanceCounter.increment(s._g.Program,this),t}get hasGLName(){return(0,a.pC)(this._glName)}get isCompiled(){if(this._compiled)return!0;const e=this._context.gl.getExtension("KHR_parallel_shader_compile");return null==e?(this._compiled=!0,!0):(this._compiled=!!this._context.gl.getProgramParameter(this.glName,e.COMPLETION_STATUS_KHR),this._compiled)}dispose(){if(--this._refCount>0)return;const e=this._context.gl;this._vShader&&(e.deleteShader(this._vShader),this._vShader=null,this._context.instanceCounter.decrement(s._g.Shader,this)),this._fShader&&(e.deleteShader(this._fShader),this._fShader=null),this._glName&&(e.deleteProgram(this._glName),this._glName=null,this._context.instanceCounter.decrement(s._g.Program,this))}ref(){++this._refCount}_getUniformLocation(e){return void 0===this._nameToUniformLocation[e]&&(++k.numUniforms,this._nameToUniformLocation[e]=this._context.gl.getUniformLocation(this.glName,e)),this._nameToUniformLocation[e]}hasUniform(e){return null!==this._getUniformLocation(e)}setUniform1i(e,t){const r=this._nameToUniform1[e];void 0!==r&&t===r||(this._context.gl.uniform1i(this._getUniformLocation(e),t),this._nameToUniform1[e]=t)}setUniform1iv(e,t){b(this._nameToUniform1v,e,t)&&this._context.gl.uniform1iv(this._getUniformLocation(e),t)}setUniform2iv(e,t){b(this._nameToUniform2,e,t)&&this._context.gl.uniform2iv(this._getUniformLocation(e),t)}setUniform3iv(e,t){b(this._nameToUniform3,e,t)&&this._context.gl.uniform3iv(this._getUniformLocation(e),t)}setUniform4iv(e,t){b(this._nameToUniform4,e,t)&&this._context.gl.uniform4iv(this._getUniformLocation(e),t)}setUniform1f(e,t){const r=this._nameToUniform1[e];void 0!==r&&t===r||(this._context.gl.uniform1f(this._getUniformLocation(e),t),this._nameToUniform1[e]=t)}setUniform1fv(e,t){b(this._nameToUniform1v,e,t)&&this._context.gl.uniform1fv(this._getUniformLocation(e),t)}setUniform2f(e,t,r){const o=this._nameToUniform2.get(e);void 0===o?(this._context.gl.uniform2f(this._getUniformLocation(e),t,r),this._nameToUniform2.set(e,[t,r])):t===o[0]&&r===o[1]||(this._context.gl.uniform2f(this._getUniformLocation(e),t,r),o[0]=t,o[1]=r)}setUniform2fv(e,t){b(this._nameToUniform2,e,t)&&this._context.gl.uniform2fv(this._getUniformLocation(e),t)}setUniform3f(e,t,r,o){const a=this._nameToUniform3.get(e);void 0===a?(this._context.gl.uniform3f(this._getUniformLocation(e),t,r,o),this._nameToUniform3[e]=[t,r,o]):t===a[0]&&r===a[1]&&o===a[2]||(this._context.gl.uniform3f(this._getUniformLocation(e),t,r,o),a[0]=t,a[1]=r,a[2]=o)}setUniform3fv(e,t){b(this._nameToUniform3,e,t)&&this._context.gl.uniform3fv(this._getUniformLocation(e),t)}setUniform4f(e,t,r,o,a){const n=this._nameToUniform4.get(e);void 0===n?(this._context.gl.uniform4f(this._getUniformLocation(e),t,r,o,a),this._nameToUniform4.set(e,[t,r,o,a])):void 0!==n&&t===n[0]&&r===n[1]&&o===n[2]&&a===n[3]||(this._context.gl.uniform4f(this._getUniformLocation(e),t,r,o,a),n[0]=t,n[1]=r,n[2]=o,n[3]=a)}setUniform4fv(e,t){b(this._nameToUniform4,e,t)&&this._context.gl.uniform4fv(this._getUniformLocation(e),t)}setUniformMatrix3fv(e,t,r=!1){b(this._nameToUniformMatrix3,e,t)&&this._context.gl.uniformMatrix3fv(this._getUniformLocation(e),r,t)}setUniformMatrix4fv(e,t,r=!1){b(this._nameToUniformMatrix4,e,t)&&this._context.gl.uniformMatrix4fv(this._getUniformLocation(e),r,t)}stop(){}}function L(e,t,r){const o=e.gl,a=o.createShader(t);return o.shaderSource(a,r),o.compileShader(a),(0,n.CG)()&&!o.getShaderParameter(a,o.COMPILE_STATUS)&&(console.error("Compile error in ".concat(t===s.Ho.VERTEX_SHADER?"vertex":"fragment"," shader")),console.error(o.getShaderInfoLog(a)),console.error(function(e){let t=2;return e.replace(/\n/g,(()=>"\n"+function(e){return e>=1e3?e.toString():("  "+e).slice(-3)}(t++)+":"))}(r))),k.enabled&&(k.compiledLOC+=r.match(/\n/g).length+1),a}function b(e,t,r){const a=e.get(t);return a?(0,o.Vx)(a,r):(e.set(t,Array.from(r)),!0)}const k={compiledLOC:0,numUniforms:0,enabled:!1}},84172:(e,t,r)=>{r.d(t,{H:()=>a});var o=r(69609);function a(e,t,r=""){return new o.$(e,r+t.shaders.vertexShader,r+t.shaders.fragmentShader,t.attributes)}},78311:(e,t,r)=>{r.d(t,{B:()=>o});class o{constructor(e){this.readFile=e}resolveIncludes(e){return this._resolve(e)}_resolve(e,t=new Map){if(t.has(e))return t.get(e);const r=this._read(e);if(!r)throw new Error(`cannot find shader file ${e}`);const o=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let a=o.exec(r);const n=[];for(;null!=a;)n.push({path:a[1],start:a.index,length:a[0].length}),a=o.exec(r);let i=0,s="";return n.forEach((e=>{s+=r.slice(i,e.start),s+=t.has(e.path)?"":this._resolve(e.path,t),i=e.start+e.length})),s+=r.slice(i),t.set(e,s),s}_read(e){return this.readFile(e)}}}}]);