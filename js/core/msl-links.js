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
