(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[3459],{1721:(e,t,r)=>{"use strict";r.d(t,{GZ:()=>l,wF:()=>n});var s=r(59472),i=r(28293),a=r(809),o=r(59351);async function l(e,t){return await e.load(),n(e,t)}async function n(e,t){const r=[],l=(...e)=>{for(const t of e)(0,s.Wi)(t)||(Array.isArray(t)?l(...t):i.Z.isCollection(t)?t.forEach((e=>l(e))):a.Z.isLoadable(t)&&r.push(t))};t(l);let n=null;if(await(0,o.UI)(r,(async e=>{!1!==(await(0,o.q6)(function(e){return"loadAll"in e&&"function"==typeof e.loadAll}(e)?e.loadAll():e.load())).ok||n||(n=e)})),n)throw n.loadError;return e}},66002:(e,t,r)=>{"use strict";r.d(t,{yZ:()=>i});var s=r(93533);function i(e,t){const r=t||e.extent,i=e.width,a=(0,s.c9)(r&&r.spatialReference);return r&&i?r.width/i*a*s.hd*96:0}},13459:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Z});var s=r(56140),i=(r(95830),r(59472)),a=(r(36544),r(68055)),o=r(79881),l=r(30590),n=r(87566),y=r(60538),p=r(32656),c=(r(10923),r(57002),r(9678)),u=(r(86035),r(7830)),h=r(52937),m=r(36654),d=r(1721),b=r(56700),g=r(87864),f=r(43072),v=r(18152),S=r(78910),x=r(48899),_=r(57407),w=r(63795),C=r(33716),O=r(2194),L=r(10113),E=r(2584),P=r(77204),D=r(66002),N=r(5698),I=r(41452),q=r(24681),M=r(49708),j=r(79152);const J={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let F=class extends((0,P.p)(j.Z)){constructor(e){super(e),this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>e.toExportImageJSON()));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,q.FN)(this.visibleSublayers,this.layer.serviceSublayers,this.layer)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(J[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){const e=this.visibleSublayers.filter((e=>null!=e.definitionExpression));return e.length?JSON.stringify(e.reduce(((e,t)=>(e[t.id]=t.definitionExpression,e)),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const t=this.layer.sublayers,r=t=>{const s=this.scale,i=0===s,a=0===t.minScale||s<=t.minScale,o=0===t.maxScale||s>=t.maxScale;t.visible&&(i||a&&o)&&(t.sublayers?t.sublayers.forEach(r):e.unshift(t))};t&&t.forEach(r);const s=this._get("visibleSublayers");return!s||s.length!==e.length||s.some(((t,r)=>e[r]!==t))?e:s}toJSON(){const e=this.layer;let t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t={...t,layers:this.layers,layerDefs:this.layerDefs},t}};(0,s._)([(0,o.Cb)({readOnly:!0})],F.prototype,"dynamicLayers",null),(0,s._)([(0,o.Cb)({readOnly:!0})],F.prototype,"hasDynamicLayers",null),(0,s._)([(0,o.Cb)()],F.prototype,"layer",null),(0,s._)([(0,o.Cb)({readOnly:!0})],F.prototype,"layers",null),(0,s._)([(0,o.Cb)({readOnly:!0})],F.prototype,"layerDefs",null),(0,s._)([(0,o.Cb)({type:Number})],F.prototype,"scale",void 0),(0,s._)([(0,o.Cb)(v.qG)],F.prototype,"timeExtent",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],F.prototype,"version",null),(0,s._)([(0,o.Cb)({readOnly:!0})],F.prototype,"visibleSublayers",null),F=(0,s._)([(0,n.j)("esri.layers.mixins.ExportImageParameters")],F);let R=class extends((0,_.h)((0,E.n)((0,L.M)((0,O.Q)((0,M.x)((0,N.O)((0,x.Y)((0,S.q)((0,C.I)((0,f.R)((0,w.N)((0,P.p)(b.Z))))))))))))){constructor(...e){super(...e),this.alwaysRefetch=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=(0,i.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).then((()=>this._fetchService(t)),(()=>this._fetchService(t)))),Promise.resolve(this)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.indexOf("PNG32")>-1?"png32":"png24"}writeSublayers(e,t,r,s){if(!this.loaded||!e)return;const i=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray();let a=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const e=(0,c.M9)(s.origin);if(3===e){const e=this.createSublayersForOrigin("service").sublayers;a=(0,q.QV)(i,e,2)}else if(e>3){const e=this.createSublayersForOrigin("portal-item");a=(0,q.QV)(i,e.sublayers,(0,c.M9)(e.origin))}}const o=[],l={writeSublayerStructure:a,...s};let n=a;i.forEach((e=>{const t=e.write({},l);o.push(t),n=n||"user"===e.originOf("visible")})),o.some((e=>Object.keys(e).length>1))&&(t.layers=o),n&&(t.visibleLayers=i.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,t,r,s){const i=s&&s.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const a=new F({layer:this,scale:(0,D.yZ)({extent:e,width:t})*i}),o=a.toJSON();a.destroy();const l=!s||!s.rotation||this.version<10.3?{}:{rotation:-s.rotation},n=e&&e.spatialReference,y=n.wkid||JSON.stringify(n.toJSON());o.dpi*=i;const p={};if(null!=s&&s.timeExtent){const{start:e,end:t}=s.timeExtent.toJSON();p.time=e&&t&&e===t?""+e:`${null==e?"null":e},${null==t?"null":t}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(p.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:y,imageSR:y,size:t+","+r,...o,...l,...p}}async fetchImage(e,t,r,s){const i={responseType:"image"};s&&s.timestamp&&(i.query={...i.query,_ts:s.timestamp}),s&&s.signal&&(i.signal=s.signal),this.customParameters&&Object.keys(this.customParameters).length&&(i.query={...this.customParameters,...i.query});const a=this.parsedUrl.path+"/export",o={...this.parsedUrl.query,...this.createExportImageParameters(e,t,r,s),f:"image",_ts:this.alwaysRefetch?Date.now():null};return null==o.dynamicLayers||this.capabilities.exportMap.supportsDynamicLayers?(i.query?i.query={...o,...i.query}:i.query=o,(0,m.default)(a,i).then((e=>e.data)).catch((e=>{if((0,u.D_)(e))throw e;throw new p.Z("mapimagelayer:image-fetch-error",`Unable to load image: ${a}`,{error:e})}))):Promise.reject(new p.Z("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:o}))}async fetchRecomputedExtents(e={}){const t={...e,query:{returnUpdates:!0,f:"json"}},{data:r}=await(0,m.default)(this.url,t),{extent:s,fullExtent:i,timeExtent:a}=r,o=s||i;return{fullExtent:o&&h.Z.fromJSON(o),timeExtent:a&&g.Z.fromJSON({start:a[0],end:a[1]})}}loadAll(){return(0,d.GZ)(this,(e=>{e(this.allSublayers)}))}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:r}=await(0,m.default)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters},signal:e});r&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})}};(0,s._)([(0,o.Cb)()],R.prototype,"alwaysRefetch",void 0),(0,s._)([(0,o.Cb)()],R.prototype,"dpi",void 0),(0,s._)([(0,o.Cb)()],R.prototype,"gdbVersion",void 0),(0,s._)([(0,o.Cb)()],R.prototype,"imageFormat",void 0),(0,s._)([(0,l.r)("imageFormat",["supportedImageFormatTypes"])],R.prototype,"readImageFormat",null),(0,s._)([(0,o.Cb)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],R.prototype,"imageMaxHeight",void 0),(0,s._)([(0,o.Cb)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],R.prototype,"imageMaxWidth",void 0),(0,s._)([(0,o.Cb)()],R.prototype,"imageTransparency",void 0),(0,s._)([(0,o.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],R.prototype,"isReference",void 0),(0,s._)([(0,o.Cb)({json:{read:!1,write:!1}})],R.prototype,"labelsVisible",void 0),(0,s._)([(0,o.Cb)({type:["ArcGISMapServiceLayer"]})],R.prototype,"operationalLayerType",void 0),(0,s._)([(0,o.Cb)({json:{read:!1,write:!1}})],R.prototype,"popupEnabled",void 0),(0,s._)([(0,o.Cb)()],R.prototype,"sourceJSON",void 0),(0,s._)([(0,o.Cb)({json:{write:{ignoreOrigin:!0}}})],R.prototype,"sublayers",void 0),(0,s._)([(0,y.c)("sublayers",{layers:{type:[I.Z]},visibleLayers:{type:[a.z8]}})],R.prototype,"writeSublayers",null),(0,s._)([(0,o.Cb)({type:["show","hide","hide-children"]})],R.prototype,"listMode",void 0),(0,s._)([(0,o.Cb)({json:{read:!1},readOnly:!0,value:"map-image"})],R.prototype,"type",void 0),(0,s._)([(0,o.Cb)(v.HQ)],R.prototype,"url",void 0),R=(0,s._)([(0,n.j)("esri.layers.MapImageLayer")],R);const Z=R}}]);