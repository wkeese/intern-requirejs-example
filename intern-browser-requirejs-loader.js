// Plugin for intern to load RequireJS, which then loads all the other modules.
intern.registerLoader(function (options) {
	return intern.loadScript("node_modules/requirejs/require.js").then(function () {
		require.config(options);

		// This is the function Intern will actually call to load modules.
		// TODO: Won't work on IE11 since Promise undefined.
		return function (modules) {
			return new Promise(function (resolve, reject) {
				require(modules, function () {
					resolve.apply(null, arguments);
				}, function (error) {
					reject(error);
				});
			});
		};
	});
});
