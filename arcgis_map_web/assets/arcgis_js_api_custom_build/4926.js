(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[4926],{53277:(e,t,i)=>{"use strict";i.d(t,{S:()=>s,X:()=>n});const n=1;function s(e,t){let i=0;for(const s of t){var n;const t=null==(n=s.attributes)?void 0:n[e];"number"==typeof t&&isFinite(t)&&(i=Math.max(i,t))}return i}},69308:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>_});var n=i(32656),s=i(27780),r=i(56885),a=i(4665),l=i(88210),u=i(31036),o=i(61121),d=i(53277),c=i(56471),f=i(71951),p=i(70650),y=i(21895),h=i(73456);const m=s.Zn,g={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:s.Zn},b={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function I(e){return(0,r.wp)(e)?null!=e.z:!!e.hasZ}function F(e){return(0,r.wp)(e)?null!=e.m:!!e.hasM}const _=class{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const t=[],{features:i}=e,s=this._inferLayerProperties(i,e.fields),r=e.fields||[],u=null!=e.hasM?e.hasM:s.hasM,h=null!=e.hasZ?e.hasZ:s.hasZ,I=!e.spatialReference&&!s.spatialReference,F=I?m:e.spatialReference||s.spatialReference,_=I?g:null,E=e.geometryType||s.geometryType,q=!E;let w=e.objectIdField||s.objectIdField,T=e.timeInfo;if(!q&&(I&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!E))throw new n.Z("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!w)throw new n.Z("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(s.objectIdField&&w!==s.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${w}" doesn't match the field name "${s.objectIdField}", found in the provided fields`}),w=s.objectIdField),w&&!s.objectIdField){let e=null;r.some((t=>t.name===w&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):r.unshift({alias:w,name:w,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const e of r){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),!e.name)throw new n.Z("feature-layer:invalid-field-name","field name is missing",{field:e});if(e.name===w&&(e.type="esriFieldTypeOID"),-1===l.v.jsonValues.indexOf(e.type))throw new n.Z("feature-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e})}const j={};this._requiredFields=[];for(const e of r)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable;const t=(0,a.os)(e);e.nullable||void 0!==t?j[e.name]=t:this._requiredFields.push(e)}if(this._fieldsIndex=new o.Z(r),this._createDefaultAttributes=(0,c.Dm)(j,w),T){if(T.startTimeField){const e=this._fieldsIndex.get(T.startTimeField);e?(T.startTimeField=e.name,e.type="esriFieldTypeDate"):T.startTimeField=null}if(T.endTimeField){const e=this._fieldsIndex.get(T.endTimeField);e?(T.endTimeField=e.name,e.type="esriFieldTypeDate"):T.endTimeField=null}if(T.trackIdField){const e=this._fieldsIndex.get(T.trackIdField);e?T.trackIdField=e.name:(T.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:T}}))}T.startTimeField||T.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:T}}),T=null)}const x={warnings:t,featureErrors:[],layerDefinition:{...b,drawingInfo:(0,c.bU)(E),templates:(0,c.Hq)(j),extent:_,geometryType:E,objectIdField:w,fields:r,hasZ:!!h,hasM:!!u,timeInfo:T},assignedObjectIds:{}};if(this._queryEngine=new y.Z({fields:r,geometryType:E,hasM:u,hasZ:h,objectIdField:w,spatialReference:F,featureStore:new p.Z({geometryType:E,hasM:u,hasZ:h}),timeInfo:T,cacheSpatialQueries:!0}),!i||!i.length)return this._nextObjectId=d.X,x;const v=(0,d.S)(w,i);return this._nextObjectId=v+1,await(0,f._W)(i,F),this._loadInitialFeatures(x,i)}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([(0,h.b)(t,i),(0,f._W)(e.adds,t),(0,f._W)(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let i,n,s=null,a=null,l=null;for(const t of e){const e=t.geometry;if(e&&(s||(s=(0,r.Ji)(e)),a||(a=e.spatialReference),null==i&&(i=I(e)),null==n&&(n=F(e)),s&&a&&null!=i&&null!=n))break}if(t&&t.length){let e=null;t.some((t=>{const i="esriFieldTypeOID"===t.type,n=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,i||n}))&&(l=e.name)}return{geometryType:s,spatialReference:a,objectIdField:l,hasM:n,hasZ:i}}_loadInitialFeatures(e,t){const{geometryType:i,hasM:n,hasZ:s,objectIdField:a,spatialReference:l,featureStore:o}=this._queryEngine,d=[];for(const n of t){if(null!=n.uid&&(e.assignedObjectIds[n.uid]=-1),n.geometry&&i!==(0,r.Ji)(n.geometry)){e.featureErrors.push((0,h.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),s=(0,h.O0)(this._fieldsIndex,this._requiredFields,t,n.attributes,!0,e.warnings);s?e.featureErrors.push(s):(this._assignObjectId(t,n.attributes,!0),n.attributes=t,null!=n.uid&&(e.assignedObjectIds[n.uid]=n.attributes[a]),n.geometry&&(n.geometry=(0,f.iV)(n.geometry,n.geometry.spatialReference,l)),d.push(n))}if(o.addMany((0,u.Yn)([],d,i,s,n,a)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:i}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,i]}return e}_applyEdits(e){const{adds:t,updates:i,deletes:n}=e,s={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(s,t),i&&i.length&&this._applyUpdateEdits(s,i),n&&n.length){for(const e of n)s.deleteResults.push((0,h.d1)(e));this._queryEngine.featureStore.removeManyById(n)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:s}}_applyAddEdits(e,t){const{addResults:i}=e,{geometryType:n,hasM:s,hasZ:a,objectIdField:l,spatialReference:o,featureStore:d}=this._queryEngine,c=[];for(const s of t){if(s.geometry&&n!==(0,r.Ji)(s.geometry)){i.push((0,h.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),a=(0,h.O0)(this._fieldsIndex,this._requiredFields,t,s.attributes);if(a)i.push(a);else{if(this._assignObjectId(t,s.attributes),s.attributes=t,null!=s.uid){const t=s.attributes[l];e.uidToObjectId[s.uid]=t}s.geometry&&(s.geometry=(0,f.iV)((0,h.og)(s.geometry,o),s.geometry.spatialReference,o)),c.push(s),i.push((0,h.d1)(s.attributes[l]))}}d.addMany((0,u.Yn)([],c,n,a,s,l))}_applyUpdateEdits({updateResults:e},t){const{geometryType:i,hasM:n,hasZ:s,objectIdField:a,spatialReference:l,featureStore:o}=this._queryEngine;for(const d of t){const{attributes:t,geometry:c}=d,p=t&&t[a];if(null==p){e.push((0,h.av)(`Identifier field ${a} missing`));continue}if(!o.has(p)){e.push((0,h.av)(`Feature with object id ${p} missing`));continue}const y=(0,u.EI)(o.getFeature(p),i,s,n);if(c){if(i!==(0,r.Ji)(c)){e.push((0,h.av)("Incorrect geometry type."));continue}y.geometry=(0,f.iV)((0,h.og)(c,l),c.spatialReference,l)}if(t){const i=(0,h.O0)(this._fieldsIndex,this._requiredFields,y.attributes,t);if(i){e.push(i);continue}}o.add((0,u.XA)(y,i,s,n,a)),e.push((0,h.d1)(p))}}_assignObjectId(e,t,i=!1){const n=this._queryEngine.objectIdField;i&&t&&isFinite(t[n])?e[n]=t[n]:e[n]=this._nextObjectId++}}},56471:(e,t,i)=>{"use strict";i.d(t,{Dm:()=>l,Hq:()=>u,bU:()=>a});var n=i(95830),s=i(82550),r=i(7767);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?r.I4:"esriGeometryPolyline"===e?r.ET:r.lF}}}function l(e,t){if((0,n.Z)("csp-restrictions"))return()=>({[t]:null,...e});try{let i=`this.${t} = null;`;for(const t in e)i+=`this${t.indexOf(".")?`["${t}"]`:`.${t}`} = ${JSON.stringify(e[t])};`;const n=new Function(i);return()=>new n}catch(i){return()=>({[t]:null,...e})}}function u(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(e)}}]}},73456:(e,t,i)=>{"use strict";i.d(t,{av:()=>l,d1:()=>o,b:()=>h,O0:()=>c,og:()=>y});var n=i(27780),s=i(4665);class r{constructor(){this.code=null,this.description=null}}class a{constructor(e){this.error=new r,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function l(e){return new a(e)}class u{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function o(e){return new u(e)}const d=new Set;function c(e,t,i,n,r=!1,a){d.clear();for(const t in n){const u=e.get(t);if(!u)continue;const o=n[t],c=f(u,o);if(c!==o&&a&&a.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:u,originalValue:o,sanitizedValue:c}}),d.add(u.name),u&&(r||u.editable)){const e=(0,s.Qc)(u,c);if(e)return l((0,s.vP)(e,u,c));i[u.name]=c}}for(const e of t)if(!d.has(e.name))return l(`missing required field "${e.name}"`);return null}function f(e,t){let i=t;return"string"==typeof t&&(0,s.H7)(e)?i=parseFloat(t):null!=t&&(0,s.qN)(e)&&"string"!=typeof t&&(i=String(t)),(0,s.Pz)(i)}let p;function y(e,t){if(!e||!(0,n.JY)(t))return e;if("rings"in e||"paths"in e){if(!p)throw new TypeError("geometry engine not loaded");return p.simplify(t,e)}return e}async function h(e,t){!(0,n.JY)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return p||(p=await Promise.all([i.e(5798),i.e(3134)]).then(i.bind(i,93134)),p)}()}}}]);