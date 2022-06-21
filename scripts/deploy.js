const ghpages = require('gh-pages');



ghpages.publish('./build', {
  branch: 'gh-pages',
  repo: 'https://github.com/grabcoinclub/dex.git'
}, (error) => {
  if (error) {
    console.error(error);
  }
});
