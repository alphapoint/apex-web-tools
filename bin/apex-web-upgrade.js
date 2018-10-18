#!/usr/bin/env node
const shell = require('shelljs');

shell.cp('-R', 'node_modules/apex-web-tools/static', '.');
shell.cp('node_modules/apex-web-tools/polyfills.js', '.')
