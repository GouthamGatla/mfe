const { merge } = require('webpack-merge');
const ModuleFedaratioPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const productionConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new ModuleFedaratioPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp' : './src/bootstrap',
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, productionConfig)