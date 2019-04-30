require('ignore-styles')

require('@babel/register')({
  ignore: [/(node_modules)/],
  presets: [
    [
      // Latest stable ECMAScript features
      "@babel/preset-env",
      {
        // Allow importing core-js in entrypoint and use browserlist to select polyfills
        useBuiltIns: 'entry',
        // Set the corejs version we are using to avoid warnings in console
        // This will need to change once we upgrade to corejs@3
        corejs: 3,
        // Exclude transforms that make all code slower
        exclude: ['transform-typeof-symbol'],
      },
    ],
    [
      "@babel/preset-react"
    ]
  ]
});

require('./app');
