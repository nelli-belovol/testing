/** @type {import('jest').Config} */
const config = {
  verbose: true,
  collectCoverage: true, //сбор информации о покрытии тестами кода
  collectCoverageFrom: [
    //файлы, которые будут исследованы при сборе информации о покрытии тестами кода
    '<rootDir>/src/**/*.{js,jsx}',
    '!**/node_modules/**', // !- отметить что мы не хотим включать в проверку
    '!<rootDir>/src/**/*.mock.*',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};

module.exports = config;
