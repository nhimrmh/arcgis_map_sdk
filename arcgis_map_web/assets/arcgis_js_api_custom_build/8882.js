(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[8882],{1427:(e,t,i)=>{"use strict";i.d(t,{d:()=>d});const n=new Float32Array(1);function a(e){return s(Math.max(-l,Math.min(e,l)))}function s(e){return n[0]=e,n[0]}const l=s(34028234663852886e22);var r={};r.defaultNoDataValue=a(-1/0),r.decode=function(e,t){var i=(t=t||{}).encodedMaskData||null===t.encodedMaskData,n=m(e,t.inputOffset||0,i),s=null!=t.noDataValue?a(t.noDataValue):r.defaultNoDataValue,l=o(n,t.pixelType||Float32Array,t.encodedMaskData,s,t.returnMask),c={width:n.width,height:n.height,pixelData:l.resultPixels,minValue:n.pixels.minValue,maxValue:n.pixels.maxValue,noDataValue:s};return l.resultMask&&(c.maskData=l.resultMask),t.returnEncodedMask&&n.mask&&(c.encodedMaskData=n.mask.bitset?n.mask.bitset:null),t.returnFileInfo&&(c.fileInfo=f(n,s),t.computeUsedBitDepths&&(c.fileInfo.bitDepths=u(n))),c};var o=function(e,t,i,n,a){var s,l,r=0,o=e.pixels.numBlocksX,f=e.pixels.numBlocksY,u=Math.floor(e.width/o),m=Math.floor(e.height/f),d=2*e.maxZError;i=i||(e.mask?e.mask.bitset:null),s=new t(e.width*e.height),a&&i&&(l=new Uint8Array(e.width*e.height));for(var h,g,k=new Float32Array(u*m),x=0;x<=f;x++){var w=x!==f?m:e.height%f;if(0!==w)for(var p=0;p<=o;p++){var y=p!==o?u:e.width%o;if(0!==y){var V,B,v,U,b=x*e.width*m+p*u,M=e.width-y,D=e.pixels.blocks[r];if(D.encoding<2?(0===D.encoding?V=D.rawData:(c(D.stuffedData,D.bitsPerPixel,D.numValidPixels,D.offset,d,k,e.pixels.maxValue),V=k),B=0):v=2===D.encoding?0:D.offset,i)for(g=0;g<w;g++){for(7&b&&(U=i[b>>3],U<<=7&b),h=0;h<y;h++)7&b||(U=i[b>>3]),128&U?(l&&(l[b]=1),s[b++]=D.encoding<2?V[B++]:v):(l&&(l[b]=0),s[b++]=n),U<<=1;b+=M}else if(D.encoding<2)for(g=0;g<w;g++){for(h=0;h<y;h++)s[b++]=V[B++];b+=M}else for(g=0;g<w;g++)if(s.fill)s.fill(v,b,b+y),b+=y+M;else{for(h=0;h<y;h++)s[b++]=v;b+=M}if(1===D.encoding&&B!==D.numValidPixels)throw"Block and Mask do not match";r++}}}return{resultPixels:s,resultMask:l}},f=function(e,t){return{fileIdentifierString:e.fileIdentifierString,fileVersion:e.fileVersion,imageType:e.imageType,height:e.height,width:e.width,maxZError:e.maxZError,eofOffset:e.eofOffset,mask:e.mask?{numBlocksX:e.mask.numBlocksX,numBlocksY:e.mask.numBlocksY,numBytes:e.mask.numBytes,maxValue:e.mask.maxValue}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,numBytes:e.pixels.numBytes,maxValue:e.pixels.maxValue,minValue:e.pixels.minValue,noDataValue:t}}},u=function(e){for(var t=e.pixels.numBlocksX*e.pixels.numBlocksY,i={},n=0;n<t;n++){var a=e.pixels.blocks[n];0===a.encoding?i.float32=!0:1===a.encoding?i[a.bitsPerPixel]=!0:i[0]=!0}return Object.keys(i)},m=function(e,t,i){var n={},a=new Uint8Array(e,t,10);if(n.fileIdentifierString=String.fromCharCode.apply(null,a),"CntZImage"!=n.fileIdentifierString.trim())throw"Unexpected file identifier string: "+n.fileIdentifierString;t+=10;var s=new DataView(e,t,24);if(n.fileVersion=s.getInt32(0,!0),n.imageType=s.getInt32(4,!0),n.height=s.getUint32(8,!0),n.width=s.getUint32(12,!0),n.maxZError=s.getFloat64(16,!0),t+=24,!i)if(s=new DataView(e,t,16),n.mask={},n.mask.numBlocksY=s.getUint32(0,!0),n.mask.numBlocksX=s.getUint32(4,!0),n.mask.numBytes=s.getUint32(8,!0),n.mask.maxValue=s.getFloat32(12,!0),t+=16,n.mask.numBytes>0){var l=new Uint8Array(Math.ceil(n.width*n.height/8)),r=(s=new DataView(e,t,n.mask.numBytes)).getInt16(0,!0),o=2,f=0;do{if(r>0)for(;r--;)l[f++]=s.getUint8(o++);else{var u=s.getUint8(o++);for(r=-r;r--;)l[f++]=u}r=s.getInt16(o,!0),o+=2}while(o<n.mask.numBytes);if(-32768!==r||f<l.length)throw"Unexpected end of mask RLE encoding";n.mask.bitset=l,t+=n.mask.numBytes}else 0==(n.mask.numBytes|n.mask.numBlocksY|n.mask.maxValue)&&(l=new Uint8Array(Math.ceil(n.width*n.height/8)),n.mask.bitset=l);s=new DataView(e,t,16),n.pixels={},n.pixels.numBlocksY=s.getUint32(0,!0),n.pixels.numBlocksX=s.getUint32(4,!0),n.pixels.numBytes=s.getUint32(8,!0),n.pixels.maxValue=s.getFloat32(12,!0),t+=16;var m=n.pixels.numBlocksX,c=n.pixels.numBlocksY,d=m+(n.width%m>0?1:0),h=c+(n.height%c>0?1:0);n.pixels.blocks=new Array(d*h);for(var g=1e9,k=0,x=0;x<h;x++)for(var w=0;w<d;w++){var p=0,y=e.byteLength-t;s=new DataView(e,t,Math.min(10,y));var V={};n.pixels.blocks[k++]=V;var B=s.getUint8(0);if(p++,V.encoding=63&B,V.encoding>3)throw"Invalid block encoding ("+V.encoding+")";if(2!==V.encoding){if(0!==B&&2!==B){if(B>>=6,V.offsetType=B,2===B)V.offset=s.getInt8(1),p++;else if(1===B)V.offset=s.getInt16(1,!0),p+=2;else{if(0!==B)throw"Invalid block offset type";V.offset=s.getFloat32(1,!0),p+=4}if(g=Math.min(V.offset,g),1===V.encoding)if(B=s.getUint8(p),p++,V.bitsPerPixel=63&B,B>>=6,V.numValidPixelsType=B,2===B)V.numValidPixels=s.getUint8(p),p++;else if(1===B)V.numValidPixels=s.getUint16(p,!0),p+=2;else{if(0!==B)throw"Invalid valid pixel count type";V.numValidPixels=s.getUint32(p,!0),p+=4}}var v;if(t+=p,3!=V.encoding)if(0===V.encoding){var U=(n.pixels.numBytes-1)/4;if(U!==Math.floor(U))throw"uncompressed block has invalid length";v=new ArrayBuffer(4*U),new Uint8Array(v).set(new Uint8Array(e,t,4*U));for(var b=new Float32Array(v),M=0;M<b.length;M++)g=Math.min(g,b[M]);V.rawData=b,t+=4*U}else if(1===V.encoding){var D=Math.ceil(V.numValidPixels*V.bitsPerPixel/8),I=Math.ceil(D/4);v=new ArrayBuffer(4*I),new Uint8Array(v).set(new Uint8Array(e,t,D)),V.stuffedData=new Uint32Array(v),t+=D}}else t++,g=Math.min(g,0)}return n.pixels.minValue=g,n.eofOffset=t,n},c=function(e,t,i,n,a,s,l){var r,o,f,u=(1<<t)-1,m=0,c=0,d=Math.ceil((l-n)/a),h=4*e.length-Math.ceil(t*i/8);for(e[e.length-1]<<=8*h,r=0;r<i;r++){if(0===c&&(f=e[m++],c=32),c>=t)o=f>>>c-t&u,c-=t;else{var g=t-c;o=(f&u)<<g&u,o+=(f=e[m++])>>>(c=32-g)}s[r]=o<d?n+o*a:l}return s};const d=r.decode},98882:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>s});var n=i(1427);class a{_decode(e){const t=(0,n.d)(e.buffer,e.options);return Promise.resolve({result:t,transferList:[t.pixelData.buffer]})}}const s=function(){return new a}}}]);