module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: `${process.env.NODE_ENV !== 'production' ? '[DEV] ' : ''}Gatsby Eslint Starter`,
    titleTemplate: `${process.env.NODE_ENV !== 'production' ? '[DEV]' : ''}%s - Michele Bruno`,
    description: 'A new awesome website',
    image: '/ident-bumper.jpg', // Path to your image you placed in the 'static' folder
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg[\\/](.*)\.svg$/, // It should match all svg in svg folder
        },
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
