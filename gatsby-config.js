module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content`,
        rootNote: `/home`,
      },
    },
  ],
  siteMetadata: {
    title: `Developers Brain`,
  },
}
