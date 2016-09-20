module.exports = function(){
  var client = './public/';

  var config = {
    allJs: [
      './public/js/src/**/*.js',
      './*.js',
      './app/**/*.js'
    ],
    css: client + 'css/',
    js: client + 'js/',
    lib: client + 'lib/',
    sass: client + 'css/**/*.scss'
  };

  return config;
};