"use strict";(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[8536],{93711:(e,t,s)=>{s.d(t,{S:()=>n,X:()=>i});const i=1;function n(e,t){let s=0;for(const i of t){const t=i.attributes?.[e];"number"==typeof t&&isFinite(t)&&(s=Math.max(s,t))}return s}},98536:(e,t,s)=>{s.r(t),s.d(t,{default:()=>E});var i=s(70375),n=s(61681),r=s(53736),a=s(35925),u=s(12065),o=s(93711),l=s(4811),d=s(66069),p=s(14215),c=s(40400),y=s(24366),f=s(28790),h=s(86349),m=s(17095);const g=a.Zn,I={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:a.Zn},b={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function F(e){return(0,r.wp)(e)?null!=e.z:!!e.hasZ}function _(e){return(0,r.wp)(e)?null!=e.m:!!e.hasM}class E{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const t=[],{features:s}=e,n=this._inferLayerProperties(s,e.fields),r=e.fields||[],a=null!=e.hasM?e.hasM:n.hasM,u=null!=e.hasZ?e.hasZ:n.hasZ,y=!e.spatialReference&&!n.spatialReference,F=y?g:e.spatialReference||n.spatialReference,_=y?I:null,E=e.geometryType||n.geometryType,T=!E;let q=e.objectIdField||n.objectIdField,x=e.timeInfo;if(!T&&(y&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!E))throw new i.Z("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!q)throw new i.Z("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(n.objectIdField&&q!==n.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${q}" doesn't match the field name "${n.objectIdField}", found in the provided fields`}),q=n.objectIdField),q&&!n.objectIdField){let e=null;r.some((t=>t.name===q&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):r.unshift({alias:q,name:q,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const e of r){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),!e.name)throw new i.Z("feature-layer:invalid-field-name","field name is missing",{field:e});if(e.name===q&&(e.type="esriFieldTypeOID"),!h.v.jsonValues.includes(e.type))throw new i.Z("feature-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e})}const j={};for(const e of r)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){const t=(0,m.os)(e);void 0!==t&&(j[e.name]=t)}if(this._fieldsIndex=new f.Z(r),this._createDefaultAttributes=(0,c.Dm)(j,q),x){if(x.startTimeField){const e=this._fieldsIndex.get(x.startTimeField);e?(x.startTimeField=e.name,e.type="esriFieldTypeDate"):x.startTimeField=null}if(x.endTimeField){const e=this._fieldsIndex.get(x.endTimeField);e?(x.endTimeField=e.name,e.type="esriFieldTypeDate"):x.endTimeField=null}if(x.trackIdField){const e=this._fieldsIndex.get(x.trackIdField);e?x.trackIdField=e.name:(x.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:x}}))}x.startTimeField||x.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:x}}),x=null)}const R={warnings:t,featureErrors:[],layerDefinition:{...b,drawingInfo:(0,c.bU)(E),templates:(0,c.Hq)(j),extent:_,geometryType:E,objectIdField:q,fields:r,hasZ:!!u,hasM:!!a,timeInfo:x},assignedObjectIds:{}};if(this._queryEngine=new p.q({fields:r,geometryType:E,hasM:a,hasZ:u,objectIdField:q,spatialReference:F,featureStore:new l.Z({geometryType:E,hasM:a,hasZ:u}),timeInfo:x,cacheSpatialQueries:!0}),!s||!s.length)return this._nextObjectId=o.X,R;const w=(0,o.S)(q,s);return this._nextObjectId=w+1,await(0,d._W)(s,F),this._loadInitialFeatures(R,s)}async applyEdits(e){const{spatialReference:t,geometryType:s}=this._queryEngine;return await Promise.all([(0,y.b)(t,s),(0,d._W)(e.adds,t),(0,d._W)(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let s,i,a=null,u=null,o=null;for(const t of e){const e=t.geometry;if(!(0,n.Wi)(e)&&(a||(a=(0,r.Ji)(e)),u||(u=e.spatialReference),null==s&&(s=F(e)),null==i&&(i=_(e)),a&&u&&null!=s&&null!=i))break}if(t&&t.length){let e=null;t.some((t=>{const s="esriFieldTypeOID"===t.type,i=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,s||i}))&&(o=e.name)}return{geometryType:a,spatialReference:u,objectIdField:o,hasM:i,hasZ:s}}_loadInitialFeatures(e,t){const{geometryType:s,hasM:i,hasZ:a,objectIdField:o,spatialReference:l,featureStore:p}=this._queryEngine,c=[];for(const i of t){if(null!=i.uid&&(e.assignedObjectIds[i.uid]=-1),i.geometry&&s!==(0,r.Ji)(i.geometry)){e.featureErrors.push((0,y.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),a=(0,y.O0)(this._fieldsIndex,t,i.attributes,!0,e.warnings);a?e.featureErrors.push(a):(this._assignObjectId(t,i.attributes,!0),i.attributes=t,null!=i.uid&&(e.assignedObjectIds[i.uid]=i.attributes[o]),(0,n.pC)(i.geometry)&&(i.geometry=(0,d.iV)(i.geometry,i.geometry.spatialReference,l)),c.push(i))}if(p.addMany((0,u.Yn)([],c,s,a,i,o)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:s}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,s]}return e}_applyEdits(e){const{adds:t,updates:s,deletes:i}=e,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(n,t),s&&s.length&&this._applyUpdateEdits(n,s),i&&i.length){for(const e of i)n.deleteResults.push((0,y.d1)(e));this._queryEngine.featureStore.removeManyById(i)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:n}}_applyAddEdits(e,t){const{addResults:s}=e,{geometryType:i,hasM:a,hasZ:o,objectIdField:l,spatialReference:p,featureStore:c}=this._queryEngine,f=[];for(const a of t){if(a.geometry&&i!==(0,r.Ji)(a.geometry)){s.push((0,y.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),u=(0,y.O0)(this._fieldsIndex,t,a.attributes);if(u)s.push(u);else{if(this._assignObjectId(t,a.attributes),a.attributes=t,null!=a.uid){const t=a.attributes[l];e.uidToObjectId[a.uid]=t}(0,n.pC)(a.geometry)&&(a.geometry=(0,d.iV)((0,y.og)(a.geometry,p),a.geometry.spatialReference,p)),f.push(a),s.push((0,y.d1)(a.attributes[l]))}}c.addMany((0,u.Yn)([],f,i,o,a,l))}_applyUpdateEdits({updateResults:e},t){const{geometryType:s,hasM:i,hasZ:a,objectIdField:o,spatialReference:l,featureStore:p}=this._queryEngine;for(const c of t){const{attributes:t,geometry:f}=c,h=t&&t[o];if(null==h){e.push((0,y.av)(`Identifier field ${o} missing`));continue}if(!p.has(h)){e.push((0,y.av)(`Feature with object id ${h} missing`));continue}const m=(0,u.EI)(p.getFeature(h),s,a,i);if((0,n.pC)(f)){if(s!==(0,r.Ji)(f)){e.push((0,y.av)("Incorrect geometry type."));continue}m.geometry=(0,d.iV)((0,y.og)(f,l),f.spatialReference,l)}if(t){const s=(0,y.O0)(this._fieldsIndex,m.attributes,t);if(s){e.push(s);continue}}p.add((0,u.XA)(m,s,a,i,o)),e.push((0,y.d1)(h))}}_assignObjectId(e,t,s=!1){const i=this._queryEngine.objectIdField;s&&t&&isFinite(t[i])?e[i]=t[i]:e[i]=this._nextObjectId++}}},40400:(e,t,s)=>{s.d(t,{Dm:()=>d,Hq:()=>p,MS:()=>c,bU:()=>u});var i=s(39994),n=s(67134),r=s(10287),a=s(86094);function u(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?a.I4:"esriGeometryPolyline"===e?a.ET:a.lF}}}const o=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let l=1;function d(e,t){if((0,i.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let s=`this.${t} = null;`;for(const t in e)s+=`this${o.test(t)?`.${t}`:`["${t}"]`} = ${JSON.stringify(e[t])};`;const i=new Function(`\n      return class AttributesClass$${l++} {\n        constructor() {\n          ${s};\n        }\n      }\n    `)();return()=>new i}catch(s){return()=>({[t]:null,...e})}}function p(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,n.d9)(e)}}]}function c(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:r.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);