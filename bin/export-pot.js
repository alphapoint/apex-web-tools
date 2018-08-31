#!/usr/bin/env node
const fs = require('fs-extra');
const shell = require('shelljs');
const path = require('path');

const tempFile = path.join('tmp', 'KYCTextValues.js');
const configFile = path.join(process.cwd(), 'local', 'config.js');


function createTempFileForKYCTextValues() {
  require(configFile);
  const {KYC} = window.APEXConfig;

  const stringsFromKyc = extractStrings(KYC);

  const result = [...stringsFromKyc].map(element => {
    return `// this.context.t('${element}')`;
  });

  fs.outputFileSync(tempFile, result.join('\n'));
}

function extractStrings(obj) {
  const result = new Set();

  for (let key in obj) {
    const value = obj[key];

    if (typeof (value) === 'string') {
      result.add(value);
    }

    if (typeof (value) === 'object') {
      const values = extractStrings(value);
      values.forEach(element => {
        result.add(element);
      })
    }
  }

  return result;
}

function cleanUp() {
  fs.removeSync('tmp');
  fs.removeSync(path.join('locales', 'template.pot'));
}

function init() {
  global.window = {};

  try {
    cleanUp();

    createTempFileForKYCTextValues();

    const kycContent = fs.readFileSync(tempFile, 'utf8');

    if(kycContent) {
      shell.exec('i18n_extract --source=tmp');
      shell.exec(`pot-merge -a static/app.pot -b locales/template.pot -o local/translation/template.pot`);
    } else {
      const appPotPath = path.join("static", "app.pot");
      const templatePotPath = path.join("local", "translation", "template.pot");

      fs.copySync(appPotPath, templatePotPath);
    }

  } finally {
    cleanUp()
  }
}

init();