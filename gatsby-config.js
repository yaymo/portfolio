module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            subsets: [`latin`]
          },
          {
            family: `Roboto Mono`,
            variants: [`400`, `700`]
          }
        ]
      }
    }
  ]
};
