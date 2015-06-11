var dest = '../public',
  src = './src',
  mui = './node_modules/material-ui/src';

module.exports = {
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, src]
    },
    files: [
      dest + '/**', dest +'/javascripts',dest +'/images',dest +'/stylesheets'
    ]
  },
  less: {
    src: src + '/styles/less/material-ui.less',
    watch: [
      src + '/styles/less/**',
      mui + '/styles/less/**'
    ],
    dest: dest + '/stylesheets'
  },
  image: {
    src: src + '/images/**',
    dest: dest + '/images'
  },
  css: {
    src: src + '/styles/css/**',
    dest: dest + '/stylesheets'
  },
  javascripts: {
    src: src + '/javascripts/**',
    dest: dest + '/javascripts'
  },
  markup: {
    src: src + "/views/**",
    dest: dest
  },
  browserify: {
    // Enable source maps
    debug: true,
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/app/app.jsx',
      dest: dest + '/javascripts',
      outputName: 'app.js'
    }]
  }
};
