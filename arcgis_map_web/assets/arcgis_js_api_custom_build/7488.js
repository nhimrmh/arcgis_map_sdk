"use strict";(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[7488],{19870:(e,t,i)=>{i.d(t,{L:()=>P,b:()=>_});var n=i(24455),s=i(39100),r=i(55709),a=i(69666),l=i(10767),o=i(93072),c=i(24603),h=i(23410),d=i(87621),p=i(3961),u=i(21414);function _(e){const t=new p.kG;t.include(l.j,e);const{vertex:i,fragment:s}=t;return i.uniforms.add([new d.g("modelView",((e,t)=>(0,n.w)(f,t.camera.viewMatrix,e.origin))),new d.g("proj",((e,t)=>t.camera.projectionMatrix)),new c.p("glowWidth",((e,t)=>e.glowWidth*t.camera.pixelRatio)),new o.A("pixelToNDC",((e,t)=>(0,r.s)(g,2/t.camera.fullViewport[2],2/t.camera.fullViewport[3])))]),t.attributes.add(u.T.START,"vec3"),t.attributes.add(u.T.END,"vec3"),t.attributes.add(u.T.UP,"vec3"),t.attributes.add(u.T.EXTRUDE,"vec2"),t.varyings.add("uv","vec2"),t.varyings.add("vViewStart","vec3"),t.varyings.add("vViewEnd","vec3"),t.varyings.add("vViewPlane","vec4"),i.code.add(h.H`void main() {
vec3 pos = mix(start, end, extrude.x);
vec4 viewPos = modelView * vec4(pos, 1);
vec4 projPos = proj * viewPos;
vec2 ndcPos = projPos.xy / projPos.w;
vec3 viewUp = (modelView * vec4(extrude.y * up, 0)).xyz;
vec4 projPosUp = proj * vec4(viewPos.xyz + viewUp, 1);
vec2 projExtrudeDir = normalize(projPosUp.xy / projPosUp.w - ndcPos);
vec2 lxy = abs(sign(projExtrudeDir) - ndcPos);
ndcPos += length(lxy) * projExtrudeDir;
vec3 worldPlaneNormal = normalize(cross(up, normalize(end - start)));
vec3 viewPlaneNormal = (modelView * vec4(worldPlaneNormal, 0)).xyz;
vViewStart = (modelView * vec4(start, 1)).xyz;
vViewEnd = (modelView * vec4(end, 1)).xyz;
vViewPlane = vec4(viewPlaneNormal, -dot(viewPlaneNormal, vViewStart));
float xPaddingPixels = sign(dot(viewPlaneNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
ndcPos.x += xPaddingPixels * pixelToNDC.x;
uv = ndcPos * 0.5 + 0.5;
gl_Position = vec4(ndcPos, 0, 1);
}`),s.uniforms.add(new c.p("perScreenPixelRatio",((e,t)=>t.camera.perScreenPixelRatio))),s.code.add(h.H`float planeDistancePixels(vec4 plane, vec3 pos, vec3 start, vec3 end) {
vec3 origin = mix(start, end, 0.5);
vec3 basis = end - origin;
vec3 posAtOrigin = pos - origin;
float x = dot(normalize(basis), posAtOrigin);
float y = dot(plane.xyz, posAtOrigin);
float dx = max(abs(x) - length(basis), 0.0);
float dy = y;
float dist = length(vec2(dx, dy));
float width = fwidth(y);
float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
float pixelDist = dist / min(width, maxPixelDistance);
return abs(pixelDist);
}
void main() {
vec3 pos;
vec3 normal;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
discard;
}
float distance = planeDistancePixels(vViewPlane, pos, vViewStart, vViewEnd);
vec4 color = laserlineProfile(distance);
float alpha = 1.0 - smoothstep(0.995, 0.999, abs(dot(normal, vViewPlane.xyz)));
gl_FragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);
}`),t}const g=(0,a.a)(),f=(0,s.c)(),P=Object.freeze(Object.defineProperty({__proto__:null,build:_},Symbol.toStringTag,{value:"Module"}))},15199:(e,t,i)=>{i.d(t,{L:()=>T,b:()=>x,d:()=>w});var n=i(19431),s=i(55709),r=i(69666),a=i(6766),l=i(8909),o=i(88589),c=i(1983),h=i(56215),d=i(69430),p=i(91917),u=i(10767),_=i(55208),g=i(93072),f=i(43036),P=i(63371),m=i(24603),b=i(23410),v=i(3961);const w=(0,n.Vl)(6);function x(e){const t=new v.kG;t.extensions.add("GL_OES_standard_derivatives"),t.include(_.k),t.include(u.j,e);const i=t.fragment;if(e.lineVerticalPlaneEnabled||e.heightManifoldEnabled)if(i.uniforms.add(new m.p("maxPixelDistance",((t,i)=>e.heightManifoldEnabled?2*i.camera.computeScreenPixelSizeAt(t.heightManifoldTarget):2*i.camera.computeScreenPixelSizeAt(t.lineVerticalPlaneSegment.origin)))),i.code.add(b.H`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),e.spherical){const e=(e,t,i)=>(0,a.m)(e,t.heightManifoldTarget,i.camera.viewMatrix),t=(e,t)=>(0,a.m)(e,[0,0,0],t.camera.viewMatrix);i.uniforms.add([new P.N("heightManifoldOrigin",((i,n)=>(e(L,i,n),t(S,n),(0,a.b)(S,S,L),(0,a.n)(E,S),E[3]=(0,a.l)(S),E))),new f.J("globalOrigin",((e,i)=>t(L,i))),new m.p("cosSphericalAngleThreshold",((e,t)=>1-Math.max(2,(0,a.i)(t.camera.eye,e.heightManifoldTarget)*t.camera.perRenderPixelRatio)/(0,a.l)(e.heightManifoldTarget)))]),i.code.add(b.H`float globeDistancePixels(float posInGlobalOriginLength) {
float dist = abs(posInGlobalOriginLength - heightManifoldOrigin.w);
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}
float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
vec3 posInGlobalOriginNorm = normalize(globalOrigin - pos);
float cosAngle = dot(posInGlobalOriginNorm, heightManifoldOrigin.xyz);
vec3 posInGlobalOrigin = globalOrigin - pos;
float posInGlobalOriginLength = length(posInGlobalOrigin);
float sphericalDistance = globeDistancePixels(posInGlobalOriginLength);
float planarDistance = planeDistancePixels(heightPlane, pos);
return cosAngle < cosSphericalAngleThreshold ? sphericalDistance : planarDistance;
}`)}else i.code.add(b.H`float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
return planeDistancePixels(heightPlane, pos);
}`);if(e.pointDistanceEnabled&&(i.uniforms.add(new m.p("maxPixelDistance",((e,t)=>2*t.camera.computeScreenPixelSizeAt(e.pointDistanceTarget)))),i.code.add(b.H`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`)),e.intersectsLineEnabled&&(i.uniforms.add(new m.p("perScreenPixelRatio",((e,t)=>t.camera.perScreenPixelRatio))),i.code.add(b.H`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`)),(e.lineVerticalPlaneEnabled||e.intersectsLineEnabled)&&i.code.add(b.H`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`),i.code.add(b.H`void main() {
vec3 pos;
vec3 normal;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
discard;
}
vec4 color = vec4(0, 0, 0, 0);`),e.heightManifoldEnabled){i.uniforms.add([new g.A("angleCutoff",(e=>V(e))),new P.N("heightPlane",((e,t)=>y(e.heightManifoldTarget,e.renderCoordsHelper.worldUpAtPosition(e.heightManifoldTarget,L),t.camera.viewMatrix)))]);const t=e.spherical?b.H`normalize(globalOrigin - pos)`:b.H`heightPlane.xyz`;i.code.add(b.H`
    {
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, ${t})));
      vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);
    }
    `)}return e.pointDistanceEnabled&&(i.uniforms.add([new g.A("angleCutoff",(e=>V(e))),new P.N("pointDistanceSphere",((e,t)=>function(e,t){return(0,a.m)(A,e.pointDistanceOrigin,t.camera.viewMatrix),A[3]=(0,a.i)(e.pointDistanceOrigin,e.pointDistanceTarget),A}(e,t)))]),i.code.add(b.H`{
float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);
}`)),e.lineVerticalPlaneEnabled&&(i.uniforms.add([new g.A("angleCutoff",(e=>V(e))),new P.N("lineVerticalPlane",((e,t)=>function(e,t){const i=(0,h.KU)(e.lineVerticalPlaneSegment,.5,L),n=e.renderCoordsHelper.worldUpAtPosition(i,C),s=(0,a.n)(S,e.lineVerticalPlaneSegment.vector),r=(0,a.f)(E,n,s);return(0,a.n)(r,r),y(e.lineVerticalPlaneSegment.origin,r,t.camera.viewMatrix)}(e,t))),new f.J("lineVerticalStart",((e,t)=>function(e,t){const i=(0,a.c)(L,e.lineVerticalPlaneSegment.origin);return e.renderCoordsHelper.setAltitude(i,0),(0,a.m)(i,i,t.camera.viewMatrix)}(e,t))),new f.J("lineVerticalEnd",((e,t)=>function(e,t){const i=(0,a.a)(L,e.lineVerticalPlaneSegment.origin,e.lineVerticalPlaneSegment.vector);return e.renderCoordsHelper.setAltitude(i,0),(0,a.m)(i,i,t.camera.viewMatrix)}(e,t)))]),i.code.add(b.H`{
if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}
}`)),e.intersectsLineEnabled&&(i.uniforms.add([new g.A("angleCutoff",(e=>V(e))),new f.J("intersectsLineStart",((e,t)=>(0,a.m)(L,e.lineStartWorld,t.camera.viewMatrix))),new f.J("intersectsLineEnd",((e,t)=>(0,a.m)(L,e.lineEndWorld,t.camera.viewMatrix))),new f.J("intersectsLineDirection",((e,t)=>((0,a.c)(E,e.intersectsLineSegment.vector),E[3]=0,(0,a.n)(L,(0,o.t)(E,E,t.camera.viewMatrix))))),new m.p("intersectsLineRadius",(e=>e.intersectsLineRadius))]),i.code.add(b.H`{
if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}
}`)),i.code.add(b.H`gl_FragColor = laserlineOutput(color * depthDiscontinuityAlpha);
}`),t}function V(e){return(0,s.s)(D,Math.cos(e.angleCutoff),Math.cos(Math.max(0,e.angleCutoff-(0,n.Vl)(2))))}function y(e,t,i){return(0,a.m)(R,e,i),(0,a.c)(E,t),E[3]=0,(0,o.t)(E,E,i),(0,d.Yq)(R,E,M)}const D=(0,r.a)(),L=(0,l.c)(),E=(0,c.c)(),C=(0,l.c)(),S=(0,l.c)(),R=(0,l.c)(),M=(0,d.Ue)(),A=(0,p.c)(),T=Object.freeze(Object.defineProperty({__proto__:null,build:x,defaultAngleCutoff:w},Symbol.toStringTag,{value:"Module"}))},40199:(e,t,i)=>{i.d(t,{W:()=>B});var n=i(61681),s=i(6766),r=i(8909),a=i(56215),l=i(76169),o=i(70740),c=i(59934),h=i(97537),d=i(65684),p=i(95397),u=i(44685),_=i(47481),g=i(44125),f=i(21414),P=i(9969),m=i(52756),b=i(95194),v=i(19870),w=i(91907),x=i(17346);class V extends m.A{initializeProgram(e){return new b.$(e.rctx,V.shader.get().build(this.configuration),y)}initializePipeline(){return(0,x.sm)({blending:(0,x.if)(w.zi.ONE,w.zi.ONE_MINUS_SRC_ALPHA),colorWrite:x.BK})}}V.shader=new P.J(v.L,(()=>i.e(6807).then(i.bind(i,36807))));const y=new Map([[f.T.START,0],[f.T.END,1],[f.T.UP,2],[f.T.EXTRUDE,3]]);var D=i(78951);class L{constructor(e){this._renderCoordsHelper=e,this._buffers=null,this._origin=(0,r.c)(),this._dirty=!1,this._count=0,this._vao=null}set vertices(e){const t=(0,_.bg)(3*e.length);let i=0;for(const n of e)t[i++]=n[0],t[i++]=n[1],t[i++]=n[2];this.buffers=[t]}set buffers(e){if(this._buffers=e,this._buffers.length>0){const e=this._buffers[0],t=3*Math.floor(e.length/3/2);(0,s.s)(this._origin,e[t+0],e[t+1],e[t+2])}else(0,s.s)(this._origin,0,0,0);this._dirty=!0}get origin(){return this._origin}draw(e){const t=this._ensureVAO(e);(0,n.pC)(t)&&(e.bindVAO(t),e.drawArrays(w.MX.TRIANGLES,0,this._count))}dispose(){(0,n.pC)(this._vao)&&this._vao.dispose()}_ensureVAO(e){return(0,n.Wi)(this._buffers)?null:((0,n.Wi)(this._vao)&&(this._vao=this._createVAO(e,this._buffers)),this._ensureVertexData(this._vao,this._buffers),this._vao)}_createVAO(e,t){const i=this._createDataBuffer(t);return this._dirty=!1,new g.U(e,y,{data:(0,p.K)(S)},{data:D.f.createVertex(e,w.l1.STATIC_DRAW,i)})}_ensureVertexData(e,t){if(!this._dirty)return;const i=this._createDataBuffer(t);e.vertexBuffers.data?.setData(i),this._dirty=!1}_numberOfRenderVertices(e){return 2*(e.length/3-1)*3}_createDataBuffer(e){const t=e.reduce(((e,t)=>e+this._numberOfRenderVertices(t)),0);this._count=t;const i=S.createBuffer(t),n=this._origin;let r=0,a=0;for(const t of e){for(let e=0;e<t.length;e+=3){const l=(0,s.s)(C,t[e+0],t[e+1],t[e+2]);0===e?a=this._renderCoordsHelper.getAltitude(l):this._renderCoordsHelper.setAltitude(l,a);const o=this._renderCoordsHelper.worldUpAtPosition(l,E),c=r+2*e,h=(0,s.b)(C,l,n);if(e<t.length-3){i.up.setVec(c,o),i.up.setVec(c+3,o),i.up.setVec(c+5,o);for(let e=0;e<6;e++)i.start.setVec(c+e,h);i.extrude.setValues(c+0,0,-1),i.extrude.setValues(c+1,1,-1),i.extrude.setValues(c+2,1,1),i.extrude.setValues(c+3,0,-1),i.extrude.setValues(c+4,1,1),i.extrude.setValues(c+5,0,1)}if(e>0){i.up.setVec(c-2,o),i.up.setVec(c-4,o),i.up.setVec(c-5,o);for(let e=-6;e<0;e++)i.end.setVec(c+e,h)}}r+=this._numberOfRenderVertices(t)}return i.buffer}}const E=(0,r.c)(),C=(0,r.c)(),S=(0,u.U$)().vec3f(f.T.START).vec3f(f.T.END).vec3f(f.T.UP).vec2f(f.T.EXTRUDE);var R=i(62039),M=i(46378),A=i(25584),T=i(36663),O=i(67197);class q extends O.m{constructor(){super(...arguments),this.contrastControlEnabled=!1}}(0,T._)([(0,O.o)()],q.prototype,"contrastControlEnabled",void 0);var W=i(19431),I=i(23410),H=i(5474),z=i(15199);class U extends I.K{constructor(){super(...arguments),this.innerColor=(0,r.f)(1,1,1),this.innerWidth=1,this.glowColor=(0,r.f)(1,.5,0),this.glowWidth=8,this.glowFalloff=8,this.globalAlpha=.75,this.globalAlphaContrastBoost=2,this.angleCutoff=(0,W.Vl)(6),this.pointDistanceOrigin=(0,r.c)(),this.pointDistanceTarget=(0,r.c)(),this.lineVerticalPlaneSegment=(0,a.Ue)(),this.intersectsLineSegment=(0,a.Ue)(),this.intersectsLineRadius=3,this.heightManifoldTarget=(0,r.c)(),this.lineStartWorld=(0,r.c)(),this.lineEndWorld=(0,r.c)()}}class N extends m.A{initializeProgram(e){return new b.$(e.rctx,N.shader.get().build(this.configuration),H.i)}initializePipeline(){return(0,x.sm)({blending:(0,x.if)(w.zi.ONE,w.zi.ONE_MINUS_SRC_ALPHA),colorWrite:x.BK})}}N.shader=new P.J(z.L,(()=>i.e(4078).then(i.bind(i,14078))));class j extends q{constructor(){super(...arguments),this.heightManifoldEnabled=!1,this.pointDistanceEnabled=!1,this.lineVerticalPlaneEnabled=!1,this.intersectsLineEnabled=!1,this.spherical=!1}}(0,T._)([(0,O.o)()],j.prototype,"heightManifoldEnabled",void 0),(0,T._)([(0,O.o)()],j.prototype,"pointDistanceEnabled",void 0),(0,T._)([(0,O.o)()],j.prototype,"lineVerticalPlaneEnabled",void 0),(0,T._)([(0,O.o)()],j.prototype,"intersectsLineEnabled",void 0),(0,T._)([(0,O.o)()],j.prototype,"spherical",void 0);class F{constructor(e,t={contrastControlEnabled:!1}){this._config=t,this._technique=null,this._heightManifoldEnabled=!1,this._pointDistanceEnabled=!1,this._lineVerticalPlaneEnabled=!1,this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._viewingMode=d.JY.Local,this._pathVerticalPlaneEnabled=!1,this._pathVerticalPlaneData=null,this._pathTechnique=null,this.canRender=!0,this._passParameters=(0,A.Uf)(e,new U)}get renderSlots(){return[this._config.contrastControlEnabled?M.r.LASERLINES_CONTRAST_CONTROL:M.r.LASERLINES]}get needsLinearDepth(){return!0}get heightManifoldEnabled(){return this._heightManifoldEnabled}set heightManifoldEnabled(e){this._heightManifoldEnabled!==e&&(this._heightManifoldEnabled=e,this._requestRender())}get heightManifoldTarget(){return this._passParameters.heightManifoldTarget}set heightManifoldTarget(e){(0,s.c)(this._passParameters.heightManifoldTarget,e),this._requestRender()}get pointDistanceEnabled(){return this._pointDistanceEnabled}set pointDistanceEnabled(e){e!==this._pointDistanceEnabled&&(this._pointDistanceEnabled=e,this._requestRender())}get pointDistanceTarget(){return this._passParameters.pointDistanceTarget}set pointDistanceTarget(e){(0,s.c)(this._passParameters.pointDistanceTarget,e),this._requestRender()}get pointDistanceOrigin(){return this._passParameters.pointDistanceOrigin}set pointDistanceOrigin(e){(0,s.c)(this._passParameters.pointDistanceOrigin,e),this._requestRender()}get lineVerticalPlaneEnabled(){return this._lineVerticalPlaneEnabled}set lineVerticalPlaneEnabled(e){e!==this._lineVerticalPlaneEnabled&&(this._lineVerticalPlaneEnabled=e,this._requestRender())}get lineVerticalPlaneSegment(){return this._passParameters.lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){(0,a.JG)(e,this._passParameters.lineVerticalPlaneSegment),this._requestRender()}get intersectsLineEnabled(){return this._intersectsLineEnabled}set intersectsLineEnabled(e){e!==this._intersectsLineEnabled&&(this._intersectsLineEnabled=e,this._requestRender())}get intersectsLineSegment(){return this._passParameters.intersectsLineSegment}set intersectsLineSegment(e){(0,a.JG)(e,this._passParameters.intersectsLineSegment),this._requestRender()}get intersectsLineRadius(){return this._passParameters.intersectsLineRadius}set intersectsLineRadius(e){e!==this._passParameters.intersectsLineRadius&&(this._passParameters.intersectsLineRadius=e,this._requestRender())}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){e!==this._intersectsLineInfinite&&(this._intersectsLineInfinite=e,this._requestRender())}get viewingMode(){return this._viewingMode}set viewingMode(e){e!==this._viewingMode&&(this._viewingMode=e,this._requestRender())}get pathVerticalPlaneEnabled(){return this._pathVerticalPlaneEnabled}set pathVerticalPlaneEnabled(e){e!==this._pathVerticalPlaneEnabled&&(this._pathVerticalPlaneEnabled=e,(0,n.pC)(this._pathVerticalPlaneData)&&this._requestRender())}set pathVerticalPlaneVertices(e){(0,n.Wi)(this._pathVerticalPlaneData)&&(this._pathVerticalPlaneData=new L(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.vertices=e,this.pathVerticalPlaneEnabled&&this._requestRender()}set pathVerticalPlaneBuffers(e){(0,n.Wi)(this._pathVerticalPlaneData)&&(this._pathVerticalPlaneData=new L(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.buffers=e,this.pathVerticalPlaneEnabled&&this._requestRender()}setParameters(e){(0,A.LO)(this._passParameters,e)&&this._requestRender()}initializeRenderContext(e){this._context=e;const t=e.renderContext.rctx;this._quadVAO=(0,R.ow)(t),this._techniqueRepository=e.techniqueRepository,this._techniqueConfig=new j;const i=new q;i.contrastControlEnabled=this._config.contrastControlEnabled,this._pathTechnique=this._techniqueRepository.acquire(V,i)}uninitializeRenderContext(){this._quadVAO=(0,n.M2)(this._quadVAO),this._technique=(0,n.RY)(this._technique),this._pathVerticalPlaneData=(0,n.M2)(this._pathVerticalPlaneData),this._pathTechnique=(0,n.RY)(this._pathTechnique)}prepareTechnique(){return this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled?(this._techniqueConfig.heightManifoldEnabled=this.heightManifoldEnabled,this._techniqueConfig.lineVerticalPlaneEnabled=this.lineVerticalPlaneEnabled,this._techniqueConfig.pointDistanceEnabled=this.pointDistanceEnabled,this._techniqueConfig.intersectsLineEnabled=this.intersectsLineEnabled,this._techniqueConfig.contrastControlEnabled=this._config.contrastControlEnabled,this._techniqueConfig.spherical=this._viewingMode===d.JY.Global,this._technique=this._techniqueRepository.releaseAndAcquire(N,this._techniqueConfig,this._technique),this._technique):this._pathTechnique}render(e,t){(this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled)&&this._renderUnified(e,t),this.pathVerticalPlaneEnabled&&this._renderPath(e)}_renderUnified(e,t){const i=e.rctx;this._updatePassParameters(e),i.bindTechnique(t,this._passParameters,e.bindParameters),i.bindVAO(this._quadVAO),i.drawArrays(w.MX.TRIANGLE_STRIP,0,4)}_renderPath(e){if((0,n.Wi)(this._pathVerticalPlaneData)||(0,n.Wi)(this._pathTechnique))return;const t=e.rctx,i=this._pathTechnique;t.bindTechnique(i,{...this._passParameters,origin:this._pathVerticalPlaneData.origin},e.bindParameters),this._pathVerticalPlaneData.draw(e.rctx)}_updatePassParameters(e){if(!this._intersectsLineEnabled)return;const t=e.bindParameters.camera;if(this._intersectsLineInfinite){if((0,o.iL)((0,h.re)(this._passParameters.intersectsLineSegment.origin,this._passParameters.intersectsLineSegment.vector),G),G.c0=-Number.MAX_VALUE,!(0,c.zq)(t.frustum,G))return;(0,o.Ws)(G,this._passParameters.lineStartWorld),(0,o.S$)(G,this._passParameters.lineEndWorld)}else(0,s.c)(this._passParameters.lineStartWorld,this._passParameters.intersectsLineSegment.origin),(0,s.a)(this._passParameters.lineEndWorld,this._passParameters.intersectsLineSegment.origin,this._passParameters.intersectsLineSegment.vector)}_requestRender(){this._context&&this._context.requestRender()}}const G=(0,o.Ue)();class B extends l.l{constructor(e){super(e.view),this._angleCutoff=z.d,this._style={},this._heightManifoldTarget=(0,r.c)(),this._heightManifoldEnabled=!1,this._intersectsLine=(0,a.Ue)(),this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._lineVerticalPlaneSegment=null,this._pathVerticalPlaneBuffers=null,this._pointDistanceLine=null,this.applyProps(e)}get testData(){return this._renderer}createResources(){this._ensureRenderer()}destroyResources(){this._disposeRenderer()}updateVisibility(){this._syncRenderer(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance()}get angleCutoff(){return this._angleCutoff}set angleCutoff(e){this._angleCutoff!==e&&(this._angleCutoff=e,this._syncAngleCutoff())}get style(){return this._style}set style(e){this._style=e,this._syncStyle()}get heightManifoldTarget(){return this._heightManifoldEnabled?this._heightManifoldTarget:null}set heightManifoldTarget(e){(0,n.pC)(e)?((0,s.c)(this._heightManifoldTarget,e),this._heightManifoldEnabled=!0):this._heightManifoldEnabled=!1,this._syncRenderer(),this._syncHeightManifold()}set intersectsWorldUpAtLocation(e){if((0,n.Wi)(e))return void(this.intersectsLine=null);const t=this.view.renderCoordsHelper.worldUpAtPosition(e,J);this.intersectsLine=(0,a.al)(e,t),this.intersectsLineInfinite=!0}get intersectsLine(){return this._intersectsLineEnabled?this._intersectsLine:null}set intersectsLine(e){(0,n.pC)(e)?((0,a.JG)(e,this._intersectsLine),this._intersectsLineEnabled=!0):this._intersectsLineEnabled=!1,this._syncIntersectsLine(),this._syncRenderer()}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){this._intersectsLineInfinite=e,this._syncIntersectsLineInfinite()}get lineVerticalPlaneSegment(){return this._lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){this._lineVerticalPlaneSegment=(0,n.pC)(e)?(0,a.JG)(e):null,this._syncLineVerticalPlane(),this._syncRenderer()}get pathVerticalPlane(){return this._pathVerticalPlaneBuffers}set pathVerticalPlane(e){this._pathVerticalPlaneBuffers=e,this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncRenderer()}get pointDistanceLine(){return this._pointDistanceLine}set pointDistanceLine(e){this._pointDistanceLine=(0,n.pC)(e)?{origin:(0,r.a)(e.origin),target:e.target?(0,r.a)(e.target):null}:null,this._syncPointDistance(),this._syncRenderer()}_syncRenderer(){this.attached&&this.visible&&(this._intersectsLineEnabled||this._heightManifoldEnabled||(0,n.pC)(this._pointDistanceLine)||(0,n.pC)(this._pathVerticalPlaneBuffers))?this._ensureRenderer():this._disposeRenderer()}_ensureRenderer(){(0,n.pC)(this._renderer)||(this._renderer=new F({renderCoordsHelper:this.view.renderCoordsHelper},{contrastControlEnabled:!0}),this._renderer.viewingMode=this.view.state.viewingMode,this._syncStyle(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncIntersectsLineInfinite(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncAngleCutoff(),this.view._stage&&this.view._stage.addRenderPlugin(this._renderer.renderSlots,this._renderer))}_syncStyle(){(0,n.Wi)(this._renderer)||(this._renderer.setParameters(this._style),null!=this._style.intersectsLineRadius&&(this._renderer.intersectsLineRadius=this._style.intersectsLineRadius))}_syncAngleCutoff(){(0,n.Wi)(this._renderer)||this._renderer.setParameters({angleCutoff:this._angleCutoff})}_syncHeightManifold(){(0,n.Wi)(this._renderer)||(this._renderer.heightManifoldEnabled=this._heightManifoldEnabled&&this.visible,this._heightManifoldEnabled&&(this._renderer.heightManifoldTarget=this._heightManifoldTarget))}_syncIntersectsLine(){(0,n.Wi)(this._renderer)||(this._renderer.intersectsLineEnabled=this._intersectsLineEnabled&&this.visible,this._intersectsLineEnabled&&(this._renderer.intersectsLineSegment=this._intersectsLine))}_syncIntersectsLineInfinite(){(0,n.Wi)(this._renderer)||(this._renderer.intersectsLineInfinite=this._intersectsLineInfinite)}_syncPathVerticalPlane(){(0,n.Wi)(this._renderer)||(this._renderer.pathVerticalPlaneEnabled=(0,n.pC)(this._pathVerticalPlaneBuffers)&&this.visible,(0,n.pC)(this._pathVerticalPlaneBuffers)&&(this._renderer.pathVerticalPlaneBuffers=this._pathVerticalPlaneBuffers))}_syncLineVerticalPlane(){(0,n.Wi)(this._renderer)||(this._renderer.lineVerticalPlaneEnabled=(0,n.pC)(this._lineVerticalPlaneSegment)&&this.visible,(0,n.pC)(this._lineVerticalPlaneSegment)&&(this._renderer.lineVerticalPlaneSegment=this._lineVerticalPlaneSegment))}_syncPointDistance(){if((0,n.Wi)(this._renderer))return;const e=this._pointDistanceLine,t=(0,n.pC)(e);this._renderer.pointDistanceEnabled=t&&null!=e.target&&this.visible,t&&(this._renderer.pointDistanceOrigin=e.origin,null!=e.target&&(this._renderer.pointDistanceTarget=e.target))}_disposeRenderer(){(0,n.pC)(this._renderer)&&this.view._stage&&(this.view._stage.removeRenderPlugin(this._renderer),this._renderer=null)}}const J=(0,r.c)()},7426:(e,t,i)=>{i.d(t,{O:()=>h});var n=i(61681),s=i(76868),r=i(95399),a=i(49394),l=i(44101),o=i(53448),c=i(26982);class h{constructor(e){this._resourceFactory=e,this._resources=null,this._visible=!0,this._attached=!1}destroy(){this._destroyResources()}get object(){return(0,n.pC)(this._resources)?this._resources.object:null}get resources(){return(0,n.pC)(this._resources)?this._resources.external:null}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this._syncVisible())}get attached(){return this._attached}set attached(e){e!==this._attached&&(this._attached=e,this._createOrDestroyResources())}recreate(){this.attached&&this._createResources()}recreateGeometry(){if(!this._resourceFactory.recreateGeometry)return void this.recreate();const e=this._resourceFactory.view._stage;if((0,n.Wi)(this._resources)||!e)return;const t=this._resources.object;this._resources.external.forEach((t=>{t.type!==r.U.Mesh&&t.type!==r.U.Line&&t.type!==r.U.Point||e.remove(t)})),t.removeAllGeometries(),this._resourceFactory.recreateGeometry(this._resources.external,t,this._resources.layer),this._resources.external.forEach((t=>{t.type!==r.U.Mesh&&t.type!==r.U.Line&&t.type!==r.U.Point||e.add(t)}))}_createOrDestroyResources(){this._attached?this._resources||this._createResources():this._destroyResources()}_createResources(){this._destroyResources();const e=this._resourceFactory,t=e.view,i=t._stage;if(!i)return;const n=new c.F({pickable:!1,updatePolicy:o.j.SYNC});i.add(n);const r=new a.T({castShadow:!1}),h=e.createResources(r,n);h.forEach((e=>{i.add(e),e instanceof l.x&&i.loadImmediate(e)})),i.add(r),n.add(r);const d=e.cameraChanged,p=d?(0,s.YP)((()=>t.state.camera),(e=>d(e)),s.nn):null;this._resources={layer:n,object:r,external:h,cameraHandle:p},this._syncVisible()}_destroyResources(){if((0,n.Wi)(this._resources))return;const e=this._resourceFactory.view._stage;e&&(e.remove(this._resources.object),e.remove(this._resources.layer),this._resources.external.forEach((t=>e.remove(t)))),this._resources.object.dispose(),this._resources.cameraHandle?.remove(),this._resourceFactory.destroyResources(this._resources.external),this._resources=null}_syncVisible(){(0,n.Wi)(this._resources)||(this._resources.object.visible=this._visible)}}},10767:(e,t,i)=>{i.d(t,{j:()=>d});var n=i(61681),s=i(6665),r=i(77334),a=i(93072),l=i(43036),o=i(24603),c=i(23410),h=i(15176);function d(e,t){e.extensions.add("GL_OES_standard_derivatives");const i=e.fragment;i.include(s.S),e.include(r.G),i.uniforms.add([new o.p("globalAlpha",(e=>e.globalAlpha)),new l.J("glowColor",(e=>e.glowColor)),new o.p("glowWidth",((e,t)=>e.glowWidth*t.camera.pixelRatio)),new o.p("glowFalloff",(e=>e.glowFalloff)),new l.J("innerColor",(e=>e.innerColor)),new o.p("innerWidth",((e,t)=>e.innerWidth*t.camera.pixelRatio)),new h.A("depthMap",((e,t)=>t.linearDepthTexture)),new a.A("nearFar",((e,t)=>t.camera.nearFar)),new h.A("frameColor",((e,t)=>t.mainColorTexture))]),i.code.add(c.H`vec4 blendPremultiplied(vec4 source, vec4 dest) {
float oneMinusSourceAlpha = 1.0 - source.a;
return vec4(
source.rgb + dest.rgb * oneMinusSourceAlpha,
source.a + dest.a * oneMinusSourceAlpha
);
}`),i.code.add(c.H`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`),i.code.add(c.H`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`),i.code.add(c.H`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float depthDiscontinuityAlpha) {
float depth = linearDepthFromTexture(depthMap, uv, nearFar);
if (-depth == nearFar[0]) {
return false;
}
pos = reconstructPosition(gl_FragCoord.xy, depth);
normal = normalize(cross(dFdx(pos), dFdy(pos)));
float ddepth = fwidth(depth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / depth);
return true;
}`),t.contrastControlEnabled?(i.uniforms.add(new o.p("globalAlphaContrastBoost",(e=>(0,n.pC)(e.globalAlphaContrastBoost)?e.globalAlphaContrastBoost:1))),i.code.add(c.H`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture2D(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`)):i.code.add(c.H`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)}}}]);