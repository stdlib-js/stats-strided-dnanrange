"use strict";var f=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var o=f(function(B,d){
var c=require('@stdlib/math-base-assert-is-nan/dist');function x(e,r,n,s){var v,u,t,a,i;if(e<=0)return NaN;if(e===1||n===0)return c(r[s])?r[s]:0;for(t=s,i=0;i<e&&(a=r[t],a!==a);i++)t+=n;if(i===e)return NaN;for(u=a,v=u,i+=1,i;i<e;i++)t+=n,a=r[t],!c(a)&&(a<u?u=a:a>v&&(v=a));return v-u}d.exports=x
});var p=f(function(C,m){
var R=require('@stdlib/strided-base-stride2offset/dist'),_=o();function b(e,r,n){return _(e,r,n,R(e,n))}m.exports=b
});var j=f(function(D,g){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=p(),E=o();k(y,"ndarray",E);g.exports=y
});var O=require("path").join,h=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=j(),q,l=h(O(__dirname,"./native.js"));w(l)?q=z:q=l;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
