"use strict";(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[8427],{48427:(e,n,t)=>{t.r(n),t.d(n,{hydratedAdapter:()=>r});var a=t(91772),s=t(74304),o=t(67666),c=t(89542),i=t(90819);const r={convertToGEGeometry:function(e,n){if(null==n)return null;let t="cache"in n?n.cache._geVersion:void 0;return null==t&&(t=e.convertJSONToGeometry(n),"cache"in n&&(n.cache._geVersion=t)),t},exportPoint:function(e,n,t){const a=e.hasZ(n),s=e.hasM(n),c=new o.Z({x:e.getPointX(n),y:e.getPointY(n),spatialReference:t});return a&&(c.z=e.getPointZ(n)),s&&(c.m=e.getPointM(n)),c.cache._geVersion=n,c},exportPolygon:function(e,n,t){const a=new c.Z({rings:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return a.cache._geVersion=n,a},exportPolyline:function(e,n,t){const a=new i.Z({paths:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return a.cache._geVersion=n,a},exportMultipoint:function(e,n,t){const a=new s.Z({hasZ:e.hasZ(n),hasM:e.hasM(n),points:e.exportPoints(n),spatialReference:t});return a.cache._geVersion=n,a},exportExtent:function(e,n,t){const s=e.hasZ(n),o=e.hasM(n),c=new a.Z({xmin:e.getXMin(n),ymin:e.getYMin(n),xmax:e.getXMax(n),ymax:e.getYMax(n),spatialReference:t});if(s){const t=e.getZExtent(n);c.zmin=t.vmin,c.zmax=t.vmax}if(o){const t=e.getMExtent(n);c.mmin=t.vmin,c.mmax=t.vmax}return c.cache._geVersion=n,c}}}}]);