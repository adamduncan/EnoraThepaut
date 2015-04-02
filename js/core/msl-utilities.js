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
