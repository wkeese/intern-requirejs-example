define([
	"require"
], function (require) {

	var registerSuite = intern.getPlugin('interface.object').registerSuite;
	var assert = intern.getPlugin('chai').assert;
	var keys = require("@theintern/leadfoot/keys").default;
	var pollUntil = require("@theintern/leadfoot/helpers/pollUntil").default;

	registerSuite("functional1", {
		"functiona1_test1": function () {
			return this.remote
				.get(require.toUrl("./functional.html"))
				.findById("container").getVisibleText().then(function (text) {
						assert.strictEqual(text, "1 + 1 = 2");
					})
		}
	});
});
