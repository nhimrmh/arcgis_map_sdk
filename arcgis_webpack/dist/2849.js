"use strict";(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[2849],{34344:(e,t,o)=>{function r(){return[1,0,0,0,1,0,0,0,1]}function n(e,t){return new Float64Array(e,t,9)}o.d(t,{a:()=>n,c:()=>r}),Object.freeze(Object.defineProperty({__proto__:null,create:r,clone:function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]},fromValues:function(e,t,o,r,n,i,s,l,a){return[e,t,o,r,n,i,s,l,a]},createView:n},Symbol.toStringTag,{value:"Module"}))},10663:(e,t,o)=>{o.d(t,{c:()=>p,g:()=>c,j:()=>U,k:()=>b,m:()=>f,s:()=>u});var r=o(34344),n=o(61044),i=o(8909),s=o(93011),l=o(6766),a=o(88589);function u(e,t,o){o*=.5;const r=Math.sin(o);return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=Math.cos(o),e}function c(e,t){const o=2*Math.acos(t[3]),r=Math.sin(o/2);return r>s.E?(e[0]=t[0]/r,e[1]=t[1]/r,e[2]=t[2]/r):(e[0]=1,e[1]=0,e[2]=0),o}function f(e,t,o){const r=t[0],n=t[1],i=t[2],s=t[3],l=o[0],a=o[1],u=o[2],c=o[3];return e[0]=r*c+s*l+n*u-i*a,e[1]=n*c+s*a+i*l-r*u,e[2]=i*c+s*u+r*a-n*l,e[3]=s*c-r*l-n*a-i*u,e}function d(e,t,o,r){const n=t[0],i=t[1],l=t[2],a=t[3];let u,c,f,d,p,y=o[0],b=o[1],h=o[2],g=o[3];return c=n*y+i*b+l*h+a*g,c<0&&(c=-c,y=-y,b=-b,h=-h,g=-g),1-c>s.E?(u=Math.acos(c),f=Math.sin(u),d=Math.sin((1-r)*u)/f,p=Math.sin(r*u)/f):(d=1-r,p=r),e[0]=d*n+p*y,e[1]=d*i+p*b,e[2]=d*l+p*h,e[3]=d*a+p*g,e}function p(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function y(e,t){const o=t[0]+t[4]+t[8];let r;if(o>0)r=Math.sqrt(o+1),e[3]=.5*r,r=.5/r,e[0]=(t[5]-t[7])*r,e[1]=(t[6]-t[2])*r,e[2]=(t[1]-t[3])*r;else{let o=0;t[4]>t[0]&&(o=1),t[8]>t[3*o+o]&&(o=2);const n=(o+1)%3,i=(o+2)%3;r=Math.sqrt(t[3*o+o]-t[3*n+n]-t[3*i+i]+1),e[o]=.5*r,r=.5/r,e[3]=(t[3*n+i]-t[3*i+n])*r,e[n]=(t[3*n+o]+t[3*o+n])*r,e[i]=(t[3*i+o]+t[3*o+i])*r}return e}function b(e,t,o,r){const n=.5*Math.PI/180;t*=n,o*=n,r*=n;const i=Math.sin(t),s=Math.cos(t),l=Math.sin(o),a=Math.cos(o),u=Math.sin(r),c=Math.cos(r);return e[0]=i*a*c-s*l*u,e[1]=s*l*c+i*a*u,e[2]=s*a*u-i*l*c,e[3]=s*a*c+i*l*u,e}const h=a.c,g=a.s,w=a.a,m=f,C=a.b,T=a.d,v=a.l,A=a.e,I=A,O=a.f,S=O,M=a.n,U=a.g,E=a.h,R=(0,i.c)(),_=(0,i.f)(1,0,0),V=(0,i.f)(0,1,0),F=(0,n.a)(),N=(0,n.a)(),Z=(0,r.c)();Object.freeze(Object.defineProperty({__proto__:null,identity:function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e},setAxisAngle:u,getAxisAngle:c,multiply:f,rotateX:function(e,t,o){o*=.5;const r=t[0],n=t[1],i=t[2],s=t[3],l=Math.sin(o),a=Math.cos(o);return e[0]=r*a+s*l,e[1]=n*a+i*l,e[2]=i*a-n*l,e[3]=s*a-r*l,e},rotateY:function(e,t,o){o*=.5;const r=t[0],n=t[1],i=t[2],s=t[3],l=Math.sin(o),a=Math.cos(o);return e[0]=r*a-i*l,e[1]=n*a+s*l,e[2]=i*a+r*l,e[3]=s*a-n*l,e},rotateZ:function(e,t,o){o*=.5;const r=t[0],n=t[1],i=t[2],s=t[3],l=Math.sin(o),a=Math.cos(o);return e[0]=r*a+n*l,e[1]=n*a-r*l,e[2]=i*a+s*l,e[3]=s*a-i*l,e},calculateW:function(e,t){const o=t[0],r=t[1],n=t[2];return e[0]=o,e[1]=r,e[2]=n,e[3]=Math.sqrt(Math.abs(1-o*o-r*r-n*n)),e},slerp:d,random:function(e){const t=(0,s.R)(),o=(0,s.R)(),r=(0,s.R)(),n=Math.sqrt(1-t),i=Math.sqrt(t);return e[0]=n*Math.sin(2*Math.PI*o),e[1]=n*Math.cos(2*Math.PI*o),e[2]=i*Math.sin(2*Math.PI*r),e[3]=i*Math.cos(2*Math.PI*r),e},invert:function(e,t){const o=t[0],r=t[1],n=t[2],i=t[3],s=o*o+r*r+n*n+i*i,l=s?1/s:0;return e[0]=-o*l,e[1]=-r*l,e[2]=-n*l,e[3]=i*l,e},conjugate:p,fromMat3:y,fromEuler:b,str:function(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},copy:h,set:g,add:w,mul:m,scale:C,dot:T,lerp:v,length:A,len:I,squaredLength:O,sqrLen:S,normalize:M,exactEquals:U,equals:E,rotationTo:function(e,t,o){const r=(0,l.e)(t,o);return r<-.999999?((0,l.f)(R,_,t),(0,l.u)(R)<1e-6&&(0,l.f)(R,V,t),(0,l.n)(R,R),u(e,R,Math.PI),e):r>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):((0,l.f)(R,t,o),e[0]=R[0],e[1]=R[1],e[2]=R[2],e[3]=1+r,M(e,e))},sqlerp:function(e,t,o,r,n,i){return d(F,t,n,i),d(N,o,r,i),d(e,F,N,2*i*(1-i)),e},setAxes:function(e,t,o,r){const n=Z;return n[0]=o[0],n[3]=o[1],n[6]=o[2],n[1]=r[0],n[4]=r[1],n[7]=r[2],n[2]=-t[0],n[5]=-t[1],n[8]=-t[2],M(e,y(e,n))}},Symbol.toStringTag,{value:"Module"}))},61044:(e,t,o)=>{function r(){return[0,0,0,1]}function n(e){return[e[0],e[1],e[2],e[3]]}function i(e,t){return new Float64Array(e,t,4)}o.d(t,{I:()=>s,a:()=>r,b:()=>n,c:()=>i});const s=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,create:r,clone:n,fromValues:function(e,t,o,r){return[e,t,o,r]},createView:i,IDENTITY:s},Symbol.toStringTag,{value:"Module"}))},79912:(e,t,o)=>{function r(){return new Float32Array(3)}function n(e,t,o){const r=new Float32Array(3);return r[0]=e,r[1]=t,r[2]=o,r}function i(){return r()}function s(){return n(1,1,1)}function l(){return n(1,0,0)}function a(){return n(0,1,0)}function u(){return n(0,0,1)}o.d(t,{c:()=>r,f:()=>n});const c=i(),f=s(),d=l(),p=a(),y=u();Object.freeze(Object.defineProperty({__proto__:null,create:r,clone:function(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},fromValues:n,createView:function(e,t){return new Float32Array(e,t,3)},zeros:i,ones:s,unitX:l,unitY:a,unitZ:u,ZEROS:c,ONES:f,UNIT_X:d,UNIT_Y:p,UNIT_Z:y},Symbol.toStringTag,{value:"Module"}))},99723:(e,t,o)=>{o.d(t,{Z:()=>w});var r,n=o(36663),i=o(67134),s=o(81977),l=o(7283),a=o(79438),u=o(40266),c=o(46999),f=o(24794),d=o(30936),p=o(82064);let y=r=class extends p.wq{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new r({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:(0,i.d9)(this.color)})}};(0,n._)([(0,s.Cb)({type:String,json:{write:!0}})],y.prototype,"description",void 0),(0,n._)([(0,s.Cb)({type:String,json:{write:!0}})],y.prototype,"label",void 0),(0,n._)([(0,s.Cb)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],y.prototype,"minValue",void 0),(0,n._)([(0,s.Cb)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],y.prototype,"maxValue",void 0),(0,n._)([(0,s.Cb)({type:d.Z,json:{type:[l.z8],write:!0}})],y.prototype,"color",void 0),y=r=(0,n._)([(0,u.j)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],y);const b=y;var h;let g=h=class extends c.Z{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new h({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:(0,i.d9)(this.colorClassBreakInfos),legendOptions:(0,i.d9)(this.legendOptions)})}};(0,n._)([(0,a.J)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],g.prototype,"type",void 0),(0,n._)([(0,s.Cb)({json:{write:!0},type:String})],g.prototype,"field",void 0),(0,n._)([(0,s.Cb)({type:f.I,json:{write:!0}})],g.prototype,"legendOptions",void 0),(0,n._)([(0,s.Cb)({type:c.Z.fieldTransformTypeKebabDict.apiValues,json:{type:c.Z.fieldTransformTypeKebabDict.jsonValues,read:c.Z.fieldTransformTypeKebabDict.read,write:c.Z.fieldTransformTypeKebabDict.write}})],g.prototype,"fieldTransformType",void 0),(0,n._)([(0,s.Cb)({type:[b],json:{write:!0}})],g.prototype,"colorClassBreakInfos",void 0),g=h=(0,n._)([(0,u.j)("esri.renderers.PointCloudClassBreaksRenderer")],g);const w=g},46999:(e,t,o)=>{o.d(t,{Z:()=>I});var r,n=o(36663),i=o(25709),s=o(82064),l=o(67134),a=o(81977),u=(o(7283),o(40266));o(7753),o(39994);let c=r=class extends s.wq{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new r({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};(0,n._)([(0,a.Cb)({type:String,json:{write:!0}})],c.prototype,"field",void 0),(0,n._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],c.prototype,"minValue",void 0),(0,n._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],c.prototype,"maxValue",void 0),c=r=(0,n._)([(0,u.j)("esri.renderers.support.pointCloud.ColorModulation")],c);const f=c,d=new i.X({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let p=class extends s.wq{};(0,n._)([(0,a.Cb)({type:d.apiValues,readOnly:!0,nonNullable:!0,json:{type:d.jsonValues,read:!1,write:d.write}})],p.prototype,"type",void 0),p=(0,n._)([(0,u.j)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],p);const y=p;var b,h=o(79438);let g=b=class extends y{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new b({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};(0,n._)([(0,h.J)({pointCloudFixedSizeAlgorithm:"fixed-size"})],g.prototype,"type",void 0),(0,n._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],g.prototype,"size",void 0),(0,n._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],g.prototype,"useRealWorldSymbolSizes",void 0),g=b=(0,n._)([(0,u.j)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],g);const w=g;var m;let C=m=class extends y{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new m({scaleFactor:this.scaleFactor})}};(0,n._)([(0,h.J)({pointCloudSplatAlgorithm:"splat"})],C.prototype,"type",void 0),(0,n._)([(0,a.Cb)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],C.prototype,"scaleFactor",void 0),C=m=(0,n._)([(0,u.j)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],C);const T={key:"type",base:y,typeMap:{"fixed-size":w,splat:C}},v=(0,i.w)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let A=class extends s.wq{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:(0,l.d9)(this.pointSizeAlgorithm),colorModulation:(0,l.d9)(this.colorModulation),pointsPerInch:(0,l.d9)(this.pointsPerInch)}}};(0,n._)([(0,a.Cb)({type:v.apiValues,readOnly:!0,nonNullable:!0,json:{type:v.jsonValues,read:!1,write:v.write}})],A.prototype,"type",void 0),(0,n._)([(0,a.Cb)({types:T,json:{write:!0}})],A.prototype,"pointSizeAlgorithm",void 0),(0,n._)([(0,a.Cb)({type:f,json:{write:!0}})],A.prototype,"colorModulation",void 0),(0,n._)([(0,a.Cb)({json:{write:!0},nonNullable:!0,type:Number})],A.prototype,"pointsPerInch",void 0),A=(0,n._)([(0,u.j)("esri.renderers.PointCloudRenderer")],A),(A||(A={})).fieldTransformTypeKebabDict=new i.X({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});const I=A},5947:(e,t,o)=>{o.d(t,{Z:()=>p});var r,n=o(36663),i=o(67134),s=o(81977),l=(o(7283),o(79438)),a=o(40266),u=o(46999),c=o(24794),f=o(68844);let d=r=class extends u.Z{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new r({...this.cloneProperties(),field:(0,i.d9)(this.field),fieldTransformType:(0,i.d9)(this.fieldTransformType),stops:(0,i.d9)(this.stops),legendOptions:(0,i.d9)(this.legendOptions)})}};(0,n._)([(0,l.J)({pointCloudStretchRenderer:"point-cloud-stretch"})],d.prototype,"type",void 0),(0,n._)([(0,s.Cb)({json:{write:!0},type:String})],d.prototype,"field",void 0),(0,n._)([(0,s.Cb)({type:c.I,json:{write:!0}})],d.prototype,"legendOptions",void 0),(0,n._)([(0,s.Cb)({type:u.Z.fieldTransformTypeKebabDict.apiValues,json:{type:u.Z.fieldTransformTypeKebabDict.jsonValues,read:u.Z.fieldTransformTypeKebabDict.read,write:u.Z.fieldTransformTypeKebabDict.write}})],d.prototype,"fieldTransformType",void 0),(0,n._)([(0,s.Cb)({type:[f.Z],json:{write:!0}})],d.prototype,"stops",void 0),d=r=(0,n._)([(0,a.j)("esri.renderers.PointCloudStretchRenderer")],d);const p=d},60948:(e,t,o)=>{o.d(t,{Z:()=>w});var r,n=o(36663),i=o(67134),s=o(81977),l=o(7283),a=o(79438),u=o(40266),c=o(46999),f=o(24794),d=o(30936),p=o(82064);let y=r=class extends p.wq{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new r({description:this.description,label:this.label,values:(0,i.d9)(this.values),color:(0,i.d9)(this.color)})}};(0,n._)([(0,s.Cb)({type:String,json:{write:!0}})],y.prototype,"description",void 0),(0,n._)([(0,s.Cb)({type:String,json:{write:!0}})],y.prototype,"label",void 0),(0,n._)([(0,s.Cb)({type:[String],json:{write:!0}})],y.prototype,"values",void 0),(0,n._)([(0,s.Cb)({type:d.Z,json:{type:[l.z8],write:!0}})],y.prototype,"color",void 0),y=r=(0,n._)([(0,u.j)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],y);const b=y;var h;let g=h=class extends c.Z{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new h({...this.cloneProperties(),field:(0,i.d9)(this.field),fieldTransformType:(0,i.d9)(this.fieldTransformType),colorUniqueValueInfos:(0,i.d9)(this.colorUniqueValueInfos),legendOptions:(0,i.d9)(this.legendOptions)})}};(0,n._)([(0,a.J)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],g.prototype,"type",void 0),(0,n._)([(0,s.Cb)({json:{write:!0},type:String})],g.prototype,"field",void 0),(0,n._)([(0,s.Cb)({type:c.Z.fieldTransformTypeKebabDict.apiValues,json:{type:c.Z.fieldTransformTypeKebabDict.jsonValues,read:c.Z.fieldTransformTypeKebabDict.read,write:c.Z.fieldTransformTypeKebabDict.write}})],g.prototype,"fieldTransformType",void 0),(0,n._)([(0,s.Cb)({type:[b],json:{write:!0}})],g.prototype,"colorUniqueValueInfos",void 0),(0,n._)([(0,s.Cb)({type:f.I,json:{write:!0}})],g.prototype,"legendOptions",void 0),g=h=(0,n._)([(0,u.j)("esri.renderers.PointCloudUniqueValueRenderer")],g);const w=g},42849:(e,t,o)=>{o.r(t),o.d(t,{default:()=>D});var r=o(61681),n=o(86098),i=o(10663);function s(){const e=new Float32Array(4);return e[3]=1,e}Object.freeze(Object.defineProperty({__proto__:null,create:s,clone:function(e){const t=new Float32Array(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},fromValues:function(e,t,o,r){const n=new Float32Array(4);return n[0]=e,n[1]=t,n[2]=o,n[3]=r,n},createView:function(e,t){return new Float32Array(e,t,4)}},Symbol.toStringTag,{value:"Module"}));var l=o(6766),a=o(79912),u=o(92376),c=o(14685),f=o(99723),d=o(5947),p=o(60948),y=o(70375),b=o(67134),h=o(13802);const g=!0;function w(e,t,o){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,o+0,10)),version:t.getUint16(o+10,g),checksum:t.getUint32(o+12,g)}}function m(e,t,o){const r=[];t=C(e,t,r);const n=[];for(let i=0;i<r.length;i++){n.length=0,t=C(e,t,n);for(let e=0;e<n.length;e++)o.push(n[e]+r[i])}return t}function C(e,t,o){const r=new DataView(e,t),n=r.getUint8(0),i=31&n,s=!!(32&n),l=(192&n)>>6;let a=0;if(0===l)a=r.getUint32(1,g),t+=5;else if(1===l)a=r.getUint16(1,g),t+=3;else{if(2!==l)throw new y.Z("lepcc-decode-error","Bad count type");a=r.getUint8(1),t+=2}if(s)throw new y.Z("lepcc-decode-error","LUT not implemented");const u=Math.ceil(a*i/8),c=new Uint8Array(e,t,u);let f=0,d=0,p=0;const b=-1>>>32-i;for(let e=0;e<a;e++){for(;d<i;)f|=c[p]<<d,d+=8,p+=1;o[e]=f&b,f>>>=i,d-=i,d+i>32&&(f|=c[p-1]>>8-d)}return t+p}var T=o(21414);const v=h.Z.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function A(e,t,o){let r="",n=0;for(;n<o;){const i=e[t+n];if(i<128)r+=String.fromCharCode(i),n++;else if(i>=192&&i<224){if(n+1>=o)throw new y.Z("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const s=(31&i)<<6|63&e[t+n+1];r+=String.fromCharCode(s),n+=2}else if(i>=224&&i<240){if(n+2>=o)throw new y.Z("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const s=(15&i)<<12|(63&e[t+n+1])<<6|63&e[t+n+2];r+=String.fromCharCode(s),n+=3}else{if(!(i>=240&&i<248))throw new y.Z("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(n+3>=o)throw new y.Z("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const s=(7&i)<<18|(63&e[t+n+1])<<12|(63&e[t+n+2])<<6|63&e[t+n+3];if(s>=65536){const e=55296+(s-65536>>10),t=56320+(1023&s);r+=String.fromCharCode(e,t)}else r+=String.fromCharCode(s);n+=4}}}return r}function I(e,t){const o={byteOffset:0,byteCount:0,fields:Object.create(null)};let r=0;for(let n=0;n<t.length;n++){const i=t[n],s=i.valueType||i.type,l=R[s];o.fields[i.property]=l(e,r),r+=E[s].BYTES_PER_ELEMENT}return o.byteCount=r,o}function O(e,t){return new(0,E[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function S(e,t,o){if(t!==e&&v.error(`Invalid ${o} buffer size\n expected: ${e}, actual: ${t})`),t<e)throw new y.Z("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}const M={position:T.T.POSITION,normal:T.T.NORMAL,color:T.T.COLOR,uv0:T.T.UV0,region:T.T.UVREGION};function U(e,t,o){if("lepcc-rgb"===e.encoding)return function(e){const t=new DataView(e,0);let o=0;const{identifier:r,version:n}=w(e,t,o);if(o+=16,"ClusterRGB"!==r)throw new y.Z("lepcc-decode-error","Bad identifier");if(n>1)throw new y.Z("lepcc-decode-error","Unknown version");const i=function(e,t){return{sizeLo:e.getUint32(t+0,g),sizeHi:e.getUint32(t+4,g),count:e.getUint32(t+8,g),colorMapCount:e.getUint16(t+12,g),lookupMethod:e.getUint8(t+14),compressionMethod:e.getUint8(t+15)}}(t,o);if(o+=16,i.sizeHi*2**32+i.sizeLo!==e.byteLength)throw new y.Z("lepcc-decode-error","Bad size");if((2===i.lookupMethod||1===i.lookupMethod)&&0===i.compressionMethod){if(3*i.colorMapCount+i.count+o!==e.byteLength||i.colorMapCount>256)throw new y.Z("lepcc-decode-error","Bad count");const t=new Uint8Array(e,o,3*i.colorMapCount),r=new Uint8Array(e,o+3*i.colorMapCount,i.count),n=new Uint8Array(3*i.count);for(let e=0;e<i.count;e++){const o=r[e];n[3*e]=t[3*o],n[3*e+1]=t[3*o+1],n[3*e+2]=t[3*o+2]}return n}if(0===i.lookupMethod&&0===i.compressionMethod){if(3*i.count+o!==e.byteLength||0!==i.colorMapCount)throw new y.Z("lepcc-decode-error","Bad count");return new Uint8Array(e,o).slice()}if(i.lookupMethod<=2&&1===i.compressionMethod){if(o+3!==e.byteLength||1!==i.colorMapCount)throw new y.Z("lepcc-decode-error","Bad count");const r=t.getUint8(o),n=t.getUint8(o+1),s=t.getUint8(o+2),l=new Uint8Array(3*i.count);for(let e=0;e<i.count;e++)l[3*e]=r,l[3*e+1]=n,l[3*e+2]=s;return l}throw new y.Z("lepcc-decode-error","Bad method "+i.lookupMethod+","+i.compressionMethod)}(t);if("lepcc-intensity"===e.encoding)return function(e){const t=new DataView(e,0);let o=0;const{identifier:r,version:n}=w(e,t,o);if(o+=16,"Intensity "!==r)throw new y.Z("lepcc-decode-error","Bad identifier");if(n>1)throw new y.Z("lepcc-decode-error","Unknown version");const i=function(e,t){return{sizeLo:e.getUint32(t+0,g),sizeHi:e.getUint32(t+4,g),count:e.getUint32(t+8,g),scaleFactor:e.getUint16(t+12,g),bitsPerPoint:e.getUint8(t+14),reserved:e.getUint8(t+15)}}(t,o);if(o+=16,i.sizeHi*2**32+i.sizeLo!==e.byteLength)throw new y.Z("lepcc-decode-error","Bad size");const s=new Uint16Array(i.count);if(8===i.bitsPerPoint){if(i.count+o!==e.byteLength)throw new y.Z("lepcc-decode-error","Bad size");const t=new Uint8Array(e,o,i.count);for(let e=0;e<i.count;e++)s[e]=t[e]*i.scaleFactor}else if(16===i.bitsPerPoint){if(2*i.count+o!==e.byteLength)throw new y.Z("lepcc-decode-error","Bad size");const t=new Uint16Array(e,o,i.count);for(let e=0;e<i.count;e++)s[e]=t[e]*i.scaleFactor}else{const t=[];if(C(e,o,t)!==e.byteLength)throw new y.Z("lepcc-decode-error","Bad size");for(let e=0;e<i.count;e++)s[e]=t[e]*i.scaleFactor}return s}(t);if(null!=e.encoding&&""!==e.encoding)throw new y.Z("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(v.warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(v.warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");const r=function(e,t,o){const r=null!=t.header?I(e,t.header):{byteOffset:0,byteCount:0,fields:{count:o}},n={header:r,byteOffset:r.byteCount,byteCount:0,entries:Object.create(null)};let i=r.byteCount;for(let e=0;e<t.ordering.length;e++){const o=t.ordering[e],s=(0,b.d9)(t[o]);if(s.count=r.fields.count,"String"===s.valueType){if(s.byteOffset=i,s.byteCount=r.fields[o+"ByteCount"],"UTF-8"!==s.encoding)throw new y.Z("unsupported-encoding","Unsupported String encoding.",{encoding:s.encoding})}else{if(!_(s.valueType))throw new y.Z("unsupported-value-type","Unsupported binary valueType",{valueType:s.valueType});{const e=V(s.valueType);i+=i%e!=0?e-i%e:0,s.byteOffset=i,s.byteCount=e*s.valuesPerElement*s.count}}i+=s.byteCount,n.entries[o]=s}return n.byteCount=i-n.byteOffset,n}(t,e,o);S(r.byteOffset+r.byteCount,t.byteLength,"attribute");const n=r.entries.attributeValues||r.entries.objectIds;if(n){if("String"===n.valueType){const e=r.entries.attributeByteCounts,o=O(t,e),i=function(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}(t,n);return function(e,t,o){const r=[];let n,i,s=0;for(i=0;i<e;i+=1){if(n=t[i],n>0){if(r.push(A(o,s,n-1)),0!==o[s+n-1])throw new y.Z("string-array-error","Invalid string array: missing null termination.")}else r.push(null);s+=n}return r}(e.count,o,i)}return O(t,n)}throw new y.Z("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const E={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},R={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function _(e){return E.hasOwnProperty(e)}function V(e){return _(e)?E[e].BYTES_PER_ELEMENT:0}function F(e,t){if(null==e.encoding||""===e.encoding){const o=function(e,t){const o=I(e,t&&t.header);let r=o.byteCount;const n={isDraco:!1,header:o,byteOffset:o.byteCount,byteCount:0,vertexAttributes:{}},i=o.fields,s=null!=i.vertexCount?i.vertexCount:i.count;for(const e of t.ordering){if(!t.vertexAttributes[e])continue;const o={...t.vertexAttributes[e],byteOffset:r,count:s},i=M[e]?M[e]:"_"+e;n.vertexAttributes[i]=o,r+=V(o.valueType)*o.valuesPerElement*s}const l=i.faceCount;if(t.faces&&l){n.faces={};for(const e of t.ordering){if(!t.faces[e])continue;const o={...t.faces[e],byteOffset:r,count:l};n.faces[e]=o,r+=V(o.valueType)*o.valuesPerElement*l}}const a=i.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&a){n.featureAttributes={};for(const e of t.featureAttributeOrder){if(!t.featureAttributes[e])continue;const o={...t.featureAttributes[e],byteOffset:r,count:a};n.featureAttributes[e]=o,r+=("UInt64"===o.valueType?8:V(o.valueType))*o.valuesPerElement*a}}return S(r,e.byteLength,"geometry"),n.byteCount=r-n.byteOffset,n}(t,e);if((0,r.Wi)(o.vertexAttributes.position))return;const n=O(t,o.vertexAttributes.position),i=o.header.fields,s=[i.offsetX,i.offsetY,i.offsetZ],l=[i.scaleX,i.scaleY,i.scaleZ],a=n.length/3,u=new Float64Array(3*a);for(let e=0;e<a;e++)u[3*e]=n[3*e]*l[0]+s[0],u[3*e+1]=n[3*e+1]*l[1]+s[1],u[3*e+2]=n[3*e+2]*l[2]+s[2];return u}if("lepcc-xyz"===e.encoding)return function(e){const t=new DataView(e,0);let o=0;const{identifier:r,version:n}=w(e,t,o);if(o+=16,"LEPCC     "!==r)throw new y.Z("lepcc-decode-error","Bad identifier");if(n>1)throw new y.Z("lepcc-decode-error","Unknown version");const i=function(e,t){return{sizeLo:e.getUint32(t+0,g),sizeHi:e.getUint32(t+4,g),minX:e.getFloat64(t+8,g),minY:e.getFloat64(t+16,g),minZ:e.getFloat64(t+24,g),maxX:e.getFloat64(t+32,g),maxY:e.getFloat64(t+40,g),maxZ:e.getFloat64(t+48,g),errorX:e.getFloat64(t+56,g),errorY:e.getFloat64(t+64,g),errorZ:e.getFloat64(t+72,g),count:e.getUint32(t+80,g),reserved:e.getUint32(t+84,g)}}(t,o);if(o+=88,i.sizeHi*2**32+i.sizeLo!==e.byteLength)throw new y.Z("lepcc-decode-error","Bad size");const s=new Float64Array(3*i.count),l=[],a=[],u=[],c=[];if(o=m(e,o,l),o=m(e,o,a),o=m(e,o,u),o=m(e,o,c),o!==e.byteLength)throw new y.Z("lepcc-decode-error","Bad length");let f=0,d=0;for(let e=0;e<l.length;e++){d+=l[e];let t=0;for(let o=0;o<a[e];o++){t+=u[f];const e=c[f];s[3*f]=Math.min(i.maxX,i.minX+2*i.errorX*t),s[3*f+1]=Math.min(i.maxY,i.minY+2*i.errorY*d),s[3*f+2]=Math.min(i.maxZ,i.minZ+2*i.errorZ*e),f++}}return{errorX:i.errorX,errorY:i.errorY,errorZ:i.errorZ,result:s}}(t).result}function N(e,t,o){return(0,r.pC)(e)&&e.attributeInfo.useElevation?function(e,t){const o=new Float64Array(t);for(let r=0;r<t;r++)o[r]=e[3*r+2];return o}(t,o):(0,r.pC)(e)?U(e.attributeInfo.storageInfo,e.buffer,o):null}function Z(e){return null==e||"none"===e?null:"low-four-bit"===e?e=>15&e:"high-four-bit"===e?e=>(240&e)>>4:"absolute-value"===e?e=>Math.abs(e):"modulo-ten"===e?e=>e%10:null}function P(e){let t=0;for(const o of e||[])t|=1<<o;return t}class j{transform(e){const t=this._transform(e),o=[t.points.buffer,t.rgb.buffer];(0,r.pC)(t.pointIdFilterMap)&&o.push(t.pointIdFilterMap.buffer);for(const e of t.attributes)"buffer"in e.values&&(0,n.eP)(e.values.buffer)&&e.values.buffer!==t.rgb.buffer&&o.push(e.values.buffer);return Promise.resolve({result:t,transferList:o})}_transform(e){const t=F(e.schema,e.geometryBuffer);let o=t.length/3,n=null;const i=[],s=N(e.primaryAttributeData,t,o);(0,r.pC)(e.primaryAttributeData)&&s&&i.push({attributeInfo:e.primaryAttributeData.attributeInfo,values:s});const l=N(e.modulationAttributeData,t,o);(0,r.pC)(e.modulationAttributeData)&&l&&i.push({attributeInfo:e.modulationAttributeData.attributeInfo,values:l});let a=function(e,t,o,r){const{rendererJSON:n,isRGBRenderer:i}=e;let s=null,l=null;if(t&&i)s=t;else if(t&&"pointCloudUniqueValueRenderer"===n.type){l=p.Z.fromJSON(n);const e=l.colorUniqueValueInfos;s=new Uint8Array(3*r);const o=Z(l.fieldTransformType);for(let n=0;n<r;n++){const r=(o?o(t[n]):t[n])+"";for(let t=0;t<e.length;t++)if(e[t].values.includes(r)){s[3*n]=e[t].color.r,s[3*n+1]=e[t].color.g,s[3*n+2]=e[t].color.b;break}}}else if(t&&"pointCloudStretchRenderer"===n.type){l=d.Z.fromJSON(n);const e=l.stops;s=new Uint8Array(3*r);const o=Z(l.fieldTransformType);for(let n=0;n<r;n++){const r=o?o(t[n]):t[n],i=e.length-1;if(r<e[0].value)s[3*n]=e[0].color.r,s[3*n+1]=e[0].color.g,s[3*n+2]=e[0].color.b;else if(r>=e[i].value)s[3*n]=e[i].color.r,s[3*n+1]=e[i].color.g,s[3*n+2]=e[i].color.b;else for(let t=1;t<e.length;t++)if(r<e[t].value){const o=(r-e[t-1].value)/(e[t].value-e[t-1].value);s[3*n]=e[t].color.r*o+e[t-1].color.r*(1-o),s[3*n+1]=e[t].color.g*o+e[t-1].color.g*(1-o),s[3*n+2]=e[t].color.b*o+e[t-1].color.b*(1-o);break}}}else if(t&&"pointCloudClassBreaksRenderer"===n.type){l=f.Z.fromJSON(n);const e=l.colorClassBreakInfos;s=new Uint8Array(3*r);const o=Z(l.fieldTransformType);for(let n=0;n<r;n++){const r=o?o(t[n]):t[n];for(let t=0;t<e.length;t++)if(r>=e[t].minValue&&r<=e[t].maxValue){s[3*n]=e[t].color.r,s[3*n+1]=e[t].color.g,s[3*n+2]=e[t].color.b;break}}}else{s=new Uint8Array(3*r);for(let e=0;e<s.length;e++)s[e]=255}if(o&&l&&l.colorModulation){const e=l.colorModulation.minValue,t=l.colorModulation.maxValue,n=.3;for(let i=0;i<r;i++){const r=o[i],l=r>=t?1:r<=e?n:n+(1-n)*(r-e)/(t-e);s[3*i]=l*s[3*i],s[3*i+1]=l*s[3*i+1],s[3*i+2]=l*s[3*i+2]}}return s}(e.rendererInfo,s,l,o);if(e.filterInfo&&e.filterInfo.length>0&&(0,r.pC)(e.filterAttributesData)){const r=e.filterAttributesData.map((e=>{const r=N(e,t,o),n={attributeInfo:e.attributeInfo,values:r};return i.push(n),n}));n=new Uint32Array(o),o=function(e,t,o,r,n){const i=e.length/3;let s=0;for(let l=0;l<i;l++){let i=!0;for(let e=0;e<r.length&&i;e++){const{filterJSON:t}=r[e],o=n[e].values[l];switch(t.type){case"pointCloudValueFilter":{const e="exclude"===t.mode;t.values.includes(o)===e&&(i=!1);break}case"pointCloudBitfieldFilter":{const e=P(t.requiredSetBits),r=P(t.requiredClearBits);(o&e)===e&&0==(o&r)||(i=!1);break}case"pointCloudReturnFilter":{const e=15&o,r=o>>>4&15,n=r>1,s=1===e,l=e===r;let a=!1;for(const e of t.includedReturns)if("last"===e&&l||"firstOfMany"===e&&s&&n||"lastOfMany"===e&&l&&n||"single"===e&&!n){a=!0;break}a||(i=!1);break}}}i&&(o[s]=l,e[3*s]=e[3*l],e[3*s+1]=e[3*l+1],e[3*s+2]=e[3*l+2],t[3*s]=t[3*l],t[3*s+1]=t[3*l+1],t[3*s+2]=t[3*l+2],s++)}return s}(t,a,n,e.filterInfo,r)}for(const r of e.userAttributesData){const e=N(r,t,o);i.push({attributeInfo:r.attributeInfo,values:e})}3*o<a.length&&(a=new Uint8Array(a.buffer.slice(0,3*o))),this._applyElevationOffsetInPlace(t,o,e.elevationOffset);const u=this._transformCoordinates(t,o,e.obb,c.Z.fromJSON(e.inSR),c.Z.fromJSON(e.outSR));return{obb:e.obb,points:u,rgb:a,attributes:i,pointIdFilterMap:n}}_transformCoordinates(e,t,o,r,n){if(!(0,u.CM)(e,r,0,e,n,0,t))throw Error("Can't reproject");const s=(0,a.f)(o.center[0],o.center[1],o.center[2]),c=(0,a.c)(),f=(0,a.c)();(0,i.c)(z,o.quaternion);const d=new Float32Array(3*t);for(let r=0;r<t;r++)c[0]=e[3*r]-s[0],c[1]=e[3*r+1]-s[1],c[2]=e[3*r+2]-s[2],(0,l.q)(f,c,z),o.halfSize[0]=Math.max(o.halfSize[0],Math.abs(f[0])),o.halfSize[1]=Math.max(o.halfSize[1],Math.abs(f[1])),o.halfSize[2]=Math.max(o.halfSize[2],Math.abs(f[2])),d[3*r]=c[0],d[3*r+1]=c[1],d[3*r+2]=c[2];return d}_applyElevationOffsetInPlace(e,t,o){if(0!==o)for(let r=0;r<t;r++)e[3*r+2]+=o}}const z=s();function D(){return new j}},21414:(e,t,o)=>{var r;o.d(t,{T:()=>r}),function(e){e.POSITION="position",e.NORMAL="normal",e.UV0="uv0",e.AUXPOS1="auxpos1",e.AUXPOS2="auxpos2",e.MAPPOS="mapPos",e.COLOR="color",e.SYMBOLCOLOR="symbolColor",e.SIZE="size",e.TANGENT="tangent",e.OFFSET="offset",e.SUBDIVISIONFACTOR="subdivisionFactor",e.COLORFEATUREATTRIBUTE="colorFeatureAttribute",e.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",e.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",e.DISTANCETOSTART="distanceToStart",e.UVMAPSPACE="uvMapSpace",e.BOUNDINGRECT="boundingRect",e.UVREGION="uvRegion",e.NORMALCOMPRESSED="normalCompressed",e.PROFILERIGHT="profileRight",e.PROFILEUP="profileUp",e.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",e.FEATUREVALUE="featureValue",e.MODELORIGINHI="modelOriginHi",e.MODELORIGINLO="modelOriginLo",e.MODEL="model",e.MODELNORMAL="modelNormal",e.INSTANCECOLOR="instanceColor",e.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",e.LOCALTRANSFORM="localTransform",e.GLOBALTRANSFORM="globalTransform",e.BOUNDINGSPHERE="boundingSphere",e.MODELORIGIN="modelOrigin",e.MODELSCALEFACTORS="modelScaleFactors",e.FEATUREATTRIBUTE="featureAttribute",e.STATE="state",e.LODLEVEL="lodLevel",e.POSITION0="position0",e.POSITION1="position1",e.NORMALA="normalA",e.NORMALB="normalB",e.COMPONENTINDEX="componentIndex",e.VARIANTOFFSET="variantOffset",e.VARIANTSTROKE="variantStroke",e.VARIANTEXTENSION="variantExtension",e.U8PADDING="u8padding",e.U16PADDING="u16padding",e.SIDENESS="sideness",e.START="start",e.END="end",e.UP="up",e.EXTRUDE="extrude"}(r||(r={}))}}]);