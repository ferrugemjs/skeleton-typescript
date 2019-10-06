var path = require('path');

let packageJson = require('./package.json');
let vendors = Object.keys(packageJson.dependencies);
let polyfills = ['es6-shim','whatwg-fetch','tslib'];

polyfills.forEach(polyKey => {
    let indx = vendors.indexOf(polyKey);
    if(indx > -1){
        vendors.splice(indx,1);
    }    
});



module.exports = {
    entry: {
        // polyfills,
        app:['./app/app.ts']
    },
    output: {
        path: path.resolve(__dirname, './public'), 
        filename: '[name]-bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './',
        port: 3333
    },
    module: {
        rules: [
			{
				test: modulePath => modulePath.endsWith('.ts') && !modulePath.endsWith('.d.ts'),
				loader: 'ts-loader'
            },
            {
                test: /\.pug$/,
                loaders: [
                  { 
                    loader:'ferrugemjs-loader',
                    options:{
                      templateExtension:".pug"
                    } 
                  }
                  ,'pug-loader'
                ]
            },
			{
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
    			test: /\.(d\.ts|eot|woff|woff2|ttf|svg|png|jpg)$/,
   				loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
			}
		]
    }
	,resolve: {
		extensions: [".js",".scss",".ts",".pug"]
		,alias:{    		
			"@": path.resolve(__dirname, './app')
		}    
	}
}
