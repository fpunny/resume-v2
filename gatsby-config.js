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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/logo.svg`,
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
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
  ],
}
