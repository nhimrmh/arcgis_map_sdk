"use strict";(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[2037],{97992:(e,t,i)=>{i.d(t,{Z:()=>c});var s=i(36663),r=i(53443),n=i(41151),o=i(86618),l=i(82064),a=i(61681),p=i(81977),y=(i(7283),i(7753),i(40266));let u=0,d=class extends((0,l.eC)((0,n.J)((0,o.IG)(r.Z)))){constructor(e){super(e),this.id=`${Date.now().toString(16)}-analysis-${u++}`,this.title=null}get parent(){return this._get("parent")}set parent(e){const t=this.parent;if((0,a.pC)(t))switch(t.type){case"line-of-sight":case"dimension":t.releaseAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this)}this._set("parent",e)}get isEditable(){return this.requiredPropertiesForEditing.every(a.pC)}};(0,s._)([(0,p.Cb)({type:String,constructOnly:!0,clonable:!1})],d.prototype,"id",void 0),(0,s._)([(0,p.Cb)({type:String})],d.prototype,"title",void 0),(0,s._)([(0,p.Cb)({constructOnly:!0})],d.prototype,"type",void 0),(0,s._)([(0,p.Cb)({clonable:!1,value:null})],d.prototype,"parent",null),(0,s._)([(0,p.Cb)({readOnly:!0})],d.prototype,"isEditable",null),(0,s._)([(0,p.Cb)({readOnly:!0})],d.prototype,"requiredPropertiesForEditing",void 0),d=(0,s._)([(0,y.j)("esri.analysis.Analysis")],d);const c=d},63886:(e,t,i)=>{i.d(t,{Z:()=>b});var s=i(36663),r=i(15065),n=i(53443),o=i(41151),l=i(82064),a=i(61681),p=i(81977),y=(i(7283),i(7753),i(40266)),u=i(98786),d=i(67666),c=i(74710);let h=class extends((0,l.eC)((0,o.J)(n.Z))){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return(0,a._W)(this.position,e.position)&&(0,a._W)(this.elevationInfo,e.elevationInfo)&&(0,r.kk)(this.feature,e.feature)}};(0,s._)([(0,p.Cb)({type:d.Z}),(0,u.B)()],h.prototype,"position",void 0),(0,s._)([(0,p.Cb)({type:c.Z}),(0,u.B)()],h.prototype,"elevationInfo",void 0),(0,s._)([(0,p.Cb)(r.rX)],h.prototype,"feature",void 0),h=(0,s._)([(0,y.j)("esri.analysis.LineOfSightAnalysisObserver")],h);const b=h},31200:(e,t,i)=>{i.d(t,{Z:()=>h});var s=i(36663),r=i(15065),n=i(41151),o=i(82064),l=i(61681),a=i(81977),p=(i(7283),i(7753),i(40266)),y=i(98786),u=i(67666),d=i(74710);let c=class extends((0,o.eC)(n.j)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return(0,l._W)(this.position,e.position)&&(0,l._W)(this.elevationInfo,e.elevationInfo)&&(0,r.kk)(this.feature,e.feature)}};(0,s._)([(0,a.Cb)({type:u.Z}),(0,y.B)()],c.prototype,"position",void 0),(0,s._)([(0,a.Cb)({type:d.Z}),(0,y.B)()],c.prototype,"elevationInfo",void 0),(0,s._)([(0,a.Cb)(r.rX)],c.prototype,"feature",void 0),c=(0,s._)([(0,p.j)("esri.analysis.LineOfSightAnalysisTarget")],c);const h=c},15065:(e,t,i)=>{i.d(t,{kk:()=>r,pD:()=>n,rX:()=>o});var s=i(61681);function r(e,t){return n(e)===n(t)}function n(e){if((0,s.Wi)(e))return null;const t=null!=e.layer?e.layer.id:"";let i=null;return i=null!=e.objectId?e.objectId:null!=e.layer&&"objectIdField"in e.layer&&null!=e.layer.objectIdField&&null!=e.attributes?e.attributes[e.layer.objectIdField]:e.uid,null==i?null:`o-${t}-${i}`}const o={json:{write:{writer:function(e,t){(0,s.Wi)(e)||null==e.layer?.objectIdField||null==e.attributes||(t.feature={layerId:e.layer.id,objectId:e.attributes[e.layer.objectIdField]})},target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:function(e){if(null!=e.layerId&&null!=e.objectId)return{uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}}}}}},42037:(e,t,i)=>{i.r(t),i.d(t,{default:()=>x});var s=i(36663),r=i(97992),n=i(63886),o=i(31200),l=i(41831),a=i(58811),p=i(61681),y=i(76868),u=i(81977),d=(i(7283),i(7753),i(40266)),c=i(90472),h=i(37116),b=i(83772);const g=l.Z.ofType(o.Z);let v=class extends r.Z{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles((0,y.YP)((()=>this._computeExtent()),(e=>{((0,p.Wi)(e)||(0,p.Wi)(e.pending))&&this._set("extent",(0,p.pC)(e)?e.extent:null)}),y.tX))}get targets(){return this._get("targets")||new g}set targets(e){this._set("targets",(0,a.Z)(e,this.targets,g))}get spatialReference(){return(0,p.pC)(this.observer)&&(0,p.pC)(this.observer.position)?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return[(0,p.yw)(this.observer,(e=>e.position))]}async waitComputeExtent(){const e=this._computeExtent();return(0,p.pC)(e)?(0,p.Wg)(e.pending):Promise.resolve()}_computeExtent(){const e=this.spatialReference;if((0,p.Wi)(this.observer)||(0,p.Wi)(this.observer.position)||(0,p.Wi)(e))return null;const t=e=>"absolute-height"===(0,b.VW)(e.position,e.elevationInfo),i=this.observer.position,s=(0,h.al)(i.x,i.y,i.z,i.x,i.y,i.z);for(const t of this.targets)if((0,p.pC)(t.position)){const i=(0,c.dz)(t.position,e);if((0,p.pC)(i.pending))return{pending:i.pending,extent:null};if((0,p.pC)(i.geometry)){const{x:e,y:t,z:r}=i.geometry;(0,h.pp)(s,[e,t,r])}}const r=(0,h.HH)(s,e);return t(this.observer)&&this.targets.every(t)||(r.zmin=void 0,r.zmax=void 0),{pending:null,extent:r}}clear(){this.observer=null,this.targets.removeAll()}};(0,s._)([(0,u.Cb)({type:["line-of-sight"]})],v.prototype,"type",void 0),(0,s._)([(0,u.Cb)({type:n.Z,json:{read:!0,write:!0}})],v.prototype,"observer",void 0),(0,s._)([(0,u.Cb)({cast:a.R,type:g,nonNullable:!0,json:{read:!0,write:!0}})],v.prototype,"targets",null),(0,s._)([(0,u.Cb)({value:null,readOnly:!0})],v.prototype,"extent",void 0),(0,s._)([(0,u.Cb)({readOnly:!0})],v.prototype,"spatialReference",null),(0,s._)([(0,u.Cb)({readOnly:!0})],v.prototype,"requiredPropertiesForEditing",null),v=(0,s._)([(0,d.j)("esri.analysis.LineOfSightAnalysis")],v);const f=v;var C=i(15842),_=i(38481),w=i(43330);const j=l.Z.ofType(o.Z);let I=class extends((0,w.q)((0,C.R)(_.Z))){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new f,this.opacity=1}initialize(){this.addHandles((0,y.YP)((()=>this.analysis),((e,t)=>{(0,p.pC)(t)&&t.parent===this&&(t.parent=null),(0,p.pC)(e)&&(e.parent=this)}),y.tX))}async load(){return(0,p.pC)(this.analysis)&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){return(0,p.yw)(this.analysis,(e=>e.observer))}set observer(e){(0,p.yw)(this.analysis,(t=>t.observer=e))}get targets(){return(0,p.pC)(this.analysis)?this.analysis.targets:new l.Z}set targets(e){(0,a.Z)(e,this.analysis?.targets)}get fullExtent(){return(0,p.pC)(this.analysis)?this.analysis.extent:null}get spatialReference(){return(0,p.pC)(this.analysis)?(0,p.Wg)(this.analysis.spatialReference):null}releaseAnalysis(e){this.analysis===e&&(this.analysis=new f)}};(0,s._)([(0,u.Cb)({json:{read:!1},readOnly:!0})],I.prototype,"type",void 0),(0,s._)([(0,u.Cb)({type:["LineOfSightLayer"]})],I.prototype,"operationalLayerType",void 0),(0,s._)([(0,u.Cb)({type:n.Z,json:{read:!0,write:{ignoreOrigin:!0}}})],I.prototype,"observer",null),(0,s._)([(0,u.Cb)({type:j,json:{read:!0,write:{ignoreOrigin:!0}}})],I.prototype,"targets",null),(0,s._)([(0,u.Cb)({nonNullable:!0,json:{read:!1,write:!1}})],I.prototype,"analysis",void 0),(0,s._)([(0,u.Cb)({readOnly:!0})],I.prototype,"fullExtent",null),(0,s._)([(0,u.Cb)({readOnly:!0})],I.prototype,"spatialReference",null),(0,s._)([(0,u.Cb)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],I.prototype,"opacity",void 0),(0,s._)([(0,u.Cb)({type:["show","hide"]})],I.prototype,"listMode",void 0),I=(0,s._)([(0,d.j)("esri.layers.LineOfSightLayer")],I);const x=I}}]);