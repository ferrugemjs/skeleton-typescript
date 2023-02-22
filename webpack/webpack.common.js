const path = require('path');

const polyfills = {
    // "@ferrugemjs/library": "@ferrugemjs/library/dist",
    // "@ferrugemjs/library/component-factory": "@ferrugemjs/library/dist/component-factory",
    // "@ferrugemjs/library/platform": "@ferrugemjs/library/dist/platform",
}

module.exports = {
    mode: 'production',
    entry: {
        app: ['./app/app.ts'],
        ...polyfills,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                loader: '@ferrugemjs/loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.html'],
    },
    output: {
        path: path.resolve(__dirname, '../public'),
        filename: '[name]-bundle.js'
    },
}