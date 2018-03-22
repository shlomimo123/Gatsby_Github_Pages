module.exports = {
  // pathPrefix: '../..',
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdownfiles`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-remark`,
  ],
};
