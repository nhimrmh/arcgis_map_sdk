"use strict";(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[1655],{81655:(e,t,r)=>{r.r(t),r.d(t,{default:()=>V});var s=r(36663),o=(r(91957),r(80020)),i=(r(86004),r(45510),r(16192),r(71297),r(878),r(22836),r(50172),r(72043),r(72506),r(54021)),n=r(61681),a=r(15842),p=r(78668),u=r(3466),l=r(81977),d=(r(7283),r(7753),r(40266)),c=r(59659),y=r(38481),h=r(70375),m=r(39994),f=r(68309),b=r(13802),g=r(47109),_=r(40400),v=r(51211),C=r(91772),S=r(89542);const F="esri.layers.graphics.sources.GeoJSONSource",O=b.Z.getLogger(F);let I=class extends f.Z{constructor(){super(...arguments),this.type="geojson",this.refresh=(0,p.Ds)((async e=>{await this.load();const{extent:t,timeExtent:r}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,r&&(this.sourceJSON.timeInfo.timeExtent=[r.start,r.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}))}load(e){const t=(0,n.pC)(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}applyEdits(e){return this.load().then((()=>this._applyEdits(e)))}openPorts(){return this.load().then((()=>this._connection.openPorts()))}queryFeatures(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))).then((e=>v.Z.fromJSON(e)))}queryFeaturesJSON(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)))}queryFeatureCount(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))}queryObjectIds(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))}queryExtent(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:C.Z.fromJSON(e.extent)})))}querySnapping(e,t={}){return this.load(t).then((()=>this._connection.invoke("querySnapping",e,t)))}_applyEdits(e){if(!this._connection)throw new h.Z("geojson-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField,r=[],s=[],o=[];if(e.addFeatures)for(const t of e.addFeatures)r.push(this._serializeFeature(t));if(e.deleteFeatures)for(const r of e.deleteFeatures)"objectId"in r&&null!=r.objectId?s.push(r.objectId):"attributes"in r&&null!=r.attributes[t]&&s.push(r.attributes[t]);if(e.updateFeatures)for(const t of e.updateFeatures)o.push(this._serializeFeature(t));return this._connection.invoke("applyEdits",{adds:r,updates:o,deletes:s}).then((({extent:e,timeExtent:t,featureEditResults:r})=>(this.sourceJSON.extent=e,t&&(this.sourceJSON.timeInfo.timeExtent=[t.start,t.end]),this._createEditsResult(r))))}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new h.Z("geojson-layer-source:edit-failure",t.description,{code:t.code}):null}}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e);return r?{geometry:r.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return(0,n.Wi)(t)?null:"mesh"===t.type||"extent"===t.type?S.Z.fromExtent(t.extent):t}async _startWorker(e){this._connection=await(0,g.bA)("GeoJSONSourceWorker",{strategy:(0,m.Z)("feature-layers-workers")?"dedicated":"local",signal:e});const{fields:t,spatialReference:r,hasZ:s,geometryType:o,objectIdField:i,url:n,timeInfo:a,customParameters:p}=this.layer,u="defaults"===this.layer.originOf("spatialReference"),l={url:n,customParameters:p,fields:t&&t.map((e=>e.toJSON())),geometryType:c.M.toJSON(o),hasZ:s,objectIdField:i,timeInfo:a?a.toJSON():null,spatialReference:u?null:r&&r.toJSON()},d=await this._connection.invoke("load",l,{signal:e});for(const e of d.warnings)O.warn(e.message,{layer:this.layer,warning:e});d.featureErrors.length&&O.warn(`Encountered ${d.featureErrors.length} validation errors while loading features`,d.featureErrors),this.sourceJSON=d.layerDefinition,this.capabilities=(0,_.MS)(this.sourceJSON.hasZ,!0)}};(0,s._)([(0,l.Cb)()],I.prototype,"capabilities",void 0),(0,s._)([(0,l.Cb)()],I.prototype,"type",void 0),(0,s._)([(0,l.Cb)({constructOnly:!0})],I.prototype,"layer",void 0),(0,s._)([(0,l.Cb)()],I.prototype,"sourceJSON",void 0),I=(0,s._)([(0,d.j)(F)],I);var x=r(27668),E=r(63989),R=r(22368),w=r(91420),N=r(43330),j=r(50386),Z=r(18241),J=r(12478),P=r(95874),q=r(2030),T=r(51599),D=r(60822),k=r(18160),Q=r(12512),A=r(89076),G=r(17095),M=r(26732),z=r(49341),U=r(14626),$=r(10171),B=r(14685);const H=(0,A.v)();let L=class extends((0,j.c)((0,E.N)((0,w.M)((0,R.b)((0,x.h)((0,q.n)((0,P.M)((0,J.Q)((0,N.q)((0,Z.I)((0,a.R)(y.Z)))))))))))){constructor(e){super(e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new I({layer:this}),this.spatialReference=B.Z.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson",this.typeIdField=null,this.types=null}destroy(){this.source?.destroy()}load(e){const t=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},e).catch(p.r9).then((()=>this.source.load(e))).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),(0,G.YN)(this.renderer,this.fieldsIndex),(0,G.UF)(this.timeInfo,this.fieldsIndex)}));return this.addResolvingPromise(t),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}get parsedUrl(){return this.url?(0,u.mN)(this.url):null}set renderer(e){(0,G.YN)(e,this.fieldsIndex),this._set("renderer",e)}set url(e){if(!e)return void this._set("url",e);const t=(0,u.mN)(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async applyEdits(e,t){const s=await r.e(3580).then(r.bind(r,13580));await this.load();const o=await s.applyEdits(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),o}on(e,t){return super.on(e,t)}createPopupTemplate(e){return(0,$.eZ)(this,e)}createQuery(){const e=new U.Z,t=this.get("capabilities.data");e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:r,timeExtent:s}=this;return e.timeExtent=null!=r&&null!=s?s.offset(-r.value,r.unit):s||null,e}getFieldDomain(e,t){let r,s=!1;const o=t&&t.feature,i=o&&o.attributes,n=this.typeIdField&&i&&i[this.typeIdField];return null!=n&&this.types&&(s=this.types.some((t=>t.id==n&&(r=t.domains&&t.domains[e],r&&"inherited"===r.type&&(r=this._getLayerDomain(e)),!0)))),s||r||(r=this._getLayerDomain(e)),r}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(U.Z.from(e)||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(U.Z.from(e)||this.createQuery(),t)))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(U.Z.from(e)||this.createQuery(),t)))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(U.Z.from(e)||this.createQuery(),t)))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return(0,n.pC)(t)&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}_getLayerDomain(e){if(!this.fields)return null;let t=null;return this.fields.some((r=>(r.name===e&&(t=r.domain),!!t))),t}};(0,s._)([(0,l.Cb)({readOnly:!0,json:{read:!1,write:!1}})],L.prototype,"capabilities",null),(0,s._)([(0,l.Cb)({type:String})],L.prototype,"copyright",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],L.prototype,"createQueryVersion",null),(0,s._)([(0,l.Cb)({readOnly:!0})],L.prototype,"defaultPopupTemplate",null),(0,s._)([(0,l.Cb)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],L.prototype,"definitionExpression",void 0),(0,s._)([(0,l.Cb)({type:String})],L.prototype,"displayField",void 0),(0,s._)([(0,l.Cb)({type:Boolean})],L.prototype,"editingEnabled",void 0),(0,s._)([(0,l.Cb)(T.PV)],L.prototype,"elevationInfo",void 0),(0,s._)([(0,l.Cb)({type:[Q.Z],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],L.prototype,"fields",void 0),(0,s._)([(0,l.Cb)(H.fieldsIndex)],L.prototype,"fieldsIndex",void 0),(0,s._)([(0,l.Cb)({type:C.Z,json:{name:"extent"}})],L.prototype,"fullExtent",void 0),(0,s._)([(0,l.Cb)({type:["point","polygon","polyline","multipoint"],json:{read:{reader:c.M.read}}})],L.prototype,"geometryType",void 0),(0,s._)([(0,l.Cb)({type:Boolean})],L.prototype,"hasZ",void 0),(0,s._)([(0,l.Cb)(T.id)],L.prototype,"id",void 0),(0,s._)([(0,l.Cb)({type:Boolean,readOnly:!0})],L.prototype,"isTable",null),(0,s._)([(0,l.Cb)(T.iR)],L.prototype,"labelsVisible",void 0),(0,s._)([(0,l.Cb)({type:[M.Z],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:z.r},write:!0}})],L.prototype,"labelingInfo",void 0),(0,s._)([(0,l.Cb)(T.rn)],L.prototype,"legendEnabled",void 0),(0,s._)([(0,l.Cb)({type:["show","hide"]})],L.prototype,"listMode",void 0),(0,s._)([(0,l.Cb)({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],L.prototype,"objectIdField",void 0),(0,s._)([(0,l.Cb)(T.Oh)],L.prototype,"opacity",void 0),(0,s._)([(0,l.Cb)({type:["GeoJSON"]})],L.prototype,"operationalLayerType",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],L.prototype,"parsedUrl",null),(0,s._)([(0,l.Cb)(T.C_)],L.prototype,"popupEnabled",void 0),(0,s._)([(0,l.Cb)({type:o.Z,json:{name:"popupInfo",write:!0}})],L.prototype,"popupTemplate",void 0),(0,s._)([(0,l.Cb)({types:i.A,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:i.o}}}})],L.prototype,"renderer",null),(0,s._)([(0,l.Cb)(T.YI)],L.prototype,"screenSizePerspectiveEnabled",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],L.prototype,"source",void 0),(0,s._)([(0,l.Cb)({type:B.Z})],L.prototype,"spatialReference",void 0),(0,s._)([(0,l.Cb)({type:[D.Z]})],L.prototype,"templates",void 0),(0,s._)([(0,l.Cb)()],L.prototype,"title",void 0),(0,s._)([(0,l.Cb)({json:{read:!1},readOnly:!0})],L.prototype,"type",void 0),(0,s._)([(0,l.Cb)({type:String,readOnly:!0})],L.prototype,"typeIdField",void 0),(0,s._)([(0,l.Cb)({type:[k.Z]})],L.prototype,"types",void 0),(0,s._)([(0,l.Cb)(T.HQ)],L.prototype,"url",null),L=(0,s._)([(0,d.j)("esri.layers.GeoJSONLayer")],L);const V=L},10287:(e,t,r)=>{r.d(t,{g:()=>s});const s={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},40400:(e,t,r)=>{r.d(t,{Dm:()=>l,Hq:()=>d,MS:()=>c,bU:()=>a});var s=r(39994),o=r(67134),i=r(10287),n=r(86094);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?n.I4:"esriGeometryPolyline"===e?n.ET:n.lF}}}const p=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let u=1;function l(e,t){if((0,s.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let r=`this.${t} = null;`;for(const t in e)r+=`this${p.test(t)?`.${t}`:`["${t}"]`} = ${JSON.stringify(e[t])};`;const s=new Function(`\n      return class AttributesClass$${u++} {\n        constructor() {\n          ${r};\n        }\n      }\n    `)();return()=>new s}catch(r){return()=>({[t]:null,...e})}}function d(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,o.d9)(e)}}]}function c(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:i.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);