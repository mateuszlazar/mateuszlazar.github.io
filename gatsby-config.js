module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mateuszlazar.github.io`,
        short_name: `mateuszlazar`,
        start_url: `/`,
        icon: `static/favicon.ico`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `standalone`,
      },
    },
    { resolve: `gatsby-plugin-offline` },  
    { resolve: `gatsby-plugin-styled-components`, options: { displayName: false } }
  ],
}
