module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|tsx?)$': 'ts-jest',
  },
  coverageProvider: 'v8',
  testPathIgnorePatterns: ['__fixtures__'],
  transformIgnorePatterns: ['node_modules/(?!@x5-react-uikit)'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|sass)$':
      '<rootDir>/jest/fileMock.js',
    '^assets/(.*)': '<rootDir>/src/pages/$1',
    '^shared/(.*)': '<rootDir>/src/shared/$1',
    '^layouts/(.*)': '<rootDir>/src/layouts/$1',
    '^contexts/(.*)': '<rootDir>/src/contexts/$1',
    '^components/(.*)': '<rootDir>/src/components/$1',
    '^hooks/?(.*)': '<rootDir>/src/hooks/$1',
    '^constants/(.*)': '<rootDir>/src/constants/$1',
    uuid: require.resolve('uuid'),
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest/setupTests.js', '<rootDir>/jest/browserMocks.js'],
};
