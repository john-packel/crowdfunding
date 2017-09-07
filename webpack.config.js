const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: ['./app/js/app.js','./app/js/vendor/lightwallet.js','./app/js/vendor/hooked-web3-provider.js'],
    angular: ['./app/js/vendor/angular.js','./app/js/vendor/angular-route.js','./app/js/vendor/angular-datepicker.js'],
    jquery: ['./app/js/vendor/jquery.js'],
    bootstrap: ['./app/js/vendor/bootstrap.js'],
    ProjectService: ['./app/services/ProjectService.js'],
    AccountsService: ['./app/services/AccountsService.js'],
    ProjectListController: ['./app/controllers/ProjectListController.js'],
    MyProjectsController: ['./app/controllers/MyProjectsController.js'],
    CreateProjectController: ['./app/controllers/CreateProjectController.js'],
    ProjectDetailsController: ['./app/controllers/ProjectDetailsController.js']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  plugins: [
    // Copy our app's index.html to the build folder.
    new CopyWebpackPlugin([
      { from: './app/views/index.html', to: "index.html" },
      { from: './app/views/projects.html', to: "projects.html" },
      { from: './app/views/createProject.html', to: "createProject.html" },
      { from: './app/views/projectDetails.html', to: "projectDetails.html" },
      { from: './app/css/bootstrap.css', to: "css/bootstrap.css" },
      { from: './app/css/angular-datepicker.css', to: "css/angular-datepicker.css" }
    ])
  ],
  module: {
    rules: [
      {
       test: /\.css$/,
       use: [ 'style-loader', 'css-loader' ]
      }
    ],
    loaders: [
      { test: /\.json$/, use: 'json-loader' },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['transform-runtime']
        }
      }
    ]
  }
}
