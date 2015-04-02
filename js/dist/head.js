/*
	MSLBoilerplate v4.0.0
	Build:
		Adam Duncan - adam.duncan@mslgroup.com
		Thomas Digby - tom.digby@mslgroup.com
		Marek Muchlinski - marek.muchlinksi@mslgroup.com
		Pete Robelou - pete.robelou@mslgroup.com
		Roberta Piga - roberta.piga@mslgroup.com
	Date: 12/03/2015
*/
/*! loadJS: load a JS file asynchronously. [c]2014 @scottjehl, Filament Group, Inc. (Based on http://goo.gl/REQGQ by Paul Irish). Licensed MIT */
function loadJS(src, cb) {
	"use strict";
	var ref = window.document.getElementsByTagName("script")[0];
	var script = window.document.createElement("script");
	script.src = src;
	script.async = true;
	ref.parentNode.insertBefore(script, ref);
	if (cb && typeof (cb) === "function") {
		script.onload = cb;
	}
	return script;
}
;window.Modernizr=function(e,t,n){function x(e){f.cssText=e}function T(e,t){return x(prefixes.join(e+";")+(t||""))}function N(e,t){return typeof e===t}function C(e,t){return!!~(""+e).indexOf(t)}function k(e,t,r){for(var i in e){var s=t[e[i]];if(s!==n)return r===!1?e[i]:N(s,"function")?s.bind(r||t):s}return!1}function L(){i.input=function(n){for(var r=0,i=n.length;r<i;r++)v[n[r]]=n[r]in l;return v.list&&(v.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),v}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "))}var r="2.8.3",i={},s=!0,o=t.documentElement,u="modernizr",a=t.createElement(u),f=a.style,l=t.createElement("input"),c={}.toString,h={svg:"http://www.w3.org/2000/svg"},p={},d={},v={},m=[],g=m.slice,y,b=function(e,n,r,i){var s,a,f,l,c=t.createElement("div"),h=t.body,p=h||t.createElement("body");if(parseInt(r,10))while(r--)f=t.createElement("div"),f.id=i?i[r]:u+(r+1),c.appendChild(f);return s=["&#173;",'<style id="s',u,'">',e,"</style>"].join(""),c.id=u,(h?c:p).innerHTML+=s,p.appendChild(c),h||(p.style.background="",p.style.overflow="hidden",l=o.style.overflow,o.style.overflow="hidden",o.appendChild(p)),a=n(c,e),h?c.parentNode.removeChild(c):(p.parentNode.removeChild(p),o.style.overflow=l),!!a},w=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var r;return b("@media "+t+" { #"+u+" { position: absolute; } }",function(t){r=(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle)["position"]=="absolute"}),r},E={}.hasOwnProperty,S;!N(E,"undefined")&&!N(E.call,"undefined")?S=function(e,t){return E.call(e,t)}:S=function(e,t){return t in e&&N(e.constructor.prototype[t],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(t){var n=this;if(typeof n!="function")throw new TypeError;var r=g.call(arguments,1),i=function(){if(this instanceof i){var e=function(){};e.prototype=n.prototype;var s=new e,o=n.apply(s,r.concat(g.call(arguments)));return Object(o)===o?o:s}return n.apply(t,r.concat(g.call(arguments)))};return i}),p.svg=function(){return!!t.createElementNS&&!!t.createElementNS(h.svg,"svg").createSVGRect};for(var A in p)S(p,A)&&(y=A.toLowerCase(),i[y]=p[A](),m.push((i[y]?"":"no-")+y));return i.input||L(),i.addTest=function(e,t){if(typeof e=="object")for(var r in e)S(e,r)&&i.addTest(r,e[r]);else{e=e.toLowerCase();if(i[e]!==n)return i;t=typeof t=="function"?t():t,typeof s!="undefined"&&s&&(o.className+=" "+(t?"":"no-")+e),i[e]=t}return i},x(""),a=l=null,i._version=r,i.mq=w,i.testStyles=b,o.className=o.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(s?" js "+m.join(" "):""),i}(this,this.document);