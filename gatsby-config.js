module.exports = {
  plugins: [
    { resolve: `gatsby-plugin-styled-components`, options: { displayName: false } },
    { resolve: `gatsby-plugin-image` },  
    { resolve: `gatsby-plugin-sharp` },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mateuszlazar.github.io`,
        short_name: `mateuszlazar`,
        start_url: `/`,
        icon: `static/favicon.png`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `standalone`,
      },
    },
    { resolve: `gatsby-plugin-offline` },  
  ],
}
