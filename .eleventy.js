const eleventyReadMorePlugin = require("eleventy-plugin-read-more");
const { DateTime } = require("luxon");

module.exports = config => {
    config.addPlugin(eleventyReadMorePlugin);
    config.setTemplateFormats([
        'md',
        'css',
        'png',
        'jpg',
        'html',
        'njk' 

      ]);
      config.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
      });
    config.addPassthroughCopy('src/img/');
    config.addPassthroughCopy('src/css/');
    config.addWatchTarget('src/img/');
    config.addWatchTarget('src/css');
    return {
        dir: {
          pathPrefix: "/whatnotery.github.io/",
            input: 'src',
            output: '_site'
        }
    };
};
