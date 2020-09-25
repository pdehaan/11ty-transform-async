const extname = require("path").extname;

const htmlmin = require("./htmlmin");
const jsmin = require("./jsmin");

module.exports = async (content, outputPath) => {
  const ext = extname(outputPath);
  switch (ext) {
    case ".html":
      return htmlmin(content, outputPath);
    case ".js":
      return jsmin(content, outputPath);
    default:
      return content;
  }
};
