define([
	"dcl/dcl"
], function (
	dcl
) {
	// Unit test example
	var registerSuite = intern.getPlugin('interface.object');
	var assert = intern.getPlugin('chai');


	registerSuite("unit1", {
		unit1_test1: function () {
			assert(dcl, "dcl defined");
		}
	});
});
