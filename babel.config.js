module.exports = {
  presets: [['@babel/preset-env']],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@': './src'
        }
      }
    ]
  ],
  env: {
    test: {
      presets: [['@babel/preset-env']]
    }
  }
}
