const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js')

module.exports = config => {
  // Set directories to pass through to the dist folder
  config.addPassthroughCopy('./src/images/');
  // Returns work items, sorted by display order
  config.addCollection('work', collection => 
    sortByDisplayOrder( collection
      .getFilteredByGlob('./src/work/*.md')
  ) )
  config.addCollection('featuredWork', collection => 
    sortByDisplayOrder( collection
      .getFilteredByGlob('./src/work/*.md')
      .filter( x => x.data.featured )
  ) )
  // returns a collection of blog posts in reverse date order
  config.addCollection('blog', collection =>
    [...collection.getFilteredByGlob('./src/posts/*.md')].reverse()
  )
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      includes: '_components',
      input: 'src',
      output: 'dist'
    }
  };
};

