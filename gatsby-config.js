/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/img`,
        name: 'img'
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ],
  siteMetadata: {
    title: 'The Story of Beep',
  },
}
