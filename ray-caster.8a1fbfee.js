parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QCba":[function(require,module,exports) {
var r=[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],t=800,e=500,a=20,n=30,o=30,c=e/n,i=1e3/60,f=1,u=.05,s=50,w=t/s;function l(){var r=300,t=100,e=-90*Math.PI/180;return{get cameraX(){return r},get cameraZ(){return t},get cameraPan(){return e},pan:function(r){e+=r},moveForward:function(a){r+=a*Math.cos(e),t+=a*Math.sin(e)}}}function v(){var r=!1,t=!1,e=!1,a=!1;return window.addEventListener("keydown",function(n){switch(n.key){case"ArrowLeft":r=!0;break;case"ArrowUp":t=!0;break;case"ArrowRight":e=!0;break;case"ArrowDown":a=!0}}),window.addEventListener("keyup",function(n){switch(n.key){case"ArrowLeft":r=!1;break;case"ArrowUp":t=!1;break;case"ArrowRight":e=!1;break;case"ArrowDown":a=!1}}),{get left(){return r},get up(){return t},get right(){return e},get down(){return a}}}var h=v(),d=l();function m(){var r=document.querySelector("#canvas3D"),t=document.querySelector("#canvas2D"),e=r.getContext("2d"),a=t.getContext("2d");window.setInterval(function(){g(e,a)},i)}function g(r,t){k([r,t]),D(t),M(t),p(t,r),b()}function k(r){r.forEach(function(r){r.clearRect(0,0,800,500)})}function D(r){var t=d.cameraX,e=d.cameraZ,n=d.cameraPan;r.translate(t+a/2,e+a/2),r.rotate(n),r.fillRect(-a/2,-a/2,a,a),r.rotate(-n),r.translate(-(t+a/2),-(e+a/2))}function M(t){var e,a;for(e=0;e<30;e++)for(a=0;a<30;a++){1===r[e][a]&&t.fillRect(a*c,e*c,c,c)}}function p(r,t){var e,n,o=d.cameraX,i=d.cameraZ,f=d.cameraPan;for(n=-.5*s;n<.5*s;n++)for(e=0;e<800;e+=.25*c){var u=i,w=o+e*Math.cos(n*Math.PI/180+f),l=u+e*Math.sin(n*Math.PI/180+f);if(w>=0&&w<=800&&l>=0&&l<=800)if(r.fillRect(w+a/2,l+a/2,1,1),y(w+a/2,l+a/2,n+.5*s,e,t))break}}function y(t,a,n,o,i){var f=Math.floor(t/c),u=Math.floor(a/c);try{if(1===r[u][f])return i.fillStyle=A("#DDDDDD",-o/5),i.fillRect(n*w,u+o/2,w,Math.max(0,e-o)),!0}catch(s){console.error({x:f,z:u})}return!1}function A(r,t){var e=!1;"#"==r[0]&&(r=r.slice(1),e=!0);var a=parseInt(r,16),n=(a>>16)+t;n>255?n=255:n<0&&(n=0);var o=(a>>8&255)+t;o>255?o=255:o<0&&(o=0);var c=(255&a)+t;return c>255?c=255:c<0&&(c=0),(e?"#":"")+(c|o<<8|n<<16).toString(16)}function b(){h.down?d.moveForward(-f):h.up&&d.moveForward(f),h.left?d.pan(-u):h.right&&d.pan(u)}m();
},{}]},{},["QCba"], null)
//# sourceMappingURL=https://jjohnson1994.github.io/ray-caster/ray-caster.8a1fbfee.js.map