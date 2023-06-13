"use strict";(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[9849],{89849:(e,t,r)=>{r.r(t),r.d(t,{default:()=>F});var s=r(36663),i=(r(91957),r(70375)),o=r(61681),n=r(78668),a=r(3466),u=r(81977),l=(r(7283),r(7753),r(34248)),p=r(40266),c=r(12926),d=r(39994),y=r(68309),h=r(47109),m=r(51211),f=r(91772);let g=class extends y.Z{constructor(e){super(e),this.type="csv",this.refresh=(0,n.Ds)((async e=>{await this.load();const{extent:t,timeExtent:r}=await this._connection.invoke("refresh",e);return t&&(this.sourceJSON.extent=t),r&&(this.sourceJSON.timeInfo.timeExtent=[r.start,r.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}))}load(e){const t=(0,o.pC)(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,t={}){await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return m.Z.fromJSON(r)}async queryFeaturesJSON(e,t={}){return await this.load(t),this._connection.invoke("queryFeatures",e?e.toJSON():null,t)}async queryFeatureCount(e,t={}){return await this.load(t),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}async queryObjectIds(e,t={}){return await this.load(t),this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}async queryExtent(e,t={}){await this.load(t);const r=await this._connection.invoke("queryExtent",e?e.toJSON():null,t);return{count:r.count,extent:f.Z.fromJSON(r.extent)}}async querySnapping(e,t={}){return await this.load(t),this._connection.invoke("querySnapping",e,t)}async _startWorker(e){this._connection=await(0,h.bA)("CSVSourceWorker",{strategy:(0,d.Z)("feature-layers-workers")?"dedicated":"local",signal:e});const{url:t,delimiter:r,fields:s,latitudeField:i,longitudeField:o,spatialReference:n,timeInfo:a}=this.loadOptions,u=await this._connection.invoke("load",{url:t,customParameters:this.customParameters,parsingOptions:{delimiter:r,fields:s?.map((e=>e.toJSON())),latitudeField:i,longitudeField:o,spatialReference:n?.toJSON(),timeInfo:a?.toJSON()}},{signal:e});this.locationInfo=u.locationInfo,this.sourceJSON=u.layerDefinition,this.delimiter=u.delimiter}};(0,s._)([(0,u.Cb)()],g.prototype,"type",void 0),(0,s._)([(0,u.Cb)()],g.prototype,"loadOptions",void 0),(0,s._)([(0,u.Cb)()],g.prototype,"customParameters",void 0),(0,s._)([(0,u.Cb)()],g.prototype,"locationInfo",void 0),(0,s._)([(0,u.Cb)()],g.prototype,"sourceJSON",void 0),(0,s._)([(0,u.Cb)()],g.prototype,"delimiter",void 0),g=(0,s._)([(0,p.j)("esri.layers.graphics.sources.CSVSource")],g);var v=r(40400),b=r(14626),C=r(16641),S=r(14685);function w(e,t){throw new i.Z(t,`CSVLayer (title: ${e.title}, id: ${e.id}) cannot be saved to a portal item`)}let _=class extends c.default{constructor(...e){super(...e),this.geometryType="point",this.capabilities=(0,v.MS)(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.spatialReference=S.Z.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=(0,o.pC)(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["CSV"],supportsData:!1},e).catch(n.r9).then((async()=>this.initLayerProperties(await this.createGraphicsSource(t))));return this.addResolvingPromise(r),Promise.resolve(this)}get isTable(){return this.loaded&&null==this.geometryType}readWebMapLabelsVisible(e,t){return null!=t.showLabels?t.showLabels:!!(t.layerDefinition&&t.layerDefinition.drawingInfo&&t.layerDefinition.drawingInfo.labelingInfo)}set url(e){if(!e)return void this._set("url",e);const t=(0,a.mN)(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async createGraphicsSource(e){const t=new g({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField??void 0,longitudeField:this.longitudeField??void 0,spatialReference:this.spatialReference??void 0,timeInfo:this.timeInfo??void 0,url:this.url},customParameters:this.customParameters??void 0});return this._set("source",t),await t.load({signal:e}),this.read({locationInfo:t.locationInfo,columnDelimiter:t.delimiter},{origin:"service",url:this.parsedUrl}),t}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(b.Z.from(e)||this.createQuery()))).then((e=>{if(e?.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(b.Z.from(e)||this.createQuery())))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(b.Z.from(e)||this.createQuery())))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(b.Z.from(e)||this.createQuery())))}read(e,t){super.read(e,t),t&&"service"===t.origin&&this.revert(["latitudeField","longitudeField"],"service")}write(e,t){return super.write(e,{...t,writeLayerSchema:!0})}clone(){throw new i.Z("csv-layer:clone",`CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`)}async save(e){return w(this,"csv-layer:save")}async saveAs(e,t){return w(this,"csv-layer:save-as")}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return(0,o.pC)(t)&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};(0,s._)([(0,u.Cb)({readOnly:!0,json:{read:!1,write:!1}})],_.prototype,"capabilities",void 0),(0,s._)([(0,u.Cb)({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],_.prototype,"delimiter",void 0),(0,s._)([(0,u.Cb)({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],_.prototype,"editingEnabled",void 0),(0,s._)([(0,u.Cb)({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],_.prototype,"fields",void 0),(0,s._)([(0,u.Cb)({type:Boolean,readOnly:!0})],_.prototype,"isTable",null),(0,s._)([(0,l.r)("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],_.prototype,"readWebMapLabelsVisible",null),(0,s._)([(0,u.Cb)({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],_.prototype,"latitudeField",void 0),(0,s._)([(0,u.Cb)({type:["show","hide"]})],_.prototype,"listMode",void 0),(0,s._)([(0,u.Cb)({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],_.prototype,"locationType",void 0),(0,s._)([(0,u.Cb)({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],_.prototype,"longitudeField",void 0),(0,s._)([(0,u.Cb)({type:["CSV"]})],_.prototype,"operationalLayerType",void 0),(0,s._)([(0,u.Cb)()],_.prototype,"outFields",void 0),(0,s._)([(0,u.Cb)({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],_.prototype,"path",void 0),(0,s._)([(0,u.Cb)({json:{read:!1},cast:null,type:g,readOnly:!0})],_.prototype,"source",void 0),(0,s._)([(0,u.Cb)({json:{read:!1},value:"csv",readOnly:!0})],_.prototype,"type",void 0),(0,s._)([(0,u.Cb)({json:{read:C.r,write:{isRequired:!0,ignoreOrigin:!0,writer:C.w}}})],_.prototype,"url",null),_=(0,s._)([(0,p.j)("esri.layers.CSVLayer")],_);const F=_},10287:(e,t,r)=>{r.d(t,{g:()=>s});const s={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},40400:(e,t,r)=>{r.d(t,{Dm:()=>p,Hq:()=>c,MS:()=>d,bU:()=>a});var s=r(39994),i=r(67134),o=r(10287),n=r(86094);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?n.I4:"esriGeometryPolyline"===e?n.ET:n.lF}}}const u=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let l=1;function p(e,t){if((0,s.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let r=`this.${t} = null;`;for(const t in e)r+=`this${u.test(t)?`.${t}`:`["${t}"]`} = ${JSON.stringify(e[t])};`;const s=new Function(`\n      return class AttributesClass$${l++} {\n        constructor() {\n          ${r};\n        }\n      }\n    `)();return()=>new s}catch(r){return()=>({[t]:null,...e})}}function c(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,i.d9)(e)}}]}function d(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:o.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);