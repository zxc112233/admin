import{as as y,at as O,au as M,X as _,av as P,aw as g,ax as l,ay as C,az as I,aA as L}from"./index.0d073eaa.js";import{g as d}from"./get.49a42f2e.js";function w(n){return function(r){return r==null?void 0:r[n]}}var D=1,G=2;function m(n,r,e,t){var i=e.length,a=i,o=!t;if(n==null)return!a;for(n=Object(n);i--;){var f=e[i];if(o&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++i<a;){f=e[i];var u=f[0],s=n[u],A=f[1];if(o&&f[2]){if(s===void 0&&!(u in n))return!1}else{var R=new y;if(t)var E=t(s,A,u,n,r,R);if(!(E===void 0?O(A,s,D|G,t,R):E))return!1}}return!0}function h(n){return n===n&&!M(n)}function F(n){for(var r=_(n),e=r.length;e--;){var t=r[e],i=n[t];r[e]=[t,i,h(i)]}return r}function p(n,r){return function(e){return e==null?!1:e[n]===r&&(r!==void 0||n in Object(e))}}function c(n){var r=F(n);return r.length==1&&r[0][2]?p(r[0][0],r[0][1]):function(e){return e===n||m(e,n,r)}}var x=1,S=2;function K(n,r){return P(n)&&h(r)?p(g(n),r):function(e){var t=d(e,n);return t===void 0&&t===r?l(e,n):O(r,t,x|S)}}function N(n){return function(r){return C(r,n)}}function T(n){return P(n)?w(g(n)):N(n)}function b(n){return typeof n=="function"?n:n==null?I:typeof n=="object"?L(n)?K(n[0],n[1]):c(n):T(n)}export{b};