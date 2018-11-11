const path = require('path');
const fs = require('fs');

// Pulled from https://gist.github.com/tkihira/2367067
module.exports = function rmdir (dir) {
  let list = fs.readdirSync(dir);
  for (let i = 0; i < list.length; i++) {
    let filename = path.join(dir, list[i]);
    let stat = fs.statSync(filename);

    if (filename === '.' || filename === '..') {
      // pass these files
    } else if (stat.isDirectory()) {
      // rmdir recursively
      rmdir(filename);
    } else {
      // rm fiilename
      fs.unlinkSync(filename);
    }
  }
  fs.rmdirSync(dir);
};
