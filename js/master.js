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
