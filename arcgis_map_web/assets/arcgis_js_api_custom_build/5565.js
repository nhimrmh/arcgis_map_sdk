(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[5565],{81558:(e,t,i)=>{"use strict";i.d(t,{y:()=>U});var s=i(56140),r=(i(95830),i(36544),i(68055),i(79881)),a=i(87566),n=(i(10923),i(57002),i(86035),i(28293)),o=i(32105),h=i(80621),l=i(58385);let p=class extends l.wq{};p=(0,s._)([(0,a.j)("esri.views.layers.support.ClipArea")],p);const d=p;var c;let u=c=class extends d{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new c({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};(0,s._)([(0,r.Cb)({type:[Number,String],json:{write:!0}})],u.prototype,"left",void 0),(0,s._)([(0,r.Cb)({type:[Number,String],json:{write:!0}})],u.prototype,"right",void 0),(0,s._)([(0,r.Cb)({type:[Number,String],json:{write:!0}})],u.prototype,"top",void 0),(0,s._)([(0,r.Cb)({type:[Number,String],json:{write:!0}})],u.prototype,"bottom",void 0),(0,s._)([(0,r.Cb)({readOnly:!0})],u.prototype,"version",null),u=c=(0,s._)([(0,a.j)("esri.views.layers.support.ClipRect")],u);const y=u;var g,v=i(17149),w=i(39718),b=i(52937),f=i(53817),_=i(56885);i(36348);const C={base:w.Z,key:"type",typeMap:{extent:b.Z,polygon:f.Z}};let m=g=class extends d{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new g({geometry:this.geometry.clone()})}};(0,s._)([(0,r.Cb)({types:C,json:{read:_.im,write:!0}})],m.prototype,"geometry",void 0),(0,s._)([(0,r.Cb)({readOnly:!0})],m.prototype,"version",null),m=g=(0,s._)([(0,a.j)("esri.views.layers.support.Geometry")],m);const V=m;let S=class extends d{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};(0,s._)([(0,r.Cb)({type:[[[Number]]],json:{write:!0}})],S.prototype,"path",void 0),(0,s._)([(0,r.Cb)({readOnly:!0})],S.prototype,"version",null),S=(0,s._)([(0,a.j)("esri.views.layers.support.Path")],S);const q=S,R=n.Z.ofType({key:"type",base:d,typeMap:{rect:y,path:q,geometry:V}}),U=e=>{let t=class extends e{constructor(){super(...arguments),this.clips=new R,this.moving=!1,this.attached=!1,this.lastUpdateId=-1,this.updateRequested=!1}initialize(){var e;this.container||(this.container=new v.W),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([(0,h.S1)(this,"suspended",(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),!0),(0,h.S1)(this,["layer.opacity","container"],(()=>{var e,t;this.container&&(this.container.opacity=null!=(e=null==(t=this.layer)?void 0:t.opacity)?e:1)}),!0),(0,h.S1)(this,["layer.blendMode"],(e=>{this.container&&(this.container.blendMode=e)}),!0),(0,h.S1)(this,["layer.effect"],(e=>{this.container&&(this.container.effect=e)}),!0),this.clips.on("change",(()=>{this.container.clips=this.clips,this.notifyChange("clips")}))]),null!=(e=this.view)&&e.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{})):this.when().then((()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{}))}destroy(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}get updating(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}isVisibleAtScale(e){let t=!0;const i=this.layer,s=i.minScale,r=i.maxScale;if(null!=s&&null!=r){let i=!s,a=!r;!i&&e<=s&&(i=!0),!a&&e>=r&&(a=!0),t=i&&a}return t}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}isUpdating(){return!1}isRendering(){return!1}canResume(){return!!super.canResume()&&this.isVisibleAtScale(this.view.scale)}};return(0,s._)([(0,r.Cb)({type:R,set(e){const t=(0,o.Z)(e,this._get("clips"),R);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,s._)([(0,r.Cb)()],t.prototype,"moving",void 0),(0,s._)([(0,r.Cb)()],t.prototype,"attached",void 0),(0,s._)([(0,r.Cb)()],t.prototype,"container",void 0),(0,s._)([(0,r.Cb)()],t.prototype,"suspended",void 0),(0,s._)([(0,r.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,s._)([(0,r.Cb)()],t.prototype,"updateRequested",void 0),(0,s._)([(0,r.Cb)()],t.prototype,"updating",null),(0,s._)([(0,r.Cb)()],t.prototype,"view",void 0),t=(0,s._)([(0,a.j)("esri.views.2d.layers.LayerView2D")],t),t}},45565:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>w});var s=i(56140),r=(i(95830),i(59472)),a=(i(36544),i(68055),i(79881),i(87566)),n=(i(10923),i(57002),i(86035),i(28293)),o=i(15988),h=i(80621),l=i(48164),p=i(28301),d=i(24989),c=i(81558);const u="sublayers",y="layerView",g=Object.freeze({remove(){},pause(){},resume(){}});let v=class extends((0,c.y)(l.Z)){async fetchPopupFeatures(e){return(await Promise.all(Array.from(this.graphicsViews(),(t=>t.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate)))))))).flat()}*graphicsViews(){(0,r.pC)(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():(0,r.pC)(this._graphicsViews)?yield*this._graphicsViews:yield*[]}async hitTest(e,t){if(this.suspended)return null;const i=Array.from(this.graphicsViews(),(async i=>{const s=await i.hitTest(e,t);if(s){if((0,r.pC)(this._graphicsViewsFeatureCollectionMap)){const e=this._graphicsViewsFeatureCollectionMap.get(i);!s.popupTemplate&&e.popupTemplate&&(s.popupTemplate=e.popupTemplate)}return s}return null}));return(await Promise.all(i)).filter((e=>!!e))[0]||null}highlight(e){let t;if("number"==typeof e?t=[e]:e instanceof o.Z?t=[e.uid]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):n.Z.isCollection(e)&&(t=e.map((e=>e&&e.uid)).toArray()),t=t.filter((e=>null!=e)),!t.length)return g;for(const e of this.graphicsViews())e.addHighlight(t);return{remove:()=>{for(const e of this.graphicsViews())e.removeHighlight(t)}}}update(e){for(const t of this.graphicsViews())t.processUpdate(e)}attach(){const e=this.view,t=()=>this.requestUpdate(),i=this.layer.featureCollections;if((0,r.pC)(i)&&i.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of i){const i=new d.Z(this.view.featuresTilingScheme);i.fadeTransitionEnabled=!0;const r=new p.Z({view:e,graphics:s.source,renderer:s.renderer,requestUpdateCallback:t,container:i});this._graphicsViewsFeatureCollectionMap.set(r,s),this.container.addChild(r.container),this.handles.add([(0,h.S1)(s,"visible",(e=>r.container.visible=e)),(0,h.S1)(r,"updating",(()=>this.notifyChange("updating")))],y)}}else(0,r.pC)(this.layer.sublayers)&&this.handles.add((0,h.on)(this.layer,"sublayers","change",(()=>this._createGraphicsViews()),(()=>this._createGraphicsViews()),(()=>this._destroyGraphicsViews())),u)}detach(){this._destroyGraphicsViews(),this.handles.remove(u)}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews())e.viewChange()}isUpdating(){for(const e of this.graphicsViews())if(e.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(y);for(const e of this.graphicsViews())e.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),(0,r.Wi)(this.layer.sublayers))return;const e=[],t=this.view,i=()=>this.requestUpdate();for(const s of this.layer.sublayers){const r=new d.Z(this.view.featuresTilingScheme);r.fadeTransitionEnabled=!0;const a=new p.Z({view:t,graphics:s.graphics,requestUpdateCallback:i,container:r});this.handles.add([s.on("graphic-update",a.graphicUpdateHandler),(0,h.S1)(s,"visible",(e=>a.container.visible=e)),(0,h.S1)(a,"updating",(()=>this.notifyChange("updating")))],y),this.container.addChild(a.container),e.push(a)}this._graphicsViews=e}};v=(0,s._)([(0,a.j)("esri.views.2d.layers.MapNotesLayerView2D")],v);const w=v},24989:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});var s=i(31514),r=i(61343);class a extends r.Z{renderChildren(e){this.attributeView.bindTextures(e.context),this.children.some((e=>e.hasData))&&(super.renderChildren(e),e.drawPhase===s.jx.MAP&&this._renderChildren(e),e.drawPhase===s.jx.HIGHLIGHT&&this._renderHighlight(e))}_renderHighlight(e){const{painter:t}=e,i=t.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}}const n=a},48164:(e,t,i)=>{"use strict";i.d(t,{Z:()=>u});var s=i(56140),r=(i(95830),i(36544)),a=(i(68055),i(79881)),n=i(87566),o=(i(10923),i(57002),i(86035),i(79152)),h=i(35470),l=i(35326),p=i(75044),d=i(77204);let c=class extends((0,d.p)((0,l.I)((0,p.v)(h.Z.EventedMixin(o.Z))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";throw r.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e),e}}))}get fullOpacity(){const e=e=>null==e?1:e;return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer.legendEnabled}get updating(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}get visible(){return!0===this.get("layer.visible")}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,s._)([(0,a.Cb)()],c.prototype,"fullOpacity",null),(0,s._)([(0,a.Cb)()],c.prototype,"layer",void 0),(0,s._)([(0,a.Cb)()],c.prototype,"parent",void 0),(0,s._)([(0,a.Cb)({readOnly:!0})],c.prototype,"suspended",null),(0,s._)([(0,a.Cb)({readOnly:!0})],c.prototype,"suspendInfo",null),(0,s._)([(0,a.Cb)({readOnly:!0})],c.prototype,"legendEnabled",null),(0,s._)([(0,a.Cb)({type:Boolean,readOnly:!0})],c.prototype,"updating",null),(0,s._)([(0,a.Cb)()],c.prototype,"visible",null),c=(0,s._)([(0,n.j)("esri.views.layers.LayerView")],c);const u=c}}]);