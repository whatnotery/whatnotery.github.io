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
        'njk',
        'CNAME' 

      ]);
      config.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
      });
    //config.addPassthroughCopy('src/img/');
    //config.addPassthroughCopy('src/css/');
    config.addPassthroughCopy('src/admin')
    config.addPassthroughCopy('src/CNAME');
    config.addWatchTarget('src/img/');
    config.addWatchTarget('src/css');
    return {
        dir: {
            input: 'src',
            output: '_site'
        }
    };
};
