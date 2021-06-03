(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var f,aa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},g;
if("function"==typeof Object.setPrototypeOf)g=Object.setPrototypeOf;else{var h;a:{var ba={a:!0},k={};try{k.__proto__=ba;h=k.a;break a}catch(a){}h=!1}g=h?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var l=g,m=this||self;
function n(a){a=a.split(".");for(var b=m,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function ca(a,b,c){return a.call.apply(a.bind,arguments)}
function da(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function p(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p=ca:p=da;return p.apply(null,arguments)}
function q(a,b){a=a.split(".");var c=m;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
;function r(){this.s=this.s;this.B=this.B}
r.prototype.s=!1;r.prototype.dispose=function(){this.s||(this.s=!0,this.G())};
r.prototype.G=function(){if(this.B)for(;this.B.length;)this.B.shift()()};var t,u,v=m.window,w=(null===(t=null===v||void 0===v?void 0:v.yt)||void 0===t?void 0:t.config_)||(null===(u=null===v||void 0===v?void 0:v.ytcfg)||void 0===u?void 0:u.data_)||{};q("yt.config_",w);function x(a,b){return a in w?w[a]:b}
;function y(a,b){a=z(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function z(a){var b=x("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:x("EXPERIMENT_FLAGS",{})[a]}
;var ea=y("web_emulated_idle_callback_delay",300),A=1E3/60-3;
function B(a){a=void 0===a?{}:a;r.call(this);this.g=[];this.g[8]=[];this.g[4]=[];this.g[3]=[];this.g[2]=[];this.g[1]=[];this.g[0]=[];this.j=0;this.N=a.timeout||1;this.i={};this.o=A;this.C=this.h=this.m=0;this.D=this.l=!1;this.u=[];this.H=p(this.R,this);this.M=p(this.T,this);this.J=p(this.O,this);this.K=p(this.P,this);this.L=p(this.S,this);this.A=this.F=!1;var b;if(b=!!window.requestIdleCallback)b=z("disable_scheduler_requestIdleCallback"),b=!("string"===typeof b&&"false"===b?0:b);this.I=b;(this.v=
!!a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.H)}
B.prototype=aa(r.prototype);B.prototype.constructor=B;if(l)l(B,r);else for(var D in r)if("prototype"!=D)if(Object.defineProperties){var E=Object.getOwnPropertyDescriptor(r,D);E&&Object.defineProperty(B,D,E)}else B[D]=r[D];function F(a,b){var c=Date.now();G(b);b=Date.now()-c;a.l||(a.o-=b)}
function H(a,b,c,d){++a.C;if(10==c)return F(a,b),a.C;var e=a.C;a.i[e]=b;a.l&&!d?a.u.push({id:e,priority:c}):(a.g[c].push(e),a.D||a.l||(0!=a.h&&I(a)!=a.m&&a.stop(),a.start()));return e}
function J(a){a.u.length=0;for(var b=4;0<=b;b--)a.g[b].length=0;a.g[8].length=0;a.i={};a.stop()}
function I(a){if(a.g[8].length){if(a.A)return 4;if(!document.hidden&&a.v)return 3}for(var b=4;b>=a.j;b--)if(0<a.g[b].length)return 0<b?!document.hidden&&a.v?3:2:1;return 0}
function G(a){try{a()}catch(b){(a=n("yt.logging.errors.log"))&&a(b)}}
function K(a){if(a.g[8].length)return!0;for(var b=3;0<=b;b--)if(a.g[b].length)return!0;return!1}
f=B.prototype;f.P=function(a){var b=void 0;a&&(b=a.timeRemaining());this.F=!0;L(this,b);this.F=!1};
f.T=function(){L(this)};
f.O=function(){M(this)};
f.S=function(){this.A=!0;var a=I(this);4==a&&a!=this.m&&(this.stop(),this.start());L(this);this.A=!1};
f.R=function(){document.hidden||M(this);this.h&&(this.stop(),this.start())};
function M(a){a.stop();a.l=!0;for(var b=Date.now(),c=a.g[8];c.length;){var d=c.shift(),e=a.i[d];delete a.i[d];e&&G(e)}N(a);a.l=!1;K(a)&&a.start();a.o-=Date.now()-b}
function N(a){for(var b=0,c=a.u.length;b<c;b++){var d=a.u[b];a.g[d.priority].push(d.id)}a.u.length=0}
function L(a,b){a.A&&4==a.m&&a.h||a.stop();a.l=!0;b=Date.now()+(b||a.o);for(var c=a.g[4];c.length;){var d=c.shift(),e=a.i[d];delete a.i[d];e&&G(e)}c=a.F?0:1;c=a.j>c?a.j:c;if(!(Date.now()>=b)){do{a:{d=a;e=c;for(var C=3;C>=e;C--)for(var S=d.g[C];S.length;){var T=S.shift(),U=d.i[T];delete d.i[T];if(U){d=U;break a}}d=null}d&&G(d)}while(d&&Date.now()<b)}a.l=!1;N(a);a.o=A;K(a)&&a.start()}
f.start=function(){this.D=!1;if(0==this.h)switch(this.m=I(this),this.m){case 1:var a=this.K;this.h=this.I?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,ea);break;case 2:this.h=window.setTimeout(this.M,this.N);break;case 3:this.h=window.requestAnimationFrame(this.L);break;case 4:this.h=window.setTimeout(this.J,0)}};
f.stop=function(){if(this.h){switch(this.m){case 1:var a=this.h;this.I?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
f.G=function(){J(this);this.stop();this.v&&document.removeEventListener("visibilitychange",this.H);r.prototype.G.call(this)};var O=n("yt.scheduler.instance.timerIdMap_")||{},P=y("kevlar_tuner_scheduler_soft_state_timer_ms",800),Q=0,R=0;function V(){var a=n("ytglobal.schedulerInstanceInstance_");if(!a||a.s)a=new B(x("scheduler",void 0)||{}),q("ytglobal.schedulerInstanceInstance_",a);return a}
function fa(){var a=n("ytglobal.schedulerInstanceInstance_");a&&(a&&"function"==typeof a.dispose&&a.dispose(),q("ytglobal.schedulerInstanceInstance_",null))}
function ha(){J(V())}
function ia(a,b,c){if(0==c||void 0===c)return c=void 0===c,-H(V(),a,b,c);var d=window.setTimeout(function(){var e=H(V(),a,b);O[d]=e},c);
return d}
function ja(a){var b=V();F(b,a)}
function ka(a){var b=V();if(0>a)delete b.i[-a];else{var c=O[a];c?(delete b.i[c],delete O[a]):window.clearTimeout(a)}}
function W(a){var b=n("ytcsi.tick");b&&b(a)}
function la(){W("jse");X()}
function X(){window.clearTimeout(Q);V().start()}
function ma(){var a=V();a.stop();a.D=!0;window.clearTimeout(Q);Q=window.setTimeout(la,P)}
function Y(){window.clearTimeout(R);R=window.setTimeout(function(){W("jset");Z(0)},P)}
function Z(a){Y();var b=V();b.j=a;b.start()}
function na(a){Y();var b=V();b.j>a&&(b.j=a,b.start())}
function oa(){window.clearTimeout(R);var a=V();a.j=0;a.start()}
;n("yt.scheduler.initialized")||(q("yt.scheduler.instance.dispose",fa),q("yt.scheduler.instance.addJob",ia),q("yt.scheduler.instance.addImmediateJob",ja),q("yt.scheduler.instance.cancelJob",ka),q("yt.scheduler.instance.cancelAllJobs",ha),q("yt.scheduler.instance.start",X),q("yt.scheduler.instance.pause",ma),q("yt.scheduler.instance.setPriorityThreshold",Z),q("yt.scheduler.instance.enablePriorityThreshold",na),q("yt.scheduler.instance.clearPriorityThreshold",oa),q("yt.scheduler.initialized",!0));}).call(this);
