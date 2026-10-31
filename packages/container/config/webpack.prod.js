const {merge} = require('webpack-merge')
const ModuleFedarationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('../config/webpack.common')
const packageJson = require('../package.json')
const domine = process.env.PRODUCTION_DOMINE

const productionConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
    },
    plugins: [
        new ModuleFedarationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${domine}/marketing/remoteEntry.js`
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, productionConfig);