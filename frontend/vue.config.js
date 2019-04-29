const apiHost = process.env.API_HOST || 'localhost'
const apiPort = process.env.API_PORT || 9200

const VUE_APP_URL_API = 'http://' + apiHost + (apiPort ? ':' + apiPort : '')

var VUE_APP_TITLE = 'histovec'

module.exports = {
  publicPath: 'http://0.0.0.0/',
  outputDir: 'dist',
  runtimeCompiler: true,
  devServer: {
    public: 'http://0.0.0.0/',
    overlay: true,
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    disableHostCheck: true,
    watchOptions: {
      poll: true
    }
  },

  pluginOptions: {
    lintStyleOnBuild: false,
    stylelint: {},
  },
}
