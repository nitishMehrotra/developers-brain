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
    title: `workflows.collab - Second Brain 🧠 around building software`,
  },
}
