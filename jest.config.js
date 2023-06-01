module.exports = {
  moduleFileExtensions: ['js', 'json', 'vue'],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons']
  },
  moduleNameMapper: {
    '^@root(.*)$': '<rootDir>/src$1',
    '^@components(.*)$': '<rootDir>/src/components$1'
  },
  moduleDirectories: ['node_modules', 'src'],
  transformIgnorePatterns: [],
  transform: {
    '^.+\\.(js|jsx|mjs)$': 'babel-jest',
    '^.+\\.vue$': '@vue/vue3-jest'
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
}
