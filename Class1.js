define([
	"dcl/dcl"
], function (
	dcl
) {
	// Test module for testing intern and RequireJS.
	return dcl({
		add: function(a, b) {
			return a + b;
		},
		subtract: function(a, b) {
			return a - b;
		}
	});
})
