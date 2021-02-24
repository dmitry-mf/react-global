const path = require('path');

module.exports = {
    testEnvironment: 'jsdom',
    resolver: require.resolve(`jest-pnp-resolver`),
    moduleNameMapper: {
        '^@src/(.*)$': path.resolve(__dirname, './src/$1')
    },
    coveragePathIgnorePatterns: ['/node_modules/'],
    testRegex: '\\.test\\.js?$',
    coverageDirectory: 'src',

    bail: 1,
    verbose: true,
    testTimeout: 4000,
}