const fs = require("fs");
const eslint = require("eslint");

module.exports = function getErrors(configFile, fileToTest) {
  const ESLint = eslint.ESLint;
  const instance = new ESLint({
    overrideConfigFile: configFile,
  });

  return instance.lintText(fs.readFileSync(fileToTest, "utf8"), {
    filePath: fileToTest,
  });
};
