// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-date-object@v0.1.1-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-leap-year@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/time-current-year@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function n(n){var d;if(arguments.length)if(e(n))d=n.getFullYear();else{if(!t(n))throw new TypeError(i("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",n));d=n}else d=r();return s(d)?31622400:31536e3}export{n as default};
//# sourceMappingURL=index.mjs.map
