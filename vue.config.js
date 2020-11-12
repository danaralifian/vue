module.exports = {
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  },
  devServer: {
    proxy: {
      '/V1': {
          target: 'https://simple-api-mongodb.herokuapp.com',
          ws: true,
          changeOrigin: true
      }
    }
  }
};
