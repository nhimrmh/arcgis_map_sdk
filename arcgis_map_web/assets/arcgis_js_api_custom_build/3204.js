(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[3204],{73204:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>A});var i=r(56140),o=(r(95830),r(82550)),a=r(10103),l=r(59472),n=(r(36544),r(68055),r(79881)),s=r(30590),y=r(15307),p=r(87566),u=r(60538),d=r(32656),c=(r(10923),r(57002),r(86035),r(27780)),m=r(73032),f=r(52937),b=(r(36348),r(28293)),h=r(48142),g=r(5674),S=r(88083),v=r(44190),C=(r(89982),r(15988)),w=r(56700),O=r(43072),_=r(55162),N=r(78910),J=r(91535),L=r(70834),M=r(57407),T=r(33716),x=r(10113),Z=r(8809),I=r(96981),R=r(99322);let j=class extends((0,M.h)((0,x.M)(w.Z))){constructor(e){super(e),this.elevationInfo=null,this.graphics=new R.ZP,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};(0,i._)([(0,n.Cb)({type:I.Z})],j.prototype,"elevationInfo",void 0),(0,i._)([(0,n.Cb)((0,R.$o)())],j.prototype,"graphics",void 0),(0,i._)([(0,n.Cb)({type:["show","hide"]})],j.prototype,"listMode",void 0),(0,i._)([(0,n.Cb)()],j.prototype,"screenSizePerspectiveEnabled",void 0),(0,i._)([(0,n.Cb)({readOnly:!0})],j.prototype,"type",void 0),(0,i._)([(0,n.Cb)({constructOnly:!0})],j.prototype,"internal",void 0),j=(0,i._)([(0,p.j)("esri.layers.GraphicsLayer")],j);const E=j;var D=r(53277);function P(e){return e.layers.some((e=>null!=e.layerDefinition.visibilityField))}const G=new L.Z({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),F=new L.Z({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let W=class extends E{constructor(){super(...arguments),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",(e=>{e.item.sourceLayer=this.layer})),this.graphics.on("after-remove",(e=>{e.item.sourceLayer=null}))}get sublayers(){return this.graphics}};(0,i._)([(0,n.Cb)({readOnly:!0})],W.prototype,"sublayers",null),(0,i._)([(0,n.Cb)()],W.prototype,"layer",void 0),(0,i._)([(0,n.Cb)({readOnly:!0})],W.prototype,"visibilityMode",void 0),W=(0,i._)([(0,p.j)("esri.layers.MapNotesLayer.MapNotesSublayer")],W);const k=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",layerId:"polygonLayer",title:"Polygons",identifyingSymbol:(new g.Z).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",layerId:"polylineLayer",title:"Polylines",identifyingSymbol:(new h.Z).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",layerId:"multipointLayer",title:"Multipoints",identifyingSymbol:(new S.Z).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"pointLayer",title:"Points",identifyingSymbol:(new S.Z).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"textLayer",title:"Text",identifyingSymbol:(new v.Z).toJSON()}];let z=class extends((0,M.h)((0,x.M)((0,N.q)((0,T.I)((0,O.R)(w.Z)))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.minScale=0,this.maxScale=0,this.spatialReference=m.Z.WGS84,this.sublayers=new b.Z(k.map((e=>new W({id:e.layerId,title:e.title,layer:this})))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,r){return{operations:{supportsMapNotesEditing:!P(t)&&"portal-item"!==(null==r?void 0:r.origin)}}}readFeatureCollections(e,t,r){if(!P(t))return null;const i=t.layers.map((e=>{const t=new Z.default;return t.read(e,r),t}));return new b.Z({items:i})}readLegacyfeatureCollectionJSON(e,t){return P(t)?(0,o.d9)(t.featureCollection):null}readFullExtent(e,t){if(!t.layers.length)return new f.Z({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:m.Z.WGS84});const r=m.Z.fromJSON(t.layers[0].layerDefinition.spatialReference);return t.layers.reduce(((e,t)=>{const r=t.layerDefinition.extent;return r?f.Z.fromJSON(r).union(e):e}),new f.Z({spatialReference:r}))}readMinScale(e,t){for(const e of t.layers)if(null!=e.layerDefinition.minScale)return e.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const e of t.layers)if(null!=e.layerDefinition.maxScale)return e.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?m.Z.fromJSON(t.layers[0].layerDefinition.spatialReference):m.Z.WGS84}readSublayers(e,t,r){if(P(t))return null;const i=[];for(let e=0;e<t.layers.length;e++){var o;const{layerDefinition:r,featureSet:a}=t.layers[e],l=null!=(o=r.geometryType)?o:a.geometryType,n=k.find((e=>{var t,i,o;return l===e.geometryTypeJSON&&(null==(t=r.drawingInfo)||null==(i=t.renderer)||null==(o=i.symbol)?void 0:o.type)===e.identifyingSymbol.type}));if(n){const e=new W({id:n.layerId,title:r.name,layer:this,graphics:a.features.map((({geometry:e,symbol:t,attributes:r,popupInfo:i})=>C.Z.fromJSON({attributes:r,geometry:e,symbol:t,popupTemplate:i})))});i.push(e)}}return new b.Z(i)}writeSublayers(e,t,r,i){const{minScale:o,maxScale:n}=this;if((0,l.Wi)(e))return;const s=e.some((e=>e.graphics.length>0));var y;if(!this.capabilities.operations.supportsMapNotesEditing)return void(s&&(null==i||null==(y=i.messages)||y.push(new d.Z("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const p=[];let u=this.spatialReference.toJSON();e:for(const t of e)for(const e of t.graphics)if((0,l.pC)(e.geometry)){u=e.geometry.spatialReference.toJSON();break e}for(const t of k){const r=e.find((e=>t.layerId===e.id));this._writeMapNoteSublayer(p,r,t,o,n,u,i)}(0,a.RB)("featureCollection.layers",p,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=(0,o.d9)(e),Object.assign(e,e.featureCollection)),super.read(e,t)}async beforeSave(){if((0,l.Wi)(this.sublayers))return;let e=null;const t=[];for(const r of this.sublayers)for(const i of r.graphics)if((0,l.pC)(i.geometry)){const r=i.geometry;e?(0,c.fS)(r.spatialReference,e)||((0,_.Up)(r.spatialReference,e)||(0,_.kR)()||await(0,_.zD)(),i.geometry=(0,_.iV)(r,e)):e=r.spatialReference,t.push(i)}const r=await(0,J.aX)(t.map((e=>e.geometry)));t.forEach(((e,t)=>e.geometry=r[t]))}_findSublayer(e){var t,r;return(0,l.Wi)(this.sublayers)?null:null!=(t=null==(r=this.sublayers)?void 0:r.find((t=>t.id===e)))?t:null}_writeMapNoteSublayer(e,t,r,i,a,n,s){const y=[];if(!(0,l.Wi)(t)){for(const e of t.graphics)this._writeMapNote(y,e,r.geometryType,s);this._normalizeObjectIds(y,G),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:(0,o.d9)(r.identifyingSymbol)}},geometryType:r.geometryTypeJSON,minScale:i,maxScale:a,objectIdField:"OBJECTID",fields:[G.toJSON(),F.toJSON()],spatialReference:n},featureSet:{features:y,geometryType:r.geometryTypeJSON}})}}_writeMapNote(e,t,r,i){if((0,l.Wi)(t))return;const{geometry:o,symbol:a,popupTemplate:n}=t;if((0,l.Wi)(o))return;var s,p;if(o.type!==r)return void(null==i||null==(s=i.messages)||s.push(new y.Z("map-notes-layer:invalid-geometry-type",`Geometry "${o.type}" cannot be saved in "${r}" layer`,{graphic:t})));if((0,l.Wi)(a))return void(null==i||null==(p=i.messages)||p.push(new y.Z("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t})));const u={attributes:{...t.attributes},geometry:o.toJSON(),symbol:a.toJSON()};(0,l.pC)(n)&&(u.popupInfo=n.toJSON()),e.push(u)}_normalizeObjectIds(e,t){const r=t.name;let i=(0,D.S)(r,e)+1;const o=new Set;for(const t of e){t.attributes||(t.attributes={});const{attributes:e}=t;(null==e[r]||o.has(e[r]))&&(e[r]=i++),o.add(e[r])}}};(0,i._)([(0,n.Cb)({readOnly:!0})],z.prototype,"capabilities",void 0),(0,i._)([(0,s.r)(["portal-item","web-map"],"capabilities",["layers"])],z.prototype,"readCapabilities",null),(0,i._)([(0,n.Cb)({readOnly:!0})],z.prototype,"featureCollections",void 0),(0,i._)([(0,s.r)(["web-map","portal-item"],"featureCollections",["layers"])],z.prototype,"readFeatureCollections",null),(0,i._)([(0,n.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],z.prototype,"featureCollectionJSON",void 0),(0,i._)([(0,s.r)(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],z.prototype,"readLegacyfeatureCollectionJSON",null),(0,i._)([(0,n.Cb)({readOnly:!0,json:{read:!1,write:{enabled:!0,ignoreOrigin:!0}}})],z.prototype,"featureCollectionType",void 0),(0,i._)([(0,n.Cb)({json:{write:!1}})],z.prototype,"fullExtent",void 0),(0,i._)([(0,s.r)(["web-map","portal-item"],"fullExtent",["layers"])],z.prototype,"readFullExtent",null),(0,i._)([(0,n.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],z.prototype,"legendEnabled",void 0),(0,i._)([(0,n.Cb)({type:["show","hide"]})],z.prototype,"listMode",void 0),(0,i._)([(0,n.Cb)({type:Number,nonNullable:!0,json:{write:!1}})],z.prototype,"minScale",void 0),(0,i._)([(0,s.r)(["web-map","portal-item"],"minScale",["layers"])],z.prototype,"readMinScale",null),(0,i._)([(0,n.Cb)({type:Number,nonNullable:!0,json:{write:!1}})],z.prototype,"maxScale",void 0),(0,i._)([(0,s.r)(["web-map","portal-item"],"maxScale",["layers"])],z.prototype,"readMaxScale",null),(0,i._)([(0,n.Cb)({readOnly:!0})],z.prototype,"multipointLayer",null),(0,i._)([(0,n.Cb)({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],z.prototype,"operationalLayerType",void 0),(0,i._)([(0,n.Cb)({readOnly:!0})],z.prototype,"pointLayer",null),(0,i._)([(0,n.Cb)({readOnly:!0})],z.prototype,"polygonLayer",null),(0,i._)([(0,n.Cb)({readOnly:!0})],z.prototype,"polylineLayer",null),(0,i._)([(0,n.Cb)({type:m.Z})],z.prototype,"spatialReference",void 0),(0,i._)([(0,s.r)(["web-map","portal-item"],"spatialReference",["layers"])],z.prototype,"readSpatialReference",null),(0,i._)([(0,n.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],z.prototype,"sublayers",void 0),(0,i._)([(0,s.r)("web-map","sublayers",["layers"])],z.prototype,"readSublayers",null),(0,i._)([(0,u.c)("web-map","sublayers")],z.prototype,"writeSublayers",null),(0,i._)([(0,n.Cb)({readOnly:!0})],z.prototype,"textLayer",null),(0,i._)([(0,n.Cb)()],z.prototype,"title",void 0),(0,i._)([(0,n.Cb)({readOnly:!0,json:{read:!1}})],z.prototype,"type",void 0),z=(0,i._)([(0,p.j)("esri.layers.MapNotesLayer")],z);const A=z},53277:(e,t,r)=>{"use strict";r.d(t,{S:()=>o,X:()=>i});const i=1;function o(e,t){let r=0;for(const o of t){var i;const t=null==(i=o.attributes)?void 0:i[e];"number"==typeof t&&isFinite(t)&&(r=Math.max(r,t))}return r}}}]);