module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `assets/icons/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content`,
        rootNote: `/home`,
        ignore: [
          "**/.cache/**",
          "**/.git/**",
          "**/.vscode/**",
          "**/assets/**",
          "**/node_modules/**",
          "**/public/**",
        ],
      },
    },
  ],
  siteMetadata: {
    title: `Developers Brain 🧠`,
  },
}
