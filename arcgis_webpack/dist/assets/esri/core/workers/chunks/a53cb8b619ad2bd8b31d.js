"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[8061],{22303:(e,t,r)=>{r.d(t,{Z:()=>f});var n,i,s=r(35270),o=r(22021),a=r(70586),l=r(75215);function u(e){return(0,o.uZ)((0,l.vU)(e),0,255)}function c(e,t,r){return e=Number(e),isNaN(e)?r:e<t?t:e>r?r:e}class m{constructor(e){this.r=255,this.g=255,this.b=255,this.a=1,e&&this.setColor(e)}static blendColors(e,t,r,n=new m){return n.r=Math.round(e.r+(t.r-e.r)*r),n.g=Math.round(e.g+(t.g-e.g)*r),n.b=Math.round(e.b+(t.b-e.b)*r),n.a=e.a+(t.a-e.a)*r,n._sanitize()}static fromRgb(e,t){const r=e.toLowerCase().match(/^(rgba?|hsla?)\(([\s\.\-,%0-9]+)\)/);if(r){const e=r[2].split(/\s*,\s*/),n=r[1];if("rgb"===n&&3===e.length||"rgba"===n&&4===e.length){const r=e[0];if("%"===r.charAt(r.length-1)){const r=e.map((e=>2.56*parseFloat(e)));return 4===e.length&&(r[3]=parseFloat(e[3])),m.fromArray(r,t)}return m.fromArray(e.map((e=>parseFloat(e))),t)}if("hsl"===n&&3===e.length||"hsla"===n&&4===e.length)return m.fromArray((0,s.B7)(parseFloat(e[0]),parseFloat(e[1])/100,parseFloat(e[2])/100,parseFloat(e[3])),t)}return null}static fromHex(e,t=new m){if(4!==e.length&&7!==e.length||"#"!==e[0])return null;const r=4===e.length?4:8,n=(1<<r)-1;let i=Number("0x"+e.substr(1));return isNaN(i)?null:(["b","g","r"].forEach((e=>{const s=i&n;i>>=r,t[e]=4===r?17*s:s})),t.a=1,t)}static fromArray(e,t=new m){return t._set(Number(e[0]),Number(e[1]),Number(e[2]),Number(e[3])),isNaN(t.a)&&(t.a=1),t._sanitize()}static fromString(e,t){const r=(0,s.St)(e)?(0,s.h$)(e):null;return r&&m.fromArray(r,t)||m.fromRgb(e,t)||m.fromHex(e,t)}static fromJSON(e){return e&&new m([e[0],e[1],e[2],e[3]/255])}static toUnitRGB(e){return(0,a.pC)(e)?[e.r/255,e.g/255,e.b/255]:null}static toUnitRGBA(e){return(0,a.pC)(e)?[e.r/255,e.g/255,e.b/255,null!=e.a?e.a:1]:null}get isBright(){return.299*this.r+.587*this.g+.114*this.b>=127}setColor(e){return"string"==typeof e?m.fromString(e,this):Array.isArray(e)?m.fromArray(e,this):(this._set(e.r??0,e.g??0,e.b??0,e.a??1),e instanceof m||this._sanitize()),this}toRgb(){return[this.r,this.g,this.b]}toRgba(){return[this.r,this.g,this.b,this.a]}toHex(){const e=this.r.toString(16),t=this.g.toString(16),r=this.b.toString(16);return`#${e.length<2?"0"+e:e}${t.length<2?"0"+t:t}${r.length<2?"0"+r:r}`}toCss(e=!1){const t=this.r+", "+this.g+", "+this.b;return e?`rgba(${t}, ${this.a})`:`rgb(${t})`}toString(){return this.toCss(!0)}toJSON(){return this.toArray()}toArray(e=m.AlphaMode.ALWAYS){const t=u(this.r),r=u(this.g),n=u(this.b);return e===m.AlphaMode.ALWAYS||1!==this.a?[t,r,n,u(255*this.a)]:[t,r,n]}clone(){return new m(this.toRgba())}hash(){return this.r<<24|this.g<<16|this.b<<8|255*this.a}equals(e){return(0,a.pC)(e)&&e.r===this.r&&e.g===this.g&&e.b===this.b&&e.a===this.a}_sanitize(){return this.r=Math.round(c(this.r,0,255)),this.g=Math.round(c(this.g,0,255)),this.b=Math.round(c(this.b,0,255)),this.a=c(this.a,0,1),this}_set(e,t,r,n){this.r=e,this.g=t,this.b=r,this.a=n}}m.prototype.declaredClass="esri.Color",(i=(n=m||(m={})).AlphaMode||(n.AlphaMode={}))[i.ALWAYS=0]="ALWAYS",i[i.UNLESS_OPAQUE=1]="UNLESS_OPAQUE";const f=m},35270:(e,t,r)=>{r.d(t,{B7:()=>l,St:()=>i,VL:()=>o,h$:()=>s,rW:()=>u});const n={transparent:[0,0,0,0],black:[0,0,0,1],silver:[192,192,192,1],gray:[128,128,128,1],white:[255,255,255,1],maroon:[128,0,0,1],red:[255,0,0,1],purple:[128,0,128,1],fuchsia:[255,0,255,1],green:[0,128,0,1],lime:[0,255,0,1],olive:[128,128,0,1],yellow:[255,255,0,1],navy:[0,0,128,1],blue:[0,0,255,1],teal:[0,128,128,1],aqua:[0,255,255,1],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],blanchedalmond:[255,235,205,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],oldlace:[253,245,230,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],rebeccapurple:[102,51,153,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],whitesmoke:[245,245,245,1],yellowgreen:[154,205,50,1]};function i(e){return n[e]||n[e.toLowerCase()]}function s(e){return n[e]??n[e.toLowerCase()]}function o(e){return[...s(e)]}function a(e,t,r){r<0&&++r,r>1&&--r;const n=6*r;return n<1?e+(t-e)*n:2*r<1?t:3*r<2?e+(t-e)*(2/3-r)*6:e}function l(e,t,r,n=1){const i=(e%360+360)%360/360,s=r<=.5?r*(t+1):r+t-r*t,o=2*r-s;return[Math.round(255*a(o,s,i+1/3)),Math.round(255*a(o,s,i)),Math.round(255*a(o,s,i-1/3)),n]}function u(e){const t=e.length>5,r=t?8:4,n=(1<<r)-1,i=t?1:17,s=t?9===e.length:5===e.length;let o=Number("0x"+e.substr(1));if(isNaN(o))return null;const a=[0,0,0,1];let l;return s&&(l=o&n,o>>=r,a[3]=i*l/255),l=o&n,o>>=r,a[2]=i*l,l=o&n,o>>=r,a[1]=i*l,l=o&n,o>>=r,a[0]=i*l,a}},36030:(e,t,r)=>{r.d(t,{J:()=>s});var n=r(35454),i=r(5600);function s(e,t={}){const r=e instanceof n.X?e:new n.X(e,t),s={type:t?.ignoreUnknown??1?r.apiValues:String,json:{type:r.jsonValues,read:!t?.readOnly&&{reader:r.read},write:{writer:r.write}}};return void 0!==t?.readOnly&&(s.readOnly=!!t.readOnly),void 0!==t?.default&&(s.json.default=t.default),void 0!==t?.name&&(s.json.name=t.name),(0,i.Cb)(s)}},10661:(e,t,r)=>{r.d(t,{s:()=>i});var n=r(39020);class i{constructor(){this._observers=[]}observe(e){return this._observers.includes(e)||this._observers.push(e),new n.X(this._observers,e)}notify(){const e=this._observers.slice();for(let t=0;t<e.length;++t){const r=e[t];r.onInvalidated(),r.onCommitted()}}}},67900:(e,t,r)=>{r.d(t,{$C:()=>G,En:()=>U,Jo:()=>J,_R:()=>N,c9:()=>x,cM:()=>O,gV:()=>C,hd:()=>c,qE:()=>q,ty:()=>B}),r(80442);var n=r(35454),i=r(70586),s=r(24678),o=r(82971),a=r(68441),l=r(8744),u=r(58116);const c=39.37,m=a.sv.radius*Math.PI/200,f=/UNIT\[([^\]]+)\]\]$/i,h=u.Z,d=/UNIT\[([^\]]+)\]/i,g=new Set([4261,4305,4807,4810,4811,4812,4816,4819,4821,4901,4902,37225,104139,104140]),y=(0,n.w)()({meter:"meters",foot:"feet",foot_us:"us-feet",foot_clarke:"clarke-feet",yard_clarke:"clarke-yards",link_clarke:"clarke-links",yard_sears:"sears-yards",foot_sears:"sears-feet",chain_sears:"sears-chains",chain_benoit_1895_b:"benoit-1895-b-chains",yard_indian:"indian-yards",yard_indian_1937:"indian-1937-yards",foot_gold_coast:"gold-coast-feet",chain_sears_1922_truncated:"sears-1922-truncated-chains","50_kilometers":"50-kilometers","150_kilometers":"150-kilometers"}),p=e=>e*e,b=e=>e*e*e,S={length:{baseUnit:"meters",units:{millimeters:{inBaseUnits:.001},centimeters:{inBaseUnits:.01},decimeters:{inBaseUnits:.1},meters:{inBaseUnits:1},kilometers:{inBaseUnits:1e3},inches:{inBaseUnits:.0254},feet:{inBaseUnits:.3048},yards:{inBaseUnits:.9144},miles:{inBaseUnits:1609.344},"nautical-miles":{inBaseUnits:1852},"us-feet":{inBaseUnits:1200/3937}}},area:{baseUnit:"square-meters",units:{"square-millimeters":{inBaseUnits:p(.001)},"square-centimeters":{inBaseUnits:p(.01)},"square-decimeters":{inBaseUnits:p(.1)},"square-meters":{inBaseUnits:1},"square-kilometers":{inBaseUnits:p(1e3)},"square-inches":{inBaseUnits:p(.0254)},"square-feet":{inBaseUnits:p(.3048)},"square-yards":{inBaseUnits:p(.9144)},"square-miles":{inBaseUnits:p(1609.344)},"square-us-feet":{inBaseUnits:p(1200/3937)},acres:{inBaseUnits:.0015625*p(1609.344)},ares:{inBaseUnits:100},hectares:{inBaseUnits:1e4}}},volume:{baseUnit:"liters",units:{liters:{inBaseUnits:1},"cubic-millimeters":{inBaseUnits:1e3*b(.001)},"cubic-centimeters":{inBaseUnits:1e3*b(.01)},"cubic-decimeters":{inBaseUnits:1e3*b(.1)},"cubic-meters":{inBaseUnits:1e3},"cubic-kilometers":{inBaseUnits:1e3*b(1e3)},"cubic-inches":{inBaseUnits:1e3*b(.0254)},"cubic-feet":{inBaseUnits:1e3*b(.3048)},"cubic-yards":{inBaseUnits:1e3*b(.9144)},"cubic-miles":{inBaseUnits:1e3*b(1609.344)}}},angle:{baseUnit:"radians",units:{radians:{inBaseUnits:1},degrees:{inBaseUnits:Math.PI/180}}}},k=(()=>{const e={};for(const t in S)for(const r in S[t].units)e[r]=t;return e})();function w(e){const t=k[e];if(!t)throw new Error("unknown type");return t}function v(e,t=null){return t=t||w(e),S[t].baseUnit===e}function U(e,t,r){if(t===r)return e;const n=w(t);if(n!==w(r))throw new Error("incompatible units");const i=v(t,n)?e:function(e,t,r){return e*S[r].units[t].inBaseUnits}(e,t,n);return v(r,n)?i:function(e,t,r){return e/S[r].units[t].inBaseUnits}(i,r,n)}function B(e,t,r){return U(e,t,"meters")/(r*Math.PI/180)}function G(e){return y.fromJSON(e.toLowerCase())||null}function N(e){if(e&&"object"==typeof e&&!(0,l.N$)(e))return 1;const t=x(e);return t>1e5?1:t}function O(e){return x(e)>=(e instanceof o.Z?(0,s.Iu)(e).metersPerDegree:1e5)?"meters":q(e)}function x(e,t=a.sv.metersPerDegree){return(0,i.Pt)(function(e,t=!1){let r,n,i=null;if(null!=e&&("object"==typeof e?(r=e.wkid,n=e.wkt):"number"==typeof e?r=e:"string"==typeof e&&(n=e)),r){if((0,l.o$)(r))return a.yr.metersPerDegree;if((0,l.ME)(r))return a.Z1.metersPerDegree;i=h.values[h[r]],!i&&t&&g.has(r)&&(i=m)}else n&&(Z(n)?i=M(f.exec(n),i):A(n)&&(i=M(d.exec(n),i)));return i}(e,!0),t)}function M(e,t){return e&&e[1]?P(e[1]):t}function P(e){return parseFloat(e.split(",")[1])}function q(e){let t,r,n=null;if(null!=e&&("object"==typeof e?(t=e.wkid,r=e.wkt):"number"==typeof e?t=e:"string"==typeof e&&(r=e)),t)n=h.units[h[t]];else if(r){const e=Z(r)?f:A(r)?d:null;if(e){const t=e.exec(r);t&&t[1]&&(n=function(e){const t=/[\\"\\']{1}([^\\"\\']+)/.exec(e);let r=t&&t[1];if(!r||!h.units.includes(r)){const t=P(e);r=null;const n=h.values;for(let e=0;e<n.length;++e)if(Math.abs(t-n[e])<1e-7){r=h.units[e];break}}return r}(t[1]))}}return(0,i.pC)(n)?G(n):null}function A(e){return/^GEOCCS/i.test(e)}function Z(e){return/^PROJCS/i.test(e)}new Map([["meters","square-meters"],["feet","square-feet"],["us-feet","square-us-feet"]]);const E={esriAcres:"acres",esriAres:"ares",esriHectares:"hectares",esriSquareCentimeters:"square-centimeters",esriSquareDecimeters:"square-decimeters",esriSquareFeet:"square-feet",esriSquareInches:"square-inches",esriSquareKilometers:"square-kilometers",esriSquareMeters:"square-meters",esriSquareMiles:"square-miles",esriSquareMillimeters:"square-millimeters",esriSquareUsFeet:"square-us-feet",esriSquareYards:"square-yards"},_={esriCentimeters:"centimeters",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriYards:"yards"},C=(0,n.w)()(E),J=(0,n.w)()(_);(0,n.w)()({...E,..._})},66577:(e,t,r)=>{r.d(t,{qM:()=>c});var n=r(75215),i=r(6570),s=r(9361),o=r(65091),a=r(13473),l=r(38913),u=r(58901);r(82971),r(86973),r(33955);const c={base:s.Z,key:"type",typeMap:{extent:i.Z,multipoint:o.Z,point:a.Z,polyline:u.Z,polygon:l.Z}};(0,n.N7)(c)},24678:(e,t,r)=>{r.d(t,{GG:()=>a,HQ:()=>l,Iu:()=>f,VY:()=>u,e8:()=>h,rS:()=>m,wY:()=>c});var n=r(82971),i=r(68441),s=r(8744);function o(e){return new n.Z({wkt:`GEOCCS["Spherical geocentric",\n    DATUM["Not specified",\n      SPHEROID["Sphere",${e.radius},0]],\n    PRIMEM["Greenwich",0.0,\n      AUTHORITY["EPSG","8901"]],\n    UNIT["m",1.0],\n    AXIS["Geocentric X",OTHER],\n    AXIS["Geocentric Y",EAST],\n    AXIS["Geocentric Z",NORTH]\n  ]`})}const a=o(i.sv),l=o(i.yr),u=o(i.Z1),c=new n.Z({wkt:`GEOCCS["WGS 84",\n  DATUM["WGS_1984",\n    SPHEROID["WGS 84",${i.sv.radius},298.257223563,\n      AUTHORITY["EPSG","7030"]],\n    AUTHORITY["EPSG","6326"]],\n  PRIMEM["Greenwich",0,\n    AUTHORITY["EPSG","8901"]],\n  UNIT["m",1.0,\n    AUTHORITY["EPSG","9001"]],\n  AXIS["Geocentric X",OTHER],\n  AXIS["Geocentric Y",OTHER],\n  AXIS["Geocentric Z",NORTH],\n  AUTHORITY["EPSG","4978"]\n]`});function m(e){return e&&((0,s.BZ)(e)||e===l)?l:e&&((0,s.V2)(e)||e===u)?u:a}function f(e){return e&&((0,s.BZ)(e)||e===l)?i.yr:e&&((0,s.V2)(e)||e===u)?i.Z1:i.sv}function h(e){return(0,s.o$)(e)?i.yr:(0,s.ME)(e)?i.Z1:i.sv}},24470:(e,t,r)=>{r.d(t,{HH:()=>l,SO:()=>u,Ue:()=>s,al:()=>o,cS:()=>h,jE:()=>c,kK:()=>m,oJ:()=>a,r3:()=>f}),r(80442),r(22021);var n=r(70586),i=r(6570);function s(e=g){return[e[0],e[1],e[2],e[3]]}function o(e,t,r,n,i=s()){return i[0]=e,i[1]=t,i[2]=r,i[3]=n,i}function a(e,t=s()){return t[0]=e.xmin,t[1]=e.ymin,t[2]=e.xmax,t[3]=e.ymax,t}function l(e,t){return new i.Z({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:t})}function u(e){return function(e){return(0,n.Wi)(e)||e[0]>=e[2]?0:e[2]-e[0]}(e)*function(e){return e[1]>=e[3]?0:e[3]-e[1]}(e)}function c(e,t,r){return t>=e[0]&&r>=e[1]&&t<=e[2]&&r<=e[3]}function m(e,t){return Math.max(t[0],e[0])<=Math.min(t[2],e[2])&&Math.max(t[1],e[1])<=Math.min(t[3],e[3])}function f(e,t){return t[0]>=e[0]&&t[2]<=e[2]&&t[1]>=e[1]&&t[3]<=e[3]}function h(e){return e?function(e,t){return e!==t&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3]),e}(e,d):s(d)}const d=[1/0,1/0,-1/0,-1/0],g=[0,0,0,0]},33955:(e,t,r)=>{r.d(t,{Ji:()=>y,YX:()=>c,aW:()=>m,im:()=>g,l9:()=>h,oU:()=>d,q9:()=>b,wp:()=>f});var n=r(70586),i=r(6570),s=r(9361),o=r(65091),a=r(13473),l=r(38913),u=r(58901);function c(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}function m(e){return void 0!==e.points}function f(e){return void 0!==e.x&&void 0!==e.y}function h(e){return void 0!==e.paths}function d(e){return void 0!==e.rings}function g(e){return(0,n.Wi)(e)?null:e instanceof s.Z?e:f(e)?a.Z.fromJSON(e):h(e)?u.Z.fromJSON(e):d(e)?l.Z.fromJSON(e):m(e)?o.Z.fromJSON(e):c(e)?i.Z.fromJSON(e):null}function y(e){return e?f(e)?"esriGeometryPoint":h(e)?"esriGeometryPolyline":d(e)?"esriGeometryPolygon":c(e)?"esriGeometryEnvelope":m(e)?"esriGeometryMultipoint":null:null}const p={esriGeometryPoint:a.Z,esriGeometryPolyline:u.Z,esriGeometryPolygon:l.Z,esriGeometryEnvelope:i.Z,esriGeometryMultipoint:o.Z};function b(e){return e&&p[e]||null}},86973:(e,t,r)=>{r.d(t,{Mk:()=>i,P$:()=>s});var n=r(35454);const i=(0,n.w)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"}),s=(0,n.w)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"})},69285:(e,t,r)=>{r.d(t,{k:()=>o});var n=r(70586),i=r(67900),s=r(8744);function o(e,t,r){if((0,n.Wi)(t)||(0,n.Wi)(r)||r.vcsWkid||(0,s.fS)(t,r))return null;const o=(0,i._R)(t)/(0,i._R)(r);if(1===o)return null;switch(e){case"point":case"esriGeometryPoint":return e=>function(e,t){e&&null!=e.z&&(e.z*=t)}(e,o);case"polyline":case"esriGeometryPolyline":return e=>function(e,t){if(e)for(const r of e.paths)for(const e of r)e.length>2&&(e[2]*=t)}(e,o);case"polygon":case"esriGeometryPolygon":return e=>function(e,t){if(e)for(const r of e.rings)for(const e of r)e.length>2&&(e[2]*=t)}(e,o);case"multipoint":case"esriGeometryMultipoint":return e=>function(e,t){if(e)for(const r of e.points)r.length>2&&(r[2]*=t)}(e,o);case"extent":case"esriGeometryExtent":return e=>function(e,t){e&&null!=e.zmin&&null!=e.zmax&&(e.zmin*=t,e.zmax*=t)}(e,o);default:return null}}},61576:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g}),r(66577);var n=r(70586),i=r(18571),s=r(54163),o=r(75993),a=r(55914),l=r(73506),u=r(15612),c=r(80676),m=r(87521),f=r(91219),h=r(23808),d=r(6570);class g{convertVectorFieldData(e){const t=s.Z.fromJSON(e.pixelBlock),r=(0,c.KC)(t,e.type);return Promise.resolve((0,n.pC)(r)&&r.toJSON())}async decode(e){const t=await(0,o.J)(e.data,e.options);return t&&t.toJSON()}symbolize(e){e.pixelBlock=s.Z.fromJSON(e.pixelBlock),e.extent=e.extent?d.Z.fromJSON(e.extent):null;const t=this.symbolizer.symbolize(e);return Promise.resolve((0,n.pC)(t)&&t.toJSON())}async updateSymbolizer(e){this.symbolizer=f.Z.fromJSON(e.symbolizerJSON),e.histograms&&"rasterStretch"===this.symbolizer?.rendererJSON.type&&(this.symbolizer.rendererJSON.histograms=e.histograms)}stretch(e){const t=this.symbolizer.simpleStretch(s.Z.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve((0,n.pC)(t)&&t.toJSON())}estimateStatisticsHistograms(e){const t=(0,u.Hv)(s.Z.fromJSON(e.srcPixelBlock));return Promise.resolve(t)}split(e){const t=(0,a.Vl)(s.Z.fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel);return t&&t.forEach(((e,r)=>{t.set(r,e?.toJSON())})),Promise.resolve(t)}async mosaicAndTransform(e){const t=e.srcPixelBlocks.map((e=>e?new s.Z(e):null)),r=(0,a.us)(t,e.srcMosaicSize,{blockWidths:e.blockWidths,alignmentInfo:e.alignmentInfo,clipOffset:e.clipOffset,clipSize:e.clipSize});let i,o=r;return e.coefs&&(o=(0,a.Uk)(r,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation)),e.projectDirections&&e.gcsGrid&&(i=(0,a.Qh)(e.destDimension,e.gcsGrid),o=(0,n.Wg)((0,c.xQ)(o,e.isUV?"vector-uv":"vector-magdir",i))),{pixelBlock:o?.toJSON(),localNorthDirections:i}}async createFlowMesh(e,t){const r={data:new Float32Array(e.flowData.buffer),mask:new Uint8Array(e.flowData.maskBuffer),width:e.flowData.width,height:e.flowData.height},{vertexData:n,indexData:i}=await(0,h.GE)(e.meshType,e.simulationSettings,r,t.signal);return{result:{vertexBuffer:n.buffer,indexBuffer:i.buffer},transferList:[n.buffer,i.buffer]}}async getProjectionOffsetGrid(e){const t=d.Z.fromJSON(e.projectedExtent),r=d.Z.fromJSON(e.srcBufferExtent);let n=null;e.datumTransformationSteps&&(n=new i.Z({steps:e.datumTransformationSteps})),(e.includeGCSGrid||(0,l.Mk)(t.spatialReference,r.spatialReference,n))&&await(0,l.zD)();const s=e.rasterTransform?(0,m.c)(e.rasterTransform):null;return(0,l.Qp)({...e,projectedExtent:t,srcBufferExtent:r,datumTransformation:n,rasterTransform:s})}}}}]);