const eslint = require("eslint");
const fs = require("fs");

module.exports = function getErrors(configFile, fileToTest) {
  const ESLint = eslint.ESLint;
  const instance = new ESLint({
    overrideConfigFile: configFile,
  });

  return instance.lintText(fs.readFileSync(fileToTest, "utf8"));
};
