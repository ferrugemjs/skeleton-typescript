var path = require('path');

module.exports = {
    entry: './app/app.ts',
    output: {
        path: path.resolve(__dirname, './public'), 
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './',
        port: 3333
    },
    module: {
        loaders: [
			{
				test: /\.ts$/,
				loader: 'ts-loader'
			}
			,{ test: /\.html$/,loader:'ferrugemjs-loader'}
			,{
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
            ,{
    			test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
   				loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
			}
		]
    }
	,resolve: {
		extensions: [".ts",".html",".js"]
		,alias:{    		
			"app":path.resolve(__dirname, './app')
			,"root_app":path.resolve(__dirname, './app')
			,"ferrugemjs":"ferrugemjs/dist/core"
			,"ferrugemjs-router":"ferrugemjs-router/dist/router"
		}    
	}
}
