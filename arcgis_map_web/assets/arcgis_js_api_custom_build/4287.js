(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[4287,1012,995],{71012:(t,e,i)=>{"use strict";function r(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function s(t,e,i){return t(i={path:e,exports:{},require:function(t,e){return n(null==e&&i.path)}},i.exports),i.exports}function n(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}i.d(e,{b:()=>n,c:()=>s,g:()=>r}),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self},5627:(t,e,i)=>{"use strict";i.d(e,{b:()=>o,l:()=>s,o:()=>n});var r=i(71012),s=(0,r.c)((function(t){var e;void 0!==(e=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"])&&(t.exports=e)})),n=(0,r.c)((function(t){var e;void 0!==(e=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"])&&(t.exports=e)})),o=(0,r.c)((function(t){var e;void 0!==(e=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"])&&(t.exports=e)}))},84570:(t,e,i)=>{"use strict";i.d(e,{Z:()=>l}),i(95830);var r=i(36544),s=i(8634),n=i(29581);const o=r.Z.getLogger("esri.views.webgl.FrameBufferObject");class a{constructor(t,e,i,r){if(this._context=t,this._glName=null,this._depthAttachment=null,this._stencilAttachment=null,this._colorAttachments=new Map,this._initialized=!1,this._desc={...e},t.instanceCounter.increment(4,this),i){let e;var o;if(Array.isArray(i))for(const r of i){const{attachmentPoint:i,texture:n}=r,o=n instanceof s.Z?n:new s.Z(t,n);e=o.descriptor,this._colorAttachments.set(i,o),this._validateColorAttachmentPoint(i),this._validateTextureDimensions(e,this._desc)}else i instanceof s.Z?(e=i.descriptor,this._colorAttachments.set(36064,i)):(e=i,this._colorAttachments.set(36064,new s.Z(t,i))),0!==(null==(o=this._desc)?void 0:o.colorTarget)&&console.error("Framebuffer is initialized with a texture however the descriptor indicates using a renderbuffer color attachment!"),this._validateTextureDimensions(e,this._desc)}if(r instanceof n.Z){var h;const t=null!=(h=this._desc.depthStencilTarget)?h:3;2===t?this._stencilAttachment=r:1===t||3===t?this._depthAttachment=r:console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER'),a._validateBufferDimensions(r.descriptor,this._desc)}else if(r){let t;this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!"),r instanceof s.Z?(this._depthStencilTexture=r,t=this._depthStencilTexture.descriptor):(t=r,this._depthStencilTexture=new s.Z(this._context,t)),this._validateTextureDimensions(t,this._desc)}}dispose(){if(!this._desc)return;const t=this._context.getBoundFramebufferObject();this._disposeColorAttachments(),this._disposeDepthStencilAttachments(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(t),this._context.instanceCounter.decrement(4,this),this._desc=null}get glName(){return this._glName}get descriptor(){return this._desc}get colorTexture(){const t=this._colorAttachments.get(36064);return t&&t instanceof s.Z?t:null}get colorAttachment(){return this._colorAttachments.get(36064)}get depthStencilAttachment(){return this._depthStencilTexture||this._depthAttachment||this._stencilAttachment}get depthStencilTexture(){return this._depthStencilTexture}get width(){return this._desc.width}get height(){return this._desc.height}getColorTexture(t){const e=this._colorAttachments.get(t);return e&&e instanceof s.Z?e:null}attachColorTexture(t,e=36064){if(!t)return;this._validateColorAttachmentPoint(e);const i=t.descriptor;if(this._validateTextureDimensions(i,this._desc),this._disposeColorAttachments(),this._initialized){this._context.bindFramebuffer(this);const i=this._context.gl;i.framebufferTexture2D(i.FRAMEBUFFER,e,i.TEXTURE_2D,t.glName,0)}this._colorAttachments.set(e,t)}detachColorTexture(t=36064){const e=this._colorAttachments.get(t);if(e instanceof s.Z){const i=e;if(this._initialized){this._context.bindFramebuffer(this);const e=this._context.gl;e.framebufferTexture2D(e.FRAMEBUFFER,t,e.TEXTURE_2D,null,0)}return this._colorAttachments.delete(t),i}}attachDepthStencilTexture(t){if(!t)return;const e=t.descriptor;if(34041!==e.pixelFormat&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),34042!==e.dataType&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),this._validateTextureDimensions(e,this._desc),this._desc.depthStencilTarget&&4!==this._desc.depthStencilTarget&&(this._desc.depthStencilTarget=4),this._disposeDepthStencilAttachments(),this._initialized){this._context.bindFramebuffer(this);const e=this._context.gl;e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,t.glName,0)}this._depthStencilTexture=t}detachDepthStencilTexture(){const t=this._depthStencilTexture;if(t&&this._initialized){this._context.bindFramebuffer(this);const t=this._context.gl;this._context.gl.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,null,0)}return this._depthStencilTexture=null,t}attachDepthStencilBuffer(t){if(!t)return;const e=t.descriptor;if(34041!==e.internalFormat&&33189!==e.internalFormat&&console.error("Depth/Stencil buffer must have correct internalFormat"),a._validateBufferDimensions(e,this._desc),this._disposeDepthStencilAttachments(),this._desc.depthStencilTarget=34041===e.internalFormat?3:1,this._initialized){this._context.bindFramebuffer(this);const e=this._context.gl,i=1===this._desc.depthStencilTarget?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,t.glName)}this._depthAttachment=t}detachDepthStencilBuffer(){const t=this._context.gl,e=this._depthAttachment;if(e&&this._initialized){this._context.bindFramebuffer(this);const e=1===this._desc.depthStencilTarget?t.DEPTH_ATTACHMENT:t.DEPTH_STENCIL_ATTACHMENT;t.framebufferRenderbuffer(t.FRAMEBUFFER,e,t.RENDERBUFFER,null)}return this._depthAttachment=null,e}copyToTexture(t,e,i,r,s,n,o){(t<0||e<0||s<0||n<0)&&console.error("Offsets cannot be negative!"),(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!");const a=this._desc,h=o.descriptor;3553!==o.descriptor.target&&console.error("Texture target must be TEXTURE_2D!"),(t+i>a.width||e+r>a.height||s+i>h.width||n+r>h.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const l=this._context;l.bindTexture(o,0),l.bindFramebuffer(this),l.gl.copyTexSubImage2D(3553,0,s,n,t,e,i,r)}readPixels(t,e,i,r,s,n,o){(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!"),o||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(t,e,i,r,s,n,o)}resize(t,e){const i=this._desc;if(i.width!==t||i.height!==e){if(!this._initialized)return i.width=t,i.height=e,this._colorAttachments.forEach((i=>{i&&i.resize(t,e)})),void(this._depthStencilTexture&&this._depthStencilTexture.resize(t,e));i.width=t,i.height=e,this._colorAttachments.forEach((i=>{i&&i.resize(t,e)})),null!=this._depthStencilTexture?this._depthStencilTexture.resize(t,e):(this._depthAttachment||this._stencilAttachment)&&(this._depthAttachment&&this._depthAttachment.resize(t,e),this._stencilAttachment&&this._stencilAttachment.resize(t,e)),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1}}initializeAndBind(){var t,e,i,r;const o=this._context.gl;if(this._initialized)return void o.bindFramebuffer(o.FRAMEBUFFER,this.glName);this._glName&&o.deleteFramebuffer(this._glName);const a=this._context,l=o.createFramebuffer(),c=this._desc,d=null!=(t=c.colorTarget)?t:1,_=null!=(e=c.width)?e:1,u=null!=(i=c.height)?i:1;if(o.bindFramebuffer(o.FRAMEBUFFER,l),0===this._colorAttachments.size)if(0===d)this._colorAttachments.set(36064,h(a,c));else{const t=new n.Z(a,{internalFormat:32854,width:_,height:u});this._colorAttachments.set(36064,t)}this._colorAttachments.forEach(((t,e)=>{t&&(t instanceof s.Z?o.framebufferTexture2D(o.FRAMEBUFFER,e,o.TEXTURE_2D,t.glName,0):o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,t.glName))}));const p=null!=(r=c.depthStencilTarget)?r:0;switch(p){case 1:case 3:{this._depthAttachment||(this._depthAttachment=new n.Z(a,{internalFormat:1===c.depthStencilTarget?33189:34041,width:_,height:u}));const t=1===p?o.DEPTH_ATTACHMENT:o.DEPTH_STENCIL_ATTACHMENT;o.framebufferRenderbuffer(o.FRAMEBUFFER,t,o.RENDERBUFFER,this._depthAttachment.glName);break}case 2:this._stencilAttachment||(this._stencilAttachment=new n.Z(a,{internalFormat:36168,width:_,height:u})),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.STENCIL_ATTACHMENT,o.RENDERBUFFER,this._stencilAttachment.glName);break;case 4:if(!this._depthStencilTexture){a.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!");const t={target:3553,pixelFormat:34041,dataType:34042,samplingMode:9728,wrapMode:33071,width:_,height:u};this._depthStencilTexture=new s.Z(a,t)}o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,this._depthStencilTexture.glName,0)}this._glName=l,this._initialized=!0}_disposeColorAttachments(){this._colorAttachments.forEach(((t,e)=>{if(t instanceof s.Z){if(this._initialized){this._context.bindFramebuffer(this);const t=this._context.gl;t.framebufferTexture2D(t.FRAMEBUFFER,e,t.TEXTURE_2D,null,0)}t.dispose()}else if(t instanceof WebGLRenderbuffer){const i=this._context.gl;this._initialized&&(this._context.bindFramebuffer(this),i.framebufferRenderbuffer(i.FRAMEBUFFER,e,i.RENDERBUFFER,null)),this._context.gl.deleteRenderbuffer(t)}})),this._colorAttachments.clear()}_disposeDepthStencilAttachments(){const t=this._context.gl;if(this._depthAttachment){if(this._initialized){this._context.bindFramebuffer(this);const e=1===this._desc.depthStencilTarget?t.DEPTH_ATTACHMENT:t.DEPTH_STENCIL_ATTACHMENT;t.framebufferRenderbuffer(t.FRAMEBUFFER,e,t.RENDERBUFFER,null)}this._depthAttachment.dispose(),this._depthAttachment=null}this._stencilAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.STENCIL_ATTACHMENT,t.RENDERBUFFER,null)),this._stencilAttachment.dispose(),this._stencilAttachment=null),this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,null,0)),this._depthStencilTexture.dispose(),this._depthStencilTexture=null)}static _validateBufferDimensions(t,e){console.assert(t.width>=0&&t.height>=0),void 0!==e.width&&e.width>=0&&void 0!==e.height&&e.height>=0?e.width===t.width&&e.height===t.height||console.error("Renderbuffer dimensions must match the framebuffer's!"):(e.width=t.width,e.height=t.height)}_validateTextureDimensions(t,e){console.assert(t.width>=0&&t.height>=0),3553!==t.target&&console.error("Texture type must be TEXTURE_2D!"),void 0!==e.width&&e.width>=0&&void 0!==e.height&&e.height>=0?e.width===t.width&&e.height===t.height||console.error("Color attachment texture must match the framebuffer's!"):(e.width=t.width,e.height=t.height)}_validateColorAttachmentPoint(t){if(-1===a._MAX_COLOR_ATTACHMENTS){const t=this._context.capabilities.drawBuffers;if(t){const e=this._context.gl;a._MAX_COLOR_ATTACHMENTS=e.getParameter(t.MAX_COLOR_ATTACHMENTS)}else a._MAX_COLOR_ATTACHMENTS=1}const e=t-36064;e+1>a._MAX_COLOR_ATTACHMENTS&&o.error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${e+1}. Implementation supports up to ${a._MAX_COLOR_ATTACHMENTS} color attachments`)}}a._MAX_COLOR_ATTACHMENTS=-1;const h=(t,e)=>new s.Z(t,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:e.width,height:e.height}),l=a},29581:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});const r=class{constructor(t,e){this._context=t,this._desc=e,this._context.instanceCounter.increment(5,this);const i=this._context.gl;this.glName=i.createRenderbuffer(),this._context.bindRenderbuffer(this),i.renderbufferStorage(i.RENDERBUFFER,e.internalFormat,e.width,e.height)}get descriptor(){return this._desc}resize(t,e){const i=this._desc;if(i.width===t&&i.height===e)return;i.width=t,i.height=e;const r=this._context.gl;this._context.bindRenderbuffer(this),r.renderbufferStorage(r.RENDERBUFFER,i.internalFormat,i.width,i.height)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(5,this),this._context=null)}}},8634:(t,e,i)=>{"use strict";i.d(e,{Z:()=>a});var r=i(59472),s=i(33655),n=i(6091);class o{constructor(t,e,i=null){this._context=null,this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,t.instanceCounter.increment(0,this),this._context=t,this._descriptor={target:3553,samplingMode:9729,wrapMode:10497,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,...e},this.setData(i)}get glName(){return this._glName}get descriptor(){return this._descriptor}dispose(){if(this._context&&this._context.gl){if(this._glName){const t=this._context.gl;this._context.unbindTextureAllUnits(this),t.deleteTexture(this._glName),this._glName=null}this._context.instanceCounter.decrement(0,this),this._context=null}}release(){this.dispose()}resize(t,e){const i=this._descriptor;i.width===t&&i.height===e||(i.width=t,i.height=e,this.setData(null))}setData(t){if(!this._context||!this._context.gl)return;const e=this._context.gl;this._glName||(this._glName=e.createTexture()),void 0===t&&(t=null),null===t&&(this._descriptor.width=this._descriptor.width||4,this._descriptor.height=this._descriptor.height||4);const i=this._context.getBoundTexture(0);this._context.bindTexture(this,0);const s=this._descriptor;o._validateTexture(this._context,s),e.pixelStorei(e.UNPACK_ALIGNMENT,s.unpackAlignment),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,s.flipped?1:0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.preMultiplyAlpha?1:0);const n=s.pixelFormat;let a=s.internalFormat?s.internalFormat:n;if(t instanceof ImageData||t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement){let i=t.width,r=t.height;t instanceof HTMLVideoElement&&(i=t.videoWidth,r=t.videoHeight),s.width&&s.height&&console.assert(i===s.width&&r===s.height),e.texImage2D(e.TEXTURE_2D,0,a,n,s.dataType,t),s.hasMipmap&&this.generateMipmap(),void 0===s.width&&(s.width=i),void 0===s.height&&(s.height=r)}else{null!=s.width&&null!=s.height||console.error("Width and height must be specified!"),e.DEPTH24_STENCIL8&&a===e.DEPTH_STENCIL&&(a=e.DEPTH24_STENCIL8);let i=s.width,o=s.height;if(function(t){return(0,r.pC)(t)&&"type"in t&&"compressed"===t.type}(t)){const r=Math.round(Math.log(Math.max(i,o))/Math.LN2)+1;s.hasMipmap=s.hasMipmap&&r===t.levels.length;for(let r=0;;++r){const n=t.levels[Math.min(r,t.levels.length-1)];if(e.compressedTexImage2D(e.TEXTURE_2D,r,a,i,o,0,n),1===i&&1===o||!s.hasMipmap)break;i=Math.max(1,i>>1),o=Math.max(1,o>>1)}}else if((0,r.pC)(t))e.texImage2D(e.TEXTURE_2D,0,a,i,o,0,n,s.dataType,t),s.hasMipmap&&this.generateMipmap();else for(let t=0;e.texImage2D(e.TEXTURE_2D,t,a,i,o,0,n,s.dataType,null),(1!==i||1!==o)&&s.hasMipmap;++t)i=Math.max(1,i>>1),o=Math.max(1,o>>1)}o._applySamplingMode(e,this._descriptor),o._applyWrapMode(e,this._descriptor),o._applyAnisotropicFilteringParameters(this._context,this._descriptor),i&&this._context.bindTexture(i,0)}updateData(t,e,i,r,s,n){n||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const o=this._context.gl,a=this._descriptor,h=this._context.getBoundTexture(0);this._context.bindTexture(this,0),(e<0||i<0||r>a.width||s>a.height||e+r>a.width||i+s>a.height)&&console.error("An attempt to update out of bounds of the texture!"),o.pixelStorei(o.UNPACK_ALIGNMENT,a.unpackAlignment),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,a.flipped?1:0),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.preMultiplyAlpha?1:0),n instanceof ImageData||n instanceof HTMLImageElement||n instanceof HTMLCanvasElement||n instanceof HTMLVideoElement?o.texSubImage2D(o.TEXTURE_2D,t,e,i,a.pixelFormat,a.dataType,n):o.texSubImage2D(o.TEXTURE_2D,t,e,i,r,s,a.pixelFormat,a.dataType,n),this._context.bindTexture(h,0)}generateMipmap(){const t=this._descriptor;t.hasMipmap||(t.hasMipmap=!0,this._samplingModeDirty=!0,o._validateTexture(this._context,t)),9729===t.samplingMode?(this._samplingModeDirty=!0,t.samplingMode=9985):9728===t.samplingMode&&(this._samplingModeDirty=!0,t.samplingMode=9984);const e=this._context.getBoundTexture(0);this._context.bindTexture(this,0);const i=this._context.gl;i.generateMipmap(i.TEXTURE_2D),this._context.bindTexture(e,0)}setSamplingMode(t){t!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=t,o._validateTexture(this._context,this._descriptor),this._samplingModeDirty=!0)}setWrapMode(t){t!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=t,o._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const t=this._context.gl,e=this._descriptor;this._samplingModeDirty&&(o._applySamplingMode(t,e),this._samplingModeDirty=!1),this._wrapModeDirty&&(o._applyWrapMode(t,e),this._wrapModeDirty=!1)}static _validateTexture(t,e){(e.width<0||e.height<0)&&console.error("Negative dimension parameters are not allowed!");const i=(0,s.wt)(e.width)&&(0,s.wt)(e.height);(0,n.Z)(t.gl)||i||("number"==typeof e.wrapMode?33071!==e.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):33071===e.wrapMode.s&&33071===e.wrapMode.t||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),e.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(t,e){let i=e.samplingMode,r=e.samplingMode;9985===i||9987===i?(i=9729,e.hasMipmap||(r=9729)):9984!==i&&9986!==i||(i=9728,e.hasMipmap||(r=9728)),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,i),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,r)}static _applyWrapMode(t,e){"number"==typeof e.wrapMode?(t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,e.wrapMode),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,e.wrapMode)):(t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,e.wrapMode.s),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,e.wrapMode.t))}static _applyAnisotropicFilteringParameters(t,e){if(null==e.maxAnisotropy)return;const i=t.capabilities.textureFilterAnisotropic;if(!i)return;const r=t.gl;r.texParameterf(r.TEXTURE_2D,i.TEXTURE_MAX_ANISOTROPY,e.maxAnisotropy)}}const a=o},6091:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});const r=function(t){return window.WebGL2RenderingContext&&t instanceof window.WebGL2RenderingContext}},23660:(t,e,i)=>{"use strict";i.d(e,{z:()=>s}),i(95830);var r=i(36544);function s(t){}i(32656),r.Z.getLogger("esri/views/webgl")}}]);