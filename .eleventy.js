module.exports = (eleventyConfig) => {
  eleventyConfig.addTransform("minify", require("./transforms/minify"));

  return {
    dir: {
      input: "src",
      output: "www",
    },
  };
};
