module.exports = {
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'jest-preset-angular/preprocessor.js'
  },
  resolver: '@nrwl/builders/plugins/jest/resolver',
  moduleFileExtensions: ['ts', 'js', 'html'],
  collectCoverage: true,
  coverageReporters: ['html'],
  setupTestFrameworkScriptFile: "./test-setup.ts",
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.spec.json'
    },
    __TRANSFORM_HTML__: true
  }
};
