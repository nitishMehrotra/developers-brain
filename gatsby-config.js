module.exports = {
  siteMetadata: {
    author: `Nitish Mehrotra`,
    description: `Building a 🧠 Developer's Brain around Community, Tools and their day-to-day workflows`,
    head: `🧠 Developers Brain - Digital garden of mental models`,
    image: "assets/icons/icon.png",
    title: `🧠 Developers Brain - Digital garden of mental models`,
    twitterUsername: "@Nitish_Mehrotra",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `assets/icons/icon.png`,
      },
    },
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content`,
        rootNote: `/home`,
        ignore: [
          "./.cache/**",
          "./.git/**",
          "./.vscode/**",
          "./assets/**",
          "./node_modules/**",
          "./public/**",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Nunito Sans\:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i`,
          `Inter\:100,200,300,400,500,600,700,800,900`,
        ],
        display: "swap",
      },
    },
  ],
  siteMetadata: {
    title: `🧠 Developers' Brain`,
  },
}
