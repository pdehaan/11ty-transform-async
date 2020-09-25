module.exports = (eleventyConfig) => {
  eleventyConfig.addTransform("jsmin", require("./transforms/jsmin"));
  eleventyConfig.addTransform("htmlmin", require("./transforms/htmlmin"));

  return {
    dir: {
      input: "src",
      output: "www",
    },
  };
};
