# Helper script to upgrade tests from Intern 3 to Intern 4.
# Only works on tests that were written in the CommonJS-ish form of AMD,
# i.e. the form where it calls require() to get each module.
# Also doesn't handle tests with lifecycle methods.
#
# Usage:
#   find . -name '*.js' -exec perl -0777 -pi convert.perl {} \;

# Some of our files have ^M in them for some reason...
s/^M//;

# Intern is now a global, so no require() needed.
s/[ \t]*var intern = require.['"]intern['"].\;[ \t]*//;

# Intern plugins
s/require..intern\/chai\!assert../intern.getPlugin\("chai"\).assert/g;
s/require.['"]intern\!object['"]./intern.getPlugin("interface.object").registerSuite/g;

# Leadfoot files
s/intern\/dojo\/node!leadfoot/@theintern\/leadfoot/g;
s-require.*keys"\)-require("\@theintern/leadfoot/keys").default-;
s-require.*pollUntil"\)-require("\@theintern/leadfoot/helpers/pollUntil").default-;

# Move test suite name from the hash to the first argument to registerSuite().
s/registerSuite\((.*?return\s*\{)\s*["']?name["']?:\s*(['"][^'"]+['"]),/registerSuite($2, $1/gs;

# Rename setup() to before(), teardown() to after()
s/["']?setup["']?:/before:/;
s/["']?teardown["']?:/after:/;
