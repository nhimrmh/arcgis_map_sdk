"use strict";(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[834],{40834:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var i=r(36663),a=r(70375),s=r(61681),p=r(81977),o=(r(7283),r(7753),r(40266)),l=r(90472),n=r(54957),c=r(51622),y=r(15945);let u=class extends y.Z{constructor(){super(...arguments),this.type="feature-3d",this.direct3DObjectFeatureLayerDisplayEnabled=(0,c.hq)()}initialize(){const{layer:e,view:t}=this;(0,n.S1)(e)?.operations.supportsQuery||this.addResolvingPromise(Promise.reject(new a.Z("featurelayerview:query-not-supported","layer view requires a layer with query capability",{layer:e}))),(0,s.pC)(e.infoFor3D)&&(this.direct3DObjectFeatureLayerDisplayEnabled?this._set("suspendResumeExtentMode","computed"):this.addResolvingPromise(Promise.reject(new a.Z("featurelayerview3d:unsupported-geometry-type",`Unsupported geometry type ${e.geometryType}`)))),"mesh"!==e.geometryType||(0,l.Up)(e.spatialReference,t.spatialReference)||this.addResolvingPromise(Promise.reject(new a.Z("layerview:spatial-reference-incompatible","The spatial references of the feature layer is incompatible with the spatial reference of the view")))}get featureSpatialReference(){return this.view.featureTiles?.tilingScheme?.spatialReference}};(0,i._)([(0,p.Cb)({constructOnly:!0})],u.prototype,"direct3DObjectFeatureLayerDisplayEnabled",void 0),(0,i._)([(0,p.Cb)()],u.prototype,"layer",void 0),u=(0,i._)([(0,o.j)("esri.views.3d.layers.FeatureLayerView3D")],u);const d=u}}]);