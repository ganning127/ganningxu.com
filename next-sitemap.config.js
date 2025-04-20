// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ganningxu.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,

  transform: async (config, path) => {
    // Customize priority per route
    let priority = 0.7; // default

    if (path === '/') {
      priority = 1.0;
    } else if (path.startsWith('/projects')) {
      priority = 0.9;
    } else if (path.startsWith('/cycling')) {
      priority = 0.7;
    }

    return {
      loc: path,
      changefreq: 'monthly',
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
