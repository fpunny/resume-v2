const { description } = require('./package.json');
require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Resume`,
    blurb: `Yet another front-end developer`,
    author: `Frederic Pun`,
    description,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `frederic-pun-resume`,
        short_name: `fpunny-resume`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#41c2c9`,
        display: `minimal-ui`,
        icon: `src/logo.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: Object.assign(
          {
            camelCase: false,
          },
          process.env.NODE_ENV === `production` && {
            localIdentName: `[hash:base32:4]`,
          },
        ),
      },
    },
  ],
};
