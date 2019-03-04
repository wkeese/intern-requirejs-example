/*global module */
module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		intern: {
			local: {
				options: {
					config: "@local",
					reporters: "runner"
				}
			},
			sauce: {
				options: {
					config: "@sauce",
					reporters: "runner"
				}
			}
		}
	});

	grunt.loadNpmTasks("intern");
};
