module.exports = async (content, outputPath) => {
  if (!outputPath.endsWith(".min.js")) {
    return content;
  }

  const minified = await require("terser").minify(content, {});
  return minified.code;
};
