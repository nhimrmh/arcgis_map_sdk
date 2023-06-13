"use strict";(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[8306],{6415:(e,t,i)=>{i.d(t,{I:()=>w,b:()=>v});var a=i(61681),r=i(69666),s=i(35031),n=i(5885),o=i(4731),l=i(73393),h=i(44391),d=i(32394),c=i(84614),u=i(93072),p=i(24603),g=i(23410),y=i(3961),m=i(15176),f=i(42842),_=i(21414);function v(e){const t=new y.kG,{vertex:i,fragment:v}=t;return(0,c.Sv)(i,e),t.include(o.w,e),t.attributes.add(_.T.POSITION,"vec3"),t.attributes.add(_.T.UV0,"vec2"),t.varyings.add("vpos","vec3"),e.hasMultipassTerrain&&t.varyings.add("depth","float"),i.uniforms.add(new u.A("textureCoordinateScaleFactor",(e=>(0,a.pC)(e.texture)&&(0,a.pC)(e.texture.descriptor.textureCoordinateScaleFactor)?e.texture.descriptor.textureCoordinateScaleFactor:r.O))),i.code.add(g.H`
    void main(void) {
      vpos = position;
      ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0 * textureCoordinateScaleFactor;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),t.include(n.f5,e),t.include(l.l,e),v.uniforms.add([new m.A("tex",(e=>e.texture)),new p.p("opacity",(e=>e.opacity))]),t.varyings.add("vTexCoord","vec2"),e.output===s.H.Alpha?v.code.add(g.H`
    void main() {
      discardBySlice(vpos);
      ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture2D(tex, vTexCoord).a * opacity;
      if (alpha  < ${g.H.float(h.F)}) {
        discard;
      }

      gl_FragColor = vec4(alpha);
    }
    `):(v.include(d.Y),v.code.add(g.H`
    void main() {
      discardBySlice(vpos);
      ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
      gl_FragColor = texture2D(tex, vTexCoord) * opacity;

      if (gl_FragColor.a < ${g.H.float(h.F)}) {
        discard;
      }

      gl_FragColor = highlightSlice(gl_FragColor, vpos);
      ${e.transparencyPassType===f.A.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    }
    `)),t}const w=Object.freeze(Object.defineProperty({__proto__:null,build:v},Symbol.toStringTag,{value:"Module"}))},78306:(e,t,i)=>{i.d(t,{Z:()=>F});var a=i(36663),r=i(67979),s=i(23148),n=i(13802),o=i(61681),l=i(78668),h=i(76868),d=i(81977),c=(i(7283),i(7753),i(40266)),u=i(91772),p=i(24568),g=i(43977),y=i(19654),m=i(85799),f=i(47481),_=i(75135),v=i(45467),w=i(6087),x=i(21414);function S(e,t){return(0,w.g7)(e,[[t[0],t[1],-1],[t[2],t[1],-1],[t[2],t[3],-1],[t[0],t[3],-1]])}const b=[0,0,1];var C=i(53986),R=i(3289),T=i(9812),A=i(79341),P=i(13304),E=i(44101),I=i(53448),O=i(79591),M=i(26216),D=i(55068),L=i(42780),H=i(91907);let N=class extends((0,D.Z)((0,y.A)(M.Z))){constructor(){super(...arguments),this.drapeSourceType=g.Lw.RasterImage,this.updatePolicy=I.j.SYNC,this.fullExtentInLocalViewSpatialReference=null,this.maximumDataResolution=null,this._images=new Array,this._extents=new Array,this._overlays=new Array,this.updateWhenStationary=!0,this._drapeSourceRenderer=null,this.refreshDebounced=(0,l.Ds)((async e=>{this.destroyed||await this._doRefresh(e).catch((e=>{(0,l.D_)(e)||n.Z.getLogger(this.declaredClass).error(e)}))}),2e3)}initialize(){this._drapeSourceRenderer=this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this),this.handles.add((0,s.kB)((()=>this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this)))),this.addResolvingPromise((0,C.E)(this).then((e=>this._set("fullExtentInLocalViewSpatialReference",e)))),this.updatingHandles.add((()=>this.suspended),(()=>this._suspendedChangeHandler())),this.handles.add(this.view.resourceController.scheduler.registerIdleStateCallbacks((()=>{this._isScaleRangeActive()&&this.notifyChange("suspended")}),(()=>{}))),this._isScaleRangeLayer()&&this.updatingHandles.add((()=>this.layer.effectiveScaleRange),(()=>this.notifyChange("suspended")))}destroy(){this.clear()}setDrapingExtent(e,t){this._spatialReference=t,e.forEach((e=>{this._overlays[e.index]=e,this._updateImageExtent(e)}))}_updateImageExtent(e){const t=this._clippedExtent(e.extent,G);if((0,o.Wi)(t))return;const i=function(e,t,i){const a=(0,p.bf)(e)/(0,p.Cb)(e),r={width:i,height:i};return a>1.0001?r.height=i/a:a<.9999&&(r.width=i*a),r.width=Math.round(r.width/((0,p.bf)(e)/(0,p.bf)(t))),r.height=Math.round(r.height/((0,p.Cb)(e)/(0,p.Cb)(t))),r}(e.extent,t,e.resolution);let a=e.pixelRatio*this.view.state.pixelRatio;const{layer:r}=this;if("imageMaxWidth"in r&&null!=r.imageMaxWidth||"imageMaxHeight"in r&&null!=r.imageMaxHeight){const e=r.imageMaxWidth,t=r.imageMaxHeight;if(i.width>e){const t=e/i.width;i.height=Math.floor(i.height*t),i.width=e,a*=t}if(i.height>t){const e=t/i.height;i.width=Math.floor(i.width*e),i.height=t,a*=e}}const s=this._extents[e.index];s&&(0,p.fS)(s.extent,t)&&this._imageSizeEquals(t,s.imageSize,i)||(this._extents[e.index]={extent:(0,p.Ue)(t),imageSize:i,pixelRatio:a},this.suspended||this._fetch(e.index).catch((e=>{(0,l.D_)(e)||n.Z.getLogger(this.declaredClass).error(e)})))}clear(){for(let e=0;e<this._images.length;e++)this._clearImage(e)}async doRefresh(){return this._doRefresh()}async _doRefresh(e){if(this.suspended)return;const t=[];for(let i=0;i<this._extents.length;i++)this._extents[i]&&t.push(this._fetch(i,e));await(0,l.as)(t)}canResume(){if(!super.canResume())return!1;const e=this.layer;if(this._isScaleRangeActive()){const{minScale:t,maxScale:i}=e.effectiveScaleRange,a=this.view.scale;if(a<i||t>0&&a>t)return!1}return!0}isUpdating(){return this._images.some((e=>!!e.loadingPromise))}async processResult(e,t,i){(t instanceof HTMLImageElement||t instanceof HTMLCanvasElement)&&(e.image=t)}findExtentInfoAt(e){for(const t of this._extents){const i=t.extent;if(new u.Z(i[0],i[1],i[2],i[3],this._spatialReference).contains(e))return t}return null}getFetchOptions(){}async redraw(e,t){await(0,r.Ed)(this._images,(async(i,a)=>{i&&(await e(i,t),await this._createStageObjects(a,i.image,t))}))}_imageSizeEquals(e,t,i){if(!this.maximumDataResolution)return!1;const a=(0,p.bf)(e)/this.maximumDataResolution.x,r=(0,p.Cb)(e)/this.maximumDataResolution.y,s=a/t.width,n=r/t.height,o=a/i.width,l=r/i.height,h=Math.abs(s-o),d=Math.abs(n-l),c=R.Z.TESTS_DISABLE_OPTIMIZATIONS?0:1.5;return h<=c&&d<=c}async _fetch(e,t){if(this.suspended)return;const i=this._extents[e],a=i.extent;this._images[e]||(this._images[e]={texture:null,material:null,renderGeometry:null,loadingPromise:null,loadingAbortController:null,image:null,pixelData:null,renderExtent:(0,p.Ue)(a)});const r=this._images[e];r.loadingAbortController=(0,o.IM)(r.loadingAbortController);const s=new u.Z(a[0],a[1],a[2],a[3],this._spatialReference);if(0===s.width||0===s.height)return void this._clearImage(e);const h=new AbortController;r.loadingAbortController=h,(0,l.fu)(t,(()=>h.abort()));const d=h.signal,c=this._waitFetchReady(d).then((async()=>{const t={requestAsImageElement:!0,pixelRatio:this._overlays[e].pixelRatio,...this.getFetchOptions(),signal:d},{height:a,width:r}=i.imageSize;return this.layer.fetchImage(s,r,a,t)})).then((e=>{if((0,l.Hc)(d))throw n.Z.getLogger(this.declaredClass).warnOnce("A call to fetchImage resolved even though the request was aborted. fetchImage should not resolve if options.signal.aborted is true."),(0,l.zE)();return this.processResult(r,e)})).then((()=>{(0,p.JG)(r.renderExtent,a)})).finally((()=>{c===r.loadingPromise&&(r.loadingPromise=null,r.loadingAbortController=null)}));r.loadingPromise=c,this.notifyChange("updating"),await c.then((async()=>{if(d.aborted)throw(0,l.zE)();await this._createStageObjects(e,r.image,d),this.notifyChange("updating")})).catch((e=>{throw e&&!(0,l.D_)(e)&&n.Z.getLogger(this.declaredClass).error(e),this.notifyChange("updating"),e}))}_clearImage(e){const t=this._images[e];if(t){(0,o.pC)(t.renderGeometry)&&(this._drapeSourceRenderer.removeGeometries([t.renderGeometry],A.T.UPDATE),t.renderGeometry=null);const e=this.view._stage;e.remove(t.texture),t.texture=null,e.remove(t.material),t.material=null,t.loadingAbortController=(0,o.IM)(t.loadingAbortController),t.loadingPromise=null,t.image=null,t.pixelData=null}}async _createStageObjects(e,t,i){const a=this.view._stage,s=this._images[e],n=()=>{a.remove(s.texture),s.texture=null,(0,o.pC)(s.renderGeometry)&&(this._drapeSourceRenderer.removeGeometries([s.renderGeometry],A.T.UPDATE),s.renderGeometry=null)};if(t){const h=new E.x(t,{width:t.width,height:t.height,preMultiplyAlpha:!0,wrap:{s:H.e8.CLAMP_TO_EDGE,t:H.e8.CLAMP_TO_EDGE}});let d;if(await(0,r.q6)(this._images[e===T.fu.INNER?T.fu.OUTER:T.fu.INNER].loadingPromise),(0,l.k_)(i),n(),a.add(h),await a.loadImmediate(h),s.texture=h,(0,o.Wi)(s.material)?(s.material=new O.j({transparent:!0,textureId:h.id}),a.add(s.material)):s.material.setParameters({textureId:h.id}),e===T.fu.INNER)d=S(s.material,s.renderExtent);else{const e=this._images[0].renderExtent;if(!e)return void n();d=function(e,t,i){if(!(0,p.kK)(t,i))return S(e,i);const a=[t[1]-i[1],Math.min(t[3],i[3])-Math.max(t[1],i[1]),i[3]-t[3],123456],r=[t[0]-i[0],Math.min(t[2],i[2])-Math.max(t[0],i[0]),i[2]-t[2],123456],s=i[2]-i[0],n=i[3]-i[1],o=r[0]>0&&r[2]>0?3:2,l=a[0]>0&&a[2]>0?3:2,h=(l+1)*(o+1),d=(0,f.bg)(3*h),c=(0,_.xx)(2*h),u=new Array(6*(l*o-1));let g=0,y=0,w=0,C=0,R=0;for(let e=0;e<4;e++){const t=a[e];if(t<=0)continue;let l=0;for(let t=0;t<4;t++){const a=r[t];a<=0||(d[y++]=i[0]+l,d[y++]=i[1]+g,d[y++]=-1,c[w++]=l/s,c[w++]=g/n,t<3&&e<3&&(1!==t||1!==e)&&(u[R++]=C,u[R++]=C+1,u[R++]=C+o+1,u[R++]=C+1,u[R++]=C+o+2,u[R++]=C+o+1),C++,l+=a)}g+=t}const T=new Array(u.length);return new v.Z(e,[[x.T.POSITION,new m.a(d,3,!0)],[x.T.NORMAL,new m.a(b,3,!0)],[x.T.UV0,new m.a(c,2,!0)]],[[x.T.POSITION,u],[x.T.NORMAL,T],[x.T.UV0,u]])}(s.material,e,s.renderExtent)}s.renderGeometry=new P.z(d),s.renderGeometry.localOrigin=this._overlays[e].renderLocalOrigin,this._drapeSourceRenderer.addGeometries([s.renderGeometry],A.T.UPDATE)}else n(),a.remove(s.material),s.material=null}_isScaleRangeLayer(){return"effectiveScaleRange"in this.layer}_isScaleRangeActive(){const e=this.layer;if(!this._isScaleRangeLayer())return!1;const{minScale:t,maxScale:i}=e.effectiveScaleRange;return(0,L.Av)(t,i)}_clippedExtent(e,t){if("local"!==this.view.viewingMode)return(0,p.JG)(t,e);const i=this.view.basemapTerrain;return i.ready?(0,p.jV)(e,i.extent,t):(0,p.JG)(t,e)}_suspendedChangeHandler(){this.suspended?this.clear():this.refreshDebounced()}async _waitFetchReady(e){await(0,h.N1)((()=>this.view.stationary),e),(0,l.k_)(e)}};(0,a._)([(0,d.Cb)()],N.prototype,"layer",void 0),(0,a._)([(0,d.Cb)()],N.prototype,"suspended",void 0),(0,a._)([(0,d.Cb)({readOnly:!0})],N.prototype,"fullExtentInLocalViewSpatialReference",void 0),(0,a._)([(0,d.Cb)()],N.prototype,"updating",void 0),N=(0,a._)([(0,c.j)("esri.views.3d.layers.DynamicLayerView3D")],N);const F=N,G=(0,p.Ue)()},19654:(e,t,i)=>{i.d(t,{A:()=>d});var a=i(36663),r=i(23148),s=i(78668),n=i(76868),o=i(81977),l=(i(7283),i(7753),i(40266)),h=i(64862);const d=e=>{let t=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(e){super.postscript(e),(0,h.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,t=e.signal;this.handles.add((0,r.kB)((()=>e.abort()))),await(0,n.N1)((()=>this.view.defaultsFromMap?.heightModelInfoReady),t),(0,s.k_)(t);const i=(0,h.Wt)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!e||!e.minScale||!e.maxScale||e.minScale>=e.maxScale)}getSuspendInfo(){const e=super.getSuspendInfo(),t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return t&&t.minScale&&t.maxScale&&t.minScale<t.maxScale&&(e.outsideScaleRange=!0),e}};return(0,a._)([(0,o.Cb)()],t.prototype,"view",void 0),(0,a._)([(0,o.Cb)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,a._)([(0,l.j)("esri.views.3d.layers.LayerView3D")],t),t}},53986:(e,t,i)=>{i.d(t,{E:()=>n});var a=i(61681),r=i(39536),s=i(8060);function n(e){const t=e.view.spatialReference,i=e.layer.fullExtent,n=(0,a.pC)(i)&&i.spatialReference;if((0,a.Wi)(i)||!n)return Promise.resolve(null);if(n.equals(t))return Promise.resolve(i.clone());const o=(0,r.iV)(i,t);return(0,a.pC)(o)?Promise.resolve(o):e.view.state.isLocal?(0,s.projectGeometry)(i,t,e.layer.portalItem).then((t=>!e.destroyed&&t?t:null)).catch((()=>null)):Promise.resolve(null)}},79591:(e,t,i)=>{i.d(t,{j:()=>A});var a=i(35031),r=i(70984),s=i(80776),n=i(7358),o=i(12045),l=i(46378),h=i(79601),d=i(85266),c=i(10056),u=i(36663),p=(i(23410),i(9969)),g=i(52756),y=i(67197),m=i(5474),f=i(95194),_=i(79040),v=i(42842),w=i(86942),x=i(6415),S=i(91907),b=i(17346);class C extends g.A{initializeProgram(e){return new f.$(e.rctx,C.shader.get().build(this.configuration),m.i)}_setPipelineState(e,t){const i=this.configuration,r=e===v.A.NONE,s=e===v.A.FrontFace;return(0,b.sm)({blending:i.output!==a.H.Color&&i.output!==a.H.Alpha||!i.transparent?null:r?R:(0,o.j7)(e),culling:(0,b.zp)(i.cullFace),depthTest:{func:(0,o.Bh)(e)},depthWrite:r?i.writeDepth?b.LZ:null:(0,o.K5)(e),colorWrite:b.BK,stencilWrite:i.hasOccludees?_.s3:null,stencilTest:i.hasOccludees?t?_.eD:_.RY:null,polygonOffset:r||s?null:(0,o.je)(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}C.shader=new p.J(x.I,(()=>i.e(7204).then(i.bind(i,47204))));const R=(0,b.if)(S.zi.ONE,S.zi.ONE_MINUS_SRC_ALPHA);class T extends w.W{constructor(){super(...arguments),this.output=a.H.Color,this.cullFace=r.Vr.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=v.A.NONE,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}}(0,u._)([(0,y.o)({count:a.H.COUNT})],T.prototype,"output",void 0),(0,u._)([(0,y.o)({count:r.Vr.COUNT})],T.prototype,"cullFace",void 0),(0,u._)([(0,y.o)()],T.prototype,"hasSlicePlane",void 0),(0,u._)([(0,y.o)()],T.prototype,"transparent",void 0),(0,u._)([(0,y.o)()],T.prototype,"enableOffset",void 0),(0,u._)([(0,y.o)()],T.prototype,"writeDepth",void 0),(0,u._)([(0,y.o)()],T.prototype,"hasOccludees",void 0),(0,u._)([(0,y.o)({count:v.A.COUNT})],T.prototype,"transparencyPassType",void 0),(0,u._)([(0,y.o)()],T.prototype,"hasMultipassTerrain",void 0),(0,u._)([(0,y.o)()],T.prototype,"cullAboveGround",void 0);class A extends c.c{constructor(e){super(e,new E),this.supportsEdges=!0,this._configuration=new T}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<o.ve,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration}requiresSlot(e,t){return(t===a.H.Color||t===a.H.Alpha||t===a.H.Highlight)&&(e===l.r.DRAPED_MATERIAL||(t===a.H.Highlight?e===l.r.OPAQUE_MATERIAL:e===(this.parameters.transparent?this.parameters.writeDepth?l.r.TRANSPARENT_MATERIAL:l.r.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:l.r.OPAQUE_MATERIAL)))}createGLMaterial(e){return new P(e)}createBufferWriter(){return new h.G(d.W1)}}class P extends s.F{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(C,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output!==a.H.Color&&this._output!==a.H.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class E extends n.Mt{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=r.Vr.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0}}},26216:(e,t,i)=>{i.d(t,{Z:()=>g});var a=i(36663),r=i(53443),s=i(31355),n=i(53280),o=i(86618),l=i(13802),h=i(61681),d=i(64189),c=i(81977),u=(i(7283),i(7753),i(40266));let p=class extends((0,n.p)((0,o.IG)((0,d.v)(s.Z.EventedMixin(r.Z))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";l.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e)}}))}get fullOpacity(){return(0,h.Pt)(this.get("layer.opacity"),1)*(0,h.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(e){this._overrideIfSome("visible",e)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,a._)([(0,c.Cb)()],p.prototype,"fullOpacity",null),(0,a._)([(0,c.Cb)()],p.prototype,"layer",void 0),(0,a._)([(0,c.Cb)()],p.prototype,"parent",void 0),(0,a._)([(0,c.Cb)({readOnly:!0})],p.prototype,"suspended",null),(0,a._)([(0,c.Cb)({readOnly:!0})],p.prototype,"suspendInfo",null),(0,a._)([(0,c.Cb)({readOnly:!0})],p.prototype,"legendEnabled",null),(0,a._)([(0,c.Cb)({type:Boolean,readOnly:!0})],p.prototype,"updating",null),(0,a._)([(0,c.Cb)({readOnly:!0})],p.prototype,"updatingProgress",null),(0,a._)([(0,c.Cb)()],p.prototype,"visible",null),(0,a._)([(0,c.Cb)()],p.prototype,"view",void 0),p=(0,a._)([(0,u.j)("esri.views.layers.LayerView")],p);const g=p},55068:(e,t,i)=>{i.d(t,{Z:()=>h});var a=i(36663),r=i(13802),s=i(78668),n=i(76868),o=i(81977),l=(i(7283),i(7753),i(40266));const h=e=>{let t=class extends e{initialize(){this.handles.add((0,n.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,s.D_)(e)||r.Z.getLogger(this.declaredClass).error(e)}))})),"RefreshableLayerView")}};return(0,a._)([(0,o.Cb)()],t.prototype,"layer",void 0),t=(0,a._)([(0,l.j)("esri.layers.mixins.RefreshableLayerView")],t),t}}}]);