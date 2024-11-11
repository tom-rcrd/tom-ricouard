const path = require('path');

module.exports = {
    entry: './src/index.js', // Point d'entrée de l'application
    output: {
        path: path.resolve(__dirname, 'dist'), // Dossier de sortie
        filename: 'bundle.js', // Fichier de sortie
        publicPath: '/',
    },
    mode: 'development', // Mode de développement
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Fichiers JS et JSX
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/, // Fichiers CSS
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/, // Fichiers d'images
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                    },
                },
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'), // Serveur de développement
        compress: true,
        port: 9000,
        historyApiFallback: true, // Gérer l'historique des pages
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Extensions à résoudre
    },
};
