module.exports = {
    testEnvironment: 'jsdom', // Use jsdom for testing React components
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // Transform JavaScript/JSX files using Babel
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Load custom Jest setup
    moduleNameMapper: {
      '\\.(css|scss|sass)$': 'identity-obj-proxy', // Mock CSS imports
    },
  };
  