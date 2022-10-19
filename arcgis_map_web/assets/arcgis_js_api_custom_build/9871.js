"use strict";(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[9871],{59871:(e,t,r)=>{r.r(t),r.d(t,{default:()=>We});var s=r(36663),i=r(6865),o=r(81739),a=r(70375),n=r(67134),l=r(63592),p=r(13802),u=r(61681),y=r(15842),d=r(78668),c=r(3466),h=r(81977),b=r(7283),g=r(34248),f=r(40266),m=r(14685),v=r(38481),_=r(80020),S=(r(86004),r(45510),r(16192),r(71297),r(878),r(22836),r(50172),r(25634),r(72506),r(54021)),w=r(66341),C=r(25709),I=r(68309),F=r(64189),j=(r(7753),r(39994),r(79438)),x=r(91772),O=r(21187),L=r(86618),T=r(51599);let A=class extends((0,L.IG)(y.w)){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.visible=!0,this.opacity=1}readTitle(e,t){return"string"==typeof t.alias?t.alias:"string"==typeof t.name?t.name:""}readIdOnlyOnce(e){return-1!==this.id?this.id:"number"==typeof e?e:void 0}};(0,s._)([(0,h.Cb)({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],A.prototype,"title",void 0),(0,s._)([(0,g.r)("service","title",["alias","name"])],A.prototype,"readTitle",null),(0,s._)([(0,h.Cb)()],A.prototype,"layer",void 0),(0,s._)([(0,h.Cb)({type:b.z8,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],A.prototype,"id",void 0),(0,s._)([(0,g.r)("service","id")],A.prototype,"readIdOnlyOnce",null),(0,s._)([(0,h.Cb)((0,T.Lx)(String))],A.prototype,"modelName",void 0),(0,s._)([(0,h.Cb)((0,T.Lx)(Boolean))],A.prototype,"isEmpty",void 0),(0,s._)([(0,h.Cb)({type:Boolean,json:{name:"visibility",write:!0}})],A.prototype,"visible",void 0),(0,s._)([(0,h.Cb)({type:Number,json:{write:!0}})],A.prototype,"opacity",void 0),A=(0,s._)([(0,f.j)("esri.layers.buildingSublayers.BuildingSublayer")],A);const B=A;var P=r(31484),R=r(89076),q=r(28790),E=r(40909),U=r(97304),M=r(14136),Z=r(10171),D=r(74710);const k=p.Z.getLogger("esri.layers.buildingSublayers.BuildingComponentSublayer"),N=(0,R.v)();let Q=class extends(I.Z.LoadableMixin((0,F.v)(B))){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.fields=null,this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl.path}/sublayers/${this.id}`,query:this.layer.parsedUrl.query}:null}get fieldsIndex(){return new q.Z(this.fields)}readAssociatedLayer(e,t){const r=this.layer.associatedFeatureServiceItem,s=t.associatedLayerID;return(0,u.pC)(r)&&"number"==typeof s?new O.default({portalItem:r,layerId:s}):null}get objectIdField(){if(null!=this.fields)for(const e of this.fields)if("oid"===e.type)return e.name;return null}get displayField(){return(0,u.pC)(this.associatedLayer)?this.associatedLayer.displayField:null}get apiKey(){return this.layer.apiKey}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const t=(0,u.pC)(e)?e.signal:null,r=this._fetchService(t).then((()=>{this.indexInfo=(0,E.T)(this.parsedUrl.path,this.rootNode,this.nodePages,this.apiKey,k,t)}));return this.addResolvingPromise(r),Promise.resolve(this)}createPopupTemplate(e){return(0,Z.eZ)(this,e)}async _fetchService(e){const t=(await(0,w.default)(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){const r=this.getFeatureType(t?.feature)?.domains?.[e];return r&&"inherited"!==r.type?r:this.getField(e)?.domain??null}getFeatureType(e){return e&&(0,u.pC)(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return(0,u.pC)(this.associatedLayer)?this.associatedLayer.types:[]}get typeIdField(){return(0,u.pC)(this.associatedLayer)?this.associatedLayer.typeIdField:null}get geometryType(){return"3d-object"===this.layerType?"mesh":"point"}get profile(){return"3d-object"===this.layerType?"mesh-pyramids":"points"}get capabilities(){const e=(0,u.pC)(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:P.C,{query:t,data:{supportsZ:r,supportsM:s,isVersioned:i}}=e;return{query:t,data:{supportsZ:r,supportsM:s,isVersioned:i}}}createQuery(){const e=new M.Z;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=this.layer,t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:(0,u.pC)(this.associatedLayer)}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return(0,u.pC)(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),(0,u.Wi)(this.associatedLayer))throw new a.Z("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new a.Z("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};(0,s._)([(0,h.Cb)({readOnly:!0})],Q.prototype,"parsedUrl",null),(0,s._)([(0,h.Cb)({type:U.U4,readOnly:!0})],Q.prototype,"nodePages",void 0),(0,s._)([(0,h.Cb)({type:[U.QI],readOnly:!0})],Q.prototype,"materialDefinitions",void 0),(0,s._)([(0,h.Cb)({type:[U.Yh],readOnly:!0})],Q.prototype,"textureSetDefinitions",void 0),(0,s._)([(0,h.Cb)({type:[U.H3],readOnly:!0})],Q.prototype,"geometryDefinitions",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],Q.prototype,"serviceUpdateTimeStamp",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],Q.prototype,"store",void 0),(0,s._)([(0,h.Cb)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],Q.prototype,"rootNode",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],Q.prototype,"attributeStorageInfo",void 0),(0,s._)([(0,h.Cb)(N.fields)],Q.prototype,"fields",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],Q.prototype,"fieldsIndex",null),(0,s._)([(0,h.Cb)({readOnly:!0,type:O.default})],Q.prototype,"associatedLayer",void 0),(0,s._)([(0,g.r)("service","associatedLayer",["associatedLayerID"])],Q.prototype,"readAssociatedLayer",null),(0,s._)([(0,h.Cb)(N.outFields)],Q.prototype,"outFields",void 0),(0,s._)([(0,h.Cb)({type:String,readOnly:!0})],Q.prototype,"objectIdField",null),(0,s._)([(0,h.Cb)({readOnly:!0,type:String,json:{read:!1}})],Q.prototype,"displayField",null),(0,s._)([(0,h.Cb)({readOnly:!0,type:String})],Q.prototype,"apiKey",null),(0,s._)([(0,h.Cb)({readOnly:!0,type:x.Z})],Q.prototype,"fullExtent",null),(0,s._)([(0,h.Cb)({readOnly:!0,type:m.Z})],Q.prototype,"spatialReference",null),(0,s._)([(0,h.Cb)({readOnly:!0})],Q.prototype,"version",null),(0,s._)([(0,h.Cb)({readOnly:!0,type:D.ZP})],Q.prototype,"elevationInfo",null),(0,s._)([(0,h.Cb)({readOnly:!0,type:Number})],Q.prototype,"minScale",null),(0,s._)([(0,h.Cb)({readOnly:!0,type:Number})],Q.prototype,"maxScale",null),(0,s._)([(0,h.Cb)({readOnly:!0,type:Number})],Q.prototype,"effectiveScaleRange",null),(0,s._)([(0,h.Cb)({type:["hide","show"],json:{write:!0}})],Q.prototype,"listMode",void 0),(0,s._)([(0,h.Cb)({types:S.o,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],Q.prototype,"renderer",void 0),(0,s._)([(0,h.Cb)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],Q.prototype,"definitionExpression",void 0),(0,s._)([(0,h.Cb)(T.C_)],Q.prototype,"popupEnabled",void 0),(0,s._)([(0,h.Cb)({type:_.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],Q.prototype,"popupTemplate",void 0),(0,s._)([(0,h.Cb)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],Q.prototype,"normalReferenceFrame",void 0),(0,s._)([(0,h.Cb)({readOnly:!0,json:{read:!1}})],Q.prototype,"defaultPopupTemplate",null),(0,s._)([(0,h.Cb)()],Q.prototype,"types",null),(0,s._)([(0,h.Cb)()],Q.prototype,"typeIdField",null),(0,s._)([(0,h.Cb)({json:{write:!1}}),(0,j.J)(new C.X({"3DObject":"3d-object",Point:"point"}))],Q.prototype,"layerType",void 0),(0,s._)([(0,h.Cb)()],Q.prototype,"geometryType",null),(0,s._)([(0,h.Cb)()],Q.prototype,"profile",null),(0,s._)([(0,h.Cb)({readOnly:!0,json:{read:!1}})],Q.prototype,"capabilities",null),Q=(0,s._)([(0,f.j)("esri.layers.buildingSublayers.BuildingComponentSublayer")],Q);const K=Q;var V,H=r(96863);const $={type:i.Z,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:W}}},read:!1}};function W(e,t,r){if(e&&Array.isArray(e))return new i.Z(e.map((e=>{const t=function(e){return"group"===e.layerType?G:K}(e);if(t){const s=new t;return s.read(e,r),s}r&&r.messages&&e&&r.messages.push(new H.Z("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r}))})))}let G=V=class extends B{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return(0,l.w)(this,(e=>V.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)}))))}};var z;(0,s._)([(0,h.Cb)({type:["hide","show","hide-children"],json:{write:!0}})],G.prototype,"listMode",void 0),(0,s._)([(0,h.Cb)($)],G.prototype,"sublayers",void 0),G=V=(0,s._)([(0,f.j)("esri.layers.buildingSublayers.BuildingGroupSublayer")],G),(z=G||(G={})).sublayersProperty=$,z.readSublayers=W,z.forEachSublayer=function e(t,r){t.forEach((t=>{r(t),"building-group"===t.type&&e(t.sublayers,r)}))};const J=G;var X=r(91223),Y=r(87232),ee=r(43330),te=r(18241),re=r(95874),se=r(69877),ie=r(82064),oe=r(12173);let ae=class extends ie.wq{constructor(){super(...arguments),this.type=null}};(0,s._)([(0,h.Cb)({type:String,readOnly:!0,json:{write:!0}})],ae.prototype,"type",void 0),ae=(0,s._)([(0,f.j)("esri.layers.support.BuildingFilterAuthoringInfo")],ae);const ne=ae;var le;let pe=le=class extends ie.wq{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new le({filterType:this.filterType,filterValues:(0,n.d9)(this.filterValues)})}};(0,s._)([(0,h.Cb)({type:String,json:{write:!0}})],pe.prototype,"filterType",void 0),(0,s._)([(0,h.Cb)({type:[String],json:{write:!0}})],pe.prototype,"filterValues",void 0),pe=le=(0,s._)([(0,f.j)("esri.layers.support.BuildingFilterAuthoringInfoType")],pe);const ue=pe;var ye;const de=i.Z.ofType(ue);let ce=ye=class extends ie.wq{clone(){return new ye({filterTypes:(0,n.d9)(this.filterTypes)})}};(0,s._)([(0,h.Cb)({type:de,json:{write:!0}})],ce.prototype,"filterTypes",void 0),ce=ye=(0,s._)([(0,f.j)("esri.layers.support.BuildingFilterAuthoringInfoBlock")],ce);const he=ce;var be;const ge=i.Z.ofType(he);let fe=be=class extends ne{constructor(){super(...arguments),this.type="checkbox"}clone(){return new be({filterBlocks:(0,n.d9)(this.filterBlocks)})}};(0,s._)([(0,h.Cb)({type:["checkbox"]})],fe.prototype,"type",void 0),(0,s._)([(0,h.Cb)({type:ge,json:{write:!0}})],fe.prototype,"filterBlocks",void 0),fe=be=(0,s._)([(0,f.j)("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],fe);const me=fe;let ve=class extends ie.wq{};(0,s._)([(0,h.Cb)({readOnly:!0,json:{read:!1}})],ve.prototype,"type",void 0),ve=(0,s._)([(0,f.j)("esri.layers.support.BuildingFilterMode")],ve);const _e=ve;var Se;let we=Se=class extends _e{constructor(){super(...arguments),this.type="solid"}clone(){return new Se}};(0,s._)([(0,h.Cb)({type:["solid"],readOnly:!0,json:{write:!0}})],we.prototype,"type",void 0),we=Se=(0,s._)([(0,f.j)("esri.layers.support.BuildingFilterModeSolid")],we);const Ce=we;var Ie,Fe=r(64372);let je=Ie=class extends _e{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new Ie({edges:(0,n.d9)(this.edges)})}};(0,s._)([(0,j.J)({wireFrame:"wire-frame"})],je.prototype,"type",void 0),(0,s._)([(0,h.Cb)(Fe.Z)],je.prototype,"edges",void 0),je=Ie=(0,s._)([(0,f.j)("esri.layers.support.BuildingFilterModeWireFrame")],je);const xe=je;var Oe;let Le=Oe=class extends _e{constructor(){super(...arguments),this.type="x-ray"}clone(){return new Oe}};(0,s._)([(0,h.Cb)({type:["x-ray"],readOnly:!0,json:{write:!0}})],Le.prototype,"type",void 0),Le=Oe=(0,s._)([(0,f.j)("esri.layers.support.BuildingFilterModeXRay")],Le);const Te=Le;var Ae;const Be={nonNullable:!0,types:{key:"type",base:_e,typeMap:{solid:Ce,"wire-frame":xe,"x-ray":Te}},json:{read:e=>{switch(e&&e.type){case"solid":return Ce.fromJSON(e);case"wireFrame":return xe.fromJSON(e);case"x-ray":return Te.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let Pe=Ae=class extends ie.wq{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new Ce,this.title=""}clone(){return new Ae({filterExpression:this.filterExpression,filterMode:(0,n.d9)(this.filterMode),title:this.title})}};(0,s._)([(0,h.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Pe.prototype,"filterExpression",void 0),(0,s._)([(0,h.Cb)(Be)],Pe.prototype,"filterMode",void 0),(0,s._)([(0,h.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Pe.prototype,"title",void 0),Pe=Ae=(0,s._)([(0,f.j)("esri.layers.support.BuildingFilterBlock")],Pe);const Re=Pe;var qe;const Ee=i.Z.ofType(Re);let Ue=qe=class extends ie.wq{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=(0,oe.D)(),this.name=null}clone(){return new qe({description:this.description,filterBlocks:(0,n.d9)(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:(0,n.d9)(this.filterAuthoringInfo)})}};(0,s._)([(0,h.Cb)({type:String,json:{write:!0}})],Ue.prototype,"description",void 0),(0,s._)([(0,h.Cb)({type:Ee,json:{write:{enabled:!0,isRequired:!0}}})],Ue.prototype,"filterBlocks",void 0),(0,s._)([(0,h.Cb)({types:{key:"type",base:ne,typeMap:{checkbox:me}},json:{read:e=>"checkbox"===(e&&e.type)?me.fromJSON(e):null,write:!0}})],Ue.prototype,"filterAuthoringInfo",void 0),(0,s._)([(0,h.Cb)({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],Ue.prototype,"id",void 0),(0,s._)([(0,h.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Ue.prototype,"name",void 0),Ue=qe=(0,s._)([(0,f.j)("esri.layers.support.BuildingFilter")],Ue);const Me=Ue,Ze=p.Z.getLogger("esri.layers.support.BuildingSummaryStatistics");let De=class extends ie.wq{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};(0,s._)([(0,h.Cb)({type:String})],De.prototype,"fieldName",void 0),(0,s._)([(0,h.Cb)({type:String})],De.prototype,"modelName",void 0),(0,s._)([(0,h.Cb)({type:String})],De.prototype,"label",void 0),(0,s._)([(0,h.Cb)({type:Number})],De.prototype,"min",void 0),(0,s._)([(0,h.Cb)({type:Number})],De.prototype,"max",void 0),(0,s._)([(0,h.Cb)({json:{read:e=>Array.isArray(e)&&(e.every((e=>"string"==typeof e))||e.every((e=>"number"==typeof e)))?e.slice():null}})],De.prototype,"mostFrequentValues",void 0),(0,s._)([(0,h.Cb)({type:[Number]})],De.prototype,"subLayerIds",void 0),De=(0,s._)([(0,f.j)("esri.layers.support.BuildingFieldStatistics")],De);let ke=class extends(I.Z.LoadableMixin((0,F.v)(ie.wq))){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(Ze.error("building summary statistics are not loaded"),null)}load(e){const t=(0,u.pC)(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}async _fetchService(e){const t=(await(0,w.default)(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service"})}};(0,s._)([(0,h.Cb)({constructOnly:!0,type:String})],ke.prototype,"url",void 0),(0,s._)([(0,h.Cb)({readOnly:!0,type:[De],json:{read:{source:"summary"}}})],ke.prototype,"fields",null),ke=(0,s._)([(0,f.j)("esri.layers.support.BuildingSummaryStatistics")],ke);const Ne=ke;var Qe=r(31906);const Ke=p.Z.getLogger("esri.layers.BuildingSceneLayer"),Ve=i.Z.ofType(Me),He=(0,n.d9)(J.sublayersProperty);He.json.origins["web-scene"]={type:[K],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},He.json.origins["portal-item"]={type:[K],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let $e=class extends((0,se.Vt)((0,Y.Y)((0,ee.q)((0,te.I)((0,re.M)((0,y.R)((0,X.V)(v.Z)))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new o.Z({getCollections:()=>[this.sublayers],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this.sublayerOverrides=null,this.filters=new Ve,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene"}normalizeCtorArgs(e){return"string"==typeof e?{url:e}:e}destroy(){this.allSublayers.destroy()}readSublayers(e,t,r){const s=J.readSublayers(e,t,r);return J.forEachSublayer(s,(e=>e.layer=this)),this.sublayerOverrides&&(this.applySublayerOverrides(s,this.sublayerOverrides),this.sublayerOverrides=null),s}applySublayerOverrides(e,{overrides:t,context:r}){J.forEachSublayer(e,(e=>e.read(t.get(e.id),r)))}readSublayerOverrides(e,t){const r=new Map;for(const s of e)null!=s&&"object"==typeof s&&"number"==typeof s.id?r.set(s.id,s):t.messages.push(new a.Z("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:s}));return{overrides:r,context:t}}writeSublayerOverrides(e,t,r){const s=[];J.forEachSublayer(this.sublayers,(e=>{const t=e.write({},r);Object.keys(t).length>1&&s.push(t)})),s.length>0&&(t.sublayers=s)}writeUnappliedOverrides(e,t){t.sublayers=[],e.overrides.forEach((e=>{t.sublayers.push((0,n.d9)(e))}))}write(e,t){return e=super.write(e,t),!t||"web-scene"!==t.origin&&"portal-item"!==t.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,t):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e}read(e,t){if(super.read(e,t),t&&("web-scene"===t.origin||"portal-item"===t.origin)&&null!=e&&Array.isArray(e.sublayers)){const r=this.readSublayerOverrides(e.sublayers,t);this.sublayers?this.applySublayerOverrides(this.sublayers,r):this.sublayerOverrides=r}}readSummaryStatistics(e,t){if("string"==typeof t.statisticsHRef){const e=(0,c.v_)(this.parsedUrl.path,t.statisticsHRef);return new Ne({url:e})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const t=(0,u.pC)(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(d.r9).then((()=>this._fetchService(t))).then((()=>this._fetchAssociatedFeatureService(t)));return this.addResolvingPromise(r),Promise.resolve(this)}loadAll(){return(0,l.G)(this,(e=>{J.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)})),this.summaryStatistics&&e(this.summaryStatistics)}))}async saveAs(e,t){return this._debouncedSaveOperations(se.xp.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(se.xp.SAVE,e)}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new a.Z("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&Ke.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&Ke.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}async _fetchAssociatedFeatureService(e){const t=new Qe.W(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedFeatureServiceItem=await t.fetchPortalItem()}catch(e){Ke.warn("Associated feature service item could not be loaded",e)}}};(0,s._)([(0,h.Cb)({type:["BuildingSceneLayer"]})],$e.prototype,"operationalLayerType",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],$e.prototype,"allSublayers",void 0),(0,s._)([(0,h.Cb)(He)],$e.prototype,"sublayers",void 0),(0,s._)([(0,g.r)("service","sublayers")],$e.prototype,"readSublayers",null),(0,s._)([(0,h.Cb)({type:Ve,nonNullable:!0,json:{write:!0}})],$e.prototype,"filters",void 0),(0,s._)([(0,h.Cb)({type:String,json:{write:!0}})],$e.prototype,"activeFilterId",void 0),(0,s._)([(0,h.Cb)({readOnly:!0,type:Ne})],$e.prototype,"summaryStatistics",void 0),(0,s._)([(0,g.r)("summaryStatistics",["statisticsHRef"])],$e.prototype,"readSummaryStatistics",null),(0,s._)([(0,h.Cb)({type:[String],json:{read:!1}})],$e.prototype,"outFields",void 0),(0,s._)([(0,h.Cb)(T.vg)],$e.prototype,"fullExtent",void 0),(0,s._)([(0,h.Cb)({type:["show","hide","hide-children"]})],$e.prototype,"listMode",void 0),(0,s._)([(0,h.Cb)((0,T.Lx)(m.Z))],$e.prototype,"spatialReference",void 0),(0,s._)([(0,h.Cb)(T.PV)],$e.prototype,"elevationInfo",null),(0,s._)([(0,h.Cb)({json:{read:!1},readOnly:!0})],$e.prototype,"type",void 0),(0,s._)([(0,h.Cb)()],$e.prototype,"associatedFeatureServiceItem",void 0),$e=(0,s._)([(0,f.j)("esri.layers.BuildingSceneLayer")],$e);const We=$e},31906:(e,t,r)=>{r.d(t,{W:()=>u});var s=r(88256),i=r(66341),o=r(61681),a=r(78668),n=r(21187),l=r(26869),p=r(53110);class u{constructor(e,t,r,s){this.parsedUrl=e,this.portalItem=t,this.apiKey=r,this.signal=s,this.rootDocument=null;const i=this.parsedUrl.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);i&&(this.urlParts={root:i[1],layerId:parseInt(i[2],10)})}async fetch(){if(!this.urlParts)return null;const e=this.portalItem??await this._portalItemFromServiceItemId();if((0,o.Wi)(e))return this._loadFromUrl();const t=await this._findAndLoadRelatedPortalItem(e);return(0,o.Wi)(t)?null:this._loadFeatureLayerFromPortalItem(t)}async fetchPortalItem(){if(!this.urlParts)return null;const e=this.portalItem??await this._portalItemFromServiceItemId();return(0,o.Wi)(e)?null:this._findAndLoadRelatedPortalItem(e)}async _fetchRootDocument(){if((0,o.pC)(this.rootDocument))return this.rootDocument;if((0,o.Wi)(this.urlParts))return this.rootDocument={},{};const e={query:{f:"json",token:this.apiKey},responseType:"json",signal:this.signal},t=`${this.urlParts.root}/SceneServer`;try{const r=await(0,i.default)(t,e);this.rootDocument=r.data}catch{this.rootDocument={}}return this.rootDocument}async _fetchServiceOwningPortalUrl(){const e=s.id?.findServerInfo(this.parsedUrl.path);if(e?.owningSystemUrl)return e.owningSystemUrl;const t=this.parsedUrl.path.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const e=(await(0,i.default)(t,{query:{f:"json"},responseType:"json",signal:this.signal})).data.owningSystemUrl;if(e)return e}catch(e){(0,a.r9)(e)}return null}async _findAndLoadRelatedPortalItem(e){try{return(await e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal})).find((e=>"Feature Service"===e.type))||null}catch(e){return(0,a.r9)(e),null}}async _loadFeatureLayerFromPortalItem(e){await e.load({signal:this.signal});const t=await this._findMatchingAssociatedSublayerUrl(e.url);return new n.default({url:t,portalItem:e}).load({signal:this.signal})}async _loadFromUrl(){const e=await this._findMatchingAssociatedSublayerUrl(`${this.urlParts.root}/FeatureServer`);return new n.default({url:e}).load({signal:this.signal})}async _findMatchingAssociatedSublayerUrl(e){const t=e.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),r={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},s=this.urlParts.layerId,o=this._fetchRootDocument(),a=(0,i.default)(t,r),[n,l]=await Promise.all([a,o]),p=l&&l.layers,u=n.data&&n.data.layers;if(!Array.isArray(u))throw new Error("expected layers array");if(Array.isArray(p)){for(let e=0;e<Math.min(p.length,u.length);e++)if(p[e].id===s)return`${t}/${u[e].id}`}else if(s<u.length)return`${t}/${u[s].id}`;throw new Error("could not find matching associated sublayer")}async _portalItemFromServiceItemId(){const e=(await this._fetchRootDocument()).serviceItemId;if(!e)return null;const t=new p.default({id:e,apiKey:this.apiKey}),r=await this._fetchServiceOwningPortalUrl();(0,o.pC)(r)&&(t.portal=new l.Z({url:r}));try{return t.load({signal:this.signal})}catch(e){return(0,a.r9)(e),null}}}},31484:(e,t,r)=>{r.d(t,{C:()=>s});const s={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}}}}]);