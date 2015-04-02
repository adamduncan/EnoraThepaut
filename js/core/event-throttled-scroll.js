/*
 * Throttled scroll event - based on throttled resize by @louis_remi
 */
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