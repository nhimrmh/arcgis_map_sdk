"use strict";(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[3912],{63912:(e,i,s)=>{s.r(i),s.d(i,{default:()=>o});var r=s(36663),t=s(39994),n=s(61681),a=s(76868),l=(s(13802),s(7283),s(7753),s(70375),s(40266)),u=s(15553),d=s(44838);let y=class extends d.default{initialize(){this.addHandles([(0,a.YP)((()=>this.view.scale),(()=>this._update()),a.nn)],"constructor")}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),i=this._commandsQueue.updating,s=null!=this._updatingRequiredFieldsPromise,r=!this._proxy||!this._proxy.isReady,n=this._pipelineIsUpdating,a=null==this.tileRenderer||this.tileRenderer?.updating,l=e&&(i||s||r||n||a);return(0,t.Z)("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${l}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${i}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${r}\n  -> updatingPipeline ${n}\n  -> updatingTileRenderer ${a}\n`),l}_injectOverrides(e){let i=super._injectOverrides(e);const s=this.view.scale,r=this.layer.sublayers.filter((e=>function(e,i){return!e.visible||0!==e.minScale&&i>e.minScale||0!==e.maxScale&&i<e.maxScale}(e,s))).map((e=>e.subtypeCode));if(!r.length)return i;i=(0,n.pC)(i)?i:(new u.Z).toJSON();const t=`NOT ${this.layer.subtypeField} IN (${r.join(",")})`;return i.where=i.where?`(${i.where}) AND (${t})`:t,i}_setLayersForFeature(e){const i=this.layer.fieldsIndex.get(this.layer.subtypeField),s=e.attributes[i.name],r=this.layer.sublayers.find((e=>e.subtypeCode===s));e.layer=e.sourceLayer=r}_createSchemaConfig(){const e={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map((e=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:e.labelingInfo,labelsVisible:e.labelsVisible,renderer:e.renderer,subtypeCode:e.subtypeCode,orderBy:null})))},i=this.layer.sublayers.map((e=>e.subtypeCode)).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${i})`:"1=2";let r=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return r+=s,{...super._createSchemaConfig(),...e,definitionExpression:r}}};y=(0,r._)([(0,l.j)("esri.views.2d.layers.SubtypeGroupLayerView2D")],y);const o=y}}]);