(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[2303],{32303:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>x});var r=o(56140),i=(o(95830),o(34926)),l=o(59472),s=(o(36544),o(68055),o(79881)),n=o(30590),a=o(87566),p=o(10923),y=(o(57002),o(86035),o(34535)),u=o(48142),d=o(36654),c=o(50764),S=o(5674),h=o(88083),b=(o(89982),o(56700)),v=o(43072),C=o(18152),f=o(78910),m=o(57407),_=o(33716),g=o(2194),R=o(10113);const k=["atom","xml"],w={base:y.Z,key:"type",typeMap:{"simple-line":u.Z},errorContext:"symbol"},Z={base:y.Z,key:"type",typeMap:{"picture-marker":c.Z,"simple-marker":h.Z},errorContext:"symbol"},F={base:y.Z,key:"type",typeMap:{"simple-fill":S.Z},errorContext:"symbol"};let j=class extends((0,m.h)((0,g.Q)((0,f.q)((0,_.I)((0,R.M)((0,v.R)(b.Z))))))){constructor(...e){super(...e),this.description=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.outSpatialReference=null,this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?(0,p.vt)(this.url,k)||"GeoRSS":e||""}set title(e){this._set("title",e)}readFeatureCollections(e,t){return t.featureCollection.layers.forEach((e=>{const t=e.layerDefinition.drawingInfo.renderer.symbol;t&&"esriSFS"===t.type&&t.outline&&-1!==t.outline.style.indexOf("esriSFS")&&(t.outline.style="esriSLSSolid")})),t.featureCollection.layers}load(e){const t=(0,l.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).then((()=>this._fetchService(t)),(()=>this._fetchService(t)))),Promise.resolve(this)}async _fetchService(e){const{data:t}=await(0,d.default)(i.Z.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:this.outSpatialReference?JSON.stringify(this.outSpatialReference.toJSON()):void 0},signal:e});this.read(t,{origin:"service"})}};(0,r._)([(0,s.Cb)()],j.prototype,"description",void 0),(0,r._)([(0,s.Cb)({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],j.prototype,"title",null),(0,r._)([(0,s.Cb)()],j.prototype,"featureCollections",void 0),(0,r._)([(0,n.r)("service","featureCollections",["featureCollection.layers"])],j.prototype,"readFeatureCollections",null),(0,r._)([(0,s.Cb)(C.id)],j.prototype,"id",void 0),(0,r._)([(0,s.Cb)(C.rn)],j.prototype,"legendEnabled",void 0),(0,r._)([(0,s.Cb)({types:w,json:{write:!0}})],j.prototype,"lineSymbol",void 0),(0,r._)([(0,s.Cb)({type:["show","hide"]})],j.prototype,"listMode",void 0),(0,r._)([(0,s.Cb)({types:Z,json:{write:!0}})],j.prototype,"pointSymbol",void 0),(0,r._)([(0,s.Cb)({types:F,json:{write:!0}})],j.prototype,"polygonSymbol",void 0),(0,r._)([(0,s.Cb)({type:["GeoRSS"]})],j.prototype,"operationalLayerType",void 0),(0,r._)([(0,s.Cb)()],j.prototype,"outSpatialReference",void 0),(0,r._)([(0,s.Cb)(C.HQ)],j.prototype,"url",void 0),(0,r._)([(0,s.Cb)({readOnly:!0,json:{read:!1},value:"geo-rss"})],j.prototype,"type",void 0),j=(0,r._)([(0,a.j)("esri.layers.GeoRSSLayer")],j);const x=j}}]);