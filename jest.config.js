// https://github.com/thymikee/jest-preset-angular#brief-explanation-of-config
module.exports = {
  preset: 'jest-preset-angular',
  roots: ['projects/ngx-bdir'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  transformIgnorePatterns: ['node_modules/(?!(jest-test))']
};
