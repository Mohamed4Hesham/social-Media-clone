module.exports = {
    presets: [
      '@babel/preset-env', // For modern JavaScript features
      ['@babel/preset-react', { runtime: 'automatic' }], // For React JSX support
    ],
  };