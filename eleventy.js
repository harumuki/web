const htmlmin = require("html-minifier");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  let markdownIt = require("markdown-it");
  let options = {
    html: true,
    typographer: true
  };
  let markdownLib = markdownIt(options);

  eleventyConfig.setLibrary("md", markdownLib);

  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addPassthroughCopy("static/content/img");
  eleventyConfig.addPassthroughCopy("static/content/fonts");

  eleventyConfig.addFilter("displayDate", require("./static/filters/displayDate.js"));
  eleventyConfig.addFilter(
    "parseDateFromYearMonth",
    require("./static/filters/parseDateFromYearMonth.js")
  );
  eleventyConfig.addFilter(
    "archiveHeaderDate",
    require("./static/filters/archiveHeaderDate.js")
  );
  eleventyConfig.addFilter(
    "blogPermalink",
    require("./static/filters/blogPermalink.js")
  );
  eleventyConfig.addFilter(
    "blogArchivelink",
    require("./static/filters/blogArchivelink.js")
  );
  eleventyConfig.addFilter(
    "archiveMonthDate",
    require("./static/filters/archiveMonthDate.js")
  );
  eleventyConfig.addFilter(
    "photoTag",
    require("./static/filters/photoTag.js")
  );
  eleventyConfig.addFilter(
    "photoTagSingle",
    require("./static/filters/photoTagSingle.js")
  );
  eleventyConfig.addFilter("clockTime", require("./static/filters/clockTime.js"));
  eleventyConfig.addFilter("limit", require("./static/filters/limit.js"));

  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }
    return content;
  });

  return {
    dir: {
      input: "static/content",
      output: "public_html",
      passthroughFileCopy: true
    }
  };
};
