//next.config.js

const webpack = require('webpack')

module.exports = {
    webpack: (config, { dev }) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                '$': 'jquery',
                'jQuery': 'jquery',
            })
        )
        return config
    }
}

module.exports = {
  reactStrictMode: true,
  images:{
    domains:["picsum.photos"]
  }
}
