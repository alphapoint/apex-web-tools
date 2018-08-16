const fs = require('fs');
const shell = require('shelljs');
const path = require('path');

const translationsFile = path.join('local', 'translation', 'translations.js');


function init() {
  const header = 'window.APEXTranslations = ';
  try {

    shell.exec('npm run import-po');

    const translationsContent = fs.readFileSync(translationsFile, 'utf8');

    if(translationsContent) {
      const idx = translationsContent.indexOf('{');
      const newContent = header + translationsContent.substring(idx);

      fs.writeFileSync(translationsFile, newContent);
    }

  } catch(e) {
    console.error(e);
  }
}

init();