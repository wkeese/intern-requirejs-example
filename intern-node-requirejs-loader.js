// Plugin for intern to load RequireJS on node.
intern.registerLoader(function (options) {
	var requirejs = require("requirejs");
	requirejs.config(options);

	// This is the function Intern will actually call to load modules.
	return function (modules) {
		console.log("load modules ", modules)
		return new Promise(function (resolve, reject) {
			requirejs(modules, function () {
				console.log("loaded", modules)
				resolve();
			}, function (error) {
				reject(error);
			});
		});
	};
});
