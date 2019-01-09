#!/usr/bin/env node
const path = require('path');
const shell = require('shelljs');
const awtStaticFolder = path.join('node_modules', 'apex-web-tools', 'static');
const awtPolyfills = path.join('node_modules', 'apex-web-tools', 'polyfills.js');
const vendorFolder = path.join('.', 'vendor');
const staticFolder = path.join('.', 'static');

shell.rm('-rf', staticFolder);
shell.cp('-R', awtStaticFolder, '.');
shell.cp(awtPolyfills, vendorFolder);
