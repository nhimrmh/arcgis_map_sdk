"use strict";(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[7454],{34344:(t,e,n)=>{function i(){return[1,0,0,0,1,0,0,0,1]}function s(t,e){return new Float64Array(t,e,9)}n.d(e,{a:()=>s,c:()=>i}),Object.freeze(Object.defineProperty({__proto__:null,create:i,clone:function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},fromValues:function(t,e,n,i,s,r,o,c,a){return[t,e,n,i,s,r,o,c,a]},createView:s},Symbol.toStringTag,{value:"Module"}))},39100:(t,e,n)=>{function i(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function s(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}function r(t,e){return new Float64Array(t,e,16)}n.d(e,{I:()=>o,a:()=>r,b:()=>s,c:()=>i});const o=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,create:i,clone:s,fromValues:function(t,e,n,i,s,r,o,c,a,h,u,l,d,f,_,m){return[t,e,n,i,s,r,o,c,a,h,u,l,d,f,_,m]},createView:r,IDENTITY:o},Symbol.toStringTag,{value:"Module"}))},61044:(t,e,n)=>{function i(){return[0,0,0,1]}function s(t){return[t[0],t[1],t[2],t[3]]}function r(t,e){return new Float64Array(t,e,4)}n.d(e,{I:()=>o,a:()=>i,b:()=>s,c:()=>r});const o=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,create:i,clone:s,fromValues:function(t,e,n,i){return[t,e,n,i]},createView:r,IDENTITY:o},Symbol.toStringTag,{value:"Module"}))},45612:(t,e,n)=>{n.d(e,{b:()=>T,c:()=>p,d:()=>b,g:()=>M,i:()=>x,m:()=>F}),n(39994);var i,s,r=n(13802),o=n(19431),c=n(61681),a=n(24455),h=n(6766),u=n(8909),l=n(88589),d=n(1983);(s=i||(i={}))[s.X=0]="X",s[s.Y=1]="Y",s[s.Z=2]="Z";var f=n(97537),_=n(5700),m=n(68817);const g=r.Z.getLogger("esri.geometry.support.sphere");function p(){return(0,d.c)()}function T(t,e=p()){return(0,l.c)(e,t)}function b(t){return t[3]}function M(t){return t}function O(t,e,n){if((0,c.Wi)(e))return!1;const{origin:i,direction:s}=e,r=E;r[0]=i[0]-t[0],r[1]=i[1]-t[1],r[2]=i[2]-t[2];const o=s[0]*s[0]+s[1]*s[1]+s[2]*s[2],a=2*(s[0]*r[0]+s[1]*r[1]+s[2]*r[2]),h=a*a-4*o*(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-t[3]*t[3]);if(h<0)return!1;const u=Math.sqrt(h);let l=(-a-u)/(2*o);const d=(-a+u)/(2*o);return(l<0||d<l&&d>0)&&(l=d),!(l<0||(n&&(n[0]=i[0]+s[0]*l,n[1]=i[1]+s[1]*l,n[2]=i[2]+s[2]*l),0))}const E=(0,u.c)();function x(t,e){return O(t,e,null)}function R(t,e,n){const i=m.WM.get(),s=m.MP.get();(0,h.f)(i,e.origin,e.direction);const r=b(t);(0,h.f)(n,i,e.origin),(0,h.g)(n,n,1/(0,h.l)(n)*r);const o=A(t,e.origin),c=(0,_.EU)(e.origin,n);return(0,a.d)(s,c+o,i),(0,h.m)(n,n,s),n}function N(t,e,n){const i=(0,h.b)(m.WM.get(),e,t),s=(0,h.g)(m.WM.get(),i,t[3]/(0,h.l)(i));return(0,h.a)(n,s,t)}function A(t,e){const n=(0,h.b)(m.WM.get(),e,t),i=(0,h.l)(n),s=b(t),r=s+Math.abs(s-i);return(0,o.ZF)(s/r)}const P=(0,u.c)();function S(t,e,n,s){const r=(0,h.b)(P,e,t);switch(n){case i.X:{const t=(0,o.jE)(r,P)[2];return(0,h.s)(s,-Math.sin(t),Math.cos(t),0)}case i.Y:{const t=(0,o.jE)(r,P),e=t[1],n=t[2],i=Math.sin(e);return(0,h.s)(s,-i*Math.cos(n),-i*Math.sin(n),Math.cos(e))}case i.Z:return(0,h.n)(s,r);default:return}}function y(t,e){const n=(0,h.b)(I,e,t);return(0,h.l)(n)-t[3]}function F(t,e){const n=(0,h.d)(t,e),i=b(t);return n<=i*i}const I=(0,u.c)(),v=p();Object.freeze(Object.defineProperty({__proto__:null,create:p,copy:T,fromCenterAndRadius:function(t,e){return(0,d.f)(t[0],t[1],t[2],e)},wrap:function(t){return t},clear:function(t){t[0]=t[1]=t[2]=t[3]=0},fromRadius:function(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t},getRadius:b,getCenter:M,fromValues:function(t,e,n,i){return(0,d.f)(t,e,n,i)},elevate:function(t,e,n){return t!==n&&(0,h.c)(n,t),n[3]=t[3]+e,n},setExtent:function(t,e,n){return g.error("sphere.setExtent is not yet supported"),t===n?n:T(t,n)},intersectRay:O,intersectsRay:x,intersectRayClosestSilhouette:function(t,e,n){if(O(t,e,n))return n;const i=R(t,e,m.WM.get());return(0,h.a)(n,e.origin,(0,h.g)(m.WM.get(),e.direction,(0,h.i)(e.origin,i)/(0,h.l)(e.direction))),n},closestPointOnSilhouette:R,closestPoint:function(t,e,n){return O(t,e,n)?n:((0,f.JI)(e,t,n),N(t,n,n))},projectPoint:N,distanceToSilhouette:function(t,e){const n=(0,h.b)(m.WM.get(),e,t),i=(0,h.p)(n),s=t[3]*t[3];return Math.sqrt(Math.abs(i-s))},angleToSilhouette:A,axisAt:S,altitudeAt:y,setAltitudeAt:function(t,e,n,s){const r=y(t,e),o=S(t,e,i.Z,I),c=(0,h.g)(I,o,n-r);return(0,h.a)(s,e,c)},containsPoint:F,tmpSphere:v},Symbol.toStringTag,{value:"Module"}))},19480:(t,e,n)=>{n.d(e,{x:()=>s});var i=n(66581);class s{constructor(t){this.allocator=t,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,i.Y)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*r);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,r));t++)this._items.push(this.allocator())}}const r=1024},61107:(t,e,n)=>{n.d(e,{N:()=>i});const i={convertToGEGeometry:function(t,e){return null==e?null:t.convertJSONToGeometry(e)},exportPoint:function(t,e,n){const i=new s(t.getPointX(e),t.getPointY(e),n),r=t.hasZ(e),o=t.hasM(e);return r&&(i.z=t.getPointZ(e)),o&&(i.m=t.getPointM(e)),i},exportPolygon:function(t,e,n){return new r(t.exportPaths(e),n,t.hasZ(e),t.hasM(e))},exportPolyline:function(t,e,n){return new o(t.exportPaths(e),n,t.hasZ(e),t.hasM(e))},exportMultipoint:function(t,e,n){return new c(t.exportPoints(e),n,t.hasZ(e),t.hasM(e))},exportExtent:function(t,e,n){const i=t.hasZ(e),s=t.hasM(e),r=new a(t.getXMin(e),t.getYMin(e),t.getXMax(e),t.getYMax(e),n);if(i){const n=t.getZExtent(e);r.zmin=n.vmin,r.zmax=n.vmax}if(s){const n=t.getMExtent(e);r.mmin=n.vmin,r.mmax=n.vmax}return r}};class s{constructor(t,e,n){this.x=t,this.y=e,this.spatialReference=n,this.z=void 0,this.m=void 0}}class r{constructor(t,e,n,i){this.rings=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}class o{constructor(t,e,n,i){this.paths=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}class c{constructor(t,e,n,i){this.points=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}class a{constructor(t,e,n,i,s){this.xmin=t,this.ymin=e,this.xmax=n,this.ymax=i,this.spatialReference=s,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},56215:(t,e,n)=>{n.d(e,{Ue:()=>a,nF:()=>u,zk:()=>h});var i=n(19431),s=n(19480),r=n(6766),o=n(8909),c=n(68817);function a(t){return t?{origin:(0,o.a)(t.origin),vector:(0,o.a)(t.vector)}:{origin:(0,o.c)(),vector:(0,o.c)()}}function h(t,e,n=a()){return(0,r.c)(n.origin,t),(0,r.b)(n.vector,e,t),n}function u(t,e,n){return function(t,e,n,s,o){const{vector:a,origin:h}=t,u=(0,r.b)(c.WM.get(),e,h),l=(0,r.e)(a,u)/(0,r.p)(a);return(0,r.g)(o,a,(0,i.uZ)(l,0,1)),(0,r.a)(o,o,t.origin)}(t,e,0,0,n)}(0,o.c)(),(0,o.c)(),new s.x((()=>({origin:null,vector:null})))},97537:(t,e,n)=>{n.d(e,{JI:()=>a,Ue:()=>o,re:()=>c}),n(7753);var i=n(19480),s=n(6766),r=n(8909);function o(t){return t?{origin:(0,r.a)(t.origin),direction:(0,r.a)(t.direction)}:{origin:(0,r.c)(),direction:(0,r.c)()}}function c(t,e){const n=h.get();return n.origin=t,n.direction=e,n}function a(t,e,n){const i=(0,s.e)(t.direction,(0,s.b)(n,e,t.origin));return(0,s.a)(n,t.origin,(0,s.g)(n,t.direction,i)),n}n(68817);const h=new i.x((function(){return{origin:null,direction:null}}))},5700:(t,e,n)=>{n.d(e,{EU:()=>o});var i=n(19431),s=n(6766),r=n(8909);function o(t,e){const n=(0,s.e)(t,e)/((0,s.l)(t)*(0,s.l)(e));return-(0,i.ZF)(n)}(0,r.c)(),(0,r.c)()},68817:(t,e,n)=>{n.d(e,{MP:()=>_,WM:()=>f});var i=n(4745),s=n(66581),r=n(34344),o=n(39100),c=n(61044),a=n(69666),h=n(8909),u=n(1983);class l{constructor(t,e,n){this.itemByteSize=t,this.itemCreate=e,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(n/this.itemByteSize)}get(){0===this._itemsPtr&&(0,s.Y)((()=>this._reset()));const t=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=t;){const t=new ArrayBuffer(this._itemsPerBuffer*this.itemByteSize);for(let e=0;e<this._itemsPerBuffer;++e)this._items.push(this.itemCreate(t,e*this.itemByteSize));this._buffers.push(t)}return this._items[this._itemsPtr++]}_reset(){const t=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>t;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(t=d){return new l(16,a.c,t)}static createVec3f64(t=d){return new l(24,h.b,t)}static createVec4f64(t=d){return new l(32,u.a,t)}static createMat3f64(t=d){return new l(72,r.a,t)}static createMat4f64(t=d){return new l(128,o.a,t)}static createQuatf64(t=d){return new l(32,c.c,t)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this.itemByteSize}}}const d=4*i.Y8.KILOBYTES,f=(l.createVec2f64(),l.createVec3f64()),_=(l.createVec4f64(),l.createMat3f64(),l.createMat4f64());l.createQuatf64()},66069:(t,e,n)=>{n.d(e,{_W:()=>d,iV:()=>m,oj:()=>p});var i=n(61681),s=n(92376),r=n(61107),o=n(35925),c=n(39536);const a=[0,0];function h(t,e){if(!e)return null;if("x"in e){const n={x:0,y:0};return[n.x,n.y]=t(e.x,e.y,a),null!=e.z&&(n.z=e.z),null!=e.m&&(n.m=e.m),n}if("xmin"in e){const n={xmin:0,ymin:0,xmax:0,ymax:0};return[n.xmin,n.ymin]=t(e.xmin,e.ymin,a),[n.xmax,n.ymax]=t(e.xmax,e.ymax,a),e.hasZ&&(n.zmin=e.zmin,n.zmax=e.zmax,n.hasZ=!0),e.hasM&&(n.mmin=e.mmin,n.mmax=e.mmax,n.hasM=!0),n}return"rings"in e?{rings:u(e.rings,t),hasM:e.hasM,hasZ:e.hasZ}:"paths"in e?{paths:u(e.paths,t),hasM:e.hasM,hasZ:e.hasZ}:"points"in e?{points:l(e.points,t),hasM:e.hasM,hasZ:e.hasZ}:void 0}function u(t,e){const n=[];for(const i of t)n.push(l(i,e));return n}function l(t,e){const n=[];for(const i of t){const t=e(i[0],i[1],[0,0]);n.push(t),i.length>2&&t.push(i[2]),i.length>3&&t.push(i[3])}return n}async function d(t,e){if(!e)return;const n=Array.isArray(t)?t.map((t=>(0,i.pC)(t.geometry)&&t.geometry.spatialReference)):[t];await(0,s.iQ)(n.map((t=>({source:t,dest:e}))))}const f=h.bind(null,c.hG),_=h.bind(null,c.R6);function m(t,e,n,i){if(!t)return t;if(n||(n=e,e=t.spatialReference),!(0,o.JY)(e)||!(0,o.JY)(n)||(0,o.fS)(e,n))return t;if((0,c.Q8)(e,n)){const e=(0,o.sS)(n)?f(t):_(t);return e.spatialReference=n,e}return(0,s.oj)(r.N,[t],e,n,null,i)[0]}const g=new class{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(t,e,n){if(!t||!t.length||!e||!n||(0,o.fS)(e,n))return t;const i={geometries:t,inSpatialReference:e,outSpatialReference:n,resolve:null};return this._jobs.push(i),new Promise((t=>{i.resolve=t,null===this._timer&&(this._timer=setTimeout(this._process,10))}))}_process(){this._timer=null;const t=this._jobs.shift();if(!t)return;const{geometries:e,inSpatialReference:n,outSpatialReference:i,resolve:a}=t;(0,c.Q8)(n,i)?(0,o.sS)(i)?a(e.map(f)):a(e.map(_)):a((0,s.oj)(r.N,e,n,i,null,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}};function p(t,e,n){return g.push(t,e,n)}},77940:(t,e,n)=>{n.r(e),n.d(e,{SceneLayerSnappingSourceWorker:()=>$,default:()=>tt});var i,s,r,o,c,a,h,u=n(36663),l=n(61681),d=n(78668),f=(n(13802),n(7283),n(7753),n(39994),n(33156),n(40266)),_=n(6766),m=n(8909),g=n(56215),p=n(45612),T=n(17519),b=n(34596),M=n(17135),O=n(19480),E=(n(24455),n(88589),n(1983)),x=n(97537);function R(t,e){for(let n=0;n<a.NUM;n++){const i=t[n];if(i[0]*e[0]+i[1]*e[1]+i[2]*e[2]+i[3]>=e[3])return!1}return!0}n(68817),new O.x((()=>({c0:0,c1:0,ray:null}))),n(19431),n(5700),(0,m.c)(),(0,m.c)(),(0,m.c)(),(0,m.c)(),(0,m.c)(),(0,m.c)(),(0,m.c)(),(0,m.c)(),(0,m.c)(),(0,m.c)(),(s=i||(i={}))[s.NONE=0]="NONE",s[s.CLAMP=1]="CLAMP",s[s.INFINITE_MIN=4]="INFINITE_MIN",s[s.INFINITE_MAX=8]="INFINITE_MAX",i.INFINITE_MIN,i.INFINITE_MAX,i.INFINITE_MAX,(c=r||(r={}))[c.LEFT=0]="LEFT",c[c.RIGHT=1]="RIGHT",c[c.BOTTOM=2]="BOTTOM",c[c.TOP=3]="TOP",c[c.NEAR=4]="NEAR",c[c.FAR=5]="FAR",function(t){t[t.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",t[t.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",t[t.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",t[t.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",t[t.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",t[t.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",t[t.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",t[t.FAR_TOP_LEFT=7]="FAR_TOP_LEFT"}(o||(o={})),o.FAR_BOTTOM_RIGHT,o.NEAR_BOTTOM_RIGHT,o.NEAR_BOTTOM_LEFT,o.FAR_BOTTOM_LEFT,o.NEAR_BOTTOM_LEFT,o.NEAR_BOTTOM_RIGHT,o.NEAR_TOP_RIGHT,o.NEAR_TOP_LEFT,o.FAR_BOTTOM_RIGHT,o.FAR_BOTTOM_LEFT,o.FAR_TOP_LEFT,o.FAR_TOP_RIGHT,o.NEAR_BOTTOM_RIGHT,o.FAR_BOTTOM_RIGHT,o.FAR_TOP_RIGHT,o.NEAR_TOP_RIGHT,o.FAR_BOTTOM_LEFT,o.NEAR_BOTTOM_LEFT,o.NEAR_TOP_LEFT,o.FAR_TOP_LEFT,o.FAR_TOP_LEFT,o.NEAR_TOP_LEFT,o.NEAR_TOP_RIGHT,o.FAR_TOP_RIGHT,function(t){t[t.NUM=6]="NUM"}(a||(a={})),function(t){t[t.NUM=8]="NUM"}(h||(h={})),(0,E.f)(-1,-1,-1,1),(0,E.f)(1,-1,-1,1),(0,E.f)(1,1,-1,1),(0,E.f)(-1,1,-1,1),(0,E.f)(-1,-1,1,1),(0,E.f)(1,-1,1,1),(0,E.f)(1,1,1,1),(0,E.f)(-1,1,1,1),new O.x((function(t){return t?{ray:(0,x.Ue)(t.ray),c0:t.c0,c1:t.c1}:{ray:(0,x.Ue)(),c0:0,c1:Number.MAX_VALUE}})),(0,m.c)(),(0,m.c)(),(0,m.c)(),(0,m.c)(),(0,m.c)(),(0,m.c)(),(0,m.c)(),(0,m.c)();var N=n(15095);class A{constructor(t,e){this._objectToBoundingSphere=t,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new P,this._objectCount=0,e&&(void 0!==e.maximumObjectsPerNode&&(this._maximumObjectsPerNode=e.maximumObjectsPerNode),void 0!==e.maximumDepth&&(this._maximumDepth=e.maximumDepth))}get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}destroy(){this._degenerateObjects.clear(),P.clearPool(),C[0]=null,H.prune(),X.prune()}add(t,e=t.length){this._objectCount+=e,this._grow(t,e);const n=P.acquire();for(let i=0;i<e;i++){const e=t[i];this._isDegenerate(e)?this._degenerateObjects.add(e):(n.init(this._root),this._add(e,n))}P.release(n)}remove(t,e=null){this._objectCount-=t.length;const n=P.acquire();for(const i of t){const t=(0,l.pC)(e)?e:(0,p.b)(this._objectToBoundingSphere(i),k);w(t[3])?(n.init(this._root),this._remove(i,t,n)):this._degenerateObjects.delete(i)}P.release(n),this._shrink()}update(t,e){if(!w(e[3])&&this._isDegenerate(t))return;const n=function(t){return C[0]=t,C}(t);this.remove(n,e),this.add(n)}forEachAlongRay(t,e,n){const i=(0,x.re)(t,e);this._forEachNode(this._root,(t=>{if(!this._intersectsNode(i,t))return!1;const e=t.node;return e.terminals.forAll((t=>{this._intersectsObject(i,t)&&n(t)})),null!==e.residents&&e.residents.forAll((t=>{this._intersectsObject(i,t)&&n(t)})),!0}))}forEachAlongRayWithVerticalOffset(t,e,n,i){const s=(0,x.re)(t,e);this._forEachNode(this._root,(t=>{if(!this._intersectsNodeWithOffset(s,t,i))return!1;const e=t.node;return e.terminals.forAll((t=>{this._intersectsObjectWithOffset(s,t,i)&&n(t)})),null!==e.residents&&e.residents.forAll((t=>{this._intersectsObjectWithOffset(s,t,i)&&n(t)})),!0}))}forEach(t){this._forEachNode(this._root,(e=>{const n=e.node;return n.terminals.forAll(t),null!==n.residents&&n.residents.forAll(t),!0})),this._degenerateObjects.forEach(t)}forEachDegenerateObject(t){this._degenerateObjects.forEach(t)}findClosest(t,e,n,i=(()=>!0),s=1/0){let r=1/0,o=1/0,c=null;const a=v(t,e),h=a=>{if(--s,!i(a))return;const h=this._objectToBoundingSphere(a);if(!R(n,h))return;const u=j(t,e,(0,p.g)(h)),l=u-h[3],d=u+h[3];l<r&&(r=l,o=d,c=a)};return this._forEachNodeDepthOrdered(this._root,(i=>{if(s<=0||!R(n,i.bounds))return!1;if((0,_.g)(G,a,i.halfSize),(0,_.a)(G,G,i.bounds),j(t,e,G)>o)return!1;const r=i.node;return r.terminals.forAll((t=>h(t))),null!==r.residents&&r.residents.forAll((t=>h(t))),!0}),t,e),c}forEachInDepthRange(t,e,n,i,s,r,o){let c=-1/0,a=1/0;const h={setRange:t=>{n===A.DepthOrder.FRONT_TO_BACK?(c=Math.max(c,t.near),a=Math.min(a,t.far)):(c=Math.max(c,-t.far),a=Math.min(a,-t.near))}};h.setRange(i);const u=j(e,n,t),l=v(e,n),d=v(e,-n),f=t=>{if(!o(t))return;const i=this._objectToBoundingSphere(t),l=(0,p.g)(i),d=j(e,n,l)-u,f=d-i[3],_=d+i[3];f>a||_<c||!R(r,i)||s(t,h)};this._forEachNodeDepthOrdered(this._root,(t=>{if(!R(r,t.bounds))return!1;if((0,_.g)(G,l,t.halfSize),(0,_.a)(G,G,t.bounds),j(e,n,G)-u>a)return!1;if((0,_.g)(G,d,t.halfSize),(0,_.a)(G,G,t.bounds),j(e,n,G)-u<c)return!1;const i=t.node;return i.terminals.forAll((t=>f(t))),null!==i.residents&&i.residents.forAll((t=>f(t))),!0}),e,n)}forEachNode(t){this._forEachNode(this._root,(e=>t(e.node,e.bounds,e.halfSize)))}forEachNeighbor(t,e){const n=(0,p.d)(e),i=(0,p.g)(e),s=e=>{const s=this._objectToBoundingSphere(e),r=(0,p.d)(s),o=n+r;(0,_.d)((0,p.g)(s),i)-o*o<=0&&t(e)};this._forEachNode(this._root,(t=>{const e=(0,p.d)(t.bounds),r=n+e;if((0,_.d)((0,p.g)(t.bounds),i)-r*r>0)return!1;const o=t.node;return o.terminals.forAll((t=>s(t))),null!==o.residents&&o.residents.forAll((t=>s(t))),!0})),this.forEachDegenerateObject(s)}_intersectsNode(t,e){return F(e.bounds,2*-e.halfSize,D),F(e.bounds,2*e.halfSize,V),(0,N.yK)(t.origin,t.direction,D,V)}_intersectsNodeWithOffset(t,e,n){return F(e.bounds,2*-e.halfSize,D),F(e.bounds,2*e.halfSize,V),n.applyToMinMax(D,V),(0,N.yK)(t.origin,t.direction,D,V)}_intersectsObject(t,e){const n=this._objectToBoundingSphere(e);return!(n[3]>0)||(0,p.i)(n,t)}_intersectsObjectWithOffset(t,e,n){const i=this._objectToBoundingSphere(e);return!(i[3]>0)||(0,p.i)(n.applyToBoundingSphere(i),t)}_forEachNode(t,e){let n=P.acquire().init(t);const i=[n];for(;0!==i.length;){if(n=i.pop(),e(n)&&!n.isLeaf())for(let t=0;t<n.node.children.length;t++)n.node.children[t]&&i.push(P.acquire().init(n).advance(t));P.release(n)}}_forEachNodeDepthOrdered(t,e,n,i=A.DepthOrder.FRONT_TO_BACK){let s=P.acquire().init(t);const r=[s];for(function(t,e,n){if(!X.length)for(let t=0;t<8;++t)X.push({index:0,distance:0});for(let n=0;n<8;++n){const i=B[n];X.data[n].index=n,X.data[n].distance=j(t,e,i)}X.sort(((t,e)=>t.distance-e.distance));for(let t=0;t<8;++t)n[t]=X.data[t].index}(n,i,K);0!==r.length;){if(s=r.pop(),e(s)&&!s.isLeaf())for(let t=7;t>=0;--t){const e=K[t];s.node.children[e]&&r.push(P.acquire().init(s).advance(e))}P.release(s)}}_remove(t,e,n){H.clear();const i=n.advanceTo(e,((t,e)=>{H.push(t.node),H.push(e)}))?n.node.terminals:n.node.residents;if(i.removeUnordered(t),0===i.length)for(let t=H.length-2;t>=0;t-=2){const e=H.data[t],n=H.data[t+1];if(!this._purge(e,n))break}}_nodeIsEmpty(t){if(0!==t.terminals.length)return!1;if(null!==t.residents)return 0===t.residents.length;for(let e=0;e<t.children.length;e++)if(t.children[e])return!1;return!0}_purge(t,e){return e>=0&&(t.children[e]=null),!!this._nodeIsEmpty(t)&&(null===t.residents&&(t.residents=new M.Z({shrink:!0})),!0)}_add(t,e){e.advanceTo(this._objectToBoundingSphere(t))?e.node.terminals.push(t):(e.node.residents.push(t),e.node.residents.length>this._maximumObjectsPerNode&&e.depth<this._maximumDepth&&this._split(e))}_split(t){const e=t.node.residents;t.node.residents=null;for(let n=0;n<e.length;n++){const i=P.acquire().init(t);this._add(e.getItemAt(n),i),P.release(i)}}_grow(t,e){if(0!==e&&(I(t,e,(t=>this._objectToBoundingSphere(t)),W),w(W[3])&&!this._fitsInsideTree(W)))if(this._nodeIsEmpty(this._root.node))(0,p.b)(W,this._root.bounds),this._root.halfSize=1.25*W[3];else{const t=this._rootBoundsForRootAsSubNode(W);this._placingRootViolatesMaxDepth(t)?this._rebuildTree(W,t):this._growRootAsSubNode(t),P.release(t)}}_rebuildTree(t,e){(0,_.c)(q,e.bounds),q[3]=e.halfSize,I([t,q],2,(t=>t),U);const n=P.acquire().init(this._root);this._root.initFrom(null,U,1.25*U[3]),this._forEachNode(n,(t=>(this.add(t.node.terminals.data,t.node.terminals.length),null!==t.node.residents&&this.add(t.node.residents.data,t.node.residents.length),!0))),P.release(n)}_placingRootViolatesMaxDepth(t){const e=Math.log(t.halfSize/this._root.halfSize)*Math.LOG2E;let n=0;return this._forEachNode(this._root,(t=>(n=Math.max(n,t.depth),n+e<=this._maximumDepth))),n+e>this._maximumDepth}_rootBoundsForRootAsSubNode(t){const e=t[3],n=t;let i=-1/0;const s=this._root.bounds,r=this._root.halfSize;for(let t=0;t<3;t++){const o=s[t]-r-(n[t]-e),c=n[t]+e-(s[t]+r),a=Math.max(0,Math.ceil(o/(2*r))),h=Math.max(0,Math.ceil(c/(2*r)))+1,u=2**Math.ceil(Math.log(a+h)*Math.LOG2E);i=Math.max(i,u),Y[t].min=a,Y[t].max=h}for(let t=0;t<3;t++){let e=Y[t].min,n=Y[t].max;const o=(i-(e+n))/2;e+=Math.ceil(o),n+=Math.floor(o);const c=s[t]-r-e*r*2;Z[t]=c+(n+e)*r}return Z[3]=i*r*L,P.acquire().initFrom(null,Z,i*r,0)}_growRootAsSubNode(t){const e=this._root.node;(0,_.c)(W,this._root.bounds),W[3]=this._root.halfSize,this._root.init(t),t.advanceTo(W,null,!0),t.node.children=e.children,t.node.residents=e.residents,t.node.terminals=e.terminals}_shrink(){for(;;){const t=this._findShrinkIndex();if(-1===t)break;this._root.advance(t),this._root.depth=0}}_findShrinkIndex(){if(0!==this._root.node.terminals.length||this._root.isLeaf())return-1;let t=null;const e=this._root.node.children;let n=0,i=0;for(;i<e.length&&null==t;)n=i++,t=e[n];for(;i<e.length;)if(e[i++])return-1;return n}_isDegenerate(t){return!w(this._objectToBoundingSphere(t)[3])}_fitsInsideTree(t){const e=this._root.bounds,n=this._root.halfSize;return t[3]<=n&&t[0]>=e[0]-n&&t[0]<=e[0]+n&&t[1]>=e[1]-n&&t[1]<=e[1]+n&&t[2]>=e[2]-n&&t[2]<=e[2]+n}}class P{constructor(){this.bounds=(0,p.c)(),this.halfSize=0,this.initFrom(null,null,0,0)}init(t){return this.initFrom(t.node,t.bounds,t.halfSize,t.depth)}initFrom(t,e,n,i=this.depth){return this.node=(0,l.pC)(t)?t:P.createEmptyNode(),(0,l.pC)(e)&&(0,p.b)(e,this.bounds),this.halfSize=n,this.depth=i,this}advance(t){let e=this.node.children[t];e||(e=P.createEmptyNode(),this.node.children[t]=e),this.node=e,this.halfSize/=2,this.depth++;const n=B[t];return this.bounds[0]+=n[0]*this.halfSize,this.bounds[1]+=n[1]*this.halfSize,this.bounds[2]+=n[2]*this.halfSize,this.bounds[3]=this.halfSize*L,this}advanceTo(t,e,n=!1){for(;;){if(this.isTerminalFor(t))return e&&e(this,-1),!0;if(this.isLeaf()){if(!n)return e&&e(this,-1),!1;this.node.residents=null}const i=this._childIndex(t);e&&e(this,i),this.advance(i)}}isLeaf(){return null!=this.node.residents}isTerminalFor(t){return t[3]>this.halfSize/2}_childIndex(t){const e=this.bounds;return(e[0]<t[0]?1:0)+(e[1]<t[1]?2:0)+(e[2]<t[2]?4:0)}static createEmptyNode(){return{children:[null,null,null,null,null,null,null,null],terminals:new M.Z({shrink:!0}),residents:new M.Z({shrink:!0})}}static acquire(){return P._pool.acquire()}static release(t){P._pool.release(t)}static clearPool(){P._pool.prune()}}function S(t,e){t[0]=Math.min(t[0],e[0]-e[3]),t[1]=Math.min(t[1],e[1]-e[3]),t[2]=Math.min(t[2],e[2]-e[3])}function y(t,e){t[0]=Math.max(t[0],e[0]+e[3]),t[1]=Math.max(t[1],e[1]+e[3]),t[2]=Math.max(t[2],e[2]+e[3])}function F(t,e,n){n[0]=t[0]+e,n[1]=t[1]+e,n[2]=t[2]+e}function I(t,e,n,i){if(1===e){const e=n(t[0]);(0,p.b)(e,i)}else{D[0]=1/0,D[1]=1/0,D[2]=1/0,V[0]=-1/0,V[1]=-1/0,V[2]=-1/0;for(let i=0;i<e;i++){const e=n(t[i]);w(e[3])&&(S(D,e),y(V,e))}(0,_.h)(i,D,V,.5),i[3]=Math.max(V[0]-D[0],V[1]-D[1],V[2]-D[2])/2}}function v(t,e){let n=1/0,i=null;for(let s=0;s<8;++s){const r=j(t,e,z[s]);r<n&&(n=r,i=z[s])}return i}function j(t,e,n){return e*(t[0]*n[0]+t[1]*n[1]+t[2]*n[2])}function w(t){return!isNaN(t)&&t!==-1/0&&t!==1/0&&t>0}P._pool=new b.Z(P),function(t){var e;(e=t.DepthOrder||(t.DepthOrder={}))[e.FRONT_TO_BACK=1]="FRONT_TO_BACK",e[e.BACK_TO_FRONT=-1]="BACK_TO_FRONT"}(A||(A={}));const B=[(0,m.f)(-1,-1,-1),(0,m.f)(1,-1,-1),(0,m.f)(-1,1,-1),(0,m.f)(1,1,-1),(0,m.f)(-1,-1,1),(0,m.f)(1,-1,1),(0,m.f)(-1,1,1),(0,m.f)(1,1,1)],z=[(0,m.f)(-1,-1,-1),(0,m.f)(-1,-1,1),(0,m.f)(-1,1,-1),(0,m.f)(-1,1,1),(0,m.f)(1,-1,-1),(0,m.f)(1,-1,1),(0,m.f)(1,1,-1),(0,m.f)(1,1,1)],L=Math.sqrt(3),C=[null],Z=(0,p.c)(),G=(0,m.c)(),D=(0,m.c)(),V=(0,m.c)(),H=new M.Z,k=(0,p.c)(),W=(0,p.c)(),q=(0,p.c)(),U=(0,p.c)(),Y=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],X=new M.Z,K=[0,0,0,0,0,0,0,0],J=A;var Q=n(1180);let $=class{constructor(){this._idToComponent=new Map,this._components=new J((t=>t.bounds)),this._edges=new J((t=>t.bounds)),this._tmpLineSegment=(0,g.Ue)(),this._tmpP1=(0,m.c)(),this._tmpP2=(0,m.c)(),this._tmpP3=(0,m.c)(),this.remoteClient=null}async fetchCandidates(t,e){await Promise.resolve(),(0,d.k_)(e),await this._ensureEdgeLocations(t,e);const n=[];return this._edges.forEachNeighbor((e=>this._addCandidates(t,e,n)),t.bounds),{result:{candidates:n}}}async _ensureEdgeLocations(t,e){const n=[];if(this._components.forEachNeighbor((t=>{if((0,l.Wi)(t.info)){const{id:e,uid:i}=t;n.push({id:e,uid:i})}}),t.bounds),!n.length)return;const i={components:n},s=await this.remoteClient.invoke("fetchAllEdgeLocations",i,(0,l.Pt)(e,{}));for(const t of s.components)this._setFetchEdgeLocations(t)}async add(t){const e=new et(t.id,t.bounds);return this._idToComponent.set(e.id,e),this._components.add([e]),{result:{}}}async remove(t){const e=this._idToComponent.get(t.id);if(e){const t=[];this._edges.forEachNeighbor((n=>{n.component===e&&t.push(n)}),e.bounds),this._edges.remove(t),this._components.remove([e]),this._idToComponent.delete(e.id)}return{result:{}}}_setFetchEdgeLocations(t){const e=this._idToComponent.get(t.id);if((0,l.Wi)(e)||t.uid!==e.uid)return;const n=Q.extractComponentsEdgeLocationsLayout.createView(t.locations),i=new Array(n.count),s=(0,m.c)(),r=(0,m.c)();for(let o=0;o<n.count;o++){const c=(0,p.c)(),a=(0,p.g)(c);n.position0.getVec(o,s),n.position1.getVec(o,r),(0,_.C)(a,a,s,.5),(0,_.C)(a,a,r,.5),(0,_.a)(a,a,t.origin),c[3]=(0,_.i)(a,s);const h=new nt(e,o,c);i[o]=h}this._edges.add(i);const{objectIds:o,origin:c}=t;e.info={locations:n,objectIds:o,origin:c}}_addCandidates(t,e,n){const{locations:i,origin:s,objectIds:r}=e.component.info,o=i.position0.getVec(e.index,this._tmpP1),c=i.position1.getVec(e.index,this._tmpP2);(0,_.a)(o,o,s),(0,_.a)(c,c,s);const a=r[i.componentIndex.get(e.index)];this._addEdgeCandidate(t,a,o,c,n),this._addVertexCandidate(t,a,o,n),this._addVertexCandidate(t,a,c,n)}_addEdgeCandidate(t,e,n,i,s){if(!(t.types&T.r.EDGE))return;const r=(0,p.g)(t.bounds),o=(0,g.zk)(n,i,this._tmpLineSegment),c=(0,g.nF)(o,r,this._tmpP3);if(!(0,p.m)(t.bounds,c))return null;s.push({type:"edge",objectId:e,target:(0,m.a)(c),distance:(0,_.i)(r,c),start:(0,m.a)(n),end:(0,m.a)(i)})}_addVertexCandidate(t,e,n,i){if(!(t.types&T.r.VERTEX))return;const s=(0,p.g)(t.bounds);if(!(0,p.m)(t.bounds,n))return null;i.push({type:"vertex",objectId:e,target:(0,m.a)(n),distance:(0,_.i)(s,n)})}};function tt(){return new $}$=(0,u._)([(0,f.j)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],$);class et{constructor(t,e){this.id=t,this.bounds=e,this.info=null,this.uid=++et.uid}}et.uid=0;class nt{constructor(t,e,n){this.component=t,this.index=e,this.bounds=n}}}}]);