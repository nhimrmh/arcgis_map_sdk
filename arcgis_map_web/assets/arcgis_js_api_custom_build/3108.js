"use strict";(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[3108],{73108:(e,t,o)=>{o.r(t),o.d(t,{default:()=>ee});var r=o(36663),i=o(80020),s=o(66341),n=o(70375),l=o(67134),a=o(13802),p=o(61681),d=o(15842),u=o(86745),y=o(78668),c=o(3466),h=o(81977),f=o(7283),b=o(34248),v=o(40266),m=o(39835),C=o(38481),w=o(91223),g=o(87232),_=o(43330),T=o(18241),j=o(95874),S=o(69724),x=o(79438),I=o(82064);o(7753);let V=class extends I.wq{constructor(e){super(e),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};(0,r._)([(0,h.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],V.prototype,"field",void 0),(0,r._)([(0,h.Cb)({readOnly:!0,nonNullable:!0,json:{read:!1}})],V.prototype,"type",void 0),V=(0,r._)([(0,v.j)("esri.layers.pointCloudFilters.PointCloudFilter")],V);const R=V;var P;let Z=P=class extends R{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new P({field:this.field,requiredClearBits:(0,l.d9)(this.requiredClearBits),requiredSetBits:(0,l.d9)(this.requiredSetBits)})}};(0,r._)([(0,h.Cb)({type:[f.z8],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],Z.prototype,"requiredClearBits",void 0),(0,r._)([(0,h.Cb)({type:[f.z8],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],Z.prototype,"requiredSetBits",void 0),(0,r._)([(0,x.J)({pointCloudBitfieldFilter:"bitfield"})],Z.prototype,"type",void 0),Z=P=(0,r._)([(0,v.j)("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],Z);const q=Z;var F;let B=F=class extends R{constructor(e){super(e),this.includedReturns=[],this.type="return"}clone(){return new F({field:this.field,includedReturns:(0,l.d9)(this.includedReturns)})}};(0,r._)([(0,h.Cb)({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],B.prototype,"includedReturns",void 0),(0,r._)([(0,x.J)({pointCloudReturnFilter:"return"})],B.prototype,"type",void 0),B=F=(0,r._)([(0,v.j)("esri.layers.pointCloudFilters.PointCloudReturnFilter")],B);const z=B;var N;let O=N=class extends R{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new N({field:this.field,mode:this.mode,values:(0,l.d9)(this.values)})}};(0,r._)([(0,h.Cb)({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],O.prototype,"mode",void 0),(0,r._)([(0,x.J)({pointCloudValueFilter:"value"})],O.prototype,"type",void 0),(0,r._)([(0,h.Cb)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],O.prototype,"values",void 0),O=N=(0,r._)([(0,v.j)("esri.layers.pointCloudFilters.PointCloudValueFilter")],O);const k={key:"type",base:R,typeMap:{value:O,bitfield:q,return:z}};var A,D=o(51599),K=o(12512),M=o(89076),E=o(18228),L=o(99723),U=o(46999);let J=A=class extends U.Z{constructor(e){super(e),this.type="point-cloud-rgb",this.field=null}clone(){return new A({...this.cloneProperties(),field:(0,l.d9)(this.field)})}};(0,r._)([(0,x.J)({pointCloudRGBRenderer:"point-cloud-rgb"})],J.prototype,"type",void 0),(0,r._)([(0,h.Cb)({type:String,json:{write:!0}})],J.prototype,"field",void 0),J=A=(0,r._)([(0,v.j)("esri.renderers.PointCloudRGBRenderer")],J);const G=J;var $=o(5947),W=o(60948);const X={key:"type",base:U.Z,typeMap:{"point-cloud-class-breaks":L.Z,"point-cloud-rgb":G,"point-cloud-stretch":$.Z,"point-cloud-unique-value":W.Z},errorContext:"renderer"};var Y=o(10171);const H=(0,M.v)();let Q=class extends((0,S.Vt)((0,g.Y)((0,_.q)((0,T.I)((0,j.M)((0,d.R)((0,w.V)(C.Z)))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const t=this.fieldsIndex.get(e);return t&&t.domain?t.domain:null}readServiceFields(e,t,o){return Array.isArray(e)?e.map((e=>{const t=new K.Z;return"FieldTypeInteger"===e.type&&((e=(0,l.d9)(e)).type="esriFieldTypeInteger"),t.read(e,o),t})):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map((e=>new K.Z({name:e.name,type:"ELEVATION"===e.name?"double":"integer"}))):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}writeRenderer(e,t,o,r){(0,u.RB)("layerDefinition.drawingInfo.renderer",e.write({},r),t)}load(e){const t=(0,p.pC)(e)?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(y.r9).then((()=>this._fetchService(t)));return this.addResolvingPromise(o),Promise.resolve(this)}createPopupTemplate(e){const t=(0,Y.eZ)(this,e);return t&&(this._formatPopupTemplateReturnsField(t),this._formatPopupTemplateRGBField(t)),t}_formatPopupTemplateReturnsField(e){const t=this.fieldsIndex.get("RETURNS");if(!t)return;const o=e.fieldInfos?.find((e=>e.fieldName===t.name));if(!o)return;const r=new E.Z({name:"pcl-returns-decoded",title:t.alias||t.name,expression:`\n        var returnValue = $feature.${t.name};\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      `});e.expressionInfos=[...e.expressionInfos||[],r],o.fieldName="expression/pcl-returns-decoded"}_formatPopupTemplateRGBField(e){const t=this.fieldsIndex.get("RGB");if(!t)return;const o=e.fieldInfos?.find((e=>e.fieldName===t.name));if(!o)return;const r=new E.Z({name:"pcl-rgb-decoded",title:t.alias||t.name,expression:`\n        var rgb = $feature.${t.name};\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      `});e.expressionInfos=[...e.expressionInfos||[],r],o.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,t){if(await this.load(t),!this.attributeStorageInfo)throw new n.Z("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const o=this.fieldsIndex.get(e);if(!o)throw new n.Z("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const e of this.attributeStorageInfo)if(e.name===o.name){const o=(0,c.v_)(this.parsedUrl.path,`./statistics/${e.key}`);return(0,s.default)(o,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new n.Z("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(S.xp.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(S.xp.SAVE,e)}validateLayer(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new n.Z("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new n.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new n.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some((t=>t.name===e))}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&a.Z.getLogger(this.declaredClass).warn(".elevationInfo=","Point cloud layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&a.Z.getLogger(this.declaredClass).warn(".elevationInfo=","Point cloud layers do not support featureExpressionInfo"))}};(0,r._)([(0,h.Cb)({type:["PointCloudLayer"]})],Q.prototype,"operationalLayerType",void 0),(0,r._)([(0,h.Cb)(D.C_)],Q.prototype,"popupEnabled",void 0),(0,r._)([(0,h.Cb)({type:i.Z,json:{name:"popupInfo",write:!0}})],Q.prototype,"popupTemplate",void 0),(0,r._)([(0,h.Cb)({readOnly:!0,json:{read:!1}})],Q.prototype,"defaultPopupTemplate",null),(0,r._)([(0,h.Cb)({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],Q.prototype,"opacity",void 0),(0,r._)([(0,h.Cb)({type:["show","hide"]})],Q.prototype,"listMode",void 0),(0,r._)([(0,h.Cb)({types:[k],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],Q.prototype,"filters",void 0),(0,r._)([(0,h.Cb)({type:[K.Z]})],Q.prototype,"fields",void 0),(0,r._)([(0,h.Cb)(H.fieldsIndex)],Q.prototype,"fieldsIndex",void 0),(0,r._)([(0,b.r)("service","fields",["fields","attributeStorageInfo"])],Q.prototype,"readServiceFields",null),(0,r._)([(0,h.Cb)(H.outFields)],Q.prototype,"outFields",void 0),(0,r._)([(0,h.Cb)({readOnly:!0})],Q.prototype,"attributeStorageInfo",void 0),(0,r._)([(0,h.Cb)(D.PV)],Q.prototype,"elevationInfo",null),(0,r._)([(0,h.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],Q.prototype,"path",void 0),(0,r._)([(0,h.Cb)(D.rn)],Q.prototype,"legendEnabled",void 0),(0,r._)([(0,h.Cb)({types:X,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:X},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],Q.prototype,"renderer",void 0),(0,r._)([(0,m.c)("renderer")],Q.prototype,"writeRenderer",null),(0,r._)([(0,h.Cb)({json:{read:!1},readOnly:!0})],Q.prototype,"type",void 0),Q=(0,r._)([(0,v.j)("esri.layers.PointCloudLayer")],Q);const ee=Q},99723:(e,t,o)=>{o.d(t,{Z:()=>m});var r,i=o(36663),s=o(67134),n=o(81977),l=o(7283),a=o(79438),p=o(40266),d=o(46999),u=o(24794),y=o(30936),c=o(82064);let h=r=class extends c.wq{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new r({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:(0,s.d9)(this.color)})}};(0,i._)([(0,n.Cb)({type:String,json:{write:!0}})],h.prototype,"description",void 0),(0,i._)([(0,n.Cb)({type:String,json:{write:!0}})],h.prototype,"label",void 0),(0,i._)([(0,n.Cb)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],h.prototype,"minValue",void 0),(0,i._)([(0,n.Cb)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],h.prototype,"maxValue",void 0),(0,i._)([(0,n.Cb)({type:y.Z,json:{type:[l.z8],write:!0}})],h.prototype,"color",void 0),h=r=(0,i._)([(0,p.j)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],h);const f=h;var b;let v=b=class extends d.Z{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new b({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:(0,s.d9)(this.colorClassBreakInfos),legendOptions:(0,s.d9)(this.legendOptions)})}};(0,i._)([(0,a.J)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],v.prototype,"type",void 0),(0,i._)([(0,n.Cb)({json:{write:!0},type:String})],v.prototype,"field",void 0),(0,i._)([(0,n.Cb)({type:u.I,json:{write:!0}})],v.prototype,"legendOptions",void 0),(0,i._)([(0,n.Cb)({type:d.Z.fieldTransformTypeKebabDict.apiValues,json:{type:d.Z.fieldTransformTypeKebabDict.jsonValues,read:d.Z.fieldTransformTypeKebabDict.read,write:d.Z.fieldTransformTypeKebabDict.write}})],v.prototype,"fieldTransformType",void 0),(0,i._)([(0,n.Cb)({type:[f],json:{write:!0}})],v.prototype,"colorClassBreakInfos",void 0),v=b=(0,i._)([(0,p.j)("esri.renderers.PointCloudClassBreaksRenderer")],v);const m=v},46999:(e,t,o)=>{o.d(t,{Z:()=>j});var r,i=o(36663),s=o(25709),n=o(82064),l=o(67134),a=o(81977),p=(o(7283),o(40266));o(7753);let d=r=class extends n.wq{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new r({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};(0,i._)([(0,a.Cb)({type:String,json:{write:!0}})],d.prototype,"field",void 0),(0,i._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],d.prototype,"minValue",void 0),(0,i._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],d.prototype,"maxValue",void 0),d=r=(0,i._)([(0,p.j)("esri.renderers.support.pointCloud.ColorModulation")],d);const u=d,y=new s.X({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let c=class extends n.wq{};(0,i._)([(0,a.Cb)({type:y.apiValues,readOnly:!0,nonNullable:!0,json:{type:y.jsonValues,read:!1,write:y.write}})],c.prototype,"type",void 0),c=(0,i._)([(0,p.j)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],c);const h=c;var f,b=o(79438);let v=f=class extends h{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new f({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};(0,i._)([(0,b.J)({pointCloudFixedSizeAlgorithm:"fixed-size"})],v.prototype,"type",void 0),(0,i._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],v.prototype,"size",void 0),(0,i._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],v.prototype,"useRealWorldSymbolSizes",void 0),v=f=(0,i._)([(0,p.j)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],v);const m=v;var C;let w=C=class extends h{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new C({scaleFactor:this.scaleFactor})}};(0,i._)([(0,b.J)({pointCloudSplatAlgorithm:"splat"})],w.prototype,"type",void 0),(0,i._)([(0,a.Cb)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],w.prototype,"scaleFactor",void 0),w=C=(0,i._)([(0,p.j)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],w);const g={key:"type",base:h,typeMap:{"fixed-size":m,splat:w}},_=(0,s.w)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let T=class extends n.wq{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:(0,l.d9)(this.pointSizeAlgorithm),colorModulation:(0,l.d9)(this.colorModulation),pointsPerInch:(0,l.d9)(this.pointsPerInch)}}};(0,i._)([(0,a.Cb)({type:_.apiValues,readOnly:!0,nonNullable:!0,json:{type:_.jsonValues,read:!1,write:_.write}})],T.prototype,"type",void 0),(0,i._)([(0,a.Cb)({types:g,json:{write:!0}})],T.prototype,"pointSizeAlgorithm",void 0),(0,i._)([(0,a.Cb)({type:u,json:{write:!0}})],T.prototype,"colorModulation",void 0),(0,i._)([(0,a.Cb)({json:{write:!0},nonNullable:!0,type:Number})],T.prototype,"pointsPerInch",void 0),T=(0,i._)([(0,p.j)("esri.renderers.PointCloudRenderer")],T),(T||(T={})).fieldTransformTypeKebabDict=new s.X({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});const j=T},5947:(e,t,o)=>{o.d(t,{Z:()=>c});var r,i=o(36663),s=o(67134),n=o(81977),l=(o(7283),o(79438)),a=o(40266),p=o(46999),d=o(24794),u=o(68844);let y=r=class extends p.Z{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new r({...this.cloneProperties(),field:(0,s.d9)(this.field),fieldTransformType:(0,s.d9)(this.fieldTransformType),stops:(0,s.d9)(this.stops),legendOptions:(0,s.d9)(this.legendOptions)})}};(0,i._)([(0,l.J)({pointCloudStretchRenderer:"point-cloud-stretch"})],y.prototype,"type",void 0),(0,i._)([(0,n.Cb)({json:{write:!0},type:String})],y.prototype,"field",void 0),(0,i._)([(0,n.Cb)({type:d.I,json:{write:!0}})],y.prototype,"legendOptions",void 0),(0,i._)([(0,n.Cb)({type:p.Z.fieldTransformTypeKebabDict.apiValues,json:{type:p.Z.fieldTransformTypeKebabDict.jsonValues,read:p.Z.fieldTransformTypeKebabDict.read,write:p.Z.fieldTransformTypeKebabDict.write}})],y.prototype,"fieldTransformType",void 0),(0,i._)([(0,n.Cb)({type:[u.Z],json:{write:!0}})],y.prototype,"stops",void 0),y=r=(0,i._)([(0,a.j)("esri.renderers.PointCloudStretchRenderer")],y);const c=y},60948:(e,t,o)=>{o.d(t,{Z:()=>m});var r,i=o(36663),s=o(67134),n=o(81977),l=o(7283),a=o(79438),p=o(40266),d=o(46999),u=o(24794),y=o(30936),c=o(82064);let h=r=class extends c.wq{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new r({description:this.description,label:this.label,values:(0,s.d9)(this.values),color:(0,s.d9)(this.color)})}};(0,i._)([(0,n.Cb)({type:String,json:{write:!0}})],h.prototype,"description",void 0),(0,i._)([(0,n.Cb)({type:String,json:{write:!0}})],h.prototype,"label",void 0),(0,i._)([(0,n.Cb)({type:[String],json:{write:!0}})],h.prototype,"values",void 0),(0,i._)([(0,n.Cb)({type:y.Z,json:{type:[l.z8],write:!0}})],h.prototype,"color",void 0),h=r=(0,i._)([(0,p.j)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],h);const f=h;var b;let v=b=class extends d.Z{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new b({...this.cloneProperties(),field:(0,s.d9)(this.field),fieldTransformType:(0,s.d9)(this.fieldTransformType),colorUniqueValueInfos:(0,s.d9)(this.colorUniqueValueInfos),legendOptions:(0,s.d9)(this.legendOptions)})}};(0,i._)([(0,a.J)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],v.prototype,"type",void 0),(0,i._)([(0,n.Cb)({json:{write:!0},type:String})],v.prototype,"field",void 0),(0,i._)([(0,n.Cb)({type:d.Z.fieldTransformTypeKebabDict.apiValues,json:{type:d.Z.fieldTransformTypeKebabDict.jsonValues,read:d.Z.fieldTransformTypeKebabDict.read,write:d.Z.fieldTransformTypeKebabDict.write}})],v.prototype,"fieldTransformType",void 0),(0,i._)([(0,n.Cb)({type:[f],json:{write:!0}})],v.prototype,"colorUniqueValueInfos",void 0),(0,i._)([(0,n.Cb)({type:u.I,json:{write:!0}})],v.prototype,"legendOptions",void 0),v=b=(0,i._)([(0,p.j)("esri.renderers.PointCloudUniqueValueRenderer")],v);const m=v}}]);