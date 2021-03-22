const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

// const BabelMultiTargetPlugin = require('webpack-babel-multi-target-plugin').BabelMultiTargetPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
// const PrerenderSPAPlugin = require('prerender-spa-plugin');
// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = merge(common('production'), {
  output: {
    // publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(ts|js)$/,
        loader: 'babel-loader',
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        )
      }
    ]
  },
  plugins: [
    // new PrerenderSPAPlugin({
    //   staticDir: path.join(__dirname, 'dist'),
    //   routes: generatePaths(),
    //   renderer: new Renderer({
    //     injectProperty: '__PRERENDER_INJECTED',
    //     inject: {
    //       prerender: String(true)
    //     },
    //     headless: false,
    //     renderAfterDocumentEvent: 'app-loaded',
    //     renderAfterTime: 5000,
    //     args: [
    //       '--disable-web-security',
    //     ],
    //   }),
    //   postProcess (context) {
    //     // To remove the trailing slash
    //     if (!context.route.endsWith('/')) {
    //       context.outputPath = path.join(__dirname, 'dist', `${context.route}.html`)
    //     }

    //     // Remove all webpack bundle scripts (injected manually by embedded inject script)
    //     //    anything except path or end of src \/                \/ no more path segements
    //     const re = /<script.*? src="https?:\/\/[^\/"]*?\/bundle\/[^\/"]*?\.(?:chunk|bundle)\.js".*?<\/script>/gm
    //     context.html = context.html.split(re).join('')
    //       .replace(/http:\/\/content.local:8000/g, 'https://pfiers.net')
    //       .replace(/http:\/\/dist.local:8000/g, 'https://pfiers.net')
    //       .replace(/http:\/\/localhost:8000/g, 'https://pfiers.net')
    //     return context
    //   },
    // }),
    // new BabelMultiTargetPlugin({
    //   babel: {
    //     presetOptions: {
    //       'corejs': 3,
    //       'useBuiltIns': 'entry'
    //     }
    //   }
    // }),
    new HtmlWebpackPlugin({
      template: 'index.ejs',
      filename: 'index.html',
      // chunks: ['inject'],
      excludeChunks: ['main.modern'],
      inlineSource: '.(js|css)$'
    }),
    // new HtmlWebpackInlineSourcePlugin(),
    new CleanWebpackPlugin(),
    // {
    //   apply(compiler) {
    //     compiler.hooks.emit.tapPromise(
    //       'FlattenSvgPlugin',
    //       () => {
    //         console.log('flattening')
    //         svgDirPath = path.resolve(__dirname, "dist/static/tech-icons")
    //         return flattenSvgDir(svgDirPath)
    //       }
    //     );
    //   }
    // },
    new CopyPlugin({
      patterns: [
        { from: '../content', to: 'content' },
        { from: 'assets', to: 'assets' },
        { from: 'dev.html', to: 'dev/index.html' },
      ]
    })
  ]
});
