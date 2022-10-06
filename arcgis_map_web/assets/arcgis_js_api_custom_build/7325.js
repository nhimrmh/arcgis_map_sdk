(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[7325,9985,6194],{78452:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var s=r(56140),o=r(79881),i=r(87566),n=r(28293),a=r(59691);let l=class extends n.Z{constructor(e){super(e),this._handles=new a.Z,this.root=null}initialize(){this._handles.add(this.rootCollectionNames.map((e=>this.watch("root."+e,(()=>this.updateCollections()),!0)))),this.updateCollections()}destroy(){this.root=null,this.refresh(),this._handles.destroy(),this._handles=null}updateCollections(){this._collections=this.rootCollectionNames.map((e=>this.get("root."+e))).filter((e=>null!=e)),this.refresh()}refresh(){const e=this._handles;e.remove("collections");const t=new Array;let r=0;for(const e of this._collections)r=this._processCollection(t,r,e);this.splice(r,this.length);for(const r of t)e.add(r.on("after-changes",(()=>this.refresh())),"collections")}_createNewInstance(e){return new n.Z(e)}_processCollection(e,t,r){return r?(e.push(r),r.forEach((r=>{if(r){if(!this.itemFilterFunction||this.itemFilterFunction(r)){const e=this.indexOf(r,t);e>=0?e!==t&&this.reorder(r,t):this.add(r,t),++t}this.getChildrenFunction&&(t=this._processCollection(e,t,this.getChildrenFunction(r)))}})),t):t}};(0,s._)([(0,o.Cb)()],l.prototype,"rootCollectionNames",void 0),(0,s._)([(0,o.Cb)()],l.prototype,"root",void 0),(0,s._)([(0,o.Cb)()],l.prototype,"getChildrenFunction",void 0),(0,s._)([(0,o.Cb)()],l.prototype,"itemFilterFunction",void 0),l=(0,s._)([(0,i.j)("esri.core.CollectionFlattener")],l);const p=l},1721:(e,t,r)=>{"use strict";r.d(t,{GZ:()=>a,wF:()=>l});var s=r(59472),o=r(28293),i=r(809),n=r(59351);async function a(e,t){return await e.load(),l(e,t)}async function l(e,t){const r=[],a=(...e)=>{for(const t of e)(0,s.Wi)(t)||(Array.isArray(t)?a(...t):o.Z.isCollection(t)?t.forEach((e=>a(e))):i.Z.isLoadable(t)&&r.push(t))};t(a);let l=null;if(await(0,n.UI)(r,(async e=>{!1!==(await(0,n.q6)(function(e){return"loadAll"in e&&"function"==typeof e.loadAll}(e)?e.loadAll():e.load())).ok||l||(l=e)})),l)throw l.loadError;return e}},31318:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>We});var s=r(56140),o=(r(95830),r(82550)),i=r(59472),n=r(36544),a=r(68055),l=r(79881),p=r(30590),u=r(87566),y=r(32656),d=r(10923),c=r(57002),h=(r(86035),r(7830)),f=r(73032),g=r(28293),m=r(1721),b=r(78452),v=r(56700),_=r(43072),w=r(18152),C=r(78910),S=r(48899),x=r(33716),F=r(10113),j=r(56274),I=r(9870),O=r(52937),T=r(8122),R=r(36654),L=r(75044),P=r(809),A=r(96981),q=(r(34341),r(38474),r(42952),r(43925),r(3642),r(57415),r(4037),r(89772)),B=(r(142),r(61121)),Z=r(83236),E=r(43551),M=r(31518),N=r(8809),U=r(35326);let k=class extends((0,U.I)(_.w)){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.visible=!0,this.opacity=1}readTitle(e,t){return"string"==typeof t.alias?t.alias:"string"==typeof t.name?t.name:""}readIdOnlyOnce(e){return-1!==this.id?this.id:"number"==typeof e?e:void 0}};(0,s._)([(0,l.Cb)({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],k.prototype,"title",void 0),(0,s._)([(0,p.r)("service","title",["alias","name"])],k.prototype,"readTitle",null),(0,s._)([(0,l.Cb)()],k.prototype,"layer",void 0),(0,s._)([(0,l.Cb)({type:a.z8,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],k.prototype,"id",void 0),(0,s._)([(0,p.r)("service","id")],k.prototype,"readIdOnlyOnce",null),(0,s._)([(0,l.Cb)((0,w.Lx)(String))],k.prototype,"modelName",void 0),(0,s._)([(0,l.Cb)((0,w.Lx)(Boolean))],k.prototype,"isEmpty",void 0),(0,s._)([(0,l.Cb)({type:Boolean,json:{name:"visibility",write:!0}})],k.prototype,"visible",void 0),(0,s._)([(0,l.Cb)({type:Number,json:{write:!0}})],k.prototype,"opacity",void 0),k=(0,s._)([(0,u.j)("esri.layers.buildingSublayers.BuildingSublayer")],k);const D=k;var Q=r(81421),G=r(63770),z=r(54209);const J=n.Z.getLogger("esri.layers.buildingSublayers.BuildingComponentSublayer"),W=(0,Z.v)();let V=class extends(P.Z.LoadableMixin((0,L.v)(D))){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.fields=null,this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl.path}/sublayers/${this.id}`,query:this.layer.parsedUrl.query}:null}get fieldsIndex(){return new B.Z(this.fields)}readAssociatedLayer(e,t){const r=this.layer.associatedFeatureServiceItem,s=t.associatedLayerID;return(0,i.pC)(r)&&"number"==typeof s?new N.default({portalItem:r,layerId:s}):null}get objectIdField(){if(null!=this.fields)for(const e of this.fields)if("oid"===e.type)return e.name;return null}get displayField(){return(0,i.pC)(this.associatedLayer)?this.associatedLayer.displayField:null}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const t=(0,i.pC)(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t).then((()=>{this.indexInfo=(0,G.T)(this.parsedUrl.path,this.rootNode,this.nodePages,J,t)}))),Promise.resolve(this)}createPopupTemplate(e){return(0,E.eZ)(this,e)}async _fetchService(e){const t=(await(0,R.default)(this.parsedUrl.path,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){const t=this.getField(e);return t&&t.domain?t.domain:null}get geometryType(){return"3d-object"===this.layerType?"mesh":"point"}get profile(){return"3d-object"===this.layerType?"mesh-pyramids":"points"}get capabilities(){const e=(0,i.pC)(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:Q.C,{query:t,data:{supportsZ:r,supportsM:s,isVersioned:o}}=e;return{query:t,data:{supportsZ:r,supportsM:s,isVersioned:o}}}createQuery(){const e=new M.Z;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(e&&e.features)for(const t of e.features)t.layer=this.layer,t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:(0,i.pC)(this.associatedLayer)}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return(0,i.pC)(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),(0,i.Wi)(this.associatedLayer))throw new y.Z("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new y.Z("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};(0,s._)([(0,l.Cb)({readOnly:!0})],V.prototype,"parsedUrl",null),(0,s._)([(0,l.Cb)({type:z.U4,readOnly:!0})],V.prototype,"nodePages",void 0),(0,s._)([(0,l.Cb)({type:[z.QI],readOnly:!0})],V.prototype,"materialDefinitions",void 0),(0,s._)([(0,l.Cb)({type:[z.Yh],readOnly:!0})],V.prototype,"textureSetDefinitions",void 0),(0,s._)([(0,l.Cb)({type:[z.H3],readOnly:!0})],V.prototype,"geometryDefinitions",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],V.prototype,"serviceUpdateTimeStamp",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],V.prototype,"store",void 0),(0,s._)([(0,l.Cb)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],V.prototype,"rootNode",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],V.prototype,"attributeStorageInfo",void 0),(0,s._)([(0,l.Cb)(W.fields)],V.prototype,"fields",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],V.prototype,"fieldsIndex",null),(0,s._)([(0,l.Cb)({readOnly:!0,type:N.default})],V.prototype,"associatedLayer",void 0),(0,s._)([(0,p.r)("service","associatedLayer",["associatedLayerID"])],V.prototype,"readAssociatedLayer",null),(0,s._)([(0,l.Cb)(W.outFields)],V.prototype,"outFields",void 0),(0,s._)([(0,l.Cb)({type:String,readOnly:!0})],V.prototype,"objectIdField",null),(0,s._)([(0,l.Cb)({readOnly:!0,type:String,json:{read:!1}})],V.prototype,"displayField",null),(0,s._)([(0,l.Cb)({readOnly:!0,type:O.Z,aliasOf:"layer.fullExtent"})],V.prototype,"fullExtent",void 0),(0,s._)([(0,l.Cb)({readOnly:!0,type:f.Z,aliasOf:"layer.spatialReference"})],V.prototype,"spatialReference",void 0),(0,s._)([(0,l.Cb)({readOnly:!0,aliasOf:"layer.version"})],V.prototype,"version",void 0),(0,s._)([(0,l.Cb)({readOnly:!0,type:A.Z,aliasOf:"layer.elevationInfo"})],V.prototype,"elevationInfo",void 0),(0,s._)([(0,l.Cb)({readOnly:!0,type:Number,aliasOf:"layer.minScale"})],V.prototype,"minScale",void 0),(0,s._)([(0,l.Cb)({readOnly:!0,type:Number,aliasOf:"layer.maxScale"})],V.prototype,"maxScale",void 0),(0,s._)([(0,l.Cb)({type:["hide","show"],json:{write:!0}})],V.prototype,"listMode",void 0),(0,s._)([(0,l.Cb)({types:q.o,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],V.prototype,"renderer",void 0),(0,s._)([(0,l.Cb)({type:String,json:{origins:{service:{read:!1,write:!1}},read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression"}}})],V.prototype,"definitionExpression",void 0),(0,s._)([(0,l.Cb)(w.C_)],V.prototype,"popupEnabled",void 0),(0,s._)([(0,l.Cb)({type:T.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],V.prototype,"popupTemplate",void 0),(0,s._)([(0,l.Cb)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],V.prototype,"normalReferenceFrame",void 0),(0,s._)([(0,l.Cb)({readOnly:!0,json:{read:!1}})],V.prototype,"defaultPopupTemplate",null),(0,s._)([(0,l.Cb)({json:{write:!1}}),(0,I.J)(new j.Xn({"3DObject":"3d-object",Point:"point"}))],V.prototype,"layerType",void 0),(0,s._)([(0,l.Cb)()],V.prototype,"geometryType",null),(0,s._)([(0,l.Cb)()],V.prototype,"profile",null),(0,s._)([(0,l.Cb)({readOnly:!0,json:{read:!1}})],V.prototype,"capabilities",null),V=(0,s._)([(0,u.j)("esri.layers.buildingSublayers.BuildingComponentSublayer")],V);const $=V;var H,K=r(15307);const X={type:g.Z,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:Y}}},read:!1}};function Y(e,t,r){if(e&&Array.isArray(e))return new g.Z(e.map((e=>{const t=function(e){return"group"===e.layerType?ee:$}(e);if(t){const s=new t;return s.read(e,r),s}r&&r.messages&&e&&r.messages.push(new K.Z("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r}))})))}let ee=H=class extends D{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return(0,m.wF)(this,(e=>H.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)}))))}};var te;(0,s._)([(0,l.Cb)({type:["hide","show","hide-children"],json:{write:!0}})],ee.prototype,"listMode",void 0),(0,s._)([(0,l.Cb)(X)],ee.prototype,"sublayers",void 0),ee=H=(0,s._)([(0,u.j)("esri.layers.buildingSublayers.BuildingGroupSublayer")],ee),(te=ee||(ee={})).sublayersProperty=X,te.readSublayers=Y,te.forEachSublayer=function e(t,r){t.forEach((t=>{r(t),"building-group"===t.type&&e(t.sublayers,r)}))};const re=ee;var se=r(61393),oe=r(58385);let ie=class extends oe.wq{constructor(){super(...arguments),this.type=null}};(0,s._)([(0,l.Cb)({type:String,readOnly:!0,json:{write:!0}})],ie.prototype,"type",void 0),ie=(0,s._)([(0,u.j)("esri.layers.support.BuildingFilterAuthoringInfo")],ie);const ne=ie;var ae;let le=ae=class extends oe.wq{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new ae({filterType:this.filterType,filterValues:(0,o.d9)(this.filterValues)})}};(0,s._)([(0,l.Cb)({type:String,json:{write:!0}})],le.prototype,"filterType",void 0),(0,s._)([(0,l.Cb)({type:[String],json:{write:!0}})],le.prototype,"filterValues",void 0),le=ae=(0,s._)([(0,u.j)("esri.layers.support.BuildingFilterAuthoringInfoType")],le);const pe=le;var ue;const ye=g.Z.ofType(pe);let de=ue=class extends oe.wq{clone(){return new ue({filterTypes:(0,o.d9)(this.filterTypes)})}};(0,s._)([(0,l.Cb)({type:ye,json:{write:!0}})],de.prototype,"filterTypes",void 0),de=ue=(0,s._)([(0,u.j)("esri.layers.support.BuildingFilterAuthoringInfoBlock")],de);const ce=de;var he;const fe=g.Z.ofType(ce);let ge=he=class extends ne{constructor(){super(...arguments),this.type="checkbox"}clone(){return new he({filterBlocks:(0,o.d9)(this.filterBlocks)})}};(0,s._)([(0,l.Cb)({type:["checkbox"]})],ge.prototype,"type",void 0),(0,s._)([(0,l.Cb)({type:fe,json:{write:!0}})],ge.prototype,"filterBlocks",void 0),ge=he=(0,s._)([(0,u.j)("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],ge);const me=ge;let be=class extends oe.wq{};(0,s._)([(0,l.Cb)({readOnly:!0,json:{read:!1}})],be.prototype,"type",void 0),be=(0,s._)([(0,u.j)("esri.layers.support.BuildingFilterMode")],be);const ve=be;var _e;let we=_e=class extends ve{constructor(){super(...arguments),this.type="solid"}clone(){return new _e}};(0,s._)([(0,l.Cb)({type:["solid"],readOnly:!0,json:{write:!0}})],we.prototype,"type",void 0),we=_e=(0,s._)([(0,u.j)("esri.layers.support.BuildingFilterModeSolid")],we);const Ce=we;var Se,xe=r(21916);let Fe=Se=class extends ve{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new Se({edges:(0,o.d9)(this.edges)})}};(0,s._)([(0,I.J)({wireFrame:"wire-frame"})],Fe.prototype,"type",void 0),(0,s._)([(0,l.Cb)(xe.Z)],Fe.prototype,"edges",void 0),Fe=Se=(0,s._)([(0,u.j)("esri.layers.support.BuildingFilterModeWireFrame")],Fe);const je=Fe;var Ie;let Oe=Ie=class extends ve{constructor(){super(...arguments),this.type="x-ray"}clone(){return new Ie}};(0,s._)([(0,l.Cb)({type:["x-ray"],readOnly:!0,json:{write:!0}})],Oe.prototype,"type",void 0),Oe=Ie=(0,s._)([(0,u.j)("esri.layers.support.BuildingFilterModeXRay")],Oe);const Te=Oe;var Re;const Le={nonNullable:!0,types:{key:"type",base:ve,typeMap:{solid:Ce,"wire-frame":je,"x-ray":Te}},json:{read:e=>{switch(e&&e.type){case"solid":return Ce.fromJSON(e);case"wireFrame":return je.fromJSON(e);case"x-ray":return Te.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let Pe=Re=class extends oe.wq{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new Ce,this.title=""}clone(){return new Re({filterExpression:this.filterExpression,filterMode:(0,o.d9)(this.filterMode),title:this.title})}};(0,s._)([(0,l.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Pe.prototype,"filterExpression",void 0),(0,s._)([(0,l.Cb)(Le)],Pe.prototype,"filterMode",void 0),(0,s._)([(0,l.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Pe.prototype,"title",void 0),Pe=Re=(0,s._)([(0,u.j)("esri.layers.support.BuildingFilterBlock")],Pe);const Ae=Pe;var qe;const Be=g.Z.ofType(Ae);let Ze=qe=class extends oe.wq{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=(0,c.D)(),this.name=null}clone(){return new qe({description:this.description,filterBlocks:(0,o.d9)(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:(0,o.d9)(this.filterAuthoringInfo)})}};(0,s._)([(0,l.Cb)({type:String,json:{write:!0}})],Ze.prototype,"description",void 0),(0,s._)([(0,l.Cb)({type:Be,json:{write:{enabled:!0,isRequired:!0}}})],Ze.prototype,"filterBlocks",void 0),(0,s._)([(0,l.Cb)({types:{key:"type",base:ne,typeMap:{checkbox:me}},json:{read:e=>{switch(e&&e.type){case"checkbox":return me.fromJSON(e);default:return null}},write:!0}})],Ze.prototype,"filterAuthoringInfo",void 0),(0,s._)([(0,l.Cb)({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],Ze.prototype,"id",void 0),(0,s._)([(0,l.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Ze.prototype,"name",void 0),Ze=qe=(0,s._)([(0,u.j)("esri.layers.support.BuildingFilter")],Ze);const Ee=Ze,Me=n.Z.getLogger("esri.layers.support.BuildingSummaryStatistics");let Ne=class extends oe.wq{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};(0,s._)([(0,l.Cb)({type:String})],Ne.prototype,"fieldName",void 0),(0,s._)([(0,l.Cb)({type:String})],Ne.prototype,"modelName",void 0),(0,s._)([(0,l.Cb)({type:String})],Ne.prototype,"label",void 0),(0,s._)([(0,l.Cb)({type:Number})],Ne.prototype,"min",void 0),(0,s._)([(0,l.Cb)({type:Number})],Ne.prototype,"max",void 0),(0,s._)([(0,l.Cb)({json:{read:e=>Array.isArray(e)&&(e.every((e=>"string"==typeof e))||e.every((e=>"number"==typeof e)))?e.slice():null}})],Ne.prototype,"mostFrequentValues",void 0),(0,s._)([(0,l.Cb)({type:[Number]})],Ne.prototype,"subLayerIds",void 0),Ne=(0,s._)([(0,u.j)("esri.layers.support.BuildingFieldStatistics")],Ne);let Ue=class extends(P.Z.LoadableMixin((0,L.v)(oe.wq))){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(Me.error("building summary statistics are not loaded"),null)}load(e){const t=(0,i.pC)(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}async _fetchService(e){const t=(await(0,R.default)(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service"})}};(0,s._)([(0,l.Cb)({constructOnly:!0,type:String})],Ue.prototype,"url",void 0),(0,s._)([(0,l.Cb)({readOnly:!0,type:[Ne],json:{read:{source:"summary"}}})],Ue.prototype,"fields",null),Ue=(0,s._)([(0,u.j)("esri.layers.support.BuildingSummaryStatistics")],Ue);const ke=Ue;var De=r(59930);const Qe=n.Z.getLogger("esri.layers.BuildingSceneLayer"),Ge=g.Z.ofType(Ee),ze=(0,o.d9)(re.sublayersProperty);ze.json.origins["web-scene"]={type:[$],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},ze.json.origins["portal-item"]={type:[$],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let Je=class extends((0,se.V)((0,S.Y)((0,C.q)((0,x.I)((0,F.M)((0,_.R)(v.Z))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new b.Z({root:this,rootCollectionNames:["sublayers"],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this.sublayerOverrides=null,this.filters=new Ge,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene"}normalizeCtorArgs(e){return"string"==typeof e?{url:e}:e}destroy(){this.allSublayers.destroy()}readSublayers(e,t,r){const s=re.readSublayers(e,t,r);return re.forEachSublayer(s,(e=>e.layer=this)),this.sublayerOverrides&&(this.applySublayerOverrides(s,this.sublayerOverrides),this.sublayerOverrides=null),s}applySublayerOverrides(e,{overrides:t,context:r}){re.forEachSublayer(e,(e=>e.read(t.get(e.id),r)))}readSublayerOverrides(e,t){const r=new Map;for(const s of e)null!=s&&"object"==typeof s&&"number"==typeof s.id?r.set(s.id,s):t.messages.push(new y.Z("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:s}));return{overrides:r,context:t}}writeSublayerOverrides(e,t,r){const s=[];re.forEachSublayer(this.sublayers,(e=>{const t=e.write({},r);Object.keys(t).length>1&&s.push(t)})),s.length>0&&(t.sublayers=s)}writeUnappliedOverrides(e,t){t.sublayers=[],e.overrides.forEach((e=>{t.sublayers.push((0,o.d9)(e))}))}write(e,t){return e=super.write(e,t),!t||"web-scene"!==t.origin&&"portal-item"!==t.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,t):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e}read(e,t){if(super.read(e,t),t&&("web-scene"===t.origin||"portal-item"===t.origin)&&null!=e&&Array.isArray(e.sublayers)){const r=this.readSublayerOverrides(e.sublayers,t);this.sublayers?this.applySublayerOverrides(this.sublayers,r):this.sublayerOverrides=r}}readSummaryStatistics(e,t){if("string"==typeof t.statisticsHRef){const e=(0,d.v_)(this.parsedUrl.path,t.statisticsHRef);return new ke({url:e})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const t=(0,i.pC)(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(h.r9).then((()=>this._fetchService(t))).then((()=>this._fetchAssociatedFeatureService(t)));return this.addResolvingPromise(r),Promise.resolve(this)}loadAll(){return(0,m.GZ)(this,(e=>{re.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)})),this.summaryStatistics&&e(this.summaryStatistics)}))}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new y.Z("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&Qe.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&Qe.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}async _fetchAssociatedFeatureService(e){const t=new De.W(this.parsedUrl,this.portalItem,e);try{this.associatedFeatureServiceItem=await t.fetchPortalItem()}catch(e){Qe.warn("Associated feature service item could not be loaded",e)}}};(0,s._)([(0,l.Cb)({type:["BuildingSceneLayer"]})],Je.prototype,"operationalLayerType",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],Je.prototype,"allSublayers",void 0),(0,s._)([(0,l.Cb)(ze)],Je.prototype,"sublayers",void 0),(0,s._)([(0,p.r)("service","sublayers")],Je.prototype,"readSublayers",null),(0,s._)([(0,l.Cb)({type:Ge,nonNullable:!0,json:{write:!0}})],Je.prototype,"filters",void 0),(0,s._)([(0,l.Cb)({type:String,json:{write:!0}})],Je.prototype,"activeFilterId",void 0),(0,s._)([(0,l.Cb)({readOnly:!0,type:ke})],Je.prototype,"summaryStatistics",void 0),(0,s._)([(0,p.r)("summaryStatistics",["statisticsHRef"])],Je.prototype,"readSummaryStatistics",null),(0,s._)([(0,l.Cb)({type:[String],json:{read:!1}})],Je.prototype,"outFields",void 0),(0,s._)([(0,l.Cb)(w.vg)],Je.prototype,"fullExtent",void 0),(0,s._)([(0,l.Cb)({type:["show","hide","hide-children"]})],Je.prototype,"listMode",void 0),(0,s._)([(0,l.Cb)((0,w.Lx)(f.Z))],Je.prototype,"spatialReference",void 0),(0,s._)([(0,l.Cb)(w.PV)],Je.prototype,"elevationInfo",null),(0,s._)([(0,l.Cb)({json:{read:!1},readOnly:!0})],Je.prototype,"type",void 0),(0,s._)([(0,l.Cb)()],Je.prototype,"associatedFeatureServiceItem",void 0),Je=(0,s._)([(0,u.j)("esri.layers.BuildingSceneLayer")],Je);const We=Je},59930:(e,t,r)=>{"use strict";r.d(t,{W:()=>u});var s=r(59472),o=r(7830),i=r(23838),n=r(36654),a=r(32797),l=r(80192),p=r(8809);class u{constructor(e,t,r){this.parsedUrl=e,this.portalItem=t,this.signal=r,this.rootDocument=null;const s=this.parsedUrl.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);s&&(this.urlParts={root:s[1],layerId:parseInt(s[2],10)})}async fetch(){var e;if(!this.urlParts)return null;const t=null!=(e=this.portalItem)?e:await this.portalItemFromServiceItemId();if((0,s.Wi)(t))return this.loadFromUrl();const r=await this.findAndLoadRelatedPortalItem(t);return(0,s.Wi)(r)?null:this.loadFeatureLayerFromPortalItem(r)}async fetchPortalItem(){var e;if(!this.urlParts)return null;const t=null!=(e=this.portalItem)?e:await this.portalItemFromServiceItemId();return(0,s.Wi)(t)?null:this.findAndLoadRelatedPortalItem(t)}async fetchRootDocument(){if((0,s.pC)(this.rootDocument))return this.rootDocument;if((0,s.Wi)(this.urlParts))return this.rootDocument={},{};const e={query:{f:"json"},responseType:"json",signal:this.signal},t=`${this.urlParts.root}/SceneServer`;try{const r=await(0,n.default)(t,e);this.rootDocument=r.data}catch{this.rootDocument={}}return this.rootDocument}async fetchServiceOwningPortalUrl(){var e;const t=null==(e=i.id)?void 0:e.findServerInfo(this.parsedUrl.path);if(null!=t&&t.owningSystemUrl)return t.owningSystemUrl;const r=this.parsedUrl.path.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const e=(await(0,n.default)(r,{query:{f:"json"},responseType:"json",signal:this.signal})).data.owningSystemUrl;if(e)return e}catch(e){(0,o.r9)(e)}return null}async findAndLoadRelatedPortalItem(e){try{return(await e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal})).find((e=>"Feature Service"===e.type))||null}catch(e){return(0,o.r9)(e),null}}async loadFeatureLayerFromPortalItem(e){await e.load({signal:this.signal});const t=await this.findMatchingAssociatedSublayerUrl(e.url);return new p.default({url:t,portalItem:e}).load({signal:this.signal})}async loadFromUrl(){const e=await this.findMatchingAssociatedSublayerUrl(`${this.urlParts.root}/FeatureServer`);return new p.default({url:e}).load({signal:this.signal})}async findMatchingAssociatedSublayerUrl(e){const t=e.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),r={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},s=this.urlParts.layerId,o=this.fetchRootDocument(),i=(0,n.default)(t,r),[a,l]=await Promise.all([i,o]),p=l&&l.layers,u=a.data&&a.data.layers;if(!Array.isArray(u))throw new Error("expected layers array");if(Array.isArray(p)){for(let e=0;e<Math.min(p.length,u.length);e++)if(p[e].id===s)return`${t}/${u[e].id}`}else if(s<u.length)return`${t}/${u[s].id}`;throw new Error("could not find matching associated sublayer")}async portalItemFromServiceItemId(){const e=(await this.fetchRootDocument()).serviceItemId;if(!e)return null;const t=new l.default({id:e}),r=await this.fetchServiceOwningPortalUrl();(0,s.pC)(r)&&(t.portal=new a.Z({url:r}));try{return t.load({signal:this.signal})}catch(e){return(0,o.r9)(e),null}}}},81421:(e,t,r)=>{"use strict";r.d(t,{C:()=>s});const s={attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsStatistics:!1,tileMaxRecordCount:0}}},39597:(e,t,r)=>{"use strict";r.d(t,{p:()=>o});var s=r(98863);function o(e,t,r){if(!r||!r.features||!r.hasZ)return;const o=(0,s.k)(r.geometryType,t,e.outSpatialReference);if(o)for(const e of r.features)o(e.geometry)}},98863:(e,t,r)=>{"use strict";r.d(t,{k:()=>n,P:()=>l});var s=r(59472),o=r(27780),i=r(93533);function n(e,t,r){if((0,s.Wi)(t)||(0,s.Wi)(r)||r.vcsWkid||(0,o.fS)(t,r))return null;const n=(0,i._R)(t)/(0,i._R)(r);if(1===n)return null;switch(e){case"point":case"esriGeometryPoint":return e=>function(e,t){e&&null!=e.z&&(e.z*=t)}(e,n);case"polyline":case"esriGeometryPolyline":return e=>function(e,t){if(e)for(const r of e.paths)for(const e of r)e.length>2&&(e[2]*=t)}(e,n);case"polygon":case"esriGeometryPolygon":return e=>function(e,t){if(e)for(const r of e.rings)for(const e of r)e.length>2&&(e[2]*=t)}(e,n);case"multipoint":case"esriGeometryMultipoint":return e=>function(e,t){if(e)for(const r of e.points)r.length>2&&(r[2]*=t)}(e,n);default:return null}}function a(e,t,r){if(null==e.hasM||e.hasZ)for(const e of t)for(const t of e)t.length>2&&(t[2]*=r)}function l(e,t,r){if(!e&&!t||!r)return;const s=(0,i._R)(r);p(e,r,s),p(t,r,s)}function p(e,t,r){if(e)for(const s of e)u(s.geometry,t,r)}function u(e,t,r){if(!e||!e.spatialReference||(0,o.fS)(e.spatialReference,t))return;const s=(0,i._R)(e.spatialReference)/r;if(1!==s)if("x"in e)null!=e.z&&(e.z*=s);else if("rings"in e)a(e,e.rings,s);else if("paths"in e)a(e,e.paths,s);else if("points"in e&&(null==e.hasM||e.hasZ))for(const t of e.points)t.length>2&&(t[2]*=s)}},76194:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var s=r(56140),o=(r(95830),r(59472)),i=(r(36544),r(68055),r(79881)),n=r(56274),a=r(30590),l=r(87566),p=r(60538),u=(r(10923),r(57002),r(86035),r(58385)),y=r(73032),d=r(56885),c=r(36348),h=r(15988),f=r(70834);const g=new n.Xn({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let m=class extends u.wq{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const r=y.Z.fromJSON(t.spatialReference),s=[];for(let t=0;t<e.length;t++){const i=e[t],n=h.Z.fromJSON(i),a=i.geometry&&i.geometry.spatialReference;(0,o.pC)(n.geometry)&&!a&&(n.geometry.spatialReference=r),s.push(n)}return s}writeGeometryType(e,t,r,s){if(e)return void g.write(e,t,r,s);const{features:i}=this;if(i)for(const e of i)if(e&&(0,o.pC)(e.geometry))return void g.write(e.geometry.type,t,r,s)}readQueryGeometry(e,t){if(!e)return null;const r=!!e.spatialReference,s=(0,d.im)(e);return!r&&t.spatialReference&&(s.spatialReference=y.Z.fromJSON(t.spatialReference)),s}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:r}=this;if(r)for(const e of r)if(e&&(0,o.pC)(e.geometry)&&e.geometry.spatialReference)return void(t.spatialReference=e.geometry.spatialReference.toJSON())}toJSON(e){const t=this.write(null);if(t.features&&Array.isArray(e)&&e.length>0)for(let r=0;r<t.features.length;r++){const s=t.features[r];if(s.geometry){const t=e&&e[r];s.geometry=t&&t.toJSON()||s.geometry}}return t}quantize(e){const{scale:[t,r],translate:[s,i]}=e,n=this.features,a=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-s)/t)),(e=>Math.round((i-e)/r)));for(let e=0,t=n.length;e<t;e++)a((0,o.Wg)(n[e].geometry))||(n.splice(e,1),e--,t--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:r}=this;if(!r)return this;const{translate:[s,i],scale:[n,a]}=r,l=this._getHydrationFunction(e,(e=>e*n+s),(e=>i-e*a));for(const{geometry:e}of t)(0,o.pC)(e)&&l(e);return this.transform=null,this}_quantizePoints(e,t,r){let s,o;const i=[];for(let n=0,a=e.length;n<a;n++){const a=e[n];if(n>0){const e=t(a[0]),n=r(a[1]);e===s&&n===o||(i.push([e-s,n-o]),s=e,o=n)}else s=t(a[0]),o=r(a[1]),i.push([s,o])}return i.length>0?i:null}_getQuantizationFunction(e,t,r){return"point"===e?e=>(e.x=t(e.x),e.y=r(e.y),e):"polyline"===e||"polygon"===e?e=>{const s=(0,d.oU)(e)?e.rings:e.paths,o=[];for(let e=0,i=s.length;e<i;e++){const i=s[e],n=this._quantizePoints(i,t,r);n&&o.push(n)}return o.length>0?((0,d.oU)(e)?e.rings=o:e.paths=o,e):null}:"multipoint"===e?e=>{const s=this._quantizePoints(e.points,t,r);return s.length>0?(e.points=s,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,r){return"point"===e?e=>{e.x=t(e.x),e.y=r(e.y)}:"polyline"===e||"polygon"===e?e=>{const s=(0,d.oU)(e)?e.rings:e.paths;let o,i;for(let e=0,n=s.length;e<n;e++){const n=s[e];for(let e=0,s=n.length;e<s;e++){const s=n[e];e>0?(o+=s[0],i+=s[1]):(o=s[0],i=s[1]),s[0]=t(o),s[1]=r(i)}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax)}:"multipoint"===e?e=>{const s=e.points;let o,i;for(let e=0,n=s.length;e<n;e++){const n=s[e];e>0?(o+=n[0],i+=n[1]):(o=n[0],i=n[1]),n[0]=t(o),n[1]=r(i)}}:void 0}};(0,s._)([(0,i.Cb)({type:String,json:{write:!0}})],m.prototype,"displayFieldName",void 0),(0,s._)([(0,i.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],m.prototype,"exceededTransferLimit",void 0),(0,s._)([(0,i.Cb)({type:[h.Z],json:{write:!0}})],m.prototype,"features",void 0),(0,s._)([(0,a.r)("features")],m.prototype,"readFeatures",null),(0,s._)([(0,i.Cb)({type:[f.Z],json:{write:!0}})],m.prototype,"fields",void 0),(0,s._)([(0,i.Cb)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:g.read}}})],m.prototype,"geometryType",void 0),(0,s._)([(0,p.c)("geometryType")],m.prototype,"writeGeometryType",null),(0,s._)([(0,i.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],m.prototype,"hasM",void 0),(0,s._)([(0,i.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],m.prototype,"hasZ",void 0),(0,s._)([(0,i.Cb)({types:c.qM,json:{write:!0}})],m.prototype,"queryGeometry",void 0),(0,s._)([(0,a.r)("queryGeometry")],m.prototype,"readQueryGeometry",null),(0,s._)([(0,i.Cb)({type:y.Z,json:{write:!0}})],m.prototype,"spatialReference",void 0),(0,s._)([(0,p.c)("spatialReference")],m.prototype,"writeSpatialReference",null),(0,s._)([(0,i.Cb)({json:{write:!0}})],m.prototype,"transform",void 0),m=(0,s._)([(0,l.j)("esri.tasks.support.FeatureSet")],m),m.prototype.toJSON.isDefaultToJSON=!0,m||(m={});const b=m}}]);