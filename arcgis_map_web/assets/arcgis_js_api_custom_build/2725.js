(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[2725],{83873:(e,t,i)=>{"use strict";function s(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function r(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){let t=0,i=0;for(let s=0;s<e.length;s++){const r=e[s].size;"number"==typeof r&&(t+=r,i++)}return t/i}(e.stops):t}function n(e,t){if(!t)return e;const i=t.filter((e=>"size"===e.type)).map((t=>{const{maxSize:i,minSize:s}=t;return(r(i,e)+r(s,e))/2}));let s=0;const n=i.length;if(0===n)return e;for(let e=0;e<n;e++)s+=i[e];const a=Math.floor(s/n);return Math.max(a,e)}function a(e){const t=e&&e.renderer,i="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return i;const r="visualVariables"in t?n(i,t.visualVariables):i;if("simple"===t.type)return s(r,t.symbol);if("unique-value"===t.type){let e=r;return t.uniqueValueInfos.forEach((t=>{e=s(e,t.symbol)})),e}if("class-breaks"===t.type){let e=r;return t.classBreakInfos.forEach((t=>{e=s(e,t.symbol)})),e}return t.type,r}i.d(t,{k:()=>a})},29720:(e,t,i)=>{"use strict";i.d(t,{e:()=>u}),i(95830);var s=i(98501),r=i(55955),n=i(27851),a=(i(5627),i(23660),i(8634)),l=(i(84570),i(56291)),h=i(64796);function o(e,t,i){const s={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return t&&i&&(s.width=t,s.height=i),new a.Z(e,s)}class u extends l.s{constructor(e=null,t,i=!0){super(),this.requestRenderOnSourceChangedEnabled=i,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.transforms={dvs:(0,r.c)()},this.blendFunction=t,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){this._source=e,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}setTransform(e){const t=(0,s.i)(this.transforms.dvs),[i,r]=e.toScreenNoRotation([0,0],this.x,this.y),a=this.resolution/this.pixelRatio/e.resolution,l=a*this.width,h=a*this.height,o=Math.PI*this.rotation/180;(0,s.a)(t,t,(0,n.f)(i,r)),(0,s.a)(t,t,(0,n.f)(l/2,h/2)),(0,s.r)(t,t,-o),(0,s.a)(t,t,(0,n.f)(-l/2,-h/2)),(0,s.j)(t,t,(0,n.f)(l,h)),(0,s.m)(this.transforms.dvs,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind({context:e},t){this._texture&&e.bindTexture(this._texture,t)}updateTexture({context:e}){var t;if(!this.stage)return null==(t=this._texture)||t.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=o(e,this.sourceWidth,this.sourceHeight):this._texture=o(e));const i=this.source;if(i){if(this._texture.resize(this.sourceWidth,this.sourceHeight),function(e){return e&&"render"in e}(i))if(i instanceof h.Z){const e=i.getRenderedRasterPixels();this._texture.setData(e.renderedRasterPixels)}else this._texture.setData(function(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}(i));else(function(e){return e&&!("render"in e)})(i)&&this._texture.setData(i);this.ready()}else this._texture.setData(null)}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}},36734:(e,t,i)=>{"use strict";i.d(t,{s:()=>u});var s=i(50897),r=i(31514),n=i(32825),a=i(55649),l=i(9793),h=i(29720);class o extends l.I{constructor(e,t,i,s=null){super(e,t,i,i),this.bitmap=new h.e(s,"standard",!1),this.bitmap.coordScale=i,this.bitmap.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){super.beforeRender(e),this.bitmap.beforeRender(e)}afterRender(e){super.afterRender(e),this.bitmap.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}setTransform(e,t){super.setTransform(e,t),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}class u extends a.Z{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(e){const t=this._tileInfoView.getTileBounds((0,s.Ue)(),e);return new o(e,t,this._tileInfoView.tileInfo.size)}destroyTile(){}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[n.U.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:r.jx.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===r.jx.MAP&&super.doRender(e)}}},64796:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});const s=class{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return this.pixelBlock?this.pixelBlock.width:0}get height(){return this.pixelBlock?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if(!t)return;const i=this.filter({pixelBlock:t}),s=i.pixelBlock.getAsRGBA(),r=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);r.data.set(s),e.putImageData(r,0,0)}getRenderedRasterPixels(){const e=this.filter({pixelBlock:this.pixelBlock});return{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}},55649:(e,t,i)=>{"use strict";i.d(t,{Z:()=>o});var s=i(31514),r=i(69822),n=i(87772),a=i(23956);const l=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col;class h extends a.Z{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(l),this.setStencilReference(),super.renderChildren(e)}createRenderParams(e){const{state:t}=e;return{...super.createRenderParams(e),requiredLevel:this._tileInfoView.getClosestInfoForScale(t.scale).level,displayLevel:this._tileInfoView.tileInfo.scaleToZoom(t.scale)}}prepareRenderPasses(e){const t=e.registerRenderPass({name:"stencil",brushes:[n.Z],drawPhase:s.jx.DEBUG|s.jx.MAP|s.jx.HIGHLIGHT,target:()=>this.getStencilTarget()}),i=e.registerRenderPass({name:"tileInfo",brushes:[r.Z],drawPhase:s.jx.DEBUG,target:()=>this.children,has:"esri-tiles-debug"});return[...super.prepareRenderPasses(e),t,i]}getStencilTarget(){return this.children}updateTransforms(e){for(const t of this.children){const i=this._tileInfoView.getTileResolution(t.key);t.setTransform(e,i)}}setStencilReference(){let e=1;for(const t of this.children)t.stencilRef=e++}}const o=h},65476:(e,t,i)=>{"use strict";i.d(t,{Y:()=>a});var s=i(56140),r=(i(95830),i(36544),i(68055),i(79881),i(87566)),n=(i(10923),i(57002),i(86035),i(36734));const a=e=>{let t=class extends e{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new n.s(this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){this.container.removeChild(this._bitmapView),this._bitmapView.removeAllChildren()}};return t=(0,s._)([(0,r.j)("esri.views.2d.layers.BitmapTileLayerView2D")],t),t}},81558:(e,t,i)=>{"use strict";i.d(t,{y:()=>k});var s=i(56140),r=(i(95830),i(36544),i(68055),i(79881)),n=i(87566),a=(i(10923),i(57002),i(86035),i(28293)),l=i(32105),h=i(80621),o=i(58385);let u=class extends o.wq{};u=(0,s._)([(0,n.j)("esri.views.layers.support.ClipArea")],u);const c=u;var d;let p=d=class extends c{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new d({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};(0,s._)([(0,r.Cb)({type:[Number,String],json:{write:!0}})],p.prototype,"left",void 0),(0,s._)([(0,r.Cb)({type:[Number,String],json:{write:!0}})],p.prototype,"right",void 0),(0,s._)([(0,r.Cb)({type:[Number,String],json:{write:!0}})],p.prototype,"top",void 0),(0,s._)([(0,r.Cb)({type:[Number,String],json:{write:!0}})],p.prototype,"bottom",void 0),(0,s._)([(0,r.Cb)({readOnly:!0})],p.prototype,"version",null),p=d=(0,s._)([(0,n.j)("esri.views.layers.support.ClipRect")],p);const y=p;var f,g=i(17149),m=i(39718),v=i(52937),w=i(53817),_=i(56885);i(36348);const b={base:m.Z,key:"type",typeMap:{extent:v.Z,polygon:w.Z}};let x=f=class extends c{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new f({geometry:this.geometry.clone()})}};(0,s._)([(0,r.Cb)({types:b,json:{read:_.im,write:!0}})],x.prototype,"geometry",void 0),(0,s._)([(0,r.Cb)({readOnly:!0})],x.prototype,"version",null),x=f=(0,s._)([(0,n.j)("esri.views.layers.support.Geometry")],x);const R=x;let I=class extends c{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};(0,s._)([(0,r.Cb)({type:[[[Number]]],json:{write:!0}})],I.prototype,"path",void 0),(0,s._)([(0,r.Cb)({readOnly:!0})],I.prototype,"version",null),I=(0,s._)([(0,n.j)("esri.views.layers.support.Path")],I);const C=I,T=a.Z.ofType({key:"type",base:c,typeMap:{rect:y,path:C,geometry:R}}),k=e=>{let t=class extends e{constructor(){super(...arguments),this.clips=new T,this.moving=!1,this.attached=!1,this.lastUpdateId=-1,this.updateRequested=!1}initialize(){var e;this.container||(this.container=new g.W),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([(0,h.S1)(this,"suspended",(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),!0),(0,h.S1)(this,["layer.opacity","container"],(()=>{var e,t;this.container&&(this.container.opacity=null!=(e=null==(t=this.layer)?void 0:t.opacity)?e:1)}),!0),(0,h.S1)(this,["layer.blendMode"],(e=>{this.container&&(this.container.blendMode=e)}),!0),(0,h.S1)(this,["layer.effect"],(e=>{this.container&&(this.container.effect=e)}),!0),this.clips.on("change",(()=>{this.container.clips=this.clips,this.notifyChange("clips")}))]),null!=(e=this.view)&&e.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{})):this.when().then((()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{}))}destroy(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}get updating(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}isVisibleAtScale(e){let t=!0;const i=this.layer,s=i.minScale,r=i.maxScale;if(null!=s&&null!=r){let i=!s,n=!r;!i&&e<=s&&(i=!0),!n&&e>=r&&(n=!0),t=i&&n}return t}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}isUpdating(){return!1}isRendering(){return!1}canResume(){return!!super.canResume()&&this.isVisibleAtScale(this.view.scale)}};return(0,s._)([(0,r.Cb)({type:T,set(e){const t=(0,l.Z)(e,this._get("clips"),T);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,s._)([(0,r.Cb)()],t.prototype,"moving",void 0),(0,s._)([(0,r.Cb)()],t.prototype,"attached",void 0),(0,s._)([(0,r.Cb)()],t.prototype,"container",void 0),(0,s._)([(0,r.Cb)()],t.prototype,"suspended",void 0),(0,s._)([(0,r.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,s._)([(0,r.Cb)()],t.prototype,"updateRequested",void 0),(0,s._)([(0,r.Cb)()],t.prototype,"updating",null),(0,s._)([(0,r.Cb)()],t.prototype,"view",void 0),t=(0,s._)([(0,n.j)("esri.views.2d.layers.LayerView2D")],t),t}},22725:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>I});var s=i(56140),r=(i(95830),i(59472)),n=i(36544),a=(i(68055),i(79881)),l=i(87566),h=i(32656),o=(i(10923),i(57002),i(86035),i(39105)),u=i(5201),c=i(12421),d=i(46666),p=i(13596),y=i(1768),f=i(48164),g=i(37694),m=i(83873);const v=e=>{let t=class extends e{async fetchPopupFeatures(e,t){const{layer:i}=this;if(!e)return Promise.reject(new h.Z("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i}));if("tile"!==i.type)return Promise.reject(new h.Z("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:i.type}));const s=this.get("view.scale"),n=i.allSublayers.toArray().filter((e=>{const t=0===e.minScale||s<=e.minScale,i=0===e.maxScale||s>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&t&&i}));return(0,o.as)(n.map((async i=>{const s=i.createQuery(),n=(0,r.pC)(t)?t.event:null,a=(0,m.k)({renderer:i.renderer,event:n});return s.geometry=this.createFetchPopupFeaturesQueryGeometry(e,a),s.outFields=await i.popupTemplate.getRequiredFields(),(await i.queryFeatures(s)).features}))).then((e=>[].concat(...e.map((e=>e.value)).filter(Boolean))))}};return(0,s._)([(0,a.Cb)()],t.prototype,"layer",void 0),t=(0,s._)([(0,l.j)("esri.layers.mixins.TileLayerView")],t),t};var w=i(81558),_=i(65476);const b=n.Z.getLogger("esri.views.2d.layers.TileLayerView2D"),x=[0,0];let R=class extends(v((0,c.yc)((0,_.Y)((0,w.y)(f.Z))))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}initialize(){const e=this.layer.tileInfo,t=e&&e.spatialReference;let i;t||(i=new h.Z("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer})),t.equals(this.view.spatialReference)||(i=new h.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer})),this.watch("resampling",(()=>{this.refresh()})),i&&this.addResolvingPromise(Promise.reject(i))}get resampling(){return!("resampling"in this.layer)||!1!==this.layer.resampling}hitTest(){return null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating")}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new d.Z(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new p.Z({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new y.Z({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.requestUpdate(),this.container.requestRender(),super.attach()}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQueryGeometry(e,t){return(0,g.K)(e,t,this.view)}async doRefresh(){this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>this._enqueueTileFetch(e))),this.notifyChange("updating"))}isUpdating(){var e;return(null==(e=this._fetchQueue)?void 0:e.length)>0}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(x,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate()}async fetchTile(e,t){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,s=!(0,r.Wi)(t)&&t.signal;if(!i)try{return await this._fetchImage(e,s)}catch(e){if(!(0,o.D_)(e)&&!this.resampling)return this._createBlankImage();throw e}const n=new u.Z(0,0,0,0);let a;try{if(await i.fetchAvailabilityUpsample(e.level,e.row,e.col,n,{signal:s}),n.level!==e.level&&!this.resampling)return this._createBlankImage();a=await this._fetchImage(n,s)}catch(t){if((0,o.D_)(t))throw t;a=await this._fetchImage(e,s)}const{level:l,row:h,col:c}=n;return this.resampling&&l!==e.level?this._resampleImage(a,l,h,c,e.level,e.row,e.col):a}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()))}catch(e){(0,o.D_)(e)||b.error(e)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchTile(e.level,e.row,e.col,{timestamp:this.refreshTimestamp,signal:t})}_resampleImage(e,t,i,s,r,n,a){const l=this._tileInfoView.tileInfo.size,h=this._tileInfoView.getTileResolution(t),o=this._tileInfoView.getTileResolution(r);let u=this._tileInfoView.getLODInfoAt(r);const c=u.getXForColumn(a),d=u.getYForRow(n);u=this._tileInfoView.getLODInfoAt(t);const p=u.getXForColumn(s),y=u.getYForRow(i),f=Math.round((c-p)/h),g=Math.round(-(d-y)/h),m=Math.round(l[0]*(o/h)),v=Math.round(l[1]*(o/h)),w=this._createBlankImage();return w.getContext("2d").drawImage(e,f,g,m,v,0,0,l[0],l[1]),w}_createBlankImage(){const e=this._tileInfoView.tileInfo.size,t=document.createElement("canvas");return[t.width,t.height]=e,t}};(0,s._)([(0,a.Cb)()],R.prototype,"resampling",null),R=(0,s._)([(0,l.j)("esri.views.2d.layers.TileLayerView2D")],R);const I=R},48164:(e,t,i)=>{"use strict";i.d(t,{Z:()=>p});var s=i(56140),r=(i(95830),i(36544)),n=(i(68055),i(79881)),a=i(87566),l=(i(10923),i(57002),i(86035),i(79152)),h=i(35470),o=i(35326),u=i(75044),c=i(77204);let d=class extends((0,c.p)((0,o.I)((0,u.v)(h.Z.EventedMixin(l.Z))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";throw r.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e),e}}))}get fullOpacity(){const e=e=>null==e?1:e;return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer.legendEnabled}get updating(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}get visible(){return!0===this.get("layer.visible")}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,s._)([(0,n.Cb)()],d.prototype,"fullOpacity",null),(0,s._)([(0,n.Cb)()],d.prototype,"layer",void 0),(0,s._)([(0,n.Cb)()],d.prototype,"parent",void 0),(0,s._)([(0,n.Cb)({readOnly:!0})],d.prototype,"suspended",null),(0,s._)([(0,n.Cb)({readOnly:!0})],d.prototype,"suspendInfo",null),(0,s._)([(0,n.Cb)({readOnly:!0})],d.prototype,"legendEnabled",null),(0,s._)([(0,n.Cb)({type:Boolean,readOnly:!0})],d.prototype,"updating",null),(0,s._)([(0,n.Cb)()],d.prototype,"visible",null),d=(0,s._)([(0,a.j)("esri.views.layers.LayerView")],d);const p=d},37694:(e,t,i)=>{"use strict";i.d(t,{K:()=>a});var s=i(59472),r=i(52937),n=(i(36348),i(93533));function a(e,t,i,a=new r.Z){let l;if("2d"===i.type)l=t*i.resolution;else if("3d"===i.type){const r=i.overlayPixelSizeInMapUnits(e),a=i.basemapSpatialReference;l=(0,s.pC)(a)&&!a.equals(i.spatialReference)?(0,n.c9)(a)/(0,n.c9)(i.spatialReference):t*r}const h=e.x-l,o=e.y-l,u=e.x+l,c=e.y+l,{spatialReference:d}=i;return a.xmin=Math.min(h,u),a.ymin=Math.min(o,c),a.xmax=Math.max(h,u),a.ymax=Math.max(o,c),a.spatialReference=d,a}new r.Z}}]);