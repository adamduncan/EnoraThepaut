/*
	EnoraThepaut v1.0.0
	Build:
		Adam Duncan - mail@adamduncandesigns.com
	Date: 30/03/2015
*/
// Avoid `console` errors in browsers that lack a console.
(function () {
	var method;
	var noop = function () { };
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());
(function($) {

var $event = $.event,
	$special,
	resizeTimeout;

$special = $event.special.debouncedresize = {
	setup: function() {
		$( this ).on( "resize", $special.handler );
	},
	teardown: function() {
		$( this ).off( "resize", $special.handler );
	},
	handler: function( event, execAsap ) {
		// Save the context
		var context = this,
			args = arguments,
			dispatch = function() {
				// set correct event type
				event.type = "debouncedresize";
				$event.dispatch.apply( context, args );
			};

		if ( resizeTimeout ) {
			clearTimeout( resizeTimeout );
		}

		execAsap ?
			dispatch() :
			resizeTimeout = setTimeout( dispatch, $special.threshold );
	},
	threshold: 150
};

})(jQuery);
(function ($) {

var $event = $.event,
	$special,
	dummy = { _: 0 },
	frame = 0,
	wasScrolled,
	animRunning,
	interval = 100;

$special = $event.special.throttledscroll = {
	setup: function () {
		$(this).on("scroll", $special.handler);
	},
	teardown: function () {
		$(this).off("scroll", $special.handler);
	},
	handler: function (event, execAsap) {

		// Save the context
		var context = this,
			args = arguments;

		wasScrolled = true;

		if (!animRunning) {

			setInterval(function () {

				frame++;

				if (frame > $special.threshold && wasScrolled || execAsap) {
					// set correct event type
					event.type = "throttledscroll";
					$event.dispatch.apply(context, args);
					wasScrolled = false;
					frame = 0;
				}

				if (frame > 9) {
					$(dummy).stop();
					animRunning = false;
					frame = 0;
				}
			}, interval);

			animRunning = true;
		}
	},
	threshold: 0
};

})(jQuery);
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
var Links = {

	selector: '[data-target]',
	targetNewWindow: 'new-window',
	targetPageTop: 'page-top',
	targetOnPage: 'on-page',
	targetSkip: 'skip',
	$viewport: $('html, body'),

	offsetValue: 0,
	scrollDuration: 750,
	easing: 'linear',

	init: function () {

		// detect selector and bind click event
		if ($(this.selector).length) {
			this.bindClick();
		}
	},

	// bind events
	bindClick: function () {

		// bind click event on any selector
		$(this.selector).on('click.link', function (e) {

			var $this = $(this);

			// run click event
			Links.clickEvent($this);
			e.preventDefault();
		});
	},
	clickEvent: function ($this) {

		// get href and type of link
		var href = $this.attr('href'),
			target = $this.data('target');

		// match target and run relevant function
		switch (target) {
			case this.targetNewWindow:
				this.newWindow(href);
				break;
			case this.targetOnPage:
				this.onPage(href);
				break;
			case this.targetSkip:
				this.skip(href);
				break;
			case this.targetPageTop:
				this.pageTop();
				break;
			default: {
				break;
			}
		}
	},

	// targets
	newWindow: function (href) {

		// window params
		var height = 420,
			width = 500,
			scrollBars = 'no',
			resizable = 'yes',
			params = 'width=' + width + ', height=' + height + ', scrollbars=' + scrollBars + ', resizable=' + resizable + '';

		// open new window with params
		window.open(href, 'popup', params);
	},
	onPage: function (href, $this) {

		try {
			// scroll to offset of target
			this.$viewport.stop().animate({
				scrollTop: Math.ceil($(href).offset().top) - this.offsetValue
			}, this.scrollDuration, this.easing).promise().then(function () {
				// callback
			});
		} catch (e) { }
	},
	pageTop: function () {

		// scroll to top
		this.$viewport.stop().animate({
			scrollTop: 0
		}, this.scrollDuration, this.easing).promise().then(function () {
			// callback
		});
	},
	skip: function (href) {

		try {
			// focus accessibility links
			$(href).attr('tabindex', '-1').focus();
		} catch (e) { }
	}
};

Links.init();

var Utilities = {

	selectorInput: '[data-input-clear]',

	init: function () {
		this.buttonBlur();
		this.inputClear();
	},

	// events
	buttonBlur: function () {
		if ($('button').length) {
			// on mouseout of button, un focus button. Firefox fix.
			$('html.button-blur').on('mouseout', 'button', function () {
				$(this).blur();
			});
		}
	},
	inputClear: function () {

		// test for clearable inputs
		if ($(this.selectorInput).length) {

			// set JS clearing fallback
			$(this.selectorInput).each(function () {

				// set original value once
				var $this = $(this),
					value = $this.attr('value');

				// test for placeholder support
				if (!Modernizr.input.placeholder) {

					// bind focus and blur events to hide and show value
					$this.on({
						focus: function () {
							if ($this.attr('value') === value) {
								$this.attr('value', '');
							}
						},
						blur: function () {
							if (!$this.attr('value')) {
								$this.attr('value', value);
							}
						}
					});

				} else {

					// add placeholder attr and remove value attr (prevents override of placeholder)
					$this.attr('placeholder', value).removeAttr('value');
				}
			});
		}
	},

	// executables
	goToUrl: function (url) {
		// set window location to passed url
		window.location.href = url;
	},

	// return
	getQueryParams: function () {

		var vars = [],
			hash,
			hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

		for (var i = 0; i < hashes.length; i++) {
			hash = hashes[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}

		return vars;
	},
	getQueryParameterByName: function (name) {

		name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');

		var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
			results = regex.exec(location.search);

		return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
	}
};

Utilities.init();

//----------------------------------------------------------------------
//	MASTER JS
//
//----------------------------------------------------------------------

//	Set client specific settings
var ClientSettings = {
	bpLap: 50, // 800px
	bpDesk: 75 // 1200px
};


//	Run
var Master = {

	ready: function () {
		// Called on document ready
	},

	load: function () {
		// Called on window load
	}
};

//	document ready
$(document).ready(Master.ready());

//	window load
$(window).on('load', Master.load());
