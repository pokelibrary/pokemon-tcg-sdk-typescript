module.exports = {
  testRegex: '.*\\.test\\.ts$',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testTimeout: 300000,
  moduleNameMapper: {
    '^~/src(.*)$': '<rootDir>/src$1',
    '^~/client$': '<rootDir>/src/client.ts',
    '^~/enums(.*)$': '<rootDir>/src/enums$1',
    '^~/interfaces(.*)$': '<rootDir>/src/interfaces$1',
    '^~/sdk$': '<rootDir>/src/sdk.ts',
    '^~/services(.*)$': '<rootDir>/src/services$1',
  },
};
