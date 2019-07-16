# Helper script to remove unwanted newlines
# Usage:
#   find . -name '*.js' -exec perl -0777 -pi newlines.perl {} \;

# Clear trailing whitespace
s/[ \t]+$//gm;

# Delete blank lines after opening braces and before closing braces.
s/\{[\n]+/{\n/gms;
s/[\n]+(\s+\})/\n$1/gms;

