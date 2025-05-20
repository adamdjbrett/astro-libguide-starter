import eleventyPluginBundle from "@11ty/eleventy-plugin-bundle";
import eleventyPluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default function(eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(eleventyPluginBundle);
  eleventyConfig.addPlugin(eleventyPluginSyntaxHighlight);

  // Static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("public");

  // Watch targets
  eleventyConfig.addWatchTarget("./src/styles/");

  // Collections
  eleventyConfig.addCollection("guides", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/guides/*.md");
  });

  eleventyConfig.addCollection("librarians", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/librarians/*.md");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
}