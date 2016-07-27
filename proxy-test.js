var Path = require('path');
 
module.exports.extnameAllCaps = function (file) {
  return Path.extname(file).toUpperCase();
};
 
module.exports.basenameAllCaps = function (file) {
  return Path.basename(file).toUpperCase();
};