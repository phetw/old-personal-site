module.exports = {
  exportPathMap: async function(defaultPathMap) {
    return {
      '/': { page: '/' }
    }
  },
  assetPrefix: 'minimal-dark-web-design',
  webpack: (config, { dev }) => {
    config.module.rules = config.module.rules.map(rule => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })
    return config
  }
}
