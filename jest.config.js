/* eslint-disable no-undef */

module.exports = {
  moduleFileExtensions: ['js', 'json'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    // '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    //   '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  setupFiles: ['jest-canvas-mock'],
  testMatch: ['**/*.(test|spec).(js)'],
  automock: false,
  browser: false,
  bail: false,
  verbose: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!**/node_modules/**'],
  coverageDirectory: '<rootDir>/coverage',
  coveragePathIgnorePatterns: ['/node_modules/', 'enzyme.js'],
  setupFilesAfterEnv: ['<rootDir>/enzyme.js'],
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  globals: {
    __DEV__: true,
  },
};
