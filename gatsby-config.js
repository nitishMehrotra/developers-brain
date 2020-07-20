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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Nunito Sans`],
        display: "swap",
      },
    },
  ],
  siteMetadata: {
    title: `🧠 Developers' Brain `,
  },
}
