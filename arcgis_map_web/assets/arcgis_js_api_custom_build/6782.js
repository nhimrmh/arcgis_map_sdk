"use strict";(self.webpackChunkarcgis_webpack01=self.webpackChunkarcgis_webpack01||[]).push([[6782],{6782:(t,e,a)=>{a.r(e),a.d(e,{default:()=>l});var i=a(36663),s=a(13802),r=a(78668),n=a(81977),h=(a(7753),a(39994),a(7283),a(40266)),d=a(12688),p=a(80347),c=a(23134),o=a(26216),u=a(55068);const y=s.Z.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let g=class extends((0,u.Z)((0,p.y)(o.Z))){update(t){this.strategy.update(t).catch((t=>{(0,r.D_)(t)||y.error(t)})),this.notifyChange("updating")}attach(){this._bitmapContainer=new d.c,this.container.addChild(this._bitmapContainer),this.strategy=new c.Z({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(t,e,a){return this.layer.fetchImage(t,e,a)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}};(0,i._)([(0,n.Cb)()],g.prototype,"strategy",void 0),(0,i._)([(0,n.Cb)()],g.prototype,"updating",void 0),g=(0,i._)([(0,h.j)("esri.views.2d.layers.BaseDynamicLayerView2D")],g);const l=g}}]);