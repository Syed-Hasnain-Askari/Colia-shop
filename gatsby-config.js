// Define site URL here
let URL;
if (process.env.NODE_ENV === 'production') {
  URL = 'https://frosty-goldwasser-fdb81f.netlify.app/';
} else {
  URL = 'http://localhost:8000';
}

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Gatsby Ecommerce Demo`,
    description: `Your next ecommerce Gatsby site powered with Contentful and Snipcart.`,
    author: `Subhnan Akram`,
    siteUrl: URL,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
			resolve: 'gatsby-plugin-snipcart',
			options: {
				apiKey: process.env.SNIPCART_APIKEY,
        autopop: true,
        js: 'https://cdn.snipcart.com/themes/v3.0.0/default/snipcart.js',
        styles: 'https://cdn.snipcart.com/themes/v3.0.0/default/snipcart.css',
      }
		},
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`poppins:300,400,500,600,700`],
        display: "swap",
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
