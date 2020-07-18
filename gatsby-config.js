module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content`,
        rootNote: `/inbox`,
      },
    },
  ],
  siteMetadata: {
    title: `Workspace`,
  },
}
