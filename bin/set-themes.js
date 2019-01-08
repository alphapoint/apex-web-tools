#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

global.window = {};
require(path.join('local', 'config.js'));

let files = fs.readdirSync(path.join('local', 'themes'));
files = files.filter(f => f.split('.').pop() === 'css')
  .map(fileName => fileName.replace('.css', ''));

window.APEXWebConfig.global.themes = files;

const configContent = JSON.stringify(window.APEXWebConfig, null, 2);

fs.writeFileSync(
  path.join('local', 'config.js'),
  `window.APEXConfig = ${configContent};`,
  'utf-8'
);