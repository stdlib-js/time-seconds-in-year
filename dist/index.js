"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=a(function(m,i){
var s=require('@stdlib/assert-is-date-object/dist'),n=require('@stdlib/assert-is-integer/dist').isPrimitive,u=require('@stdlib/assert-is-leap-year/dist'),o=require('@stdlib/time-current-year/dist'),v=require('@stdlib/error-tools-fmtprodmsg/dist'),c=31536e3,f=31622400;function g(e){var r;if(arguments.length)if(s(e))r=e.getFullYear();else if(n(e))r=e;else throw new TypeError(v('1QXDx',e));else r=o();return u(r)?f:c}i.exports=g
});var q=t();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
