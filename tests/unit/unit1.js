define([
	"intern-requirejs-example/Class1"
], function (
	Class1
) {
	var registerSuite = intern.getPlugin('interface.object').registerSuite;
	var assert = intern.getPlugin('chai').assert;

	registerSuite("unit1", {
		unit1_test1: function () {
			var instance1 = new Class1();
			assert.strictEqual(instance1.add(3, 5), 8, "Class1#add");
			assert.strictEqual(instance1.subtract(5, 3), 2, "Class1#subtract");

			// Test to show that we can still put variables in the intern config.
			assert.strictEqual(intern.config.myCustomVar, 123, "myCustomVar");
		}
	});
});
