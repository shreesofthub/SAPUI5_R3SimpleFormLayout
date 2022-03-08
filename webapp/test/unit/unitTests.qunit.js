/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"r3_simpleformlayout/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
