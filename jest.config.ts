module.exports = {
  testEnvironment: 'jsdom', // Use jsdom for testing React components
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Use ts-jest to handle TypeScript files
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Include the setup file
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy', // Mock CSS imports
  },
  transformIgnorePatterns: [
    'node_modules/(?!(your-package-name|other-esm-package)/)', // Allow specific ESM modules if needed
  ],
};