define([
	"require"
], function (require) {

	var registerSuite = intern.getPlugin('interface.object').registerSuite;
	console.log("registerSuite is", registerSuite)
	var assert = intern.getPlugin('chai').assert;

	registerSuite("functional1", {
		"functiona1_test1": function () {
			return this.remote
				.get(require.toUrl("./functional.html"));
		}
	});
});
