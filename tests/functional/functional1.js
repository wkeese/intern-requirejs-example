define([
	"require"
], function (require) {

	var registerSuite = intern.getPlugin('interface.object').registerSuite;
	var assert = intern.getPlugin('chai').assert;
	var keys = require("@theintern/leadfoot/keys");
	var pollUntil = require("@theintern/leadfoot/helpers/pollUntil");

	registerSuite("functional1", {
		"functiona1_test1": function () {
			return this.remote
				.get(require.toUrl("./functional.html"))
				.findByTagName("h1")
					.getVisibleText().then(function (text) {
						assert.strictEqual(text, "Functional test file");
					})
		}
	});
});
