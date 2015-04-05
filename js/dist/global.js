/*
	EnoraThepaut v1.0.0
	Build:
		Adam Duncan - mail@adamduncandesigns.com
	Date: 06/04/2015
*/
//----------------------------------------------------------------------
//	MASTER JS
//
//----------------------------------------------------------------------

//	Set client specific settings
var ClientSettings = {
	bpLap: 43.75, // 700px
	bpDesk: 56.25 // 900px
};


var Constants = {
	root: document.getElementsByTagName('html')[0]
};


var Nav = {

	container: document.getElementById('container-nav-primary'),
	header: document.getElementById('site-header'),
	btnOpen: document.getElementById('btn-nav-open'),
	btnClose: document.getElementById('btn-nav-close'),
	toggleClass: 'nav-is-visible',

	init: function () {
		Nav.bindOpenEvent();
	},

	bindOpenEvent: function () {
		Nav.btnOpen.addEventListener('click', Nav.openNav, false);
	},

	unbindOpenEvent: function () {
		Nav.btnOpen.removeEventListener('click', Nav.openNav, false);
	},

	bindCloseEvent: function () {
		Nav.btnClose.addEventListener('click', Nav.closeNav, false);
	},

	unbindCloseEvent: function () {
		Nav.btnClose.removeEventListener('click', Nav.closeNav, false);
	},

	openNav: function () {
		Constants.root.classList.add(Nav.toggleClass);
		Nav.bindCloseEvent();
	},

	closeNav: function () {
		Constants.root.classList.remove(Nav.toggleClass);
		Nav.unbindCloseEvent();
	}

};


//	Run
Nav.init();
