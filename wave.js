!function(t,o){if("object"==typeof exports&&"object"==typeof module)module.exports=o();else if("function"==typeof define&&define.amd)define([],o);else{var i=o();for(var n in i)("object"==typeof exports?exports:t)[n]=i[n]}}(this,(function(){return(()=>{"use strict";var t={935:function(t,o,i){var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var o,i=1,n=arguments.length;i<n;i++)for(var e in o=arguments[i])Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);return t},n.apply(this,arguments)};Object.defineProperty(o,"__esModule",{value:!0}),o.Arcs=void 0;var e=i(426),s=i(941),a=function(){function t(t){this._options=null!=t?t:{}}return t.prototype.draw=function(t,o){var i=o.canvas,a=i.height,r=i.width,h=new e.Shapes(o),u=new s.AudioData(t),l=a/2,c=r/2;this._options=n({count:30,diameter:a/3,lineWidth:3,frequencyBand:"mids",rounded:!0},this._options),this._options.frequencyBand&&(t=u.getFrequencyBands()[this._options.frequencyBand]);for(var p=0;p<=this._options.count/2;p++){var _=t[Math.floor(t.length/this._options.count)*p],d=(r-this._options.diameter)/this._options.count*p,f=180-45/(255/_/2),v=180+45/(255/_/2),y=2*_;h.arc(d+y/2,l,y,f,v,this._options)}var g=t[Math.floor(t.length/2)];for(h.circle(c,l,this._options.diameter*(g/255),this._options),p=this._options.count/2;p<=this._options.count;p++){var m=t[Math.floor(t.length/this._options.count)*p];d=(r-this._options.diameter)/this._options.count*p+this._options.diameter,f=180-45/(255/m/2),v=180+45/(255/m/2),y=2*m,h.arc(d-y/2,l,y,f+180,v+180,this._options)}},t}();o.Arcs=a},519:function(t,o,i){var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var o,i=1,n=arguments.length;i<n;i++)for(var e in o=arguments[i])Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);return t},n.apply(this,arguments)};Object.defineProperty(o,"__esModule",{value:!0}),o.Circles=void 0;var e=i(426),s=i(941),a=function(){function t(t){this._options=null!=t?t:{}}return t.prototype.draw=function(t,o){var i=o.canvas,a=i.height,r=i.width,h=new e.Shapes(o),u=new s.AudioData(t),l=r/2,c=a/2;this._options=n({count:40,diameter:0,fillColor:"rgba(0,0,0,0)",frequencyBand:"mids"},this._options),this._options.frequencyBand&&(t=u.getFrequencyBands()[this._options.frequencyBand]);for(var p=0;p<this._options.count;p++){var _=t[Math.floor(t.length/this._options.count)*p];h.circle(l,c,this._options.diameter+_,this._options)}},t}();o.Circles=a},938:function(t,o,i){var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var o,i=1,n=arguments.length;i<n;i++)for(var e in o=arguments[i])Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);return t},n.apply(this,arguments)};Object.defineProperty(o,"__esModule",{value:!0}),o.Cubes=void 0;var e=i(426),s=i(941),a=function(){function t(t){this._options=null!=t?t:{}}return t.prototype.draw=function(t,o){var i,a,r,h,u,l,c,p,_,d,f,v,y,g=o.canvas,m=g.height,x=g.width,M=new e.Shapes(o),b=new s.AudioData(t);this._options=n({count:32,cubeHeight:50,frequencyBand:"mids"},this._options);var w=(x-5*this._options.count)/this._options.count;if((null===(i=this._options)||void 0===i?void 0:i.frequencyBand)&&(t=b.getFrequencyBands()[null===(a=this._options)||void 0===a?void 0:a.frequencyBand]),null===(r=this._options)||void 0===r?void 0:r.mirroredX)for(var C=1,B=Math.ceil(t.length/2);B<t.length;B++)t[B]=t[Math.ceil(t.length/2)-C],C++;if(null===(h=this._options)||void 0===h?void 0:h.top)for(B=0;B<this._options.count;B++)for(var O=t[Math.floor(t.length/this._options.count)*B],q=(5+w)*B,P=Math.ceil(O/w),j=0;j<P;j++){var S=j*(this._options.cubeHeight+5);M.rectangle(q,S,w,this._options.cubeHeight,this._options)}if(null===(u=this._options)||void 0===u?void 0:u.right)for(B=0;B<this._options.count;B++)for(O=t[Math.floor(t.length/this._options.count)*B],S=B*(this._options.cubeHeight+5),P=Math.ceil(O/w),j=0;j<P;j++)q=x-(5+w)*j,M.rectangle(q,S,w,this._options.cubeHeight,this._options);if((null===(l=this._options)||void 0===l?void 0:l.bottom)||!(null===(c=this._options)||void 0===c?void 0:c.top)&&!(null===(p=this._options)||void 0===p?void 0:p.right)&&!(null===(_=this._options)||void 0===_?void 0:_.left)&&!(null===(d=this._options)||void 0===d?void 0:d.center))for(B=0;B<this._options.count;B++)for(O=t[Math.floor(t.length/this._options.count)*B],q=(5+w)*B,P=Math.ceil(O/w),j=0;j<P;j++)S=m-j*(this._options.cubeHeight+5),M.rectangle(q,S,w,this._options.cubeHeight,this._options);if(null===(f=this._options)||void 0===f?void 0:f.left)for(B=0;B<this._options.count;B++)for(O=t[Math.floor(t.length/this._options.count)*B],S=B*(this._options.cubeHeight+5),P=Math.ceil(O/w),j=0;j<P;j++)q=(5+w)*j,M.rectangle(q,S,w,this._options.cubeHeight,this._options);if(null===(v=this._options)||void 0===v?void 0:v.center){for(B=0;B<this._options.count;B++)for(O=t[Math.floor(t.length/this._options.count)*B],q=(5+w)*B,P=Math.ceil(O/w),j=0;j<P;j++)S=m/2-j*(this._options.cubeHeight+5),M.rectangle(q,S,w,this._options.cubeHeight,this._options);if(null===(y=this._options)||void 0===y?void 0:y.mirroredY)for(B=0;B<this._options.count;B++)for(O=t[Math.floor(t.length/this._options.count)*B],q=(5+w)*B,P=Math.ceil(O/w),j=0;j<P;j++)S=m/2+j*(this._options.cubeHeight+5),M.rectangle(q,S,w,this._options.cubeHeight,this._options)}},t}();o.Cubes=a},540:function(t,o,i){var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var o,i=1,n=arguments.length;i<n;i++)for(var e in o=arguments[i])Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);return t},n.apply(this,arguments)};Object.defineProperty(o,"__esModule",{value:!0}),o.Flower=void 0;var e=i(426),s=i(941),a=function(){function t(t){this._options=null!=t?t:{}}return t.prototype.draw=function(t,o){var i,a,r=o.canvas,h=r.height,u=r.width,l=new e.Shapes(o),c=new s.AudioData(t);this._options=n({count:20,diameter:h/3,frequencyBand:"mids",rotate:0},this._options);var p=u/2,_=h/2,d=360/this._options.count;(null===(i=this._options)||void 0===i?void 0:i.frequencyBand)&&(t=c.getFrequencyBands()[null===(a=this._options)||void 0===a?void 0:a.frequencyBand]);for(var f=0;f<this._options.count;f++){var v=t[Math.floor(t.length/this._options.count)*f],y=l.toRadians(d*f+this._options.rotate),g=l.toRadians(d*(f+1)+this._options.rotate),m=this._options.diameter/2*Math.cos(y)+p,x=this._options.diameter/2*Math.sin(y)+_,M=this._options.diameter/2*Math.cos(g)+p,b=this._options.diameter/2*Math.sin(g)+_,w=this._options.diameter+v,C=w/2*Math.cos(y)+p,B=w/2*Math.sin(y)+_,O=w/2*Math.cos(g)+p,q=w/2*Math.sin(g)+_;l.polygon([{x:m,y:x},{x:C,y:B},{x:O,y:q},{x:M,y:b}],this._options)}},t}();o.Flower=a},522:function(t,o,i){var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var o,i=1,n=arguments.length;i<n;i++)for(var e in o=arguments[i])Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);return t},n.apply(this,arguments)};Object.defineProperty(o,"__esModule",{value:!0}),o.Glob=void 0;var e=i(426),s=i(941),a=function(){function t(t){this._options=null!=t?t:{}}return t.prototype.draw=function(t,o){var i,a,r,h=o.canvas,u=h.height,l=h.width,c=new e.Shapes(o),p=new s.AudioData(t),_=l/2,d=u/2;if(this._options=n({count:100,diameter:u/3,frequencyBand:"mids",rounded:!0},this._options),(null===(i=this._options)||void 0===i?void 0:i.frequencyBand)&&(t=p.getFrequencyBands()[null===(a=this._options)||void 0===a?void 0:a.frequencyBand]),null===(r=this._options)||void 0===r?void 0:r.mirroredX)for(var f=1,v=Math.ceil(t.length/2);v<t.length;v++)t[v]=t[Math.ceil(t.length/2)-f],f++;var y=[];for(v=0;v<this._options.count;v++){var g=t[Math.floor(t.length/this._options.count)*v],m=360/this._options.count,x=this._options.diameter+g,M=_+x/2*Math.cos(c.toRadians(m*v)),b=d+x/2*Math.sin(c.toRadians(m*v));y.push({x:M,y:b})}y.push(y[0]),c.polygon(y,this._options)},t}();o.Glob=a},658:function(t,o,i){var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var o,i=1,n=arguments.length;i<n;i++)for(var e in o=arguments[i])Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);return t},n.apply(this,arguments)};Object.defineProperty(o,"__esModule",{value:!0}),o.Lines=void 0;var e=i(426),s=i(941),a=function(){function t(t){this._options=null!=t?t:{}}return t.prototype.draw=function(t,o){var i,a,r,h,u,l,c,p,_,d,f,v,y,g=o.canvas,m=g.height,x=g.width,M=new e.Shapes(o),b=new s.AudioData(t);if(this._options=n({count:64,frequencyBand:"mids"},this._options),(null===(i=this._options)||void 0===i?void 0:i.frequencyBand)&&(t=b.getFrequencyBands()[null===(a=this._options)||void 0===a?void 0:a.frequencyBand]),null===(r=this._options)||void 0===r?void 0:r.mirroredX)for(var w=1,C=Math.ceil(t.length/2);C<t.length;C++)t[C]=t[Math.ceil(t.length/2)-w],w++;if(null===(h=this._options)||void 0===h?void 0:h.top)for(C=1;C<=this._options.count;C++){var B=t[Math.floor(t.length/this._options.count)*C],O=0,q=j=x/this._options.count*C,P=B;M.line(j,O,q,P,this._options)}if(null===(u=this._options)||void 0===u?void 0:u.right)for(C=1;C<=this._options.count;C++){var j=x;q=x-(B=t[Math.floor(t.length/this._options.count)*C]),P=O=m/this._options.count*C,M.line(j,O,q,P,this._options)}if((null===(l=this._options)||void 0===l?void 0:l.bottom)||!(null===(c=this._options)||void 0===c?void 0:c.top)&&!(null===(p=this._options)||void 0===p?void 0:p.right)&&!(null===(_=this._options)||void 0===_?void 0:_.left)&&!(null===(d=this._options)||void 0===d?void 0:d.center))for(C=1;C<=this._options.count;C++)B=t[Math.floor(t.length/this._options.count)*C],q=j=x/this._options.count*C,P=(O=m)-B,M.line(j,O,q,P,this._options);if(null===(f=this._options)||void 0===f?void 0:f.left)for(C=1;C<=this._options.count;C++)j=0,q=B=t[Math.floor(t.length/this._options.count)*C],P=O=m/this._options.count*C,M.line(j,O,q,P,this._options);if(null===(v=this._options)||void 0===v?void 0:v.center)for(C=1;C<=this._options.count;C++)B=t[Math.floor(t.length/this._options.count)*C],q=j=x/this._options.count*C,P=(O=m/2)-B,M.line(j,O,q,P,this._options),(null===(y=this._options)||void 0===y?void 0:y.mirroredY)&&(q=j=x/this._options.count*C,P=(O=m/2)+B,M.line(j,O,q,P,this._options))},t}();o.Lines=a},817:function(t,o,i){var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var o,i=1,n=arguments.length;i<n;i++)for(var e in o=arguments[i])Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);return t},n.apply(this,arguments)};Object.defineProperty(o,"__esModule",{value:!0}),o.Shine=void 0;var e=i(426),s=i(941),a=function(){function t(t){this._options=null!=t?t:{}}return t.prototype.draw=function(t,o){var i=o.canvas,a=i.height,r=i.width,h=new e.Shapes(o),u=new s.AudioData(t);this._options=n({count:30,rotate:0,diameter:a/3,frequencyBand:"mids"},this._options);var l=r/2,c=a/2,p=360/this._options.count;this._options.frequencyBand&&(t=u.getFrequencyBands()[this._options.frequencyBand]);for(var _=0;_<this._options.count;_++){var d=t[Math.floor(t.length/this._options.count)*_],f=h.toRadians(p*_+this._options.rotate),v=this._options.diameter+d,y=this._options.diameter/2*Math.cos(f)+l,g=this._options.diameter/2*Math.sin(f)+c,m=v/2*Math.cos(f)+l,x=v/2*Math.sin(f)+c;h.line(y,g,m,x,this._options)}},t}();o.Shine=a},123:function(t,o,i){var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var o,i=1,n=arguments.length;i<n;i++)for(var e in o=arguments[i])Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);return t},n.apply(this,arguments)};Object.defineProperty(o,"__esModule",{value:!0}),o.Square=void 0;var e=i(426),s=i(941),a=function(){function t(t){this._options=null!=t?t:{}}return t.prototype.draw=function(t,o){var i,a,r=o.canvas,h=r.height,u=r.width,l=new e.Shapes(o),c=new s.AudioData(t);this._options=n({count:40,diameter:h/3,frequencyBand:"mids"},this._options);var p=this._options.count/4,_=u/2,d=h/2;(null===(i=this._options)||void 0===i?void 0:i.frequencyBand)&&(t=c.getFrequencyBands()[null===(a=this._options)||void 0===a?void 0:a.frequencyBand]);for(var f=0;f<p;f++){var v=t[Math.floor(t.length/this._options.count)*f],y=this._options.diameter/p,g=_-this._options.diameter/2+y*f,m=d-this._options.diameter/2;l.line(g,m,g,m-v,this._options)}for(f=0;f<p;f++){v=t[Math.floor(t.length/this._options.count)*(2*f)];var x=this._options.diameter/p;g=_+this._options.diameter/2,m=d-this._options.diameter/2+x*f,l.line(g,m,g+v,m,this._options)}for(f=0;f<p;f++)v=t[Math.floor(t.length/this._options.count)*(3*f)],y=this._options.diameter/p,g=_-this._options.diameter/2+y*f,m=d+this._options.diameter/2,l.line(g,m,g,m+v,this._options);for(f=0;f<p;f++)v=t[Math.floor(t.length/this._options.count)*(4*f)],x=this._options.diameter/p,g=_-this._options.diameter/2,m=d-this._options.diameter/2+x*f,l.line(g,m,g-v,m,this._options)},t}();o.Square=a},270:function(t,o,i){var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var o,i=1,n=arguments.length;i<n;i++)for(var e in o=arguments[i])Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);return t},n.apply(this,arguments)};Object.defineProperty(o,"__esModule",{value:!0}),o.Turntable=void 0;var e=i(426),s=i(941),a=function(){function t(t){this._options=null!=t?t:{}}return t.prototype.draw=function(t,o){var i=o.canvas,a=i.height,r=i.width,h=new e.Shapes(o),u=new s.AudioData(t);this._options=n({count:20,rotate:0,diameter:a/3,cubeHeight:20,frequencyBand:"mids",gap:5},this._options);var l=r/2,c=a/2,p=360/this._options.count;this._options.frequencyBand&&(t=u.getFrequencyBands()[this._options.frequencyBand]);for(var _=0;_<this._options.count;_++)for(var d=t[Math.floor(t.length/this._options.count)*_],f=0;f<d/this._options.cubeHeight;f++){var v=this._options.diameter+this._options.cubeHeight*f+this._options.gap,y=this._options.diameter+this._options.cubeHeight*(f+1),g=h.toRadians(p*_+this._options.rotate+this._options.gap/4),m=h.toRadians(p*(_+1)+this._options.rotate),x=v/2*Math.cos(g)+l,M=v/2*Math.sin(g)+c,b=v/2*Math.cos(m)+l,w=v/2*Math.sin(m)+c,C=y/2*Math.cos(g)+l,B=y/2*Math.sin(g)+c,O=y/2*Math.cos(m)+l,q=y/2*Math.sin(m)+c;h.polygon([{x,y:M},{x:C,y:B},{x:O,y:q},{x:b,y:w}],this._options)}},t}();o.Turntable=a},857:function(t,o,i){var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var o,i=1,n=arguments.length;i<n;i++)for(var e in o=arguments[i])Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);return t},n.apply(this,arguments)};Object.defineProperty(o,"__esModule",{value:!0}),o.Wave=void 0;var e=i(426),s=i(941),a=function(){function t(t){this._options=null!=t?t:{}}return t.prototype.draw=function(t,o){var i=o.canvas,a=i.height,r=i.width,h=new s.AudioData(t),u=new e.Shapes(o);if(this._options=n({count:64,frequencyBand:"mids"},this._options),this._options.frequencyBand&&(t=h.getFrequencyBands()[this._options.frequencyBand]),this._options.mirroredX)for(var l=1,c=Math.ceil(t.length/2);c<t.length;c++)t[c]=t[Math.ceil(t.length/2)-l],l++;if(this._options.top){var p=[{x:0,y:0}];for(c=0;c<=this._options.count;c++){var _=t[Math.floor(t.length/this._options.count)*c];p.push({x:Math.floor(r/this._options.count)*c,y:_})}p.push({x:r,y:0}),u.polygon(p,this._options)}if(this._options.right){for(p=[{x:r,y:0}],c=0;c<=this._options.count;c++)_=t[Math.floor(t.length/this._options.count)*c],p.push({x:r-_,y:Math.floor(r/this._options.count)*c});p.push({x:r,y:a}),u.polygon(p,this._options)}if(this._options.bottom||!this._options.top&&!this._options.right&&!this._options.left&&!this._options.center){for(p=[{x:0,y:a}],c=0;c<=this._options.count;c++)_=t[Math.floor(t.length/this._options.count)*c],p.push({x:Math.floor(r/this._options.count)*c,y:a-_});p.push({x:r,y:a}),u.polygon(p,this._options)}if(this._options.left){for(p=[{x:0,y:0}],c=0;c<=this._options.count;c++)_=t[Math.floor(t.length/this._options.count)*c],p.push({x:_,y:Math.floor(r/this._options.count)*c});p.push({x:0,y:a}),u.polygon(p,this._options)}if(this._options.center){for(p=[{x:0,y:a/2}],c=0;c<=this._options.count;c++)_=t[Math.floor(t.length/this._options.count)*c],p.push({x:Math.floor(r/this._options.count)*c,y:a/2-_});if(p.push({x:r,y:a/2}),u.polygon(p,this._options),this._options.mirroredY){for(p=[{x:0,y:a/2}],c=0;c<=this._options.count;c++)_=t[Math.floor(t.length/this._options.count)*c],p.push({x:Math.floor(r/this._options.count)*c,y:a/2+_});p.push({x:r,y:a/2}),u.polygon(p,this._options)}}},t}();o.Wave=a},941:(t,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.AudioData=void 0;var i=function(){function t(t){this.audioBufferData=t}return t.prototype.getFrequencyBands=function(){var t=Math.floor(.0625*this.audioBufferData.length),o=Math.floor(.0625*this.audioBufferData.length),i=Math.floor(.375*this.audioBufferData.length);return{base:this.audioBufferData.slice(0,t),lows:this.audioBufferData.slice(t+1,t+o),mids:this.audioBufferData.slice(t+o+1,t+o+i),highs:this.audioBufferData.slice(t+o+i+1)}},t}();o.AudioData=i},426:function(t,o){var i=this&&this.__awaiter||function(t,o,i,n){return new(i||(i=Promise))((function(e,s){function a(t){try{h(n.next(t))}catch(t){s(t)}}function r(t){try{h(n.throw(t))}catch(t){s(t)}}function h(t){var o;t.done?e(t.value):(o=t.value,o instanceof i?o:new i((function(t){t(o)}))).then(a,r)}h((n=n.apply(t,o||[])).next())}))},n=this&&this.__generator||function(t,o){var i,n,e,s,a={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return s={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function r(s){return function(r){return function(s){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,n&&(e=2&s[0]?n.return:s[0]?n.throw||((e=n.return)&&e.call(n),0):n.next)&&!(e=e.call(n,s[1])).done)return e;switch(n=0,e&&(s=[2&s[0],e.value]),s[0]){case 0:case 1:e=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((e=(e=a.trys).length>0&&e[e.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!e||s[1]>e[0]&&s[1]<e[3])){a.label=s[1];break}if(6===s[0]&&a.label<e[1]){a.label=e[1],e=s;break}if(e&&a.label<e[2]){a.label=e[2],a.ops.push(s);break}e[2]&&a.ops.pop(),a.trys.pop();continue}s=o.call(t,a)}catch(t){s=[6,t],n=0}finally{i=e=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,r])}}};Object.defineProperty(o,"__esModule",{value:!0}),o.Shapes=void 0;var e=function(){function t(t){this._canvasContext=t}return t.prototype.toRadians=function(t){return t*Math.PI/180},t.prototype.toDegrees=function(t){return 180*t/Math.PI},t.prototype._rotatePoint=function(t,o,i,n,e){var s=this.toRadians(e);return{x:Math.cos(s)*(i-t)-Math.sin(s)*(n-o)+t,y:Math.sin(s)*(i-t)+Math.cos(s)*(n-o)+o}},t.prototype._makeGradient=function(t,o){var i=0,n=this._canvasContext.canvas.height/2,e=this._canvasContext.canvas.width,s=this._canvasContext.canvas.height/2;if(o){var a=this._canvasContext.canvas.width/2,r=this._canvasContext.canvas.height/2,h=this._rotatePoint(a,r,i,n,o);i=h.x,n=h.y;var u=this._rotatePoint(a,r,e,s,o);e=u.x,s=u.y}var l=this._canvasContext.createLinearGradient(i,n,e,s);return t.forEach((function(o,i){l.addColorStop(1/t.length*i,o)})),l},t.prototype._makeImage=function(t){return i(this,void 0,void 0,(function(){var o,i=this;return n(this,(function(n){return(o=new Image).src=t,[2,new Promise((function(t,n){o.onload=function(){var n=i._canvasContext.createPattern(o,"repeat");t(n)}}))]}))}))},t.prototype._implementOptions=function(t,o){var i,n,e,s,a,r,h,u,l,c,p,_,d=this;void 0===o&&(o=!0),"string"==typeof(null==t?void 0:t.lineColor)?this._canvasContext.strokeStyle=t.lineColor:(null===(i=null==t?void 0:t.lineColor)||void 0===i?void 0:i.gradient)?this._canvasContext.strokeStyle=this._makeGradient(t.lineColor.gradient,t.lineColor.rotate):(null===(n=null==t?void 0:t.lineColor)||void 0===n?void 0:n.image)?this._makeImage(null===(e=null==t?void 0:t.lineColor)||void 0===e?void 0:e.image).then((function(t){return d._canvasContext.strokeStyle=t})):this._canvasContext.strokeStyle="#000","string"==typeof(null==t?void 0:t.fillColor)?this._canvasContext.fillStyle=t.fillColor:(null===(s=null==t?void 0:t.fillColor)||void 0===s?void 0:s.gradient)?this._canvasContext.fillStyle=this._makeGradient(t.fillColor.gradient,t.fillColor.rotate):(null===(a=null==t?void 0:t.fillColor)||void 0===a?void 0:a.image)?this._makeImage(null===(r=null==t?void 0:t.fillColor)||void 0===r?void 0:r.image).then((function(t){return d._canvasContext.fillStyle=t})):this._canvasContext.fillStyle="#000",this._canvasContext.lineCap=null!==(h=(null==t?void 0:t.rounded)?"round":"butt")&&void 0!==h?h:"butt",this._canvasContext.lineWidth=null!==(u=null==t?void 0:t.lineWidth)&&void 0!==u?u:1,this._canvasContext.shadowColor=null!==(c=null===(l=null==t?void 0:t.glow)||void 0===l?void 0:l.color)&&void 0!==c?c:"rgba(0,0,0,0)",this._canvasContext.shadowBlur=null!==(_=null===(p=null==t?void 0:t.glow)||void 0===p?void 0:p.strength)&&void 0!==_?_:0,this._canvasContext.shadowOffsetX=0,this._canvasContext.shadowOffsetY=0,o&&this._canvasContext.closePath(),this._canvasContext.stroke(),o&&this._canvasContext.fill()},t.prototype.arc=function(t,o,i,n,e,s){return this._canvasContext.beginPath(),this._canvasContext.arc(t,o,i/2,this.toRadians(n),this.toRadians(e)),this._implementOptions(s,!1),this},t.prototype.circle=function(t,o,i,n){return this._canvasContext.beginPath(),this._canvasContext.arc(t,o,i/2,0,2*Math.PI),this._implementOptions(n),this},t.prototype.line=function(t,o,i,n,e){return this._canvasContext.beginPath(),this._canvasContext.moveTo(t,o),this._canvasContext.lineTo(i,n),this._implementOptions(e),this},t.prototype.polygon=function(t,o){var i;this._canvasContext.beginPath(),this._canvasContext.moveTo(t[0].x,t[0].y);for(var n=0;n<t.length;n++){var e=t[n],s=null!==(i=t[n+1])&&void 0!==i?i:e,a=(e.x+s.x)/2,r=(e.y+s.y)/2;(null==o?void 0:o.rounded)?this._canvasContext.quadraticCurveTo(t[n].x,t[n].y,a,r):this._canvasContext.lineTo(t[n].x,t[n].y)}return this._implementOptions(o),this},t.prototype.rectangle=function(t,o,i,n,e){var s,a=null!==(s=null==e?void 0:e.radius)&&void 0!==s?s:0;return i<2*a&&(a=i/2),n<2*a&&(a=n/2),this._canvasContext.beginPath(),this._canvasContext.moveTo(t+a,o),this._canvasContext.arcTo(t+i,o,t+i,o+n,a),this._canvasContext.arcTo(t+i,o+n,t,o+n,a),this._canvasContext.arcTo(t,o+n,t,o,a),this._canvasContext.arcTo(t,o,t+i,o,a),this._implementOptions(e),this},t}();o.Shapes=e}},o={};function i(n){var e=o[n];if(void 0!==e)return e.exports;var s=o[n]={exports:{}};return t[n].call(s.exports,s,s.exports,i),s.exports}var n={};return(()=>{var t=n;Object.defineProperty(t,"__esModule",{value:!0}),t.Wave=void 0;var o=i(935),e=i(519),s=i(938),a=i(540),r=i(522),h=i(658),u=i(817),l=i(123),c=i(270),p=i(857),_=function(){function t(t,i){var n=this;this.animations={Arcs:o.Arcs,Circles:e.Circles,Cubes:s.Cubes,Flower:a.Flower,Glob:r.Glob,Lines:h.Lines,Shine:u.Shine,Square:l.Square,Turntable:c.Turntable,Wave:p.Wave},this._activeAnimations=[],this._audioElement=t,this._canvasElement=i,this._canvasContext=this._canvasElement.getContext("2d"),this._audioElement.addEventListener("play",(function(){n._audioContext=new AudioContext,n._audioSource=n._audioContext.createMediaElementSource(n._audioElement),n._audioAnalyser=n._audioContext.createAnalyser(),n._play()}),{once:!0})}return t.prototype._play=function(){var t=this;this._audioSource.connect(this._audioAnalyser),this._audioSource.connect(this._audioContext.destination),this._audioAnalyser.smoothingTimeConstant=.85,this._audioAnalyser.fftSize=1024;var o=new Uint8Array(this._audioAnalyser.frequencyBinCount),i=function(){t._audioAnalyser.getByteFrequencyData(o),t._canvasContext.clearRect(0,0,t._canvasContext.canvas.width,t._canvasContext.canvas.height),t._activeAnimations.forEach((function(i){i.draw(o,t._canvasContext)})),window.requestAnimationFrame(i)};i()},t.prototype.addAnimation=function(t){this._activeAnimations.push(t)},t.prototype.clearAnimations=function(){this._activeAnimations=[]},t}();t.Wave=_})(),n})()}));