const minify = require("html-minifier").minify;
const prettier = require("prettier");

module.exports = async (content, outputPath) => {
  const $content = prettier.format(content, { parser: "html" });

  // If this is NOT a production build, return the prettified HTML for easier debugging.
  if (process.env.NODE_ENV !== "production") {
    return $content;
  }

  // Else, let's "aggressively" minify the HTML (and any inlined CSS/JavaScript).
  return minify($content, {
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
    removeComments: true,
    removeOptionalTags: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeTagWhitespace: true,
  });
};
